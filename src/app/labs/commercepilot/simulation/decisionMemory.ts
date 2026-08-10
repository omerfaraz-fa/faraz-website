import type { CommerceScenario } from "./scenarios";

export type DecisionMemoryEntry = {
  id: string;
  scenarioId: string;
  scenarioName: string;
  decision: string;
  action: string;
  outcome: "POSITIVE" | "PROTECTED";
  learning: string;
};

export function createDecisionMemoryEntry(
  scenario: CommerceScenario,
  memoryNumber: number
): DecisionMemoryEntry {
  return {
    id: `MEM-${String(memoryNumber).padStart(3, "0")}`,
    scenarioId: scenario.id,
    scenarioName: scenario.name,
    decision: scenario.decision,
    action: scenario.action,
    outcome:
      scenario.id === "inventory-risk"
        ? "PROTECTED"
        : "POSITIVE",
    learning: scenario.learning,
  };
}