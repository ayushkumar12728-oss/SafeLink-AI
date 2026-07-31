import { useMemo, useState } from "react";
import { Download, Lock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { useAcademy } from "../../context/AcademyContext";
import { generateCertificate } from "../../utils/generateCertificate";

import CertificatePreview from "./CertificatePreview";
import CertificateSeal from "./CertificateSeal";
import QRCodeCard from "./QRCodeCard";
import ConfettiEffect from "./ConfettiEffect";

export default function CertificateGenerator() {
  const { progress } = useAcademy();

  const [name, setName] = useState("");
  const [celebrate, setCelebrate] = useState(false);

  const completion = Math.round(
    ((progress.completedLessons +
      progress.completedQuizzes +
      progress.completedLabs) /
      (progress.totalLessons +
        progress.totalQuizzes +
        progress.totalLabs)) *
      100
  );

  const certificateId = useMemo(() => {
    return (
      "SLAI-" +
      new Date().getFullYear() +
      "-" +
      Math.floor(100000 + Math.random() * 900000)
    );
  }, []);

  const unlocked = completion >= 40;

  const handleDownload = () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!unlocked) {
      alert("Complete at least 40% of the academy to unlock your certificate.");
      return;
    }

    setCelebrate(true);

    setTimeout(() => setCelebrate(false), 6000);

    generateCertificate({
      name,
      completion,
      certificateId,
      quizzes: `${progress.completedQuizzes}/${progress.totalQuizzes}`,
      lessons: `${progress.completedLessons}/${progress.totalLessons}`,
    });
  };

  return (
    <section className="bg-[#030712] py-24">

      <ConfettiEffect show={celebrate} />

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white"
          >
            Graduation Certificate
          </motion.h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            Celebrate your cybersecurity journey with an official
            SafeLink AI Certificate of Completion.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">

              <h3 className="mb-6 text-2xl font-bold text-white">
                Certificate Details
              </h3>

              <label className="text-slate-300">
                Full Name
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-800 p-4 text-white outline-none focus:border-emerald-500"
              />

              <div className="mt-8 grid gap-4">

                <div className="rounded-xl bg-slate-800 p-4">
                  Lessons Completed:
                  <span className="float-right font-bold text-emerald-400">
                    {progress.completedLessons}/{progress.totalLessons}
                  </span>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  Quizzes Completed:
                  <span className="float-right font-bold text-cyan-400">
                    {progress.completedQuizzes}/{progress.totalQuizzes}
                  </span>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  Labs Completed:
                  <span className="float-right font-bold text-yellow-400">
                    {progress.completedLabs}/{progress.totalLabs}
                  </span>
                </div>

                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
                  Overall Completion
                  <span className="float-right font-bold text-emerald-400">
                    {completion}%
                  </span>
                </div>

              </div>

              <div className="mt-8">

                {unlocked ? (
                  <div className="rounded-xl border border-emerald-500 bg-emerald-500/10 p-4 text-emerald-300">
                    🎉 Certificate Unlocked!
                  </div>
                ) : (
                  <div className="rounded-xl border border-red-500 bg-red-500/10 p-4 text-red-300">
                    <Lock className="mr-2 inline" size={18} />
                    Complete at least 40% of the academy.
                  </div>
                )}

              </div>

              <button
                onClick={handleDownload}
                disabled={!unlocked}
                className={`mt-8 flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 font-semibold transition ${
                  unlocked
                    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-black hover:scale-105"
                    : "cursor-not-allowed bg-slate-700 text-slate-400"
                }`}
              >
                <Download size={20} />
                Download Certificate
              </button>

            </div>

            <div className="mt-8">
              <QRCodeCard certificateId={certificateId} />
            </div>

          </div>

          {/* Right */}

          <div className="space-y-8">

            <CertificateSeal />

            <CertificatePreview
              name={name}
              completion={completion}
              certificateId={certificateId}
            />

            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6 text-yellow-100">
              <Sparkles className="mb-3" />
              Every certificate includes a unique ID, completion
              percentage, issue date, and SafeLink AI verification.
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}