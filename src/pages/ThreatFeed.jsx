import { useState } from "react";

import ThreatHero from "../components/threat/ThreatHero";
import ThreatSearch from "../components/threat/ThreatSearch";
import ThreatCategories from "../components/threat/ThreatCategories";
import { threats } from "../data/threatData";

export default function ThreatFeed() {
  const [selectedThreat, setSelectedThreat] = useState(threats[0]);

  const [search, setSearch] = useState("");

  const filteredThreats = threats.filter((threat) =>
    threat.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#020617] text-white">

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

    </main>
  );
}