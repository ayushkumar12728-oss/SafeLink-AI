import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { downloadResources } from "../../data/academyData";

export default function Downloads() {
  return (
    <section className="bg-[#020617] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-400">
            Free Resources
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Download Cyber
            <span className="text-emerald-400"> Safety Guides</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Keep these handy resources to improve your online security and
            recognize cyber threats.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {downloadResources.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {item.description}
              </p>

              <span className="mt-6 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                {item.type}
              </span>

              <button
                className="mt-8 flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:scale-105"
                onClick={() => alert("Download feature coming soon!")}
              >
                <Download size={18} />
                Download
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}