export type Book = {
  id: string;
  number: number;
  title: string;
  titleOriginal?: string;
  author: {
    name: string;
    nationality: string;
    lifespan: string;
  };
  year: string;
  era: string;
  movement: string;
  genre: string;
  form: string;
  plot: string;
  characters: { name: string; description: string }[];
  themes: string[];
  style: string;
  recognitionHints: string[];
  scenes: string[];
  trivia?: string;
};

export type QuizQuestion = {
  id: string;
  type: "author" | "year" | "movement" | "character" | "scene" | "theme" | "genre";
  prompt: string;
  options: string[];
  correctIndex: number;
  bookId: string;
};

export type Progress = {
  bookId: string;
  cardsViewed: number;
  quizCorrect: number;
  quizTotal: number;
  lastSeen: number;
  difficulty: "easy" | "medium" | "hard" | "unknown";
};
