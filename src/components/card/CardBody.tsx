export default function CardBody() {
  return (
    <section className="px-8 py-8">
      <h2 className="text-lg font-semibold text-slate-900">
        About
      </h2>

      <p className="mt-4 text-slate-600 leading-7">
        I help organisations simplify complex business operations by
        designing scalable data integration, automation and enterprise
        systems that reduce manual work and improve operational
        reliability.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="text-2xl font-bold">6+</div>
          <div className="text-sm text-slate-500">
            Years Experience
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <div className="text-2xl font-bold">300+</div>
          <div className="text-sm text-slate-500">
            Users Supported
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <div className="text-2xl font-bold">1,600+</div>
          <div className="text-sm text-slate-500">
            Retail Locations
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <div className="text-2xl font-bold">2 Days → 2 hrs</div>
          <div className="text-sm text-slate-500">
            Process Improvement
          </div>
        </div>
      </div>
    </section>
  );
}