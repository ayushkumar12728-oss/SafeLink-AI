import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  ShieldCheck,
  Sparkles,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const points = [
  {
    icon: BrainCircuit,
    title: "Explainable AI",
    text: "Every security decision is explained in simple language instead of technical jargon.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Actionable Advice",
    text: "Receive practical recommendations before visiting or sharing sensitive information.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Sparkles,
    title: "Smart Insights",
    text: "Understand phishing techniques, suspicious domains and common cyber threats.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Lightbulb,
    title: "Cyber Awareness",
    text: "Learn safe browsing habits while every scan improves your cybersecurity knowledge.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

export default function AIAnalyst() {
  return (
    <section className="bg-[#030712] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            AI Security Assistant
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            AI That Explains
            <span className="block text-cyan-400">
              Every Security Decision
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            SafeLink AI doesn't just detect suspicious websites.
            It explains why they are risky and provides clear,
            beginner-friendly recommendations before you continue.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-cyan-500/10 p-4">
                <Bot size={38} className="text-cyan-400" />
              </div>

              <div>

                <h3 className="text-2xl font-bold text-white">
                  AI Explanation Engine
                </h3>

                <p className="text-slate-400">
                  Human-Friendly Security Insights
                </p>

              </div>

            </div>

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

              <p className="leading-8 text-slate-300">

                Instead of displaying complex technical reports,
                SafeLink AI translates cybersecurity findings into
                simple explanations so every user understands
                potential risks before interacting with a website.

              </p>

            </div>

            <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-400">
              Learn More
              <ArrowRight size={18} />
            </div>

          </motion.div>

          {/* Right */}

          <div className="space-y-5">

            {points.map((item) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: 6,
                  }}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl"
                >

                  <div className="flex gap-5">

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.bg}`}
                    >

                      <Icon
                        size={24}
                        className={item.color}
                      />

                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-400">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}