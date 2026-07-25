/**
 * Avatar Component
 *
 * Renders a deterministic SVG avatar via the DiceBear API.
 * The same seed always produces the same character, ensuring pedagogical
 * continuity across sessions. Mood prop changes avatar expression.
 */

"use client";

import { useState } from "react";

interface AvatarProps {
  /** Seed string passed to DiceBear (e.g., "Laia_Student") */
  name: string;
  /** Emotional state — changes mouth/expression via style options */
  mood?: "happy" | "neutral" | "sad";
  /** Avatar diameter in pixels */
  size?: number;
  /** Optional additional CSS class names */
  className?: string;
}

/** Maps mood to DiceBear avataaars mouth type query param */
const mouthMap: Record<string, string> = {
  happy: "smile",
  neutral: "serious",
  sad: "sad",
};

export default function Avatar({
  name,
  mood = "neutral",
  size = 120,
  className = "",
}: AvatarProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const mouth = mouthMap[mood] || "serious";

  const url = `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(
    name
  )}&mouth=${mouth}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&backgroundType=gradientLinear&scale=90`;

  if (hasError) {
    // Graceful fallback: a coloured circle with the character's initial
    return (
      <div
        className={`avatar-fallback ${className}`}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.4,
          fontWeight: 700,
          color: "#fff",
          flexShrink: 0,
        }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <div
      className={`avatar-wrapper ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        flexShrink: 0,
        position: "relative",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        border: "3px solid rgba(255,255,255,0.3)",
      }}
    >
      {/* Skeleton loader while the SVG downloads */}
      {isLoading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "linear-gradient(110deg, #e2e8f0 25%, #f1f5f9 37%, #e2e8f0 63%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s ease-in-out infinite",
          }}
        />
      )}
      <img
        src={url}
        alt={`Avatar of ${name.split("_")[0]}`}
        width={size}
        height={size}
        style={{
          display: isLoading ? "none" : "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
}
