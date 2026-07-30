import { motion } from "framer-motion";
import {
  Brain,
  ShieldCheck,
  Globe,
  Lock,
  Database,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Detection",
    desc: "Machine Learning detects phishing and malicious URLs with high accuracy.",
  },
  {
    icon: ShieldCheck,
    title: "VirusTotal Scan",
    desc: "Cross-check URLs using multiple antivirus engines instantly.",
  },
  {
    icon: Globe,
    title: "WHOIS Lookup",
    desc: "Inspect ownership, registrar, age and domain information.",
  },
  {
    icon: Lock,
    title: "SSL Analysis",
    desc: "Detect expired, invalid or suspicious SSL certificates.",
  },
  {
    icon: Database,
    title: "Threat Intelligence",
    desc: "Collect information from multiple cyber security feeds.",
  },
  {
    icon: Activity,
    title: "Live Analytics",
    desc: "Visualize threat scores and AI confidence in real time.",
  },
];

export default function Features() {
  return (
  <section
  id="features"
  className="py-28"
>

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[0.3em] text-center text-blue-400 text-sm">
          Features
        </p>

        <h2 className="mt-4 text-center text-5xl font-black">
          Everything Needed To Detect Fake URLs
        </h2>

        <p className="mt-6 text-center max-w-3xl mx-auto text-slate-400">
          SafeLink AI combines artificial intelligence,
          cyber threat intelligence,
          SSL analysis,
          WHOIS lookup
          and VirusTotal into one unified platform.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature,index)=>{

            const Icon=feature.icon;

            return(

              <motion.div

                key={feature.title}

                initial={{opacity:0,y:40}}

                whileInView={{opacity:1,y:0}}

                transition={{delay:index*.08}}

                viewport={{once:true}}

                whileHover={{
                  y:-10,
                  scale:1.03,
                }}

                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"

              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">

                  <Icon
                    size={34}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold">

                  {feature.title}

                </h3>

                <p className="mt-5 leading-7 text-slate-400">

                  {feature.desc}

                </p>

              </motion.div>

            )

          })}

        </div>

      </div>

    </section>
  );
}