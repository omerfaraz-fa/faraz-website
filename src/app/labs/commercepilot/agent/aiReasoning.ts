export type AIReasoningResult = {
  problem: string;
  evidence: string;
  action: string;
  reason: string;
};

export async function getAIReasoning(): Promise<AIReasoningResult> {
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "qwen3:4b",
      stream: false,
      prompt: `
You are the reasoning layer of an autonomous e-commerce decision agent called CommercePilot.

Use only the evidence provided below.

Evidence:
- Revenue declined 23%
- Traffic increased 11%
- Conversion rate declined 31%
- Add-to-cart performance declined 24%
- Advertising spend increased 18%
- Inventory is healthy with 1,842 units available
- Gross margin is 36%

Rules:
- Do not invent statistics, benchmarks, customer behavior, device usage, financial estimates, or timelines.
- Do not claim causation unless the evidence supports it.
- Choose exactly one recommended action.

Return your answer as valid JSON only:

{
  "problem": "...",
  "evidence": "...",
  "action": "...",
  "reason": "..."
}
      `,
    }),
  });

  if (!response.ok) {
    throw new Error("CommercePilot AI reasoning request failed.");
  }

  const data = await response.json();

  return JSON.parse(data.response) as AIReasoningResult;
}