const strengths = [
  {
    label: "Business Perspective",
    title: "Understand the operation before designing the solution.",
    description:
      "I begin by learning how work actually moves through the business, where people compensate for broken processes, and which dependencies create unnecessary risk.",
  },
  {
    label: "Integration Mindset",
    title: "Connect systems around the workflow.",
    description:
      "The goal is not simply to move data. It is to make information arrive where it is needed, in the right structure, with less manual intervention.",
  },
  {
    label: "Operational Reliability",
    title: "Build for the people who will run it.",
    description:
      "A successful solution should be understandable, maintainable, and reliable enough to continue working without constant specialist support.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-200 bg-slate-950 px-6 py-28 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
              About My Work
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              I work at the intersection of business operations, data, and
              systems.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              My role is often to translate between what the business needs and
              what technology can realistically deliver—then turn that
              understanding into a practical operating model.
            </p>
          </div>

          <div className="grid gap-5">
            {strengths.map((strength, index) => (
              <div
                key={strength.label}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900"
              >
                <div className="flex items-start gap-6">
                  <span className="mt-1 text-sm font-medium text-slate-500">
                    0{index + 1}
                  </span>

                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
                      {strength.label}
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold text-white">
                      {strength.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-slate-800 pt-10">
          <p className="max-w-5xl text-3xl font-medium leading-tight tracking-[-0.025em] text-slate-200 sm:text-4xl">
            The best systems are often the ones people barely notice—because
            information flows naturally, repetitive work disappears, and the
            business can focus on what matters.
          </p>
        </div>
      </div>
    </section>
  );
}