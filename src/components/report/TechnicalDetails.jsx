import {
  Server,
  Globe,
  Lock,
  Wifi,
  FileCode,
  Hash,
  ShieldCheck,
  Clock3,
} from "lucide-react";

function DetailCard({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-5 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-slate-900 p-2">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm text-slate-400">
            {label}
          </p>

          <h3 className="mt-1 break-all font-semibold text-white">
            {value}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function TechnicalDetails({ report }) {
  if (!report) return null;

  const dns = report.dns ?? {};
  const http = report.http ?? {};
  const ssl = report.ssl ?? {};

  const protocol =
    ssl.protocol ||
    (ssl.valid ? "HTTPS" : "HTTP");

  const port =
    protocol.startsWith("HTTPS") ? "443" : "80";

  const ip =
    dns.ip_address ||
    dns.ipv4 ||
    dns.ipv6 ||
    dns.ip ||
    "Unavailable";

  const details = [
    {
      icon: <Globe className="text-blue-400" />,
      label: "IP Address",
      value: ip,
    },
    {
      icon: <Lock className="text-green-400" />,
      label: "Protocol",
      value: protocol,
    },
    {
      icon: <ShieldCheck className="text-emerald-400" />,
      label: "SSL Certificate",
      value: ssl.valid ? "Valid" : "Invalid",
    },
    {
      icon: <Server className="text-purple-400" />,
      label: "Server",
      value: http.server || "Unknown",
    },
    {
      icon: <Wifi className="text-cyan-400" />,
      label: "Port",
      value: port,
    },
    {
      icon: <Clock3 className="text-orange-400" />,
      label: "Certificate Expires",
      value: ssl.expires || "Unavailable",
    },
    {
      icon: <FileCode className="text-yellow-400" />,
      label: "Content Type",
      value: http.content_type || "Unknown",
    },
    {
      icon: <Hash className="text-pink-400" />,
      label: "HTTP Status",
      value: http.status_code
        ? `${http.status_code} ${http.reason || ""}`
        : "Unavailable",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Technical Details
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Technical information collected during website analysis.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {details.map((detail) => (
          <DetailCard
            key={detail.label}
            icon={detail.icon}
            label={detail.label}
            value={detail.value}
          />
        ))}
      </div>
    </div>
  );
}