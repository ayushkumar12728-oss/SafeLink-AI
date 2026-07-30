import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ShieldCheck,
  Loader2,
  CheckCircle2,
  ShieldAlert,
  Lock,
  Globe,
  Bug,
} from "lucide-react";
import DownloadReportButton from "../components/report/DownloadReportButton";


import AIExplanation from "../components/report/AIExplanation";
import Recommendations from "../components/report/Recommendations";
import ThreatIndicators from "../components/report/ThreatIndicators";
import DomainInfo from "../components/report/DomainInfo";
import ScanTimeline from "../components/report/ScanTimeline";
import TechnicalDetails from "../components/report/TechnicalDetails";
import { scanURL } from "../services/api";

const scanSteps = [
  "Validating URL...",
  "Checking SSL Certificate...",
  "Performing WHOIS Lookup...",
  "Analyzing DNS Records...",
  "Scanning with VirusTotal...",
  "Running AI Threat Analysis...",
  "Generating Security Report...",
];

// Maps the backend's risk.color field to Tailwind classes.
// Falls back to level-based logic if color is missing/unrecognized.
function getRiskTheme(risk) {
  const color = risk?.color?.toLowerCase();

  if (color === "red") {
    return {
      border: "border-red-500/30 bg-red-500/10",
      text: "text-red-400",
    };
  }

  if (color === "yellow" || color === "orange") {
    return {
      border: "border-yellow-500/30 bg-yellow-500/10",
      text: "text-yellow-400",
    };
  }

  if (color === "green") {
    return {
      border: "border-green-500/30 bg-green-500/10",
      text: "text-green-400",
    };
  }

  // Fallback based on numeric score if color isn't usable
  const score = risk?.score ?? 0;

  if (score > 66) {
    return {
      border: "border-red-500/30 bg-red-500/10",
      text: "text-red-400",
    };
  }

  if (score > 33) {
    return {
      border: "border-yellow-500/30 bg-yellow-500/10",
      text: "text-yellow-400",
    };
  }

  return {
    border: "border-green-500/30 bg-green-500/10",
    text: "text-green-400",
  };
}

// Stable component reference — defined outside Analyze
function Card({ icon, title, value }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all hover:border-blue-500 hover:shadow-blue-500/10">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-slate-800 p-3">{icon}</div>
        <ShieldAlert className="text-slate-500" />
      </div>

      <p className="mt-5 text-sm uppercase tracking-wide text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold">{value}</h3>
    </div>
  );
}

export default function Analyze() {
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url") || "";

  const [currentStep, setCurrentStep] = useState(0);
  const [finished, setFinished] = useState(false);

  const [report, setReport] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function analyze() {
      try {
        for (let i = 0; i < scanSteps.length; i++) {
          if (cancelled) return;

          setCurrentStep(i);

          await new Promise((resolve) => setTimeout(resolve, 600));
        }

        const data = await scanURL(url);

        if (cancelled) return;

        setReport(data);

        setFinished(true);
      } catch (err) {
        if (cancelled) return;

        console.error(err);

        setError("Unable to scan this website. Please try again.");
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    analyze();

    return () => {
      cancelled = true;
    };
  }, [url]);

  useEffect(() => {
    if (!finished || !report) return;

    const targetScore = report.risk?.score ?? 0;

    let score = 0;

    const interval = setInterval(() => {
      score += 2;

      if (score >= targetScore) {
        score = targetScore;
        clearInterval(interval);
      }

      setAnimatedScore(score);
    }, 20);

    return () => clearInterval(interval);
  }, [finished, report]);

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#030712] text-white px-6">
        <div className="w-full max-w-lg rounded-3xl border border-red-500/40 bg-red-500/10 p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20">
            <ShieldAlert className="text-red-400" size={32} />
          </div>

          <h2 className="mt-6 text-3xl font-bold">Scan Failed</h2>

          <p className="mt-3 text-red-300">{error}</p>

          <p className="mt-1 break-all text-sm text-red-300/60">{url}</p>
        </div>
      </main>
    );
  }

  if (loading || !finished || !report) {
    return (
      <main className="min-h-screen bg-[#030712] text-white flex items-center justify-center px-6">
        <div className="w-full max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/80 p-10">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-blue-600/20 p-4">
              <ShieldCheck className="text-blue-400" size={36} />
            </div>

            <div>
              <h1 className="text-4xl font-black">SafeLink AI</h1>
              <p className="text-slate-400">AI Security Analysis</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-slate-800 p-5 break-all">
            {url}
          </div>

          <div className="mt-10 space-y-5">
            {scanSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                {index < currentStep ? (
                  <CheckCircle2 className="text-green-400" />
                ) : index === currentStep ? (
                  <Loader2 className="animate-spin text-blue-400" />
                ) : (
                  <div className="h-5 w-5 rounded-full border border-slate-600" />
                )}

                <span
                  className={
                    index <= currentStep ? "text-white" : "text-slate-500"
                  }
                >
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 h-3 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
              style={{
                width: `${((currentStep + 1) / scanSteps.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </main>
    );
  }

  const theme = getRiskTheme(report.risk);

  const sslValue = report.ssl?.valid ? "Valid" : "Invalid";

 const ageDays = report.whois?.age_days;

const domainAgeValue =
  report.whois?.available && typeof ageDays === "number"
    ? `${Math.floor(ageDays / 365)} Years`
    : "Unknown";

  const vtMalicious = report.virustotal?.malicious ?? 0;
  const vtValue =
    report.virustotal?.available
      ? vtMalicious > 0
        ? `${vtMalicious} Flagged`
        : "Clean"
      : "Unavailable";

  return (
    <main className="min-h-screen bg-[#030712] text-white p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black">SafeLink AI</h1>
          <p className="mt-2 break-all text-slate-400">
            {report.normalized_url || url}
          </p>
        </div>

        {/* Verdict */}
        <div className={`rounded-3xl border p-8 ${theme.border}`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-400">
                Overall Verdict
              </p>

              <h2 className={`mt-2 text-5xl font-black ${theme.text}`}>
                {report.risk?.level?.toUpperCase() || "UNKNOWN"}
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                {report.ai?.summary ||
                  "No AI summary was returned for this scan."}
              </p>
            </div>

            <div className="text-center lg:text-right">
              <h2 className="text-7xl font-black">{animatedScore}</h2>
              <p className="mt-2 text-slate-400">Threat Score</p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card
            icon={<Lock className="text-green-400" />}
            title="SSL Certificate"
            value={sslValue}
          />

          <Card
            icon={<Globe className="text-yellow-400" />}
            title="Domain Age"
            value={domainAgeValue}
          />

          <Card
            icon={<Bug className="text-blue-400" />}
            title="VirusTotal"
            value={vtValue}
          />
        </div>

        {/* AI Report */}
        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <AIExplanation report={report} />
          <Recommendations report={report} />
        </div>

        {/* Threat Indicators */}
        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <ThreatIndicators report={report} />
          <DomainInfo report={report} />
        </div>

        {/* Timeline */}
        <div className="mt-8">
          <ScanTimeline report={report} />
        </div>

        {/* Technical Details */}
       {/* Technical Details */}
<div className="mt-8">
  <TechnicalDetails report={report} />
</div>

{/* Download Report */}
<div className="mt-8 flex justify-center">
  <DownloadReportButton report={report} />
</div>
      </div>
    </main>
  );
}
