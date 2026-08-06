import Section from "./Section";
import SectionHeading from "./SectionHeading";

const stats = [
  {
    value: "2 days → 2 hrs",
    description:
      "Reduced a complex weekly operational process through integration and automation.",
  },
  {
    value: "300+",
    description: "Business system users supported across enterprise programs.",
  },
  {
    value: "1,600+",
    description: "Retail locations managed across multiple European markets.",
  },
  {
    value: "6+",
    description: "Years working across business systems, data and operations.",
  },
];

export default function ExecutiveStats() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Business Impact"
        title="Selected Business Impact"
      />

      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.value}
            className="border-t border-slate-300 pt-6"
          >
            <p className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
              {stat.value}
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {stat.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}