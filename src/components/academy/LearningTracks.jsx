import { motion } from "framer-motion";
import { learningTracks } from "../../data/academyData";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function LearningTracks() {
  return (
    <section id="tracks" className="bg-[#030712] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-400">
            Learning Paths
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Learn Cybersecurity
            <span className="text-emerald-400"> Step by Step</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Follow structured learning tracks designed for beginners,
            professionals and AI enthusiasts.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {learningTracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,.15)]"
            >
              <div className="text-5xl">
                {track.icon}
              </div>

              <span className="mt-5 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                {track.level}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-white">
                {track.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {track.description}
              </p>

              {/* Small Topics */}
              <div className="mt-6 space-y-2">
                {track.topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-emerald-400"
                    />
                    {topic}
                  </div>
                ))}
              </div>

              <Link
                to={`/course/${track.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="mt-8 flex items-center justify-between"
              >
                <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                  {track.lessons} Lessons
                </span>

                <ArrowRight
                  size={20}
                  className="text-slate-500 transition group-hover:text-emerald-400 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}