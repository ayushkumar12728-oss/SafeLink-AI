import {
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  XCircle,
} from "lucide-react";

export default function Recommendations({ report }) {
  if (!report) return null;

  const level = report.risk?.level ?? "Unknown";

  const recommendation =
    report.ai?.recommendation ??
    "No recommendation is available.";

  let icon;
  let badge;
  let tips = [];

  switch (level) {
    case "Low":
      icon = <ShieldCheck className="text-green-400" size={22} />;
      badge = "bg-green-500/20 text-green-400";

      tips = [
        "Website appears safe to visit.",
        "Always verify the URL before entering credentials.",
        "Keep your browser and antivirus updated.",
        "Prefer HTTPS websites whenever possible.",
      ];
      break;

    case "Medium":
      icon = <AlertTriangle className="text-yellow-400" size={22} />;
      badge = "bg-yellow-500/20 text-yellow-400";

      tips = [
        "Proceed carefully before sharing personal information.",
        "Double-check the website's domain name.",
        "Avoid downloading unknown files.",
        "Use multi-factor authentication whenever available.",
      ];
      break;

    case "High":
      icon = <ShieldAlert className="text-orange-400" size={22} />;
      badge = "bg-orange-500/20 text-orange-400";

      tips = [
        "Avoid entering passwords or banking information.",
        "Do not download software from this website.",
        "Verify the website through an official source.",
        "Leave the page if anything looks suspicious.",
      ];
      break;

    case "Critical":
      icon = <XCircle className="text-red-400" size={22} />;
      badge = "bg-red-500/20 text-red-400";

      tips = [
        "Do NOT visit this website.",
        "Never enter passwords or payment information.",
        "Avoid downloading any files.",
        "Report the website if you believe it is malicious.",
      ];
      break;

    default:
      icon = <ShieldAlert className="text-slate-400" size={22} />;
      badge = "bg-slate-700 text-slate-300";

      tips = [
        "Unable to determine website safety.",
        "Proceed with caution.",
      ];
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Recommendations
          </h2>

          <p className="text-sm text-slate-400">
            AI-generated security guidance
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${badge}`}
        >
          {level} Risk
        </span>
      </div>

      {/* Tips */}
      <div className="mt-8 space-y-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-800/30 p-4"
          >
            <div className="mt-0.5 flex-shrink-0">
              {icon}
            </div>

            <p className="leading-6 text-slate-300">
              {tip}
            </p>
          </div>
        ))}
      </div>

      {/* AI Recommendation */}
      <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
        <h3 className="font-semibold text-blue-400">
          Final Recommendation
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          {recommendation}
        </p>
      </div>
    </div>
  );
}