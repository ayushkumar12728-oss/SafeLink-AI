import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Lock, Download, Sparkles } from "lucide-react";
import { useAcademy } from "../../context/AcademyContext";
import { generateCertificate } from "../../utils/generateCertificate";
import ConfettiEffect from "./ConfettiEffect";
import CertificateSeal from "./CertificateSeal";
import CertificatePreview from "./CertificatePreview";
import QRCodeCard from "./QRCodeCard";

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
    return `SLA-${new Date().getFullYear()}-${crypto
      .randomUUID()
      .slice(0, 8)
      .toUpperCase()}`;
  }, []);

  const issueDate = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const unlocked = completion === 100;

  const handleDownload = () => {
    if (!name.trim()) {
      alert("Please enter your full name.");
      return;
    }
    if (!unlocked) {
      alert(
        "Complete all lessons, quizzes and labs to unlock your certificate."
      );
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
            SafeLink AI Cyber Security Certification
          </motion.h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            Earn an industry-style certificate by completing every lesson,
            quiz and cyber lab in SafeLink AI Academy.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT PANEL */}
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

              <div className="mt-6 rounded-xl bg-slate-800 p-4">
                <div className="flex justify-between">
                  <span className="text-slate-300">
                    Issue Date
                  </span>

                  <span className="font-semibold text-emerald-400">
                    {issueDate}
                  </span>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-slate-800 p-4">
                <div className="flex justify-between">
                  <span className="text-slate-300">
                    Certificate ID
                  </span>

                  <span className="font-semibold text-cyan-400">
                    {certificateId}
                  </span>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                <div className="rounded-xl bg-slate-800 p-4">
                  Lessons Completed
                  <span className="float-right font-bold text-emerald-400">
                    {progress.completedLessons}/{progress.totalLessons}
                  </span>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  Quizzes Completed
                  <span className="float-right font-bold text-cyan-400">
                    {progress.completedQuizzes}/{progress.totalQuizzes}
                  </span>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  Labs Completed
                  <span className="float-right font-bold text-yellow-400">
                    {progress.completedLabs}/{progress.totalLabs}
                  </span>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    Overall Completion
                  </span>

                  <span className="text-xl font-bold text-emerald-400">
                    {completion}%
                  </span>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-700"
                    style={{
                      width: `${completion}%`,
                    }}
                  />
                </div>
              </div>

              {!unlocked && (
                <div className="mt-5 rounded-xl bg-slate-800 p-5">
                  <h3 className="font-semibold text-white">
                    Remaining Progress
                  </h3>

                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between">
                      <span>Lessons</span>

                      <span className="text-red-400">
                        {progress.totalLessons -
                          progress.completedLessons}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Quizzes</span>

                      <span className="text-red-400">
                        {progress.totalQuizzes -
                          progress.completedQuizzes}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Labs</span>

                      <span className="text-red-400">
                        {progress.totalLabs -
                          progress.completedLabs}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-5">
                <h3 className="font-bold text-cyan-400">
                  AI Performance Summary
                </h3>

                <div className="mt-5 space-y-3">
                  <div className="flex justify-between">
                    <span>Threat Detection</span>

                    <span className="font-semibold text-white">
                      {completion >= 90
                        ? "A+"
                        : completion >= 75
                        ? "A"
                        : completion >= 60
                        ? "B+"
                        : "B"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Cyber Awareness</span>

                    <span className="font-semibold text-white">
                      {completion >= 90
                        ? "Excellent"
                        : completion >= 70
                        ? "Good"
                        : "Average"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Quiz Performance</span>

                    <span className="font-semibold text-white">
                      {progress.completedQuizzes}/
                      {progress.totalQuizzes}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Lab Performance</span>

                    <span className="font-semibold text-white">
                      {progress.completedLabs}/
                      {progress.totalLabs}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                {unlocked ? (
                  <div className="rounded-xl border border-emerald-500 bg-emerald-500/10 p-4 text-emerald-300">
                    ✅ Eligible for Certification
                  </div>
                ) : (
                  <div className="rounded-xl border border-red-500 bg-red-500/10 p-4 text-red-300">
                    <Lock
                      className="mr-2 inline"
                      size={18}
                    />
                    Complete all lessons, quizzes and labs to unlock your certificate.
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
              <QRCodeCard
                certificateId={certificateId}
              />
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-8">
            <CertificateSeal />
            <CertificatePreview
              name={name || "Your Name"}
              completion={completion}
              certificateId={certificateId}
            />
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
              <Sparkles className="mb-4 text-cyan-400" size={26} />
              <h3 className="text-xl font-bold text-white">
                SafeLink AI Verification
              </h3>
              <p className="mt-4 text-slate-300 leading-7">
                Every certificate generated by SafeLink AI contains a
                unique Certificate ID, issue date and learner
                completion score. The certificate is unlocked only
                after successfully completing all lessons, quizzes
                and cyber labs.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">
                    Certificate ID
                  </p>
                  <p className="mt-2 font-semibold text-cyan-400">
                    {certificateId}
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">
                    Issue Date
                  </p>
                  <p className="mt-2 font-semibold text-emerald-400">
                    {issueDate}
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">
                    Completion
                  </p>
                  <p className="mt-2 font-semibold text-yellow-400">
                    {completion}%
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">
                    Status
                  </p>
                  <p
                    className={`mt-2 font-semibold ${
                      unlocked
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {unlocked ? "Certified" : "Locked"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}