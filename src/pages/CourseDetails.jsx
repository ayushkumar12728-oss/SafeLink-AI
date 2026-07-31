import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courseData";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock3,
  Trophy,
  CheckCircle2,
  PlayCircle,
  ArrowLeft,
} from "lucide-react";

export default function CourseDetails() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030712] text-white">
        <h1 className="text-3xl font-bold">Course Not Found</h1>
      </div>
    );
  }

  const score = course.quiz
    ? course.quiz.reduce(
        (total, question, index) =>
          answers[index] === question.answer ? total + 1 : total,
        0
      )
    : 0;

  return (
    <main className="min-h-screen bg-[#030712] text-white pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
        >
          <div className="text-6xl">
            {course.icon}
          </div>

          <h1 className="mt-6 text-5xl font-black">
            {course.title}
          </h1>

          <p className="mt-5 max-w-3xl text-slate-400">
            {course.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <div className="flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-3">
              <Clock3 size={18} />
              {course.duration}
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-3">
              <BookOpen size={18} />
              {course.lessons} Lessons
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-3">
              <Trophy size={18} />
              {course.xp} XP
            </div>

            <div className="rounded-xl bg-emerald-500/20 px-5 py-3 text-emerald-300">
              {course.difficulty}
            </div>
          </div>
        </motion.div>

        {/* Learning Outcomes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >
          <h2 className="text-3xl font-bold">
            What You'll Learn
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {course.outcomes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-slate-800 p-4"
              >
                <CheckCircle2 className="text-emerald-400" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lessons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >
          <h2 className="text-3xl font-bold">
            Course Lessons
          </h2>

          <div className="mt-8 space-y-4">
            {course.lessonData ? (
              course.lessonData.map((lesson, index) => (
                <div
                  key={lesson.title}
                  className="rounded-xl bg-slate-800 p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">
                        Lesson {index + 1}
                      </h3>

                      <p className="mt-2 text-lg">
                        {lesson.title}
                      </p>
                    </div>

                    <PlayCircle className="text-blue-400" />
                  </div>

                  <p className="mt-5 text-slate-400 leading-8">
                    {lesson.content}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-slate-400">
                Lessons coming soon...
              </p>
            )}
          </div>
        </motion.div>

        {/* QUIZ */}
        {course.quiz && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8"
          >
            <h2 className="text-3xl font-bold">
              Quick Quiz
            </h2>
            <p className="mt-3 text-slate-400">
              Test your understanding with 3 simple questions.
            </p>
            {course.quiz.map((question, index) => (
              <div
                key={index}
                className="mt-8 rounded-2xl bg-slate-800 p-6"
              >
                <h3 className="text-lg font-semibold">
                  {index + 1}. {question.question}
                </h3>
                <div className="mt-5 space-y-3">
                  {question.options.map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        setAnswers({
                          ...answers,
                          [index]: option,
                        })
                      }
                      className={`block w-full rounded-xl border p-4 text-left transition ${
                        answers[index] === option
                          ? "border-cyan-500 bg-cyan-500/10"
                          : "border-slate-700 hover:border-cyan-500"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            {!submitted ? (
              <button
                onClick={() => setSubmitted(true)}
                className="mt-10 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Submit Quiz
              </button>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-10 rounded-3xl border border-emerald-500 bg-emerald-500/10 p-8 text-center"
              >
                <div className="text-6xl">
                  🎉
                </div>
                <h2 className="mt-5 text-3xl font-bold text-emerald-400">
                  Course Completed
                </h2>
                <p className="mt-5 text-lg">
                  Your Score
                </p>
                <h3 className="mt-2 text-5xl font-black">
                  {score} / {course.quiz.length}
                </h3>
                <p className="mt-5 text-slate-400">
                  Great work! Continue learning more cybersecurity topics.
                </p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* BACK BUTTON */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/academy"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            <ArrowLeft size={18} />
            Back to Cyber Academy
          </Link>
        </div>
      </div>
    </main>
  );
}