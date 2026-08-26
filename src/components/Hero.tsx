"use client";

import { useState } from "react";

// Types & Data Structures
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

const SOURCE_NODES: SourceNode[] = [
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

const SOURCE_PATHS: SourcePath[] = [
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

export default function Hero() {
  const [activePath, setActivePath] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
      {/* Global CSS for System Flow Animations */}
      <style jsx global>{`
        @keyframes flowDash {
          0% {
            stroke-dashoffset: 24;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes pulseDot {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }
        .system-flow-line {
          stroke-dasharray: 6 6;
          animation: flowDash 1.8s linear infinite;
        }
        .system-pulse-dot {
          animation: pulseDot 2s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1500px] items-center gap-10 px-5 py-12 sm:px-6 md:gap-12 md:py-16 xl:grid-cols-[minmax(0,1fr)_620px] xl:gap-14 xl:px-8">
        
        {/* ======================= HERO TEXT CONTENT ======================= */}
        <div className="min-w-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:mb-6 sm:text-[13px] xl:text-sm xl:tracking-[0.18em]">
            Business Transformation · Data Integration · Process Automation
          </p>

          <h1 className="max-w-4xl text-3xl font-semibold leading-[1.12] tracking-[-0.035em] sm:text-5xl sm:leading-[1.08] sm:tracking-[-0.04em] xl:text-7xl xl:leading-[1.05]">
            I simplify complex business operations through data, systems, and
            automation.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
  Technical Business Analyst with 6+ years of experience bridging
  business requirements and technical delivery across enterprise data
  integration, business systems and process automation. I simplify
  manual and fragmented operations by connecting data, streamlining
  workflows and building practical automation.
</p>

          <div className="mt-8 sm:mt-10">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 active:scale-[0.98]"
            >
              Explore my work
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* ================================================================= */}
          {/* MOBILE / TABLET DEDICATED ARCHITECTURE (< xl Screens)            */}
          {/* ================================================================= */}
          <div className="mt-12 block xl:hidden">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-950 p-5 text-white shadow-xl sm:p-7">
              {/* Radial background glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.12),transparent_60%)]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
                    Connected Business System
                  </p>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
                    Live Flow
                  </span>
                </div>

                {/* Vertical Architecture Flow */}
                <div className="mt-6 space-y-3">
                  
                  {/* Step 1: Fragmented Inputs Grid */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 backdrop-blur-sm sm:p-4">
                    <p className="mb-2.5 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                      Fragmented Inputs
                    </p>
                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                      <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-2.5 text-center">
                        <p className="text-xs font-semibold text-slate-200">Retail Files</p>
                        <p className="mt-0.5 text-[10px] text-slate-400">Excel / CSV</p>
                      </div>
                      <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-2.5 text-center">
                        <p className="text-xs font-semibold text-slate-200">Emails</p>
                        <p className="mt-0.5 text-[10px] text-slate-400">Inboxes</p>
                      </div>
                      <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-2.5 text-center">
                        <p className="text-xs font-semibold text-slate-200">Google Sheets</p>
                        <p className="mt-0.5 text-[10px] text-slate-400">Operations</p>
                      </div>
                      <div className="rounded-xl border border-slate-700/60 bg-slate-950/60 p-2.5 text-center">
                        <p className="text-xs font-semibold text-slate-200">Other Sources</p>
                        <p className="mt-0.5 text-[10px] text-slate-400">API / DB</p>
                      </div>
                    </div>
                  </div>

                  {/* Flow Connector Line */}
                  <div className="flex justify-center py-0.5">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-[2px] bg-gradient-to-b from-slate-700 to-emerald-400/80" />
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    </div>
                  </div>

                  {/* Step 2: Ingestion Layer */}
                  <div className="rounded-2xl border border-emerald-400/60 bg-emerald-950/40 p-4 text-center backdrop-blur-sm shadow-[0_0_24px_rgba(52,211,153,0.12)]">
                    <p className="text-sm font-semibold text-white">Automated Ingestion</p>
                    <p className="mt-1 text-xs font-medium text-emerald-300">
                      Apps Script · Fivetran
                    </p>
                  </div>

                  {/* Flow Connector Line */}
                  <div className="flex justify-center py-0.5">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-[2px] bg-gradient-to-b from-emerald-400/80 to-sky-400/80" />
                      <div className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                    </div>
                  </div>

                  {/* Step 3: Central Warehouse */}
                  <div className="rounded-2xl border border-sky-400/60 bg-sky-950/40 p-4 text-center backdrop-blur-sm shadow-[0_0_24px_rgba(56,189,248,0.12)]">
                    <p className="text-sm font-semibold text-white">Snowflake</p>
                    <p className="mt-1 text-xs font-medium text-sky-300">Centralized Data Hub</p>
                  </div>

                  {/* Flow Connector Branch */}
                  <div className="flex justify-center py-0.5">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-[2px] bg-gradient-to-b from-sky-400/80 to-indigo-400/80" />
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                    </div>
                  </div>

                  {/* Step 4: Downstream Outcomes */}
                  <div className="grid grid-cols-2 gap-3 pt-0.5">
                    <div className="rounded-2xl border border-indigo-400/50 bg-indigo-950/40 p-3.5 text-center backdrop-blur-sm">
                      <p className="text-sm font-semibold text-white">Salesforce</p>
                      <p className="mt-1 text-xs font-medium text-indigo-300">Operations</p>
                    </div>

                    <div className="rounded-2xl border border-violet-400/50 bg-violet-950/40 p-3.5 text-center backdrop-blur-sm">
                      <p className="text-sm font-semibold text-white">Tableau</p>
                      <p className="mt-1 text-xs font-medium text-violet-300">Reporting</p>
                    </div>
                  </div>

                </div>

                {/* Bottom Architecture Summary */}
                <div className="mt-6 border-t border-slate-800/80 pt-4 text-center">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                    Fragmented Inputs <span className="mx-1.5 text-slate-600">→</span> Reliable Outcomes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* DESKTOP INTERACTIVE SYSTEM VISUAL (xl+ Screens)                   */}
        {/* ================================================================= */}
        <div className="hidden xl:block">
          <div className="relative mx-auto h-[520px] w-full max-w-[620px] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 p-6 shadow-2xl">
            
            {/* Radial Background Glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_42%)]" />

            {/* Grid Mask Line Overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 opacity-30 [background-image:linear-gradient(rgba(56,189,248,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.3)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_top,black,transparent)]" />

            {/* SVG Animated Flow Lines */}
            <svg
              viewBox="0 0 700 520"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="flowGradient" x1="0" x2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>

                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Source Node -> Ingestion Lines */}
              {SOURCE_PATHS.map((path) => {
                const isSelected = activePath === path.id;
                const anotherPathIsSelected =
                  activePath !== null && activePath !== path.id;

                return (
                  <path
                    key={path.id}
                    d={path.d}
                    fill="none"
                    stroke="url(#flowGradient)"
                    strokeWidth={isSelected ? 3.5 : 2}
                    filter={isSelected ? "url(#softGlow)" : undefined}
                    className={`system-flow-line transition-all duration-300 ${
                      anotherPathIsSelected ? "opacity-15" : "opacity-100"
                    }`}
                    style={{ animationDelay: path.delay }}
                  />
                );
              })}

              {/* Snowflake -> Salesforce Line */}
              <path
                d="M435 230 C500 230, 490 170, 555 150"
                fill="none"
                stroke="url(#flowGradient)"
                strokeWidth={activePath ? 3 : 2}
                filter={activePath ? "url(#softGlow)" : undefined}
                className="system-flow-line transition-all duration-300"
                style={{ animationDelay: "0.8s" }}
              />

              {/* Snowflake -> Tableau Line */}
              <path
                d="M435 230 C500 230, 490 295, 555 315"
                fill="none"
                stroke="url(#flowGradient)"
                strokeWidth={activePath ? 3 : 2}
                filter={activePath ? "url(#softGlow)" : undefined}
                className="system-flow-line transition-all duration-300"
                style={{ animationDelay: "1s" }}
              />

              {/* Node Junction Pulsing Dots */}
              <circle
                cx="330"
                cy="225"
                r={activePath ? 5 : 4}
                fill="#ffffff"
                filter="url(#softGlow)"
                className="system-pulse-dot transition-all duration-300"
              />

              <circle
                cx="435"
                cy="230"
                r={activePath ? 5 : 4}
                fill="#ffffff"
                filter="url(#softGlow)"
                className="system-pulse-dot transition-all duration-300"
                style={{ animationDelay: "0.8s" }}
              />
            </svg>

            {/* Header Badge */}
            <div className="absolute left-6 top-6 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Connected Business System
            </div>

            {/* Interactive Source Nodes (Left Column) */}
            {SOURCE_NODES.map((node) => {
              const isSelected = activePath === node.id;
              const anotherNodeIsSelected =
                activePath !== null && activePath !== node.id;

              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setActivePath(node.id)}
                  onMouseLeave={() => setActivePath(null)}
                  className={`absolute left-6 ${node.position} z-10 w-40 cursor-pointer rounded-2xl border bg-slate-900/90 px-4 py-3 text-white shadow-lg backdrop-blur transition-all duration-300 ${
                    isSelected
                      ? "scale-[1.03] border-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.28)]"
                      : "border-slate-700/80"
                  } ${anotherNodeIsSelected ? "opacity-40" : "opacity-100"}`}
                >
                  <p className="text-sm font-semibold">{node.title}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    {node.subtitle}
                  </p>
                </div>
              );
            })}

            {/* Automated Ingestion Node (Center Left) */}
            <div
              className={`absolute left-[46%] top-[44%] z-10 w-44 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-emerald-400/70 bg-emerald-950/80 px-5 py-5 text-center text-white backdrop-blur transition-all duration-300 ${
                activePath
                  ? "shadow-[0_0_45px_rgba(52,211,153,0.32)]"
                  : "shadow-[0_0_35px_rgba(52,211,153,0.18)]"
              }`}
            >
              <p className="text-sm font-semibold">Automated Ingestion</p>
              <p className="mt-2 text-xs text-emerald-200">
                Apps Script · Fivetran
              </p>
            </div>

            {/* Snowflake Central Node (Center Right) */}
            <div
              className={`absolute left-[68%] top-[44%] z-10 w-40 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-sky-400/70 bg-sky-950/80 px-5 py-5 text-center text-white backdrop-blur transition-all duration-300 ${
                activePath
                  ? "shadow-[0_0_45px_rgba(56,189,248,0.35)]"
                  : "shadow-[0_0_35px_rgba(56,189,248,0.2)]"
              }`}
            >
              <p className="text-sm font-semibold">Snowflake</p>
              <p className="mt-2 text-xs text-sky-200">Centralized Data</p>
            </div>

            {/* Salesforce Node (Top Right) */}
            <div className="absolute right-6 top-[19%] z-10 w-36 rounded-2xl border border-indigo-400/60 bg-indigo-950/70 px-4 py-4 text-white shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-[0_0_28px_rgba(129,140,248,0.25)]">
              <p className="text-sm font-semibold">Salesforce</p>
              <p className="mt-1 text-xs text-indigo-200">Operations</p>
            </div>

            {/* Tableau Node (Bottom Right) */}
            <div className="absolute right-6 top-[56%] z-10 w-36 rounded-2xl border border-violet-400/60 bg-violet-950/70 px-4 py-4 text-white shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_0_28px_rgba(167,139,250,0.25)]">
              <p className="text-sm font-semibold">Tableau</p>
              <p className="mt-1 text-xs text-violet-200">
                Analytics & Reporting
              </p>
            </div>

            {/* Footer Summary Label */}
            <div className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Fragmented inputs
                <span className="mx-3 text-slate-700">→</span>
                reliable business outcomes
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}