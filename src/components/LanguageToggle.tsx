"use client";

import { useGameStore } from "@/store/useGameStore";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { uiLanguage, setUiLanguage } = useGameStore();

  const toggleLanguage = () => {
    setUiLanguage(uiLanguage === "es" ? "ca" : "es");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle-btn"
      aria-label="Toggle Language"
    >
      <motion.div
        className="lang-indicator"
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          justifyContent: uiLanguage === "es" ? "flex-start" : "flex-end",
        }}
      >
        <motion.span layout className="lang-text">
          {uiLanguage === "es" ? "ES" : "CA"}
        </motion.span>
      </motion.div>
    </button>
  );
}
