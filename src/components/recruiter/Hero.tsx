import Navbar from "../Navbar";

export default function Hero() {
  return (
    <>
      <Navbar
        ctaLabel="Contact"
        ctaHref="mailto:omer@faraz.cc"
        showNavigation={false}
      />

      <section className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-sm">
              Technical Business Analyst
            </p>

            <h1 className="mt-4 max-w-4xl text-[2.65rem] font-semibold leading-[1.03] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
              Enterprise Data Integration &amp; Automation
            </h1>

            <div className="mt-7 sm:mt-9">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
                Current enterprise programmes supported through WorkShop International
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xl font-semibold text-slate-950">
                <span>Google</span>
                <span className="text-slate-300" aria-hidden="true">
                  •
                </span>
                <span>Samsung</span>
                <span className="text-slate-300" aria-hidden="true">
                  •
                </span>
                <span>Adidas</span>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              Designing enterprise data integration, automation and business
              systems that replace manual work, improve operational reliability
              and help organisations scale.
            </p>

            <div className="mt-7 flex items-start gap-3">
              <span
                className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500"
                aria-hidden="true"
              />

              <p className="text-sm leading-6 text-slate-700 sm:text-base">
                Currently in Saudi Arabia · Exploring long-term opportunities
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:omer@faraz.cc"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
              >
                Contact Omer
              </a>

              <a
                href="/Omer-Faraz-CV.pdf"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-sm font-medium text-slate-950 transition hover:border-slate-950 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <a
                href="https://www.linkedin.com/in/omer-faraz-147b461a2/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-slate-950"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/omerfaraz-fa"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-slate-950"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}