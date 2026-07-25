/**
 * ProgressBar Component
 *
 * Displays the user's XP, lives (hearts), streak, and overall progress
 * in a premium gamified header bar.
 */

"use client";

import { motion } from "framer-motion";
import { useGameStore } from "@/store/useGameStore";

export default function ProgressBar() {
  const { xp, lives, streakDays, getProgressPercentage } = useGameStore();
  const progress = getProgressPercentage();

  return (
    <div className="progress-bar-container">
      {/* XP Badge */}
      <div className="stat-badge xp-badge">
        <span className="stat-icon">⚡</span>
        <div className="stat-info">
          <span className="stat-value">{xp}</span>
          <span className="stat-label">XP</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <span className="progress-text">{progress}%</span>
      </div>

      {/* Lives */}
      <div className="stat-badge lives-badge">
        <div className="hearts-container">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.span
              key={i}
              className={`heart ${i < lives ? "heart-full" : "heart-empty"}`}
              initial={false}
              animate={
                i < lives
                  ? { scale: [1, 1.2, 1], opacity: 1 }
                  : { scale: 1, opacity: 0.3 }
              }
              transition={{ duration: 0.3 }}
            >
              ♥
            </motion.span>
          ))}
        </div>
      </div>

      {/* Streak */}
      {streakDays > 0 && (
        <div className="stat-badge streak-badge">
          <span className="stat-icon">🔥</span>
          <div className="stat-info">
            <span className="stat-value">{streakDays}</span>
            <span className="stat-label">dies</span>
          </div>
        </div>
      )}
    </div>
  );
}
