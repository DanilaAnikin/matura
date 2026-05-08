"use client";

import { mathTopics, MathTopic, MathProblem } from "@/data/math-topics";
import { useState } from "react";

const categoryNames: Record<MathTopic["category"], string> = {
  algebra: "Algebra",
  analysis: "Analýza",
  geometry: "Geometrie",
  discrete: "Diskrétní mat.",
};

const categoryColors: Record<MathTopic["category"], string> = {
  algebra: "bg-burgundy/10 text-burgundy",
  analysis: "bg-gold/15 text-gold",
  geometry: "bg-taupe/40 text-ink/70",
  discrete: "bg-ink/10 text-ink",
};

export default function MatikaPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("vse");

  const cats = Array.from(new Set(mathTopics.map((t) => t.category)));
  const filtered =
    filter === "vse" ? mathTopics : mathTopics.filter((t) => t.category === filter);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <div className="mb-12 fade-in">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-dust mb-3">
          Modul II.
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-4">Matematika</h1>
        <p className="text-lg text-ink/70 max-w-2xl leading-relaxed">
          25 témat s typovými úlohami. U zkoušky tě čekají 4 příklady — projdi všech 25 témat, klikni na úlohu, pokus se ji vyřešit a pak si zobraz řešení.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8 flex flex-wrap gap-1.5 sm:gap-2 font-ui text-xs">
        <button
          onClick={() => setFilter("vse")}
          className={`px-2 sm:px-3 py-1 sm:py-1.5 border transition-all ${
            filter === "vse"
              ? "border-ink bg-ink text-paper"
              : "border-taupe/60 hover:border-ink"
          }`}
        >
          Vše ({mathTopics.length})
        </button>
        {cats.map((c) => {
          const count = mathTopics.filter((t) => t.category === c).length;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 border transition-all ${
                filter === c
                  ? "border-ink bg-ink text-paper"
                  : "border-taupe/60 hover:border-ink"
              }`}
            >
              {categoryNames[c]} ({count})
            </button>
          );
        })}
      </div>

      {/* Topics list */}
      <div className="space-y-2">
        {filtered.map((topic) => (
          <TopicItem
            key={topic.id}
            topic={topic}
            isOpen={openId === topic.id}
            onToggle={() => setOpenId(openId === topic.id ? null : topic.id)}
          />
        ))}
      </div>
    </div>
  );
}

function TopicItem({
  topic,
  isOpen,
  onToggle,
}: {
  topic: MathTopic;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="card">
      <button
        onClick={onToggle}
        className="w-full text-left p-3 sm:p-4 md:p-5 flex items-baseline gap-2 sm:gap-3 md:gap-4 hover:bg-taupe/10 transition-colors"
      >
        <span className="book-number text-sm shrink-0 min-w-[2rem]">
          {String(topic.number).padStart(2, "0")}
        </span>
        <span className="font-display text-lg sm:text-xl md:text-2xl flex-1">{topic.name}</span>
        <span
          className={`font-ui text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 ${categoryColors[topic.category]}`}
        >
          {categoryNames[topic.category]}
        </span>
        <span className="font-ui text-xs text-dust ml-2">
          {topic.problems.length} úl.
        </span>
        <span className="font-display text-xl text-burgundy ml-2">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="px-3 sm:px-4 md:px-5 pb-5 sm:pb-6 border-t border-taupe/30 pt-4 sm:pt-5 fade-in">
          {/* Theory */}
          <h3 className="font-ui text-xs uppercase tracking-wider text-dust mb-2">
            Teorie
          </h3>
          <ul className="list-disc list-inside mb-5 space-y-1 marker:text-burgundy">
            {topic.theory.map((t, i) => (
              <li key={i} className="leading-relaxed">
                {t}
              </li>
            ))}
          </ul>

          {/* Formulas */}
          {topic.formulas.length > 0 && (
            <>
              <h3 className="font-ui text-xs uppercase tracking-wider text-dust mb-2">
                Klíčové vzorce
              </h3>
              <div className="bg-paper p-4 mb-6 font-ui text-sm space-y-1.5">
                {topic.formulas.map((f, i) => (
                  <div key={i}>{f}</div>
                ))}
              </div>
            </>
          )}

          {/* Problems */}
          <h3 className="font-ui text-xs uppercase tracking-wider text-dust mb-2">
            Cvičné úlohy
          </h3>
          <div className="space-y-3">
            {topic.problems.map((p, i) => (
              <ProblemItem key={i} problem={p} index={i + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProblemItem({ problem, index }: { problem: MathProblem; index: number }) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="bg-paper p-3 sm:p-4 border border-taupe/30">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-display italic text-burgundy">{index}.</span>
        <p className="flex-1 leading-relaxed">{problem.prompt}</p>
        {problem.difficulty && (
          <span className="font-ui text-xs text-dust">
            {problem.difficulty === "easy"
              ? "snadná"
              : problem.difficulty === "medium"
              ? "střední"
              : "obtížná"}
          </span>
        )}
      </div>
      <button
        onClick={() => setShowSolution(!showSolution)}
        className="font-ui text-xs text-burgundy hover:underline ml-7"
      >
        {showSolution ? "Skrýt řešení" : "Zobrazit řešení"}
      </button>
      {showSolution && (
        <div className="mt-3 ml-7 pl-3 border-l-2 border-gold fade-in">
          <p className="leading-relaxed text-sm">{problem.solution}</p>
        </div>
      )}
    </div>
  );
}
