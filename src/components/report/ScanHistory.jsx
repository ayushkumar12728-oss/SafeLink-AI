import {
  History,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ScanHistory() {
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("scanHistory") || "[]"));
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("scanHistory");
    setHistory([]);
  };

  const getIcon = (level) => {
    switch ((level || "").toLowerCase()) {
      case "safe":
        return <ShieldCheck className="text-green-400" size={18} />;

      case "dangerous":
        return <ShieldAlert className="text-red-400" size={18} />;

      default:
        return <AlertTriangle className="text-yellow-400" size={18} />;
    }
  };

  const getBadge = (level) => {
    switch ((level || "").toLowerCase()) {
      case "safe":
        return "bg-green-500/20 text-green-400";

      case "dangerous":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-yellow-500/20 text-yellow-400";
    }
  };

  const timeAgo = (date) => {
    const seconds = Math.floor(
      (Date.now() - new Date(date).getTime()) / 1000
    );

    if (seconds < 60) return "Just now";

    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) return `${minutes} min ago`;

    const hours = Math.floor(minutes / 60);

    if (hours < 24) return `${hours} hr ago`;

    const days = Math.floor(hours / 24);

    return `${days} day${days > 1 ? "s" : ""} ago`;
  };

  if (history.length === 0) return null;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <History className="text-blue-400" />
          <h2 className="text-xl font-bold text-white">
            Recent Scans
          </h2>
        </div>

        <button
          onClick={clearHistory}
          className="flex items-center gap-2 rounded-lg border border-red-500/30 px-3 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
        >
          <Trash2 size={16} />
          Clear
        </button>
      </div>

      <div className="space-y-3">
        {history.map((item, index) => (
          <button
            key={index}
            onClick={() =>
              navigate(`/analyze?url=${encodeURIComponent(item.url)}`)
            }
            className="flex w-full items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/40 p-4 transition hover:border-blue-500 hover:bg-slate-800"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              {getIcon(item.level)}

              <div className="overflow-hidden text-left">
                <p className="truncate font-medium text-white">
                  {item.url}
                </p>

                <p className="text-xs text-slate-400">
                  {timeAgo(item.scannedAt)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${getBadge(
                  item.level
                )}`}
              >
                {item.level}
              </span>

              <span className="font-bold text-white">
                {item.score}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}