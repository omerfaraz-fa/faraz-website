import {
  getSalesMetrics,
  getInventoryLevels,
  getCampaignPerformance,
  getProductMetrics,
  createProductMessagingExperiment,
  getExperimentOutcome,
} from "./tools";

import { decisionMemory } from "./memory";

export const AGENT_OBJECTIVE = `Increase profitable revenue while protecting gross margin
and maintaining healthy inventory levels.`;

export function observeEnvironment() {
  return {
    sales: getSalesMetrics(),
    inventory: getInventoryLevels(),
    campaign: getCampaignPerformance(),
    product: getProductMetrics(),
  };
}

export function analyzeObservation() {
  const observation = observeEnvironment();

  const issues: string[] = [];

  if (observation.sales.revenueChange < 0) {
    issues.push(
      `Revenue has declined by ${Math.abs(
        observation.sales.revenueChange
      )}%.`
    );
  }

  if (
    observation.sales.trafficChange > 0 &&
    observation.sales.conversionChange < 0
  ) {
    issues.push(
      `Traffic increased by ${
        observation.sales.trafficChange
      }% while conversion declined by ${Math.abs(
        observation.sales.conversionChange
      )}%.`
    );
  }

  if (observation.product.addToCartChange < 0) {
    issues.push(
      `Add-to-cart rate declined by ${Math.abs(
        observation.product.addToCartChange
      )}%.`
    );
  }

  return {
    status: issues.length > 0 ? "Investigation Required" : "Healthy",
    issues,
  };
}

export function investigateIssues() {
  const observation = observeEnvironment();
  const analysis = analyzeObservation();

  if (analysis.status !== "Investigation Required") {
    return {
      status: "No Investigation Needed",
      findings: [],
    };
  }

  const findings: string[] = [];

  if (observation.inventory.status === "Healthy") {
    findings.push(
      "Inventory is healthy, making stock availability an unlikely cause of the revenue decline."
    );
  }

  if (
    observation.campaign.adSpendChange > 0 &&
    observation.sales.trafficChange > 0
  ) {
    findings.push(
      "Advertising spend and traffic both increased, so insufficient traffic is unlikely to be the primary problem."
    );
  }

  if (
    observation.sales.conversionChange < 0 &&
    observation.product.addToCartChange < 0
  ) {
    findings.push(
      "Conversion and add-to-cart performance declined together, indicating likely friction at the product or purchase-decision stage."
    );
  }

  return {
    status: "Investigation Complete",
    findings,
  };
}

export function makeDecision() {
  const observation = observeEnvironment();
  const investigation = investigateIssues();

  if (investigation.status !== "Investigation Complete") {
    return {
      decision: "No Action",
      reason: "No actionable issue was identified.",
    };
  }

  if (
    observation.inventory.status === "Healthy" &&
    observation.sales.trafficChange > 0 &&
    observation.sales.conversionChange < 0 &&
    observation.product.addToCartChange < 0
  ) {
    return {
      decision: "Create Product Messaging Experiment",
      reason:
        "Traffic and inventory are healthy, but conversion and add-to-cart performance have declined. Test improved product messaging before increasing advertising spend.",
      expectedOutcome:
        "Improve conversion while protecting advertising efficiency and gross margin.",
    };
  }

  return {
    decision: "Continue Monitoring",
    reason: "Evidence is not strong enough to justify an intervention.",
  };
}

export function executeDecision() {
  const decision = makeDecision();

  if (decision.decision === "Create Product Messaging Experiment") {
    const result = createProductMessagingExperiment();

    return {
      status: "Action Executed",
      decision: decision.decision,
      result,
    };
  }

  return {
    status: "No Action Executed",
    decision: decision.decision,
  };
}

export function evaluateOutcome() {
  const outcome = getExperimentOutcome();

  const conversionImproved =
    outcome.after.conversionRate > outcome.before.conversionRate;

  const revenueImproved =
    outcome.after.revenue > outcome.before.revenue;

  const roasImproved =
    outcome.after.roas > outcome.before.roas;

  const marginProtected =
    outcome.after.grossMargin >= outcome.before.grossMargin;

  const successful =
    conversionImproved &&
    revenueImproved &&
    roasImproved &&
    marginProtected;

  return {
    status: successful
      ? "Decision Validated"
      : "Decision Needs Review",
    evaluation: {
      conversionImproved,
      revenueImproved,
      roasImproved,
      marginProtected,
    },
  };
}

export function getDecisionMemory() {
  return decisionMemory;
}

export function recommendNextStep() {
  const memory = getDecisionMemory();
  const latestMemory = memory[memory.length - 1];

  if (latestMemory?.result === "Decision Validated") {
    return {
      status: "Previous Learning Applied",
      learnedFrom: latestMemory.id,
      nextDecision:
        "Continue the winning product messaging and monitor performance before scaling further.",
      reason:
        "The previous experiment improved conversion, revenue, and ROAS while maintaining gross margin.",
    };
  }

  return {
    status: "More Evidence Required",
    nextDecision: "Continue Monitoring",
    reason: "No validated previous learning is available.",
  };
}