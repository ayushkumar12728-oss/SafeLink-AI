import {
  Globe,
  Calendar,
  Building2,
  Server,
  Clock3,
  ShieldCheck,
} from "lucide-react";

function Info({ icon, title, value }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-slate-800 p-2">
          {icon}
        </div>

        <span className="font-medium">
          {title}
        </span>
      </div>

      <span className="max-w-[55%] break-all text-right text-slate-400">
        {value}
      </span>
    </div>
  );
}

export default function DomainInfo({ report }) {
  if (!report) return null;

  const whois = report.whois ?? {};
  const dns = report.dns ?? {};
  const http = report.http ?? {};
  const ssl = report.ssl ?? {};

  const ageDays = whois.age_days;

  const domainAge =
    typeof ageDays === "number"
      ? `${Math.floor(ageDays / 365)} year(s)`
      : "Unknown";

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg">

      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Domain Information
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Registration, hosting and certificate details
        </p>
      </div>

      <div className="space-y-5">

        <Info
          icon={<Building2 className="h-5 w-5 text-indigo-400" />}
          title="Registrar"
          value={whois.registrar || "Unknown"}
        />

        <Info
          icon={<Calendar className="h-5 w-5 text-emerald-400" />}
          title="Created"
          value={whois.creation_date || "Unavailable"}
        />

        <Info
          icon={<Calendar className="h-5 w-5 text-orange-400" />}
          title="Expires"
          value={whois.expiration_date || "Unavailable"}
        />

        <Info
          icon={<Clock3 className="h-5 w-5 text-yellow-400" />}
          title="Domain Age"
          value={domainAge}
        />

        <Info
          icon={<Globe className="h-5 w-5 text-blue-400" />}
          title="Country"
          value={whois.country || "Unknown"}
        />

        <Info
          icon={<Globe className="h-5 w-5 text-cyan-400" />}
          title="IP Address"
          value={dns.ip_address || dns.ip || "Unavailable"}
        />

        <Info
          icon={<Server className="h-5 w-5 text-purple-400" />}
          title="Server"
          value={http.server || "Unknown"}
        />

        <Info
          icon={<ShieldCheck className="h-5 w-5 text-green-400" />}
          title="SSL Certificate"
          value={ssl.valid ? "Valid" : "Invalid"}
        />

      </div>

    </div>
  );
}