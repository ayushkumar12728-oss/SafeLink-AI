import {
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  XCircle,
} from "lucide-react";

function Indicator({ title, value, status }) {
  let icon;
  let color;

  switch (status) {
    case "safe":
      icon = <ShieldCheck size={18} className="text-green-400" />;
      color = "text-green-400";
      break;

    case "warning":
      icon = <AlertTriangle size={18} className="text-yellow-400" />;
      color = "text-yellow-400";
      break;

    case "danger":
      icon = <XCircle size={18} className="text-red-400" />;
      color = "text-red-400";
      break;

    default:
      icon = <ShieldAlert size={18} className="text-slate-400" />;
      color = "text-slate-400";
  }

  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/30 p-4">
      <div>
        <p className="text-sm text-slate-400">{title}</p>
        <h3 className={`mt-1 font-semibold ${color}`}>{value}</h3>
      </div>

      <div>{icon}</div>
    </div>
  );
}

export default function ThreatIndicators({ report }) {
  if (!report) return null;

  const ssl = report.ssl || {};
  const whois = report.whois || {};
  const vt = report.virustotal || {};
  const urlscan = report.urlscan || {};

  const ageDays = whois.age_days ?? 0;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg">
      <h2 className="text-2xl font-bold">
        Threat Indicators
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Security signals collected during analysis
      </p>

      <div className="mt-8 space-y-4">

        <Indicator
          title="SSL Certificate"
          value={ssl.valid ? "Valid" : "Invalid"}
          status={ssl.valid ? "safe" : "danger"}
        />

        <Indicator
          title="Domain Age"
          value={
            whois.available
              ? `${Math.floor(ageDays / 365)} Years`
              : "Unknown"
          }
          status={
            ageDays >= 365
              ? "safe"
              : ageDays > 30
              ? "warning"
              : "danger"
          }
        />

        <Indicator
          title="VirusTotal"
          value={
            vt.available
              ? `${vt.malicious} Malicious • ${vt.suspicious} Suspicious`
              : "Unavailable"
          }
          status={
            vt.malicious > 0
              ? "danger"
              : vt.suspicious > 0
              ? "warning"
              : "safe"
          }
        />

        <Indicator
          title="URLScan"
          value={
            urlscan.available
              ? urlscan.overall_verdict?.malicious
                ? "Malicious"
                : "No malicious behaviour"
              : "Unavailable"
          }
          status={
            urlscan.available
              ? urlscan.overall_verdict?.malicious
                ? "danger"
                : "safe"
              : "warning"
          }
        />

      </div>
    </div>
  );
}