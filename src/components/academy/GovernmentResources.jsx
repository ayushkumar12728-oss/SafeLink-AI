import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { governmentResources } from "../../data/academyData";

export default function GovernmentResources() {
  return (
    <section className="bg-[#020617] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Official Resources
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Trusted Government
            <span className="text-cyan-400"> Cyber Resources</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Access official Indian cybersecurity platforms for reporting cyber
            crimes, checking SIM ownership, security advisories, and staying
            protected online.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {governmentResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="text-5xl">{resource.icon}</div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {resource.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {resource.description}
              </p>

              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:scale-105"
              >
                {resource.button}
                <ExternalLink size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}