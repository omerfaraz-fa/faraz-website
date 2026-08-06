import Link from "next/link";

import Section from "./Section";

export default function CallToAction() {
  return (
    <Section className="border-b-0">
      <div className="rounded-[2rem] bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Next Step
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Let&apos;s discuss how I can contribute.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              I am currently exploring long-term opportunities in Saudi Arabia
              and the wider Middle East across business analysis, data
              integration, enterprise systems and automation.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href="mailto:omer@faraz.cc"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200 lg:w-auto"
            >
              Email Omer
            </a>

            <a
              href="/Omer-Faraz-CV.pdf"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-700 px-7 py-3 text-sm font-medium text-white transition hover:border-slate-500 hover:bg-slate-900 lg:w-auto"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-800 pt-6 text-sm text-slate-400">
          <a
            href="https://www.linkedin.com/in/omer-faraz-147b461a2/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn ↗
          </a>

          <Link href="/#projects" className="transition hover:text-white">
            Portfolio
          </Link>

          <a
            href="https://github.com/omerfaraz-fa"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </Section>
  );
}