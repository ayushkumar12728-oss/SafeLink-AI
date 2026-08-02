import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  Globe,
  Lock,
  Database,
  Activity,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Threat Detection",
    desc: "Detect phishing websites using intelligent pattern recognition and real-time analysis.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Multi-Layer Security",
    desc: "Validate URLs through SSL inspection, reputation checks and trusted security databases.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Globe,
    title: "Domain Intelligence",
    desc: "Inspect domain age, ownership, registrar details and suspicious registration patterns.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Lock,
    title: "Privacy Protection",
    desc: "Prevent users from entering sensitive information on fake or malicious websites.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Database,
    title: "Threat Intelligence",
    desc: "Cross-check indicators using multiple cybersecurity sources for higher confidence.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: Activity,
    title: "Live Monitoring",
    desc: "Monitor suspicious activities and visualize threat information in one dashboard.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[#030712] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Why Choose SafeLink AI
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Powerful Features
            <span className="block text-cyan-400">
              Built for Modern Cybersecurity
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            SafeLink AI combines Artificial Intelligence with trusted
            cybersecurity technologies to identify phishing websites,
            analyze suspicious domains and improve online safety.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bg}`}
                >
                  <Icon
                    size={30}
                    className={feature.color}
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  {feature.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 font-medium text-cyan-400 transition group-hover:translate-x-2">
                  Learn More
                  <ArrowRight size={18} />
                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}