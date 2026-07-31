import { motion } from "framer-motion";
import { learningTracks } from "../../data/academyData";
import { ArrowRight } from "lucide-react";

export default function LearningTracks() {
  return (
    <section id="tracks" className="py-24 bg-[#030712]">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {learningTracks.map((track, index) => (

            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
            >

              <div className="text-5xl">
                {track.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {track.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {track.description}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                  {track.lessons} Lessons
                </span>

                <ArrowRight
                  className="text-slate-500 transition group-hover:text-emerald-400"
                  size={20}
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}