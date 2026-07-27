/**
 * HintSystem Component
 *
 * Progressive hint reveal system. Each hint is revealed one at a time,
 * and subsequent hints cost XP to discourage over-reliance.
 */

"use client";

import { useState } from "react";
import DynamicIcon from "@/components/DynamicIcon";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

interface HintSystemProps {
  hints: string[];
  /** Optional: callback when a hint is revealed (for XP deduction tracking) */
  onHintRevealed?: (hintIndex: number) => void;
}

export default function HintSystem({ hints, onHintRevealed }: HintSystemProps) {
  const { t } = useTranslation();
  const [revealedCount, setRevealedCount] = useState(0);

  const revealNext = () => {
    if (revealedCount < hints.length) {
      const nextIndex = revealedCount;
      setRevealedCount((prev) => prev + 1);
      onHintRevealed?.(nextIndex);
    }
  };

  const xpCost = revealedCount === 0 ? 0 : revealedCount * 5;

  return (
    <div className="hint-system">
      {/* Revealed hints */}
      <AnimatePresence>
        {hints.slice(0, revealedCount).map((hint, index) => (
          <motion.div
            key={index}
            className="hint-card"
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="hint-number">{t("hint.title", { n: index + 1 })}</span>
            <p className="hint-text">{hint}</p>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Reveal button */}
      {revealedCount < hints.length ? (
        <button className="hint-reveal-btn" onClick={revealNext} type="button">
          <span className="hint-icon"><DynamicIcon name="Lightbulb" size={16} /></span>
          {revealedCount === 0
            ? t("hint.show")
            : t("hint.next", { cost: xpCost })}
          <span className="hint-remaining">
            {t("hint.remaining", { n: hints.length - revealedCount })}
          </span>
        </button>
      ) : (
        <button className="hint-reveal-btn" disabled type="button">
          {t("hint.none")}
        </button>
      )}
    </div>
  );
}
