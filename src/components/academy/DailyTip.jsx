import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, FlaskConical } from "lucide-react";

export default function CyberLabs() {
  const [answers, setAnswers] = useState({});

  const labs = [
    {
      id: 1,
      title: "Spot the Fake URL",
      question: "Which website looks suspicious?",
      options: [
        "https://google.com",
        "https://github.com",
        "https://g00gle-login.xyz",
      ],
      answer: "https://g00gle-login.xyz",
      explanation:
        "Attackers replace letters with numbers and add words like 'login' to fool users.",
    },
    {
      id: 2,
      title: "Phishing Email",
      question: "Is this email safe?\n\nsupport@sbi-security.xyz",
      options: ["Yes", "No"],
      answer: "No",
      explanation:
        "The sender domain is fake and tries to imitate a trusted bank.",
    },
    {
      id: 3,
      title: "UPI Scam",
      question: "Someone asks for your OTP over the phone. What should you do?",
      options: [
        "Share OTP",
        "Refuse & Hang Up",
        "Share PIN",
      ],
      answer: "Refuse & Hang Up",
      explanation:
        "Banks never ask for your OTP or PIN over calls.",
    },
  ];

  return (
    <section className="bg-[#030712] py-24">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
            <FlaskConical size={18} />
            Interactive Cyber Labs
          </div>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Practice Before You Get Scammed
          </h2>

          <p className="mt-4 text-slate-400">
            Complete these quick cybersecurity challenges.
          </p>
        </motion.div>

        <div className="mt-14 space-y-8">

          {labs.map((lab) => (
            <div
              key={lab.id}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <h3 className="text-2xl font-bold text-white">
                {lab.title}
              </h3>

              <p className="mt-4 whitespace-pre-line text-slate-300">
                {lab.question}
              </p>

              <div className="mt-6 space-y-3">

                {lab.options.map((option) => (
                  <button
                    key={option}
                    onClick={() =>
                      setAnswers({
                        ...answers,
                        [lab.id]: option,
                      })
                    }
                    className={`block w-full rounded-xl border p-4 text-left transition ${
                      answers[lab.id] === option
                        ? "border-cyan-500 bg-cyan-500/10"
                        : "border-slate-700 hover:border-cyan-500"
                    }`}
                  >
                    {option}
                  </button>
                ))}

              </div>

              {answers[lab.id] && (
                <div
                  className={`mt-6 rounded-xl p-5 ${
                    answers[lab.id] === lab.answer
                      ? "bg-emerald-500/10 border border-emerald-500"
                      : "bg-red-500/10 border border-red-500"
                  }`}
                >
                  <div className="flex items-center gap-2 font-semibold">

                    {answers[lab.id] === lab.answer ? (
                      <>
                        <CheckCircle2 className="text-emerald-400" />
                        Correct
                      </>
                    ) : (
                      <>
                        <XCircle className="text-red-400" />
                        Incorrect
                      </>
                    )}

                  </div>

                  <p className="mt-3 text-slate-300">
                    {lab.explanation}
                  </p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}