import Section from "./Section";
import SectionHeading from "./SectionHeading";

const currentProgrammes = [
  {
    name: "Google",
    region: "Nordics, Germany & Poland",
    description:
      "European retail data integration and automation spanning multi-source ingestion, Snowflake, SQL, Python, Salesforce, validation, production support and reporting workflows. Major automation reduced a recurring weekly process from approximately 2 working days to 2 hours.",
  },
  {
    name: "Samsung",
    region: "Nordics",
    description:
      "Current Nordic enterprise client programme supported through WorkShop International, contributing to ongoing data and business operations across the region.",
  },
  {
    name: "Adidas",
    region: "Europe",
    description:
      "Pan-European Salesforce and field-operations programme supporting 2,000+ retail accounts and doors. Responsibilities include account, user and master-data administration, seasonal doorlist reconciliation, trainer ownership and physical and digital target configuration.",
  },
];

const previousProgrammes = [
  {
    name: "SquareTrade",
    region: "Nordics & Benelux",
    description:
      "Multi-source consumer-protection and retail data operations involving Snowflake transformations, Salesforce field operations and a 1,400+ account environment.",
  },
  {
    name: "Telenor",
    region: "Nordics",
    description:
      "Telecom field-sales and data operations across a roughly 5,900-account programme environment, including recurring SIM-order, activation and top-up processes and production ownership of the Snowflake-based workflow following technical handover.",
  },
  {
    name: "Canon",
    region: "Nordics",
    description:
      "Monthly retail-sales and Salesforce operations across approximately 1,000 store accounts, including account creation, master-data maintenance, ownership and Field Trainer administration.",
  },
  {
    name: "Sonos",
    region: "Nordics",
    description:
      "Weekly multi-retailer sell-out operations using Excel and Power Query transformation pipelines feeding Power BI reporting for Nordic and UK stakeholders.",
  },
  {
    name: "Castrol",
    region: "Nordics",
    description:
      "Monthly data operations and master-data mapping supporting an inherited Power BI reporting solution and REX field-force environment.",
  },
];

function ProgrammeCard({
  name,
  region,
  description,
}: {
  name: string;
  region: string;
  description: string;
}) {
  return (
    <article className="border-t border-slate-300 pt-6">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
          {name}
        </h3>

        <p className="text-sm font-medium text-slate-500">{region}</p>
      </div>

      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
        {description}
      </p>
    </article>
  );
}

export default function ClientProgrammes() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Enterprise Experience"
        title="Global Client Programmes"
        description="Selected enterprise programmes supported through my role at WorkShop International AB."
      />

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-600">
        The organisations listed below are client programmes I have supported as
        part of my employment with WorkShop International AB. They are not
        direct employers.
      </div>

      <div className="mt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Current Programmes
        </p>

        <div className="mt-6 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {currentProgrammes.map((programme) => (
            <ProgrammeCard key={programme.name} {...programme} />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Previous Programmes
        </p>

        <div className="mt-6 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {previousProgrammes.map((programme) => (
            <ProgrammeCard key={programme.name} {...programme} />
          ))}
        </div>
      </div>
    </Section>
  );
}