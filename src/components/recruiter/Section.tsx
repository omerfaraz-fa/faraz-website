import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`border-b border-slate-200/80 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        {children}
      </div>
    </section>
  );
}