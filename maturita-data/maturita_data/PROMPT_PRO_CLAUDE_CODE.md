# PROMPT pro Claude Code — kompletní přepracování dat aplikace Maturita 2026

Ahoj. Jsem student maturující 18. května 2026 z **češtiny, matematiky a fyziky**. Mám aplikaci pro procvičování (Next.js, App Router, TypeScript, Tailwind), kde data fungují, ale chci je teď úplně přepracovat. **Aplikační kód (stránky, komponenty, layout) se NESMÍ měnit** — měním jen data a 1 hodnotu časovače.

## Co se ti chystám předat

V kořeni projektu (vedle `maturita-app/`) najdeš složku **`maturita-data/`** s těmito soubory:

### Pro matematiku
1. **`sbirka_problems.txt`** — 225 očíslovaných úloh ze Sbírky paní profesorky (kompletní text)
2. **`kategorizace.md`** — můj návrh, do kterého ze 25 témat každá z těch 225 úloh patří

### Pro fyziku
3. **`photo_index.md`** — přehled všech 31 fotek (ručně psané fyzikální zápisky), co je na každé a do kterého ze 25 fyzikálních témat patří
4. **31 obrázků** `1000057490.jpg` až `1000057520.jpg` v `maturita-data/photos/` — fotky teorie i řešených příkladů z fyziky

### Pro češtinu
5. **`cestina_index.md`** — přehled, kde najdeš podklad pro každou z 25 knih
6. **`cestina_knihy_pdf/`** — 25 souborů, každá kniha = 1 soubor, strukturovaný 8-bodový rozbor (z hlavního maturitního průvodce)
7. **`cestina_rozbory_pdf/`** — 13 souborů s velmi detailním rozborem (text ukázky, typy promluv, jazykové prostředky, životopis autora) — pokrývá jen některé knihy
8. **`cestina_docx/`** — 6 nejdetailnějších rozborů (těch nejvíce probraných knih) + soubor `Narodni_obrozeni_kontext.txt` jako kontext pro Mácha/Erben/Havlíček

---

## Tři úkoly + časovač

### ÚKOL 1 — Přepracuj `data/books.ts` (čeština, 25 knih)

Mám **25 knih** k maturitě (přesný seznam viz `cestina_index.md`). Pro každou:

1. **Pro 23 knih** je v `cestina_knihy_pdf/` strukturovaný 8-bodový rozbor — to je **základ**.
2. **Pro 12 knih** je navíc v `cestina_rozbory_pdf/` velmi detailní rozbor s ukázkou textu — **použij** pro:
   - charakteristické pasáže (`scenes`, `textSamples`)
   - životopis autora (`authorBio`)
   - jazykové prostředky (`language`)
3. **Pro 6 knih** je v `cestina_docx/` ještě detailnější materiál — **prioritní zdroj** pro tyto knihy:
   - Tyrolské elegie (`Tyrolske_elegie_a_Kral_Lavra.txt`) — **JEN Tyrolské elegie, ne Král Lávra!**
   - Markéta Lazarová a Rozmarné léto (`Marketa_Lazarova_a_Rozmarne_leto.txt`) — obojí
   - O myších a lidech (`O_mysich_a_lidech.txt`)
   - Proměna (`Promena.txt`)
   - Válka s mloky (`Valka_s_mloky.txt`)
4. **Pro 3 knihy z národního obrození** (Máj, Kytice, Křest svatého Vladimíra) doplň navíc historicko-literární kontext z `Narodni_obrozeni_kontext.txt`.
5. **Pro 2 knihy chybí jakýkoli zdroj** — Petr a Lucie (Rolland), Spalovač mrtvol (Fuks). Základní data jsou v `cestina_index.md`, doplň podle obecných maturitních osnov.

**Důležité:**
- V `Knihy.pdf` jsou navíc 2 knihy (`Tři sestry`, `Balada z hadrů`), které student NEMÁ v seznamu — **ignoruj** jejich soubory `16_Tři_sestry.txt` a `25_Balada_z_hadrů.txt`.
- **Drž stávající typovou strukturu** — neměň fields v interface, jen doplň existující.
- Každá kniha musí mít vyplněno: autor + roky života, rok vydání, lit. směr, žánr, druh, forma, postavy s charakteristikou, témata, motivy, časoprostor, kompozice, jazyk, vypravěč/lyr. subjekt, význam, charakteristické scény pro identifikaci ukázky.

### ÚKOL 2 — Přepracuj `data/math-topics.ts`

Pro každé z 25 témat:

- **Doplň všechny relevantní úlohy** ze `sbirka_problems.txt` podle `kategorizace.md`. Některá témata budou mít 5 úloh, jiná 15 — to je ok, drž realitu sbírky.
- **U každé úlohy** napiš:
  - `prompt`: zadání úlohy (zachovej věrně, jen oprav notaci — viz dále)
  - `solution`: kompletní řešení krok po kroku, jak by to očekávala maturitní komise. Né jen výsledek.
  - `difficulty`: "easy" / "medium" / "hard"
- **Teorii a vzorce** (pole `theory` a `formulas`) doplň/rozšiř tak, aby pokrývaly úplně VŠECHNO, co potřebuju u zkoušky umět.

### ÚKOL 3 — Přepracuj `data/physics-topics.ts`

Pro každé z 25 témat:

- **Vytěž z fotek** kompletní teorii i všechny řešené příklady. Drž se přesně toho, co je v zápisku. Použij vision schopnosti, fotky jsou v `maturita-data/photos/`.
- **`theory`**: úplný výklad — definice, vztahy, slovní popis, jednotky, fyzikální principy. Vše, co je na fotce.
- **`formulas`**: všechny vzorce z fotek, jeden po druhém, s popisem co znamenají
- **`examples`**: všechny řešené příklady z fotek (ne jen 1!) — `prompt` (zadání), `solution` (postup s mezivýsledky a jednotkami)
- Pokud k tématu fotka chybí (T1, T2, T11, T13, T14, T16, T23 podle photo_index.md), doplň standardní obsah dle českých maturitních osnov pro gymnázia.

### ÚKOL 4 — Změň časovač

V souboru `app/fyzika/page.tsx` (komponenta Ústní simulace) najdi konstantu časovače **10 minut** a přepiš ji na **15 minut**. Hledej `600`, `10 * 60`, `10`, nebo proměnnou jako `INITIAL_TIME` / `EXAM_TIME`. Po změně ověř, že časovač skutečně začíná na 15:00.

---

## KRITICKÉ — Matematická a fyzikální notace

V současném kódu jsou texty, které vypadají takhle:

```
x12 + x22 = 1,75       (mělo být x₁² + x₂² = 1,75)
72n+2+32n+1            (mělo být 7^(2n+2) + 3^(2n+1))
xa-x=kt                (mělo být x/(a-x) = kt)
1x+1y=12               (mělo být 1/x + 1/y = 1/2)
```

To je **nečitelné**. Nechci to. Chci, ať to vypadá jako učebnice.

**Pravidla notace** (Unicode, žádný LaTeX — aplikace ho nepoužívá):

- **Indexy**: `x₁, x₂, aₙ, R₁, V₂` (Unicode podscript: ₀₁₂₃₄₅₆₇₈₉ + písmena ₐ ᵦ ᵢ ⱼ ₙ ₘ ₓ)
- **Mocniny**: `x², n³, 10⁻⁹, e^(2x)` (Unicode supscript: ⁰¹²³⁴⁵⁶⁷⁸⁹⁻ + závorky pro složené)
- **Zlomky**: `1/x`, `(x+1)/(x-1)`, `½`, `¾`, `⅓`
- **Odmocniny**: `√2`, `√(x+1)`, `³√x`, `ⁿ√x` (∛ ∜ jsou taky ok)
- **Řecká písmena**: α β γ δ ε ζ η θ ι κ λ μ ν ξ π ρ σ τ φ χ ψ ω, velká: Δ Σ Π Ω Φ Ψ Θ
- **Operátory**: ± ∓ × ÷ · ≤ ≥ ≠ ≈ ≡ → ⇒ ⇔ ∀ ∃ ∈ ∉ ⊂ ⊆ ∪ ∩ ∅ ∞
- **Vektory**: `F⃗`, `E⃗`, `B⃗`, `r⃗` (Unicode kombinující znak U+20D7)
- **Derivace**: `dy/dx`, `f'(x)`, `∂φ/∂x`, `∇f`
- **Integrály**: `∫f(x)dx`, `∫₀^∞`, `∫_{x₁}^{x₂}`
- **Limity**: `lim_{x→0} f(x)`
- **Logaritmy**: `log₂x`, `ln x`, `log_x(y)`
- **Sumace**: `Σᵢ₌₁ⁿ aᵢ`
- **Jednotky**: pevně oddělit: `5 m`, `10 V`, `1,5 kg·m·s⁻²`, `9,81 m/s²`

**Příklad správného zápisu:**

```typescript
{
  prompt: "Kořeny x₁, x₂ rovnice x² − 3kx + k² = 0 vyhovují vztahu x₁² + x₂² = 1,75. Určete k.",
  solution: "Z Viètových vzorců: x₁ + x₂ = 3k, x₁·x₂ = k².\nVztah x₁² + x₂² = (x₁+x₂)² − 2·x₁·x₂ = 9k² − 2k² = 7k².\nMáme 7k² = 1,75, tj. k² = 0,25, tedy k = ±0,5.",
  difficulty: "medium"
}
```

---

## Pracovní postup (doporučený)

1. **Nejdřív** si přečti `maturita-app/data/math-topics.ts`, `physics-topics.ts` a `books.ts` — pochopíš strukturu, typy. **NEMĚŇ** typy ani jména polí.
2. **Pak češtinu** (je nejjednodušší — strukturovaná data jsou připravená):
   - Otevři `cestina_index.md` — uvidíš mapování knih na soubory
   - Pro každou z 25 knih najdi všechny dostupné zdroje, vyplň `data/books.ts`
3. **Pak matiku** — `kategorizace.md` + `sbirka_problems.txt` → `data/math-topics.ts` (200+ úloh s řešením)
4. **Pak fyziku** — view fotky → `data/physics-topics.ts` (rozšířená teorie + všechny příklady)
5. **Změň časovač** v `app/fyzika/page.tsx` na 15 min (= 900 s)
6. **Build** — `npm run build`, oprav TS chyby. `npm run dev` a klikni se aspoň na 3 témata v každém modulu.

## Důležité body

- **Nezahazuj nic** existujícího. Pokud má aplikace teorii, kterou nový zdroj nepokrývá, **nech ji**.
- **Drž češtinu.** Žádná angličtina v promptech ani řešeních.
- **Drž typy.** Pokud potřebuješ nové pole v interfaceu (např. `authorBio`, `textSamples`), nejdřív zkontroluj jestli už neexistuje.
- **Časovač maturity** = u zkoušky budu mluvit 15 minut, ne 10.
- **Quality over speed.** Tohle je moje jediná příprava. Když rozbor knihy bude povrchní, zkazím to u zkoušky.

## Co NEDĚLAT

- Neměň `app/page.tsx`, layout, design, CSS, komponenty.
- Nepřidávej nové stránky ani features.
- Nepoužívej LaTeX (`$$`, `\frac`, `\sqrt`) — aplikace ho nerenderuje.
- Nezapomínej na vektory ve fyzice (`F⃗` ne `F`).
- **Neignoruj sbírku** — chci tam **všech 225 úloh**.
- **Neignoruj knihy** — chci všech 25 knih s plným rozborem podle mého seznamu.
- `Tři sestry` a `Balada z hadrů` jsou v Knihy.pdf navíc, **NEPATŘÍ** do mého seznamu — ignoruj je. Chybí mi `Petr a Lucie` (#16) a `Spalovač mrtvol` (#25) — ty doplň.

---

## Kontrolní seznam před odevzdáním

- [ ] `data/books.ts` má **všech 25 knih** podle mého seznamu (Lakomec → Spalovač mrtvol)
  - [ ] Každá kniha má vyplněné: autor + roky života, rok vydání, lit. směr, žánr/druh/forma, postavy s charakteristikou, témata, motivy, časoprostor, kompozice, jazyk, vypravěč, význam, scény pro identifikaci ukázky
  - [ ] Pro 6 knih s detailním .docx zdrojem je rozbor **mnohem hlubší** než u ostatních
  - [ ] Petr a Lucie + Spalovač mrtvol jsou doplněné
  - [ ] Knihy `Tři sestry` a `Balada z hadrů` v `data/books.ts` **NEJSOU**
- [ ] `data/math-topics.ts` obsahuje aspoň 200 úloh. Každá s plným řešením.
- [ ] `data/physics-topics.ts` má v každém z 25 témat:
  - rozšířenou teorii z fotek (kde fotky jsou)
  - aspoň 2 řešené příklady (kde fotky obsahují víc příkladů)
  - všechny vzorce z fotek
- [ ] Notace je čistá — žádné `x12` místo `x₁²`, žádné `1x+1y` místo `1/x + 1/y`.
- [ ] Časovač v `fyzika/page.tsx` je 15 min (= 900 s).
- [ ] `npm run build` projde bez TS chyb.
- [ ] V prohlížeči se náhodně otevřená 3 témata/knihy vykreslí a vypadají rozumně.

Děkuju, jdu se tomu učit, zatímco tohle běží. Když narazíš na jakoukoli nejasnost, **nepřestávej** — udělej rozumnou volbu, poznamenej do TODO komentu v souboru a pokračuj.
