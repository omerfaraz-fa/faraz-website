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

        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Business Transformation
          </p>

          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-slate-950">
            Data Integration & Automation Platform
          </h3>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Designed and maintained automated business workflows that connected
            multiple systems, reduced manual processing, improved reporting
            quality, and supported retail operations across multiple countries.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm">
              Salesforce
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm">
              Snowflake
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm">
              SQL
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm">
              Python
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}