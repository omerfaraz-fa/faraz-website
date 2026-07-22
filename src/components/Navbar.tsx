import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Faraz.cc homepage"
        >
          <Image
            src="/logo-final.svg"
            alt=""
            width={26}
            height={26}
            className="h-[26px] w-[26px]"
            priority
          />

          <span className="text-sm font-bold tracking-[0.25em]">
            FARAZ.CC
          </span>
        </Link>

        <nav className="hidden gap-10 text-sm text-slate-600 md:flex">
          <a href="/#work" className="transition hover:text-slate-950">
            Approach
          </a>

          <a href="/#projects" className="transition hover:text-slate-950">
            Projects
          </a>

          <a href="/#about" className="transition hover:text-slate-950">
            About
          </a>

          <a href="/#contact" className="transition hover:text-slate-950">
            Contact
          </a>
        </nav>

        <a
          href="/#contact"
          className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium transition hover:bg-slate-950 hover:text-white"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}