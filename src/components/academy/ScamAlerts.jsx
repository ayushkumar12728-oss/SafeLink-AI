import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { scamAlerts } from "../../data/academyData";

export default function ScamAlerts() {
  const riskColor = (risk) => {
    switch (risk) {
      case "Critical":
        return "text-red-400 border-red-500/40 bg-red-500/10";
      case "High":
        return "text-orange-400 border-orange-500/40 bg-orange-500/10";
      default:
        return "text-yellow-400 border-yellow-500/40 bg-yellow-500/10";
    }
  };

  return (
    <section className="bg-[#030712] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm text-red-400">
            Latest Scam Alerts
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Stay Alert Against
            <span className="text-red-400"> Online Scams</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Learn about common cyber scams before they become a threat to you.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {scamAlerts.map((alert, index) => (
            <motion.div
              key={alert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div className="text-5xl">{alert.icon}</div>

                <AlertTriangle className="text-red-400" size={24} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {alert.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {alert.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                  {alert.type}
                </span>

                <span
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${riskColor(
                    alert.risk
                  )}`}
                >
                  {alert.risk}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}