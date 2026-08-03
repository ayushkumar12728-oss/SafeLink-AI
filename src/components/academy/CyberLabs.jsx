import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Globe,
  Bot,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Paste URL",
    desc: "Enter any suspicious website URL.",
  },
  {
    icon: Globe,
    title: "Deep Analysis",
    desc: "SSL, WHOIS, DNS and reputation checks.",
  },
  {
    icon: Bot,
    title: "AI Threat Detection",
    desc: "Machine Learning identifies phishing patterns.",
  },
  {
    icon: ShieldCheck,
    title: "Security Report",
    desc: "Receive a complete threat assessment.",
  },
];

export default function CyberLabs() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-24">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-400">
            Hands-on Learning
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Practice in
            <span className="text-emerald-400"> Cyber Labs</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Apply your knowledge using SafeLink AI's real URL scanner.
            Analyze suspicious websites and understand why they are
            safe or dangerous.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-emerald-500/40"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon className="text-emerald-400" size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.desc}
                </p>

                <CheckCircle2
                  className="mt-8 text-emerald-400"
                  size={24}
                />
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}