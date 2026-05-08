"use client";

import { generateMixedQuestions } from "@/lib/quiz";
import { useEffect, useState } from "react";
import { recordQuizAnswer, loadProgress } from "@/lib/storage";
import type { QuizQuestion, Progress } from "@/lib/types";

export default function Kviz() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [progress, setProgress] = useState<Record<string, Progress>>({});

  useEffect(() => {
    setQuestions(generateMixedQuestions(20));
    setProgress(loadProgress());
  }, []);

  if (questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 text-center font-display text-xl text-dust">
        Načítám otázky…
      </div>
    );
  }

  const q = questions[idx];
  if (!q) return null;

  function selectAnswer(i: number) {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === q.correctIndex;
    recordQuizAnswer(q.bookId, correct);
    setScore((s) => ({
      correct: s.correct + (correct ? 1 : 0),
      total: s.total + 1,
    }));
    setProgress(loadProgress());
  }

  function nextQuestion() {
    setSelected(null);
    if (idx + 1 >= questions.length) {
      // Konec
      setQuestions(generateMixedQuestions(20));
      setIdx(0);
      setScore({ correct: 0, total: 0 });
    } else {
      setIdx(idx + 1);
    }
  }

  const typeLabel: Record<QuizQuestion["type"], string> = {
    author: "Autor",
    year: "Rok",
    movement: "Literární směr",
    character: "Postava",
    scene: "Scéna",
    theme: "Téma",
    genre: "Žánr",
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      {/* Header */}
      <div className="mb-6 flex justify-between items-baseline fade-in">
        <a href="/cestina" className="font-ui text-xs text-dust hover:text-burgundy">
          ← Zpět
        </a>
        <span className="font-ui text-xs text-dust">
          {idx + 1} / {questions.length}
        </span>
        <span className="font-ui text-sm">
          <span className="text-burgundy font-medium">{score.correct}</span>
          <span className="text-dust"> / </span>
          <span>{score.total}</span>
        </span>
      </div>

      {/* Progress */}
      <div className="h-1 bg-taupe/30 mb-12">
        <div
          className="h-full bg-burgundy transition-all"
          style={{ width: `${((idx + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-8 fade-in">
        <p className="font-ui text-xs uppercase tracking-[0.2em] text-gold mb-3">
          {typeLabel[q.type]}
        </p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium leading-snug mb-2">
          {q.prompt}
        </h2>
      </div>

      {/* Answers */}
      <div className="space-y-3 mb-8">
        {q.options.map((opt, i) => {
          let cls = "";
          if (selected !== null) {
            if (i === q.correctIndex) cls = "correct";
            else if (i === selected) cls = "incorrect";
          }
          return (
            <button
              key={i}
              onClick={() => selectAnswer(i)}
              disabled={selected !== null}
              className={`answer ${cls}`}
            >
              <span className="font-ui text-xs text-dust mr-3">
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Next button */}
      {selected !== null && (
        <div className="text-center fade-in">
          {selected === q.correctIndex ? (
            <p className="font-display italic text-xl text-burgundy mb-4">
              ✓ Správně
            </p>
          ) : (
            <p className="font-display italic text-xl text-burgundy mb-4">
              Správná odpověď: <strong>{q.options[q.correctIndex]}</strong>
            </p>
          )}
          <button onClick={nextQuestion} className="btn">
            {idx + 1 >= questions.length ? "Nový kvíz" : "Další otázka →"}
          </button>
        </div>
      )}
    </div>
  );
}
