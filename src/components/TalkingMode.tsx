/**
 * TalkingMode Component
 *
 * The phonetic assessment interface for conversational Catalan exercises.
 * Features a pulsing recording button (Framer Motion), Web Speech API
 * integration configured for ca-ES, and Levenshtein distance scoring.
 */

"use client";

import { useState, useRef, useCallback } from "react";
import DynamicIcon from "@/components/DynamicIcon";
import { motion, AnimatePresence } from "framer-motion";
import type { Scenario } from "@/data/curriculum";
import { useTranslation } from "@/lib/i18n";
import {
  calculateAccuracy,
  isAcceptable,
  getGrade,
} from "@/lib/levenshtein";
import HintSystem from "./HintSystem";

interface TalkingModeProps {
  scenario: Scenario;
  onSubmit: (isCorrect: boolean) => void;
}

// Type-safe SpeechRecognition access
type SpeechRecognitionType = typeof window extends {
  SpeechRecognition: infer T;
}
  ? T
  : // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any;

function getSpeechRecognition(): SpeechRecognitionType | null {
  if (typeof window === "undefined") return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  return SR ?? null;
}

export default function TalkingMode({ scenario, onSubmit }: TalkingModeProps) {
  const { t } = useTranslation();
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isSupported, setIsSupported] = useState(() => {
    if (typeof window === "undefined") return true; // SSR: assume supported
    return !!getSpeechRecognition();
  });
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{
    correct: boolean;
    accuracy: number;
    grade: string;
  } | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  const startRecording = useCallback(() => {
    const SR = getSpeechRecognition();
    if (!SR) {
      setIsSupported(false);
      return;
    }

    try {
      const recognition = new SR();
      recognition.lang = "ca-ES";
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: { results: { transcript: string }[][] }) => {
        const lastResult = event.results[event.results.length - 1];
        const text = lastResult[0].transcript;
        setTranscript(text);
      };

      recognition.onerror = (event: { error: string }) => {
        console.error("Speech recognition error:", event.error);
        setIsRecording(false);
        if (event.error === "not-allowed") {
          setPermissionDenied(true);
        }
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch {
      setIsSupported(false);
    }
  }, []);

  const stopRecording = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  }, []);

  const handleSubmit = () => {
    if (!transcript.trim() || submitted) return;

    const accuracy = calculateAccuracy(transcript, scenario.expectedAnswer);
    const correct = isAcceptable(accuracy);
    const grade = getGrade(accuracy);

    // Check alternatives
    const altCorrect = scenario.alternativeAnswers?.some((alt) =>
      isAcceptable(calculateAccuracy(transcript, alt))
    );

    const finalCorrect = correct || !!altCorrect;

    setResult({ correct: finalCorrect, accuracy, grade });
    setSubmitted(true);
  };

  const handleContinue = () => {
    if (result) {
      onSubmit(result.correct);
    }
  };

  // Manual text input fallback
  const [manualMode, setManualMode] = useState(false);

  // Unsupported browser fallback
  if (!isSupported || permissionDenied) {
    return (
      <div className="talking-mode">
        <div className="scenario-prompt">
          <p className="prompt-label">{t("interaction.prompt")}</p>
          <p className="prompt-text">{scenario.promptText}</p>
        </div>

        <div className="unsupported-notice">
          <span className="notice-icon"><DynamicIcon name="Mic" size={20} /></span>
          <p>
            {permissionDenied
              ? t("interaction.mic.denied")
              : t("interaction.mic.unsupported")}
          </p>
        </div>

        {/* Fallback to text input */}
        <input
          type="text"
          className="fallback-input"
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          placeholder={t("interaction.placeholder")}
          autoFocus
        />

        {scenario.falseFriendWarning && (
          <div className="false-friend-warning">
            <span className="warning-icon">⚠️</span>
            <p>{scenario.falseFriendWarning}</p>
          </div>
        )}

        <HintSystem hints={scenario.hints} />

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!transcript.trim()}
        >
          {t("interaction.submit")}
        </button>
      </div>
    );
  }

  return (
    <div className="talking-mode">
      {/* Prompt */}
      <div className="scenario-prompt">
        <p className="prompt-label">{t("interaction.prompt")}</p>
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

      {!submitted ? (
        <>
          {/* Recording button */}
          <div className="recording-area">
            <div className="mic-button-container">
              {/* Pulsing radar rings when recording */}
              <AnimatePresence>
                {isRecording && (
                  <>
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={`ring-${i}`}
                        className="radar-ring"
                        initial={{ scale: 0.8, opacity: 0.6 }}
                        animate={{
                          scale: [0.8, 2.5],
                          opacity: [0.6, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.6,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>

              <motion.button
                className={`mic-button ${isRecording ? "recording" : ""}`}
                onClick={isRecording ? stopRecording : startRecording}
                whileTap={{ scale: 0.9 }}
                animate={
                  isRecording
                    ? {
                        boxShadow: [
                          "0 0 0 0 rgba(239, 68, 68, 0.4)",
                          "0 0 30px 10px rgba(239, 68, 68, 0.2)",
                          "0 0 0 0 rgba(239, 68, 68, 0.4)",
                        ],
                      }
                    : {}
                }
                transition={{
                  duration: 1.5,
                  repeat: isRecording ? Infinity : 0,
                }}
              >
                <span className="mic-icon">
                  {isRecording ? <DynamicIcon name="Square" size={24} /> : <DynamicIcon name="Mic" size={24} />}
                </span>
              </motion.button>
            </div>

            <p className="recording-status">
              {isRecording ? t("interaction.recording.listening") : t("interaction.recording.start")}
            </p>
          </div>

          {/* Live transcript */}
          {transcript && (
            <motion.div
              className="transcript-preview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="transcript-label">{t("interaction.transcript.label")}</p>
              <p className="transcript-text">&ldquo;{transcript}&rdquo;</p>
            </motion.div>
          )}

          {/* Manual mode toggle */}
          {!manualMode ? (
            <button
              className="manual-mode-toggle"
              onClick={() => setManualMode(true)}
            >
              {t("interaction.switch.write")}
            </button>
          ) : (
            <div className="manual-input-area">
              <input
                type="text"
                className="fallback-input"
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                placeholder={t("interaction.placeholder")}
                autoFocus
              />
            </div>
          )}

          <HintSystem hints={scenario.hints} />

          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={!transcript.trim()}
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
            <motion.span
              className="result-emoji"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ 
                scale: { type: "spring", stiffness: 500 },
                rotate: { duration: 0.5 }
              }}
            >
              {result?.correct ? <DynamicIcon name="PartyPopper" size={24} /> : <DynamicIcon name="Frown" size={24} />}
            </motion.span>
            <h3 className="result-title">
              {result?.correct ? t("result.excellent") : t("result.almost")}
            </h3>
            <p className="result-accuracy">{t("result.accuracy", { acc: result?.accuracy || 0 })}</p>
            <div className={`grade-badge grade-${result?.grade}`}>
              {result?.grade === "excellent"
                ? t("result.grade.excellent")
                : result?.grade === "good"
                ? t("result.grade.good")
                : result?.grade === "fair"
                ? t("result.grade.fair")
                : t("result.grade.poor")}
            </div>
          </div>

          <div className="result-comparison">
            <div className="comparison-row">
              <span className="comparison-label">{t("result.you.said")}</span>
              <p className="comparison-text user-text">
                &ldquo;{transcript}&rdquo;
              </p>
            </div>
            <div className="comparison-row">
              <span className="comparison-label">{t("result.expected")}</span>
              <p className="comparison-text correct-text">
                &ldquo;{scenario.expectedAnswer}&rdquo;
              </p>
            </div>
          </div>

          {scenario.explanationNote && (
            <div className="explanation-note">
              <span className="note-icon"><DynamicIcon name="BookOpen" size={16} /></span>
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
