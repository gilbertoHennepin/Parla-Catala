/**
 * Grammar Highlight Utilities
 *
 * Parses LanguageTool API responses and generates data structures
 * used by the WritingMode component to render inline error highlights,
 * tooltips with explanations, and replacement suggestions.
 */

// ---------------------------------------------------------------------------
// Types matching the LanguageTool /v2/check response schema
// ---------------------------------------------------------------------------

export interface LTReplacement {
  value: string;
  shortDescription?: string;
}

export interface LTContext {
  text: string;
  offset: number;
  length: number;
}

export interface LTRule {
  id: string;
  description: string;
  issueType: string;
  category: {
    id: string;
    name: string;
  };
}

export interface LTMatch {
  message: string;
  shortMessage: string;
  offset: number;
  length: number;
  replacements: LTReplacement[];
  context: LTContext;
  rule: LTRule;
}

export interface LTResponse {
  matches: LTMatch[];
}

// ---------------------------------------------------------------------------
// Application-level types for the UI
// ---------------------------------------------------------------------------

/**
 * A single highlighted error segment within the user's text input.
 */
export interface ErrorHighlight {
  /** Unique identifier for React keys */
  id: string;
  /** The erroneous text that should be underlined */
  errorText: string;
  /** Character index where the error starts in the original input */
  startIndex: number;
  /** Character index where the error ends (exclusive) */
  endIndex: number;
  /** Human-readable explanation of the grammatical rule violated */
  message: string;
  /** Brief tooltip message */
  shortMessage: string;
  /** Suggested corrections (rendered as clickable buttons) */
  replacements: string[];
  /** The LanguageTool rule that flagged this error */
  ruleId: string;
  /** Category of the error (e.g., "Grammar", "Spelling") */
  category: string;
}

/**
 * A text segment that is either plain text or an error highlight.
 */
export interface TextSegment {
  type: "text" | "error";
  content: string;
  highlight?: ErrorHighlight;
}

// ---------------------------------------------------------------------------
// Parsing & Transformation Functions
// ---------------------------------------------------------------------------

/**
 * Convert LanguageTool matches into ErrorHighlight objects.
 */
export function parseMatches(
  matches: LTMatch[],
  originalText: string
): ErrorHighlight[] {
  return matches.map((match, index) => ({
    id: `error-${index}-${match.offset}`,
    errorText: originalText.substring(
      match.offset,
      match.offset + match.length
    ),
    startIndex: match.offset,
    endIndex: match.offset + match.length,
    message: match.message,
    shortMessage: match.shortMessage || match.message,
    replacements: match.replacements
      .slice(0, 5) // Limit to 5 suggestions for UI clarity
      .map((r) => r.value),
    ruleId: match.rule.id,
    category: match.rule.category.name,
  }));
}

/**
 * Split the original text into alternating plain-text and error segments.
 * This produces a flat array that can be mapped directly to React elements:
 *   - "text" segments → rendered as plain <span>
 *   - "error" segments → rendered as <span> with red underline + tooltip
 *
 * Errors are sorted by offset and non-overlapping segments are produced
 * even when errors are adjacent or overlap.
 */
export function buildSegments(
  originalText: string,
  highlights: ErrorHighlight[]
): TextSegment[] {
  if (highlights.length === 0) {
    return [{ type: "text", content: originalText }];
  }

  // Sort highlights by start index to process left-to-right
  const sorted = [...highlights].sort(
    (a, b) => a.startIndex - b.startIndex
  );

  const segments: TextSegment[] = [];
  let cursor = 0;

  for (const hl of sorted) {
    // Skip overlapping highlights (keep the first one)
    if (hl.startIndex < cursor) continue;

    // Plain text before this error
    if (hl.startIndex > cursor) {
      segments.push({
        type: "text",
        content: originalText.substring(cursor, hl.startIndex),
      });
    }

    // The error segment
    segments.push({
      type: "error",
      content: originalText.substring(hl.startIndex, hl.endIndex),
      highlight: hl,
    });

    cursor = hl.endIndex;
  }

  // Trailing plain text after the last error
  if (cursor < originalText.length) {
    segments.push({
      type: "text",
      content: originalText.substring(cursor),
    });
  }

  return segments;
}

/**
 * Apply a replacement to the original text and return the corrected version.
 *
 * @param originalText  - The full text from the textarea
 * @param highlight     - The error highlight to fix
 * @param replacement   - The replacement string to insert
 * @returns The corrected text
 */
export function applyReplacement(
  originalText: string,
  highlight: ErrorHighlight,
  replacement: string
): string {
  return (
    originalText.substring(0, highlight.startIndex) +
    replacement +
    originalText.substring(highlight.endIndex)
  );
}
