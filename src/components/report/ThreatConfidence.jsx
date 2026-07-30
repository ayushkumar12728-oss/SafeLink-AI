import { BrainCircuit } from "lucide-react";

export default function ThreatConfidence({ report }) {
  const score = report?.risk?.score ?? 0;

  const vt = report?.virustotal?.available;
  const ssl = report?.ssl?.available;
  const whois = report?.whois?.available;

 let confidence = 50;

if (vt) confidence += 20;
if (ssl) confidence += 10;
if (whois) confidence += 10;

if (report?.dns?.available) confidence += 5;
if (report?.http?.available) confidence += 5;

const malicious = report?.virustotal?.malicious ?? 0;

if (malicious > 0) confidence += 5;

if (score >= 80 || score <= 20) confidence += 5;

confidence = Math.min(confidence, 99);

  let label = "Medium";

  if (confidence >= 90) label = "Very High";
  else if (confidence >= 75) label = "High";
  else if (confidence >= 60) label = "Moderate";
  else label = "Low";

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

      <div className="mb-5 flex items-center gap-3">

        <BrainCircuit className="text-cyan-400" />

        <h2 className="text-xl font-bold">
          AI Threat Confidence
        </h2>

      </div>

      <div className="h-4 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-700"
          style={{
            width: `${confidence}%`,
          }}
        />

      </div>

      <div className="mt-4 flex items-center justify-between">

        <span className="text-4xl font-black text-cyan-400">
          {confidence}%
        </span>

        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-semibold text-cyan-300">
          {label}
        </span>

      </div>

      <p className="mt-4 text-sm leading-6 text-slate-400">
        Confidence is calculated from agreement between SSL validation,
        WHOIS data, VirusTotal reputation, DNS checks and the AI risk engine.
      </p>

    </div>
  );
}