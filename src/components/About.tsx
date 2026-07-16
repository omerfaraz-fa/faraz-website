export default function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-200 bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            About
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
            Technology should simplify business, not complicate it.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-600">
          <p>
            My work focuses on helping organizations simplify operations by
            connecting data, systems, and people. The objective is not simply
            to implement technology, but to build reliable business processes
            that reduce manual effort, improve decision-making, and scale with
            the organization.
          </p>

          <p>
            Over the years I have designed and delivered solutions across
            business transformation, data integration, Salesforce, Snowflake,
            SQL, Python, ETL, reporting, and process automation. Every solution
            begins with understanding the business problem before selecting the
            right technology.
          </p>

          <p>
            I believe the most valuable systems are often the ones users hardly
            notice—because information flows naturally, repetitive work
            disappears, and people can focus on making better decisions instead
            of managing processes.
          </p>
        </div>
      </div>
    </section>
  );
}