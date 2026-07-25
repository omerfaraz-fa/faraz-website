"use client";

import Link from "next/link";
import RetailArchitectureDiagram from "@/components/RetailArchitectureDiagram";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function RetailDataArchitecturePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      {/* ==================================================================== */}
      {/* 1. HERO SECTION                                                      */}
      {/* ==================================================================== */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Subtle background structure */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-32 top-12 h-80 w-80 rounded-full border border-slate-200/60" />
          <div className="absolute -right-16 top-28 h-56 w-56 rounded-full border border-slate-200/50" />
          <div className="absolute right-16 top-44 h-24 w-24 rounded-full border border-slate-200/40" />

          <div className="absolute right-0 top-0 hidden h-full w-[44%] opacity-[0.035] lg:block [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_left,black,transparent)]" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Back link */}
          <Link
  href="/"
  className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950"
>
  <span
    aria-hidden="true"
    className="transition-transform duration-200 group-hover:-translate-x-1"
  >
    ←
  </span>
  Back to homepage
</Link>

          {/* Hero copy */}
          <div className="mt-12 sm:mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
              Case Study · Data Architecture & Systems Transformation
            </p>

            <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              Evolving a Production Data Architecture
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              A shared retail-data model was redesigned into a scalable,
              channel-specific architecture—separating consumer and business
              operations while protecting historical reporting and existing
              production processes.
            </p>
          </div>

          {/* Metric Hero Cards */}
          <div className="mt-12 grid gap-4 border-t border-slate-200/80 pt-10 sm:mt-14 sm:grid-cols-3 sm:gap-6">
            {/* Architecture */}
            <div className="group rounded-2xl border border-slate-200/70 bg-slate-50/50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Architecture
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-lg font-semibold tracking-tight text-slate-400 sm:text-xl">
                  Shared
                </span>

                <span
                  aria-hidden="true"
                  className="text-lg text-slate-300 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>

                <span className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                  Channel-specific
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Consumer and business channels represented independently.
              </p>
            </div>

            {/* Continuity */}
            <div className="group rounded-2xl border border-emerald-500/20 bg-emerald-50/30 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-emerald-50/60 hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                Continuity
              </p>

              <p className="mt-3 text-2xl font-semibold tracking-tight text-emerald-950 sm:text-3xl">
                History preserved
              </p>

              <p className="mt-3 text-sm leading-6 text-emerald-900/80">
                Existing reporting and previously processed data remained
                reliable.
              </p>
            </div>

            {/* Scalability */}
            <div className="group rounded-2xl border border-slate-200/70 bg-slate-50/50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Scalability
              </p>

              <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Reusable model
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Future products and evolving channel requirements became easier
                to support.
              </p>
            </div>
          </div>

          <RetailArchitectureDiagram />
                  </div>
      </section>
      {/* ==================================================================== */}
{/* 2. THE CHALLENGE                                                    */}
{/* ==================================================================== */}

      {/* ==================================================================== */}
      {/* 2. THE CHALLENGE                                                    */}
      {/* ==================================================================== */}

      <section
        id="challenge"
        className="border-b border-slate-200/80 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Section introduction */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
                The Challenge
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl sm:leading-[1.08]">
                The original architecture was not broken.
              </h2>

              <p className="mt-5 text-lg font-medium leading-8 text-slate-800 sm:text-xl sm:leading-9">
                It was designed for a business structure that had evolved.
              </p>
            </div>

            {/* Editorial narrative */}
            <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Consumer, small-business, and business sales had historically
                been represented through separate retailer values. As reporting
                requirements matured, this structure created unnecessary
                complexity and no longer reflected how the business wanted to
                analyse performance.
              </p>

              <p>
                The new requirement was to introduce a dedicated channel
                dimension while preserving the production architecture already
                supporting recurring data processing, historical reporting, and
                downstream analytics.
              </p>

              <p>
                This meant the change could not be treated as a simple rename or
                data clean-up exercise. Existing procedures, product mappings,
                summary tables, Tableau relationships, and stakeholder-owned
                master data all had to remain reliable throughout the
                transition.
              </p>
            </div>
          </div>

          {/* Key architectural tension */}
          <div className="mt-14 rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Existing model
                </p>

                <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Multiple retailer identities
                </p>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                  Consumer, small-business, and business activity were
                  represented through separate retailer values.
                </p>
              </div>

              <div
                aria-hidden="true"
                className="hidden h-20 w-px bg-slate-200 lg:block"
              />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                  Required model
                </p>

                <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Retailer plus channel
                </p>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                  A cleaner reporting structure where retailer identity and
                  channel context could be managed independently.
                </p>
              </div>
            </div>
          </div>

          {/* Design constraints */}
          <div className="mt-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
                Design Constraints
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                The architecture had to evolve without disrupting the systems
                already depending on it.
              </h3>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {/* Historical reporting */}
              <article className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M4 6h16M4 12h16M4 18h10" />
                  </svg>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Historical Reporting
                </p>

                <h4 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                  Previously processed data had to remain reliable.
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Existing reports and historical sales depended on the current
                  data structures, so the migration could not invalidate past
                  reporting.
                </p>
              </article>

              {/* Production workflows */}
              <article className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 text-sky-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M4 12h5l2-4 3 8 2-4h4" />
                  </svg>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">
                  Production Workflows
                </p>

                <h4 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                  Recurring procedures could not stop working.
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Transformation procedures, summarisation logic, and weekly
                  operational processing all had to continue through the
                  architectural change.
                </p>
              </article>

              {/* Master data ownership */}
              <article className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-200 bg-violet-50">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 text-violet-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
                    <path d="M5 7l7 4 7-4M12 11v10" />
                  </svg>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">
                  Master Data Ownership
                </p>

                <h4 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                  Product mappings were maintained by another team.
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Changes affecting product mappings required coordination and
                  stakeholder approval rather than unilateral modification.
                </p>
              </article>

              {/* Downstream dependencies */}
              <article className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 text-emerald-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="6" cy="12" r="2.5" />
                    <circle cx="18" cy="6" r="2.5" />
                    <circle cx="18" cy="18" r="2.5" />
                    <path d="M8.5 11l7-4M8.5 13l7 4" />
                  </svg>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                  Downstream Dependencies
                </p>

                <h4 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                  Tableau relationships and reporting logic had to remain
                  compatible.
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The redesign had to account not only for fact tables, but also
                  for joins, filters, summary layers, and analytical behaviour.
                </p>
              </article>
            </div>
          </div>

          {/* Closing insight */}
          <div className="mt-16 border-l-2 border-slate-950 pl-6 sm:pl-8">
            <p className="max-w-4xl text-xl font-medium leading-9 tracking-[-0.015em] text-slate-900 sm:text-2xl sm:leading-10">
              The challenge was not introducing a new column. It was introducing
              a new business dimension into a live production architecture
              without breaking history, operations, or reporting.
            </p>
          </div>
        </div>
      </section>
            {/* ==================================================================== */}
      {/* 3. MY ROLE                                                          */}
      {/* ==================================================================== */}

      <section
        id="my-role"
        className="border-b border-slate-200/80 bg-slate-50/50 px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
              My Role
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl sm:leading-[1.08]">
              I owned the change from analysis through production validation.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              My contribution went beyond modifying procedures. I analysed the
              existing architecture, designed the revised reporting model,
              implemented the technical changes, validated historical and future
              processing, and investigated the production issue discovered after
              rollout.
            </p>
          </div>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[1.45rem] top-0 hidden w-px bg-slate-200 sm:block"
            />

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  label: "Analysis",
                  title: "Mapped the existing production architecture.",
                  description:
                    "Reviewed retailer mappings, transformation procedures, product data, summary tables, Tableau dependencies, and historical reporting behaviour before changing the model.",
                },
                {
                  step: "02",
                  label: "Architecture",
                  title: "Designed the retailer and channel structure.",
                  description:
                    "Defined a cleaner model where retailer identity and channel type could be managed separately while preserving compatibility with existing reporting.",
                },
                {
                  step: "03",
                  label: "Implementation",
                  title: "Updated the Snowflake data model and processing logic.",
                  description:
                    "Added the new channel dimension, updated retailer mappings, modified B2C and B2B procedures, revised summarisation logic, and corrected date-generation behaviour.",
                },
                {
                  step: "04",
                  label: "Validation",
                  title: "Built a comprehensive validation strategy.",
                  description:
                    "Reconciled retailer and channel totals, validated targets, tested historical sales, checked non-affected retailers, and confirmed future weekly processing.",
                },
                {
                  step: "05",
                  label: "Reporting",
                  title: "Supported the Tableau transition.",
                  description:
                    "Validated the reporting model, introduced the new channel filter, and worked with stakeholders to improve filter behaviour using context and relevant-value logic.",
                },
                {
                  step: "06",
                  label: "Production Support",
                  title: "Investigated and isolated the post-release issue.",
                  description:
                    "Traced missing SKU attributes to a retailer mismatch between sales and product mappings, identified the failed Tableau join, and proposed a controlled fix requiring stakeholder approval.",
                },
              ].map((item) => (
                <article
                  key={item.step}
                  className="relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:ml-16 sm:p-8"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex items-center gap-3 sm:absolute sm:-left-[4.15rem] sm:top-8">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-900 shadow-sm">
                        {item.step}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.label}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Architecture
              </p>

              <p className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                Designed the revised model
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Balanced business clarity, reporting continuity, and technical
                compatibility.
              </p>
            </div>

            <div className="rounded-3xl border border-sky-200/80 bg-sky-50/50 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">
                Engineering
              </p>

              <p className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                Implemented the production changes
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Updated procedures, mappings, summary logic, and reporting
                structures.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-200/80 bg-emerald-50/50 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                Ownership
              </p>

              <p className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                Validated and supported rollout
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Managed testing, stakeholder communication, production support,
                and root-cause analysis.
              </p>
            </div>
          </div>
        </div>
      </section>
                  {/* ==================================================================== */}
      {/* 4. BEFORE VS AFTER                                                  */}
      {/* ==================================================================== */}

      <section
        id="before-after"
        className="border-b border-slate-200/80 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
              Architecture Evolution
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl sm:leading-[1.08]">
              The architecture changed where independence was needed—and
              remained stable where consistency mattered.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              The redesign introduced a clearer business dimension without
              replacing the production platform. Each change was deliberately
              isolated so historical reporting and downstream outputs could
              continue operating reliably.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              {
                area: "Business Structure",
                beforeTitle: "Separate retailer identities",
                before:
                  "Consumer, small-business, and business activity were represented through different retailer values.",
                afterTitle: "Retailer plus Channel Type",
                after:
                  "Retailer identity was simplified while B2C, SMB, and B2B became an explicit reporting dimension.",
                accent: "sky",
              },
              {
                area: "Reporting Context",
                beforeTitle: "Channel meaning was implicit",
                before:
                  "Users inferred channel context from retailer naming and existing report structures.",
                afterTitle: "Channel meaning became explicit",
                after:
                  "Channel Type became available directly for reporting, filtering, and analysis.",
                accent: "emerald",
              },
              {
                area: "Transformation Logic",
                beforeTitle: "Retailer-led processing",
                before:
                  "Processing logic depended heavily on how each retailer value was interpreted.",
                afterTitle: "Channel-aware processing",
                after:
                  "Consumer and business paths could be managed independently while following common standards.",
                accent: "violet",
              },
              {
                area: "Product Mappings",
                beforeTitle: "Shared mapping assumptions",
                before:
                  "Product relationships depended on retailer values remaining consistent across downstream joins.",
                afterTitle: "Mapping dependencies became visible",
                after:
                  "Channel-specific product requirements could be identified, validated, and managed deliberately.",
                accent: "amber",
              },
              {
                area: "Tableau Experience",
                beforeTitle: "One filter carried two meanings",
                before:
                  "Retailer filtering represented both the partner and its operating channel.",
                afterTitle: "Clearer analytical controls",
                after:
                  "Retailer and Channel Type filters supported more relevant and intuitive analysis.",
                accent: "sky",
              },
              {
                area: "Historical Reporting",
                beforeTitle: "Established relationships",
                before:
                  "Historical reports relied on existing retailer values, summaries, and analytical relationships.",
                afterTitle: "Continuity preserved",
                after:
                  "Controlled migration and regression testing protected previously processed reporting.",
                accent: "emerald",
              },
              {
                area: "Future Change",
                beforeTitle: "Growth increased complexity",
                before:
                  "New channel requirements risked creating additional retailer values and maintenance overhead.",
                afterTitle: "A more extensible model",
                after:
                  "Future channel requirements could evolve without repeatedly redesigning retailer identity.",
                accent: "violet",
              },
              {
                area: "Downstream Output",
                beforeTitle: "Standardized delivery",
                before:
                  "Production summaries and analytical outputs already supported recurring business reporting.",
                afterTitle: "Standardized delivery retained",
                after:
                  "Downstream systems continued receiving a consistent output model despite upstream redesign.",
                accent: "emerald",
                featured: true,
              },
            ].map((item) => {
              const accentClasses = {
                sky: {
                  border: "border-sky-200/80",
                  background: "bg-sky-50/35",
                  label: "text-sky-700",
                  dot: "bg-sky-500",
                  line: "from-sky-300 to-sky-500",
                },
                emerald: {
                  border: "border-emerald-200/80",
                  background: "bg-emerald-50/35",
                  label: "text-emerald-700",
                  dot: "bg-emerald-500",
                  line: "from-emerald-300 to-emerald-500",
                },
                violet: {
                  border: "border-violet-200/80",
                  background: "bg-violet-50/35",
                  label: "text-violet-700",
                  dot: "bg-violet-500",
                  line: "from-violet-300 to-violet-500",
                },
                amber: {
                  border: "border-amber-200/80",
                  background: "bg-amber-50/35",
                  label: "text-amber-700",
                  dot: "bg-amber-500",
                  line: "from-amber-300 to-amber-500",
                },
              } as const;

              const styles =
                accentClasses[item.accent as keyof typeof accentClasses];

              return (
                <article
                  key={item.area}
                  className={`group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7 ${
                    item.featured
                      ? "border-emerald-300 bg-slate-950 text-white shadow-xl"
                      : `${styles.border} ${styles.background}`
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${
                      item.featured
                        ? "from-transparent via-emerald-400 to-transparent"
                        : `from-transparent ${styles.line} to-transparent`
                    }`}
                  />

                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                      item.featured ? "text-emerald-400" : styles.label
                    }`}
                  >
                    {item.area}
                  </p>

                  <div className="mt-6">
                    <div className="grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                      {/* Before */}
                      <div>
                        <p
                          className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                            item.featured
                              ? "text-slate-500"
                              : "text-amber-600"
                          }`}
                        >
                          Before
                        </p>

                        <h3
                          className={`mt-2 text-xl font-semibold tracking-tight ${
                            item.featured
                              ? "text-slate-300"
                              : "text-slate-950"
                          }`}
                        >
                          {item.beforeTitle}
                        </h3>

                        <p
                          className={`mt-3 text-sm leading-7 ${
                            item.featured
                              ? "text-slate-400"
                              : "text-slate-600"
                          }`}
                        >
                          {item.before}
                        </p>
                      </div>

                      {/* Transformation indicator */}
                      <div
                        aria-hidden="true"
                        className="flex items-center justify-center sm:flex-col"
                      >
                        <div
                          className={`h-px flex-1 sm:h-8 sm:w-px ${
                            item.featured
                              ? "bg-slate-700"
                              : "bg-slate-200"
                          }`}
                        />

                        <div
                          className={`mx-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border sm:mx-0 sm:my-3 ${
                            item.featured
                              ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                              : "border-slate-200 bg-white text-slate-500"
                          }`}
                        >
                          <span className="text-sm">→</span>
                        </div>

                        <div
                          className={`h-px flex-1 sm:h-8 sm:w-px ${
                            item.featured
                              ? "bg-slate-700"
                              : "bg-slate-200"
                          }`}
                        />
                      </div>

                      {/* After */}
                      <div>
                        <p
                          className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                            item.featured
                              ? "text-emerald-400"
                              : "text-emerald-600"
                          }`}
                        >
                          After
                        </p>

                        <h3
                          className={`mt-2 text-xl font-semibold tracking-tight ${
                            item.featured
                              ? "text-white"
                              : "text-slate-950"
                          }`}
                        >
                          {item.afterTitle}
                        </h3>

                        <p
                          className={`mt-3 text-sm leading-7 ${
                            item.featured
                              ? "text-slate-300"
                              : "text-slate-700"
                          }`}
                        >
                          {item.after}
                        </p>
                      </div>
                    </div>
                  </div>

                  {item.featured && (
                    <div className="mt-6 flex items-center gap-3 border-t border-slate-800 pt-5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      </span>

                      <p className="text-sm font-medium text-emerald-200">
                        The architecture evolved without forcing downstream
                        consumers to adopt a new output structure.
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 text-slate-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M4 7h16M4 17h16" />
                  <path d="M8 3L4 7l4 4M16 13l4 4-4 4" />
                </svg>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Architectural outcome
                </p>

                <p className="mt-3 max-w-4xl text-xl font-medium leading-9 tracking-[-0.015em] text-slate-900 sm:text-2xl sm:leading-10">
                  The business gained independent channel reporting while the
                  platform retained a consistent downstream contract.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* ==================================================================== */}
      {/* 5. BUSINESS IMPACT                                                  */}
      {/* ==================================================================== */}

      <section
        id="business-impact"
        className="border-b border-slate-200/80 bg-slate-50/50 px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
              Business Impact
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl sm:leading-[1.08]">
              A clearer reporting model with less architectural complexity.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              The value of the redesign was not measured by a single headline
              metric. It created a safer, clearer, and more extensible foundation
              for recurring reporting while preserving the systems and historical
              data the business already relied on.
            </p>
          </div>

          {/* Impact cards */}
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-3xl border border-sky-200/80 bg-sky-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-sky-200/60"
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-200 bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 text-sky-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M4 6h16M4 12h10M4 18h7" />
                    <circle cx="18" cy="12" r="2.5" />
                  </svg>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Clearer Reporting
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Retailer and channel became distinct business concepts.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Users could analyse consumer, small-business, and business
                  performance through an explicit Channel Type dimension rather
                  than interpreting channel meaning from retailer names.
                </p>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-emerald-200/80 bg-emerald-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-emerald-200/60"
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200 bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 text-emerald-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M5 12l4 4L19 6" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Protected Continuity
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Historical reporting remained usable throughout the change.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Controlled migration, reconciliation, and regression testing
                  reduced the risk of disrupting previously processed sales,
                  targets, summaries, and analytical outputs.
                </p>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-violet-200/80 bg-violet-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-md sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-violet-200/60"
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-200 bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 text-violet-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M7 7h10v10H7z" />
                    <path d="M4 4h3M17 4h3M4 20h3M17 20h3" />
                  </svg>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
                  Reduced Complexity
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Future channel requirements no longer required more retailer
                  identities.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Separating channel context from retailer identity reduced
                  retailer proliferation and created a more maintainable model
                  for future reporting changes.
                </p>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-amber-200/80 bg-amber-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-amber-200/60"
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200 bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M12 3v18M3 12h18" />
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                  Improved Usability
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Tableau filtering became more intuitive and relevant.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Retailer and Channel Type filters could work together, with
                  context filtering and relevant-value behaviour helping users
                  focus on valid combinations.
                </p>
              </div>
            </article>
          </div>

          {/* Technical impact */}
          <div className="mt-16 overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-xl">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-slate-800 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                  Technical Impact
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  The platform became easier to extend without weakening its
                  downstream contract.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  The redesigned model created clearer separation upstream while
                  retaining consistent summaries and reporting outputs
                  downstream.
                </p>
              </div>

              <div className="grid sm:grid-cols-2">
                {[
                  {
                    label: "Maintainability",
                    text: "Retailer identity and channel logic could be managed independently.",
                  },
                  {
                    label: "Scalability",
                    text: "Additional channel requirements could be introduced without multiplying retailer values.",
                  },
                  {
                    label: "Reliability",
                    text: "Historical reconciliation and regression testing protected recurring reporting.",
                  },
                  {
                    label: "Data Quality",
                    text: "The production issue exposed a hidden product-mapping dependency that could now be managed explicitly.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={`p-6 sm:p-8 ${
                      index % 2 === 0 ? "sm:border-r sm:border-slate-800" : ""
                    } ${index < 2 ? "border-b border-slate-800" : ""}`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {item.label}
                    </p>

                    <p className="mt-3 text-base font-medium leading-7 text-slate-200">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Production learning */}
          <div className="mt-16 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
                Production Learning
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Validation continued after release.
              </h3>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                After rollout, stakeholder testing revealed missing SKU
                attributes in a business-channel report. The sales records were
                valid, but the reporting relationship failed because sales and
                product mappings used different retailer identities.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                I traced the issue through the fact table, product master, and
                Tableau relationship, identified the failed join, and proposed a
                controlled mapping solution without changing stakeholder-owned
                master data before approval.
              </p>

              <div className="mt-7 border-t border-slate-200 pt-6">
                <p className="text-sm font-semibold leading-7 text-slate-900 sm:text-base">
                  The incident strengthened the architecture by exposing a
                  downstream dependency that backend validation alone had not
                  revealed.
                </p>
              </div>
            </div>
          </div>

          {/* Key lesson */}
          <div className="mt-16 rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Key Lesson
            </p>

            <blockquote className="mt-5 max-w-4xl text-2xl font-medium leading-10 tracking-[-0.02em] text-slate-950 sm:text-3xl sm:leading-[1.35]">
              “Architecture changes must consider downstream joins, not only
              fact tables.”
            </blockquote>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              A successful migration requires validation across the complete
              reporting chain—from transformation logic and master data to
              analytical relationships and end-user behaviour.
            </p>
          </div>
        </div>
      </section>
            {/* ==================================================================== */}
      {/* 6. CLOSING & CONTINUE EXPLORING                                     */}
      {/* ==================================================================== */}

      <section className="relative overflow-hidden border-t border-slate-200/80 bg-slate-950 px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-sm">
                Closing Perspective
              </p>

              <h2 className="mt-5 max-w-4xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl sm:leading-[1.1]">
                Good architecture is not only about designing a cleaner future
                state.
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                It is about reaching that future state without breaking the
                systems, reporting, and operational processes the business
                already depends on.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
                What this project demonstrates
              </p>

              <ul className="mt-5 space-y-4">
                {[
                  "Architecture and data-model design",
                  "Production migration planning",
                  "Historical and regression validation",
                  "Cross-system dependency analysis",
                  "Stakeholder coordination",
                  "Post-release root-cause investigation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-800 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-sm">
              Continue Exploring
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <a
                href="/case-studies/internal-finance-integration"
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Previous Case Study
                  </p>

                  <span
                    aria-hidden="true"
                    className="text-slate-500 transition-transform duration-300 group-hover:-translate-x-1"
                  >
                    ←
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  Internal Finance Integration Platform
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Replacing a fragile, machine-dependent synchronization process
                  with a browser-accessible internal platform.
                </p>
              </a>

              <Link
  href="/"
  className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900 sm:p-8"
>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Return To
                  </p>

                  <span
                    aria-hidden="true"
                    className="text-slate-500 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  Homepage
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Explore the full portfolio, featured work, business impact, and
                  professional background.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}