import { motion } from "framer-motion";
import {
  Clock3,
  ArrowRight,
  Star,
  Trophy,
  BookOpen,
  CheckCircle2,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { courses } from "../../data/courseData";
import { getProgress } from "../../utils/courseProgress";

export default function FeaturedCourses() {
  const navigate = useNavigate();

  return (
    <section
      id="courses"
      className="bg-gradient-to-b from-[#030712] to-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Featured Courses
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Master Cybersecurity Through
            <span className="text-cyan-400">
              {" "}
              Real World Attacks
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Learn phishing detection, UPI fraud prevention,
            malware awareness, password security and AI threats
            through interactive courses.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, index) => {
            const progress = getProgress(course.slug);
            const completed = progress.completed;

            return (
              <motion.div
                key={course.slug}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40 hover:shadow-[0_0_45px_rgba(34,211,238,.15)]"
                onClick={() =>
                  navigate(`/academy/course/${course.slug}`)
                }
              >
                {/* TOP */}
                <div className="flex items-center justify-between">
                  <div className="text-5xl">
                    {course.icon}
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-yellow-400">
                    <Star size={14} />
                    4.9
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-2xl font-bold text-white">
                  {course.title}
                </h3>

                <p className="mt-4 line-clamp-2 leading-7 text-slate-400">
                  {course.description}
                </p>

                {/* STATS */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock3 size={16} />
                    {course.duration}
                  </div>

                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                    {course.difficulty}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <BookOpen size={16} />
                    {course.lessons} Lessons
                  </div>

                  <div className="flex items-center gap-2 text-yellow-400">
                    <Trophy size={16} />
                    {course.xp} XP
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      Course Progress
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        completed
                          ? "text-emerald-400"
                          : "text-slate-400"
                      }`}
                    >
                      {completed ? "100%" : "0%"}
                    </span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: completed ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                    />
                  </div>
                </div>

                {/* Status */}
                {completed ? (
                  <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                    <div className="flex items-center gap-3">
                      <Award
                        size={22}
                        className="text-emerald-400"
                      />
                      <div>
                        <h4 className="font-semibold text-emerald-400">
                          Certificate Ready
                        </h4>
                        <p className="text-sm text-slate-300">
                          You've completed this course.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-800/60 p-4">
                    <div className="flex items-center gap-3">
                      <BookOpen
                        size={22}
                        className="text-cyan-400"
                      />
                      <div>
                        <h4 className="font-semibold text-white">
                          Ready to Start
                        </h4>
                        <p className="text-sm text-slate-400">
                          Complete the course and quiz to unlock your certificate.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <button
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold transition ${
                    completed
                      ? "bg-gradient-to-r from-emerald-500 to-green-400 text-black hover:scale-[1.02]"
                      : "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black hover:scale-[1.02]"
                  }`}
                >
                  {completed
                    ? "View Certificate"
                    : "Start Learning"}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Earn Industry-Style Certificates
          </h3>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Every course includes interactive lessons, a final assessment,
            and a downloadable certificate after successful completion.
            Your progress is saved automatically so you can continue learning anytime.
          </p>
          <button
            onClick={() => navigate("/academy")}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Explore All Courses
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}