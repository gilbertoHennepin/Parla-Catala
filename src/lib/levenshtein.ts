/**
 * Levenshtein Distance Algorithm
 *
 * Computes the edit distance between two strings to measure how similar
 * a learner's spoken/written Catalan is to the expected answer.
 * Used by the TalkingMode component for fuzzy pronunciation scoring.
 */

/**
 * Compute the Levenshtein edit distance between two strings.
 * This is the minimum number of single-character edits (insertions,
 * deletions, or substitutions) required to change one string into the other.
 *
 * @param a - First string (e.g., user's transcript)
 * @param b - Second string (e.g., expected answer)
 * @returns The edit distance (0 = identical)
 */
export function levenshteinDistance(a: string, b: string): number {
  const la = a.length;
  const lb = b.length;

  // Early exits
  if (la === 0) return lb;
  if (lb === 0) return la;
  if (a === b) return 0;

  // Create a 2D matrix of distances
  const matrix: number[][] = Array.from({ length: la + 1 }, () =>
    Array(lb + 1).fill(0)
  );

  // Initialise the first column and row
  for (let i = 0; i <= la; i++) matrix[i][0] = i;
  for (let j = 0; j <= lb; j++) matrix[0][j] = j;

  // Fill the matrix
  for (let i = 1; i <= la; i++) {
    for (let j = 1; j <= lb; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }

  return matrix[la][lb];
}

/**
 * Calculate the accuracy percentage between two strings.
 * Returns a value between 0 and 100, where 100 means identical.
 *
 * @param userInput - The string produced by the learner
 * @param expected  - The correct answer
 * @param caseSensitive - Whether comparison is case-sensitive (default: false)
 * @returns Accuracy percentage (0–100)
 */
export function calculateAccuracy(
  userInput: string,
  expected: string,
  caseSensitive = false
): number {
  const a = caseSensitive ? userInput.trim() : userInput.trim().toLowerCase();
  const b = caseSensitive ? expected.trim() : expected.trim().toLowerCase();

  if (a === b) return 100;
  if (a.length === 0 || b.length === 0) return 0;

  const distance = levenshteinDistance(a, b);
  const maxLength = Math.max(a.length, b.length);
  const accuracy = ((maxLength - distance) / maxLength) * 100;

  return Math.max(0, Math.round(accuracy * 10) / 10);
}

/**
 * Accuracy thresholds for grading user responses.
 */
export const ACCURACY_THRESHOLDS = {
  /** 90%+ — Excellent: full XP reward */
  EXCELLENT: 90,
  /** 70%+ — Good: partial XP reward */
  GOOD: 70,
  /** 50%+ — Fair: hints provided, can retry */
  FAIR: 50,
  /** Below 50% — Poor: retry required */
  POOR: 50,
} as const;

/**
 * Determine the grade label from an accuracy percentage.
 */
export function getGrade(
  accuracy: number
): "excellent" | "good" | "fair" | "poor" {
  if (accuracy >= ACCURACY_THRESHOLDS.EXCELLENT) return "excellent";
  if (accuracy >= ACCURACY_THRESHOLDS.GOOD) return "good";
  if (accuracy >= ACCURACY_THRESHOLDS.FAIR) return "fair";
  return "poor";
}

/**
 * Check whether a user's answer passes the minimum accuracy threshold.
 */
export function isAcceptable(accuracy: number): boolean {
  return accuracy >= ACCURACY_THRESHOLDS.GOOD;
}
