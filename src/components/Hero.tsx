"use client";

export default function Hero() {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Business Transformation · Data Integration · Process Automation
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            I simplify complex business operations through data, systems, and
            automation.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            I help organizations transform manual processes into scalable,
            reliable business systems by connecting data, streamlining
            workflows, and building practical automation that delivers
            measurable business impact.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Explore my work
            </a>

            
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <div className="system-glow absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200/70 blur-3xl" />

            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M100 105 C170 105, 175 180, 200 200"
                fill="none"
                stroke="rgb(148 163 184)"
                strokeWidth="2"
                className="system-flow-line"
              />

              <path
                d="M300 115 C235 115, 230 180, 200 200"
                fill="none"
                stroke="rgb(148 163 184)"
                strokeWidth="2"
                className="system-flow-line"
              />

              <path
                d="M200 200 C200 250, 200 270, 200 305"
                fill="none"
                stroke="rgb(148 163 184)"
                strokeWidth="2"
                className="system-flow-line"
              />
            </svg>

            <div className="system-node absolute left-8 top-10 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Data
              </p>
            </div>

            <div className="system-node absolute right-8 top-20 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm [animation-delay:0.8s]">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Systems
              </p>
            </div>

            <div className="system-node absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-slate-950 px-8 py-7 text-white shadow-xl [animation-delay:0.4s]">
              <p className="text-sm font-medium">Automation</p>
            </div>

            <div className="system-node absolute bottom-10 left-1/2 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm [animation-delay:1.2s]">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Business Impact
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}