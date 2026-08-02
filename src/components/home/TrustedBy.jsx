import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Globe,
  Lock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    icon: BrainCircuit,
    title: "AI Detection",
    subtitle: "Machine Learning Analysis",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: ShieldCheck,
    title: "VirusTotal",
    subtitle: "Threat Reputation",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Globe,
    title: "WHOIS Lookup",
    subtitle: "Domain Intelligence",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Lock,
    title: "SSL Inspection",
    subtitle: "Certificate Validation",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: Database,
    title: "Threat Database",
    subtitle: "Security Intelligence",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export default function TrustedBy() {
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
            Security Intelligence
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Powered by
            <span className="block text-cyan-400">
              Trusted Security Technologies
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            SafeLink AI combines Artificial Intelligence with
            trusted cybersecurity technologies to analyze
            suspicious URLs and generate intelligent security reports.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {tools.map((tool, index) => {

            const Icon = tool.icon;

            return (

              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${tool.bg}`}
                >

                  <Icon
                    size={30}
                    className={tool.color}
                  />

                </div>

                <h3 className="mt-8 text-xl font-bold text-white">
                  {tool.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {tool.subtitle}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-cyan-400 transition group-hover:translate-x-2">
                  Active
                  <ArrowRight size={16} />
                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}