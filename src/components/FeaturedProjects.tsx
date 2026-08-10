// src/components/FeaturedProjects.tsx
import type { ReactNode } from "react";
import Link from "next/link";
import CommercePilotFeature from "./CommercePilotFeature";

const projects = [
  {
    id: "retail",
    number: "01",
    capability: "Operational Transformation",
    category: "Data Integration & Process Automation",
    title: "Retail Operations Automation Platform",
    description:
      "A fragmented weekly retail-data workflow involving multiple sources, manual transformations, operational-system imports, and reporting was redesigned into a scalable Snowflake-based platform.",
    href: "/case-studies/retail-operations-automation",
    tags: ["Snowflake", "Salesforce", "Tableau", "SQL", "Python"],
    highlight: "Weekly processing reduced from ~2 days to ~2 hours",
  },
  {
    id: "architecture",
    number: "02",
    capability: "Architecture Evolution",
    category: "Data Architecture & Systems Transformation",
    title: "Evolving a Production Data Architecture",
    description:
      "A live retail-reporting architecture was redesigned to separate retailer identity from channel context while protecting historical reporting, production procedures, and downstream analytics.",
    href: "/case-studies/retail-data-architecture",
    tags: ["Snowflake", "Tableau", "SQL", "Data Modelling", "Validation"],
    highlight: "New reporting dimension introduced without breaking continuity",
  },
  {
    id: "finance",
    number: "03",
    capability: "Internal Platform Engineering",
    category: "Business Systems & Data Integration",
    title: "Internal Finance Integration Platform",
    description:
      "A fragile, machine-dependent finance synchronization process was rebuilt as a browser-accessible internal platform that centralized data in Snowflake and simplified operations.",
    href: "/case-studies/internal-finance-integration",
    tags: ["Python", "Flask", "Snowflake", "SQL", "Automation"],
    highlight: "Manual technical workflow replaced by a browser platform",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
              Featured Case Studies
            </p>

            <h2 className="mt-2 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              Real production systems. Real architectural decisions.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Three projects demonstrating operational transformation, production
            architecture design, and internal platform engineering.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="mt-10 space-y-6 sm:mt-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group block overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
            >
              <div className="grid lg:grid-cols-[41%_59%] lg:items-stretch">
                {/* Visual Architecture Preview */}
                <ProjectPreview projectId={project.id} />

                {/* Content Panel */}
                <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-8">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
                          {project.number} · {project.capability}
                        </p>

                        <p className="mt-0.5 text-xs font-medium text-slate-500">
                          {project.category}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-xl text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-950"
                      >
                        →
                      </span>
                    </div>

                    <h3 className="mt-3.5 text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:leading-7">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-200/80 pt-5">
                    <p className="text-xs font-semibold text-slate-900 sm:text-sm">
                      {project.highlight}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200/80 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-950 sm:text-sm">
                      Read case study
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
                    ))}
        </div>

        {/* AI Operations Lab */}
        <div className="mt-14 border-t border-slate-200 pt-12 sm:mt-16 sm:pt-14 lg:mt-20 lg:pt-16">
          <div className="mb-7 max-w-3xl sm:mb-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
              Beyond my core work
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-3xl">
              Learning by building.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              I like understanding new technology well enough to see where it
              could actually be useful. CommercePilot started with that kind of
              curiosity.
            </p>
          </div>

          <CommercePilotFeature />
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ projectId }: { projectId: string }) {
  if (projectId === "retail") {
    return <RetailPreview />;
  }

  if (projectId === "architecture") {
    return <ArchitecturePreview />;
  }

  return <FinancePreview />;
}

function PreviewShell({
  children,
  accent,
}: {
  children: ReactNode;
  accent: "sky" | "violet" | "emerald";
}) {
  const accentClasses = {
    sky: "bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_60%)]",
    violet:
      "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.16),transparent_60%)]",
    emerald:
      "bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_60%)]",
  };

  return (
    <div className="relative min-h-[220px] overflow-hidden border-b border-slate-800 bg-slate-950 p-4 sm:min-h-[240px] sm:p-5 lg:min-h-[330px] lg:border-b-0 lg:border-r">
      <div
        aria-hidden="true"
        className={`absolute inset-0 ${accentClasses[accent]}`}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.22)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_top,black,transparent)]"
      />

      <div className="relative flex h-full flex-col justify-center">
        {children}
      </div>
    </div>
  );
}

function RetailPreview() {
  return (
    <PreviewShell accent="sky">
      {/* Desktop Layout - Synchronized Canvas */}
      <div className="relative hidden h-[290px] w-full xl:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="retail-flow-grad" x1="0" x2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>

          {/* Retail Data (31%, 23%) -> Snowflake (36%, 50%) */}
          <path
            d="M 31 23 C 34 23 33 50 36 50"
            fill="none"
            stroke="url(#retail-flow-grad)"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-pulse motion-reduce:animate-none"
          />

          {/* Manual Inputs (31%, 77%) -> Snowflake (36%, 50%) */}
          <path
            d="M 31 77 C 34 77 33 50 36 50"
            fill="none"
            stroke="url(#retail-flow-grad)"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-pulse motion-reduce:animate-none"
          />

          {/* Snowflake (64%, 50%) -> Ops Systems (69%, 23%) */}
          <path
            d="M 64 50 C 67 50 66 23 69 23"
            fill="none"
            stroke="url(#retail-flow-grad)"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-pulse motion-reduce:animate-none"
          />

          {/* Snowflake (64%, 50%) -> Analytics (69%, 77%) */}
          <path
            d="M 64 50 C 67 50 66 77 69 77"
            fill="none"
            stroke="url(#retail-flow-grad)"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-pulse motion-reduce:animate-none"
          />
        </svg>

        {/* Inputs Column */}
        <div className="absolute top-[8%] left-[3%] w-[28%]">
          <PreviewNode title="Retail Data" subtitle="Multiple sources" />
        </div>
        <div className="absolute bottom-[8%] left-[3%] w-[28%]">
          <PreviewNode title="Manual Inputs" subtitle="Files & mappings" />
        </div>

        {/* Center Engine Node */}
        <div className="absolute top-[35%] left-[36%] w-[28%]">
          <PreviewNode
            className="border-emerald-400/60 bg-emerald-950/80"
            title="Snowflake"
            subtitle="Transform & validate"
          />
        </div>

        {/* Outputs Column */}
        <div className="absolute top-[8%] right-[3%] w-[28%]">
          <PreviewNode
            className="border-indigo-400/50 bg-indigo-950/70"
            title="Ops Systems"
            subtitle="Standardized output"
          />
        </div>
        <div className="absolute bottom-[8%] right-[3%] w-[28%]">
          <PreviewNode
            className="border-violet-400/50 bg-violet-950/70"
            title="Analytics"
            subtitle="Reporting"
          />
        </div>
      </div>

      {/* Mobile / Tablet Flow */}
      <div className="flex flex-col gap-2 sm:gap-3 xl:hidden">
        <div className="grid grid-cols-2 gap-2">
          <MobileNode title="Retail Data" subtitle="Multiple sources" />
          <MobileNode title="Manual Inputs" subtitle="Files & mappings" />
        </div>
        <div className="flex justify-center" aria-hidden="true">
          <span className="text-xs text-slate-500">↓</span>
        </div>
        <MobileNode
          className="border-emerald-400/60 bg-emerald-950/80 text-center"
          title="Snowflake Transformation"
          subtitle="Transform, validate & consolidate"
        />
        <div className="flex justify-center" aria-hidden="true">
          <span className="text-xs text-slate-500">↓</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <MobileNode
            className="border-indigo-400/50 bg-indigo-950/70"
            title="Ops Systems"
            subtitle="Standardized output"
          />
          <MobileNode
            className="border-violet-400/50 bg-violet-950/70"
            title="Analytics"
            subtitle="Reporting"
          />
        </div>
      </div>
    </PreviewShell>
  );
}

function ArchitecturePreview() {
  return (
    <PreviewShell accent="violet">
      {/* Desktop Layout - Synchronized Vertical Canvas */}
      <div className="relative hidden h-[290px] w-full xl:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="arch-flow-left-grad" x1="0" x2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>

            <linearGradient id="arch-flow-right-grad" x1="0" x2="1">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>

          {/* Shared Model (bottom: 21%) -> Channel Type (top: 27%) */}
          <path
            d="M 50 21 L 50 27"
            fill="none"
            stroke="#64748b"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-pulse motion-reduce:animate-none"
          />

          {/* Channel Type (bottom: 45%) -> Consumer (top: 51%) */}
          <path
            d="M 50 45 C 50 48 23 48 23 51"
            fill="none"
            stroke="url(#arch-flow-left-grad)"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-pulse motion-reduce:animate-none"
          />

          {/* Channel Type (bottom: 45%) -> Business (top: 51%) */}
          <path
            d="M 50 45 C 50 48 77 48 77 51"
            fill="none"
            stroke="url(#arch-flow-right-grad)"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-pulse motion-reduce:animate-none"
          />

          {/* Consumer (bottom: 69%) -> Standardized Reporting (top: 83%) */}
          <path
            d="M 23 69 C 23 78 50 75 50 83"
            fill="none"
            stroke="#34d399"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-pulse motion-reduce:animate-none"
          />

          {/* Business (bottom: 69%) -> Standardized Reporting (top: 83%) */}
          <path
            d="M 77 69 C 77 78 50 75 50 83"
            fill="none"
            stroke="#34d399"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-pulse motion-reduce:animate-none"
          />
        </svg>

        {/* 1. Shared Model */}
        <div className="absolute top-[3%] left-[34%] w-[32%] text-center">
          <PreviewNode title="Shared Model" subtitle="Existing structure" />
        </div>

        {/* 2. Channel Type Evolution */}
        <div className="absolute top-[27%] left-[34%] w-[32%] text-center">
          <PreviewNode
            className="border-sky-400/50 bg-sky-950/75"
            title="Channel Type"
            subtitle="Architecture evolution"
          />
        </div>

        {/* 3. Consumer & Business Split */}
        <div className="absolute top-[51%] left-[8%] w-[30%] text-center">
          <PreviewNode
            className="border-blue-400/50 bg-blue-950/70"
            title="Consumer"
            subtitle="Independent context"
          />
        </div>
        <div className="absolute top-[51%] right-[8%] w-[30%] text-center">
          <PreviewNode
            className="border-violet-400/50 bg-violet-950/70"
            title="Business"
            subtitle="Independent context"
          />
        </div>

        {/* 4. Output Reporting Target */}
        <div className="absolute top-[83%] left-[26%] w-[48%] text-center">
          <div className="z-10 rounded-full border border-emerald-400/30 bg-emerald-950/90 px-3.5 py-1 text-[11px] font-semibold text-emerald-200 shadow-sm backdrop-blur">
            Standardized reporting
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Flow */}
      <div className="flex flex-col gap-2 sm:gap-3 xl:hidden">
        <MobileNode
          className="text-center"
          title="Shared Model"
          subtitle="Existing structure"
        />
        <div className="flex justify-center" aria-hidden="true">
          <span className="text-xs text-slate-500">↓</span>
        </div>
        <MobileNode
          className="border-sky-400/50 bg-sky-950/75 text-center"
          title="Channel Type Evolution"
          subtitle="Separating retailer identity from context"
        />
        <div className="flex justify-center" aria-hidden="true">
          <span className="text-xs text-slate-500">↓</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <MobileNode
            className="border-blue-400/50 bg-blue-950/70"
            title="Consumer Path"
            subtitle="Independent context"
          />
          <MobileNode
            className="border-violet-400/50 bg-violet-950/70"
            title="Business Path"
            subtitle="Independent context"
          />
        </div>
        <div className="mt-1 rounded-full border border-emerald-400/30 bg-emerald-950/80 py-1.5 text-center text-xs font-medium text-emerald-200">
          Standardized reporting output
        </div>
      </div>
    </PreviewShell>
  );
}

function FinancePreview() {
  return (
    <PreviewShell accent="emerald">
      {/* Desktop Layout - Synchronized Horizontal Canvas */}
      <div className="relative hidden h-[290px] w-full xl:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="finance-flow-grad" x1="0" x2="1">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>

          {/* Finance System (31%, 50%) -> Web Platform (36%, 50%) */}
          <path
            d="M 31 50 L 36 50"
            fill="none"
            stroke="url(#finance-flow-grad)"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-pulse motion-reduce:animate-none"
          />

          {/* Web Platform (64%, 50%) -> Snowflake (69%, 23%) */}
          <path
            d="M 64 50 C 67 50 66 23 69 23"
            fill="none"
            stroke="url(#finance-flow-grad)"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-pulse motion-reduce:animate-none"
          />

          {/* Web Platform (64%, 50%) -> Business Users (69%, 77%) */}
          <path
            d="M 64 50 C 67 50 66 77 69 77"
            fill="none"
            stroke="url(#finance-flow-grad)"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-pulse motion-reduce:animate-none"
          />
        </svg>

        {/* Source Node */}
        <div className="absolute top-[35%] left-[3%] w-[28%]">
          <PreviewNode title="Finance System" subtitle="Legacy process" />
        </div>

        {/* Central Platform Engine */}
        <div className="absolute top-[35%] left-[36%] w-[28%]">
          <PreviewNode
            className="border-indigo-400/60 bg-indigo-950/75"
            title="Web Platform"
            subtitle="Python · Flask"
          />
        </div>

        {/* Target Outputs Column */}
        <div className="absolute top-[8%] right-[3%] w-[28%]">
          <PreviewNode
            className="border-sky-400/50 bg-sky-950/70"
            title="Snowflake"
            subtitle="Centralized data"
          />
        </div>
        <div className="absolute bottom-[8%] right-[3%] w-[28%]">
          <PreviewNode
            className="border-emerald-400/50 bg-emerald-950/70"
            title="Business Users"
            subtitle="Browser access"
          />
        </div>
      </div>

      {/* Mobile / Tablet Flow */}
      <div className="flex flex-col gap-2 sm:gap-3 xl:hidden">
        <MobileNode
          className="text-center"
          title="Legacy Finance System"
          subtitle="Fragile machine-dependent workflow"
        />
        <div className="flex justify-center" aria-hidden="true">
          <span className="text-xs text-slate-500">↓</span>
        </div>
        <MobileNode
          className="border-indigo-400/60 bg-indigo-950/75 text-center"
          title="Web Platform (Python / Flask)"
          subtitle="Centralized browser-accessible integration"
        />
        <div className="flex justify-center" aria-hidden="true">
          <span className="text-xs text-slate-500">↓</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <MobileNode
            className="border-sky-400/50 bg-sky-950/70"
            title="Snowflake"
            subtitle="Centralized data"
          />
          <MobileNode
            className="border-emerald-400/50 bg-emerald-950/70"
            title="Business Users"
            subtitle="Browser access"
          />
        </div>
      </div>
    </PreviewShell>
  );
}

function PreviewNode({
  className = "",
  title,
  subtitle,
}: {
  className?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className={`z-10 w-full rounded-lg border border-slate-700/80 bg-slate-900/90 p-2.5 text-white shadow-md backdrop-blur transition-all duration-300 group-hover:border-slate-500 ${className}`}
    >
      <p className="text-xs font-semibold leading-snug">{title}</p>
      <p className="mt-0.5 text-[10px] leading-tight text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}

function MobileNode({
  className = "",
  title,
  subtitle,
}: {
  className?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className={`rounded-lg border border-slate-800 bg-slate-900/90 p-2 text-white shadow-xs backdrop-blur ${className}`}
    >
      <p className="text-xs font-semibold leading-snug">{title}</p>
      <p className="text-[10px] leading-tight text-slate-400">{subtitle}</p>
    </div>
  );
}