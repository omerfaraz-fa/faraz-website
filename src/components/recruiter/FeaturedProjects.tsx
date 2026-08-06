import Link from "next/link";

import Section from "./Section";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    number: "01",
    title: "Retail Data Automation",
    problem:
      "A fragmented weekly reporting process depended on multiple files, manual transformations and repeated operational checks.",
    solution:
      "Designed an integrated Snowflake workflow that standardised ingestion, transformation and downstream business outputs.",
    impact: "Reduced the weekly process from approximately 2 days to 2 hours.",
    technologies: ["Snowflake", "SQL", "Salesforce", "Automation"],
    href: "/case-studies/retail-operations-automation",
  },
  {
    number: "02",
    title: "Enterprise Retail Data Architecture",
    problem:
      "Operational data arrived from multiple retailers, markets and source formats with inconsistent structures and business logic.",
    solution:
      "Created a centralised architecture connecting source systems, transformation layers, enterprise platforms and reporting.",
    impact:
      "Established one more reliable and scalable flow across multiple markets.",
    technologies: ["Data Integration", "ETL", "Snowflake", "Reporting"],
    href: "/case-studies/retail-data-architecture",
  },
  {
    number: "03",
    title: "Internal Finance Integration Platform",
    problem:
      "A manual finance-data workflow created operational dependency, limited visibility and required technical intervention.",
    solution:
      "Built a structured internal platform with automated processing, monitoring and a workflow suitable for non-technical users.",
    impact:
      "Improved reliability, transparency and day-to-day operational independence.",
    technologies: ["Python", "Snowflake", "Process Design", "Monitoring"],
    href: "/case-studies/internal-finance-integration",
  },
];

export default function FeaturedProjects() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Selected Work"
        title="Featured Enterprise Projects"
        description="Three examples of how I translate operational challenges into practical, scalable business solutions."
      />

      <div className="mt-12 space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-[2rem] border border-slate-200 bg-white p-6 transition duration-200 hover:border-slate-300 hover:shadow-lg sm:p-8 lg:p-10"
          >
            <div className="flex items-center justify-between gap-6">
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-400">
                {project.number}
              </p>

              <Link
                href={project.href}
                className="hidden items-center gap-2 text-sm font-semibold text-slate-950 sm:inline-flex"
              >
                View case study
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            <h3 className="mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              {project.title}
            </h3>

            <div className="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-10">
              <div className="border-t border-slate-200 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Business problem
                </p>

                <p className="mt-4 text-base leading-7 text-slate-700">
                  {project.problem}
                </p>
              </div>

              <div className="border-t border-slate-200 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Solution
                </p>

                <p className="mt-4 text-base leading-7 text-slate-700">
                  {project.solution}
                </p>
              </div>

              <div className="border-t border-slate-950 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Business impact
                </p>

                <p className="mt-4 text-xl font-semibold leading-8 tracking-[-0.02em] text-slate-950">
                  {project.impact}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 sm:hidden">
              <Link
                href={project.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
              >
                View case study
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
        >
          View all case studies
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}