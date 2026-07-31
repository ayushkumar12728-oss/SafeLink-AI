import { createContext, useContext, useEffect, useState } from "react";

const AcademyContext = createContext();

const defaultProgress = {
  completedLessons: 18,
  totalLessons: 40,
  completedQuizzes: 0,
  totalQuizzes: 20,
  completedLabs: 3,
  totalLabs: 8,
};

const defaultBadges = [
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

export function AcademyProvider({ children }) {
  const [progress, setProgress] = useState(defaultProgress);
  const [badges, setBadges] = useState(defaultBadges);

  useEffect(() => {
    const p = localStorage.getItem("academyProgress");
    const b = localStorage.getItem("academyBadges");

    if (p) setProgress(JSON.parse(p));
    if (b) setBadges(JSON.parse(b));
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "academyProgress",
      JSON.stringify(progress)
    );

    localStorage.setItem(
      "academyBadges",
      JSON.stringify(badges)
    );
  }, [progress, badges]);

  const completeQuiz = () => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        completedQuizzes: Math.min(
          prev.completedQuizzes + 1,
          prev.totalQuizzes
        ),
      };

      setBadges((old) =>
        old.map((badge, index) => {
          if (index === 2 && updated.completedQuizzes >= 5)
            return { ...badge, unlocked: true };

          if (index === 3 && updated.completedQuizzes >= 10)
            return { ...badge, unlocked: true };

          return badge;
        })
      );

      return updated;
    });
  };

  const completeLesson = () => {
    setProgress((prev) => ({
      ...prev,
      completedLessons: Math.min(
        prev.completedLessons + 1,
        prev.totalLessons
      ),
    }));
  };

  const completeLab = () => {
    setProgress((prev) => ({
      ...prev,
      completedLabs: Math.min(
        prev.completedLabs + 1,
        prev.totalLabs
      ),
    }));
  };

  return (
    <AcademyContext.Provider
      value={{
        progress,
        badges,
        completeQuiz,
        completeLesson,
        completeLab,
      }}
    >
      {children}
    </AcademyContext.Provider>
  );
}

export const useAcademy = () => useContext(AcademyContext);