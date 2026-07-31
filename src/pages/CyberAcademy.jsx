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
  const [showConfetti, setShowConfetti] = useState(false);

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
      alert("Please enter your full name.");
      return;
    }

    if (!unlocked) {
      alert("Complete at least 40% of the academy to unlock your certificate.");
      return;
    }

    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);

    generateCertificate({
      name,
      completion,
      certificateId,
      quizzes: `${progress.completedQuizzes}/${progress.totalQuizzes}`,
      lessons: `${progress.completedLessons}/${progress.totalLessons}`,
    });
  };

  return (
    <section className="bg-slate-950 py-24">
      <ConfettiEffect show={showConfetti} />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold text-white">
            Cyber Academy Certificate
          </h2>

          <p className="mt-4 text-slate-400">
            Download your official SafeLink AI Certificate after
            completing the academy.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Panel */}
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
            <h3 className="mb-6 text-2xl font-bold text-white">
              Certificate Details
            </h3>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-white/10 bg-slate-800 p-4 text-white outline-none focus:border-emerald-500"
            />

            <div className="mt-8 space-y-4">
              <div className="rounded-xl bg-slate-800 p-4 flex justify-between">
                <span>Lessons</span>
                <span className="font-bold text-emerald-400">
                  {progress.completedLessons}/{progress.totalLessons}
                </span>
              </div>

              <div className="rounded-xl bg-slate-800 p-4 flex justify-between">
                <span>Quizzes</span>
                <span className="font-bold text-cyan-400">
                  {progress.completedQuizzes}/{progress.totalQuizzes}
                </span>
              </div>

              <div className="rounded-xl bg-slate-800 p-4 flex justify-between">
                <span>Labs</span>
                <span className="font-bold text-yellow-400">
                  {progress.completedLabs}/{progress.totalLabs}
                </span>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 flex justify-between">
                <span>Completion</span>
                <span className="font-bold text-emerald-400">
                  {completion}%
                </span>
              </div>
            </div>

            <div className="mt-8">
              {unlocked ? (
                <div className="rounded-xl border border-emerald-500 bg-emerald-500/10 p-4 text-emerald-300">
                  🎉 Certificate Unlocked
                </div>
              ) : (
                <div className="rounded-xl border border-red-500 bg-red-500/10 p-4 text-red-300">
                  <Lock className="inline mr-2" size={18} />
                  Complete at least 40% to unlock the certificate.
                </div>
              )}
            </div>

            <button
              onClick={handleDownload}
              disabled={!unlocked}
              className={`mt-8 w-full rounded-xl px-6 py-4 font-semibold transition flex items-center justify-center gap-2 ${
                unlocked
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-black hover:scale-105"
                  : "bg-slate-700 text-slate-400 cursor-not-allowed"
              }`}
            >
              <Download size={20} />
              Download Certificate
            </button>

            <div className="mt-8">
              <QRCodeCard certificateId={certificateId} />
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-8">
            <CertificateSeal />

            <CertificatePreview
              name={name}
              completion={completion}
              certificateId={certificateId}
            />

            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6 text-yellow-200">
              <Sparkles className="mb-3" />
              Every certificate includes a unique certificate ID,
              QR verification, issue date, and SafeLink AI branding.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}