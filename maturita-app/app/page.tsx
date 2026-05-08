"use client";

import { useEffect, useState } from "react";

const EXAM_DATE = new Date("2026-05-18T08:00:00");

function daysUntil(date: Date): number {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function Home() {
  const [days, setDays] = useState(0);
  useEffect(() => {
    setDays(daysUntil(EXAM_DATE));
    const t = setInterval(() => setDays(daysUntil(EXAM_DATE)), 60_000);
    return () => clearInterval(t);
  }, []);

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
        <div className="ornament inline-block font-display italic text-dust mt-6">
          18. května 2026
        </div>
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
