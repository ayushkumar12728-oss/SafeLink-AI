import { motion } from "framer-motion";
import { Clock3, ArrowRight, Star, Trophy, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { courses } from "../../data/courseData";

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
          transition={{ duration: .6 }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Featured Courses
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Start Learning From
            <span className="text-cyan-400">
              {" "}
              Real Cyber Threats
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Interactive cybersecurity courses designed using real phishing,
            banking fraud, malware and AI-powered cyber attacks.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {courses.map((course, index) => (

            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: .5
              }}
              whileHover={{
                y: -8,
                scale: 1.02
              }}
              onClick={() =>
                navigate(`/academy/course/${course.slug}`)
              }
              className="group cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40 hover:shadow-[0_0_45px_rgba(34,211,238,.15)]"
            >

              {/* Top */}

              <div className="flex items-center justify-between">

                <div className="text-5xl">
                  {course.icon}
                </div>

                <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-yellow-400">
                  <Star size={14} />
                  4.9
                </div>

              </div>

              {/* Title */}

              <h3 className="mt-8 text-2xl font-bold text-white">
                {course.title}
              </h3>

              <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
                {course.description}
              </p>

              {/* Stats */}

              <div className="mt-8 flex items-center justify-between text-slate-400">

                <div className="flex items-center gap-2">
                  <Clock3 size={16} />
                  {course.duration}
                </div>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                  {course.difficulty}
                </span>

              </div>

              <div className="mt-5 flex items-center justify-between text-sm">

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

                <div className="flex justify-between text-sm text-slate-400">

                  <span>Course Progress</span>

                  <span>0%</span>

                </div>

                <div className="mt-3 h-2 rounded-full bg-slate-800">

                  <div className="h-2 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />

                </div>

              </div>

              {/* Button */}

              <button
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-4 font-semibold text-black transition duration-300 group-hover:scale-[1.02]"
              >
                Start Learning

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}