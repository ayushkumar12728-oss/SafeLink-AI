import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { House, ShieldAlert } from "lucide-react";

import Navbar from "../components/layout/Navbar";

import ThreatHero from "../components/threat/ThreatHero";
import ThreatSearch from "../components/threat/ThreatSearch";
import ThreatCategories from "../components/threat/ThreatCategories";

import { threats } from "../data/threatData";

export default function ThreatFeed() {
  const navigate = useNavigate();

  const [selectedThreat, setSelectedThreat] = useState(threats[0]);
  const [search, setSearch] = useState("");

  const filteredThreats = threats.filter((threat) =>
    threat.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-24">

        {/* Header */}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <button
            onClick={() => navigate("/")}
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white transition hover:border-cyan-500 hover:bg-slate-800"
          >
            <House size={18} />
            Back to Home
          </button>

          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            <ShieldAlert size={16} />
            Live Threat Feed
          </div>

        </div>

        <ThreatHero />

        <ThreatSearch
          value={search}
          onChange={setSearch}
        />

        <ThreatCategories
          threats={filteredThreats}
          selected={selectedThreat}
          onSelect={setSelectedThreat}
        />

      </div>

    </main>
  );
}