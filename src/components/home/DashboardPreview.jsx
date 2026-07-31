import { motion } from "framer-motion";
import {
  ShieldAlert,
  Brain,
  Globe,
  Activity,
  Clock3,
  Download,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center uppercase tracking-[0.35em] text-blue-400 text-sm">
          Product Preview
        </p>
        <h2 className="mt-4 text-center text-5xl font-black">
          AI Threat Dashboard
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-slate-400">
          Every scan generates a comprehensive AI-powered cybersecurity report
          in less than one second.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <ThreatScoreCard />
            <AISummaryCard />
            <TimelineCard />
            <IndicatorsCard />
            <DomainCard />
            <ConfidenceCard />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold hover:opacity-90">
              <Download size={18} />
              Download PDF Report
            </button>
            <button
  onClick={() => alert("🚧 Live Demo feature coming soon!")}
  className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-4 transition hover:bg-slate-800"
>
  View Live Demo
  <ArrowRight size={18} />
</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ThreatScoreCard() {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl bg-slate-800/60 p-7"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Threat Score</h3>
        <ShieldAlert className="text-red-500" />
      </div>
      <h2 className="mt-6 text-6xl font-black text-red-500">
        92
        <span className="text-2xl text-slate-400">/100</span>
      </h2>
      <p className="mt-2 text-red-400 font-medium">High Risk</p>
      <div className="mt-8 h-3 rounded-full bg-slate-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "92%" }}
          transition={{ duration: 1 }}
          className="h-3 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400"
        />
      </div>
      <p className="mt-5 text-slate-400">AI Confidence • 98%</p>
    </motion.div>
  );
}

function AISummaryCard() {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl bg-slate-800/60 p-7"
    >
      <div className="flex items-center gap-3">
        <Brain className="text-blue-400" />
        <h3 className="text-xl font-bold">AI Analysis</h3>
      </div>
      <p className="mt-6 leading-8 text-slate-400">
        This website closely matches phishing behaviour detected by our AI
        engine. Multiple indicators including SSL validation, WHOIS records
        and VirusTotal suggest this URL should not be trusted.
      </p>
      <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4 text-sm text-blue-300">
        Recommendation: Avoid entering passwords or financial information.
      </div>
    </motion.div>
  );
}

function TimelineCard() {
  const steps = [
    "URL Validation",
    "SSL Inspection",
    "WHOIS Lookup",
    "VirusTotal",
    "AI Analysis",
    "Completed",
  ];

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl bg-slate-800/60 p-7"
    >
      <div className="flex items-center gap-3">
        <Clock3 className="text-cyan-400" />
        <h3 className="text-xl font-bold">Scan Timeline</h3>
      </div>
      <div className="mt-8 space-y-4">
        {steps.map((step) => (
          <div key={step} className="flex items-center gap-3">
            <CheckCircle2 size={18} className="text-green-400" />
            <span className="text-slate-300">{step}</span>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-slate-500">Completed in 0.42 sec</p>
    </motion.div>
  );
}

function IndicatorsCard() {
  const indicators = [
    {
      title: "AI Detection",
      status: "Phishing",
      icon: <ShieldAlert className="text-red-400" size={18} />,
    },
    {
      title: "SSL Certificate",
      status: "Invalid",
      icon: <XCircle className="text-red-400" size={18} />,
    },
    {
      title: "WHOIS",
      status: "New Domain",
      icon: <AlertTriangle className="text-yellow-400" size={18} />,
    },
    {
      title: "VirusTotal",
      status: "31 Vendors",
      icon: <Activity className="text-cyan-400" size={18} />,
    },
  ];

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl bg-slate-800/60 p-7"
    >
      <h3 className="flex items-center gap-2 text-xl font-bold">
        <ShieldAlert className="text-red-400" />
        Threat Indicators
      </h3>
      <div className="mt-8 space-y-4">
        {indicators.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between rounded-xl bg-slate-900/60 p-4"
          >
            <div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.status}</p>
            </div>
            {item.icon}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function DomainCard() {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl bg-slate-800/60 p-7"
    >
      <h3 className="flex items-center gap-2 text-xl font-bold">
        <Globe className="text-blue-400" />
        Domain Information
      </h3>
      <div className="mt-8 space-y-5">
        <InfoRow label="Domain" value="secure-login-example.xyz" />
        <InfoRow label="Registrar" value="Namecheap" />
        <InfoRow label="Age" value="2 Days" />
        <InfoRow label="Country" value="United States" />
        <InfoRow label="IP Address" value="104.26.xx.xx" />
      </div>
    </motion.div>
  );
}

function ConfidenceCard() {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl bg-slate-800/60 p-7"
    >
      <div className="flex items-center gap-3">
        <Brain className="text-blue-400" />
        <h3 className="text-xl font-bold">AI Confidence</h3>
      </div>
      <h2 className="mt-8 text-6xl font-black text-blue-400">98%</h2>
      <div className="mt-8 h-3 rounded-full bg-slate-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "98%" }}
          transition={{ duration: 1.2 }}
          className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
        />
      </div>
      <p className="mt-6 leading-7 text-slate-400">
        The AI engine has a very high confidence that this URL matches known
        phishing behaviour based on multiple security indicators.
      </p>
    </motion.div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-700 pb-3">
      <span className="text-slate-400">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}