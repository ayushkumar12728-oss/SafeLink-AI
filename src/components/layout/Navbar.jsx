import { useState } from "react";
import {
  Shield,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Features",
    "Threat Feed",
    "Dashboard",
    "Docs",
    "GitHub",
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-600/15 p-2">

            <Shield
              size={24}
              className="text-blue-500"
            />

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

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 lg:flex">

          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-slate-300 transition hover:text-white"
            >
              {link}
            </a>
          ))}

        </div>

        {/* Desktop Button */}

        <button className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold transition hover:scale-105 lg:flex">

          Get Started

          <ArrowRight size={18} />

        </button>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-700 p-2 text-white lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-96 border-t border-slate-800" : "max-h-0"
        }`}
      >

        <div className="space-y-2 bg-slate-950 px-4 py-5">

          {links.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              {link}
            </a>
          ))}

          <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold">

            Get Started

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </nav>
  );
}