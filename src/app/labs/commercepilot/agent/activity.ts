export type AgentActivity = {
  stage:
  | "observe"
  | "tool"
  | "investigate"
  | "decide"
  | "act"
  | "evaluate"
  | "learn";
  title: string;
  detail: string;
};

export const agentActivity: AgentActivity[] = [
  {
    stage: "observe",
    title: "Performance anomaly detected",
    detail: "Revenue declined 23% despite an 11% increase in traffic.",
  },
  {
    stage: "tool",
    title: "getSalesMetrics()",
    detail: "Checking revenue, traffic and conversion performance.",
  },
  {
    stage: "tool",
    title: "getInventoryLevels()",
    detail: "Inventory is healthy with 1,842 units available.",
  },
  {
    stage: "tool",
    title: "getCampaignPerformance()",
    detail: "Ad spend increased 18% while traffic increased 11%.",
  },
  {
    stage: "tool",
    title: "getProductMetrics()",
    detail: "Add-to-cart performance declined 24%.",
  },
  {
    stage: "investigate",
    title: "Likely conversion-stage friction",
    detail:
      "Inventory and traffic were ruled out as primary causes. Product-level conversion is the strongest signal.",
  },
  {
    stage: "decide",
    title: "Create Product Messaging Experiment",
    detail:
      "Test benefit-led messaging before committing additional advertising spend.",
  },
  {
    stage: "act",
    title: "Experiment EXP-001 started",
    detail: "Benefit-led product messaging experiment is now running.",
  },

{
  stage: "evaluate",
  title: "Experiment outcome evaluated",
  detail:
    "Conversion, revenue and ROAS improved while gross margin remained protected.",
},
{
  stage: "learn",
  title: "Decision validated and stored",
  detail:
    "The successful outcome was stored as MEM-001 for use in future decisions.",
},

];