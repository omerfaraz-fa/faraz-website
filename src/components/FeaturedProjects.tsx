import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200 bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          Selected Business Impact
        </p>

        <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
          A selection of business problems solved through technology, data, and
          automation.
        </h2>

        <Link
          href="/case-studies/retail-operations-automation"
          className="group mt-16 block rounded-3xl border border-slate-200 bg-slate-50 p-10 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
        >
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Business Transformation
          </p>

          <div className="mt-4 flex items-start justify-between gap-8">
            <div>
              <h3 className="text-3xl font-semibold tracking-[-0.02em] text-slate-950">
                Retail Operations Automation Platform
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Transformed a fragmented weekly retail-data workflow from
                approximately two days of manual processing into a scalable
                automated platform requiring around two hours of oversight.
              </p>
            </div>

            <span
              aria-hidden="true"
              className="mt-2 text-2xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-950"
            >
              →
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm">
              Snowflake
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm">
              Salesforce
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm">
              Tableau
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm">
              SQL
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm">
              Python
            </span>
          </div>

          <p className="mt-8 text-sm font-medium text-slate-950">
            Read case study
          </p>
        </Link>
      </div>
    </section>
  );
}