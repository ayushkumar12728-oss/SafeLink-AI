import { useEffect, useState } from "react";
import {
  Globe,
  ShieldCheck,
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";

export default function Statistics() {
  const [stats, setStats] = useState({
    scanned: 0,
    safe: 0,
    suspicious: 0,
    dangerous: 0,
  });

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("scanHistory") || "[]");

    const safe = history.filter(
      (item) => item.level?.toLowerCase() === "safe"
    ).length;

    const dangerous = history.filter(
      (item) => item.level?.toLowerCase() === "dangerous"
    ).length;

    const suspicious = history.filter(
      (item) =>
        item.level?.toLowerCase() === "suspicious" ||
        item.level?.toLowerCase() === "warning"
    ).length;

    setStats({
      scanned: history.length,
      safe,
      suspicious,
      dangerous,
    });
  }, []);

  const cards = [
    {
      title: "URLs Scanned",
      value: stats.scanned,
      icon: <Globe className="text-blue-400" />,
    },
    {
      title: "Safe Websites",
      value: stats.safe,
      icon: <ShieldCheck className="text-green-400" />,
    },
    {
      title: "Suspicious",
      value: stats.suspicious,
      icon: <AlertTriangle className="text-yellow-400" />,
    },
    {
      title: "Dangerous",
      value: stats.dangerous,
      icon: <ShieldAlert className="text-red-400" />,
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center shadow-lg transition hover:border-blue-500"
          >
            <div className="mb-4 flex justify-center">
              {card.icon}
            </div>

            <h2 className="text-5xl font-black text-white">
              {card.value}
            </h2>

            <p className="mt-3 text-slate-400">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}