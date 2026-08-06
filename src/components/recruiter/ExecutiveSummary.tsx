import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function ExecutiveSummary() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="Executive Profile"
          title="Connecting business needs with practical technical solutions"
        />

        <div className="max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
          <p>
            I work at the intersection of business operations, enterprise
            systems and data. My role involves understanding complex workflows,
            identifying operational weaknesses and designing practical
            solutions that improve reliability, visibility and scalability.
          </p>

          <p>
            I have supported international enterprise programs across multiple
            European markets, working with data integration, business
            automation, Salesforce operations and enterprise reporting.
          </p>

          <p>
            My strongest work has focused on replacing repetitive manual
            processes with structured, well-documented solutions that are easier
            for teams to operate, maintain and scale.
          </p>
        </div>
      </div>
    </Section>
  );
}