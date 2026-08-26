import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function ExecutiveSummary() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="Executive Profile"
          title="Connecting business requirements with practical technical delivery"
        />

        <div className="max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
          <p>
            I am a Technical Business Analyst with 6+ years of experience
            working at the intersection of business operations, enterprise
            systems and data. I translate operational requirements into
            practical technical solutions across data integration, business
            systems and process automation.
          </p>

          <p>
            My work includes requirements analysis, process and data-flow
            analysis, data transformation and integration, Salesforce and
            master-data operations, solution validation, production support and
            technical documentation across multi-country enterprise programmes.
          </p>

          <p>
            Over time, my work has progressed from manual and Excel-based data
            operations through Power Query and structured business systems to
            Snowflake, SQL, Python and automated workflows, increasingly using
            Generative AI as an accelerator for analysis, coding, debugging and
            documentation.
          </p>
        </div>
      </div>
    </Section>
  );
}