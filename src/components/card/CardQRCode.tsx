import Image from "next/image";

export default function CardQRCode() {
  return (
    <section className="border-t border-slate-200 px-8 py-10">

      <div className="text-center">

        <p className="text-lg font-semibold">
          Scan to open portfolio
        </p>

        <p className="mt-2 text-slate-500">
          Recruiter landing page
        </p>

      </div>

      <div className="mt-8 flex justify-center">

        <div className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-slate-200">

          <Image
            src="/images/qr/meet-qr.png"
            alt="QR"
            width={210}
            height={210}
          />

        </div>

      </div>

    </section>
  );
}