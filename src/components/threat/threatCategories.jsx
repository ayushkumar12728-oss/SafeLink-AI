import { motion } from "framer-motion";

export default function ThreatCategories({
  threats,
  selected,
  onSelect,
}) {
  return (
    <section className="mx-auto mt-14 max-w-7xl px-6">

      <div className="grid lg:grid-cols-[360px_1fr] gap-8">

        <div className="space-y-4">

          {threats.map((threat) => (

            <motion.div
              whileHover={{
                scale: 1.02,
                x: 5,
              }}
              key={threat.id}
              onClick={() => onSelect(threat)}
              className={`cursor-pointer rounded-2xl border p-5 transition ${
                selected.id === threat.id
                  ? "border-cyan-500 bg-slate-800"
                  : "border-slate-700 bg-slate-900"
              }`}
            >

              <p className="text-sm text-cyan-400">
                {threat.category.toUpperCase()}
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {threat.icon} {threat.title}
              </h3>

              <p className="mt-3 text-red-400">
                {threat.severity}
              </p>

            </motion.div>

          ))}

        </div>

        <div
          id="threat-details"
          className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
        >
          <h2 className="text-4xl font-black">
            {selected.title}
          </h2>

          <p className="mt-8 leading-8 text-slate-400">
            {selected.description}
          </p>

          <h3 className="mt-10 text-xl font-bold text-yellow-400">
            Common Warning Signs
          </h3>

          <div className="mt-5 space-y-3">
            {selected.warningSigns.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4"
              >
                • {item}
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}