import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { House } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import QRHero from "../components/qr/QRHero";
import QRUpload from "../components/qr/QRUpload";
import QRResult from "../components/qr/QRResult";

export default function QRScanner() {
  const [result, setResult] = useState("");

  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-24">

        {/* Header */}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <button
            onClick={() => navigate("/")}
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <House size={18} />
            Back to Home
          </button>

          <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            QR Guardian
          </div>

        </div>

        <QRHero />

        <QRUpload
          onScan={setResult}
        />

        <QRResult
          data={result}
        />

      </div>

    </main>
  );
}