export default function HowIThink() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 px-6 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          How I Think
        </p>

        <h2 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-6xl">
  I don't start with technology.
  <br />
  I start with understanding the business.
</h2>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-slate-600">
  Every business has manual work that people quietly accept as "the way things
  are." My approach is to identify those bottlenecks, understand why they
  exist, and redesign the workflow before choosing the right technology to
  support it.
</p>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
              Business First
            </p>

            <h3 className="mt-5 text-2xl font-semibold text-slate-950">
              Solve the real problem.
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Technology should support business operations—not become another
              problem people need to work around.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
              Systems Thinking
            </p>

            <h3 className="mt-5 text-2xl font-semibold text-slate-950">
              Improve the workflow, not just the task.
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              I redesign how information moves through a business instead of
              simply automating individual manual steps.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
              Sustainability
            </p>

            <h3 className="mt-5 text-2xl font-semibold text-slate-950">
              Build solutions that keep working.
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Good systems should remain reliable, understandable, and easy to
              support long after the original project is finished.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}