import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  BookOpen,
  Search,
  ArrowRight,
} from "lucide-react";
import { stats } from "../../data/academyData";

const AcademyHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#030712] pt-32 pb-20">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-emerald-400">
            <ShieldCheck className="h-5 w-5" />
            SafeLink AI Cyber Academy
          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Learn.
            <span className="text-emerald-400"> Practice.</span>
            <br />
            Protect Yourself.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Master cybersecurity through interactive lessons, real-world
            phishing simulations, AI-powered labs, quizzes, and government
            resources—all in one place.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
            <Search className="text-gray-400" size={22} />
            <input
              type="text"
              placeholder="Search lessons, scams, phishing..."
              className="ml-4 w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              to="#courses"
              className="rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-black transition hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <BookOpen size={20} />
                Start Learning
              </div>
            </Link>

            <Link
              to="/analyze"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:border-emerald-500"
            >
              <div className="flex items-center gap-2">
                Analyze URL
                <ArrowRight size={18} />
              </div>
            </Link>

          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <h2 className="text-4xl font-bold text-white">
                {item.value}
              </h2>

              <p className="mt-2 text-gray-400">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyHero;