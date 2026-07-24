import Link from "next/link";

const projects = [
  {
    id: "retail",
    category: "Business Transformation",
    title: "Retail Operations Automation Platform",
    description:
      "Transformed a fragmented weekly retail-data workflow from approximately two days of manual processing into a scalable automated platform requiring around two hours of oversight.",
    href: "/case-studies/retail-operations-automation",
    tags: ["Snowflake", "Salesforce", "Tableau", "SQL", "Python"],
    highlight: "From ~2 days to ~2 hours",
  },
  {
    id: "finance",
    category: "Business Systems & Data Integration",
    title: "Internal Finance Integration Platform",
    description:
      "Redesigned a fragile, machine-dependent finance synchronization process into a browser-accessible platform that centralized data in Snowflake and simplified operations for internal business users.",
    href: "/case-studies/internal-finance-integration",
    tags: ["Python", "Flask", "Snowflake", "SQL", "Windows Automation"],
    highlight: "Manual workflow to browser platform",
  },
];

function RetailPreview() {
  return (
    <div className="relative h-64 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.14),transparent_48%)]" />

      <div className="absolute inset-x-0 bottom-0 h-32 opacity-20 [background-image:linear-gradient(rgba(56,189,248,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.35)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:linear-gradient(to_top,black,transparent)]" />

      <svg
        viewBox="0 0 560 250"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="retailFlow" x1="0" x2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>

        <path
          d="M135 65 C210 65, 210 105, 275 115"
          fill="none"
          stroke="url(#retailFlow)"
          strokeWidth="2"
          className="system-flow-line"
        />

        <path
          d="M135 185 C210 185, 210 135, 275 125"
          fill="none"
          stroke="url(#retailFlow)"
          strokeWidth="2"
          className="system-flow-line"
          style={{ animationDelay: "0.25s" }}
        />

        <path
          d="M355 120 C415 120, 410 72, 465 65"
          fill="none"
          stroke="url(#retailFlow)"
          strokeWidth="2"
          className="system-flow-line"
          style={{ animationDelay: "0.5s" }}
        />

        <path
          d="M355 120 C415 120, 410 175, 465 185"
          fill="none"
          stroke="url(#retailFlow)"
          strokeWidth="2"
          className="system-flow-line"
          style={{ animationDelay: "0.75s" }}
        />
      </svg>

      <div className="absolute left-5 top-5 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white transition duration-300 group-hover:border-sky-400">
        <p className="text-sm font-semibold">Retail Data</p>
        <p className="mt-1 text-xs text-slate-400">Multiple sources</p>
      </div>

      <div className="absolute bottom-5 left-5 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white transition duration-300 group-hover:border-sky-400">
        <p className="text-sm font-semibold">Manual Inputs</p>
        <p className="mt-1 text-xs text-slate-400">Files and mappings</p>
      </div>

      <div className="absolute left-1/2 top-1/2 w-36 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-emerald-400/70 bg-emerald-950/80 px-4 py-4 text-center text-white shadow-[0_0_28px_rgba(52,211,153,0.18)] transition duration-300 group-hover:shadow-[0_0_38px_rgba(52,211,153,0.3)]">
        <p className="text-sm font-semibold">Snowflake</p>
        <p className="mt-1 text-xs text-emerald-200">Automation</p>
      </div>

      <div className="absolute right-5 top-5 rounded-xl border border-indigo-400/60 bg-indigo-950/70 px-4 py-3 text-white">
        <p className="text-sm font-semibold">Salesforce</p>
        <p className="mt-1 text-xs text-indigo-200">Operations</p>
      </div>

      <div className="absolute bottom-5 right-5 rounded-xl border border-violet-400/60 bg-violet-950/70 px-4 py-3 text-white">
        <p className="text-sm font-semibold">Tableau</p>
        <p className="mt-1 text-xs text-violet-200">Reporting</p>
      </div>
    </div>
  );
}

function FinancePreview() {
  return (
    <div className="relative h-64 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.14),transparent_48%)]" />

      <div className="absolute inset-x-0 bottom-0 h-32 opacity-20 [background-image:linear-gradient(rgba(129,140,248,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(129,140,248,0.35)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:linear-gradient(to_top,black,transparent)]" />

      <svg
        viewBox="0 0 560 250"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="financeFlow" x1="0" x2="1">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>

        <path
          d="M125 125 C205 125, 210 125, 275 125"
          fill="none"
          stroke="url(#financeFlow)"
          strokeWidth="2"
          className="system-flow-line"
        />

        <path
          d="M355 125 C415 125, 420 70, 475 65"
          fill="none"
          stroke="url(#financeFlow)"
          strokeWidth="2"
          className="system-flow-line"
          style={{ animationDelay: "0.35s" }}
        />

        <path
          d="M355 125 C415 125, 420 180, 475 185"
          fill="none"
          stroke="url(#financeFlow)"
          strokeWidth="2"
          className="system-flow-line"
          style={{ animationDelay: "0.7s" }}
        />
      </svg>

      <div className="absolute left-5 top-1/2 w-36 -translate-y-1/2 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-4 text-white transition duration-300 group-hover:border-indigo-400">
        <p className="text-sm font-semibold">Finance System</p>
        <p className="mt-1 text-xs text-slate-400">Legacy workflow</p>
      </div>

      <div className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-indigo-400/70 bg-indigo-950/80 px-4 py-4 text-center text-white shadow-[0_0_28px_rgba(129,140,248,0.18)] transition duration-300 group-hover:shadow-[0_0_38px_rgba(129,140,248,0.3)]">
        <p className="text-sm font-semibold">Integration Platform</p>
        <p className="mt-1 text-xs text-indigo-200">Python · Flask</p>
      </div>

      <div className="absolute right-5 top-5 rounded-xl border border-sky-400/60 bg-sky-950/70 px-4 py-3 text-white">
        <p className="text-sm font-semibold">Snowflake</p>
        <p className="mt-1 text-xs text-sky-200">Centralized data</p>
      </div>

      <div className="absolute bottom-5 right-5 rounded-xl border border-emerald-400/60 bg-emerald-950/70 px-4 py-3 text-white">
        <p className="text-sm font-semibold">Business Users</p>
        <p className="mt-1 text-xs text-emerald-200">Browser access</p>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200 bg-white px-6 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          Selected Case Studies
        </p>

        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
            Business problems redesigned through data, systems, and automation.
          </h2>

          <p className="max-w-md text-lg leading-8 text-slate-600">
            Each case study focuses on the problem, operating model,
            architecture, and business value created.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl sm:p-6"
            >
              {project.id === "retail" ? (
                <RetailPreview />
              ) : (
                <FinancePreview />
              )}

              <div className="flex flex-1 flex-col px-3 pb-4 pt-8 sm:px-4">
                <div className="flex items-start justify-between gap-6">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                    {project.category}
                  </p>

                  <span
                    aria-hidden="true"
                    className="text-2xl text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-slate-950"
                  >
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.025em] text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-5 flex-1 text-lg leading-8 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-sm font-semibold text-slate-950">
                    {project.highlight}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                  Read case study
                  <span
                    aria-hidden="true"
                    className="transition duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}