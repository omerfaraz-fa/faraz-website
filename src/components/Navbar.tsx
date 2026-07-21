export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <div className="text-sm font-bold tracking-[0.25em]">
          FARAZ.CC
        </div>

        <nav className="hidden gap-10 text-sm text-slate-600 md:flex">
          <a href="#work" className="hover:text-slate-950 transition">
            Work
          </a>

          <a href="#projects" className="hover:text-slate-950 transition">
            Projects
          </a>

          <a href="#about" className="hover:text-slate-950 transition">
            About
          </a>

          <a href="#contact" className="hover:text-slate-950 transition">
            Contact
          </a>
        </nav>

        <button className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium hover:bg-slate-950 hover:text-white transition">
          Get in touch
        </button>

      </div>
    </header>
  );
}