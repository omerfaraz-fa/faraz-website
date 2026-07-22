export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-start">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-slate-950">
              FARAZ.CC
            </p>

            <h2 className="mt-6 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Let&apos;s build better business systems.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Thoughtful conversations around business transformation, data
              integration, process automation, and reliable operations are
              always welcome.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:gap-3"
            >
              Let&apos;s talk
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="md:justify-self-end">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Connect
            </p>

            <div className="mt-5 space-y-4 text-base">
              <a
                href="https://www.linkedin.com/in/omer-faraz-147b461a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-slate-500"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/omerfaraz-fa"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-slate-500"
              >
                GitHub
              </a>

              <a
                href="mailto:omerfaraz@gmail.com"
                className="block transition hover:text-slate-500"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Omer Faraz</p>

          <p>
            Designed and built with Next.js, Tailwind CSS, and AI-assisted
            development.
          </p>
        </div>
      </div>
    </footer>
  );
}