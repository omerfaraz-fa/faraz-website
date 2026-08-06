import Section from "./Section";
import SectionHeading from "./SectionHeading";

const capabilities = [
  {
    title: "Data Integration",
    description:
      "Designing reliable data flows across operational sources, cloud platforms, business systems and reporting environments.",
    skills: ["Snowflake", "SQL", "ETL", "Data Transformation"],
  },
  {
    title: "Business Automation",
    description:
      "Replacing repetitive manual processes with practical, maintainable and well-documented automated workflows.",
    skills: ["Python", "Google Apps Script", "Scheduling", "Monitoring"],
  },
  {
    title: "Enterprise Systems",
    description:
      "Supporting business-critical platforms, users, permissions, structured data operations and cross-system processes.",
    skills: ["Salesforce", "User Administration", "Data Operations", "Support"],
  },
  {
    title: "Business Analysis",
    description:
      "Translating operational problems into clear requirements, scalable processes and practical technical solutions.",
    skills: [
      "Requirements Analysis",
      "Process Design",
      "Stakeholder Coordination",
      "Documentation",
    ],
  },
];

export default function Capabilities() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Core Capabilities"
        title="Where business analysis meets technical delivery"
        description="A combination of business understanding, systems knowledge and hands-on technical implementation."
      />

      <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
        {capabilities.map((capability) => (
          <article
            key={capability.title}
            className="border-t border-slate-300 pt-6"
          >
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
              {capability.title}
            </h3>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              {capability.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-500">
              {capability.skills.map((skill, index) => (
                <span key={skill} className="flex items-center gap-4">
                  {skill}

                  {index < capability.skills.length - 1 && (
                    <span className="text-slate-300" aria-hidden="true">
                      •
                    </span>
                  )}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}