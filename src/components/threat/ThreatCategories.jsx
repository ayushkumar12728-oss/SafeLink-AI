import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function ThreatCategories({
  threats = [],
  selected,
  onSelect,
}) {
  if (!selected) {
    return (
      <section className="mx-auto mt-14 max-w-7xl px-6">
        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-10 text-center">
          <AlertTriangle className="mx-auto mb-4 text-yellow-400" size={48} />
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
        {/* Left Side */}
        <div className="space-y-4">
          {threats.map((threat) => (
            <motion.div
              key={threat.id}
              whileHover={{ scale: 1.02, x: 5 }}
              onClick={() => onSelect(threat)}
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

        {/* Right Side */}
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
        >
          <div className="flex items-center gap-4">
            <div className="text-5xl">{selected.icon}</div>

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