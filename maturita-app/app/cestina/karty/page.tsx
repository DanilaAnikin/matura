"use client";

import { books } from "@/data/books";
import { useEffect, useState } from "react";
import { recordCardView, setDifficulty, loadProgress } from "@/lib/storage";
import type { Progress } from "@/lib/types";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Flashcards() {
  const [order, setOrder] = useState(books);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [progress, setProgress] = useState<Record<string, Progress>>({});

  useEffect(() => {
    setOrder(shuffle(books));
    setProgress(loadProgress());
  }, []);

  const book = order[idx];
  if (!book) return null;

  function next(diff?: Progress["difficulty"]) {
    if (diff) setDifficulty(book.id, diff);
    recordCardView(book.id);
    setProgress(loadProgress());
    setFlipped(false);
    setTimeout(() => {
      setIdx((i) => (i + 1) % order.length);
    }, 200);
  }

  function reshuffle() {
    setOrder(shuffle(books));
    setIdx(0);
    setFlipped(false);
  }

  const myProgress = progress[book.id];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <div className="mb-6 flex justify-between items-center fade-in">
        <a href="/cestina" className="font-ui text-xs text-dust hover:text-burgundy">
          ← Zpět
        </a>
        <span className="font-ui text-xs text-dust">
          {idx + 1} / {order.length}
        </span>
        <button
          onClick={reshuffle}
          className="font-ui text-xs text-dust hover:text-burgundy"
        >
          ↻ Zamíchat
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-taupe/30 mb-8">
        <div
          className="h-full bg-burgundy transition-all"
          style={{ width: `${((idx + 1) / order.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div
        className={`flashcard mb-8 ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
        style={{ minHeight: 'min(480px, calc(100vh - 300px))' }}
      >
        <div className="flashcard-inner relative w-full" style={{ minHeight: 'min(480px, calc(100vh - 300px))' }}>
          {/* Front */}
          <div className="flashcard-face card p-6 sm:p-8 md:p-12 absolute inset-0 flex flex-col justify-center items-center text-center">
            <p className="book-number mb-4">{String(book.number).padStart(2, "0")}</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4">
              {book.title}
            </h2>
            <p className="font-display italic text-xl text-ink/60 mb-8">
              {book.author.name}
            </p>
            <div className="ornament inline-block font-ui text-xs uppercase tracking-widest text-dust">
              klikni pro odpověď
            </div>
            {myProgress && (
              <p className="absolute bottom-6 right-6 font-ui text-xs text-dust">
                viděno {myProgress.cardsViewed}×
              </p>
            )}
          </div>

          {/* Back */}
          <div className="flashcard-back card p-4 sm:p-6 md:p-8 lg:p-10 absolute inset-0 overflow-y-auto">
            <h3 className="font-display text-2xl font-medium mb-4">
              {book.title}
              <span className="font-display italic text-base text-ink/60 ml-3">
                ({book.author.name})
              </span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 font-ui text-sm mb-5">
              <div>
                <span className="text-dust">Doba: </span>
                {book.era}
              </div>
              <div>
                <span className="text-dust">Vyšlo: </span>
                {book.year}
              </div>
              <div className="sm:col-span-2">
                <span className="text-dust">Směr: </span>
                <span className="text-burgundy font-medium">{book.movement}</span>
              </div>
              <div>
                <span className="text-dust">Žánr: </span>
                {book.genre}
              </div>
              <div>
                <span className="text-dust">Forma: </span>
                {book.form}
              </div>
            </div>

            <div className="mb-4">
              <p className="font-ui text-xs uppercase tracking-wider text-dust mb-1.5">
                Děj
              </p>
              <p className="text-sm leading-relaxed">{book.plot}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-sm mb-4">
              <div>
                <p className="font-ui text-xs uppercase tracking-wider text-dust mb-1.5">
                  Postavy
                </p>
                <ul className="space-y-1">
                  {book.characters.slice(0, 4).map((c) => (
                    <li key={c.name}>
                      <span className="font-display italic text-burgundy">
                        {c.name}
                      </span>{" "}
                      <span className="text-ink/70">— {c.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-ui text-xs uppercase tracking-wider text-dust mb-1.5">
                  Témata
                </p>
                <p>{book.themes.join(", ")}</p>
                <p className="font-ui text-xs uppercase tracking-wider text-dust mt-3 mb-1.5">
                  Styl
                </p>
                <p className="leading-relaxed">{book.style}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-4">
        <button
          onClick={() => next("hard")}
          className="btn btn-ghost w-full sm:w-auto"
          style={{ borderColor: "#7A1F2E", color: "#7A1F2E" }}
        >
          Neumím — opakovat
        </button>
        <button onClick={() => next("medium")} className="btn btn-ghost w-full sm:w-auto">
          Trochu
        </button>
        <button
          onClick={() => next("easy")}
          className="btn w-full sm:w-auto"
          style={{ background: "#5A7A3F", borderColor: "#5A7A3F" }}
        >
          Umím dobře ✓
        </button>
      </div>

      <p className="text-center font-ui text-xs text-dust">
        <a href={`/cestina/knihy/${book.id}`} className="hover:text-burgundy">
          Otevřít detail knihy →
        </a>
      </p>
    </div>
  );
}
