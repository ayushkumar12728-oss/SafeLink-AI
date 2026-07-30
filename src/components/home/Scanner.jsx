import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";

export default function Scanner() {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

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

    navigate(`/analyze?url=${encodeURIComponent(trimmedUrl)}`);
  };

  const demoUrls = [
    "https://google.com",
    "https://github.com",
    "https://amaz0n-login-security.xyz",
  ];

  return (
    <div className="w-full">

      {/* Scanner Box */}

      <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/80 p-3 shadow-[0_0_40px_rgba(37,99,235,.15)] backdrop-blur-xl">

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

          {/* Input */}

          <div className="flex flex-1 items-center rounded-xl bg-slate-950/40 px-4">

            <Search
              size={22}
              className="mr-3 flex-shrink-0 text-blue-400"
            />

            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAnalyze();
              }}
              placeholder="Paste suspicious URL..."
              className="w-full bg-transparent py-4 text-base text-white outline-none placeholder:text-slate-500 sm:text-lg"
            />

          </div>

          {/* Button */}

          <button
            onClick={handleAnalyze}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-600/20 lg:w-auto"
          >
            Analyze

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

      {/* Demo URLs */}

      <div className="mt-6">

        <p className="mb-3 text-sm font-medium text-slate-400">
          Try a demo URL
        </p>

        <div className="flex flex-wrap gap-3">

          {demoUrls.map((demo) => (
            <button
              key={demo}
              onClick={() => {
                setUrl(demo);
                navigate(`/analyze?url=${encodeURIComponent(demo)}`);
              }}
              className="max-w-full break-all rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs text-slate-300 transition hover:border-blue-500 hover:bg-slate-800 hover:text-white sm:text-sm"
            >
              {demo}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}