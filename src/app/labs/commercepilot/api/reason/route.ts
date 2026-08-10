import { NextResponse } from "next/server";
import { getValidatedAIDecision } from "../../agent/aiDecision";

export async function GET() {
  try {
    const decision = await getValidatedAIDecision();

    return NextResponse.json({
      success: true,
      decision,
    });
  } catch (error) {
    console.error("CommercePilot AI decision error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "AI decision failed.",
      },
      { status: 500 }
    );
  }
}