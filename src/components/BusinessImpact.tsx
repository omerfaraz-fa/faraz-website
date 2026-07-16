export default function BusinessImpact() {
  return (
    <>
    <section
        id="work"
        className="border-t border-slate-200 bg-slate-50 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              How I create value
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl">
              From operational complexity to scalable business systems.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              I work across business operations and technology to identify
              inefficiencies, connect fragmented information, and create
              reliable processes that are easier to operate and scale.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                01
              </p>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                Connect
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Bring together fragmented data, platforms, teams, and workflows
                to create a reliable foundation for operations and reporting.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                02
              </p>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                Simplify
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Replace repetitive, manual, and error-prone processes with
                clear, manageable workflows supported by practical automation.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                03
              </p>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                Scale
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Build reusable systems and processes that can support more
                users, markets, clients, and data without proportional manual
                effort.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}