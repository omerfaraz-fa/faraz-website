"use client";

import { useState } from "react";

type FocusArea = "overview" | "consumer" | "business" | "reporting";

const FOCUS_CONTENT: Record<
  FocusArea,
  {
    label: string;
    title: string;
    description: string;
    bullets: string[];
  }
> = {
  overview: {
    label: "Architecture overview",
    title: "A controlled evolution of the existing platform.",
    description:
      "The original retail-data architecture treated consumer and business operations as one shared reporting model. The redesigned structure introduced independent channel processing while preserving a standardized downstream output.",
    bullets: [
      "Existing reporting continuity protected",
      "Channel-specific processing introduced",
      "Common downstream standards retained",
    ],
  },
  consumer: {
    label: "Consumer channel",
    title: "Independent consumer processing.",
    description:
      "Consumer sales received a dedicated processing context so transformation logic and product mappings could evolve without affecting the business channel.",
    bullets: [
      "Dedicated transformation path",
      "Channel-specific product mappings",
      "Independent reporting context",
    ],
  },
  business: {
    label: "Business channel",
    title: "Independent business processing.",
    description:
      "Business-channel data was separated from the consumer flow, allowing its mappings and reporting requirements to be managed independently.",
    bullets: [
      "Separate transformation path",
      "Dedicated product mappings",
      "Channel-specific reporting logic",
    ],
  },
  reporting: {
    label: "Standardized output",
    title: "Separate processing with consistent delivery.",
    description:
      "Although the channels were processed independently, both continued to produce a standardized structure for operational systems and analytical reporting.",
    bullets: [
      "Consistent downstream schema",
      "Operational-system compatibility",
      "Reliable analytical reporting",
    ],
  },
};

export default function RetailArchitectureDiagram() {
  const [focus, setFocus] = useState<FocusArea>("overview");
  const content = FOCUS_CONTENT[focus];

  return (
    <div className="mt-10">
      <style jsx global>{`
        @keyframes retailBoardFlow {
          from {
            stroke-dashoffset: 20;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes retailBoardPulse {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.92);
          }
          50% {
            opacity: 1;
            transform: scale(1.12);
          }
        }

        .retail-board-flow {
          stroke-dasharray: 5 5;
          animation: retailBoardFlow 1.8s linear infinite;
        }

        .retail-board-pulse {
          animation: retailBoardPulse 2s ease-in-out infinite;
          transform-origin: center;
        }

        @media (prefers-reduced-motion: reduce) {
          .retail-board-flow,
          .retail-board-pulse {
            animation: none;
          }
        }
      `}</style>

      <section className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 text-white shadow-xl">
        {/* Header */}
        <div className="border-b border-slate-800/80 px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Architecture transformation
              </p>

              <p className="mt-1.5 text-sm leading-6 text-slate-300">
                Explore how the shared model evolved into two governed channels.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setFocus("overview")}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300 transition-colors hover:border-emerald-400/40 hover:bg-emerald-400/15 focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Production-safe redesign
            </button>
          </div>
        </div>

        {/* Architecture board */}
        <div className="relative px-5 py-8 sm:px-8 sm:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]"
          />

          <div className="relative z-10 mx-auto max-w-5xl">
            {/* Existing architecture */}
            <div className="mx-auto max-w-xl rounded-3xl border border-slate-700 bg-slate-900/90 p-6 text-center shadow-lg backdrop-blur sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Existing architecture
              </p>

              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Shared Retail Platform
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                One shared context for consumer and business operations
              </p>
            </div>

            <FlowConnector />

            {/* Change trigger */}
            <div className="mx-auto max-w-2xl rounded-3xl border border-sky-400/40 bg-sky-950/50 p-6 text-center shadow-[0_0_35px_rgba(56,189,248,0.08)] backdrop-blur sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-400">
                Why change?
              </p>

              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Business requirements evolved beyond the original model.
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-sky-100/75">
                The architecture needed to separate the two channels without
                replacing the structures already supporting historical reporting.
              </p>
            </div>

            <BranchConnector focus={focus} />

            {/* Channel cards */}
            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              <ChannelCard
                type="consumer"
                focus={focus}
                onFocus={setFocus}
                eyebrow="Consumer operations"
                title="Consumer Channel"
                description="Dedicated processing, mappings and reporting context."
                accent="blue"
              />

              <ChannelCard
                type="business"
                focus={focus}
                onFocus={setFocus}
                eyebrow="Business operations"
                title="Business Channel"
                description="Independent transformation and channel-specific mappings."
                accent="violet"
              />
            </div>

            <MergeConnector focus={focus} />

            {/* Standard reporting */}
            <button
              type="button"
              onMouseEnter={() => setFocus("reporting")}
              onFocus={() => setFocus("reporting")}
              onClick={() => setFocus("reporting")}
              aria-pressed={focus === "reporting"}
              className={`mx-auto block w-full max-w-2xl rounded-3xl border p-6 text-left shadow-lg backdrop-blur transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/70 sm:p-7 ${
                focus === "reporting"
                  ? "scale-[1.015] border-emerald-300 bg-emerald-950/70 shadow-[0_0_35px_rgba(52,211,153,0.16)]"
                  : "border-emerald-400/40 bg-emerald-950/45 hover:-translate-y-1 hover:border-emerald-300/70"
              }`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                    Common downstream standard
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Standardized Reporting Model
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-emerald-100/75">
                    Operational systems and analytical reporting
                  </p>
                </div>

                <span className="inline-flex w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                  Unified output
                </span>
              </div>
            </button>

            {/* Dynamic explanation */}
            <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                    {content.label}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {content.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                    {content.description}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Current focus
                  </p>

                  <ul className="mt-4 space-y-3">
                    {content.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Principle */}
            <div className="mt-8 border-t border-slate-800 pt-6 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Transformation principle
              </p>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Separate where the business requires independence. Standardize
                where downstream systems require consistency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChannelCard({
  type,
  focus,
  onFocus,
  eyebrow,
  title,
  description,
  accent,
}: {
  type: "consumer" | "business";
  focus: FocusArea;
  onFocus: (focus: FocusArea) => void;
  eyebrow: string;
  title: string;
  description: string;
  accent: "blue" | "violet";
}) {
  const isActive = focus === type;
  const anotherChannelIsActive =
    (focus === "consumer" || focus === "business") && focus !== type;

  const accentClasses = {
    blue: {
      base: "border-blue-400/40 bg-blue-950/45 hover:border-blue-300/70",
      active:
        "border-blue-300 bg-blue-950/75 shadow-[0_0_35px_rgba(96,165,250,0.16)]",
      label: "text-blue-400",
      badge:
        "border-blue-400/20 bg-blue-400/10 text-blue-300",
    },
    violet: {
      base:
        "border-violet-400/40 bg-violet-950/45 hover:border-violet-300/70",
      active:
        "border-violet-300 bg-violet-950/75 shadow-[0_0_35px_rgba(192,132,252,0.16)]",
      label: "text-violet-400",
      badge:
        "border-violet-400/20 bg-violet-400/10 text-violet-300",
    },
  };

  const classes = accentClasses[accent];

  return (
    <button
      type="button"
      onMouseEnter={() => onFocus(type)}
      onFocus={() => onFocus(type)}
      onClick={() => onFocus(type)}
      aria-pressed={isActive}
      className={`rounded-3xl border p-6 text-left shadow-lg backdrop-blur transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/70 sm:p-7 ${
        isActive ? `scale-[1.015] ${classes.active}` : classes.base
      } ${anotherChannelIsActive ? "opacity-45" : "opacity-100"} ${
        !isActive ? "hover:-translate-y-1" : ""
      }`}
    >
      <p
        className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${classes.label}`}
      >
        {eyebrow}
      </p>

      <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span
          className={`rounded-full border px-3 py-1.5 text-xs font-medium ${classes.badge}`}
        >
          Independent path
        </span>

        <span
          className={`rounded-full border px-3 py-1.5 text-xs font-medium ${classes.badge}`}
        >
          Dedicated mappings
        </span>
      </div>
    </button>
  );
}

function FlowConnector() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-16 w-20"
    >
      <svg viewBox="0 0 80 64" className="h-full w-full">
        <path
          d="M40 0 L40 64"
          fill="none"
          stroke="#64748b"
          strokeWidth="2"
          className="retail-board-flow"
        />

        <circle
          cx="40"
          cy="32"
          r="3"
          fill="#38bdf8"
          className="retail-board-pulse"
        />
      </svg>
    </div>
  );
}

function BranchConnector({ focus }: { focus: FocusArea }) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-24 w-full max-w-3xl"
    >
      <svg
        viewBox="0 0 800 96"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M400 0 C400 45 200 35 200 96"
          fill="none"
          stroke="#60a5fa"
          strokeWidth={focus === "consumer" ? 3.5 : 2}
          opacity={focus === "business" ? 0.2 : 0.9}
          className="retail-board-flow transition-all duration-300"
        />

        <path
          d="M400 0 C400 45 600 35 600 96"
          fill="none"
          stroke="#c084fc"
          strokeWidth={focus === "business" ? 3.5 : 2}
          opacity={focus === "consumer" ? 0.2 : 0.9}
          className="retail-board-flow transition-all duration-300"
        />
      </svg>
    </div>
  );
}

function MergeConnector({ focus }: { focus: FocusArea }) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-24 w-full max-w-3xl"
    >
      <svg
        viewBox="0 0 800 96"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M200 0 C200 60 400 45 400 96"
          fill="none"
          stroke="#60a5fa"
          strokeWidth={focus === "consumer" || focus === "reporting" ? 3 : 2}
          opacity={focus === "business" ? 0.2 : 0.85}
          className="retail-board-flow transition-all duration-300"
        />

        <path
          d="M600 0 C600 60 400 45 400 96"
          fill="none"
          stroke="#c084fc"
          strokeWidth={focus === "business" || focus === "reporting" ? 3 : 2}
          opacity={focus === "consumer" ? 0.2 : 0.85}
          className="retail-board-flow transition-all duration-300"
        />

        <circle
          cx="400"
          cy="94"
          r="3"
          fill="#34d399"
          className="retail-board-pulse"
        />
      </svg>
    </div>
  );
}