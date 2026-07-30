import { motion } from "framer-motion";
import Scanner from "./Scanner";
import {
  Shield,
  Globe,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Sparkles,
} from "lucide-react";

import LiveStats from "./LiveStats";

export default function Hero() {
  
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-blue-400">
              <Shield size={16} />
              AI Powered Threat Intelligence
            </div>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Detect{" "}
              <span className="text-blue-500">
                Fake URLs
              </span>
              <br />
              Before They Fool You
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Analyze suspicious URLs using AI,
              Machine Learning,
              VirusTotal,
              WHOIS,
              SSL,
              DNS,
              and phishing intelligence in seconds.
            </p>
            <div className="mt-8">
              <Scanner />
            </div>
            {/* Feature Chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "AI Detection",
                "VirusTotal",
                "WHOIS",
                "SSL",
                "DNS",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>
            {/* Stats */}
           <LiveStats />
          </motion.div>
          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 lg:p-8 shadow-[0_0_70px_rgba(37,99,235,.12)] backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">
                    Threat Intelligence Report
                  </p>
                  <h2 className="mt-2 text-5xl font-black text-red-500 sm:text-6xl lg:text-7xl">
                    92
                  </h2>
                  <p className="mt-2 text-red-400 font-medium">
                    High Risk
                  </p>
                </div>
                <Globe
                  size={48}
                  className="text-blue-500 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                />
              </div>
              <div className="mt-8 h-3 rounded-full bg-slate-800">
                <div className="h-3 w-[92%] rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400" />
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <MiniCard
                  title="AI Confidence"
                  value="98%"
                  color="text-blue-400"
                />
                <MiniCard
                  title="Scan Time"
                  value="0.42s"
                  color="text-green-400"
                />
              </div>
              <div className="mt-8 space-y-4">
                <Status
                  title="VirusTotal"
                  value="Clean"
                  icon={<CheckCircle2 className="text-green-400" />}
                />
                <Status
                  title="WHOIS"
                  value="New Domain"
                  icon={<AlertTriangle className="text-yellow-400" />}
                />
                <Status
                  title="SSL Certificate"
                  value="Invalid"
                  icon={<XCircle className="text-red-400" />}
                />
                <Status
                  title="AI Detection"
                  value="Phishing Detected"
                  icon={<Sparkles className="text-blue-400" />}
                />
              </div>
              <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 sm:py-4 font-semibold transition hover:opacity-90">
                View Full Report
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="text-center sm:text-left">
      <h2 className="text-3xl font-black sm:text-4xl">
        {number}
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        {label}
      </p>
    </div>
  );
}

function MiniCard({ title, value, color }) {
  return (
    <div className="rounded-2xl bg-slate-800/60 p-4">
      <p className="text-sm text-slate-400">
        {title}
      </p>
      <h3 className={`mt-2 text-2xl font-bold sm:text-3xl ${color}`}>
        {value}
      </h3>
    </div>
  );
}

function Status({ title, value, icon }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-800/60 p-4">
      <div className="min-w-0">
        <h4 className="truncate font-medium">
          {title}
        </h4>
        <p className="truncate text-sm text-slate-400">
          {value}
        </p>
      </div>
      <div className="ml-4 flex-shrink-0">
        {icon}
      </div>
    </div>
  );
}