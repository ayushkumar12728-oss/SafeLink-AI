import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../../data/academyData";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#020617] py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Got Questions?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Find answers to the most common cybersecurity and SafeLink AI questions.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>

                {open === index ? (
                  <ChevronUp className="text-cyan-400" />
                ) : (
                  <ChevronDown className="text-cyan-400" />
                )}
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-400 leading-7">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}