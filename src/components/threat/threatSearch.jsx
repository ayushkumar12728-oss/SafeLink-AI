import { Search } from "lucide-react";

export default function ThreatSearch({
  value,
  onChange,
}) {
  return (
    <div className="mx-auto max-w-3xl px-6">

      <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4">

        <Search className="text-cyan-400" />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search phishing, malware, scams..."
          className="ml-4 w-full bg-transparent outline-none"
        />

      </div>

    </div>
  );
}