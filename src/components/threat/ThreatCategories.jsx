import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function ThreatCategories({
  threats = [],
  selected,
  onSelect,
}) {
  const [showDetailsMobile, setShowDetailsMobile] = useState(false);

  useEffect(() => {
    setShowDetailsMobile(false);
  }, []);

  if (!selected) {
    return (
      <section className="mx-auto mt-14 max-w-7xl px-6">
        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-10 text-center">
          <AlertTriangle
            className="mx-auto mb-4 text-yellow-400"
            size={48}
          />

          <h2 className="text-2xl font-bold text-white">
            No Threat Selected
          </h2>

          <p className="mt-3 text-slate-400">
            Please select a threat from the list.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto mt-14 max-w-7xl px-6 pb-20">
      <div className="grid gap-8 lg:grid-cols-[350px_1fr]">

        {/* LEFT PANEL */}
        <div
          className={`${
            showDetailsMobile ? "hidden lg:block" : "block"
          }`}
        >
          <div className="space-y-4">
            {threats.map((threat) => (
              <motion.div
                key={threat.id}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onSelect(threat);
                  setShowDetailsMobile(true);
                }}
                className={`cursor-pointer rounded-2xl border p-5 transition ${
                  selected.id === threat.id
                    ? "border-cyan-500 bg-slate-800"
                    : "border-slate-700 bg-slate-900 hover:border-slate-600"
                }`}
              >
                <p className="text-sm uppercase tracking-wide text-cyan-400">
                  {threat.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {threat.icon} {threat.title}
                </h3>

                <span
                  className={`mt-4 inline-block rounded-full px-3 py-1 text-sm ${
                    threat.severity?.includes("High")
                      ? "bg-red-500/10 text-red-400"
                      : threat.severity?.includes("Medium")
                      ? "bg-yellow-500/10 text-yellow-400"
                      : "bg-emerald-500/10 text-emerald-400"
                  }`}
                >
                  {threat.severity}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`${
            showDetailsMobile ? "block" : "hidden lg:block"
          } rounded-3xl border border-slate-700 bg-slate-900 p-8`}
        >
          {/* Mobile Back Button */}
          <button
            onClick={() => setShowDetailsMobile(false)}
            className="mb-6 flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-3 text-white hover:bg-slate-700 lg:hidden"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="flex items-center gap-4">
            <div className="text-5xl">
              {selected.icon}
            </div>

            <div>
              <h2 className="text-4xl font-black text-white">
                {selected.title}
              </h2>

              <p className="mt-2 text-cyan-400">
                {selected.category}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-red-300">
            {selected.severity}
          </div>

          <p className="mt-8 leading-8 text-slate-400">
            {selected.description}
          </p>

          <h3 className="mt-10 text-2xl font-bold text-yellow-400">
            Common Warning Signs
          </h3>

          <div className="mt-5 space-y-3">
            {(selected.warningSigns || []).map((item) => (
              <div
                key={item}
                className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-slate-300"
              >
                ⚠️ {item}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}