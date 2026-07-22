import Link from "next/link";

const projects = [
  {
    category: "Business Transformation",
    title: "Retail Operations Automation Platform",
    description:
      "Transformed a fragmented weekly retail-data workflow from approximately two days of manual processing into a scalable automated platform requiring around two hours of oversight.",
    href: "/case-studies/retail-operations-automation",
    tags: ["Snowflake", "Salesforce", "Tableau", "SQL", "Python"],
    highlight: "From ~2 days to ~2 hours",
  },
  {
    category: "Business Systems & Data Integration",
    title: "Internal Finance Integration Platform",
    description:
      "Redesigned a fragile, machine-dependent finance synchronization process into a browser-accessible platform that centralized data in Snowflake and simplified operations for internal business users.",
    href: "/case-studies/internal-finance-integration",
    tags: ["Python", "Flask", "Snowflake", "SQL", "Windows Automation"],
    highlight: "Manual workflow to browser platform",
  },
];

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
            Each case study focuses on the problem, the operating model, the
            architecture, and the business value created.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl sm:p-10"
            >
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

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.025em] text-slate-950">
                {project.title}
              </h3>

              <p className="mt-6 flex-1 text-lg leading-8 text-slate-600">
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

              <p className="mt-8 text-sm font-semibold text-slate-950">
                Read case study
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}