import type { AIReasoningResult } from "./aiReasoning";

export type GuardrailResult = {
  approved: boolean;
  status: "APPROVED" | "REJECTED";
  proposedAction: string;
  reason: string;
};

const allowedActions = [
  "Create Product Messaging Experiment",
  "Investigate Conversion Funnel",
  "Protect Inventory",
  "Scale Advertising Carefully",
];

const forbiddenEvidencePatterns = [
  "85% of traffic",
  "$1m",
  "$220k",
  "industry benchmark",
  "mobile users",
];

export function validateAIReasoning(
  reasoning: AIReasoningResult
): GuardrailResult {
  const action = reasoning.action.toLowerCase();

  const combinedReasoning = [
    reasoning.problem,
    reasoning.evidence,
    reasoning.action,
    reasoning.reason,
  ]
    .join(" ")
    .toLowerCase();

  const unsupportedEvidence = forbiddenEvidencePatterns.find((pattern) =>
    combinedReasoning.includes(pattern.toLowerCase())
  );

  if (unsupportedEvidence) {
    return {
      approved: false,
      status: "REJECTED",
      proposedAction: reasoning.action,
      reason: `The AI response contains unsupported evidence: "${unsupportedEvidence}".`,
    };
  }

  if (action.includes("discount")) {
    return {
      approved: false,
      status: "REJECTED",
      proposedAction: reasoning.action,
      reason:
        "Discounting is not an approved autonomous CommercePilot action.",
    };
  }

  let matchedAction: string | null = null;

  if (
    action.includes("conversion funnel") ||
    action.includes("conversion") ||
    action.includes("add-to-cart")
  ) {
    matchedAction = "Investigate Conversion Funnel";
  }

  if (!matchedAction || !allowedActions.includes(matchedAction)) {
    return {
      approved: false,
      status: "REJECTED",
      proposedAction: reasoning.action,
      reason:
        "The AI proposed an action outside CommercePilot's approved action set.",
    };
  }

  return {
    approved: true,
    status: "APPROVED",
    proposedAction: matchedAction,
    reason:
      "The AI response passed evidence checks and maps to an approved CommercePilot action.",
  };
}