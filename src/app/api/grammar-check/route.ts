/**
 * LanguageTool Grammar-Check Proxy
 *
 * Secure server-side API route that forwards user text to the LanguageTool
 * /v2/check endpoint for Catalan grammar validation. Appends language=ca-ES
 * and motherTongue=es to activate Spanish-speaker-specific rulesets.
 */

import { NextRequest, NextResponse } from "next/server";

const LANGUAGE_TOOL_URL = "https://api.languagetoolplus.com/v2/check";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'text' field in request body." },
        { status: 400 }
      );
    }

    // Build the form data payload for LanguageTool
    const params = new URLSearchParams({
      text,
      language: "ca-ES",
      motherTongue: "es",
    });

    const ltResponse = await fetch(LANGUAGE_TOOL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: params.toString(),
      signal: AbortSignal.timeout(10000), // 10s timeout
    });

    if (!ltResponse.ok) {
      const errorText = await ltResponse.text();
      console.error(
        `LanguageTool API error (${ltResponse.status}):`,
        errorText
      );
      return NextResponse.json(
        {
          error: "Grammar check service unavailable. Please try again later.",
          matches: [],
        },
        { status: 502 }
      );
    }

    const ltData = await ltResponse.json();

    // Return only the sanitised matches array to the frontend
    return NextResponse.json({
      matches: ltData.matches ?? [],
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "TimeoutError") {
      return NextResponse.json(
        {
          error: "Grammar check timed out. Please try again.",
          matches: [],
        },
        { status: 504 }
      );
    }

    console.error("Grammar-check route error:", error);
    return NextResponse.json(
      {
        error: "Internal server error during grammar check.",
        matches: [],
      },
      { status: 500 }
    );
  }
}
