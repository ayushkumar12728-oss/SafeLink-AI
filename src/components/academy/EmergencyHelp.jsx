import { motion } from "framer-motion";
import { emergencyContacts } from "../../data/academyData";
import {
  Phone,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

const timeline = [
  "Disconnect from suspicious website",
  "Call 1930 immediately",
  "Inform your bank",
  "Change passwords",
  "Save screenshots and evidence",
  "Report at cybercrime.gov.in",
];

export default function EmergencyHelp() {
  return (
    <section className="relative bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity:0,y:20 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          className="text-center"
        >

          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm text-red-400">
            Emergency Help Center
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Been Scammed?
            <span className="text-red-400"> Act Immediately.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Every second matters during cyber fraud.
            Follow these emergency steps and contact the right authorities.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {emergencyContacts.map((item,index)=>(
            <motion.div
              key={item.title}
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:index*.1}}
              whileHover={{y:-8}}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <div className="mt-5 text-4xl font-extrabold text-emerald-400">
                {item.number}
              </div>

              <p className="mt-5 leading-7 text-slate-400">
                {item.description}
              </p>

              <button className="mt-8 flex items-center gap-2 text-emerald-400">
                Learn More
                <ArrowRight size={18}/>
              </button>

            </motion.div>
          ))}

        </div>

        {/* Timeline */}

        <div className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-10">

          <div className="flex items-center gap-3">

            <ShieldAlert className="text-red-400"/>

            <h3 className="text-3xl font-bold text-white">
              What Should You Do?
            </h3>

          </div>

          <div className="mt-10 space-y-6">

            {timeline.map((step,index)=>(
              <div
                key={step}
                className="flex items-center gap-5"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-black">
                  {index+1}
                </div>

                <p className="text-lg text-slate-300">
                  {step}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-10 flex items-center gap-3 rounded-2xl bg-red-500/10 p-5 text-red-300">

            <Phone/>

            Report financial cyber fraud immediately by calling
            <span className="font-bold text-white">
              1930
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}