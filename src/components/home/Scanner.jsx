import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  QrCode,
  House,
} from "lucide-react";

export default function Scanner({
  showDemoUrls = true,
  buttonLabel = "Analyze URL",
}) {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const isAnalyzePage = location.pathname === "/analyze";

  const handleAnalyze = () => {
    let trimmedUrl = url.trim();
    if (!trimmedUrl) {
      alert("Please enter a URL.");
      return;
    }
    if (
      !trimmedUrl.startsWith("http://") &&
      !trimmedUrl.startsWith("https://")
    ) {
      trimmedUrl = "https://" + trimmedUrl;
    }
    navigate(
      `/analyze?url=${encodeURIComponent(trimmedUrl)}`
    );
  };

  const demoUrls = [
    "https://google.com",
    "https://github.com",
    "https://amaz0n-login-security.xyz",
  ];

  return (
    <div className="w-full">
      {/* Top Badges */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
          <Sparkles size={16} />
          AI Powered Detection
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
          Ready to Scan
        </div>
      </div>

      {/* Scanner */}
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_50px_rgba(34,211,238,.08)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-1 items-center rounded-2xl border border-white/5 bg-slate-950/60 px-5">
            <Search
              size={22}
              className="mr-4 text-cyan-400"
            />
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAnalyze();
                }
              }}
              placeholder="Paste suspicious URL or phishing link..."
              className="w-full bg-transparent py-5 text-base text-white outline-none placeholder:text-slate-500 sm:text-lg"
            />
          </div>

          <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row">
            <button
              onClick={handleAnalyze}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold text-white transition hover:scale-[1.02]"
            >
              {buttonLabel}
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => navigate("/qr-scanner")}
              className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4 font-semibold text-emerald-400 transition hover:bg-emerald-500/20"
            >
              <QrCode size={18} />
              Scan QR
            </button>

            {isAnalyzePage && (
              <button
                onClick={() => navigate("/")}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-4 font-semibold text-white transition hover:border-cyan-500 hover:bg-slate-800"
              >
                <House size={18} />
                Home
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
          <ShieldCheck
            size={16}
            className="text-emerald-400"
          />
          Supports HTTP & HTTPS URLs • Instant AI Analysis
        </div>
      </div>

      {/* Demo URLs */}
      {showDemoUrls && (
        <div className="mt-8">
          <p className="mb-4 text-sm font-medium text-slate-400">
            Try these demo URLs
          </p>
          <div className="flex flex-wrap gap-3">
            {demoUrls.map((demo) => (
              <button
                key={demo}
                onClick={() =>
                  navigate(`/analyze?url=${encodeURIComponent(demo)}`)
                }
                className="rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm text-slate-300 transition hover:border-cyan-500 hover:bg-slate-800 hover:text-white"
              >
                {demo}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}