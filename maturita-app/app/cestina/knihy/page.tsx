"use client";

import { books } from "@/data/books";
import { useState } from "react";

export default function KnihyList() {
  const [filter, setFilter] = useState<string>("vse");
  const movements = Array.from(new Set(books.map((b) => b.movement)));

  const filtered =
    filter === "vse" ? books : books.filter((b) => b.movement === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <div className="mb-8 fade-in">
        <a href="/cestina" className="font-ui text-xs text-dust hover:text-burgundy">
          ← Zpět na češtinu
        </a>
        <h1 className="font-display text-4xl sm:text-5xl font-medium mt-3 mb-3">
          Všechny knihy
        </h1>
        <p className="text-ink/70">
          {filtered.length} {filtered.length === 1 ? "kniha" : filtered.length < 5 ? "knihy" : "knih"} ze seznamu.
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
          Vše ({books.length})
        </button>
        {movements.map((m) => {
          const count = books.filter((b) => b.movement === m).length;
          return (
            <button
              key={m}
              onClick={() => setFilter(m)}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 border transition-all ${
                filter === m
                  ? "border-ink bg-ink text-paper"
                  : "border-taupe/60 hover:border-ink"
              }`}
            >
              {m} ({count})
            </button>
          );
        })}
      </div>

      {/* Books grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filtered.map((book, i) => (
          <a
            key={book.id}
            href={`/cestina/knihy/${book.id}`}
            className="card card-hover p-4 sm:p-5 md:p-6 block group"
            style={{ animationDelay: `${i * 30}ms` }}
          >
            <div className="flex items-baseline justify-between mb-3">
              <span className="book-number">{String(book.number).padStart(2, "0")}</span>
              <span className="font-ui text-xs text-dust">{book.year}</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl leading-tight mb-2 group-hover:text-burgundy transition-colors">
              {book.title}
            </h3>
            <p className="text-sm text-ink/60 mb-3">{book.author.name}</p>
            <div className="flex flex-wrap gap-1.5 font-ui text-xs">
              <span className="px-2 py-0.5 bg-taupe/30 text-ink/70">
                {book.movement}
              </span>
              <span className="px-2 py-0.5 bg-taupe/30 text-ink/70">
                {book.genre}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
