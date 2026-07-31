import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, RefreshCw } from "lucide-react";
import { cyberTips } from "../../data/academyData";

export default function DailyTip() {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const random = Math.floor(Math.random() * cyberTips.length);
    setTipIndex(random);
  }, []);

  const nextTip = () => {
    setTipIndex((prev) => (prev + 1) % cyberTips.length);
  };

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 p-10 backdrop-blur-xl"
        >
          <div className="flex flex-col items-center text-center">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20">
              <Lightbulb className="text-yellow-400" size={32} />
            </div>

            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
              Daily Cyber Tip
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white">
              Stay One Step Ahead
            </h2>

            <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300">
              "{cyberTips[tipIndex]}"
            </p>

            <button
              onClick={nextTip}
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              <RefreshCw size={18} />
              Next Tip
            </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}