import {
  getAIReasoning,
  type AIReasoningResult,
} from "./aiReasoning";

import {
  validateAIReasoning,
  type GuardrailResult,
} from "./aiGuardrails";

export type AIDecisionPackage = {
  reasoning: AIReasoningResult;
  guardrail: GuardrailResult;
  executable: boolean;
};

export async function getValidatedAIDecision(): Promise<AIDecisionPackage> {
  const reasoning = await getAIReasoning();

  const guardrail = validateAIReasoning(reasoning);

  return {
    reasoning,
    guardrail,
    executable: guardrail.approved,
  };
}