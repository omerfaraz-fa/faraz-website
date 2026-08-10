import {
  commerceData,
  experimentOutcome,
} from "../data/commerceData";

export function getSalesMetrics() {
  return {
    product: commerceData.product.name,
    revenue: commerceData.performance.revenue,
    revenueChange: commerceData.performance.revenueChange,
    traffic: commerceData.performance.traffic,
    trafficChange: commerceData.performance.trafficChange,
    conversionRate: commerceData.performance.conversionRate,
    conversionChange: commerceData.performance.conversionChange,
  };
}
export function getInventoryLevels() {
  return {
    product: commerceData.product.name,
    unitsAvailable: commerceData.performance.inventory,
    status: commerceData.performance.inventoryStatus,
  };
}

export function getCampaignPerformance() {
  return {
    product: commerceData.product.name,
    adSpend: commerceData.performance.adSpend,
    adSpendChange: commerceData.performance.adSpendChange,
    roas: commerceData.performance.roas,
    costPerClick: commerceData.performance.costPerClick,
    costPerClickChange: commerceData.performance.costPerClickChange,
    campaignStatus: commerceData.performance.campaignStatus,
  };
}

export function getProductMetrics() {
  return {
    product: commerceData.product.name,
    productPageViews: commerceData.performance.productPageViews,
    addToCartRate: commerceData.performance.addToCartRate,
    addToCartChange: commerceData.performance.addToCartChange,
    grossMargin: commerceData.performance.grossMargin,
  };
}

export function createProductMessagingExperiment() {
  return {
    experimentId: "EXP-001",
    product: commerceData.product.name,
    action: "Product Messaging Experiment Created",
    variant: "Benefit-led product messaging",
    status: "Running",
    startedAt: "2026-08-09",
  };
}

export function getExperimentOutcome() {
  return experimentOutcome;
}