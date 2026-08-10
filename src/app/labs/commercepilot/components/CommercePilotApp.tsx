"use client";

import { useState } from "react";
import "../commercepilot.css";

import { commerceScenarios } from "../simulation/scenarios";
import {
  createSimulationRun,
  startSimulation,
  advanceSimulationStage,
  type SimulationRun,
} from "../simulation/simulationEngine";

import {
  createDecisionMemoryEntry,
  type DecisionMemoryEntry,
} from "../simulation/decisionMemory";

import ScenarioSelector from "./ScenarioSelector";

export default function CommercePilotApp() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(
    commerceScenarios[0].id
  );

  const [simulationRun, setSimulationRun] =
    useState<SimulationRun | null>(null);

  const [decisionMemory, setDecisionMemory] = useState<
    DecisionMemoryEntry[]
  >([]);

  const selectedScenario =
    commerceScenarios.find(
      (scenario) => scenario.id === selectedScenarioId
    ) ?? commerceScenarios[0];

  const lifecycleStages = [
    "OBSERVE",
    "INVESTIGATE",
    "DECIDE",
    "ACT",
    "EVALUATE",
    "LEARN",
    "COMPLETE",
  ];

  function selectScenario(scenarioId: string) {
    setSelectedScenarioId(scenarioId);
    setSimulationRun(null);
  }

  function runAgent() {
    const newRun = createSimulationRun(selectedScenario);
    const startedRun = startSimulation(newRun);

    setSimulationRun(startedRun);
  }

  function advanceStage() {
    if (!simulationRun) {
      return;
    }

    const nextRun = advanceSimulationStage(simulationRun);

    setSimulationRun(nextRun);

    if (
      nextRun.stage === "COMPLETE" &&
      simulationRun.stage !== "COMPLETE"
    ) {
      const memoryEntry = createDecisionMemoryEntry(
        nextRun.scenario,
        decisionMemory.length + 1
      );

      setDecisionMemory((currentMemory) => [
        ...currentMemory,
        memoryEntry,
      ]);
    }
  }

  function formatChange(value: number) {
    return `${value > 0 ? "+" : ""}${value}%`;
  }

  function getChangeClass(value: number) {
    if (value > 0) return "metric-positive";
    if (value < 0) return "metric-negative";
    return "metric-neutral";
  }

  function getOutcomeDirection(before: number, after: number) {
    if (after > before) return "outcome-up";
    if (after < before) return "outcome-down";
    return "outcome-flat";
  }

  return (
    <main className="commerce-pilot">
      <div className="commerce-pilot-shell">
        <header className="commerce-pilot-header">
          <p className="commerce-pilot-eyebrow">
            AI Operations Lab · Interactive Simulation
          </p>

          <h1 className="commerce-pilot-title">
            CommercePilot
          </h1>

          <p className="commerce-pilot-subtitle">
            An autonomous e-commerce decision agent that observes
            business signals, investigates performance, selects a
            controlled action, evaluates the outcome, and stores what
            it learns.
          </p>
        </header>

        <div className="commerce-pilot-panel">
          <ScenarioSelector
            scenarios={commerceScenarios}
            selectedScenarioId={selectedScenarioId}
            onSelectScenario={selectScenario}
          />
        </div>

        <section className="commerce-pilot-panel">
          <p className="commerce-pilot-eyebrow">
            Current Decision Context
          </p>

          <h2>{selectedScenario.name}</h2>

          <p>{selectedScenario.description}</p>

          {!simulationRun && (
            <button
              className="commerce-pilot-button"
              type="button"
              onClick={runAgent}
            >
              Run Agent →
            </button>
          )}
        </section>

        {simulationRun && (
          <section className="commerce-pilot-panel">
            <p className="commerce-pilot-eyebrow">
              Agent Execution Console
            </p>

            <h2>Decision Cycle</h2>

            <div className="agent-stage-track">
              {lifecycleStages.map((stage, index) => {
                const currentIndex = lifecycleStages.indexOf(
                  simulationRun.stage
                );

                const isActive =
                  stage === simulationRun.stage;

                const isComplete =
                  index < currentIndex;

                return (
                  <div
                    key={stage}
                    className={`agent-stage ${
                      isActive ? "agent-stage-active" : ""
                    } ${
                      isComplete
                        ? "agent-stage-complete"
                        : ""
                    }`}
                  >
                    <span className="agent-stage-dot">
                      {isComplete ? "✓" : index + 1}
                    </span>

                    <span className="agent-stage-name">
                      {stage}
                    </span>
                  </div>
                );
              })}
            </div>

            {simulationRun.stage === "OBSERVE" && (
              <div className="execution-content">
                <div className="execution-content-header">
                  <div>
                    <p className="execution-label">
                      Live Business Signals
                    </p>

                    <h3>Observed Business Metrics</h3>
                  </div>

                  <span className="execution-status">
                    Evidence Loaded
                  </span>
                </div>

                <div className="metrics-grid">
                  <article className="metric-card">
                    <span className="metric-label">
                      Revenue
                    </span>

                    <strong
                      className={`metric-value ${getChangeClass(
                        simulationRun.scenario.metrics
                          .revenueChange
                      )}`}
                    >
                      {formatChange(
                        simulationRun.scenario.metrics
                          .revenueChange
                      )}
                    </strong>

                    <span className="metric-context">
                      vs. previous period
                    </span>
                  </article>

                  <article className="metric-card">
                    <span className="metric-label">
                      Traffic
                    </span>

                    <strong
                      className={`metric-value ${getChangeClass(
                        simulationRun.scenario.metrics
                          .trafficChange
                      )}`}
                    >
                      {formatChange(
                        simulationRun.scenario.metrics
                          .trafficChange
                      )}
                    </strong>

                    <span className="metric-context">
                      vs. previous period
                    </span>
                  </article>

                  <article className="metric-card">
                    <span className="metric-label">
                      Conversion
                    </span>

                    <strong
                      className={`metric-value ${getChangeClass(
                        simulationRun.scenario.metrics
                          .conversionChange
                      )}`}
                    >
                      {formatChange(
                        simulationRun.scenario.metrics
                          .conversionChange
                      )}
                    </strong>

                    <span className="metric-context">
                      conversion performance
                    </span>
                  </article>

                  <article className="metric-card">
                    <span className="metric-label">
                      Add-to-cart
                    </span>

                    <strong
                      className={`metric-value ${getChangeClass(
                        simulationRun.scenario.metrics
                          .addToCartChange
                      )}`}
                    >
                      {formatChange(
                        simulationRun.scenario.metrics
                          .addToCartChange
                      )}
                    </strong>

                    <span className="metric-context">
                      funnel engagement
                    </span>
                  </article>

                  <article className="metric-card">
                    <span className="metric-label">
                      Ad Spend
                    </span>

                    <strong
                      className={`metric-value ${getChangeClass(
                        simulationRun.scenario.metrics
                          .adSpendChange
                      )}`}
                    >
                      {formatChange(
                        simulationRun.scenario.metrics
                          .adSpendChange
                      )}
                    </strong>

                    <span className="metric-context">
                      advertising investment
                    </span>
                  </article>

                  <article className="metric-card">
                    <span className="metric-label">
                      Inventory
                    </span>

                    <strong className="metric-value metric-neutral">
                      {simulationRun.scenario.metrics.inventoryUnits.toLocaleString()}
                    </strong>

                    <span className="metric-context">
                      units available
                    </span>
                  </article>

                  <article className="metric-card">
                    <span className="metric-label">
                      Gross Margin
                    </span>

                    <strong className="metric-value metric-neutral">
                      {
                        simulationRun.scenario.metrics
                          .grossMargin
                      }
                      %
                    </strong>

                    <span className="metric-context">
                      current margin
                    </span>
                  </article>
                </div>
              </div>
            )}

            {simulationRun.stage === "INVESTIGATE" && (
              <div className="execution-content">
                <div className="execution-content-header">
                  <div>
                    <p className="execution-label">
                      Diagnostic Analysis
                    </p>

                    <h3>Agent Investigation</h3>
                  </div>

                  <span className="analysis-status">
                    Anomaly Detected
                  </span>
                </div>

                <div className="reasoning-layout">
                  <article className="reasoning-card">
                    <span className="reasoning-card-label">
                      Evidence Synthesis
                    </span>

                    <p>
                      {simulationRun.scenario.diagnosis}
                    </p>
                  </article>

                  <article className="reasoning-card">
                    <span className="reasoning-card-label">
                      Investigation Objective
                    </span>

                    <p>
                      Determine the most appropriate controlled
                      response using the available business evidence
                      without exceeding CommercePilot&apos;s approved
                      operating boundaries.
                    </p>
                  </article>
                </div>
              </div>
            )}

            {simulationRun.stage === "DECIDE" && (
              <div className="execution-content">
                <div className="execution-content-header">
                  <div>
                    <p className="execution-label">
                      Controlled Decision
                    </p>

                    <h3>Decision Proposed</h3>
                  </div>

                  <span className="guardrail-status">
                    Guardrail Passed
                  </span>
                </div>

                <div className="decision-layout">
                  <article className="decision-primary-card">
                    <span className="reasoning-card-label">
                      Proposed Decision
                    </span>

                    <strong>
                      {simulationRun.scenario.decision}
                    </strong>

                    <p>
                      Selected from CommercePilot&apos;s approved
                      autonomous action set.
                    </p>
                  </article>

                  <article className="guardrail-card">
                    <div className="guardrail-icon">
                      ✓
                    </div>

                    <div>
                      <span className="reasoning-card-label">
                        Safety Validation
                      </span>

                      <strong>
                        Action approved
                      </strong>

                      <p>
                        The proposed decision is supported by the
                        scenario evidence and remains within the
                        agent&apos;s permitted operating boundaries.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            )}

            {simulationRun.stage === "ACT" && (
              <div className="execution-content">
                <div className="execution-content-header">
                  <div>
                    <p className="execution-label">
                      Approved Execution
                    </p>

                    <h3>Action Executed</h3>
                  </div>

                  <span className="execution-status">
                    Authorized
                  </span>
                </div>

                <article className="action-card">
                  <div className="action-indicator">
                    →
                  </div>

                  <div>
                    <span className="reasoning-card-label">
                      Autonomous Action
                    </span>

                    <strong>
                      {simulationRun.scenario.action}
                    </strong>

                    <p>
                      Execution is simulated for this portfolio
                      environment. No external commerce systems are
                      modified.
                    </p>
                  </div>
                </article>
              </div>
            )}

            {simulationRun.stage === "EVALUATE" && (
              <div className="execution-content">
                <div className="execution-content-header">
                  <div>
                    <p className="execution-label">
                      7 Days Later
                    </p>

                    <h3>Outcome Evaluation</h3>
                  </div>

                  <span className="evaluation-status">
                    Outcome Measured
                  </span>
                </div>

                <div className="outcome-grid">
                  <article className="outcome-card">
                    <span>Conversion</span>

                    <strong
                      className={getOutcomeDirection(
                        simulationRun.scenario.outcome
                          .conversionBefore,
                        simulationRun.scenario.outcome
                          .conversionAfter
                      )}
                    >
                      {
                        simulationRun.scenario.outcome
                          .conversionBefore
                      }
                      % →{" "}
                      {
                        simulationRun.scenario.outcome
                          .conversionAfter
                      }
                      %
                    </strong>
                  </article>

                  <article className="outcome-card">
                    <span>Revenue</span>

                    <strong
                      className={getOutcomeDirection(
                        simulationRun.scenario.outcome
                          .revenueBefore,
                        simulationRun.scenario.outcome
                          .revenueAfter
                      )}
                    >
                      SAR{" "}
                      {simulationRun.scenario.outcome.revenueBefore.toLocaleString()}{" "}
                      → SAR{" "}
                      {simulationRun.scenario.outcome.revenueAfter.toLocaleString()}
                    </strong>
                  </article>

                  <article className="outcome-card">
                    <span>ROAS</span>

                    <strong
                      className={getOutcomeDirection(
                        simulationRun.scenario.outcome
                          .roasBefore,
                        simulationRun.scenario.outcome
                          .roasAfter
                      )}
                    >
                      {
                        simulationRun.scenario.outcome
                          .roasBefore
                      }
                      x →{" "}
                      {
                        simulationRun.scenario.outcome
                          .roasAfter
                      }
                      x
                    </strong>
                  </article>

                  <article className="outcome-card">
                    <span>Gross Margin</span>

                    <strong
                      className={getOutcomeDirection(
                        simulationRun.scenario.outcome
                          .marginBefore,
                        simulationRun.scenario.outcome
                          .marginAfter
                      )}
                    >
                      {
                        simulationRun.scenario.outcome
                          .marginBefore
                      }
                      % →{" "}
                      {
                        simulationRun.scenario.outcome
                          .marginAfter
                      }
                      %
                    </strong>
                  </article>
                </div>

                <div className="evaluation-summary">
                  <span className="reasoning-card-label">
                    Business Interpretation
                  </span>

                  <p>
                    CommercePilot evaluates the result against the
                    scenario objective rather than treating revenue
                    growth as the only definition of success.
                  </p>
                </div>
              </div>
            )}

            {simulationRun.stage === "LEARN" && (
              <div className="execution-content">
                <div className="execution-content-header">
                  <div>
                    <p className="execution-label">
                      Learning Extraction
                    </p>

                    <h3>Learning Captured</h3>
                  </div>

                  <span className="learning-status">
                    Memory Candidate
                  </span>
                </div>

                <article className="learning-card">
                  <div className="learning-icon">
                    ↺
                  </div>

                  <div>
                    <span className="reasoning-card-label">
                      Extracted Insight
                    </span>

                    <strong>
                      {simulationRun.scenario.learning}
                    </strong>

                    <p>
                      This insight will be stored in Decision Memory
                      when the cycle completes.
                    </p>
                  </div>
                </article>
              </div>
            )}

            {simulationRun.stage === "COMPLETE" && (
              <div className="execution-content">
                <div className="execution-content-header">
                  <div>
                    <p className="execution-label">
                      Cycle Complete
                    </p>

                    <h3>Decision Cycle Complete</h3>
                  </div>

                  <span className="complete-status">
                    Learning Stored
                  </span>
                </div>

                <div className="cycle-summary-grid">
                  <article className="cycle-summary-card">
                    <span>Scenario</span>
                    <strong>
                      {simulationRun.scenario.name}
                    </strong>
                  </article>

                  <article className="cycle-summary-card">
                    <span>Decision</span>
                    <strong>
                      {simulationRun.scenario.decision}
                    </strong>
                  </article>

                  <article className="cycle-summary-card">
                    <span>Outcome</span>
                    <strong>
                      {simulationRun.scenario.id ===
                      "inventory-risk"
                        ? "Protected"
                        : "Positive"}
                    </strong>
                  </article>
                </div>

                <p className="cycle-complete-copy">
                  CommercePilot evaluated the outcome and stored
                  the resulting learning in Decision Memory for
                  future reference.
                </p>
              </div>
            )}

            {simulationRun.stage !== "COMPLETE" && (
              <button
                className="commerce-pilot-button"
                type="button"
                onClick={advanceStage}
              >
                Advance Agent →
              </button>
            )}

            {simulationRun.stage === "COMPLETE" && (
              <button
                className="commerce-pilot-button"
                type="button"
                onClick={runAgent}
              >
                Run Scenario Again
              </button>
            )}
          </section>
        )}

        {decisionMemory.length > 0 && (
          <section className="commerce-pilot-panel memory-section">
            <div className="memory-section-header">
              <div>
                <p className="commerce-pilot-eyebrow">
                  Persistent Learning
                </p>

                <h2>Decision Memory</h2>
              </div>

              <span className="memory-count">
                {decisionMemory.length} stored
              </span>
            </div>

            <div className="memory-grid">
              {decisionMemory.map((memory) => (
                <article
                  key={memory.id}
                  className="memory-card"
                >
                  <div className="memory-card-header">
                    <span className="memory-id">
                      {memory.id}
                    </span>

                    <span
                      className={`memory-outcome ${
                        memory.outcome === "PROTECTED"
                          ? "memory-protected"
                          : "memory-positive"
                      }`}
                    >
                      {memory.outcome}
                    </span>
                  </div>

                  <h3>{memory.scenarioName}</h3>

                  <div className="memory-detail">
                    <span>Decision</span>
                    <strong>{memory.decision}</strong>
                  </div>

                  <div className="memory-detail">
                    <span>Action</span>
                    <p>{memory.action}</p>
                  </div>

                  <div className="memory-learning">
                    <span>Learning</span>
                    <p>{memory.learning}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}