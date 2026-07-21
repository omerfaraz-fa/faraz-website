export default function GoogleRetailAutomationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <a
            href="/"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-950"
          >
            ← Back to homepage
          </a>

          <p className="mt-16 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Case Study · Data Integration & Process Automation
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Transforming a two-day manual retail-data process into a scalable
            automated platform.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            A fragmented weekly workflow involving multiple retailer files,
            manual transformations, Salesforce imports, and reporting was
            redesigned into a reliable Snowflake-based process requiring
            approximately two hours of weekly oversight.
          </p>

          <div className="mt-14 grid gap-6 border-t border-slate-200 pt-10 sm:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                Before
              </p>
              <p className="mt-3 text-3xl font-semibold">~2 days</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Weekly manual preparation and processing
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                After
              </p>
              <p className="mt-3 text-3xl font-semibold">~2 hours</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Weekly monitoring and exception handling
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                Scope
              </p>
              <p className="mt-3 text-3xl font-semibold">Nordic retail</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Multiple retailers, systems, users, and reporting outputs
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-24 lg:px-8">
  <div className="mx-auto max-w-5xl">
    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
      The Challenge
    </p>

    <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
      A business-critical process depended almost entirely on manual work.
    </h2>

    <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
      Every week, data arrived from multiple retailers in different formats.
      The process relied on manual Excel transformations, Google Sheets,
      Power Query, and repetitive validation before the information could be
      imported into Salesforce and made available for reporting.
    </p>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
      The workflow consumed approximately two working days every week, created
      a single point of dependency, and made onboarding new team members
      difficult because the process relied heavily on manual knowledge and
      repeated intervention.
    </p>
  </div>
</section>
    {/* Previous Process */}

<section className="border-t border-slate-200 bg-slate-50 px-6 py-24 lg:px-8">
  <div className="mx-auto max-w-5xl">
    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
      Previous Process
    </p>

    <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
      Too many manual steps. Too many opportunities for errors.
    </h2>

    <div className="mt-16 grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <h3 className="text-2xl font-semibold">
          Weekly Process
        </h3>

        <ul className="mt-6 space-y-4 text-slate-600">
          <li>• Download retailer files</li>
          <li>• Transform data in Excel & Power Query</li>
          <li>• Update Google Sheets</li>
          <li>• Validate outputs manually</li>
          <li>• Import into Salesforce</li>
          <li>• Verify reports</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <h3 className="text-2xl font-semibold">
          Challenges
        </h3>

        <ul className="mt-6 space-y-4 text-slate-600">
          <li>• Approximately two days every week</li>
          <li>• Manual repetitive work</li>
          <li>• Difficult to train others</li>
          <li>• High dependency on one person</li>
          <li>• Increased risk of mistakes</li>
          <li>• Limited scalability</li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}