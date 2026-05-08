import { Book, QuizQuestion } from "./types";
import { books } from "@/data/books";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickWrong<T>(correct: T, pool: T[], n: number): T[] {
  const candidates = pool.filter((x) => x !== correct);
  return shuffle(candidates).slice(0, n);
}

export function generateQuestionsForBook(book: Book, count = 6): QuizQuestion[] {
  const qs: QuizQuestion[] = [];

  // 1. Autor díla
  const authors = books.map((b) => b.author.name);
  qs.push({
    id: `${book.id}-author`,
    type: "author",
    prompt: `Kdo napsal dílo „${book.title}"?`,
    options: shuffle([book.author.name, ...pickWrong(book.author.name, authors, 3)]),
    correctIndex: -1,
    bookId: book.id,
  });

  // 2. Literární směr
  const movements = Array.from(new Set(books.map((b) => b.movement)));
  qs.push({
    id: `${book.id}-movement`,
    type: "movement",
    prompt: `Do kterého literárního směru patří dílo „${book.title}"?`,
    options: shuffle([book.movement, ...pickWrong(book.movement, movements, 3)]),
    correctIndex: -1,
    bookId: book.id,
  });

  // 3. Žánr
  const genres = Array.from(new Set(books.map((b) => b.genre)));
  qs.push({
    id: `${book.id}-genre`,
    type: "genre",
    prompt: `Jakého žánru je dílo „${book.title}"?`,
    options: shuffle([book.genre, ...pickWrong(book.genre, genres, 3)]),
    correctIndex: -1,
    bookId: book.id,
  });

  // 4. Hlavní postava
  if (book.characters[0]) {
    const mainChar = book.characters[0].name;
    const otherChars = books
      .flatMap((b) => b.characters.map((c) => c.name))
      .filter((c) => c !== mainChar);
    qs.push({
      id: `${book.id}-character`,
      type: "character",
      prompt: `Která postava je hlavní v díle „${book.title}"?`,
      options: shuffle([mainChar, ...pickWrong(mainChar, otherChars, 3)]),
      correctIndex: -1,
      bookId: book.id,
    });
  }

  // 5. Scéna -> kniha
  if (book.scenes[0]) {
    const otherTitles = books.map((b) => b.title).filter((t) => t !== book.title);
    qs.push({
      id: `${book.id}-scene`,
      type: "scene",
      prompt: `Z které knihy je tato scéna: „${book.scenes[0]}"`,
      options: shuffle([book.title, ...pickWrong(book.title, otherTitles, 3)]),
      correctIndex: -1,
      bookId: book.id,
    });
  }

  // 6. Téma
  if (book.themes[0]) {
    const topic = `${book.themes.slice(0, 2).join(", ")}`;
    const otherTopics = books
      .filter((b) => b.id !== book.id)
      .map((b) => b.themes.slice(0, 2).join(", "));
    qs.push({
      id: `${book.id}-theme`,
      type: "theme",
      prompt: `Které z těchto témat je ústřední v díle „${book.title}"?`,
      options: shuffle([topic, ...pickWrong(topic, otherTopics, 3)]),
      correctIndex: -1,
      bookId: book.id,
    });
  }

  // Doplň correctIndex
  qs.forEach((q) => {
    const correctValue = (() => {
      if (q.type === "author") return book.author.name;
      if (q.type === "movement") return book.movement;
      if (q.type === "genre") return book.genre;
      if (q.type === "character") return book.characters[0].name;
      if (q.type === "scene") return book.title;
      if (q.type === "theme") return `${book.themes.slice(0, 2).join(", ")}`;
      return "";
    })();
    q.correctIndex = q.options.indexOf(correctValue);
  });

  return shuffle(qs).slice(0, count);
}

export function generateMixedQuestions(count = 20): QuizQuestion[] {
  const all = books.flatMap((b) => generateQuestionsForBook(b, 3));
  return shuffle(all).slice(0, count);
}
