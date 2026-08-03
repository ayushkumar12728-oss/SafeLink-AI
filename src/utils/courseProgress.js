const STORAGE_KEY = "safeLinkCourseProgress";

export function getCourseProgress() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
}

export function getProgress(slug) {
  const progress = getCourseProgress();

  return (
    progress[slug] || {
      completed: false,
      certificateUnlocked: false,
      score: 0,
      totalQuestions: 0,
      completedAt: null,
    }
  );
}

export function completeCourse(
  slug,
  score,
  totalQuestions
) {
  const progress = getCourseProgress();

  progress[slug] = {
    completed: true,
    certificateUnlocked: true,
    score,
    totalQuestions,
    completedAt: new Date().toISOString(),
  };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(progress)
  );
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}