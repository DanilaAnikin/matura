"use client";

import { physicsTopics, PhysicsTopic, PhysicsExample } from "@/data/physics-topics";
import { useEffect, useState } from "react";

const categoryNames: Record<PhysicsTopic["category"], string> = {
  mechanics: "Mechanika",
  thermo: "Termo & molekuly",
  electricity: "Elektřina",
  magnetism: "Magnetismus",
  optics: "Optika",
  modern: "Moderní fyzika",
};

const categoryColors: Record<PhysicsTopic["category"], string> = {
  mechanics: "bg-burgundy/10 text-burgundy",
  thermo: "bg-gold/15 text-gold",
  electricity: "bg-ink/10 text-ink",
  magnetism: "bg-taupe/40 text-ink/70",
  optics: "bg-burgundy/15 text-burgundy",
  modern: "bg-gold/20 text-gold",
};

export default function FyzikaPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("vse");
  const [simMode, setSimMode] = useState(false);

  const cats = Array.from(new Set(physicsTopics.map((t) => t.category)));
  const filtered =
    filter === "vse"
      ? physicsTopics
      : physicsTopics.filter((t) => t.category === filter);

  if (simMode) {
    return <UstniSimulace onExit={() => setSimMode(false)} />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <div className="mb-12 fade-in">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-dust mb-3">
          Modul III.
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-4">Fyzika</h1>
        <p className="text-lg text-ink/70 max-w-2xl leading-relaxed">
          25 témat pro ústní zkoušku. Klíčová slova, výklad, vzorce, řešený příklad. U zkoušky budeš mluvit ~15 min — trénuj <strong>nahlas</strong>.
        </p>
      </div>

      {/* Action: ústní simulace */}
      <div className="mb-8 card p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl sm:text-2xl mb-1">Ústní simulace</h2>
          <p className="text-sm text-ink/70">
            Náhodně se vylosuje téma a spustí se 15minutový časovač. Mluv nahlas, jako u zkoušky.
          </p>
        </div>
        <button onClick={() => setSimMode(true)} className="btn w-full sm:w-auto">
          Spustit simulaci →
        </button>
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
          Vše ({physicsTopics.length})
        </button>
        {cats.map((c) => {
          const count = physicsTopics.filter((t) => t.category === c).length;
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
          <PhysicsTopicItem
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

function PhysicsTopicItem({
  topic,
  isOpen,
  onToggle,
}: {
  topic: PhysicsTopic;
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
        <span className="font-display text-xl text-burgundy ml-2">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="px-3 sm:px-4 md:px-5 pb-5 sm:pb-6 border-t border-taupe/30 pt-4 sm:pt-5 fade-in">
          {/* Keywords */}
          <h3 className="font-ui text-xs uppercase tracking-wider text-dust mb-2">
            Klíčová slova (musíš znát)
          </h3>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {topic.keywords.map((k, i) => (
              <span
                key={i}
                className="font-ui text-xs px-2.5 py-1 bg-taupe/30 border border-taupe/60"
              >
                {k}
              </span>
            ))}
          </div>

          {/* Explanation */}
          <h3 className="font-ui text-xs uppercase tracking-wider text-dust mb-2">
            Výklad
          </h3>
          <p className="leading-relaxed mb-6">{topic.explanation}</p>

          {/* Formulas */}
          {topic.formulas.length > 0 && (
            <>
              <h3 className="font-ui text-xs uppercase tracking-wider text-dust mb-2">
                Vzorce
              </h3>
              <div className="bg-paper p-4 mb-6 font-ui text-sm space-y-1.5">
                {topic.formulas.map((f, i) => (
                  <div key={i}>{f}</div>
                ))}
              </div>
            </>
          )}

          {/* Examples */}
          <h3 className="font-ui text-xs uppercase tracking-wider text-dust mb-2">
            Řešené příklady
          </h3>
          <div className="space-y-3">
            {topic.examples.map((ex, i) => (
              <PhysicsExampleItem key={i} example={ex} index={i + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PhysicsExampleItem({
  example,
  index,
}: {
  example: PhysicsExample;
  index: number;
}) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="bg-paper p-3 sm:p-4 border border-taupe/30">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-display italic text-burgundy">{index}.</span>
        <p className="flex-1 leading-relaxed">{example.prompt}</p>
      </div>
      <button
        onClick={() => setShowSolution(!showSolution)}
        className="font-ui text-xs text-burgundy hover:underline ml-7"
      >
        {showSolution ? "Skrýt řešení" : "Zobrazit řešení"}
      </button>
      {showSolution && (
        <div className="mt-3 ml-7 pl-3 border-l-2 border-gold fade-in">
          <p className="leading-relaxed text-sm">{example.solution}</p>
        </div>
      )}
    </div>
  );
}

// Ústní simulace - 15minutový časovač + náhodné téma
function UstniSimulace({ onExit }: { onExit: () => void }) {
  const [topic] = useState(
    physicsTopics[Math.floor(Math.random() * physicsTopics.length)]
  );
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);
  const [running, setRunning] = useState(false);
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(t);
  }, [running]);

  const min = Math.floor(secondsLeft / 60);
  const sec = secondsLeft % 60;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <button
        onClick={onExit}
        className="font-ui text-xs text-dust hover:text-burgundy mb-6"
      >
        ← Zpět na fyziku
      </button>

      <div className="text-center mb-12 fade-in">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-dust mb-3">
          Vylosované téma
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-2 leading-tight">
          {topic.name}
        </h1>
        <p className="font-display italic text-xl text-ink/60">
          téma č. {topic.number}
        </p>
      </div>

      {/* Timer */}
      <div className="card p-6 sm:p-8 md:p-10 text-center mb-8">
        <p className="font-ui text-xs uppercase tracking-wider text-dust mb-3">
          Zbývá
        </p>
        <p
          className={`font-display text-6xl sm:text-7xl md:text-8xl font-medium tabular-nums ${
            secondsLeft < 60 ? "text-burgundy" : ""
          }`}
        >
          {String(min).padStart(2, "0")}:{String(sec).padStart(2, "0")}
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mt-6">
          {!running ? (
            <button onClick={() => setRunning(true)} className="btn w-full sm:w-auto">
              Spustit & začít mluvit
            </button>
          ) : (
            <button
              onClick={() => setRunning(false)}
              className="btn btn-ghost w-full sm:w-auto"
            >
              Pozastavit
            </button>
          )}
          <button
            onClick={() => {
              setSecondsLeft(15 * 60);
              setRunning(false);
            }}
            className="btn btn-ghost w-full sm:w-auto"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Hint button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowHints(!showHints)}
          className="font-ui text-sm text-burgundy hover:underline"
        >
          {showHints ? "Schovat klíčová slova" : "Zaseknul jsem se — ukaž klíčová slova"}
        </button>
      </div>

      {showHints && (
        <div className="card p-4 sm:p-5 md:p-6 fade-in">
          <h3 className="font-ui text-xs uppercase tracking-wider text-dust mb-3">
            Co o tématu zmínit
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {topic.keywords.map((k, i) => (
              <span
                key={i}
                className="font-ui text-xs px-2.5 py-1 bg-taupe/30 border border-taupe/60"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      )}

      <p className="text-center text-sm text-ink/60 mt-8 italic font-display">
        Mluv nahlas. Vážně. I když jsi sám v pokoji. Naslouchání je rozdíl mezi „umím to“ a „umím to říct“.
      </p>
    </div>
  );
}
