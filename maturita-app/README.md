# Maturita 2026 — procvičovací aplikace

Procvičování pro maturitu z **češtiny, matematiky a fyziky** — 18.5.2026.

---

## Co aplikace umí

### 📚 Čeština (25 knih)
- **Přehled knih** — všech 25 s plným detailem (autor, doba, žánr, postavy, témata, scény, jazyk)
- **Karty (flashcards)** — otáčecí karty s 8 poli pro rychlé opakování
- **Kvíz** — multiple choice na autora, směr, postavu, scénu, žánr, téma
- **Filtrování** podle literárního směru

### 🔢 Matematika (25 témat)
- Teorie + klíčové vzorce u každého tématu
- 2–3 typové úlohy s řešením
- Filtr: algebra / analýza / geometrie / diskrétní

### ⚛️ Fyzika (25 témat — pro ústní)
- Klíčová slova (musíš znát)
- Stručný výklad + vzorce
- Řešený příklad
- **Ústní simulace** — náhodné téma + 10minutový časovač + možnost odhalit klíčová slova

---

## Spuštění (jednou na začátku)

### 1. Nainstaluj Node.js
Pokud ještě nemáš:
- https://nodejs.org/cs (verze 18 nebo vyšší, stačí "LTS")
- Po instalaci ověř v terminálu: `node --version`

### 2. Instaluj balíčky
V terminálu otevři složku s aplikací a spusť:
```bash
npm install
```
(Trvá ~30 sekund, instalují se Next.js, React, TypeScript, Tailwind.)

### 3. Spusť aplikaci
```bash
npm run dev
```

### 4. Otevři v prohlížeči
http://localhost:3000

---

## Použití během dne učení

1. **Ráno** — projdi 2–3 nové knihy v přehledu (`/cestina/knihy`), přečti všech 8 polí
2. **Po snídani** — matika `/matika`, klikni na 2–3 témata, zkus si vyřešit úlohy a zkontroluj řešení
3. **Odpoledne** — fyzika `/fyzika`, vyber 2–3 témata, mluv nahlas (i sám sobě), pak si pusť **Ústní simulaci**
4. **Večer** — `/cestina/karty` — odzkoušej si paměť na všechny knihy, co jsi za den probral
5. **Před spaním** — `/cestina/kviz` — 20 náhodných otázek (5 minut)

---

## Pokud chceš přidat vlastní úlohy ze své Sbírky

### Matematika
Otevři `data/math-topics.ts` v editoru. Najdi téma (např. T9 goniometrie), v poli `problems` přidej:

```typescript
{
  prompt: "Tvá úloha sem...",
  solution: "Postup řešení sem...",
  difficulty: "medium" // nebo "easy" / "hard"
}
```

Ulož a stránka se sama obnoví.

### Fyzika
Stejně, jen v `data/physics-topics.ts`. V poli `examples`:

```typescript
{
  prompt: "Zadání...",
  solution: "Řešení..."
}
```

### Čeština
`data/books.ts` — kompletní, ale můžeš si upravit cokoli (např. přidat zajímavost, scénu).

---

## Kde se ukládá můj postup

Aplikace ukládá do `localStorage` prohlížeče:
- Kolikrát jsi viděl kartu kterého díla
- Kolik kvízových otázek jsi zodpověděl správně
- Hodnocení obtížnosti pro každou knihu (umím / trochu / neumím)

Pokud si chceš resetovat postup: v dev nástrojích prohlížeče (F12) → Application → Local Storage → smaž `maturita-progress`.

---

## Struktura projektu

```
maturita-app/
├── app/                       # Next.js stránky
│   ├── page.tsx               # Domovská
│   ├── cestina/               # Modul čeština
│   ├── matika/                # Modul matematika
│   └── fyzika/                # Modul fyzika
├── data/                      # 🟢 ZDE JSOU VŠECHNA DATA
│   ├── books.ts               # 25 knih
│   ├── math-topics.ts         # 25 mat. témat
│   └── physics-topics.ts      # 25 fyz. témat
├── lib/                       # Pomocné funkce (typy, storage, kvíz)
└── README.md                  # tenhle soubor
```

---

## Zlomte vaz! 🍀

Maturita 18.5.2026 — pondělí 8:00.
