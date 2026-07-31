import QRCode from "react-qr-code";

export default function QRCodeCard({ certificateId }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

      <h3 className="mb-5 text-xl font-bold text-white">
        Certificate Verification
      </h3>

      <div className="flex justify-center rounded-xl bg-white p-4">
        <QRCode
          value={certificateId}
          size={150}
        />
      </div>

      <p className="mt-5 text-center text-sm text-slate-400">
        Scan to verify certificate authenticity.
      </p>

    </div>
  );
}
