import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DEFAULT_PROGRESS = {
  completedLessons: 18,
  totalLessons: 40,
  completedQuizzes: 7,
  totalQuizzes: 20,
  completedLabs: 3,
  totalLabs: 8,
};

const DEFAULT_BADGES = [
  { title: "Cyber Beginner", icon: "🌱", unlocked: true },
  { title: "Phishing Detective", icon: "🎣", unlocked: true },
  { title: "Password Master", icon: "🔐", unlocked: false },
  { title: "AI Defender", icon: "🤖", unlocked: false },
];

export default function ProgressTracker() {
  const [progress, setProgress] = useState(DEFAULT_PROGRESS);
  const [badges, setBadges] = useState(DEFAULT_BADGES);

  useEffect(() => {
    const savedProgress = localStorage.getItem("academyProgress");
    const savedBadges = localStorage.getItem("academyBadges");

    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }

    if (savedBadges) {
      setBadges(JSON.parse(savedBadges));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("academyProgress", JSON.stringify(progress));
    localStorage.setItem("academyBadges", JSON.stringify(badges));
  }, [progress, badges]);

  const lessonPercent = Math.round(
    (progress.completedLessons / progress.totalLessons) * 100
  );

  const quizPercent = Math.round(
    (progress.completedQuizzes / progress.totalQuizzes) * 100
  );

  const labPercent = Math.round(
    (progress.completedLabs / progress.totalLabs) * 100
  );

  const ProgressBar = ({ title, completed, total, percent }) => (
    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="font-medium text-white">{title}</span>
        <span className="text-slate-400">
          {completed}/{total}
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
        />
      </div>

      <div className="text-right text-sm text-cyan-400">
        {percent}%
      </div>
    </div>
  );

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-400">
            Learning Progress
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Track Your
            <span className="text-emerald-400"> Cyber Journey</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <div className="space-y-8">

              <ProgressBar
                title="Lessons"
                completed={progress.completedLessons}
                total={progress.totalLessons}
                percent={lessonPercent}
              />

              <ProgressBar
                title="Quizzes"
                completed={progress.completedQuizzes}
                total={progress.totalQuizzes}
                percent={quizPercent}
              />

              <ProgressBar
                title="Cyber Labs"
                completed={progress.completedLabs}
                total={progress.totalLabs}
                percent={labPercent}
              />

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="mb-8 text-2xl font-bold text-white">
              Achievement Badges
            </h3>

            <div className="grid grid-cols-2 gap-6">

              {badges.map((badge) => (
                <div
                  key={badge.title}
                  className={`rounded-2xl border p-6 text-center ${
                    badge.unlocked
                      ? "border-emerald-500/40 bg-emerald-500/10"
                      : "border-white/10 bg-slate-900 opacity-50"
                  }`}
                >
                  <div className="text-5xl">{badge.icon}</div>

                  <h4 className="mt-4 font-semibold text-white">
                    {badge.title}
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    {badge.unlocked ? "Unlocked" : "Locked"}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}