import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Scanner from "./Scanner";
import LiveStats from "./LiveStats";
import {
  Shield,
  Globe,
  QrCode,
  GraduationCap,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const platformCards = [
  {
    title: "Analyze URL",
    description:
      "Detect phishing websites using AI, VirusTotal, WHOIS and SSL verification.",
    icon: Globe,
    button: "Analyze Now",
    gradient: "from-cyan-500 to-blue-600",
    route: "#scanner",
    home: true,
    color: "text-cyan-400",
  },
  {
    title: "QR Guardian",
    description:
      "Upload and verify suspicious QR codes before opening links or making UPI payments.",
    icon: QrCode,
    button: "Open Scanner",
    gradient: "from-emerald-500 to-green-600",
    route: "/qr-scanner",
    color: "text-emerald-400",
  },
  {
    title: "Threat Feed",
    description:
      "Stay updated with the latest phishing campaigns, scams and cyber attacks.",
    icon: AlertTriangle,
    button: "Explore Feed",
    gradient: "from-red-500 to-orange-500",
    route: "/threat-feed",
    color: "text-red-400",
  },
  {
    title: "Cyber Academy",
    description:
      "Interactive cybersecurity learning with quizzes and practical lessons.",
    icon: GraduationCap,
    button: "Start Learning",
    gradient: "from-purple-500 to-pink-500",
    route: "/academy",
    color: "text-purple-400",
  },
];

export default function Hero() {
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    if (card.home) {
      const scanner = document.getElementById("scanner");
      if (scanner) {
        scanner.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      return;
    }
    navigate(card.route);
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              <Shield size={18} />
              AI Cybersecurity Platform
            </div>
            <h1 className="mt-8 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Detect
              <span className="text-cyan-400">
                {" "}Fake URLs
              </span>
              <br />
              &
              <span className="text-emerald-400">
                {" "}Malicious QR Codes
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Analyze suspicious URLs and QR codes using
              Artificial Intelligence,
              VirusTotal,
              WHOIS,
              SSL inspection,
              DNS analysis
              and real-time cyber threat intelligence —
              all from one unified cybersecurity platform.
            </p>
            <div
              id="scanner"
              className="mt-10"
            >
              <Scanner />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "AI Detection",
                "VirusTotal",
                "WHOIS",
                "SSL",
                "QR Guardian",
                "Threat Feed",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>
            <LiveStats />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid gap-5">
              {platformCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl"
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 ${card.color}`}
                      >
                        <Icon size={32} />
                      </div>
                      <ArrowRight
                        className="text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-400"
                      />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-400">
                      {card.description}
                    </p>
                    <button
                      onClick={() => handleCardClick(card)}
                      className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${card.gradient} py-3 font-semibold text-white transition hover:scale-[1.02]`}
                    >
                      {card.button}
                      <ArrowRight size={18} />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}