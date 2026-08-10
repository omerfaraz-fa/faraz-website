"use client";

import type { CommerceScenario } from "../simulation/scenarios";

type ScenarioSelectorProps = {
  scenarios: CommerceScenario[];
  selectedScenarioId: string;
  onSelectScenario: (scenarioId: string) => void;
};

export default function ScenarioSelector({
  scenarios,
  selectedScenarioId,
  onSelectScenario,
}: ScenarioSelectorProps) {
  return (
    <section className="scenario-selector">
      <div className="scenario-selector-header">
        <div>
          <p className="commerce-pilot-eyebrow">
            Simulation Environment
          </p>

          <h2>Choose a Business Scenario</h2>
        </div>

        <p className="scenario-selector-description">
          Run CommercePilot against different synthetic business conditions
          and observe how its decision changes.
        </p>
      </div>

      <div className="scenario-grid">
        {scenarios.map((scenario, index) => {
          const isSelected = scenario.id === selectedScenarioId;

          return (
            <button
              key={scenario.id}
              type="button"
              className={`scenario-card ${
                isSelected ? "scenario-card-selected" : ""
              }`}
              onClick={() => onSelectScenario(scenario.id)}
              aria-pressed={isSelected}
            >
              <div className="scenario-card-top">
                <span className="scenario-number">
                  0{index + 1}
                </span>

                {isSelected && (
                  <span className="scenario-selected-badge">
                    Active
                  </span>
                )}
              </div>

              <strong className="scenario-card-title">
                {scenario.name}
              </strong>

              <span className="scenario-card-description">
                {scenario.description}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}