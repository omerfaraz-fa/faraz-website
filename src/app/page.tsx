export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a
          href="#"
          className="text-sm font-semibold tracking-[0.18em] text-slate-950"
        >
          FARAZ.CC
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          <a href="#work" className="transition hover:text-slate-950">
            Work
          </a>
          <a href="#expertise" className="transition hover:text-slate-950">
            Expertise
          </a>
          <a href="#about" className="transition hover:text-slate-950">
            About
          </a>
          <a href="#contact" className="transition hover:text-slate-950">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-slate-950"
        >
          Get in touch
        </a>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
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

            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-medium transition hover:border-slate-950"
            >
              View CV
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative mx-auto aspect-square max-w-md rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <div className="absolute left-8 top-8 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Data
              </p>
            </div>

            <div className="absolute right-8 top-24 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Systems
              </p>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-slate-950 px-8 py-7 text-white shadow-xl">
              <p className="text-sm font-medium">Automation</p>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Business Impact
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}