import { useNavigate } from "react-router-dom";
import {
  Globe,
  CreditCard,
  Wifi,
  Mail,
  Phone,
  MessageSquare,
  ShieldAlert,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function QRResult({ data }) {
  const navigate = useNavigate();

  if (!data) return null;

  let type = "Unknown";
  let icon = <ShieldAlert className="text-red-400" size={30} />;
  let color = "text-red-400";
  let title = "Unknown QR";

  if (data.startsWith("http")) {
    type = "Website URL";
    icon = <Globe className="text-cyan-400" size={30} />;
    color = "text-cyan-400";
    title = "Website Detected";
  } else if (data.startsWith("upi://")) {
    type = "UPI Payment";
    icon = <CreditCard className="text-emerald-400" size={30} />;
    color = "text-emerald-400";
    title = "UPI QR Detected";
  } else if (data.startsWith("WIFI:")) {
    type = "WiFi QR";
    icon = <Wifi className="text-blue-400" size={30} />;
    color = "text-blue-400";
    title = "Wi-Fi Configuration";
  } else if (data.startsWith("mailto:")) {
    type = "Email";
    icon = <Mail className="text-purple-400" size={30} />;
    color = "text-purple-400";
    title = "Email QR";
  } else if (data.startsWith("tel:")) {
    type = "Phone";
    icon = <Phone className="text-orange-400" size={30} />;
    color = "text-orange-400";
    title = "Phone Number";
  } else if (data.startsWith("SMSTO:")) {
    type = "SMS";
    icon = <MessageSquare className="text-pink-400" size={30} />;
    color = "text-pink-400";
    title = "SMS QR";
  }

  return (
    <section className="pb-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl">

          <div className="flex items-center gap-4">
            {icon}

            <div>
              <h2 className="text-3xl font-bold text-white">
                {title}
              </h2>

              <p className={`${color} mt-2`}>
                {type}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-950 p-6">

            <h3 className="text-sm uppercase tracking-wider text-slate-400">
              Decoded Content
            </h3>

            <p className="mt-4 break-all text-white">
              {data}
            </p>

          </div>

          <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-emerald-400" />

              <h3 className="font-semibold text-emerald-400">
                SafeLink AI Recommendation
              </h3>
            </div>

            <p className="mt-4 text-slate-300">
              Always verify the destination before opening
              links, making UPI payments or connecting to
              unknown Wi-Fi networks.
            </p>

          </div>

          {type === "Website URL" && (
            <button
              onClick={() => {
  if (data.startsWith("http")) {
    navigate(`/analyze?url=${encodeURIComponent(data)}`);
  }
}}
              className="mt-8 flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-4 font-semibold text-slate-950 transition hover:scale-105"
            >
              Analyze with SafeLink AI
              <ArrowRight size={18} />
            </button>
          )}

        </div>

      </div>
    </section>
  );
}