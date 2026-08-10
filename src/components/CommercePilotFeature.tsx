import Link from "next/link";

type CommercePilotFeatureProps = {
  variant?: "portfolio" | "recruiter";
};

const stages = [
  "Observe",
  "Investigate",
  "Decide",
  "Act",
  "Evaluate",
  "Learn",
];

export default function CommercePilotFeature({
  variant = "portfolio",
}: CommercePilotFeatureProps) {
  const isRecruiter = variant === "recruiter";

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-white ${
        isRecruiter ? "p-6 sm:p-8 lg:p-10" : ""
      }`}
    >
      <div
        className={
          isRecruiter
            ? ""
            : "grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch"
        }
      >
        {/* Content */}
        <div
          className={
            isRecruiter
              ? ""
              : "flex flex-col justify-between p-6 sm:p-8 lg:p-10"
          }
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-300">
                AI Operations Lab
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                Interactive learning project
              </span>
            </div>

            <h3 className="mt-6 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              CommercePilot
            </h3>

            <p className="mt-3 text-lg font-medium text-slate-200 sm:text-xl">
              Built to understand how AI agents actually work.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              I kept encountering AI agents in technology conversations and
              wanted to understand what actually makes a system agentic.
              Rather than only reading about them, I built CommercePilot — a
              hands-on experiment in how an agent can observe business signals,
              investigate a problem, make a controlled decision, act, evaluate
              the result and retain what it learns.
            </p>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-800 px-3 py-1.5 text-xs text-slate-400">
                Synthetic business scenarios
              </span>

              <span className="rounded-full border border-slate-800 px-3 py-1.5 text-xs text-slate-400">
                Guardrails
              </span>

              <span className="rounded-full border border-slate-800 px-3 py-1.5 text-xs text-slate-400">
                Decision memory
              </span>
            </div>

            <Link
              href="/labs/commercepilot"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-400/10 px-4 py-2.5 text-sm font-semibold text-sky-200 transition hover:border-sky-400/60 hover:bg-sky-400/15"
            >
              Launch interactive demo
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Visual preview */}
        {!isRecruiter && (
          <div className="relative border-t border-slate-800 bg-[#020617] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(14,165,233,0.12),transparent_48%)]"
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Agent decision cycle
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-300">
                    Conversion Performance Decline
                  </p>
                </div>

                <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-300">
                  Interactive
                </span>
              </div>

              <div className="mt-8 space-y-2.5">
                {stages.map((stage, index) => {
                  const completed = index < 2;
                  const active = index === 2;

                  return (
                    <div
                      key={stage}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
                        active
                          ? "border-sky-400/35 bg-sky-400/10"
                          : completed
                            ? "border-emerald-400/20 bg-emerald-400/[0.05]"
                            : "border-slate-800 bg-slate-900/40"
                      }`}
                    >
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[10px] font-bold ${
                          active
                            ? "border-sky-400/50 text-sky-300"
                            : completed
                              ? "border-emerald-400/40 text-emerald-300"
                              : "border-slate-700 text-slate-600"
                        }`}
                      >
                        {completed ? "✓" : index + 1}
                      </span>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-xs font-semibold uppercase tracking-[0.1em] ${
                            active
                              ? "text-sky-200"
                              : completed
                                ? "text-emerald-200"
                                : "text-slate-500"
                          }`}
                        >
                          {stage}
                        </p>
                      </div>

                      {active && (
                        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-sky-400">
                          Current
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Controlled decision
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  Create Product Messaging Experiment
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Decision passes defined guardrails before simulated
                  execution.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}