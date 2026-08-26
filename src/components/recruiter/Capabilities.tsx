import Section from "./Section";
import SectionHeading from "./SectionHeading";

const capabilities = [
  {
    title: "Data Integration",
    description:
      "Designing and operating reliable data flows across source systems, Snowflake, business platforms and downstream reporting environments.",
    skills: [
      "Snowflake",
      "SQL",
      "ETL/ELT",
      "Data Transformation",
      "Validation & Reconciliation",
    ],
  },
  {
    title: "Business Automation",
    description:
      "Replacing repetitive manual processes with practical, maintainable and well-documented workflows that improve reliability and reduce operational effort.",
    skills: [
      "Python",
      "Google Apps Script",
      "Scheduling",
      "Monitoring",
      "AI-assisted Automation",
    ],
  },
  {
    title: "Enterprise Systems",
    description:
      "Supporting business-critical platforms through structured master data, account and user administration, ownership, operational data and production support.",
    skills: [
      "Salesforce",
      "Master Data",
      "Account & User Administration",
      "Ownership",
      "Production Support",
    ],
  },
  {
    title: "Business Analysis",
    description:
      "Translating business and operational requirements into clear technical solutions through process, data-flow, dependency and impact analysis.",
    skills: [
      "Requirements Analysis",
      "Business-to-Technical Translation",
      "Process & Data-flow Analysis",
      "Solution Validation",
      "Technical Documentation",
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