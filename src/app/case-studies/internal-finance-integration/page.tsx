"use client";

import React, { useState } from "react";

// ============================================================================
// DATA STRUCTURES & CONSTANTS
// ============================================================================

const TECH_STACK = [
  "Python",
  "Flask",
  "Snowflake",
  "SQL",
  "Windows Task Scheduler",
  "Web Interface",
  "Process Automation",
  "Data Integration",
];

const PREVIOUS_STEPS = [
  { step: "01", title: "Access Dedicated Machine", desc: "Access a dedicated Windows machine running local legacy processes." },
  { step: "02", title: "Run Python Process", desc: "Run or inspect the Python process manually." },
  { step: "03", title: "Execute Queries", desc: "Execute database queries manually to pull financial data." },
  { step: "04", title: "Export Query Results", desc: "Export query results manually for formatting." },
  { step: "05", title: "Move Data Toward Snowflake", desc: "Move the data toward Snowflake manually." },
  { step: "06", title: "Manual Validation", desc: "Validate and troubleshoot failures manually." },
];

const AUTOMATED_STEPS = [
  { step: "01", title: "Browser Access", desc: "Access the process through a web browser." },
  { step: "02", title: "Web Platform Controls", desc: "Manage integration tasks through a browser-based interface." },
  { step: "03", title: "Python Integration Layer", desc: "Python integration layer manages data synchronization." },
  { step: "04", title: "Automated Startup", desc: "Windows Task Scheduler launches the application automatically after machine startup." },
  { step: "05", title: "Centralized Sync", desc: "Financial data synchronized into Snowflake through the integration process." },
  { step: "06", title: "Simpler Experience", desc: "Reduced dependence on manual database work for internal business users." },
];

const PREVIOUS_PAINS = [
  "Dependency on a dedicated Windows machine",
  "Dependency on specialist knowledge",
  "Risk of manual query and export errors",
  "Application could be closed accidentally",
  "Restarts could leave the process unavailable",
  "Limited visibility into failures",
];

const AUTOMATED_OUTCOMES = [
  "Browser-accessible user interface for internal business users",
  "Centralized synchronization into Snowflake",
  "Python integration layer handling technical steps",
  "Automated application startup via Task Scheduler",
  "Reduced dependence on manual database work",
  "Simpler experience for internal business users",
];

const CONTRIBUTION_CATEGORIES = [
  {
    title: "Analysis & Design",
    items: [
      "Analyzed the existing synchronization process",
      "Identified operational bottlenecks and dependencies",
      "Designed a simpler browser-based operating model",
      "Planned the integration architecture",
    ],
  },
  {
    title: "Development",
    items: [
      "Built the Python and Flask integration platform",
      "Integrated data into Snowflake",
      "Created the browser interface",
      "Implemented automated startup using Windows Task Scheduler",
    ],
  },
  {
    title: "Operations",
    items: [
      "Improved operational reliability",
      "Reduced manual intervention",
      "Simplified troubleshooting",
      "Improved long-term maintainability",
    ],
  },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function InternalFinanceIntegrationPage() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"automated" | "previous">("automated");

  return (
    <main className="min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      {/* Dynamic Keyframes for Flow Animations */}
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
              Case Study · Business Systems & Data Integration
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              Modernizing an internal finance integration platform through
              automation and business-focused system design.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              A fragile, machine-dependent synchronization process was redesigned
              into a browser-accessible platform that centralized financial data,
              simplified operations for business users, and improved reliability
              through automation.
            </p>
          </div>

          {/* Metric Hero Cards */}
          <div className="mt-12 grid gap-4 border-t border-slate-200/80 pt-10 sm:mt-14 sm:grid-cols-3 sm:gap-6">
            <div className="group rounded-2xl border border-slate-200/70 bg-slate-50/50 p-6 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Before
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Manual & Technical
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Database queries, exports and technical intervention
              </p>
            </div>

            <div className="group rounded-2xl border border-emerald-500/20 bg-emerald-50/30 p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-50/60 hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                After
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-emerald-950 sm:text-3xl">
                Browser Platform
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-900/80">
                Accessible to internal business users with automated startup
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-200/70 bg-slate-50/50 p-6 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Technology Stack
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Python • Flask
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Snowflake · SQL · Windows Automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. THE CHALLENGE                                                     */}
      {/* ==================================================================== */}
      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
            The Challenge
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl sm:leading-[1.1]">
            A finance process depended on technical knowledge, manual exports, and
            one machine remaining available.
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
            <p className="max-w-3xl">
              Internal business users depended on a technical workflow involving a
              legacy database, Python scripts, manual queries, and manual exports before
              financial data could be synchronized into Snowflake.
            </p>

            <p className="max-w-3xl">
              The process also relied on a dedicated Windows machine and on the person
              who understood how to operate and troubleshoot it. If the application was
              closed, the machine restarted, or the scheduled process failed, the
              integration could become unavailable without users immediately knowing.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. BEFORE / AFTER OPERATING MODEL COMPARISON                         */}
      {/* ==================================================================== */}
      <section className="border-t border-slate-200/80 bg-slate-50/60 px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
                Operating Model Transformation
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
                Browser Platform
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

          {/* Toggleable Process Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            
            {/* Step Sequence Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                  {viewMode === "automated" ? "New Operating Model" : "Manual Workflow"}
                </h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    viewMode === "automated"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                      : "bg-amber-50 text-amber-700 border border-amber-200/60"
                  }`}
                >
                  {viewMode === "automated" ? "Browser Platform" : "Machine Dependent"}
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

            {/* Business Outcomes / Risks Card */}
            <div
              className={`rounded-3xl p-6 transition-all duration-300 sm:p-8 ${
                viewMode === "automated"
                  ? "bg-slate-950 text-white shadow-xl"
                  : "border border-slate-200 bg-white text-slate-950 shadow-sm"
              }`}
            >
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {viewMode === "automated" ? "Business Benefits" : "Operational Risks"}
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
                  Accessibility & Operating Model
                </p>
                <p
                  className={`mt-2 text-2xl font-semibold tracking-tight sm:text-3xl ${
                    viewMode === "automated"
                      ? "text-emerald-400"
                      : "text-slate-950"
                  }`}
                >
                  {viewMode === "automated" ? "Browser Platform" : "Machine Dependent"}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. SOLUTION ARCHITECTURE (Interactive React Component)               */}
      {/* ==================================================================== */}
      <section className="border-t border-slate-200/80 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
            Solution Architecture
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
            A simpler architecture separated the user experience from the technical
            integration process.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Internal business users accessed the process through a browser-based
            interface, while the Python integration layer handled synchronization
            between the internal financial system and Snowflake.
          </p>

          {/* ---------------------------------------------------------------- */}
          {/* MOBILE ARCHITECTURE (< xl Screens)                               */}
          {/* ---------------------------------------------------------------- */}
          <div className="mt-12 block xl:hidden">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-950 p-5 text-white shadow-xl sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.12),transparent_60%)]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Integration Flow
                  </p>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
                    Sequential Sync
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {/* Step 1 */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-center backdrop-blur-sm">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">1. Users</p>
                    <p className="mt-1 text-sm font-semibold text-white">Business Users</p>
                    <p className="mt-0.5 text-xs text-slate-400">Internal operations teams</p>
                  </div>

                  <div className="flex justify-center py-0.5">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-[2px] bg-gradient-to-b from-slate-700 to-emerald-400/80" />
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="rounded-2xl border border-emerald-400/60 bg-emerald-950/40 p-4 text-center backdrop-blur-sm shadow-[0_0_24px_rgba(52,211,153,0.12)]">
                    <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">2. User Experience</p>
                    <p className="mt-1 text-sm font-semibold text-white">Browser-Based Platform</p>
                    <p className="mt-0.5 text-xs text-emerald-200">Browser-based operating model</p>
                  </div>

                  <div className="flex justify-center py-0.5">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-[2px] bg-gradient-to-b from-emerald-400/80 to-sky-400/80" />
                      <div className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="rounded-2xl border border-sky-400/60 bg-sky-950/40 p-4 text-center backdrop-blur-sm shadow-[0_0_24px_rgba(56,189,248,0.12)]">
                    <p className="text-xs font-medium uppercase tracking-wider text-sky-400">3. Integration Layer</p>
                    <p className="mt-1 text-sm font-semibold text-white">Python & Flask Integration</p>
                    <p className="mt-0.5 text-xs text-sky-200">Automated app startup via Task Scheduler</p>
                  </div>

                  <div className="flex justify-center py-0.5">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-[2px] bg-gradient-to-b from-sky-400/80 to-indigo-400/80" />
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                    </div>
                  </div>

                  {/* Step 4 & Step 5 Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="rounded-2xl border border-indigo-400/60 bg-indigo-950/40 p-4 text-center backdrop-blur-sm shadow-[0_0_24px_rgba(129,140,248,0.12)]">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-indigo-400">Data Source</p>
                      <p className="mt-1 text-xs font-semibold text-white sm:text-sm">Financial System</p>
                      <p className="mt-0.5 text-[10px] text-indigo-200">Database & queries</p>
                    </div>

                    <div className="rounded-2xl border border-violet-400/60 bg-violet-950/40 p-4 text-center backdrop-blur-sm shadow-[0_0_24px_rgba(167,139,250,0.12)]">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-violet-400">Data Warehouse</p>
                      <p className="mt-1 text-xs font-semibold text-white sm:text-sm">Snowflake</p>
                      <p className="mt-0.5 text-[10px] text-violet-200">Centralized Platform</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-800/80 pt-4 text-center">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                    Business Users <span className="mx-1 text-slate-600">→</span> Browser <span className="mx-1 text-slate-600">→</span> Python <span className="mx-1 text-slate-600">→</span> Financial System ↔ Snowflake
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* DESKTOP INTERACTIVE ARCHITECTURE (xl+ Screens)                   */}
          {/* Shared ViewBox Coordinate System for Perfect Card & Path Alignment*/}
          {/* ---------------------------------------------------------------- */}
          <div className="mt-12 hidden xl:block">
            <div className="relative mx-auto h-[580px] w-full max-w-[1100px] overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-slate-950 p-8 shadow-2xl">
              
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_50%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-25 [background-image:linear-gradient(rgba(56,189,248,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.3)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_top,black,transparent)]" />

              <div className="absolute left-8 top-8 flex items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Integration Flow Visualizer
                </p>
                <span className="inline-flex items-center rounded-full bg-slate-800/80 px-2.5 py-0.5 text-[10px] font-medium text-slate-300 border border-slate-700/60">
                  Hover nodes to inspect
                </span>
              </div>

              {/* Shared Coordinate SVG Layer (1000 x 580) */}
              <svg
                viewBox="0 0 1000 580"
                className="absolute inset-0 h-full w-full"
              >
                <defs>
                  <linearGradient id="flowGradientFin" x1="0" y1="0" x2="1000" y2="580" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>

                  <filter id="softGlowFin">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Path 1: Business Users (bottom: y=130) -> Browser-Based Platform (top: y=180) */}
                <path
                  d="M500 130 L500.01 180"
                  fill="none"
                  stroke="url(#flowGradientFin)"
                  strokeWidth={activeNode === "users" || activeNode === "browser" ? 3.5 : 2}
                  filter={activeNode === "users" || activeNode === "browser" ? "url(#softGlowFin)" : undefined}
                  className={`cs-flow-line transition-all duration-300 ${
                    activeNode && activeNode !== "users" && activeNode !== "browser" ? "opacity-20" : "opacity-100"
                  }`}
                />

                {/* Path 2: Browser-Based Platform (bottom: y=250) -> Python & Flask Integration (top: y=300) */}
                <path
                  d="M500 250 L500.01 300"
                  fill="none"
                  stroke="url(#flowGradientFin)"
                  strokeWidth={activeNode === "browser" || activeNode === "python" ? 3.5 : 2}
                  filter={activeNode === "browser" || activeNode === "python" ? "url(#softGlowFin)" : undefined}
                  className={`cs-flow-line transition-all duration-300 ${
                    activeNode && activeNode !== "browser" && activeNode !== "python" ? "opacity-20" : "opacity-100"
                  }`}
                  style={{ animationDelay: "0.2s" }}
                />

                {/* Path 3: Python Integration (bottom: y=380) -> Financial System (top: y=440) */}
                <path
                  d="M420 380 C 420 410, 290 410, 290 440"
                  fill="none"
                  stroke="url(#flowGradientFin)"
                  strokeWidth={activeNode === "python" || activeNode === "finSystem" ? 3.5 : 2}
                  filter={activeNode === "python" || activeNode === "finSystem" ? "url(#softGlowFin)" : undefined}
                  className={`cs-flow-line transition-all duration-300 ${
                    activeNode && activeNode !== "python" && activeNode !== "finSystem" ? "opacity-20" : "opacity-100"
                  }`}
                  style={{ animationDelay: "0.4s" }}
                />

                {/* Path 4: Python Integration (bottom: y=380) -> Snowflake (top: y=440) */}
                <path
                  d="M580 380 C 580 410, 710 410, 710 440"
                  fill="none"
                  stroke="url(#flowGradientFin)"
                  strokeWidth={activeNode === "python" || activeNode === "snowflake" ? 3.5 : 2}
                  filter={activeNode === "python" || activeNode === "snowflake" ? "url(#softGlowFin)" : undefined}
                  className={`cs-flow-line transition-all duration-300 ${
                    activeNode && activeNode !== "python" && activeNode !== "snowflake" ? "opacity-20" : "opacity-100"
                  }`}
                  style={{ animationDelay: "0.4s" }}
                />

                {/* ========================================================== */}
                {/* SVG ForeignObjects for 100% Geometry Sync With SVG Paths   */}
                {/* ========================================================== */}

                {/* Node 1: Business Users (Top) */}
                <foreignObject x="390" y="60" width="220" height="70">
                  <div
                    onMouseEnter={() => setActiveNode("users")}
                    onMouseLeave={() => setActiveNode(null)}
                    className={`h-full w-full cursor-pointer rounded-2xl border bg-slate-900/90 p-3.5 text-center text-white shadow-lg backdrop-blur transition-all duration-300 ${
                      activeNode === "users"
                        ? "scale-[1.04] border-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.28)]"
                        : "border-slate-800"
                    } ${activeNode && activeNode !== "users" && activeNode !== "browser" ? "opacity-40" : "opacity-100"}`}
                  >
                    <p className="text-sm font-semibold">Business Users</p>
                    <p className="mt-0.5 text-xs text-slate-400">Internal Operations</p>
                  </div>
                </foreignObject>

                {/* Node 2: Browser-Based Platform */}
                <foreignObject x="380" y="180" width="240" height="70">
                  <div
                    onMouseEnter={() => setActiveNode("browser")}
                    onMouseLeave={() => setActiveNode(null)}
                    className={`h-full w-full cursor-pointer rounded-2xl border bg-slate-900/90 p-3.5 text-center text-white shadow-lg backdrop-blur transition-all duration-300 ${
                      activeNode === "browser"
                        ? "scale-[1.04] border-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.28)]"
                        : "border-slate-800"
                    } ${activeNode && activeNode !== "browser" && activeNode !== "users" && activeNode !== "python" ? "opacity-40" : "opacity-100"}`}
                  >
                    <p className="text-sm font-semibold">Browser-Based Platform</p>
                    <p className="mt-0.5 text-xs text-slate-400">Web Interface</p>
                  </div>
                </foreignObject>

                {/* Node 3: Python & Flask Integration (Center Heart) */}
                <foreignObject x="360" y="300" width="280" height="80">
                  <div
                    onMouseEnter={() => setActiveNode("python")}
                    onMouseLeave={() => setActiveNode(null)}
                    className={`h-full w-full cursor-pointer rounded-2xl border bg-emerald-950/90 p-4 text-center text-white backdrop-blur transition-all duration-300 ${
                      activeNode === "python"
                        ? "scale-[1.04] border-emerald-400 shadow-[0_0_45px_rgba(52,211,153,0.38)]"
                        : "border-emerald-400/70 shadow-[0_0_35px_rgba(52,211,153,0.2)]"
                    } ${activeNode && activeNode !== "python" && activeNode !== "browser" && activeNode !== "finSystem" && activeNode !== "snowflake" ? "opacity-40" : "opacity-100"}`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">Integration Engine</p>
                    <p className="mt-0.5 text-base font-semibold">Python & Flask Integration</p>
                    <p className="mt-0.5 text-xs text-emerald-200">Automated Synchronization</p>
                  </div>
                </foreignObject>

                {/* Node 4: Financial System (Bottom Left Branch) */}
                <foreignObject x="180" y="440" width="220" height="75">
                  <div
                    onMouseEnter={() => setActiveNode("finSystem")}
                    onMouseLeave={() => setActiveNode(null)}
                    className={`h-full w-full cursor-pointer rounded-2xl border bg-indigo-950/80 p-3.5 text-center text-white shadow-lg backdrop-blur transition-all duration-300 ${
                      activeNode === "finSystem" || activeNode === "python"
                        ? "scale-[1.04] border-indigo-300 shadow-[0_0_32px_rgba(129,140,248,0.3)]"
                        : "border-indigo-400/60"
                    } ${activeNode && activeNode !== "finSystem" && activeNode !== "python" ? "opacity-40" : "opacity-100"}`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-indigo-300">Data Source</p>
                    <p className="mt-0.5 text-sm font-semibold">Financial System</p>
                    <p className="mt-0.5 text-xs text-indigo-200">Legacy Database & Queries</p>
                  </div>
                </foreignObject>

                {/* Node 5: Snowflake (Bottom Right Branch) */}
                <foreignObject x="600" y="440" width="220" height="75">
                  <div
                    onMouseEnter={() => setActiveNode("snowflake")}
                    onMouseLeave={() => setActiveNode(null)}
                    className={`h-full w-full cursor-pointer rounded-2xl border bg-violet-950/80 p-3.5 text-center text-white shadow-lg backdrop-blur transition-all duration-300 ${
                      activeNode === "snowflake" || activeNode === "python"
                        ? "scale-[1.04] border-violet-300 shadow-[0_0_32px_rgba(167,139,250,0.3)]"
                        : "border-violet-400/60"
                    } ${activeNode && activeNode !== "snowflake" && activeNode !== "python" ? "opacity-40" : "opacity-100"}`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-violet-300">Data Warehouse</p>
                    <p className="mt-0.5 text-sm font-semibold">Snowflake</p>
                    <p className="mt-0.5 text-xs text-violet-200">Centralized Data Platform</p>
                  </div>
                </foreignObject>

                {/* Junction Pulsing Dots Exact Anchors */}
                <circle
                  cx="500"
                  cy="180"
                  r={activeNode === "users" || activeNode === "browser" ? 5 : 4}
                  fill="#ffffff"
                  filter="url(#softGlowFin)"
                  className="cs-pulse-dot transition-all duration-300"
                />

                <circle
                  cx="500"
                  cy="300"
                  r={activeNode === "browser" || activeNode === "python" ? 5 : 4}
                  fill="#ffffff"
                  filter="url(#softGlowFin)"
                  className="cs-pulse-dot transition-all duration-300"
                  style={{ animationDelay: "0.2s" }}
                />
              </svg>

              <div className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Business Users
                  <span className="mx-2 text-slate-700">→</span>
                  Browser-Based Platform
                  <span className="mx-2 text-slate-700">→</span>
                  Python & Flask Integration
                  <span className="mx-2 text-slate-700">→</span>
                  Financial System ↔ Snowflake
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. BUSINESS IMPACT                                                   */}
      {/* ==================================================================== */}
      <section className="border-t border-slate-200/80 bg-slate-50/60 px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
            Business Impact
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl sm:leading-[1.1]">
            The platform made a technical finance process easier to operate, support,
            and maintain.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
            The most important outcome was not simply moving data into Snowflake. The
            process became more accessible to internal business users, less dependent
            on manual database work, and more resilient to common operational issues.
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
                  <span>Reduced manual query and export work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Simplified access for non-technical users</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Reduced dependence on an open command prompt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Improved recovery after machine restart</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Centralized financial data in Snowflake</span>
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
                  <span>Lower key-person dependency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>More consistent operating process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Better foundation for monitoring and alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Easier future maintenance and enhancement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Stronger foundation for scalable integration</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. TECHNOLOGY STACK                                                  */}
      {/* ==================================================================== */}
      <section className="border-t border-slate-200/80 bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
            Technology Stack
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            A lightweight stack built around integration, accessibility, and operational continuity.
          </h2>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {TECH_STACK.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-200 bg-slate-50/80 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm sm:text-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7. MY CONTRIBUTIONS                                                  */}
      {/* ==================================================================== */}
      <section className="border-t border-slate-200/80 bg-slate-50/40 px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
            My Contributions
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
            I redesigned the workflow with a focus on reliability, accessibility, and maintainability.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CONTRIBUTION_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-xl font-semibold text-slate-950 sm:text-2xl">
                  {category.title}
                </h3>

                <ul className="mt-6 space-y-3.5 text-sm text-slate-600 sm:text-base">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-slate-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Core Philosophy Banner */}
            <div className="flex flex-col justify-between rounded-3xl bg-slate-950 p-6 text-white shadow-xl sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Engineering Philosophy
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
                  Building systems people can operate—not just systems that work.
                </h3>
              </div>

              <div className="mt-8 border-t border-slate-800 pt-6 text-xs text-slate-400">
                Focus: Accessibility · Reliability · Operational Continuity
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 8. CONTINUE EXPLORING                                                */}
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
                Retail Operations Automation Platform
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                See how a fragmented weekly retail-data process was transformed into
                a scalable automated platform with centralized processing,
                validation, and reporting.
              </p>
            </div>

            <a
              href="/case-studies/retail-operations-automation"
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