import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, BookOpen } from "lucide-react";

export default function FooterCTA() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-28">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500">
            <Shield className="text-black" size={38} />
          </div>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
            Stay Alert.
            <span className="text-emerald-400"> Stay Secure.</span>
            <br />
            Stay Ahead.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Cybersecurity is a continuous journey. Keep learning, stay informed,
            and analyze suspicious websites before you trust them.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              to="/analyze"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Analyze a URL
              <ArrowRight size={20} />
            </Link>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-cyan-500 hover:bg-cyan-500/10"
            >
              <BookOpen size={20} />
              Back to Top
            </button>

          </div>

          <div className="mt-14 border-t border-white/10 pt-8">

            <p className="text-slate-500">
              © {new Date().getFullYear()} SafeLink AI • Empowering Safer Browsing Through AI & Cybersecurity Education.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}