import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Globe,
  QrCode,
  Shield,
  GraduationCap,
  BrainCircuit,
  ShieldCheck,
  Database,
  Lock,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    title: "Analyze URL",
    description: "Detect phishing websites using AI, WHOIS, SSL and threat intelligence.",
    icon: Globe,
    color: "text-cyan-400",
    route: "#scanner",
    home: true,
  },
  {
    title: "QR Guardian",
    description: "Upload and verify suspicious QR codes before scanning.",
    icon: QrCode,
    color: "text-emerald-400",
    route: "/qr-scanner",
  },
  {
    title: "Threat Feed",
    description: "View latest phishing campaigns and cyber threats.",
    icon: Shield,
    color: "text-red-400",
    route: "/threat-feed",
  },
  {
    title: "Cyber Academy",
    description: "Interactive lessons, quizzes and cyber awareness.",
    icon: GraduationCap,
    color: "text-purple-400",
    route: "/academy",
  },
];

const technologies = [
  {
    title: "AI Detection",
    icon: BrainCircuit,
    color: "text-cyan-400",
  },
  {
    title: "VirusTotal",
    icon: ShieldCheck,
    color: "text-emerald-400",
  },
  {
    title: "WHOIS",
    icon: Database,
    color: "text-blue-400",
  },
  {
    title: "SSL Analysis",
    icon: Lock,
    color: "text-orange-400",
  },
];

export default function DashboardPreview() {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.home) {
      const section = document.getElementById("scanner");
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      return;
    }
    navigate(item.route);
  };

  return (
    <section
      id="dashboard"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            SafeLink AI Platform
          </span>
          <h2 className="mt-6 text-5xl font-black">
            Everything You Need
            <span className="block text-cyan-400">
              To Stay Safe Online
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            SafeLink AI combines URL analysis,
            QR protection,
            cyber awareness,
            and live threat intelligence
            into one unified cybersecurity platform.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {modules.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                onClick={() => handleClick(item)}
                className="group cursor-pointer rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,.08)]"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 ${item.color}`}
                  >
                    <Icon size={32} />
                  </div>

                  <ArrowRight
                    size={22}
                    className="text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-400"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Powered By */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-24 rounded-3xl border border-white/10 bg-slate-900/60 p-10 backdrop-blur-xl"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold">
              Powered By
            </h3>

            <p className="mt-4 text-slate-400">
              Multiple security technologies working together
              to protect you from phishing attacks and online scams.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.title}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-center"
                >
                  <Icon
                    size={34}
                    className={`mx-auto ${tech.color}`}
                  />

                  <h4 className="mt-5 font-bold text-white">
                    {tech.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
        >
          <button
            onClick={() => {
              const scanner = document.getElementById("scanner");
              if (scanner) {
                scanner.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Analyze URL
          </button>

          <button
            onClick={() => navigate("/qr-scanner")}
            className="rounded-2xl border border-slate-700 px-8 py-4 font-semibold transition hover:bg-slate-800"
          >
            Open QR Guardian
          </button>
        </motion.div>
      </div>
    </section>
  );
}