import { motion } from "framer-motion";
import { courses } from "../../data/academyData";
import { Clock3, ArrowRight, Star } from "lucide-react";

export default function FeaturedCourses() {
  return (
    <section
      id="courses"
      className="bg-gradient-to-b from-[#030712] to-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400 text-sm">
            Featured Courses
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Start Learning From
            <span className="text-cyan-400"> Real Cyber Threats</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Interactive lessons designed using real phishing attacks,
            malware campaigns, banking frauds and AI-powered cyber threats.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {courses.map((course, index) => (

            <motion.div
              key={course.title}
              initial={{ opacity:0,y:30 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }}
              transition={{
                delay:index*0.12,
                duration:.5
              }}
              whileHover={{
                y:-8,
                scale:1.02
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_45px_rgba(34,211,238,.15)] transition-all"
            >

              <div className="flex items-center justify-between">

                <div className="text-5xl">
                  {course.icon}
                </div>

                <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-yellow-400">
                  <Star size={14}/>
                  4.9
                </div>

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {course.title}
              </h3>

              <div className="mt-6 flex items-center justify-between text-slate-400">

                <div className="flex items-center gap-2">
                  <Clock3 size={16}/>
                  {course.duration}
                </div>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                  {course.difficulty}
                </span>

              </div>

              <div className="mt-8">

                <div className="flex justify-between text-sm text-slate-400">

                  <span>Course Progress</span>

                  <span>0%</span>

                </div>

                <div className="mt-3 h-2 rounded-full bg-slate-800">

                  <div className="h-2 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"></div>

                </div>

              </div>

              <button
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-4 font-semibold text-black transition hover:scale-105"
              >
                Start Learning

                <ArrowRight size={18}/>
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}