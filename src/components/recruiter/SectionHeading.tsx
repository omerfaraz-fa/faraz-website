interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}