import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { generateCertificate } from "../utils/generateCertificate";

import {
  ArrowLeft,
  BookOpen,
  Clock3,
  Trophy,
  PlayCircle,
  CheckCircle2,
  Lock,
} from "lucide-react";

import { courses } from "../data/courseData";
import {
  getProgress,
  completeCourse,
} from "../utils/courseProgress";

export default function CourseDetails() {
  const { slug } = useParams();

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030712] text-white">
        <h1 className="text-4xl font-bold">
          Course Not Found
        </h1>
      </div>
    );
  }

  const savedProgress = getProgress(course.slug);

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(
    savedProgress.completed
  );
  const [showPopup, setShowPopup] = useState(false);
const [studentName, setStudentName] = useState("");

  const totalQuestions = course.quiz.length;

  const score = course.quiz.reduce(
    (total, question, index) =>
      answers[index] === question.answer
        ? total + 1
        : total,
    0
  );

  const passed = score === totalQuestions;

  const handleQuizSubmit = () => {
    setSubmitted(true);

    if (passed) {
      completeCourse(
        course.slug,
        score,
        totalQuestions
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#030712] pt-28 pb-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          to="/academy"
          className="mb-10 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 hover:bg-slate-800"
        >
          <ArrowLeft size={18} />
          Back to Academy
        </Link>

        {/* HERO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-10"
        >
          <div className="text-6xl">
            {course.icon}
          </div>

          <h1 className="mt-6 text-5xl font-black">
            {course.title}
          </h1>

          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
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

            <div className="rounded-xl bg-emerald-500/10 px-5 py-3 text-emerald-300">
              {course.difficulty}
            </div>
          </div>

          {savedProgress.completed && (
            <div className="mt-8 rounded-2xl border border-emerald-500 bg-emerald-500/10 p-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-400" />

                <div>
                  <h3 className="font-bold text-emerald-400">
                    Course Completed
                  </h3>

                  <p className="text-slate-300">
                    Your certificate for this course
                    has already been unlocked.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* WHAT YOU'LL LEARN */}
        <motion.section
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >
          <h2 className="text-3xl font-bold">
            What You'll Learn
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {course.outcomes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-slate-800 p-5"
              >
                <CheckCircle2
                  className="text-emerald-400"
                />
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        {/* LESSONS */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >
          <h2 className="text-3xl font-bold">
            Course Lessons
          </h2>
          <div className="mt-8 space-y-5">
            {course.lessonData.map((lesson, index) => (
              <motion.div
                key={lesson.title}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-slate-800 bg-slate-800 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">
                      Lesson {index + 1}
                    </h3>
                    <p className="mt-2 text-lg">
                      {lesson.title}
                    </p>
                  </div>
                  <PlayCircle className="text-cyan-400" />
                </div>
                <p className="mt-6 leading-8 text-slate-400">
                  {lesson.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* QUIZ */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >
          <h2 className="text-3xl font-bold">
            Final Assessment
          </h2>
          <p className="mt-3 text-slate-400">
            Score 100% to unlock your certificate.
          </p>
          {course.quiz.map((question, index) => (
            <div
              key={index}
              className="mt-8 rounded-2xl bg-slate-800 p-6"
            >
              <h3 className="text-xl font-semibold">
                {index + 1}. {question.question}
              </h3>
              <div className="mt-6 space-y-3">
                {question.options.map((option) => (
                  <button
                    key={option}
                    disabled={submitted}
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
          {!submitted && (
            <button
              onClick={handleQuizSubmit}
              className="mt-10 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Submit Assessment
            </button>
          )}
          {submitted && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="mt-10 rounded-3xl border border-slate-700 bg-slate-800 p-8 text-center"
            >
              <div className="text-6xl">
                {passed ? "🎉" : "📘"}
              </div>
              <h2
                className={`mt-5 text-3xl font-bold ${
                  passed
                    ? "text-emerald-400"
                    : "text-yellow-400"
                }`}
              >
                {passed
                  ? "Course Completed"
                  : "Assessment Finished"}
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                Your Score
              </p>
              <h3 className="mt-2 text-5xl font-black">
                {score} / {totalQuestions}
              </h3>
              {passed ? (
                <div className="mt-8 rounded-2xl border border-emerald-500 bg-emerald-500/10 p-6">
                  <CheckCircle2
                    className="mx-auto text-emerald-400"
                    size={42}
                  />
                  <h3 className="mt-4 text-2xl font-bold text-emerald-400">
                    Certificate Unlocked
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Congratulations! You successfully completed
                    <span className="font-semibold text-white">
                      {" "}
                      {course.title}
                    </span>
                    .
                  </p>
                 <p className="mt-2 text-slate-400">
  Congratulations! Your certificate is ready.
</p>

<button
  onClick={() => setShowPopup(true)}
  className="mt-6 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
>
  Download Certificate
</button>


                </div>
              ) : (
                <div className="mt-8 rounded-2xl border border-yellow-500 bg-yellow-500/10 p-6">
                  <Lock
                    className="mx-auto text-yellow-400"
                    size={40}
                  />
                  <h3 className="mt-4 text-2xl font-bold text-yellow-400">
                    Certificate Locked
                  </h3>
                  <p className="mt-3 text-slate-300">
                    You need a perfect score to unlock the
                    certificate.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setAnswers({});
                    }}
                    className="mt-6 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:opacity-90"
                  >
                    Retry Quiz
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </motion.section>

        {/* FOOTER */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/academy"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            <ArrowLeft size={18} />
            Back to Cyber Academy
          </Link>
        </div>
      </div>
      {showPopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
    <div className="w-full max-w-md rounded-3xl bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white">
        Download Certificate
      </h2>

      <p className="mt-3 text-slate-400">
        Enter your full name exactly as you want it to appear on your certificate.
      </p>

      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Full Name"
        className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-cyan-500"
      />

      <div className="mt-8 flex gap-4">

        <button
          onClick={() => setShowPopup(false)}
          className="flex-1 rounded-xl bg-slate-700 py-3 text-white"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            if (!studentName.trim()) {
              alert("Please enter your full name.");
              return;
            }

            generateCertificate({
              name: studentName,
              completion: 100,
              quizzes: `${score}/${totalQuestions}`,
              lessons: course.lessons,
            });

            setShowPopup(false);
          }}
          className="flex-1 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 py-3 font-semibold text-black"
        >
          Download
        </button>

      </div>
    </div>
  </div>
)}
    </main>
  );
}