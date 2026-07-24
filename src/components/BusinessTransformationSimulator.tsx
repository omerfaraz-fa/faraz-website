"use client";

import { useState } from "react";

const manualSteps = [
  "Email attachments",
  "Excel files",
  "Manual copying",
  "Database exports",
];

const businessOutcomes = [
  "Less manual work",
  "Better data consistency",
  "Faster reporting",
  "Easier support",
];

export default function BusinessTransformationSimulator() {
  const [isTransformed, setIsTransformed] = useState(false);

  return (
    <section className="border-t border-slate-200 bg-slate-950 px-6 py-28 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
          Business Transformation Simulator
        </p>

        <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
              See how I approach a fragmented business process.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Start with a process built around manual steps, disconnected
              tools, and repeated intervention. Then redesign the workflow
              around reliable integration and automation.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsTransformed((current) => !current)}
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-slate-700 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            {isTransformed ? "Show original process" : "Show me how you think"}

            <span
              aria-hidden="true"
              className={`transition duration-500 ${
                isTransformed ? "rotate-180" : "group-hover:translate-x-1"
              }`}
            >
              →
            </span>
          </button>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/60 p-6 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_48%)]" />

          <div className="relative">
            <div className="flex items-center justify-between gap-6">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
                {isTransformed ? "Redesigned Process" : "Current Process"}
              </p>

              <span
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition duration-500 ${
                  isTransformed
                    ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-300"
                    : "border-amber-400/40 bg-amber-400/10 text-amber-300"
                }`}
              >
                {isTransformed ? "Integrated" : "Manual"}
              </span>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              {/* Inputs */}

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {manualSteps.map((step, index) => (
                  <div
                    key={step}
                    className={`rounded-2xl border px-5 py-4 transition-all duration-700 ${
                      isTransformed
                        ? "border-sky-400/50 bg-sky-950/50 text-white"
                        : "border-slate-700 bg-slate-950/70 text-slate-200"
                    }`}
                    style={{
                      transitionDelay: `${index * 80}ms`,
                    }}
                  >
                    <p className="text-sm font-semibold">
                      {isTransformed
                        ? [
                            "Connected Inbox",
                            "Structured Data",
                            "Automated Ingestion",
                            "Centralized Processing",
                          ][index]
                        : step}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {isTransformed
                        ? [
                            "Files captured consistently",
                            "Standardized business inputs",
                            "Manual copying removed",
                            "Logic managed in one place",
                          ][index]
                        : [
                            "Attachments handled manually",
                            "Different formats and structures",
                            "Repeated copy-and-paste work",
                            "Technical intervention required",
                          ][index]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Flow */}

              <div className="hidden min-w-32 flex-col items-center lg:flex">
                <div
                  className={`h-px w-32 transition duration-700 ${
                    isTransformed ? "bg-emerald-400" : "bg-slate-700"
                  }`}
                />

                <div
                  className={`my-5 rounded-2xl border px-6 py-5 text-center transition-all duration-700 ${
                    isTransformed
                      ? "scale-105 border-emerald-400/70 bg-emerald-950/70 shadow-[0_0_40px_rgba(52,211,153,0.22)]"
                      : "border-rose-400/40 bg-rose-950/40"
                  }`}
                >
                  <p className="text-sm font-semibold">
                    {isTransformed
                      ? "Automated Integration"
                      : "Manual Processing"}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    {isTransformed
                      ? "Connected systems and business rules"
                      : "Queries, exports, checks and uploads"}
                  </p>
                </div>

                <div
                  className={`h-px w-32 transition duration-700 ${
                    isTransformed ? "bg-sky-400" : "bg-slate-700"
                  }`}
                />
              </div>

              {/* Results */}

              <div
                className={`rounded-3xl border p-7 transition-all duration-700 sm:p-8 ${
                  isTransformed
                    ? "border-sky-400/60 bg-sky-950/50 shadow-[0_0_45px_rgba(56,189,248,0.18)]"
                    : "border-slate-700 bg-slate-950/70"
                }`}
              >
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
                  {isTransformed ? "Business Outcomes" : "Operational Impact"}
                </p>

                <div className="mt-6 space-y-4">
                  {(isTransformed
                    ? businessOutcomes
                    : [
                        "Repeated manual effort",
                        "Higher error risk",
                        "Slow reporting",
                        "Key-person dependency",
                      ]
                  ).map((outcome, index) => (
                    <div
                      key={outcome}
                      className="flex items-center gap-3"
                      style={{
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full text-xs transition duration-500 ${
                          isTransformed
                            ? "bg-emerald-400/15 text-emerald-300"
                            : "bg-rose-400/10 text-rose-300"
                        }`}
                      >
                        {isTransformed ? "✓" : "×"}
                      </span>

                      <p className="text-sm text-slate-200">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p
              className={`mt-12 text-center text-xl font-medium transition-all duration-700 sm:text-2xl ${
                isTransformed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-40"
              }`}
            >
              {isTransformed
                ? "This is how I approach business transformation."
                : "The process works—but only through continued manual effort."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}