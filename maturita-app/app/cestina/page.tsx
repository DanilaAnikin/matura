"use client";

import { books } from "@/data/books";

export default function CestinaHome() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <div className="mb-12 fade-in">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-dust mb-3">
          Modul I.
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-4">Čeština</h1>
        <p className="text-lg text-ink/70 max-w-2xl leading-relaxed">
          Tvůj seznam četby — {books.length} knih. Pro každou karty se 8 údaji, kvíz s otázkami a identifikace charakteristických scén.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-16">
        <a href="/cestina/knihy" className="card card-hover p-5 sm:p-6 md:p-8 fade-in-delay-1">
          <p className="book-number mb-2">α</p>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">Knihy — přehled</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            Všech {books.length} knih s detailem (autor, doba, žánr, postavy, témata, scény, jazyk).
          </p>
        </a>

        <a href="/cestina/karty" className="card card-hover p-5 sm:p-6 md:p-8 fade-in-delay-2">
          <p className="book-number mb-2">β</p>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">Karty (flashcards)</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            Klikni na kartu — otočí se. Otestuj, jestli si vybavíš všech 8 údajů zpaměti.
          </p>
        </a>

        <a href="/cestina/kviz" className="card card-hover p-5 sm:p-6 md:p-8 fade-in-delay-2">
          <p className="book-number mb-2">γ</p>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">Kvíz — výběr ze 4</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            Náhodné otázky napříč knihami: kdo napsal, který směr, která postava, z jaké knihy je tato scéna.
          </p>
        </a>

        <a href="/cestina/kviz?mode=scenes" className="card card-hover p-5 sm:p-6 md:p-8 fade-in-delay-3">
          <p className="book-number mb-2">δ</p>
          <h2 className="font-display text-2xl sm:text-3xl mb-3">Identifikace scén</h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            Dostaneš popis charakteristické situace z knihy. Tvůj úkol: poznat, ze které.
          </p>
        </a>
      </div>

      {/* Tip */}
      <div className="card p-4 sm:p-5 md:p-6 max-w-3xl mx-auto fade-in-delay-3">
        <p className="font-ui text-xs uppercase tracking-wider text-dust mb-2">Tip</p>
        <p className="text-sm leading-relaxed">
          Začni přehledem knih, projdi si všech 8 polí pro každou. Pak přejdi na karty (test paměti). Kvíz si schovej na konec — když ti něco nepůjde, vrať se zpět k detailu.
        </p>
      </div>
    </div>
  );
}
