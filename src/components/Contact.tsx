export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-slate-950 px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
            Contact
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Good systems begin with a clear understanding of the problem.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I value thoughtful conversations around business transformation,
            data integration, process automation, and the systems that support
            reliable operations.
          </p>
        </div>

        <div className="flex flex-col justify-end gap-4 lg:items-end">
          <a
            href="mailto:omer@faraz.cc"
            className="inline-flex w-full items-center justify-between rounded-2xl border border-slate-700 px-6 py-5 text-lg transition hover:border-slate-400 hover:bg-slate-900 lg:max-w-md"
          >
            <span>omer@faraz.cc</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/omer-faraz-147b461a2/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-between rounded-2xl border border-slate-700 px-6 py-5 text-lg transition hover:border-slate-400 hover:bg-slate-900 lg:max-w-md"
        >
            <span>LinkedIn</span>
            <span aria-hidden="true">↗</span>
            </a>

          <a
            href="https://github.com/omerfaraz-fa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-between rounded-2xl border border-slate-700 px-6 py-5 text-lg transition hover:border-slate-400 hover:bg-slate-900 lg:max-w-md"
          >
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}