import { createContext, useContext, useState } from "react";

const AcademyContext = createContext();

const defaultProgress = {
  completedLessons: 18,
  totalLessons: 40,
  completedQuizzes: 7,
  totalQuizzes: 20,
  completedLabs: 3,
  totalLabs: 8,
};

export function AcademyProvider({ children }) {
  const [progress, setProgress] = useState(defaultProgress);

  return (
    <AcademyContext.Provider
      value={{
        progress,
        setProgress,
      }}
    >
      {children}
    </AcademyContext.Provider>
  );
}

export function useAcademy() {
  return useContext(AcademyContext);
}