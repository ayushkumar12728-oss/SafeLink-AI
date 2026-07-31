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
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 200);

      setOpen(false);
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

  const navLink = (path) =>
    `transition ${
      location.pathname === path
        ? "text-emerald-400"
        : "text-slate-300 hover:text-white"
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="rounded-xl bg-emerald-500/10 p-2">
            <Shield className="text-emerald-400" size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              SafeLink AI
            </h1>

            <p className="hidden text-xs text-slate-400 sm:block">
              AI Powered URL Security
            </p>
          </div>

        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">

          <button
            onClick={() => scrollToSection("features")}
            className="text-slate-300 transition hover:text-white"
          >
            Features
          </button>

          <Link
            to="/threat-feed"
            className={navLink("/threat-feed")}
          >
            Threat Feed
          </Link>

          <Link
            to="/academy"
            className={navLink("/academy")}
          >
            Cyber Academy
          </Link>

          <button
            onClick={() => scrollToSection("dashboard")}
            className="text-slate-300 transition hover:text-white"
          >
            Dashboard
          </button>

          <a
            href="https://github.com/ayushkumar12728-oss/SafeLink-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition hover:text-white"
          >
            GitHub
          </a>

        </div>

        {/* Desktop Button */}
        <Link
          to="/analyze"
          className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 font-semibold text-black transition hover:scale-105 lg:flex"
        >
          Analyze URL
          <ArrowRight size={18} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-700 p-2 text-white lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950 px-5 py-5 lg:hidden">

          <button
            onClick={() => scrollToSection("features")}
            className="block w-full rounded-lg px-3 py-3 text-left text-slate-300 hover:bg-slate-800"
          >
            Features
          </button>

          <Link
            to="/threat-feed"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-800"
          >
            Threat Feed
          </Link>

          <Link
            to="/academy"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-800"
          >
            Cyber Academy
          </Link>

          <button
            onClick={() => scrollToSection("dashboard")}
            className="block w-full rounded-lg px-3 py-3 text-left text-slate-300 hover:bg-slate-800"
          >
            Dashboard
          </button>

          <Link
            to="/analyze"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-3 font-semibold text-black"
          >
            Analyze URL
            <ArrowRight size={18} />
          </Link>

          <a
            href="https://github.com/ayushkumar12728-oss/SafeLink-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-800"
          >
            GitHub
          </a>

        </div>
      )}
    </nav>
  );
}