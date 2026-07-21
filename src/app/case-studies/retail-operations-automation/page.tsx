import Image from "next/image";

export default function GoogleRetailAutomationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Case Study Hero */}

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
            Retail Operations Automation Platform
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            A fragmented weekly retail-data workflow involving multiple files,
            manual transformations, operational-system imports, and reporting
            was redesigned into a reliable, scalable, Snowflake-based platform.
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

              <p className="mt-3 text-3xl font-semibold">Multi-market retail</p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Multiple data sources, systems, users, and reporting outputs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            The Challenge
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            A business-critical process depended almost entirely on manual
            work.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Every week, data arrived from multiple retail sources in different
            formats. The process relied on manual Excel transformations, Google
            Sheets, Power Query, and repetitive validation before information
            could be imported into operational systems and made available for
            reporting.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            The workflow consumed approximately two working days every week,
            created a single point of dependency, and made onboarding difficult
            because the process relied heavily on manual knowledge and repeated
            intervention.
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
              <h3 className="text-2xl font-semibold">Weekly Process</h3>

              <ul className="mt-6 space-y-4 text-slate-600">
                <li>• Download incoming retail-data files</li>
                <li>• Transform data in Excel and Power Query</li>
                <li>• Update mappings in Google Sheets</li>
                <li>• Validate outputs manually</li>
                <li>• Import data into operational systems</li>
                <li>• Verify reports and resolve errors</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-semibold">Challenges</h3>

              <ul className="mt-6 space-y-4 text-slate-600">
                <li>• Approximately two days every week</li>
                <li>• Manual and repetitive work</li>
                <li>• Difficult to train others</li>
                <li>• High dependency on one person</li>
                <li>• Increased risk of mistakes</li>
                <li>• Limited scalability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Process */}

      <section className="border-t border-slate-200 bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Automated Process
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            A repeatable platform replaced a fragile manual workflow.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-2xl font-semibold">After</h3>

              <ul className="mt-6 space-y-4 text-slate-600">
                <li>• Data loaded into structured pipelines</li>
                <li>• Transformations handled centrally in Snowflake</li>
                <li>• Automated validation and exception checks</li>
                <li>• Standardized operational-system output</li>
                <li>• Reporting data made available to analytics tools</li>
                <li>• Weekly effort reduced to monitoring and exceptions</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white">
              <h3 className="text-2xl font-semibold">Business Outcome</h3>

              <div className="mt-8 space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-slate-400">
                    Processing time
                  </p>

                  <p className="mt-2 text-4xl font-semibold">~2 hours</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-slate-400">
                    Operating model
                  </p>

                  <p className="mt-2 text-xl font-medium">
                    Monitoring instead of manual processing
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-slate-400">
                    Scalability
                  </p>

                  <p className="mt-2 text-xl font-medium">
                    New data sources and markets could be added without
                    rebuilding the process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Visual */}

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Before, After & Architecture
          </p>

          <h2 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            The complete transformation from fragmented manual work to a
            scalable automated platform.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            The visual below summarizes the original workflow, the automated
            operating model, and the underlying platform architecture without
            exposing confidential client or retailer information.
          </p>

          <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/retail-operations-automation-platform.png"
              alt="Retail Operations Automation Platform showing the previous manual process, automated process, and solution architecture"
              width={1536}
              height={1024}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>
      {/* Business Impact */}

<section className="border-t border-slate-200 bg-white px-6 py-24 lg:px-8">
  <div className="mx-auto max-w-5xl">

    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
      Business Impact
    </p>

    <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
      More than automation—it changed how the operation could scale.
    </h2>

    <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
      The objective was never simply to automate tasks. It was to redesign a
      business process so it became easier to operate, easier to maintain,
      and capable of supporting future growth without proportional increases
      in manual effort.
    </p>

    <div className="mt-16 grid gap-6 md:grid-cols-2">

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h3 className="text-2xl font-semibold">
          Operational Improvements
        </h3>

        <ul className="mt-6 space-y-4 text-slate-600">
          <li>✓ Weekly effort reduced from approximately two days to two hours</li>
          <li>✓ Manual repetitive work largely eliminated</li>
          <li>✓ Consistent and repeatable data processing</li>
          <li>✓ Simplified onboarding of future team members</li>
          <li>✓ Reduced operational risk</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h3 className="text-2xl font-semibold">
          Long-Term Value
        </h3>

        <ul className="mt-6 space-y-4 text-slate-600">
          <li>✓ Easier expansion into additional markets</li>
          <li>✓ Better data quality and consistency</li>
          <li>✓ Improved reporting reliability</li>
          <li>✓ Centralized business logic</li>
          <li>✓ A scalable foundation for future automation</li>
        </ul>
      </div>

    </div>

  </div>
</section>
    </main>
  );
}