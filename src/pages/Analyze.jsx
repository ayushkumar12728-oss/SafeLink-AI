import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ScanHistory from "../components/report/ScanHistory";
import {
  ShieldCheck,
  Loader2,
  CheckCircle2,
  ShieldAlert,
  Lock,
  Globe,
  Bug,
} from "lucide-react";
import Scanner from "../components/home/Scanner";
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

function Card({ icon, title, value }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all hover:border-blue-500 hover:shadow-blue-500/10">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-slate-800 p-3">
          {icon}
        </div>
        <ShieldAlert className="text-slate-500" />
      </div>
      <p className="mt-5 text-sm uppercase tracking-wide text-slate-400">
        {title}
      </p>
      <h3 className="mt-2 break-words text-3xl font-bold">
        {value}
      </h3>
    </div>
  );
}

export default function Analyze() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url") || "";

  const [currentStep, setCurrentStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    if (!url) return;

    // Reset state for every new scan
    setLoading(true);
    setFinished(false);
    setReport(null);
    setAnimatedScore(0);
    setCurrentStep(0);
    setError("");

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

// Save scan history
const history = JSON.parse(localStorage.getItem("scanHistory") || "[]");

const newEntry = {
  url: data.normalized_url || url,
  score: data.risk?.score ?? 0,
  level: data.risk?.level ?? "Unknown",
  scannedAt: new Date().toISOString(),
};

// Remove duplicate URLs
const filteredHistory = history.filter(
  (item) => item.url !== newEntry.url
);

// Add newest scan to the top
filteredHistory.unshift(newEntry);

// Keep only the latest 10 scans
localStorage.setItem(
  "scanHistory",
  JSON.stringify(filteredHistory.slice(0, 10))
);

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

  // No URL provided
  if (!url) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#030712] px-4 text-white">
        <div className="max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-lg">
          <ShieldAlert className="mx-auto mb-4 text-yellow-400" size={40} />
          <h1 className="text-2xl font-bold">No URL provided</h1>
          <p className="mt-2 text-slate-400">
            Please enter a URL to scan from the homepage.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold transition hover:opacity-90"
          >
            Go to Homepage
          </button>
        </div>
      </main>
    );
  }

  // Scanning in progress
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#030712] px-4 text-white">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-lg">
          <Loader2 className="mx-auto mb-6 animate-spin text-blue-400" size={48} />
          <h1 className="text-xl font-bold sm:text-2xl">
            Scanning {url}
          </h1>
          <p className="mt-4 text-slate-400">
            {scanSteps[currentStep]}
          </p>
          <div className="mt-6 h-2 w-full rounded-full bg-slate-800">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
              style={{
                width: `${((currentStep + 1) / scanSteps.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </main>
    );
  }

  // Error state
  if (error || !report) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#030712] px-4 text-white">
        <div className="max-w-md rounded-3xl border border-red-500/30 bg-red-500/10 p-8 text-center shadow-lg">
          <ShieldAlert className="mx-auto mb-4 text-red-400" size={40} />
          <h1 className="text-2xl font-bold">Scan Failed</h1>
          <p className="mt-2 text-slate-300">
            {error || "Something went wrong while generating this report."}
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold transition hover:opacity-90"
          >
            Go to Homepage
          </button>
        </div>
      </main>
    );
  }

  // Report ready
  const theme = getRiskTheme(report.risk);
  const sslValue = report.ssl?.valid ? "Valid" : "Invalid";
  const ageDays = report.whois?.age_days;
  const domainAgeValue =
    report.whois?.available && typeof ageDays === "number"
      ? `${Math.floor(ageDays / 365)} Years`
      : "Unknown";
  const vtMalicious = report.virustotal?.malicious ?? 0;
  const vtValue = report.virustotal?.available
    ? vtMalicious > 0
      ? `${vtMalicious} Flagged`
      : "Clean"
    : "Unavailable";

  return (
    <main className="min-h-screen bg-[#030712] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Scan Another URL */}
        <div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Scan Another URL
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Analyze another website without returning to the homepage.
              </p>
            </div>
          </div>
         <Scanner
  showDemoUrls={false}
  buttonLabel="Scan Again"
/>
        </div>
        {/* Recent Scan History */}

<div className="mb-8">
  <ScanHistory />
</div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
            SafeLink AI
          </h1>
          <p className="mt-2 break-all text-sm text-slate-400 sm:text-base">
            {report.normalized_url || url}
          </p>
        </div>

        {/* Verdict */}
        <div className={`rounded-3xl border p-6 lg:p-8 ${theme.border}`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-400">
                Cybersecurity Verdict
              </p>
              <h2 className={`mt-2 text-4xl font-black lg:text-5xl ${theme.text}`}>
                {report.risk?.level?.toUpperCase() || "UNKNOWN"}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                {report.ai?.summary ||
                  "No AI summary was returned for this scan."}
              </p>
            </div>
            <div className="text-center lg:text-right">
              <h2 className="text-5xl font-black sm:text-6xl lg:text-7xl">
                {animatedScore}
              </h2>
              <p className="mt-2 text-slate-400">
                Threat Score
              </p>
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

        {/* Scan Timeline */}
        <div className="mt-8">
          <ScanTimeline report={report} />
        </div>

        {/* Technical Details */}
        <div className="mt-8">
          <TechnicalDetails report={report} />
        </div>

        {/* Bottom Actions */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <DownloadReportButton report={report} />
        </div>
      </div>
    </main>
  );
}