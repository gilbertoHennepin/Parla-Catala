/**
 * WritingMode Component
 *
 * The syntax validation interface for written Catalan exercises.
 * Features a controlled textarea with debounced LanguageTool grammar
 * checking, inline error highlighting, hover tooltips with explanations,
 * and clickable replacement buttons.
 */

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Scenario } from "@/data/curriculum";
import { useTranslation } from "@/lib/i18n";
import type { LTMatch } from "@/lib/grammar-highlight";
import {
  parseMatches,
  buildSegments,
  applyReplacement,
  type ErrorHighlight,
  type TextSegment,
} from "@/lib/grammar-highlight";
import { calculateAccuracy, isAcceptable } from "@/lib/levenshtein";
import HintSystem from "./HintSystem";

interface WritingModeProps {
  scenario: Scenario;
  onSubmit: (isCorrect: boolean) => void;
}

export default function WritingMode({ scenario, onSubmit }: WritingModeProps) {
  const { t } = useTranslation();
  const [userText, setUserText] = useState("");
  const [segments, setSegments] = useState<TextSegment[]>([]);
  const [highlights, setHighlights] = useState<ErrorHighlight[]>([]);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{
    correct: boolean;
    accuracy: number;
  } | null>(null);

  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Debounced grammar check
  const checkGrammar = useCallback(async (text: string) => {
    if (!text.trim() || text.trim().length < 3) {
      setHighlights([]);
      setSegments([{ type: "text", content: text }]);
      return;
    }

    setIsChecking(true);
    try {
      const res = await fetch("/api/grammar-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error("Grammar check failed");

      const data: { matches: LTMatch[] } = await res.json();
      const parsed = parseMatches(data.matches, text);
      setHighlights(parsed);
      setSegments(buildSegments(text, parsed));
    } catch {
      // Silently fail — user can still submit
      setHighlights([]);
      setSegments([{ type: "text", content: text }]);
    } finally {
      setIsChecking(false);
    }
  }, []);

  // Trigger grammar check on text change with debounce
  useEffect(() => {
    if (submitted) return;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      checkGrammar(userText);
    }, 800);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [userText, checkGrammar, submitted]);

  // Apply a replacement suggestion
  const handleReplace = (highlight: ErrorHighlight, replacement: string) => {
    const corrected = applyReplacement(userText, highlight, replacement);
    setUserText(corrected);
    setActiveTooltip(null);
  };

  // Submit the answer
  const handleSubmit = () => {
    if (!userText.trim() || submitted) return;

    const accuracy = calculateAccuracy(userText, scenario.expectedAnswer);
    const correct = isAcceptable(accuracy);

    // Also check alternative answers
    const altCorrect = scenario.alternativeAnswers?.some(
      (alt) => isAcceptable(calculateAccuracy(userText, alt))
    );

    const finalCorrect = correct || !!altCorrect;

    setResult({ correct: finalCorrect, accuracy });
    setSubmitted(true);
  };

  const handleContinue = () => {
    if (result) {
      onSubmit(result.correct);
    }
  };

  return (
    <div className="writing-mode">
      {/* Prompt */}
      <div className="scenario-prompt">
        <p className="prompt-label">{t("interaction.prompt.write")}</p>
        <p className="prompt-text">{scenario.promptText}</p>
      </div>

      {/* False friend warning */}
      {scenario.falseFriendWarning && (
        <motion.div
          className="false-friend-warning"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <span className="warning-icon">⚠️</span>
          <p>{scenario.falseFriendWarning}</p>
        </motion.div>
      )}

      {/* Text input area */}
      {!submitted ? (
        <>
          <div className="writing-input-container">
            <textarea
              ref={textareaRef}
              className="writing-textarea"
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              placeholder={t("interaction.placeholder")}
              rows={4}
              autoFocus
            />

            {/* Grammar checking indicator */}
            {isChecking && (
              <div className="grammar-checking-indicator">
                <div className="checking-spinner" />
                <span>{t("interaction.grammar.checking")}</span>
              </div>
            )}
          </div>

          {/* Highlighted preview (shows errors) */}
          {highlights.length > 0 && (
            <div className="highlight-preview">
              <p className="preview-label">
                {highlights.length} error{highlights.length !== 1 ? "s" : ""}{" "}
                detectat{highlights.length !== 1 ? "s" : ""}:
              </p>
              <div className="highlighted-text">
                {segments.map((seg, i) =>
                  seg.type === "text" ? (
                    <span key={i}>{seg.content}</span>
                  ) : (
                    <span
                      key={i}
                      className={`error-highlight ${
                        activeTooltip === seg.highlight?.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setActiveTooltip(
                          activeTooltip === seg.highlight?.id
                            ? null
                            : seg.highlight?.id ?? null
                        )
                      }
                    >
                      {seg.content}

                      {/* Tooltip */}
                      <AnimatePresence>
                        {activeTooltip === seg.highlight?.id &&
                          seg.highlight && (
                            <motion.div
                              className="error-tooltip"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                            >
                              <p className="tooltip-message">
                                {seg.highlight.message}
                              </p>
                              {seg.highlight.replacements.length > 0 && (
                                <div className="tooltip-replacements">
                                  <span className="replacements-label">
                                    Suggeriments:
                                  </span>
                                  {seg.highlight.replacements.map(
                                    (rep, repIdx) => (
                                      <button
                                        key={repIdx}
                                        className="replacement-btn"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleReplace(seg.highlight!, rep);
                                        }}
                                      >
                                        {rep}
                                      </button>
                                    )
                                  )}
                                </div>
                              )}
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          <HintSystem hints={scenario.hints} />

          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={!userText.trim() || isChecking}
          >
            {t("interaction.submit")}
          </button>
        </>
      ) : (
        /* Result screen */
        <motion.div
          className={`result-card ${result?.correct ? "result-success" : "result-error"}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="result-header">
            <span className="result-emoji">
              {result?.correct ? "🎉" : "❌"}
            </span>
            <h3 className="result-title">
              {result?.correct ? t("result.good") : t("result.wrong")}
            </h3>
            <p className="result-accuracy">
              {t("result.accuracy", { acc: result?.accuracy || 0 })}
            </p>
          </div>

          <div className="result-comparison">
            <div className="comparison-row">
              <span className="comparison-label">{t("result.you.wrote")}</span>
              <p className="comparison-text user-text">&ldquo;{userText}&rdquo;</p>
            </div>
            <div className="comparison-row">
              <span className="comparison-label">{t("result.expected")}</span>
              <p className="comparison-text correct-text">
                {scenario.expectedAnswer}
              </p>
            </div>
          </div>

          {scenario.explanationNote && (
            <div className="explanation-note">
              <span className="note-icon">📚</span>
              <p>{scenario.explanationNote}</p>
            </div>
          )}

          <button className="continue-btn" onClick={handleContinue}>
            {result?.correct ? t("result.continue.yes") : t("result.continue.no")}
          </button>
        </motion.div>
      )}
    </div>
  );
}
