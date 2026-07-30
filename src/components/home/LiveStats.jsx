import { Globe, ShieldCheck, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current += Math.max(1, Math.ceil(target / 30));

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      setCount(current);
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}</>;
}

export default function LiveStats() {
  const [stats, setStats] = useState({
    scanned: 0,
    blocked: 0,
    safe: 0,
  });

  useEffect(() => {
    const loadStats = () => {
      const history = JSON.parse(
        localStorage.getItem("scanHistory") || "[]"
      );

      const scanned = history.length;

      const blocked = history.filter(
        (item) =>
          item.level?.toLowerCase() === "dangerous" ||
          item.level?.toLowerCase() === "suspicious"
      ).length;

      const safe = scanned - blocked;

      setStats({
        scanned,
        blocked,
        safe,
      });
    };

    loadStats();

    window.addEventListener("storage", loadStats);

    return () =>
      window.removeEventListener("storage", loadStats);
  }, []);

  const cards = [
    {
      icon: Globe,
      value: stats.scanned,
      label: "URLs Scanned",
      color: "text-blue-400",
    },
    {
      icon: ShieldAlert,
      value: stats.blocked,
      label: "Threats Blocked",
      color: "text-red-400",
    },
    {
      icon: ShieldCheck,
      value: stats.safe,
      label: "Safe Websites",
      color: "text-green-400",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.label}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
          >
            <Icon className={`mx-auto mb-4 h-8 w-8 ${card.color}`} />

            <h2 className="text-4xl font-black text-white">
              <Counter target={card.value} />
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              {card.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}