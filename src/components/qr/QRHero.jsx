import { motion } from "framer-motion";
import { QrCode, ShieldCheck } from "lucide-react";

export default function QRHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-[#020617] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">

            <QrCode size={18} />

            QR Guardian

          </div>

          <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">

            Scan QR Codes

            <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">

              Before You Trust Them

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

            Upload any QR code to detect malicious websites,
            suspicious UPI requests, fake Wi-Fi configurations,
            phishing campaigns and more using SafeLink AI.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-3 text-emerald-400">

              🌐 URL Detection

            </div>

            <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-blue-400">

              💳 UPI Verification

            </div>

            <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 px-5 py-3 text-purple-400">

              📶 Wi-Fi QR

            </div>

            <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 px-5 py-3 text-orange-400">

              📧 Email & SMS

            </div>

          </div>

          <div className="mt-12 inline-flex items-center gap-3 rounded-full bg-emerald-500/10 px-6 py-3 text-emerald-400">

            <ShieldCheck size={20} />

            AI Protection Enabled

          </div>

        </motion.div>

      </div>

    </section>
  );
}