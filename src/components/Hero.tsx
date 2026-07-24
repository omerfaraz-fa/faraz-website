"use client";

import { useState } from "react";

const sourceNodes = [
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

const sourcePaths = [
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
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        {/* Hero content */}

        <div>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Business Transformation · Data Integration · Process Automation
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            I simplify complex business operations through data, systems, and
            automation.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            I help organizations transform manual processes into scalable,
            reliable business systems by connecting data, streamlining
            workflows, and building practical automation that delivers
            measurable business impact.
          </p>

          <div className="mt-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Explore my work

              <span
                aria-hidden="true"
                className="transition duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* Interactive system visual */}

        <div className="block">
          <div className="relative mx-auto h-[520px] max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-6 shadow-2xl">
            {/* Background effects */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_42%)]" />

            <div className="absolute inset-x-0 bottom-0 h-52 opacity-30 [background-image:linear-gradient(rgba(56,189,248,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.3)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_top,black,transparent)]" />

            {/* Connections */}

            <svg
              viewBox="0 0 700 520"
              className="absolute inset-0 h-full w-full"
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

              {/* Source connections */}

              {sourcePaths.map((path) => {
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
                    style={{
                      animationDelay: path.delay,
                    }}
                  />
                );
              })}

              {/* Output connections */}

              <path
                d="M435 230 C500 230, 490 170, 555 150"
                fill="none"
                stroke="url(#flowGradient)"
                strokeWidth={activePath ? 3 : 2}
                filter={activePath ? "url(#softGlow)" : undefined}
                className="system-flow-line transition-all duration-300"
                style={{ animationDelay: "0.8s" }}
              />

              <path
                d="M435 230 C500 230, 490 295, 555 315"
                fill="none"
                stroke="url(#flowGradient)"
                strokeWidth={activePath ? 3 : 2}
                filter={activePath ? "url(#softGlow)" : undefined}
                className="system-flow-line transition-all duration-300"
                style={{ animationDelay: "1s" }}
              />

              {/* Connection points */}

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

            {/* Diagram title */}

            <div className="absolute left-6 top-6 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Connected Business System
            </div>

            {/* Source nodes */}

            {sourceNodes.map((node) => {
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
                      : "border-slate-700"
                  } ${anotherNodeIsSelected ? "opacity-55" : "opacity-100"}`}
                >
                  <p className="text-sm font-semibold">{node.title}</p>

                  <p className="mt-1 text-xs text-slate-400">
                    {node.subtitle}
                  </p>
                </div>
              );
            })}

            {/* Integration node */}

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

            {/* Snowflake node */}

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

            {/* Destination nodes */}

            <div className="absolute right-6 top-[19%] z-10 w-36 rounded-2xl border border-indigo-400/60 bg-indigo-950/70 px-4 py-4 text-white shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-[0_0_28px_rgba(129,140,248,0.25)]">
              <p className="text-sm font-semibold">Salesforce</p>

              <p className="mt-1 text-xs text-indigo-200">Operations</p>
            </div>

            <div className="absolute right-6 top-[56%] z-10 w-36 rounded-2xl border border-violet-400/60 bg-violet-950/70 px-4 py-4 text-white shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_0_28px_rgba(167,139,250,0.25)]">
              <p className="text-sm font-semibold">Tableau</p>

              <p className="mt-1 text-xs text-violet-200">
                Analytics & Reporting
              </p>
            </div>

            {/* Diagram caption */}

            <div className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
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