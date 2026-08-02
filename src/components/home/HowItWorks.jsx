import { motion } from "framer-motion";
import {
  Link,
  BrainCircuit,
  ShieldCheck,
  FileSearch,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Link,
    title: "Paste URL",
    text: "Enter a suspicious website or phishing link.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    text: "Our AI analyzes the URL using multiple security indicators.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Security Checks",
    text: "SSL, WHOIS and threat intelligence databases are verified.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: FileSearch,
    title: "Generate Report",
    text: "A complete security report is prepared instantly.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: CheckCircle2,
    title: "Stay Protected",
    text: "Receive clear recommendations before visiting the website.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-[#030712]">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Scan. Analyze. Stay Safe.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            SafeLink AI combines Artificial Intelligence with trusted
            cybersecurity techniques to detect phishing websites before
            they can harm users.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl"
              >

                <div className="absolute right-6 top-6 text-5xl font-black text-slate-800">
                  0{index + 1}
                </div>

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.bg}`}
                >
                  <Icon
                    size={30}
                    className={step.color}
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.text}
                </p>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-slate-700 xl:block"
                    size={28}
                  />
                )}

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}