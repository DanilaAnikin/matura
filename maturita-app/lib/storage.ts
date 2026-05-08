"use client";

import { Progress } from "./types";

const KEY = "maturita-progress";

export function loadProgress(): Record<string, Progress> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function saveProgress(p: Record<string, Progress>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function recordCardView(bookId: string) {
  const all = loadProgress();
  const cur = all[bookId] || {
    bookId,
    cardsViewed: 0,
    quizCorrect: 0,
    quizTotal: 0,
    lastSeen: 0,
    difficulty: "unknown" as const,
  };
  cur.cardsViewed += 1;
  cur.lastSeen = Date.now();
  all[bookId] = cur;
  saveProgress(all);
}

export function recordQuizAnswer(bookId: string, correct: boolean) {
  const all = loadProgress();
  const cur = all[bookId] || {
    bookId,
    cardsViewed: 0,
    quizCorrect: 0,
    quizTotal: 0,
    lastSeen: 0,
    difficulty: "unknown" as const,
  };
  cur.quizTotal += 1;
  if (correct) cur.quizCorrect += 1;
  cur.lastSeen = Date.now();
  // jednoduchý difficulty rating
  const rate = cur.quizCorrect / cur.quizTotal;
  if (cur.quizTotal >= 3) {
    if (rate >= 0.85) cur.difficulty = "easy";
    else if (rate >= 0.5) cur.difficulty = "medium";
    else cur.difficulty = "hard";
  }
  all[bookId] = cur;
  saveProgress(all);
}

export function setDifficulty(bookId: string, d: Progress["difficulty"]) {
  const all = loadProgress();
  const cur = all[bookId] || {
    bookId,
    cardsViewed: 0,
    quizCorrect: 0,
    quizTotal: 0,
    lastSeen: 0,
    difficulty: "unknown" as const,
  };
  cur.difficulty = d;
  all[bookId] = cur;
  saveProgress(all);
}

export function clearProgress() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
