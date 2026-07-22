import Image from "next/image";
export default function InternalFinanceIntegrationPage() {
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
            Case Study · Business Systems & Data Integration
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Modernizing an internal finance integration platform through
            automation and business-focused system design.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            A fragile, machine-dependent synchronization process was redesigned
            into a browser-accessible platform that centralized financial data,
            simplified operations for business users, and improved reliability
            through automation.
          </p>

          <div className="mt-14 grid gap-6 border-t border-slate-200 pt-10 sm:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                Before
              </p>

              <p className="mt-3 text-3xl font-semibold">
                Manual & Technical
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Database queries, exports and technical intervention
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                After
              </p>

              <p className="mt-3 text-3xl font-semibold">
                Browser Platform
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Accessible to internal business users with automated startup
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500">
                Technologies
              </p>

              <p className="mt-3 text-3xl font-semibold">
                Python • Flask
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Snowflake · SQL · Windows Automation
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
      A finance process depended on technical knowledge, manual exports, and
      one machine remaining available.
    </h2>

    <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
      Internal business users depended on a technical workflow involving a
      legacy database, Python scripts, manual queries, and manual exports before
      financial data could be synchronized into Snowflake.
    </p>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
      The process also relied on a dedicated Windows machine and on the person
      who understood how to operate and troubleshoot it. If the application was
      closed, the machine restarted, or the scheduled process failed, the
      integration could become unavailable without users immediately knowing.
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
      The workflow was difficult to operate, support, and keep available.
    </h2>

    <div className="mt-16 grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <h3 className="text-2xl font-semibold">Manual Workflow</h3>

        <ul className="mt-6 space-y-4 text-slate-600">
          <li>• Access a dedicated Windows machine</li>
          <li>• Run or inspect the Python process</li>
          <li>• Execute database queries manually</li>
          <li>• Export query results</li>
          <li>• Move the data toward Snowflake</li>
          <li>• Validate and troubleshoot failures manually</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8">
        <h3 className="text-2xl font-semibold">Operational Risks</h3>

        <ul className="mt-6 space-y-4 text-slate-600">
          <li>• Dependency on one machine</li>
          <li>• Dependency on specialist knowledge</li>
          <li>• Manual query and export errors</li>
          <li>• Application could be closed accidentally</li>
          <li>• Restarts could leave the process unavailable</li>
          <li>• Limited visibility into failures</li>
        </ul>
      </div>
    </div>
  </div>
</section>
{/* The Solution */}

<section className="border-t border-slate-200 bg-white px-6 py-24 lg:px-8">
  <div className="mx-auto max-w-5xl">

    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
      The Solution
    </p>

    <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
      A browser-accessible integration platform replaced a fragile technical workflow.
    </h2>

    <div className="mt-16 grid gap-6 md:grid-cols-2">

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

        <h3 className="text-2xl font-semibold">
          New Operating Model
        </h3>

        <ul className="mt-6 space-y-4 text-slate-600">
          <li>• Browser-accessible user interface</li>
          <li>• Centralized synchronization into Snowflake</li>
          <li>• Python integration layer</li>
          <li>• Automated application startup</li>
          <li>• Reduced dependence on manual database work</li>
          <li>• Simpler experience for internal business users</li>
        </ul>

      </div>

      <div className="rounded-3xl bg-slate-950 p-8 text-white">

        <h3 className="text-2xl font-semibold">
          Business Benefits
        </h3>

        <div className="mt-8 space-y-8">

          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-slate-400">
              Reliability
            </p>

            <p className="mt-2 text-xl font-medium">
              Reduced dependency on manual startup and technical intervention
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-slate-400">
              Accessibility
            </p>

            <p className="mt-2 text-xl font-medium">
              Internal business users could use a browser instead of technical tools
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-slate-400">
              Data Platform
            </p>

            <p className="mt-2 text-xl font-medium">
              Financial data centralized in Snowflake
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* Solution Architecture */}

<section className="border-t border-slate-200 bg-slate-50 px-6 py-24 lg:px-8">
  <div className="mx-auto max-w-5xl">

    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
      Solution Architecture
    </p>

    <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
      A simpler architecture separated the user experience from the technical
      integration process.
    </h2>

    <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
      Internal business users accessed the process through a browser-based
      interface, while the Python integration layer handled synchronization
      between the internal financial system and Snowflake.
    </p>

    <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <Image
        src="/images/finance-platform-architecture.png"
        alt="Internal Finance Integration Platform Architecture"
        width={1600}
        height={900}
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
      The platform made a technical finance process easier to operate, support,
      and maintain.
    </h2>

    <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
      The most important outcome was not simply moving data into Snowflake. The
      process became more accessible to internal business users, less dependent
      on manual database work, and more resilient to common operational issues.
    </p>

    <div className="mt-16 grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h3 className="text-2xl font-semibold">Operational Improvements</h3>

        <ul className="mt-6 space-y-4 text-slate-600">
          <li>✓ Reduced manual query and export work</li>
          <li>✓ Simplified access for non-technical users</li>
          <li>✓ Reduced dependence on an open command prompt</li>
          <li>✓ Improved recovery after machine restart</li>
          <li>✓ Centralized financial data in Snowflake</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h3 className="text-2xl font-semibold">Long-Term Value</h3>

        <ul className="mt-6 space-y-4 text-slate-600">
          <li>✓ Lower key-person dependency</li>
          <li>✓ More consistent operating process</li>
          <li>✓ Better foundation for monitoring and alerts</li>
          <li>✓ Easier future maintenance and enhancement</li>
          <li>✓ Stronger foundation for scalable integration</li>
        </ul>
      </div>
    </div>
  </div>
</section>
{/* Technologies Used */}

<section className="border-t border-slate-200 bg-slate-50 px-6 py-20 lg:px-8">
  <div className="mx-auto max-w-5xl">
    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
      Technologies Used
    </p>

    <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
      A lightweight stack built around integration, accessibility, and operational continuity.
    </h2>

    <div className="mt-12 flex flex-wrap gap-3">
      {[
        "Python",
        "Flask",
        "Snowflake",
        "SQL",
        "Windows Task Scheduler",
        "Web Interface",
        "Process Automation",
        "Data Integration",
      ].map((technology) => (
        <span
          key={technology}
          className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700"
        >
          {technology}
        </span>
      ))}
    </div>
  </div>
</section>
{/* My Contributions */}

<section className="border-t border-slate-200 bg-white px-6 py-24 lg:px-8">
  <div className="mx-auto max-w-5xl">

    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
      My Contributions
    </p>

    <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
      I redesigned the workflow with a focus on reliability, accessibility, and maintainability.
    </h2>

    <div className="mt-16 grid gap-6 md:grid-cols-2">

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h3 className="text-2xl font-semibold">
          Analysis & Design
        </h3>

        <ul className="mt-6 space-y-4 text-slate-600">
          <li>• Analyzed the existing synchronization process</li>
          <li>• Identified operational bottlenecks and dependencies</li>
          <li>• Designed a simpler browser-based operating model</li>
          <li>• Planned the integration architecture</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h3 className="text-2xl font-semibold">
          Development
        </h3>

        <ul className="mt-6 space-y-4 text-slate-600">
          <li>• Built the Python and Flask integration platform</li>
          <li>• Integrated data into Snowflake</li>
          <li>• Created the browser interface</li>
          <li>• Implemented automated startup using Windows Task Scheduler</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h3 className="text-2xl font-semibold">
          Operations
        </h3>

        <ul className="mt-6 space-y-4 text-slate-600">
          <li>• Improved operational reliability</li>
          <li>• Reduced manual intervention</li>
          <li>• Simplified troubleshooting</li>
          <li>• Improved long-term maintainability</li>
        </ul>
      </div>

      <div className="rounded-3xl bg-slate-950 p-8 text-white">
        <p className="text-sm uppercase tracking-[0.16em] text-slate-400">
          Focus
        </p>

        <h3 className="mt-4 text-3xl font-semibold">
          Building systems people can operate—not just systems that work.
        </h3>
      </div>

    </div>

  </div>
</section>
{/* Continue Exploring */}

<section className="border-t border-slate-200 bg-slate-950 px-6 py-24 text-white lg:px-8">
  <div className="mx-auto max-w-5xl">
    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
      Continue Exploring
    </p>

    <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
          Retail Operations Automation Platform
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          See how a fragmented weekly retail-data process was transformed into
          a scalable automated platform with centralized processing,
          validation, and reporting.
        </p>
      </div>

      <a
        href="/case-studies/retail-operations-automation"
        className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-400 hover:text-white"
      >
        Read case study
        <span
          aria-hidden="true"
          className="transition group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    </div>
  </div>
</section>
    </main>
  );
}