/**
 * ScenarioCard Component
 *
 * Container that orchestrates Avatar + WritingMode or TalkingMode for a given
 * scenario. Displays the character, role context, and allows the user to
 * toggle between writing and talking practice modes.
 */

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Scenario, ScenarioType } from "@/data/curriculum";
import { useTranslation } from "@/lib/i18n";
import Avatar from "./Avatar";
import WritingMode from "./WritingMode";
import TalkingMode from "./TalkingMode";

interface ScenarioCardProps {
  scenario: Scenario;
  onComplete: (isCorrect: boolean) => void;
}

export default function ScenarioCard({
  scenario,
  onComplete,
}: ScenarioCardProps) {
  const { t } = useTranslation();
  
  // Allow user to toggle between speaking and writing practice.
  // Defaults to the scenario's original intended type from the curriculum.
  const [activeMode, setActiveMode] = useState<ScenarioType>(scenario.type);

  // Reset the mode toggle if the scenario changes
  useEffect(() => {
    setActiveMode(scenario.type);
  }, [scenario.id, scenario.type]);

  return (
    <motion.div
      className="scenario-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      key={scenario.id}
    >
      {/* Character header */}
      <div className="character-header">
        <Avatar
          name={scenario.characterName}
          mood="neutral"
          size={80}
        />
        <div className="character-info">
          <h3 className="character-name">
            {scenario.characterDisplayName}
          </h3>
          <p className="character-role">{scenario.characterRole}</p>
        </div>
        
        {/* Mode Toggle Tabs */}
        <div className="scenario-mode-toggle">
          <button
            onClick={() => setActiveMode("talking")}
            className={`mode-tab ${activeMode === "talking" ? "active type-talking" : ""}`}
          >
            {t("scenario.mode.talking")}
          </button>
          <button
            onClick={() => setActiveMode("writing")}
            className={`mode-tab ${activeMode === "writing" ? "active type-writing" : ""}`}
          >
            {t("scenario.mode.writing")}
          </button>
        </div>
      </div>

      {/* Interaction mode */}
      <div className="interaction-container">
        <AnimatePresence mode="wait">
          {activeMode === "writing" ? (
            <motion.div
              key="writing"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <WritingMode scenario={scenario} onSubmit={onComplete} />
            </motion.div>
          ) : (
            <motion.div
              key="talking"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <TalkingMode scenario={scenario} onSubmit={onComplete} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
