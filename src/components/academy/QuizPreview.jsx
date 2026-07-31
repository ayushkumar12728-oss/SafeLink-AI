import { useState } from "react";
import { motion } from "framer-motion";
import { quizQuestions } from "../../data/academyData";
import { CheckCircle2, XCircle } from "lucide-react";

export default function QuizPreview() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const quiz = quizQuestions[currentQuestion];

  const handleSubmit = () => {
    if (selected === null) return;

    setSubmitted(true);

    if (selected === quiz.answer) {
      let progress =
        JSON.parse(localStorage.getItem("academyProgress")) || {
          completedLessons: 18,
          totalLessons: 40,
          completedQuizzes: 0,
          totalQuizzes: 20,
          completedLabs: 3,
          totalLabs: 8,
        };

      progress.completedQuizzes = Math.min(
        progress.completedQuizzes + 1,
        progress.totalQuizzes
      );

      localStorage.setItem(
        "academyProgress",
        JSON.stringify(progress)
      );

      let badges =
        JSON.parse(localStorage.getItem("academyBadges")) || [
          {
            title: "Cyber Beginner",
            icon: "🌱",
            unlocked: true,
          },
          {
            title: "Phishing Detective",
            icon: "🎣",
            unlocked: true,
          },
          {
            title: "Password Master",
            icon: "🔐",
            unlocked: false,
          },
          {
            title: "AI Defender",
            icon: "🤖",
            unlocked: false,
          },
        ];

      if (progress.completedQuizzes >= 5) {
        badges[2].unlocked = true;
      }

      if (progress.completedQuizzes >= 10) {
        badges[3].unlocked = true;
      }

      localStorage.setItem(
        "academyBadges",
        JSON.stringify(badges)
      );
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % quizQuestions.length);
    setSelected(null);
    setSubmitted(false);
  };

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >

          <div className="text-center">

            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-400">
              Interactive Quiz
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white">
              Question {currentQuestion + 1}
            </h2>

          </div>

          <h3 className="mt-10 text-2xl font-semibold text-white">
            {quiz.question}
          </h3>

          <div className="mt-8 space-y-4">

            {quiz.options.map((option, index) => {
              const correct =
                submitted && index === quiz.answer;

              const wrong =
                submitted &&
                selected === index &&
                index !== quiz.answer;

              return (
                <button
                  key={index}
                  disabled={submitted}
                  onClick={() => setSelected(index)}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    correct
                      ? "border-emerald-500 bg-emerald-500/20"
                      : wrong
                      ? "border-red-500 bg-red-500/20"
                      : selected === index
                      ? "border-cyan-500 bg-cyan-500/10"
                      : "border-white/10 bg-white/5 hover:border-cyan-500"
                  }`}
                >
                  <div className="flex items-center justify-between">

                    <span>{option}</span>

                    {correct && (
                      <CheckCircle2 className="text-emerald-400" />
                    )}

                    {wrong && (
                      <XCircle className="text-red-400" />
                    )}

                  </div>
                </button>
              );
            })}

          </div>

          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              className="mt-8 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 font-semibold text-black disabled:opacity-40"
            >
              Submit Answer
            </button>
          ) : (
            <div>

              <p className="mt-8 text-lg text-center text-emerald-400">

                {selected === quiz.answer
                  ? "🎉 Correct! Progress Updated."
                  : "❌ Incorrect. Try the next question."}

              </p>

              <button
                onClick={nextQuestion}
                className="mt-8 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black"
              >
                Next Question
              </button>

            </div>
          )}

        </motion.div>

      </div>
    </section>
  );
}