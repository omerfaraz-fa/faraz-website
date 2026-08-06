export default function CardActions() {
  return (
    <section className="border-t border-slate-200 bg-white p-8">
      <div className="rounded-2xl bg-slate-950 p-6 text-center text-white">
        <p className="text-lg font-semibold">
          Available for opportunities
        </p>

        <p className="mt-2 text-slate-300">
          Currently in Saudi Arabia
        </p>

        <a
          href="/meet"
          className="mt-6 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          View Executive Portfolio
        </a>
      </div>
    </section>
  );
}