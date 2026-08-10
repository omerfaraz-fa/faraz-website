import Image from "next/image";
import Link from "next/link";
import CommercePilotApp from "./components/CommercePilotApp";

export default function CommercePilotPage() {
  return (
    <main className="min-h-screen bg-[#020617]">
      {/* Portfolio identity */}
      <header className="border-b border-slate-800 bg-[#020617]">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-16">
          <Link
            href="/"
            className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
            aria-label="Faraz.cc home"
          >
            <Image
              src="/logo-final.svg"
              alt=""
              width={26}
              height={26}
              className="h-[26px] w-[26px] invert"
              priority
            />

            <span className="text-sm font-bold tracking-[0.25em]">
              FARAZ.CC
            </span>
          </Link>

          <nav className="flex items-center gap-5 text-sm sm:gap-7">
            <Link
              href="/"
              className="hidden text-slate-400 transition hover:text-white sm:inline"
            >
              ← Back to portfolio
            </Link>

            <Link
              href="/#projects"
              className="text-slate-300 transition hover:text-white"
            >
              View case studies
            </Link>
          </nav>
        </div>
      </header>

      {/* CommercePilot application */}
      <CommercePilotApp />
    </main>
  );
}