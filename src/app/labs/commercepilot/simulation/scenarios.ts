export type CommerceScenario = {
  id: string;
  name: string;
  description: string;

  metrics: {
    revenueChange: number;
    trafficChange: number;
    conversionChange: number;
    addToCartChange: number;
    adSpendChange: number;
    inventoryUnits: number;
    grossMargin: number;
  };

  diagnosis: string;
  decision: string;
  action: string;

  outcome: {
    conversionBefore: number;
    conversionAfter: number;
    revenueBefore: number;
    revenueAfter: number;
    roasBefore: number;
    roasAfter: number;
    marginBefore: number;
    marginAfter: number;
  };

  learning: string;
};

export const commerceScenarios: CommerceScenario[] = [
  {
    id: "conversion-drop",
    name: "Conversion Performance Decline",
    description:
      "Traffic is growing, but revenue and conversion performance are deteriorating.",

    metrics: {
      revenueChange: -23,
      trafficChange: 11,
      conversionChange: -31,
      addToCartChange: -24,
      adSpendChange: 18,
      inventoryUnits: 1842,
      grossMargin: 36,
    },

    diagnosis:
      "Revenue is declining despite increased traffic and healthy inventory, indicating friction within the conversion journey.",

    decision: "Create Product Messaging Experiment",

    action:
      "Test benefit-led product messaging before committing additional advertising spend.",

    outcome: {
      conversionBefore: 2.8,
      conversionAfter: 3.4,
      revenueBefore: 84200,
      revenueAfter: 96700,
      roasBefore: 2.7,
      roasAfter: 3.1,
      marginBefore: 36,
      marginAfter: 36,
    },

    learning:
      "Improving product messaging increased conversion, revenue, and advertising efficiency while protecting gross margin.",
  },

  {
    id: "inventory-risk",
    name: "Inventory Risk",
    description:
      "Demand remains strong, but available inventory has fallen to a level that creates stockout risk.",

    metrics: {
      revenueChange: 14,
      trafficChange: 9,
      conversionChange: 12,
      addToCartChange: 10,
      adSpendChange: 15,
      inventoryUnits: 126,
      grossMargin: 35,
    },

    diagnosis:
      "Commercial performance is healthy, but inventory is critically constrained relative to current demand.",

    decision: "Protect Inventory",

    action:
      "Reduce promotional pressure and avoid increasing demand until inventory levels recover.",

    outcome: {
      conversionBefore: 3.5,
      conversionAfter: 3.3,
      revenueBefore: 101400,
      revenueAfter: 98800,
      roasBefore: 3.4,
      roasAfter: 3.2,
      marginBefore: 35,
      marginAfter: 36,
    },

    learning:
      "Protecting constrained inventory reduced short-term demand pressure while preserving margin and product availability.",
  },

  {
    id: "growth-opportunity",
    name: "Controlled Growth Opportunity",
    description:
      "Conversion, advertising efficiency, and inventory are healthy, creating an opportunity for controlled growth.",

    metrics: {
      revenueChange: 18,
      trafficChange: 12,
      conversionChange: 9,
      addToCartChange: 11,
      adSpendChange: 6,
      inventoryUnits: 2460,
      grossMargin: 38,
    },

    diagnosis:
      "Commercial indicators are positive, advertising efficiency is healthy, and sufficient inventory is available to support additional demand.",

    decision: "Scale Advertising Carefully",

    action:
      "Increase advertising exposure gradually while monitoring conversion efficiency, inventory, and gross margin.",

    outcome: {
      conversionBefore: 3.6,
      conversionAfter: 3.7,
      revenueBefore: 108600,
      revenueAfter: 119400,
      roasBefore: 3.6,
      roasAfter: 3.8,
      marginBefore: 38,
      marginAfter: 38,
    },

    learning:
      "Controlled advertising growth increased revenue while maintaining conversion efficiency, inventory capacity, and gross margin.",
  },
];