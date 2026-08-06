import Image from "next/image";

export default function CardQRCode() {
  return (
    <section className="border-t border-slate-200 bg-white px-8 py-8 text-center">

      <h2 className="text-2xl font-semibold text-slate-900">
        Executive Portfolio
      </h2>

      <p className="mt-2 text-slate-500">
        Scan to explore my work
      </p>

      <div className="mt-6 flex justify-center">
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl">
          <Image
            src="/images/qr/card-qr.png"
            alt="QR Code"
            width={240}
            height={240}
            className="rounded-xl"
          />
        </div>
      </div>

      <p className="mt-5 text-sm font-medium tracking-wide text-slate-500">
        faraz.cc/card
      </p>

    </section>
  );
}