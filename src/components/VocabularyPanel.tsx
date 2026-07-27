/**
 * VocabularyPanel
 *
 * Side-by-side Spanish ↔ Catalan word reference organized by word type.
 * Each tier has its own vocabulary set with filterable categories.
 */

"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { vocabulary, type WordCategory, type WordGroup } from "@/data/vocabulary";
import { useTranslation } from "@/lib/i18n";
import DynamicIcon from "@/components/DynamicIcon";

/**
 * Speak a Catalan word/phrase using the browser's SpeechSynthesis API.
 * Tries to find a ca-ES voice; falls back to the browser default.
 */
function speakCatalan(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ca-ES";
  utterance.rate = 0.85; // slightly slower for learners
  utterance.pitch = 1;

  // Try to pick a Catalan voice if available
  const voices = window.speechSynthesis.getVoices();
  const catalanVoice = voices.find(
    (v) => v.lang === "ca-ES" || v.lang.startsWith("ca")
  );
  if (catalanVoice) {
    utterance.voice = catalanVoice;
  }

  window.speechSynthesis.speak(utterance);
}

interface VocabularyPanelProps {
  tierLevel: string; // "A1", "A2", etc.
}

export default function VocabularyPanel({ tierLevel }: VocabularyPanelProps) {
  const { t } = useTranslation();
  const tierVocab = vocabulary.find((v) => v.tier === tierLevel);
  const [activeCategory, setActiveCategory] = useState<WordCategory | null>(
    tierVocab?.groups[0]?.category ?? null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);

  const handleSpeak = useCallback((text: string) => {
    setSpeakingWord(text);
    speakCatalan(text);
    // Reset speaking state after a short delay
    setTimeout(() => setSpeakingWord(null), 1200);
  }, []);

  if (!tierVocab || tierVocab.groups.length === 0) {
    return (
      <div className="vocab-empty">
        <span className="vocab-empty-icon">
          <DynamicIcon name="Library" size={48} />
        </span>
        <p>{t("vocab.empty", undefined, "No hay vocabulario disponible para este nivel todavía.")}</p>
      </div>
    );
  }

  const activeGroup = tierVocab.groups.find((g) => g.category === activeCategory);

  const filteredWords = activeGroup?.words.filter((w) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      w.es.toLowerCase().includes(q) ||
      w.ca.toLowerCase().includes(q) ||
      (w.note && w.note.toLowerCase().includes(q))
    );
  });

  return (
    <div className="vocab-panel">
      {/* Search bar */}
      <div className="vocab-search-wrapper">
        <span className="vocab-search-icon">
          <DynamicIcon name="Search" size={18} />
        </span>
        <input
          type="text"
          className="vocab-search"
          placeholder={t("vocab.search", undefined, "Buscar palabra...")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            className="vocab-search-clear"
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
          >
            <DynamicIcon name="X" size={16} />
          </button>
        )}
      </div>

      {/* Category tabs */}
      <div className="vocab-categories">
        {tierVocab.groups.map((group) => (
          <button
            key={group.category}
            className={`vocab-cat-btn ${
              activeCategory === group.category ? "active" : ""
            }`}
            onClick={() => {
              setActiveCategory(group.category);
              setSearchQuery("");
            }}
          >
            <span className="vocab-cat-icon">
              <DynamicIcon name={group.icon as any} size={16} />
            </span>
            <span className="vocab-cat-label">
              {t(`vocab.cat.${group.category}`, undefined, group.label.es)}
            </span>
            <span className="vocab-cat-count">{group.words.length}</span>
          </button>
        ))}
      </div>

      {/* Word list */}
      <AnimatePresence mode="wait">
        {activeGroup && (
          <motion.div
            key={activeCategory}
            className="vocab-word-list"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {/* Table header */}
            <div className="vocab-row vocab-header">
              <span className="vocab-col-es">{t("vocab.header.es", undefined, "Español")}</span>
              <span className="vocab-col-arrow">→</span>
              <span className="vocab-col-ca">{t("vocab.header.ca", undefined, "Català")}</span>
              <span className="vocab-col-audio"></span>
            </div>

            {/* Word rows */}
            {filteredWords && filteredWords.length > 0 ? (
              filteredWords.map((word, i) => (
                <motion.div
                  key={`${word.es}-${word.ca}-${i}`}
                  className={`vocab-row ${word.note ? "has-note" : ""}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: Math.min(i * 0.02, 0.4) }}
                >
                  <span className="vocab-col-es">{word.es}</span>
                  <span className="vocab-col-arrow">→</span>
                  <span className="vocab-col-ca">{word.ca}</span>
                  <button
                    className={`vocab-audio-btn ${speakingWord === word.ca ? "speaking" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpeak(word.ca);
                    }}
                    aria-label={`Listen to "${word.ca}"`}
                    title={t("vocab.listen", undefined, "Escuchar pronunciación")}
                  >
                    <DynamicIcon name="Volume2" size={14} />
                  </button>
                  {word.note && (
                    <span className="vocab-note">{word.note}</span>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="vocab-no-results">
                {t("vocab.noResults", undefined, "No se encontraron palabras.")}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
