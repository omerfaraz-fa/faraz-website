"use client";

import React, { useState } from "react";

// ============================================================================
// DATA STRUCTURES & CONSTANTS (Strictly Derived From Original File)
// ============================================================================

interface SourceNode {
  id: string;
  title: string;
  subtitle: string;
  position: string;
}

interface SourcePath {
  id: string;
  d: string;
  delay: string;
}

const ARCH_NODES: SourceNode[] = [
  {
    id: "retail",
    title: "Retail Files",
    subtitle: "Excel / CSV",
    position: "top-[14%]",
  },
  {
    id: "email",
    title: "Emails",
    subtitle: "Shared inboxes",
    position: "top-[29%]",
  },
  {
    id: "sheets",
    title: "Google Sheets",
    subtitle: "Operational inputs",
    position: "top-[51%]",
  },
  {
    id: "other",
    title: "Other Sources",
    subtitle: "Multiple formats",
    position: "top-[73%]",
  },
];

const ARCH_PATHS: SourcePath[] = [
  {
    id: "retail",
    d: "M185 85 C260 85, 250 190, 330 220",
    delay: "0s",
  },
  {
    id: "email",
    d: "M185 190 C260 190, 250 205, 330 225",
    delay: "0.2s",
  },
  {
    id: "sheets",
    d: "M185 295 C260 295, 250 245, 330 230",
    delay: "0.4s",
  },
  {
    id: "other",
    d: "M185 400 C260 400, 250 275, 330 235",
    delay: "0.6s",
  },
];

const TECH_STACK = [
  "Snowflake",
  "Salesforce",
  "Tableau",
  "SQL",
  "Python",
  "Excel",
  "Power Query",
  "Google Sheets",
];

const MY_CONTRIBUTIONS = [
  "Analyzed the existing manual workflow and identified operational bottlenecks",
  "Redesigned the operating process into a structured, automated data platform",
  "Centralized data transformations in Snowflake",
  "Implemented automated validation and exception checks",
  "Prepared standardized outputs for operational systems",
  "Supported testing, documentation, onboarding, and ongoing operations",
];

const PREVIOUS_STEPS = [
  { step: "01", title: "Download incoming files", desc: "Download incoming retail-data files from multiple sources." },
  { step: "02", title: "Excel & Power Query transformations", desc: "Transform data manually using Excel and Power Query." },
  { step: "03", title: "Google Sheets updates", desc: "Update mappings manually in Google Sheets." },
  { step: "04", title: "Manual validation", desc: "Validate outputs manually prior to downstream imports." },
  { step: "05", title: "Operational system imports", desc: "Import data into operational systems." },
  { step: "06", title: "Verify reports and resolve errors", desc: "Verify reports and resolve errors manually." },
];

const AUTOMATED_STEPS = [
  { step: "01", title: "Structured pipelines", desc: "Data loaded into structured pipelines." },
  { step: "02", title: "Centralized Snowflake transforms", desc: "Transformations handled centrally in Snowflake." },
  { step: "03", title: "Automated validation", desc: "Automated validation and exception checks." },
  { step: "04", title: "Standardized output", desc: "Standardized operational-system output." },
  { step: "05", title: "Analytics-ready reporting", desc: "Reporting data made available to analytics tools." },
  { step: "06", title: "Monitoring & exceptions", desc: "Weekly effort reduced to monitoring and exception handling." },
];

const PREVIOUS_PAINS = [
  "Consumes approximately two days every week",
  "Manual and repetitive work",
  "Difficult to train others",
  "High dependency on one person",
  "Increased risk of mistakes",
  "Limited scalability",
];

const AUTOMATED_OUTCOMES = [
  "Weekly processing time reduced to ~2 hours",
  "Shifted operating model to monitoring instead of manual processing",
  "Supported easier onboarding of future team members",
  "Reduced single-person dependency and operational risk",
  "Consistent and repeatable data processing",
  "Supported expansion into additional markets and data sources",
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function GoogleRetailAutomationPage() {
  const [activePath, setActivePath] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"automated" | "previous">("automated");

  return (
    <main className="min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      {/* Dynamic Keyframes for SVG Flow Animations */}
      <style jsx global>{`
        @keyframes csFlowDash {
          0% {
            stroke-dashoffset: 24;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes csPulseDot {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }
        .cs-flow-line {
          stroke-dasharray: 6 6;
          animation: csFlowDash 1.8s linear infinite;
        }
        .cs-pulse-dot {
          animation: csPulseDot 2s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      {/* ==================================================================== */}
      {/* 1. HERO SECTION                                                      */}
      {/* ==================================================================== */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <a
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            Back to homepage
          </a>

          <div className="mt-12 sm:mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
              Case Study · Data Integration & Process Automation
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              Retail Operations Automation Platform
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              A fragmented weekly retail-data workflow involving multiple files,
              manual transformations, operational-system imports, and reporting
              was redesigned into a reliable, scalable, Snowflake-based platform.
            </p>
          </div>

          {/* Metric Hero Cards */}
          <div className="mt-12 grid gap-4 border-t border-slate-200/80 pt-10 sm:mt-14 sm:grid-cols-3 sm:gap-6">
            <div className="group rounded-2xl border border-slate-200/70 bg-slate-50/50 p-6 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Before
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                ~2 days
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Weekly manual preparation and processing
              </p>
            </div>

            <div className="group rounded-2xl border border-emerald-500/20 bg-emerald-50/30 p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-50/60 hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                After
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl">
                ~2 hours
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-900/80">
                Weekly monitoring and exception handling
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-200/70 bg-slate-50/50 p-6 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Scope
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Multi-market retail
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Multiple data sources, systems, users, and reporting outputs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. MY CONTRIBUTIONS                                                  */}
      {/* ==================================================================== */}
      <section className="border-b border-slate-200/80 bg-slate-50/40 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
            Role & Execution
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-4xl">
            My Contributions
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {MY_CONTRIBUTIONS.map((contribution, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 text-sm font-medium text-slate-800 shadow-sm"
              >
                <span className="text-slate-400">•</span>
                <span>{contribution}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-10 border-t border-slate-200/80 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Technology Stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. THE CHALLENGE                                                     */}
      {/* ==================================================================== */}
      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
            The Challenge
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl sm:leading-[1.1]">
            A business-critical process depended almost entirely on manual
            work.
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
            <p className="max-w-3xl">
              Every week, data arrived from multiple retail sources in different
              formats. The process relied on manual Excel transformations, Google
              Sheets, Power Query, and repetitive validation before information
              could be imported into operational systems and made available for
              reporting.
            </p>

            <p className="max-w-3xl">
              The workflow consumed approximately two working days every week,
              created a single point of dependency, and made onboarding difficult
              because the process relied heavily on manual knowledge and repeated
              intervention.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. BEFORE / AFTER COMPARISON                                         */}
      {/* ==================================================================== */}
      <section className="border-t border-slate-200/80 bg-slate-50/60 px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
                Process Transformation
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Before & After
              </h2>
            </div>

            {/* View Mode Toggle Switch */}
            <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
              <button
                onClick={() => setViewMode("automated")}
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 sm:text-sm ${
                  viewMode === "automated"
                    ? "bg-slate-950 text-white shadow"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                Automated Process
              </button>
              <button
                onClick={() => setViewMode("previous")}
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 sm:text-sm ${
                  viewMode === "previous"
                    ? "bg-slate-950 text-white shadow"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                Previous Process
              </button>
            </div>
          </div>

          {/* Toggleable Process Steps */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            
            {/* Step Sequence Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                  {viewMode === "automated" ? "Automated Workflow" : "Previous Manual Workflow"}
                </h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    viewMode === "automated"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                      : "bg-amber-50 text-amber-700 border border-amber-200/60"
                  }`}
                >
                  {viewMode === "automated" ? "System Operated" : "Human Operated"}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {(viewMode === "automated" ? AUTOMATED_STEPS : PREVIOUS_STEPS).map(
                  (item) => (
                    <div
                      key={item.step}
                      className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-colors duration-200 hover:border-slate-200/80 hover:bg-slate-50/80"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-700">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Operational Impact Card */}
            <div
              className={`rounded-3xl p-6 transition-all duration-300 sm:p-8 ${
                viewMode === "automated"
                  ? "bg-slate-950 text-white shadow-xl"
                  : "border border-slate-200 bg-white text-slate-950 shadow-sm"
              }`}
            >
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {viewMode === "automated" ? "Business Outcomes" : "Challenges"}
              </h3>

              <div className="mt-6 space-y-4">
                {(viewMode === "automated" ? AUTOMATED_OUTCOMES : PREVIOUS_PAINS).map(
                  (text, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 rounded-2xl p-3 text-sm font-medium leading-6 transition-colors ${
                        viewMode === "automated"
                          ? "bg-slate-900/90 text-slate-200 border border-slate-800/80"
                          : "bg-slate-50 text-slate-700 border border-slate-100"
                      }`}
                    >
                      <span
                        className={
                          viewMode === "automated"
                            ? "text-emerald-400"
                            : "text-amber-500"
                        }
                      >
                        {viewMode === "automated" ? "✓" : "✕"}
                      </span>
                      <span>{text}</span>
                    </div>
                  )
                )}
              </div>

              {/* Dynamic Bottom Metric */}
              <div
                className={`mt-8 border-t pt-6 ${
                  viewMode === "automated"
                    ? "border-slate-800"
                    : "border-slate-100"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[0.16em] ${
                    viewMode === "automated"
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >
                  Processing Time
                </p>
                <p
                  className={`mt-2 text-3xl font-semibold tracking-tight ${
                    viewMode === "automated"
                      ? "text-emerald-400"
                      : "text-slate-950"
                  }`}
                >
                  {viewMode === "automated" ? "~2 hours" : "~2 days"}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. ARCHITECTURE VISUALIZATION                                        */}
      {/* ==================================================================== */}
      <section className="border-t border-slate-200/80 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
            Platform Architecture
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
            The complete transformation from fragmented manual work to a
            scalable automated platform.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            The system architecture below illustrates how multiple retail data sources flow through
            structured data ingestion into Snowflake for central transformation and validation,
            delivering standardized operational and analytics outputs.
          </p>

          {/* ---------------------------------------------------------------- */}
          {/* MOBILE ARCHITECTURE FLOW (< xl Screens)                          */}
          {/* ---------------------------------------------------------------- */}
          <div className="mt-12 block xl:hidden">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-950 p-5 text-white shadow-xl sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.12),transparent_60%)]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    System Architecture
                  </p>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
                    Data Flow
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {/* Step 1 */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 backdrop-blur-sm">
                    <p className="mb-2.5 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                      1. Multiple Retail Data Sources
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-2.5 text-center">
                        <p className="text-xs font-semibold text-slate-200">Retail Files</p>
                        <p className="mt-0.5 text-[10px] text-slate-400">Excel / CSV</p>
                      </div>
                      <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-2.5 text-center">
                        <p className="text-xs font-semibold text-slate-200">Emails</p>
                        <p className="mt-0.5 text-[10px] text-slate-400">Shared inboxes</p>
                      </div>
                      <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-2.5 text-center">
                        <p className="text-xs font-semibold text-slate-200">Google Sheets</p>
                        <p className="mt-0.5 text-[10px] text-slate-400">Operational inputs</p>
                      </div>
                      <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-2.5 text-center">
                        <p className="text-xs font-semibold text-slate-200">Other Sources</p>
                        <p className="mt-0.5 text-[10px] text-slate-400">Multiple formats</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center py-0.5">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-[2px] bg-gradient-to-b from-slate-700 to-emerald-400/80" />
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="rounded-2xl border border-emerald-400/60 bg-emerald-950/40 p-4 text-center backdrop-blur-sm shadow-[0_0_24px_rgba(52,211,153,0.12)]">
                    <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">2. Ingestion</p>
                    <p className="mt-1 text-sm font-semibold text-white">Structured Data Ingestion</p>
                    <p className="mt-0.5 text-xs text-emerald-200">Automated loading pipelines</p>
                  </div>

                  <div className="flex justify-center py-0.5">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-[2px] bg-gradient-to-b from-emerald-400/80 to-sky-400/80" />
                      <div className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="rounded-2xl border border-sky-400/60 bg-sky-950/40 p-4 text-center backdrop-blur-sm shadow-[0_0_24px_rgba(56,189,248,0.12)]">
                    <p className="text-xs font-medium uppercase tracking-wider text-sky-400">3. Central Engine</p>
                    <p className="mt-1 text-sm font-semibold text-white">Snowflake Transformation & Validation</p>
                    <p className="mt-0.5 text-xs text-sky-200">Centralized logic and validation checks</p>
                  </div>

                  <div className="flex justify-center py-0.5">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-[2px] bg-gradient-to-b from-sky-400/80 to-indigo-400/80" />
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 backdrop-blur-sm">
                    <p className="mb-2.5 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                      4. System Destinations
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-indigo-400/50 bg-indigo-950/40 p-3 text-center">
                        <p className="text-xs font-semibold text-white">Operational Systems</p>
                        <p className="mt-0.5 text-[10px] text-indigo-300">Standardized output</p>
                      </div>

                      <div className="rounded-xl border border-violet-400/50 bg-violet-950/40 p-3 text-center">
                        <p className="text-xs font-semibold text-white">Analytics & Reporting</p>
                        <p className="mt-0.5 text-[10px] text-violet-300">Reporting outputs</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-6 border-t border-slate-800/80 pt-4 text-center">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                    Data Sources <span className="mx-1.5 text-slate-600">→</span> Snowflake <span className="mx-1.5 text-slate-600">→</span> Operational & Reporting Outputs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* DESKTOP INTERACTIVE ARCHITECTURE (xl+ Screens)                   */}
          {/* ---------------------------------------------------------------- */}
          <div className="mt-12 hidden xl:block">
            <div className="relative mx-auto h-[560px] w-full max-w-[1100px] overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-slate-950 p-8 shadow-2xl">
              
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_50%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-25 [background-image:linear-gradient(rgba(56,189,248,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.3)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_top,black,transparent)]" />

              <div className="absolute left-8 top-8 flex items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Architecture Overview
                </p>
                <span className="inline-flex items-center rounded-full bg-slate-800/80 px-2.5 py-0.5 text-[10px] font-medium text-slate-300 border border-slate-700/60">
                  Hover nodes to inspect
                </span>
              </div>

              <svg
                viewBox="0 0 700 520"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="flowGradientCS" x1="0" x2="1">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>

                  <filter id="softGlowCS">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {ARCH_PATHS.map((path) => {
                  const isSelected = activePath === path.id;
                  const anotherPathIsSelected =
                    activePath !== null && activePath !== path.id;

                  return (
                    <path
                      key={path.id}
                      d={path.d}
                      fill="none"
                      stroke="url(#flowGradientCS)"
                      strokeWidth={isSelected ? 3.5 : 2}
                      filter={isSelected ? "url(#softGlowCS)" : undefined}
                      className={`cs-flow-line transition-all duration-300 ${
                        anotherPathIsSelected ? "opacity-15" : "opacity-100"
                      }`}
                      style={{ animationDelay: path.delay }}
                    />
                  );
                })}

                <path
                  d="M435 230 C500 230, 490 170, 555 150"
                  fill="none"
                  stroke="url(#flowGradientCS)"
                  strokeWidth={activePath ? 3 : 2}
                  filter={activePath ? "url(#softGlowCS)" : undefined}
                  className="cs-flow-line transition-all duration-300"
                  style={{ animationDelay: "0.8s" }}
                />

                <path
                  d="M435 230 C500 230, 490 295, 555 315"
                  fill="none"
                  stroke="url(#flowGradientCS)"
                  strokeWidth={activePath ? 3 : 2}
                  filter={activePath ? "url(#softGlowCS)" : undefined}
                  className="cs-flow-line transition-all duration-300"
                  style={{ animationDelay: "1s" }}
                />

                <circle
                  cx="330"
                  cy="225"
                  r={activePath ? 5 : 4}
                  fill="#ffffff"
                  filter="url(#softGlowCS)"
                  className="cs-pulse-dot transition-all duration-300"
                />

                <circle
                  cx="435"
                  cy="230"
                  r={activePath ? 5 : 4}
                  fill="#ffffff"
                  filter="url(#softGlowCS)"
                  className="cs-pulse-dot transition-all duration-300"
                  style={{ animationDelay: "0.8s" }}
                />
              </svg>

              {/* Source Nodes */}
              {ARCH_NODES.map((node) => {
                const isSelected = activePath === node.id;
                const anotherNodeIsSelected =
                  activePath !== null && activePath !== node.id;

                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setActivePath(node.id)}
                    onMouseLeave={() => setActivePath(null)}
                    className={`absolute left-8 ${node.position} z-10 w-44 cursor-pointer rounded-2xl border bg-slate-900/90 px-4 py-3.5 text-white shadow-lg backdrop-blur transition-all duration-300 ${
                      isSelected
                        ? "scale-[1.04] border-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.28)]"
                        : "border-slate-800"
                    } ${anotherNodeIsSelected ? "opacity-40" : "opacity-100"}`}
                  >
                    <p className="text-sm font-semibold">{node.title}</p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {node.subtitle}
                    </p>
                  </div>
                );
              })}

              {/* Structured Ingestion Node */}
              <div
                className={`absolute left-[46%] top-[44%] z-10 w-48 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-emerald-400/70 bg-emerald-950/80 px-5 py-5 text-center text-white backdrop-blur transition-all duration-300 ${
                  activePath
                    ? "shadow-[0_0_45px_rgba(52,211,153,0.32)]"
                    : "shadow-[0_0_35px_rgba(52,211,153,0.18)]"
                }`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">Pipeline</p>
                <p className="mt-1 text-sm font-semibold">Structured Ingestion</p>
                <p className="mt-1 text-xs text-emerald-200">
                  Data Loading Pipelines
                </p>
              </div>

              {/* Snowflake Engine Node */}
              <div
                className={`absolute left-[68%] top-[44%] z-10 w-48 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-sky-400/70 bg-sky-950/80 px-5 py-5 text-center text-white backdrop-blur transition-all duration-300 ${
                  activePath
                    ? "shadow-[0_0_45px_rgba(56,189,248,0.35)]"
                    : "shadow-[0_0_35px_rgba(56,189,248,0.2)]"
                }`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-sky-400">Engine</p>
                <p className="mt-1 text-sm font-semibold">Snowflake Platform</p>
                <p className="mt-1 text-xs text-sky-200">Transform & Validate</p>
              </div>

              {/* Operational Output Node */}
              <div className="absolute right-8 top-[19%] z-10 w-40 rounded-2xl border border-indigo-400/60 bg-indigo-950/70 px-4 py-4 text-white shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-[0_0_28px_rgba(129,140,248,0.25)]">
                <p className="text-sm font-semibold">Operational Systems</p>
                <p className="mt-1 text-xs text-indigo-200">Standardized Outputs</p>
              </div>

              {/* Analytics Output Node */}
              <div className="absolute right-8 top-[56%] z-10 w-40 rounded-2xl border border-violet-400/60 bg-violet-950/70 px-4 py-4 text-white shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_0_28px_rgba(167,139,250,0.25)]">
                <p className="text-sm font-semibold">Analytics Tools</p>
                <p className="mt-1 text-xs text-violet-200">
                  Reporting Outputs
                </p>
              </div>

              <div className="absolute bottom-6 left-1/2 w-full -translate-x-1/2 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Multiple Retail Data Sources
                  <span className="mx-3 text-slate-700">→</span>
                  Snowflake Transformation
                  <span className="mx-3 text-slate-700">→</span>
                  Operational & Reporting Outputs
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. BUSINESS IMPACT                                                   */}
      {/* ==================================================================== */}
      <section className="border-t border-slate-200/80 bg-slate-50/60 px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
            Business Impact
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl sm:leading-[1.1]">
            More than automation—it changed how the operation could scale.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
            The objective was never simply to automate tasks. It was to redesign a
            business process so it became easier to operate, easier to maintain,
            and capable of supporting future growth without proportional increases
            in manual effort.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            
            {/* Operational Improvements Card */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                Operational Improvements
              </h3>

              <ul className="mt-6 space-y-4 text-sm text-slate-600 sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Weekly effort reduced from approximately two days to two hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Manual repetitive work largely eliminated</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Consistent and repeatable data processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Simplified onboarding of future team members</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Reduced operational risk</span>
                </li>
              </ul>
            </div>

            {/* Long-Term Value Card */}
            <div className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                Long-Term Value
              </h3>

              <ul className="mt-6 space-y-4 text-sm text-slate-600 sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Easier expansion into additional markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Better data quality and consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Improved reporting reliability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Centralized business logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>A scalable foundation for future automation</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7. CONTINUE EXPLORING                                                */}
      {/* ==================================================================== */}
      <section className="relative overflow-hidden border-t border-slate-200/80 bg-slate-950 px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-sm">
            Continue Exploring
          </p>

          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl sm:leading-[1.1]">
                Internal Finance Integration Platform
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                See how a fragile, machine-dependent finance synchronization process
                was redesigned into a browser-accessible platform with centralized
                Snowflake integration and improved operational reliability.
              </p>
            </div>

            <a
              href="/case-studies/internal-finance-integration"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-slate-100 active:scale-[0.98]"
            >
              Read case study
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}