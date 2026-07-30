import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Shield,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600/15 p-2">
            <Shield size={24} className="text-blue-500" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
              SafeLink AI
            </h1>

            <p className="hidden text-xs text-slate-400 sm:block">
              AI Powered URL Security
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">

          <button
            onClick={() => scrollToSection("features")}
            className="text-slate-300 hover:text-white transition"
          >
            Features
          </button>

          <Link
            to="/threat-library"
            className="text-slate-300 hover:text-white transition"
          >
            Threat Feed
          </Link>

          <button
            onClick={() => scrollToSection("dashboard")}
            className="text-slate-300 hover:text-white transition"
          >
            Dashboard
          </button>

          <button
            onClick={() => scrollToSection("docs")}
            className="text-slate-300 hover:text-white transition"
          >
            Docs
          </button>

          <a
            href="https://github.com/ayushkumar12728-oss/SafeLink-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition"
          >
            GitHub
          </a>

        </div>

        <button className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold transition hover:scale-105 lg:flex">
          Get Started
          <ArrowRight size={18} />
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-700 p-2 text-white lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 py-5 lg:hidden">

          <button
            onClick={() => scrollToSection("features")}
            className="block w-full rounded-lg px-3 py-3 text-left text-slate-300 hover:bg-slate-800"
          >
            Features
          </button>

          <Link
            to="/threat-library"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-800"
          >
            Threat Feed
          </Link>

          <button
            onClick={() => scrollToSection("dashboard")}
            className="block w-full rounded-lg px-3 py-3 text-left text-slate-300 hover:bg-slate-800"
          >
            Dashboard
          </button>

          <button
            onClick={() => scrollToSection("docs")}
            className="block w-full rounded-lg px-3 py-3 text-left text-slate-300 hover:bg-slate-800"
          >
            Docs
          </button>

          <a
            href="https://github.com/ayushkumar12728-oss/SafeLink-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-800"
          >
            GitHub
          </a>

        </div>
      )}
    </nav>
  );
}