import { books, getBookBySlug } from "@/data/books";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.id }));
}

export default function BookDetail({ params }: { params: { slug: string } }) {
  const book = getBookBySlug(params.slug);
  if (!book) notFound();

  // Pre/next navigation
  const idx = books.findIndex((b) => b.id === book.id);
  const prev = books[idx - 1];
  const next = books[idx + 1];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <div className="mb-8 fade-in">
        <a href="/cestina/knihy" className="font-ui text-xs text-dust hover:text-burgundy">
          ← Zpět na seznam
        </a>
      </div>

      {/* Header */}
      <header className="mb-12 pb-8 border-b border-taupe/40 fade-in">
        <p className="book-number text-base mb-2">
          {String(book.number).padStart(2, "0")}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] mb-4">
          {book.title}
        </h1>
        {book.titleOriginal && (
          <p className="font-display italic text-2xl text-ink/60 mb-6">
            {book.titleOriginal}
          </p>
        )}
        <div className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 font-ui text-sm">
          <span>
            <span className="text-dust">Autor:</span>{" "}
            <strong>{book.author.name}</strong>
          </span>
          <span>
            <span className="text-dust">Národnost:</span> {book.author.nationality}
          </span>
          <span>
            <span className="text-dust">Léta:</span> {book.author.lifespan}
          </span>
          <span>
            <span className="text-dust">Vyšlo:</span> {book.year}
          </span>
        </div>
      </header>

      {/* Eight key fields */}
      <div className="grid sm:grid-cols-2 gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-10 mb-16">
        <Field label="Doba vzniku" value={book.era} />
        <Field label="Literární směr" value={book.movement} accent />
        <Field label="Žánr" value={book.genre} />
        <Field label="Forma" value={book.form} />
      </div>

      {/* Plot */}
      <Section title="Děj">
        <p className="leading-[1.75] drop-cap">{book.plot}</p>
      </Section>

      {/* Characters */}
      <Section title="Hlavní postavy">
        <ul className="space-y-3">
          {book.characters.map((c) => (
            <li key={c.name} className="flex flex-col sm:flex-row gap-1 sm:gap-4 sm:items-baseline">
              <span className="font-display italic text-burgundy text-lg shrink-0 sm:min-w-[140px]">
                {c.name}
              </span>
              <span className="text-ink/80">{c.description}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Themes */}
      <Section title="Témata a motivy">
        <div className="flex flex-wrap gap-2 font-ui text-sm">
          {book.themes.map((t) => (
            <span key={t} className="px-3 py-1.5 bg-taupe/30 border border-taupe/60">
              {t}
            </span>
          ))}
        </div>
      </Section>

      {/* Style */}
      <Section title="Jazyk, styl, kompozice">
        <p className="leading-[1.75]">{book.style}</p>
      </Section>

      {/* Recognition hints */}
      <Section title="Jak rozpoznat ukázku">
        <ul className="space-y-2">
          {book.recognitionHints.map((hint, i) => (
            <li key={i} className="flex gap-3 items-baseline">
              <span className="text-burgundy font-display">•</span>
              <span className="font-display italic text-lg">{hint}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Scenes */}
      <Section title="Charakteristické scény">
        <ol className="space-y-4 list-decimal list-inside marker:text-burgundy marker:font-display marker:italic">
          {book.scenes.map((s, i) => (
            <li key={i} className="leading-[1.75]">
              {s}
            </li>
          ))}
        </ol>
      </Section>

      {book.trivia && (
        <Section title="Zajímavost">
          <p className="leading-[1.75] italic text-ink/80">{book.trivia}</p>
        </Section>
      )}

      {/* Navigation */}
      <div className="mt-20 pt-8 border-t border-taupe/40 flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 font-ui text-sm">
        {prev ? (
          <a href={`/cestina/knihy/${prev.id}`} className="hover:text-burgundy group">
            <span className="block text-xs text-dust mb-1">← Předchozí</span>
            <span className="font-display text-lg">{prev.title}</span>
          </a>
        ) : (
          <div />
        )}
        {next ? (
          <a
            href={`/cestina/knihy/${next.id}`}
            className="hover:text-burgundy sm:text-right group"
          >
            <span className="block text-xs text-dust mb-1">Následující →</span>
            <span className="font-display text-lg">{next.title}</span>
          </a>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p className="font-ui text-xs uppercase tracking-[0.2em] text-dust mb-1.5">
        {label}
      </p>
      <p
        className={`font-display text-2xl leading-tight ${
          accent ? "text-burgundy" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="font-display text-2xl sm:text-3xl font-medium mb-5 flex items-center gap-4">
        <span className="text-gold">§</span>
        {title}
      </h2>
      <div className="text-base leading-relaxed">{children}</div>
    </section>
  );
}
