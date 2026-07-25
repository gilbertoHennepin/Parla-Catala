/**
 * Landing Page
 *
 * Hero section with animated gradient background, feature highlights,
 * and a CTA to start learning.
 */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import { useTranslation } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";

export default function LandingPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: "🎤",
      title: t("feat.conversa.title"),
      description: t("feat.conversa.desc"),
    },
    {
      icon: "✍️",
      title: t("feat.escritura.title"),
      description: t("feat.escritura.desc"),
    },
    {
      icon: "👥",
      title: t("feat.avatars.title"),
      description: t("feat.avatars.desc"),
    },
    {
      icon: "⚠️",
      title: t("feat.falsos.title"),
      description: t("feat.falsos.desc"),
    },
    {
      icon: "🏆",
      title: t("feat.gamificacio.title"),
      description: t("feat.gamificacio.desc"),
    },
    {
      icon: "📚",
      title: t("feat.ling.title"),
      description: t("feat.ling.desc"),
    },
  ];

  const characterSeeds = [
    "Laia_Student",
    "Pol_Teacher",
    "Gemma_Barista",
    "Agent_Mosso",
    "Nuria_ShopClerk",
    "Doctor_Soler",
  ];
  return (
    <div className="landing-page">
      {/* Background orbs */}
      <div className="landing-bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Top right language toggle */}
      <div style={{ position: "absolute", top: "2rem", right: "2rem", zIndex: 10 }}>
        <LanguageToggle />
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {t("landing.badge")}
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="gradient-text">{t("landing.title1")}</span>
          <br />
          {t("landing.title2")}
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {t("landing.subtitle")}
        </motion.p>

        {/* Character avatars row */}
        <motion.div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "2.5rem",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {characterSeeds.map((seed, i) => (
            <motion.div
              key={seed}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              style={{ animation: `float ${3 + i * 0.5}s ease-in-out infinite` }}
            >
              <Avatar name={seed} mood="happy" size={56} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Link href="/learn" className="hero-cta">
            {t("landing.cta")}
            <span>→</span>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <motion.h2
          className="features-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t("landing.features.title")}
        </motion.h2>

        <div className="features-grid">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
