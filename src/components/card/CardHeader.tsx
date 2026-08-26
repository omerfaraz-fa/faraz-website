import Image from "next/image";

export default function CardHeader() {
  return (
    <div className="relative overflow-hidden rounded-t-[2rem] bg-[#020617] px-8 pt-8 pb-6 text-white">

      {/* Background glow */}
      <div className="absolute -top-36 -right-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative flex flex-col items-center">

        {/* Profile Image */}
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-[5px] border-white shadow-2xl">
          <Image
            src="/images/og/omer.png"
            alt="Omer Faraz"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Brand */}
        <p className="mt-5 text-xs font-medium uppercase tracking-[0.45em] text-slate-400">
          FARAZ.CC
        </p>

        {/* Name */}
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Omer Faraz
        </h1>

        {/* Title */}
        <p className="mt-3 text-center text-base leading-7 text-slate-300">
          Business Analyst
          <br />
          <span className="text-slate-400">
            Data Integration &amp; Automation
          </span>
        </p>

        {/* Headline */}
        <h2 className="mt-4 max-w-sm text-center text-[1.8rem] font-semibold leading-tight">
          Enterprise Data Integration
          <br />
          &amp; Automation
        </h2>

        {/* Companies */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-base text-slate-300">
  <span>Google</span>

  <span className="text-slate-600">•</span>

  <span>Samsung</span>

  <span className="text-slate-600">•</span>

  <span>Adidas</span>
</div>

        {/* Divider */}
        <div className="mt-5 h-px w-24 bg-white/15" />

      </div>
    </div>
  );
}