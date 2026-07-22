import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-white px-6 py-24 text-slate-950 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          404 · Page not found
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
          This page could not be found, but the path back is simple.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
          The page may have moved, the address may be incorrect, or the link may
          no longer exist.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Return home
          </Link>

          <Link
            href="/#projects"
            className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-medium transition hover:border-slate-950"
          >
            Explore projects
          </Link>
        </div>
      </div>
    </main>
  );
}