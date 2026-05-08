"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_EXAM_DATE_VALUE,
  formatExamDate,
  getExamDate,
  loadExamDateValue,
  saveExamDateValue,
} from "@/lib/exam-date";

function daysUntil(date: Date): number {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function Home() {
  const [examDateValue, setExamDateValue] = useState(DEFAULT_EXAM_DATE_VALUE);
  const [draftDateValue, setDraftDateValue] = useState(DEFAULT_EXAM_DATE_VALUE);
  const [editingDate, setEditingDate] = useState(false);
  const [days, setDays] = useState(() => daysUntil(getExamDate(DEFAULT_EXAM_DATE_VALUE)));

  useEffect(() => {
    const storedDate = loadExamDateValue();
    setExamDateValue(storedDate);
    setDraftDateValue(storedDate);
  }, []);

  useEffect(() => {
    const examDate = getExamDate(examDateValue);

    setDays(daysUntil(examDate));
    const t = setInterval(() => setDays(daysUntil(examDate)), 60_000);
    return () => clearInterval(t);
  }, [examDateValue]);

  function saveDate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const savedDate = saveExamDateValue(draftDateValue);
    setExamDateValue(savedDate);
    setDraftDateValue(savedDate);
    setEditingDate(false);
  }

  function cancelDateEdit() {
    setDraftDateValue(examDateValue);
    setEditingDate(false);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16">
      {/* Hero */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20 fade-in">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-dust mb-4">
          Plán učení do zkoušky
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] mb-6">
          {days === 0 ? "Dnes je ten den" : days === 1 ? "Zítra" : `${days}`}
          <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-burgundy mt-3 italic">
            {days <= 1 ? "" : days < 5 ? `dní zbývá` : "dní do maturity"}
          </span>
        </h1>
        {editingDate ? (
          <form
            onSubmit={saveDate}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 font-ui"
          >
            <input
              type="date"
              value={draftDateValue}
              onChange={(event) => setDraftDateValue(event.target.value)}
              className="w-full max-w-[14rem] border border-taupe/70 bg-cream px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-burgundy"
              aria-label="Datum maturity"
              required
            />
            <div className="flex items-center gap-2">
              <button type="submit" className="btn text-sm px-4 py-2">
                Uložit
              </button>
              <button
                type="button"
                onClick={cancelDateEdit}
                className="btn btn-ghost text-sm px-4 py-2"
              >
                Zrušit
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="ornament inline-block font-display italic text-dust">
              {formatExamDate(examDateValue)}
            </div>
            <button
              type="button"
              onClick={() => setEditingDate(true)}
              className="inline-flex h-9 w-9 items-center justify-center text-dust transition-colors hover:text-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/40"
              aria-label="Upravit datum maturity"
              title="Upravit datum maturity"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Three modules */}
      <div className="grid md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        <a href="/cestina" className="card card-hover p-5 sm:p-6 md:p-8 group fade-in-delay-1">
          <div className="flex items-baseline justify-between mb-6">
            <span className="book-number text-sm">I.</span>
            <span className="font-ui text-xs text-dust uppercase tracking-wider">25 knih</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-medium mb-3">Čeština</h2>
          <p className="text-sm text-ink/70 leading-relaxed mb-6">
            Maturitní seznam četby. Karty, kvíz, identifikace scén. Jdeš podle plánu od klasicismu po Havla.
          </p>
          <span className="font-ui text-sm text-burgundy group-hover:underline">
            Otevřít →
          </span>
        </a>

        <a href="/matika" className="card card-hover p-5 sm:p-6 md:p-8 group fade-in-delay-2">
          <div className="flex items-baseline justify-between mb-6">
            <span className="book-number text-sm">II.</span>
            <span className="font-ui text-xs text-dust uppercase tracking-wider">25 témat</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-medium mb-3">Matematika</h2>
          <p className="text-sm text-ink/70 leading-relaxed mb-6">
            Typové úlohy ze všech 25 témat s řešeními. U zkoušky tě čekají 4 příklady — ber to jako trénink.
          </p>
          <span className="font-ui text-sm text-burgundy group-hover:underline">
            Otevřít →
          </span>
        </a>

        <a href="/fyzika" className="card card-hover p-5 sm:p-6 md:p-8 group fade-in-delay-3">
          <div className="flex items-baseline justify-between mb-6">
            <span className="book-number text-sm">III.</span>
            <span className="font-ui text-xs text-dust uppercase tracking-wider">25 témat</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-medium mb-3">Fyzika</h2>
          <p className="text-sm text-ink/70 leading-relaxed mb-6">
            Klíčová slova, výklad a řešené příklady pro ústní zkoušku. Trénuj mluvení nahlas.
          </p>
          <span className="font-ui text-sm text-burgundy group-hover:underline">
            Otevřít →
          </span>
        </a>
      </div>

      {/* Quick advice */}
      <div className="mt-20 max-w-2xl mx-auto text-center fade-in-delay-3">
        <p className="font-display italic text-2xl text-ink/70 leading-relaxed">
          „První, co musíš zvládnout, je zvládnout svůj čas.&rdquo;
        </p>
        <p className="font-ui text-xs uppercase tracking-widest text-dust mt-4">
          — pravidlo studujícího —
        </p>
      </div>
    </div>
  );
}
