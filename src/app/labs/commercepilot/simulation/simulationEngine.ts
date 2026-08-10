import type { CommerceScenario } from "./scenarios";

export type SimulationStage =
  | "IDLE"
  | "OBSERVE"
  | "INVESTIGATE"
  | "DECIDE"
  | "ACT"
  | "EVALUATE"
  | "LEARN"
  | "COMPLETE";

export type SimulationRun = {
  scenario: CommerceScenario;
  stage: SimulationStage;
  started: boolean;
  timeAdvanced: boolean;
};

export function createSimulationRun(
  scenario: CommerceScenario
): SimulationRun {
  return {
    scenario,
    stage: "IDLE",
    started: false,
    timeAdvanced: false,
  };
}

export function startSimulation(
  run: SimulationRun
): SimulationRun {
  return {
    ...run,
    stage: "OBSERVE",
    started: true,
  };
}

export function advanceSimulationStage(
  run: SimulationRun
): SimulationRun {
  const stageOrder: SimulationStage[] = [
    "IDLE",
    "OBSERVE",
    "INVESTIGATE",
    "DECIDE",
    "ACT",
    "EVALUATE",
    "LEARN",
    "COMPLETE",
  ];

  const currentIndex = stageOrder.indexOf(run.stage);

  if (currentIndex === -1 || currentIndex === stageOrder.length - 1) {
    return run;
  }

  const nextStage = stageOrder[currentIndex + 1];

  return {
    ...run,
    stage: nextStage,
    timeAdvanced:
      nextStage === "EVALUATE" ||
      nextStage === "LEARN" ||
      nextStage === "COMPLETE"
        ? true
        : run.timeAdvanced,
  };
}