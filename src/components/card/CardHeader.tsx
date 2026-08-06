import Image from "next/image";

export default function CardHeader() {
  return (
    <div className="relative overflow-hidden rounded-t-[2rem] bg-[#020617] px-8 pt-12 pb-10 text-white">

      {/* Background glow */}
      <div className="absolute -top-36 -right-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative flex flex-col items-center">

        {/* Profile Image */}
        <div className="relative h-36 w-36 overflow-hidden rounded-full border-[5px] border-white shadow-2xl">
          <Image
            src="/images/og/omer.png"
            alt="Omer Faraz"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Brand */}
        <p className="mt-7 text-xs font-medium uppercase tracking-[0.45em] text-slate-400">
          FARAZ.CC
        </p>

        {/* Name */}
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Omer Faraz
        </h1>

        {/* Title */}
        <p className="mt-3 text-lg text-slate-300">
          Business Analyst
        </p>

        {/* Headline */}
        <h2 className="mt-5 max-w-sm text-center text-[2rem] font-semibold leading-tight">
          Enterprise Data Integration
          <br />
          &amp; Automation
        </h2>

        {/* Companies */}
        <div className="mt-8 flex items-center gap-4 text-base text-slate-300">
          <span>Google</span>

          <span className="text-slate-600">•</span>

          <span>Samsung</span>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-24 bg-white/15" />

      </div>
    </div>
  );
}