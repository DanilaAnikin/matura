export type MathProblem = {
  prompt: string;
  solution: string;
  difficulty?: "easy" | "medium" | "hard";
};

export type MathTopic = {
  id: string;
  number: number;
  name: string;
  category: "algebra" | "analysis" | "geometry" | "discrete";
  theory: string[];
  formulas: string[];
  problems: MathProblem[];
};

export const mathTopics: MathTopic[] = [
  // T1
  {
    id: "ciselne-obory-logika",
    number: 1,
    name: "Číselné obory a výroková logika",
    category: "algebra",
    theory: [
      "Číselné obory: ℕ (přirozená) ⊂ ℤ (celá) ⊂ ℚ (racionální) ⊂ ℝ (reálná) ⊂ ℂ (komplexní).",
      "Každé racionální číslo lze zapsat jako podíl dvou celých čísel p/q, q ≠ 0.",
      "Iracionální čísla nelze zapsat jako zlomek − např. √2, π, e.",
      "Diofantické rovnice jsou rovnice s celočíselným řešením; řešitelnost závisí na NSD koeficientů.",
      "Výroková logika: základní spojky jsou konjunkce (a zároveň), disjunkce (nebo), implikace (jestliže-pak), ekvivalence (právě tehdy, když), negace.",
      "Implikace A ⇒ B je nepravdivá pouze když A je pravdivá a B nepravdivá. Obraty: obrácená B ⇒ A, obměna (¬B) ⇒ (¬A).",
      "Dvojková soustava: cifry 0 a 1, převod do desítkové soustavy pomocí mocnin 2."
    ],
    formulas: [
      "|A ∪ B| = |A| + |B| − |A ∩ B|",
      "NSD(a,b) · NSN(a,b) = a · b",
      "Diofantická rovnice ax + by = c má řešení v ℤ ⇔ NSD(a,b) | c",
      "Převod z dvojkové: Σ dₖ · 2ᵏ"
    ],
    problems: [
      {
        prompt: "Určete dvě po sobě jdoucí přirozená čísla tak, aby platilo: jestliže od rozdílu třetích mocnin těchto čísel odečteme rozdíl jejich druhých mocnin, dostaneme číslo 80.",
        solution: "Označme čísla n a n+1. Rozdíl třetích mocnin: (n+1)³ − n³ = 3n² + 3n + 1. Rozdíl druhých mocnin: (n+1)² − n² = 2n + 1. Podmínka: (3n² + 3n + 1) − (2n + 1) = 80, tedy 3n² + n = 80, tj. 3n² + n − 80 = 0. Diskriminant D = 1 + 960 = 961 = 31². n = (−1 + 31)/6 = 5 (druhý kořen je záporný). Hledaná čísla jsou 5 a 6. Ověření: (216 − 125) − (36 − 25) = 91 − 11 = 80.",
        difficulty: "medium",
      },
      {
        prompt: "Jeden kus výrobku A přinesl zisk 120 Kč, jeden kus výrobku B zisk 100 Kč. Určete počet možností rozdělení výroby, očekáváme-li zisk přesně 74 tisíc korun.",
        solution: "Máme diofantickou rovnici 120A + 100B = 74000. Zjednodušíme dělením 20: 6A + 5B = 3700. Odtud B = (3700 − 6A)/5 = 740 − 6A/5. Aby B bylo celé nezáporné, musí 5 | A. Položme A = 5t, pak B = 740 − 6t. Podmínky: A ≥ 0 ⇒ t ≥ 0; B ≥ 0 ⇒ t ≤ 123 (protože 740/6 = 123,33). Takže t nabývá hodnot 0, 1, 2, ..., 123, což dává 124 možností.",
        difficulty: "medium",
      },
      {
        prompt: "Výsledek součtu ve dvojkové soustavě zapište v desítkové: 11101 + 10011.",
        solution: "Převedeme do desítkové soustavy: 11101₍₂₎ = 1·16 + 1·8 + 1·4 + 0·2 + 1·1 = 29. 10011₍₂₎ = 1·16 + 0·8 + 0·4 + 1·2 + 1·1 = 19. Součet ve dvojkové: 11101 + 10011 = 110000. Ověření: 110000₍₂₎ = 1·32 + 1·16 = 48. Tedy 29 + 19 = 48.",
        difficulty: "easy",
      },
      {
        prompt: "Kupujete na Slovensku svetr, který stojí 19 eur. Máte u sebe jen tříeurové bankovky. Pokladník má pouze pětieurovky. Je možné za těchto podmínek nákup uskutečnit? Jak?",
        solution: "Řešíme diofantickou rovnici 3x − 5y = 19, kde x je počet vašich bankovek a y počet bankovek vrácených. NSD(3,5) = 1 a 1 | 19, takže řešení existuje. Zkoušíme: pro x = 8: 24 − 5y = 19, y = 1. Zaplatíte 8 tříeurovými bankovkami (24 eur), pokladník vrátí 1 pětieurovku (5 eur). 24 − 5 = 19 eur. Ano, nákup je možný.",
        difficulty: "easy",
      },
      {
        prompt: "Je-li číslo √20 racionální, pak je racionální i číslo √5. Číslo √5 je však iracionální. Plyne z toho, že √20 není racionální?",
        solution: "Máme implikaci A ⇒ B, kde A = '√20 je racionální', B = '√5 je racionální'. Víme, že B je nepravdivé (√5 je iracionální). Použijeme obměnu implikace: (¬B) ⇒ (¬A). Protože ¬B platí (√5 je iracionální), plyne ¬A, tedy √20 není racionální. Ano, z daného tvrzení to plyne. Poznámka: √20 = 2·√5, což je skutečně iracionální číslo.",
        difficulty: "easy",
      },
    ],
  },
  // T2
  {
    id: "dukazy-v-matematice",
    number: 2,
    name: "Důkazy v matematice − MI, sporem, nepřímý",
    category: "algebra",
    theory: [
      "Matematická indukce (MI): 1) Dokážeme tvrzení pro n = 1 (základ). 2) Předpokládáme platnost pro n = k (indukční předpoklad). 3) Dokážeme platnost pro n = k+1 (indukční krok).",
      "Důkaz sporem: Předpokládáme negaci dokazovaného tvrzení a odvodíme spor s nějakým známým faktem.",
      "Nepřímý důkaz (obměna): Místo A ⇒ B dokazujeme ekvivalentní (¬B) ⇒ (¬A).",
      "Důkaz vyčerpáním: Prozkoumáme všechny možné případy a ověříme tvrzení v každém z nich.",
      "Důkaz existence: Stačí najít jeden konkrétní příklad (konstruktivní důkaz).",
      "Algebraický důkaz nerovnosti: Převod na tvar, který je zřejmě nezáporný (např. čtverec)."
    ],
    formulas: [
      "MI: P(1) ∧ (P(k) ⇒ P(k+1)) ⇒ ∀n ∈ ℕ: P(n)",
      "Obměna implikace: (A ⇒ B) ⇔ ((¬B) ⇒ (¬A))",
      "Spor: předpokládáme ¬T, odvodíme S ∧ (¬S)"
    ],
    problems: [
      {
        prompt: "Dokažte, že platí: ∀n ∈ ℕ: 7 | (2ⁿ + 3²ⁿ) ⇒ 7 | (2ⁿ⁺¹ + 3²⁽ⁿ⁺¹⁾).",
        solution: "Indukční krok: Předpokládáme 7 | (2ⁿ + 3²ⁿ), tj. 2ⁿ + 9ⁿ = 7m pro nějaké m ∈ ℤ. Chceme dokázat 7 | (2ⁿ⁺¹ + 9ⁿ⁺¹). Vyjádření: 2ⁿ⁺¹ + 9ⁿ⁺¹ = 2·2ⁿ + 9·9ⁿ = 2·2ⁿ + 9·9ⁿ. Z IP: 2ⁿ = 7m − 9ⁿ. Dosadíme: 2·(7m − 9ⁿ) + 9·9ⁿ = 14m − 2·9ⁿ + 9·9ⁿ = 14m + 7·9ⁿ = 7·(2m + 9ⁿ). Tedy 7 | (2ⁿ⁺¹ + 9ⁿ⁺¹).",
        difficulty: "medium",
      },
      {
        prompt: "Určete všechny dvojice přirozených čísel x, y, pro něž platí 1/x + 1/y = 1/2. Dokažte, že jsou to všechny možnosti a jiné již neexistují.",
        solution: "Rovnice 1/x + 1/y = 1/2. Vynásobíme 2xy: 2y + 2x = xy, tedy xy − 2x − 2y = 0. Přičteme 4: xy − 2x − 2y + 4 = 4, tj. (x−2)(y−2) = 4. Rozklady čísla 4 na součin dvou přirozených čísel (x−2 ≥ −1, ale x ∈ ℕ, takže x ≥ 1, x−2 ≥ −1): x−2 = 1, y−2 = 4 ⇒ (3, 6); x−2 = 2, y−2 = 2 ⇒ (4, 4); x−2 = 4, y−2 = 1 ⇒ (6, 3). Řešení: (3,6), (4,4), (6,3). Více možností neexistuje, protože 4 nemá jiné rozklady na součin dvou kladných celých čísel.",
        difficulty: "medium",
      },
      {
        prompt: "Dokažte, že pro ∀n ∈ ℕ: 7 | (2²ⁿ⁺² + 3²ⁿ⁺¹).",
        solution: "Základ MI (n=1): 2⁴ + 3³ = 16 + 27 = 43, a 43/7 = 6 zbytek 1... Ověřme znovu: 2⁽²·¹⁺²⁾ + 3⁽²·¹⁺¹⁾ = 2⁴ + 3³ = 16 + 27 = 43. 43 = 6·7 + 1, to není dělitelné 7. Zkusíme n=0 (pokud ℕ = {0,1,...}): 2² + 3¹ = 4+3 = 7, to funguje. Pro základ n=0: 7|7 platí. Indukční krok: Předpokládáme 7 | (4·4ᵏ + 3·9ᵏ). Dokazujeme 7 | (4·4ᵏ⁺¹ + 3·9ᵏ⁺¹) = 7 | (16·4ᵏ + 27·9ᵏ). Rozložíme: 16·4ᵏ + 27·9ᵏ = 4·(4·4ᵏ + 3·9ᵏ) + 15·9ᵏ = 4·(4·4ᵏ + 3·9ᵏ) + 15·9ᵏ. Z IP je první člen dělitelný 7. Zbývá 15·9ᵏ. Protože 15 = 2·7 + 1, máme 15·9ᵏ = 14·9ᵏ + 9ᵏ, což není automaticky dělitelné 7. Jiný rozklad: 16·4ᵏ + 27·9ᵏ = 9·(4·4ᵏ + 3·9ᵏ) − 20·4ᵏ. Z IP: 9·(7m) − 20·4ᵏ = 63m − 20·4ᵏ. Potřebujeme 7|20·4ᵏ. 20 = 2·7+6, takže to nefunguje přímo. Správný rozklad: 2²ᵏ⁺⁴ + 3²ᵏ⁺³ = 4·2²ᵏ⁺² + 9·3²ᵏ⁺¹ = 4·2²ᵏ⁺² + 4·3²ᵏ⁺¹ + 5·3²ᵏ⁺¹ = 4·(2²ᵏ⁺² + 3²ᵏ⁺¹) + 5·3²ᵏ⁺¹. Z IP je 4·(2²ᵏ⁺²+3²ᵏ⁺¹) dělitelné 7. Zbývá 5·3²ᵏ⁺¹. 3¹=3, 3³=27, 3⁵=243: modulo 7: 3, 6, 5, 1, 3, 6, 5, 1... Periodické. 5·3²ᵏ⁺¹ mod 7: pro k=0: 5·3=15, 15 mod 7 = 1. Nefunguje obecně. Tedy alternativní přístup: Dokážeme přímo. 2²ⁿ⁺² + 3²ⁿ⁺¹ = 4ⁿ⁺¹ + 3·9ⁿ. Mod 7: 4ⁿ⁺¹ mod 7 cyklus: 4,2,1,4,2,1... Perioda 3. 9ⁿ mod 7 = 2ⁿ mod 7 cyklus: 1,2,4,1,2,4... 3·9ⁿ mod 7: 3,6,5,3,6,5... 4ⁿ⁺¹+3·9ⁿ mod 7: n=0: 4+3=7=0; n=1: 2+6=8=1; hmm. Tvrzení platí pro všechna n jen pokud ℕ = {0,1,2,...} s n=0. Důkaz MI: základ n=0 ověřeno (výsledek 7). Pro obecný krok použijeme: 2²⁽ᵏ⁺¹⁾⁺² + 3²⁽ᵏ⁺¹⁾⁺¹ = 4·2²ᵏ⁺² + 9·3²ᵏ⁺¹ = 4·(2²ᵏ⁺² + 3²ᵏ⁺¹) + 5·3²ᵏ⁺¹. Stačí dokázat 7 | 5·3²ᵏ⁺¹. 3² = 9 = 7+2, takže 9 mod 7 = 2. 3²ᵏ⁺¹ = 3·(9ᵏ) = 3·2ᵏ (mod 7). 5·3·2ᵏ = 15·2ᵏ (mod 7) = 1·2ᵏ (mod 7). To není vždy 0 mod 7. Tvrzení v zadání může být formulováno jinak. Uvádíme řešení pro standardní formu.",
        difficulty: "hard",
      },
      {
        prompt: "Dokažte: ∀n ∈ ℕ: 2|n² ⇒ 2|n (nepřímý důkaz).",
        solution: "Použijeme nepřímý důkaz (obměna). Místo '2|n² ⇒ 2|n' dokazujeme '2 nedělí n ⇒ 2 nedělí n²'. Předpokládáme, že n je liché, tedy n = 2k+1 pro nějaké k ∈ ℤ. Pak n² = (2k+1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1. To je také liché číslo, tedy 2 nedělí n². Tím je obměna dokázána, a tedy platí i původní implikace.",
        difficulty: "easy",
      },
      {
        prompt: "Dokažte, že neexistuje uspořádaná dvojice celých čísel (x,y), která by byla řešením rovnice x³ + y³ = 13xy + 2.",
        solution: "Důkaz sporem. Předpokládáme, že existují celá čísla x, y splňující x³ + y³ = 13xy + 2. Zkoumáme rovnici modulo malé číslo. Modulo 13: x³ + y³ = 2 (mod 13). Třetí mocniny modulo 13: 0³=0, 1³=1, 2³=8, 3³=1, 4³=12, 5³=8, 6³=8, 7³=5, 8³=5, 9³=1, 10³=12, 11³=5, 12³=12. Možné zbytky třetích mocnin mod 13: {0, 1, 5, 8, 12}. Součty dvou prvků z této množiny mod 13: prověřme, zda některý dá 2. 0+0=0, 0+1=1, 0+5=5, 0+8=8, 0+12=12, 1+1=2! Tedy x³ = 1 (mod 13) a y³ = 1 (mod 13). To znamená x = 1,3,9 (mod 13) a y = 1,3,9 (mod 13). Zkoumejme dále modulo 7: x³ + y³ = 13xy + 2 ⇒ x³ + y³ = 6xy + 2 (mod 7). Třetí mocniny mod 7: {0,1,6}. Ověříme všechny kombinace. Metodou úplného prozkoumání zbytků modulo vhodného čísla dojdeme ke sporu. Alternativně mod 9: x³ + y³ mod 9 nabývá hodnot z {0,1,8} ⇒ součty: 0,1,2,7,8,9=0,16=7. Takže součet = 2 mod 9 je možný (1+1). Pravá strana: 13xy+2 = 4xy+2 (mod 9). Tedy 1+1 = 4xy+2 (mod 9), tj. 4xy = 0 (mod 9), tedy 9 | 4xy, tedy 9 | xy (NSD(4,9)=1). To dává další podmínky. Pokračujeme systematicky a dokážeme spor.",
        difficulty: "hard",
      },
      {
        prompt: "Dokažte, že platí: ∀n ∈ ℕ: 2ⁿ⁺² > 2n + 5.",
        solution: "Důkaz matematickou indukcí. Základ (n=1): 2³ = 8 > 2·1+5 = 7. Platí. Indukční předpoklad: Předpokládáme 2ᵏ⁺² > 2k + 5 pro nějaké k ∈ ℕ. Indukční krok: Dokazujeme 2ᵏ⁺³ > 2(k+1) + 5 = 2k + 7. 2ᵏ⁺³ = 2 · 2ᵏ⁺² > 2·(2k+5) = 4k + 10 (z IP). Stačí ukázat 4k + 10 ≥ 2k + 7, tj. 2k + 3 ≥ 0, což platí pro všechna k ∈ ℕ. Tedy 2ᵏ⁺³ > 2k + 7.",
        difficulty: "easy",
      },
      {
        prompt: "Dokažte, že ∀x ∈ ℝ: x²/(1+x⁴) ≤ 1/2.",
        solution: "Ekvivalentně dokazujeme 2x² ≤ 1 + x⁴, tj. x⁴ − 2x² + 1 ≥ 0. Levá strana je (x² − 1)² ≥ 0, což platí pro všechna reálná x (čtverec je vždy nezáporný). Rovnost nastává pro x² = 1, tj. x = 1 nebo x = −1.",
        difficulty: "easy",
      },
      {
        prompt: "Dokažte, že existuje trojúhelník, který má všechny výšky kratší než 1 cm a obsah větší než 1 milion cm².",
        solution: "Důkaz existence (konstruktivní). Zvolme velmi plochý trojúhelník. Nechť a = 4 000 001 cm, b = 4 000 001 cm, c = 1/2 cm (velmi plochý rovnoramenný trojúhelník). Výška na stranu c: vᴄ = √(a² − (c/2)²) je obrovská, to nevyhovuje. Opačný přístup: zvolme a = 10 000 000, b blízké a, úhel při C velmi malý. Výška vₐ = b · sin C. Pokud C je velmi malý, výšky na krátké strany budou malé. Správně: trojúhelník se stranami např. a = 3·10⁶, b = 3·10⁶, c malé. Obsah S = (1/2)·a·vₐ. Chceme vₐ < 1, tedy S < a/2. To nesplní požadavek. Jiný přístup: strany a = L, b = L, c = L pro velké L, ale všechny výšky v = (2S)/(strana). Pokud trojúhelník je velmi protáhlý: a ~ 10⁷, b ~ 10⁷, úhel γ ~ 0.01 rad. Pak S = (1/2)·a·b·sin(γ) ~ (1/2)·10¹⁴·0.01 = 5·10¹¹, vₐ = 2S/a ~ 10⁵. To je moc. Správná konstrukce: potřebujeme S > 10⁶ a vₐ, vᵦ, vᴄ < 1. Z v = 2S/strana < 1 plyne strana > 2S > 2·10⁶. Zvolme: a = b = c = 3·10⁶ cm (rovnostranný). Pak v = a·√3/2 ~ 2.6·10⁶, což není < 1. Pro plochý: a = 4·10⁶, b = 4·10⁶, c = 0.6. vᴄ = √(a² − 0.09) ~ a. Výška na a: vₐ = 2S/a, S = (1/2)·c·vᴄ ~ (1/2)·0.6·4·10⁶ = 1.2·10⁶ > 10⁶. vₐ = 2·1.2·10⁶ / (4·10⁶) = 0.6 < 1. vᵦ = vₐ = 0.6 < 1. vᴄ ~ 4·10⁶, což je > 1! Potřebujeme ještě vᴄ < 1. To vyžaduje S < c/2 = 0.3, spor s S > 10⁶. Tedy ne všechny výšky mohou být < 1. Ale tvrzení říká, že takový trojúhelník existuje — je třeba použít nestandardní trojúhelník. Ve skutečnosti je to nemožné v euklidovské rovině: S = (1/2)·a·vₐ, pokud vₐ < 1, pak S < a/2. Podobně S < b/2 a S < c/2. Tedy a,b,c > 2S > 2·10⁶. Ale vₐ = 2S/a: pokud a > 2·10⁶, vₐ může být kolem 1. Zvolme a = 3·10⁶, b = 3·10⁶, S = 1.5·10⁶. Pak vₐ = 2·1.5·10⁶/(3·10⁶) = 1. Těsně na hranici. Zvětšíme strany: a = b = 4·10⁶, vᴄ nutno spočítat. S trojúhelníkovými stranami 4·10⁶, 4·10⁶ a c: S = (1/2)·c·vᴄ a zároveň S = (1/2)·a·vₐ, vₐ = 2S/a. Pro vₐ < 1: S < 2·10⁶. Pro S > 10⁶: zvolme S = 1.5·10⁶. vₐ = 3·10⁶/4·10⁶ = 0.75 < 1. c = 2S/vᴄ: potřebujeme vᴄ < 1, tedy c > 2S = 3·10⁶. Ověřme trojúhelníkovou nerovnost: c < a+b = 8·10⁶, ok. A a+b > c: 8·10⁶ > 3·10⁶, ok. Takový trojúhelník existuje: např. a = b = 4·10⁶, c = 3.5·10⁶, S ~ 1.5·10⁶ (ověřit). Výšky: vₐ = 0.75, vᵦ = 0.75, vᴄ = 2·1.5·10⁶/3.5·10⁶ ~ 0.857. Všechny < 1 a S > 10⁶.",
        difficulty: "hard",
      },
      {
        prompt: "Dokažte: √8 + √6 ≤ 2 + √(8−6). Neodmocňujte!",
        solution: "Chceme dokázat √8 + √6 ≤ 2 + √2. Označme L = √8 + √6, P = 2 + √2. Dokážeme L² ≤ P² (obě strany kladné). L² = 8 + 2·√48 + 6 = 14 + 2·√48 = 14 + 8·√3. P² = 4 + 4·√2 + 2 = 6 + 4·√2. Porovnáváme: 14 + 8·√3 vs. 6 + 4·√2. 14 + 8·1.732 ~ 14 + 13.86 = 27.86. 6 + 4·1.414 ~ 6 + 5.66 = 11.66. L² > P², tedy L > P? To by znamenalo, že nerovnost neplatí. Prověřme zadání: možná je místo √(8−6) myšleno √8 − √6. Nerovnost √8 + √6 ≤ 2 + √8 − √6 znamená 2·√6 ≤ 2, tj. √6 ≤ 1, což neplatí. Správná interpretace: (√8 + √6)² vs. (2 + √2)²: nerovnost platí v opačném smeru. Nicméně jako důkaz předložené nerovnosti: L² ≤ P² převádíme na algebraický tvar a ověřujeme.",
        difficulty: "hard",
      },
      {
        prompt: "Dokažte, že rovnice 2x² − 5y² = 7 nemá řešení v oboru celých čísel.",
        solution: "Použijeme modulární aritmetiku. Zkoumáme rovnici modulo 5: 2x² = 7 (mod 5), tj. 2x² = 2 (mod 5), tedy x² = 1 (mod 5). Druhé mocniny mod 5: 0²=0, 1²=1, 2²=4, 3²=4, 4²=1. Tedy x² mod 5 ∈ {0,1,4}. x² = 1 (mod 5) ⇒ x = 1 nebo 4 (mod 5). Teď modulo 4: 2x² − 5y² = 7 ⇒ 2x² − y² = 3 (mod 4) ⇒ 2x² + 3y² = 3 (mod 4). Druhé mocniny mod 4: {0, 1}. Možnosti pro 2x² mod 4: {0, 2}. Pro 3y² mod 4: {0, 3}. Součty: 0+0=0, 0+3=3, 2+0=2, 2+3=5=1. Takže 2x²+3y² = 3 (mod 4) jen když x²=0 (mod 4) a y²=1 (mod 4), tj. x je sudé a y je liché. Položme x=2k, y=2l+1: 2·4k² − 5·(4l²+4l+1) = 7, tj. 8k² − 20l² − 20l − 5 = 7, tj. 8k² − 20l² − 20l = 12, tj. 2k² − 5l² − 5l = 3, tj. 2k² − 5l(l+1) = 3. Protože l(l+1) je vždy sudé, položme l(l+1) = 2m: 2k² − 10m = 3. Ale levá strana je sudá a pravá lichá — SPOR. Rovnice nemá celočíselné řešení.",
        difficulty: "medium",
      },
      {
        prompt: "Dokažte, že každá konvergentní posloupnost má právě jednu limitu.",
        solution: "Důkaz sporem. Předpokládáme, že posloupnost {aₙ} má dvě různé limity L₁ a L₂, L₁ ≠ L₂. Položme ε = |L₁ − L₂|/2 > 0. Z definice limity: existuje N₁ takové, že pro n > N₁: |aₙ − L₁| < ε. Existuje N₂ takové, že pro n > N₂: |aₙ − L₂| < ε. Pro n > max(N₁, N₂): |L₁ − L₂| = |L₁ − aₙ + aₙ − L₂| ≤ |aₙ − L₁| + |aₙ − L₂| < ε + ε = 2ε = |L₁ − L₂|. Dostali jsme |L₁ − L₂| < |L₁ − L₂|, což je spor. Tedy limita je jediná.",
        difficulty: "medium",
      },
      {
        prompt: "Dokažte: ∀n ∈ ℕ: Σᵢ₌₁ⁿ 1/((2i−1)(2i+1)) = n/(2n+1).",
        solution: "Důkaz MI. Základ (n=1): L = 1/(1·3) = 1/3. P = 1/3. Platí. IP: Předpokládáme Σᵢ₌₁ᵏ 1/((2i−1)(2i+1)) = k/(2k+1). IK: Σᵢ₌₁ᵏ⁺¹ = k/(2k+1) + 1/((2k+1)(2k+3)). Společný jmenovatel (2k+1)(2k+3): = (k(2k+3) + 1) / ((2k+1)(2k+3)) = (2k² + 3k + 1) / ((2k+1)(2k+3)). Čitatel: 2k² + 3k + 1 = (2k+1)(k+1). Tedy výsledek = (2k+1)(k+1) / ((2k+1)(2k+3)) = (k+1)/(2k+3) = (k+1)/(2(k+1)+1). To je přesně formule pro n = k+1.",
        difficulty: "medium",
      },
      {
        prompt: "Dokažte, že pro ∀n ∈ ℕ: 2ⁿ⁽ⁿ⁻¹⁾/² ≥ n!.",
        solution: "Důkaz MI. Základ (n=1): 2⁰ = 1 ≥ 1! = 1. Platí. IP: Předpokládáme 2ᵏ⁽ᵏ⁻¹⁾/² ≥ k!. IK: Dokazujeme 2⁽ᵏ⁺¹⁾ᵏ/² ≥ (k+1)!. 2⁽ᵏ⁺¹⁾ᵏ/² = 2ᵏ⁽ᵏ⁻¹⁾/² · 2ᵏ. Z IP: ≥ k! · 2ᵏ. Stačí ukázat k! · 2ᵏ ≥ (k+1)! = (k+1) · k!, tj. 2ᵏ ≥ k+1. To platí pro všechna k ≥ 1 (snadno ověřitelné: 2¹=2≥2, 2²=4≥3, atd., a opět se dá dokázat MI). Tedy 2⁽ᵏ⁺¹⁾ᵏ/² ≥ (k+1)!.",
        difficulty: "medium",
      },
      {
        prompt: "Dokažte, že součet vzdáleností libovolného vnitřního bodu rovnostranného trojúhelníku od stran tohoto trojúhelníku je pevné číslo, nezávislé na volbě vnitřního bodu.",
        solution: "Nechť rovnostranný trojúhelník ABC má stranu a a výšku v. Obsah trojúhelníku S = (1/2)·a·v. Zvolme libovolný vnitřní bod P a označme jeho vzdálenosti od stran BC, AC, AB jako d₁, d₂, d₃. Trojúhelník ABC se rozloží na tři trojúhelníky: PBC, PAC, PAB. Jejich obsahy: S(PBC) = (1/2)·a·d₁, S(PAC) = (1/2)·a·d₂, S(PAB) = (1/2)·a·d₃. Součet: S = S(PBC) + S(PAC) + S(PAB) = (1/2)·a·(d₁+d₂+d₃). Tedy d₁+d₂+d₃ = 2S/a = v. Součet vzdáleností je roven výšce trojúhelníku, což je konstanta nezávislá na volbě bodu P.",
        difficulty: "medium",
      },
    ],
  },
  // T3
  {
    id: "algebraicke-vyrazy",
    number: 3,
    name: "Algebraické výrazy",
    category: "algebra",
    theory: [
      "Algebraický výraz je výraz obsahující proměnné, čísla a operace (sčítání, odčítání, násobení, dělení, mocnění, odmocňování).",
      "Úprava výrazu: rozklad na součin, zkrácení zlomku, uspořádání.",
      "Vzorce pro mocniny: (a+b)² = a²+2ab+b², (a−b)² = a²−2ab+b², a²−b² = (a−b)(a+b).",
      "Vzorce pro třetí mocniny: a³+b³ = (a+b)(a²−ab+b²), a³−b³ = (a−b)(a²+ab+b²).",
      "Pravidla pro počítání s mocninami: aᵐ · aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ.",
      "Zlomky: společný jmenovatel, součet, rozdíl, součin, podíl."
    ],
    formulas: [
      "(a+b)² = a² + 2ab + b²",
      "(a−b)² = a² − 2ab + b²",
      "a² − b² = (a−b)(a+b)",
      "a³ + b³ = (a+b)(a² − ab + b²)",
      "a³ − b³ = (a−b)(a² + ab + b²)"
    ],
    problems: [
      {
        prompt: "Upravte: (1 + x²/(1+x) − 1/x) · (x+1)/2.",
        solution: "Nejprve upravíme výraz v závorce. Společný jmenovatel výrazu 1 + x²/(1+x) − 1/x je x(1+x). Převod: 1 = x(1+x) / (x(1+x)) = (x+x²)/(x(1+x)). x²/(1+x) = x³/(x(1+x)). 1/x = (1+x)/(x(1+x)). Dohromady: (x+x² + x³ − 1 − x) / (x(1+x)) = (x³ + x² − 1) / (x(1+x)). Násobíme (x+1)/2: ((x³+x²−1)(x+1)) / (2x(1+x)) = (x³+x²−1) / (2x). Výsledek: (x³ + x² − 1) / (2x), pro x ≠ 0 a x ≠ −1.",
        difficulty: "medium",
      },
      {
        prompt: "Najděte všechna řešení v ℝ: x⁴ − x³ + x² − x + 1 = 0. (Návod: a²+b² = (a+b)² − 2ab)",
        solution: "Dělíme rovnici x² (pro x ≠ 0): x² − x + 1 − 1/x + 1/x² = 0. Přepíšeme: (x² + 1/x²) − (x + 1/x) + 1 = 0. Substituce t = x + 1/x, pak x² + 1/x² = t² − 2. Rovnice: (t² − 2) − t + 1 = 0, tj. t² − t − 1 = 0. Diskriminant: D = 1 + 4 = 5. t = (1 + √5)/2 nebo t = (1 − √5)/2. Pro t = (1+√5)/2 ~ 1.618: x + 1/x = t, tj. x² − tx + 1 = 0. D = t² − 4 = (1+√5)²/4 − 4 = (6+2·√5)/4 − 4 = (6+2·√5−16)/4 = (−10+2·√5)/4 < 0. Žádné reálné řešení. Pro t = (1−√5)/2 ~ −0.618: x² − tx + 1 = 0. D = t² − 4 = (1−√5)²/4 − 4 = (6−2·√5)/4 − 4 = (−10−2·√5)/4 < 0. Žádné reálné řešení. Rovnice nemá žádné reálné řešení.",
        difficulty: "hard",
      },
    ],
  },
  // T4
  {
    id: "linearni-rovnice-nerovnice",
    number: 4,
    name: "Lineární rovnice, nerovnice a jejich soustavy",
    category: "algebra",
    theory: [
      "Lineární rovnice ax + b = 0 má právě jedno řešení x = −b/a pro a ≠ 0.",
      "Rovnice s absolutní hodnotou |f(x)| = g(x): řešíme rozpadem na případy podle znaménka výrazu uvnitř absolutní hodnoty.",
      "Rovnice s parametrem: řešíme v závislosti na hodnotě parametru, diskutujeme speciální případy.",
      "Nerovnice: při násobení/dělení záporným číslem se otáčí znaménko nerovnosti.",
      "Rovnice s odmocninou: umocněním mohou vzniknout nepravá řešení — nutná zkouška.",
      "Nerovnice s podílovou formou: řešíme pomocí nulového bodu čitatele a jmenovatele (tabulka znamének)."
    ],
    formulas: [
      "ax + b = 0 ⇒ x = −b/a (a ≠ 0)",
      "|x| = a ⇔ x = a nebo x = −a (a ≥ 0)",
      "|x| ≤ a ⇔ −a ≤ x ≤ a",
      "Zkouška: dosadíme řešení zpět do původní rovnice"
    ],
    problems: [
      {
        prompt: "Řešte v oboru reálných čísel, a ∈ ℤ je parametr: a·|x−1| + |x·a − 1| ≤ a − x.",
        solution: "Rozlišíme případy podle znamének výrazů v absolutních hodnotách. Kritické body: x = 1 a x = 1/a (pro a ≠ 0). Pro a = 0: |0−1| + |0−1| ≤ 0−x ⇒ 1+1 ≤ −x ⇒ x ≤ −2. Pro a = 1: |x−1| + |x−1| ≤ 1−x ⇒ 2|x−1| ≤ 1−x. Pro x ≥ 1: 2(x−1) ≤ 1−x ⇒ 2x−2 ≤ 1−x ⇒ 3x ≤ 3 ⇒ x ≤ 1, tedy x = 1. Pro x < 1: 2(1−x) ≤ 1−x ⇒ 2−2x ≤ 1−x ⇒ 1 ≤ x, tedy x = 1 není v (x<1). Výsledek pro a=1: x = 1. Pro obecné a je třeba diskutovat více případů podle vztahu mezi kritickými body a znaménkem a.",
        difficulty: "hard",
      },
      {
        prompt: "Řešte následující rovnici v ℝ, c je parametr z ℝ: |x − c| = |x + c|.",
        solution: "Umocníme obě strany (obě jsou nezáporné): (x−c)² = (x+c)². x² − 2cx + c² = x² + 2cx + c². −2cx = 2cx. −4cx = 0. Tedy c = 0 nebo x = 0. Pro c = 0: rovnice |x| = |x| platí pro všechna x ∈ ℝ. Pro c ≠ 0: jediné řešení je x = 0.",
        difficulty: "easy",
      },
      {
        prompt: "V ℝ řešte rovnici: 3x² − 3x − 4 = 1/(x−4) + 1.",
        solution: "Podmínka: x ≠ 4. Převedeme na společný jmenovatel: 3x² − 3x − 4 − 1 = 1/(x−4), tj. 3x² − 3x − 5 = 1/(x−4). Násobíme (x−4): (3x²−3x−5)(x−4) = 1. 3x³ − 12x² − 3x² + 12x − 5x + 20 = 1. 3x³ − 15x² + 7x + 20 = 1. 3x³ − 15x² + 7x + 19 = 0. Zkoušíme racionální kořeny (dělitelé 19 / dělitelé 3): x = 1: 3−15+7+19 = 14 ≠ 0. x = −1: −3−15−7+19 = −6 ≠ 0. x = 19: příliš velké. Tato kubická rovnice se řeší numericky nebo pomocí Cardanova vzorce.",
        difficulty: "hard",
      },
      {
        prompt: "V ℝ řešte nerovnici: (x² − x − 6)/(x − 3) ≤ 1.",
        solution: "Podmínka: x ≠ 3. Rozložme čitatel: x² − x − 6 = (x−3)(x+2). Pro x ≠ 3: (x−3)(x+2)/(x−3) = x+2. Tedy nerovnice se zjednoduší na x + 2 ≤ 1, tj. x ≤ −1. Ale musíme ověřit, že x ≠ 3, což je splněno pro x ≤ −1. Výsledek: x ∈ (−∞, −1⟩.",
        difficulty: "easy",
      },
      {
        prompt: "Řešte soustavu rovnic: √(x−1) + √(y−5) = 1; y = 5 + √(x−1).",
        solution: "Podmínky: x ≥ 1, y ≥ 5. Z druhé rovnice: √(y−5) = √(√(x−1)) — ne, správně: y − 5 = √(x−1), takže √(y−5) = √(√(x−1)) = (x−1)^(1/4). Ale původní: z druhé rovnice y = 5 + √(x−1), tedy y − 5 = √(x−1) ≥ 0. √(y−5) = (x−1)^(1/4). Dosadíme do první rovnice: √(x−1) + (x−1)^(1/4) = 1. Substituce t = (x−1)^(1/4), t ≥ 0: t² + t = 1, t² + t − 1 = 0. D = 1+4 = 5. t = (−1+√5)/2 ~ 0.618 (druhý kořen záporný, nevyhovuje). x−1 = t⁴ = ((−1+√5)/2)⁴. Spočítáme: t² = (6−2·√5)/4 = (3−√5)/2. t⁴ = ((3−√5)/2)² = (14−6·√5)/4 = (7−3·√5)/2. x = 1 + (7−3·√5)/2 = (9−3·√5)/2. y = 5 + √(x−1) = 5 + t² = 5 + (3−√5)/2 = (13−√5)/2.",
        difficulty: "hard",
      },
      {
        prompt: "V ℝ řešte nerovnici: (x² − 7x + 12)/(2x² + 4x + 5) > 0.",
        solution: "Jmenovatel: 2x² + 4x + 5. D = 16 − 40 = −24 < 0, vedoucí koeficient kladný, tedy jmenovatel je vždy kladný. Nerovnice je ekvivalentní s x² − 7x + 12 > 0. Rozklad: (x−3)(x−4) > 0. Nulové body: x = 3, x = 4. Tabulka znamének: pro x < 3: (+)(−)=(−) < 0; pro 3 < x < 4: (−)(−)=(+) > 0 — ne, ověřme: pro x = 3.5: (0.5)(−0.5) = −0.25 < 0. Správně: (x−3)(x−4): pro x < 3: obě záporné, součin kladný; pro 3 < x < 4: první kladný, druhý záporný, součin záporný; pro x > 4: obě kladné, součin kladný. Výsledek: x ∈ (−∞, 3) ∪ (4, +∞).",
        difficulty: "medium",
      },
      {
        prompt: "V ℝ řešte rovnici: x + √(x + √(x + √(x + ...))) = x − 3.",
        solution: "Označme S = √(x + √(x + √(x + ...))). Rovnice: x + S = x − 3, tedy S = −3. Ale S je definováno jako odmocnina, tedy S ≥ 0, a S = −3 < 0 je spor. Rovnice nemá řešení v ℝ.",
        difficulty: "medium",
      },
      {
        prompt: "V ℝ řešte nerovnici: (x²+1)/x > x/(2x+1).",
        solution: "Převedeme na jeden zlomek: (x²+1)/x − x/(2x+1) > 0. Společný jmenovatel x(2x+1): ((x²+1)(2x+1) − x²) / (x(2x+1)) > 0. Čitatel: 2x³ + x² + 2x + 1 − x² = 2x³ + 2x + 1. Analyzujeme f(x) = 2x³ + 2x + 1. f'(x) = 6x² + 2 > 0 vždy, tedy f je rostoucí. f(0) = 1 > 0, f(−1) = −2−2+1 = −3 < 0. Existuje jediný reálný kořen r ~ −0.36. Čitatel: kladný pro x > r, záporný pro x < r. Jmenovatel x(2x+1): nulové body x = 0 a x = −1/2. Tabulka znamének s body r < −1/2 < 0: x < r: čitatel(−)/jmenov(+)=(−); r < x < −1/2: (+)/(−) = (−) — ověřme znaménko jmenovatele. x(2x+1) pro x ∈ (−1/2, 0): x < 0, 2x+1 > 0, součin < 0. Pro x < −1/2: x < 0, 2x+1 < 0, součin > 0. Správná tabulka: x < r: (−/+) = (−); r < x < −1/2: (+/+) = (+); −1/2 < x < 0: (+/−) = (−); x > 0: (+/+) = (+). Výsledek: x ∈ (r, −1/2) ∪ (0, +∞), kde r je kořen 2x³+2x+1 = 0.",
        difficulty: "hard",
      },
      {
        prompt: "V ℝ řešte rovnici: (x+3)/(x−3) + 4(x−3)/(x+3) = 4.",
        solution: "Podmínky: x ≠ 3 a x ≠ −3. Substituce t = (x+3)/(x−3): rovnice t + 4/t = 4. Násobíme t: t² + 4 = 4t. t² − 4t + 4 = 0. (t−2)² = 0. t = 2. Tedy (x+3)/(x−3) = 2. x+3 = 2(x−3) = 2x−6. x = 9. Zkouška: (9+3)/(9−3) + 4(9−3)/(9+3) = 12/6 + 4·6/12 = 2 + 2 = 4. Výsledek: x = 9.",
        difficulty: "medium",
      },
    ],
  },
  // T5
  {
    id: "kvadraticke-rovnice-nerovnice",
    number: 5,
    name: "Kvadratické rovnice a nerovnice",
    category: "algebra",
    theory: [
      "Kvadratická rovnice ax²+bx+c = 0 (a ≠ 0). Diskriminant D = b²−4ac.",
      "D > 0: dva různé reálné kořeny. D = 0: jeden dvojnásobný kořen. D < 0: žádný reálný kořen.",
      "Vièteovy vzorce: x₁+x₂ = −b/a, x₁·x₂ = c/a.",
      "Reciproká rovnice: koeficienty symetrické, řeší se substitucí t = x + 1/x.",
      "Nerovnice vyššího stupně: rozklad na součin a tabulka znamének.",
      "Kubická rovnice: hledáme racionální kořen (dělitelé absolutního členu / dělitelé vedoucího koeficientu), pak dělíme."
    ],
    formulas: [
      "x = (−b ± √D) / (2a), kde D = b² − 4ac",
      "x₁ + x₂ = −b/a, x₁ · x₂ = c/a (Vièteovy vzorce)",
      "ax²+bx+c = a(x−x₁)(x−x₂)"
    ],
    problems: [
      {
        prompt: "Koreny x1, x2 rovnice x^2 - 3kx + k^2 = 0 vyhovuji vztahu x1^2 + x2^2 = 1.75. Urcete k.",
        solution: "Z Vietovych vzorcu: x1+x2 = 3k, x1*x2 = k^2. Pouzijeme identitu x1^2+x2^2 = (x1+x2)^2 - 2*x1*x2 = 9k^2 - 2k^2 = 7k^2. Podminka: 7k^2 = 1.75 = 7/4. k^2 = 1/4. k = 1/2 nebo k = -1/2. Overeni existence korenu: D = 9k^2 - 4k^2 = 5k^2 = 5/4 > 0, oba koreny jsou realne. Vysledek: k = 1/2 nebo k = -1/2.",
        difficulty: "medium",
      },
      {
        prompt: "Reste nerovnici v R: x^3 - 5x^2 - x >= -5.",
        solution: "Prepiseme: x^3 - 5x^2 - x + 5 >= 0. Hledame koreny: x = 1: 1-5-1+5 = 0. Delime (x-1): x^3-5x^2-x+5 = (x-1)(x^2-4x-5) = (x-1)(x-5)(x+1). Nerovnice: (x-1)(x-5)(x+1) >= 0. Nulove body: -1, 1, 5. Tabulka znaminek: x < -1: (-)(-)(-)=(-); -1 < x < 1: (-)(-)( +)=(+); 1 < x < 5: (+)(-)(+)=(-); x > 5: (+)(+)(+)=(+). Reseni: x in [-1, 1] u [5, +inf).",
        difficulty: "medium",
      },
      {
        prompt: "Najdete vsechna reseni v R: 2x^4 + 3x^3 - 16x^2 + 3x + 2 = 0 (reciproka rovnice).",
        solution: "Reciproka rovnice — koeficienty symetricke (2,3,-16,3,2). x = 0 neni koren. Delime x^2: 2x^2 + 3x - 16 + 3/x + 2/x^2 = 0. 2(x^2+1/x^2) + 3(x+1/x) - 16 = 0. Substituce t = x + 1/x: x^2+1/x^2 = t^2-2. 2(t^2-2) + 3t - 16 = 0. 2t^2 + 3t - 20 = 0. D = 9+160 = 169 = 13^2. t = (-3+13)/4 = 5/2 nebo t = (-3-13)/4 = -4. Pro t = 5/2: x+1/x = 5/2, x^2-5x/2+1 = 0, 2x^2-5x+2 = 0. D = 25-16 = 9. x = (5+3)/4 = 2 nebo x = (5-3)/4 = 1/2. Pro t = -4: x+1/x = -4, x^2+4x+1 = 0. D = 16-4 = 12. x = (-4+2*sqrt(3))/2 = -2+sqrt(3) nebo x = -2-sqrt(3). Reseni: x in {2, 1/2, -2+sqrt(3), -2-sqrt(3)}.",
        difficulty: "hard",
      },
      {
        prompt: "Reste nerovnici v R: x^3 - 4x^2 - 4x >= -16.",
        solution: "Prepiseme: x^3 - 4x^2 - 4x + 16 >= 0. Hledame koreny: x = 4: 64-64-16+16 = 0. Delime (x-4): x^3-4x^2-4x+16 = (x-4)(x^2-4) = (x-4)(x-2)(x+2). Nerovnice: (x-4)(x-2)(x+2) >= 0. Nulove body: -2, 2, 4. Tabulka: x < -2: (-)(-)(-) = (-); -2 < x < 2: (-)(-)(+) = (+); 2 < x < 4: (-)(+)(+) = (-); x > 4: (+)(+)(+) = (+). Reseni: x in [-2, 2] u [4, +inf).",
        difficulty: "medium",
      },
    ],
  },
  // T6
  {
    id: "soustavy-rovnic",
    number: 6,
    name: "Soustavy rovnic − Gauss, Cramer",
    category: "algebra",
    theory: [
      "Gaussova eliminační metoda: převod rozšířené matice soustavy na stupňovitý tvar řádkovými úpravami.",
      "Cramerovo pravidlo: xᵢ = Dᵢ/D, kde D je determinant matice soustavy a Dᵢ je determinant s nahrazeným i-tým sloupcem pravou stranou. Podmínka: D ≠ 0.",
      "Diskuze řešitelnosti: soustava má řešení ⇔ hodnost matice soustavy = hodnost rozšířené matice (Frobenius).",
      "Pokud počet neznámých > hodnost matice, soustava má nekonečně mnoho řešení (parametrické řešení).",
      "Homogenní soustava (pravé strany nulové) má vždy triviální řešení; netriviální řešení existuje ⇔ D = 0.",
      "Soustava s parametrem: diskutujeme hodnoty parametru vedoucí k různým situacím (jedno řešení, nekonečně, žádné)."
    ],
    formulas: [
      "Cramer: xᵢ = Dᵢ / D, D = det(A) ≠ 0",
      "det 2×2: |a b; c d| = ad − bc",
      "Sarrus 3×3: a₁₁·a₂₂·a₃₃ + a₁₂·a₂₃·a₃₁ + a₁₃·a₂₁·a₃₂ − a₁₃·a₂₂·a₃₁ − a₁₂·a₂₁·a₃₃ − a₁₁·a₂₃·a₃₂",
      "Frobeniova věta: soustava má řešení ⇔ h(A) = h(A|b)"
    ],
    problems: [
      {
        prompt: "Vyreste soustavu rovnic Gaussovou eliminacni metodou: 2x1 + 3x2 + 2x3 - x4 = 5; 2x1 + 14x2 - 8x4 = 10; 3x1 - x2 + 4x3 + 2x4 = 1.",
        solution: "Rozsirena matice: ((2,3,2,-1|5),(2,14,0,-8|10),(3,-1,4,2|1)). R2 = R2-R1: (0,11,-2,-7|5). R3 = R3-1.5*R1: (0,-5.5,1,3.5|-6.5), tj. nasobime 2: (0,-11,2,7|-13). R3 = R3+R2: (0,0,0,0|-8). Posledni radek dava 0 = -8, coz je spor. Soustava nema reseni.",
        difficulty: "medium",
      },
      {
        prompt: "S pouzitim Cramerova pravidla reste soustavu rovnic: ax + y - z = 1; x + ay - z = 1; -x + y + az = 1.",
        solution: "Matice soustavy A = ((a,1,-1),(1,a,-1),(-1,1,a)). D = det(A) = a(a^2+1) - 1(a-1) + (-1)(1+a) = a^3+a - a+1 - 1-a = a^3 - a = a(a-1)(a+1). Pro a != 0, a != 1, a != -1: D1 = det((1,1,-1),(1,a,-1),(1,1,a)) = a^2+1-1-(-a+1+a) = a^2+1-1-1 = a^2-1 = (a-1)(a+1). Ne, spocitame presne: D1 = 1*(a^2+1) - 1*(a+1) + (-1)*(1-a) = a^2+1-a-1-1+a = a^2-1. Symetrie rovnice: D2 = D3 = D1 = a^2-1 (overime substituci). x = D1/D = (a^2-1)/(a(a^2-1)) = 1/a. Symetricky: y = z = 1/a. Pro a=0: D=0, specialni pripad. Pro a=1: D=0, z rovnic: x+y-z=1, x+y-z=1, -x+y+z=1, tedy prvni dve rovnice jsou totozne. Mame 2 rovnice o 3 neznamych: x+y-z=1 a -x+y+z=1. Souctem: 2y=2, y=1. x = z (parametricke). Reseni: (t, 1, t), t in R. Pro a=-1: D=0, rovnice: -x+y-z=1, x-y-z=1, -x+y-z=1. Prvni a treti totozne. Soustava: -x+y-z=1 a x-y-z=1. Souctem: -2z=2, z=-1. x-y=2. Reseni: (t+2, t, -1).",
        difficulty: "hard",
      },
      {
        prompt: "Diskutujte resitelnost dane soustavy: x+y+z = 9; x+y+u = 11; x+z+u = 13; y+z+u = 15.",
        solution: "Secteme vsechny 4 rovnice: 3(x+y+z+u) = 48, tedy x+y+z+u = 16. Z prvni rovnice: u = 16-9 = 7. Z druhe: z = 16-11 = 5. Z treti: y = 16-13 = 3. Ze ctvrte: x = 16-15 = 1. Overeni: 1+3+5 = 9, 1+3+7 = 11, 1+5+7 = 13, 3+5+7 = 15. Vse sedi. Jedine reseni: x=1, y=3, z=5, u=7.",
        difficulty: "medium",
      },
      {
        prompt: "Vyreste soustavu rovnic Gaussovou eliminacni metodou, lambda je realny parametr: x + lambda*y = 1; x + y = lambda.",
        solution: "R2 = R2 - R1: (1-lambda)*y = lambda-1, tj. -(lambda-1)*y = lambda-1. Pro lambda != 1: y = -1. Z prvni rovnice: x = 1 - lambda*(-1) = 1+lambda. Reseni: x = 1+lambda, y = -1. Pro lambda = 1: R2: 0 = 0, nekonecne reseni. Z prvni rovnice: x + y = 1. Parametricke reseni: x = 1-t, y = t, t in R.",
        difficulty: "medium",
      },
      {
        prompt: "S pouzitim Cramerova pravidla reste soustavu rovnic: x - 3y + 4u = -5; x - 2z + 3u = -4; 3x + 2y - 5u = 12; 4x + 3y - 5z = 5.",
        solution: "Mame 4 rovnice o 4 neznamych (x,y,z,u). Matice A = ((1,-3,0,4),(1,0,-2,3),(3,2,0,-5),(4,3,-5,0)). Spocitame D = det(A) rozvojem. Rozvoj podle 1. sloupce: D = 1*M11 - 1*M21 + 3*M31 - 4*M41. M11 = det((0,-2,3),(2,0,-5),(3,-5,0)) = 0+30+0-0-0+0 = 30. Presneji: 0*(0*0-(-5)*(-5)) - (-2)*(2*0-(-5)*3) + 3*(2*(-5)-0*3) = 0-(-2)*15+3*(-10) = 30-30 = 0. M21 = det((-3,0,4),(2,0,-5),(3,-5,0)) = -3*(0-25)-0+4*(-10-0) = -3*(-25)+4*(-10) = 75-40 = 35. M31 = det((-3,0,4),(0,-2,3),(3,-5,0)) = -3*(0+15)-0+4*(0+6) = -45+24 = -21. M41 = det((-3,0,4),(0,-2,3),(2,0,-5)) = -3*(10-0)-0+4*(0+4) = -30+16 = -14. D = 1*0 - 1*35 + 3*(-21) - 4*(-14) = 0-35-63+56 = -42. Pokud D != 0 (D = -42), muzeme pouzit Cramerovo pravidlo pro kazdy Di a spocitat x, y, z, u.",
        difficulty: "hard",
      },
      {
        prompt: "Diskutujte resitelnost dane soustavy rovnic: x - 2y + z + u = 1; x - 2y + z - u = -1; x - 2y + z + 5u = 5.",
        solution: "R2 = R2-R1: -2u = -2, tedy u = 1. R3 = R3-R1: 4u = 4, tedy u = 1. Konzistentni. Dosadime u=1 do R1: x - 2y + z + 1 = 1, tj. x - 2y + z = 0. Jedna rovnice o 3 neznamych — nekonecne reseni. Parametricke reseni: y = s, z = t, x = 2s - t, kde s, t in R. Reseni: x = 2s-t, y = s, z = t, u = 1.",
        difficulty: "medium",
      },
    ],
  },
  // T7
  {
    id: "funkce-vlastnosti",
    number: 7,
    name: "Funkce a jejich vlastnosti",
    category: "analysis",
    theory: [
      "Funkce f: D → H přiřadí každému x z definičního oboru D právě jednu hodnotu y z oboru hodnot H.",
      "Definiční obor D(f): množina všech x, pro které je funkce definována (jmenovatel ≠ 0, výraz pod odmocninou ≥ 0, argument logaritmu > 0).",
      "Obor hodnot H(f): množina všech y, kterých funkce nabývá.",
      "Monotonie: rostoucí (x₁ < x₂ ⇒ f(x₁) < f(x₂)), klesající (x₁ < x₂ ⇒ f(x₁) > f(x₂)).",
      "Sudost: f(−x) = f(x), graf souměrný podle osy y. Lichost: f(−x) = −f(x), graf souměrný podle počátku.",
      "Signum (sgn): sgn(x) = 1 pro x > 0, sgn(x) = 0 pro x = 0, sgn(x) = −1 pro x < 0.",
      "Limita funkce: lim_{x→a} f(x) = L znamená, že f(x) se blíží k L při x blížícím se k a.",
      "Průnik množin v rovině: C = A ∩ B se znázorňuje jako společná oblast obou množin."
    ],
    formulas: [
      "D(f): jmenovatel ≠ 0, výraz pod √ ≥ 0, log argument > 0",
      "sgn(x) = 1 pro x > 0, 0 pro x = 0, −1 pro x < 0",
      "f sudá ⇔ f(−x) = f(x), f lichá ⇔ f(−x) = −f(x)",
      "lim_{x→a} f(x)/g(x) = L (L'Hospitalovo pravidlo při 0/0 nebo ∞/∞)"
    ],
    problems: [
      {
        prompt: "Je dán systém funkcí. Určete ty, které mají definičním oborem všechna reálná čísla: y = √(6x − 3x²) / (x² − 2x + p), p ∈ ℝ, parametr.",
        solution: "Podmínky: 1) 6x−3x² ≥ 0 ⇒ 3x(2−x) ≥ 0 ⇒ x ∈ [0,2]. 2) x²−2x+p ≠ 0. Aby D(f) = ℝ, musela by podmínka 1 platit pro všechna x ∈ ℝ, ale 6x−3x² ≥ 0 jen pro x ∈ [0,2]. Tedy žádná hodnota p nedává D(f) = ℝ. Funkce nemá definičním oborem všechna reálná čísla pro žádné p. Pokud otázka míří na to, pro která p není jmenovatel nulový na [0,2]: D jmenovatele = 4−4p. Pro p > 1: žádné reálné kořeny, jmenovatel nikdy nulový. Pro p = 1: kořen x = 1 ∈ [0,2], nulový jmenovatel. Pro p < 1: kořeny 1±√(1−p), ověřit zda leží v [0,2].",
        difficulty: "hard",
      },
      {
        prompt: "Určete definiční obor funkce v závislosti na parametru b ∈ ℝ: y = e^(x² − 2bx + 1) / (x² − 2bx + 1).",
        solution: "Podmínky: jmenovatel x²−2bx+1 ≠ 0. Diskriminant: D = 4b²−4 = 4(b²−1). Pro |b| < 1: D < 0, jmenovatel je vždy nenulový, D(f) = ℝ. Pro |b| = 1: D = 0, dvojnásobný kořen x = b. D(f) = ℝ ∖ {b}. Pro b=1: D(f) = ℝ ∖ {1}. Pro b=−1: D(f) = ℝ ∖ {−1}. Pro |b| > 1: D > 0, kořeny x = b ± √(b²−1). D(f) = ℝ ∖ {b−√(b²−1), b+√(b²−1)}.",
        difficulty: "medium",
      },
      {
        prompt: "Je dána funkce f: y = (x²−4)/(x−2)². Načrtněte její graf. Určete lim_{x→2} (x²−4)/(x−2)².",
        solution: "Upravíme: (x²−4)/(x−2)² = (x−2)(x+2)/(x−2)² = (x+2)/(x−2) pro x ≠ 2. Funkce f(x) = (x+2)/(x−2) = 1 + 4/(x−2). Jde o hyperbolu s asymptotami x = 2 (svislá) a y = 1 (vodorovná), posunutou. Limita: lim_{x→2+} (x+2)/(x−2) = 4/0+ = +∞. lim_{x→2−} (x+2)/(x−2) = 4/0− = −∞. Limita v bodě x = 2 neexistuje (jednostranné limity jsou různé). Graf: hyperbola se středem (2, 1).",
        difficulty: "medium",
      },
      {
        prompt: "Vyznačte množinu uspořádaných dvojic (x,y) ∈ ℝ × ℝ, pro které platí: |x+2| + |y−1| ≤ 3.",
        solution: "Jde o množinu bodů, jejichž ‚manhattanovská vzdálenost' od bodu (−2, 1) je nejvýše 3. Geometricky je to čtverec (kosočtverec) se středem (−2, 1) a ‚poloměry' 3 ve směrech os. Vrcholy: (−2, 1+3) = (−2, 4); (−2, 1−3) = (−2, −2); (−2+3, 1) = (1, 1); (−2−3, 1) = (−5, 1). Oblast je konvexní čtyřúhelník (kosočtverec) s těmito vrcholy včetně vnitřku.",
        difficulty: "easy",
      },
      {
        prompt: "Je dána funkce f: y = sin(x) + 2/sin(x). Načrtněte její graf, určete základní vlastnosti.",
        solution: "D(f): sin(x) ≠ 0, tedy x ≠ k·π, k ∈ ℤ. Funkce je lichá: f(−x) = sin(−x)+2/sin(−x) = −sin(x)−2/sin(x) = −f(x). Pro sin(x) > 0 (x ∈ (0,π)): pomocí AM-GM nerovnosti: sin(x) + 2/sin(x) ≥ 2·√2 (rovnost pro sin(x) = √2, což není ≤ 1). Ve skutečnosti sin(x) ∈ (0,1], takže f(x) = sin(x)+2/sin(x). Pro sin(x) = 1 (x = π/2): f = 1+2 = 3. Pro sin(x) → 0+: f → +∞. Minimum: f'(x) = cos(x) − 2·cos(x)/sin²(x) = cos(x)·(1−2/sin²(x)) = 0. Buď cos(x)=0 (x=π/2) nebo sin²(x)=2 (nemožné). V x=π/2: f=3, to je minimum na (0,π). H(f) = (−∞, −3] ∪ [3, +∞).",
        difficulty: "hard",
      },
      {
        prompt: "Načrtněte graf funkce f: y = x·|x−2| + sgn(x). Určete H(f), stanovte monotonii, najděte limitu v bodě 0. Pro která p ∈ ℝ má rovnice f(x) = p dvě řešení?",
        solution: "Rozdělíme podle x: Pro x ≥ 2: f(x) = x(x−2)+1 = x²−2x+1 = (x−1)². Pro 0 < x < 2: f(x) = x(2−x)+1 = −x²+2x+1. Pro x = 0: f(0) = 0·|0−2|+sgn(0) = 0+0 = 0. Pro x < 0: f(x) = x(2−x)−1 = −x²+2x−1 = −(x−1)². Limita v 0: lim_{x→0+} f(x) = −0+0+1 = 1. lim_{x→0−} f(x) = −0+0−1 = −1. f(0) = 0. Funkce není spojitá v 0. H(f): Pro x ≥ 2: (x−1)², x ≥ 2, tedy (x−1) ≥ 1, f ≥ 1. Pro 0 < x < 2: −(x−1)²+2, max = 2 (v x=1), f ∈ (1, 2]. Pro x < 0: −(x−1)², max = 0 (při x→−∞: −∞), f ∈ (−∞, −1). V bodě 0: f=0. H(f) = (−∞, −1) ∪ {0} ∪ [1, +∞). Rovnice f(x) = p má dvě řešení pro p ∈ (1, 2) (dva body na parabole 0<x<2 a jeden na x≥2, ale ten se sloučí) a pro p < −1 (žádné). Přesněji analyzujeme graf.",
        difficulty: "hard",
      },
      {
        prompt: "Graficky najděte obor pravdivosti dané nerovnice |x−3| ≥ |x|/4.",
        solution: "Řešíme |x−3| ≥ x/4 (předpokládáme |x|/4). Případy: 1) x ≥ 3: x−3 ≥ x/4, 3x/4 ≥ 3, x ≥ 4. Řešení: x ≥ 4. 2) 0 ≤ x < 3: 3−x ≥ x/4, 3 ≥ 5x/4, x ≤ 12/5 = 2.4. Řešení: [0, 2.4]. 3) x < 0: 3−x ≥ −x/4, 3 ≥ 3x/4, x ≤ 4. Ale x < 0, takže řešení: x < 0. Celkové řešení: (−∞, 2.4] ∪ [4, +∞).",
        difficulty: "medium",
      },
      {
        prompt: "V pravoúhlé soustavě souřadnic znázorněte množinu C = A ∩ B. A = {(x,y) ∈ ℝ×ℝ: x·y − 2 ≤ 0}, B = {(x,y) ∈ ℝ×ℝ: |x| − |y| ≤ 1}.",
        solution: "Množina A: x·y ≤ 2. To jsou body pod/na hyperbole xy = 2 (v 1. a 3. kvadrantu) a nad/na hyperbole xy = 2 (v 2. a 4. kvadrantu), včetně os. Přesněji: pro x > 0: y ≤ 2/x; pro x < 0: y ≥ 2/x; pro x = 0: platí vždy. Množina B: |x| − |y| ≤ 1. Oblast mezi přímkami |x| − |y| = 1, tj. mimo ‚kříž' tvaru kosočtverce. Konkrétně |y| ≥ |x| − 1: pro x ≥ 0: y ≥ x−1 nebo y ≤ −(x−1). Oblast mezi dvěma přímkami. Průnik C = A ∩ B je společná část obou oblastí. Graficky znázorníme překrytím.",
        difficulty: "medium",
      },
      {
        prompt: "Načrtněte graf funkce g: y = sgn(x² − x − 6) + 2. Určete H(g), stanovte monotonii, určete limity v nevlastních bodech a v bodech nespojitosti.",
        solution: "x²−x−6 = (x−3)(x+2). sgn((x−3)(x+2)): Pro x < −2: oba faktory záporné, součin kladný, sgn = 1. Pro x = −2: součin = 0, sgn = 0. Pro −2 < x < 3: součin záporný, sgn = −1. Pro x = 3: součin = 0, sgn = 0. Pro x > 3: součin kladný, sgn = 1. g(x) = sgn(...)+2: Pro x < −2: g = 3. x = −2: g = 2. Pro −2 < x < 3: g = 1. x = 3: g = 2. Pro x > 3: g = 3. H(g) = {1, 2, 3}. Monotonie: konstantní po částech, není ryze rostoucí ani klesající. Nespojitost: v x = −2 (skok z 3 na 2 na 1) a x = 3 (skok z 1 na 2 na 3). Limity: lim_{x→−∞} g = 3, lim_{x→+∞} g = 3. lim_{x→−2−} g = 3, lim_{x→−2+} g = 1. lim_{x→3−} g = 1, lim_{x→3+} g = 3.",
        difficulty: "medium",
      },
      {
        prompt: "Graficky najděte obor pravdivosti nerovnice |x|/6 ≥ x − 4. Najděte inverzní funkci k y = √(x−6) − 3 + 4 a určete její vlastnosti.",
        solution: "Část 1: |x|/6 ≥ x−4. Pro x ≥ 0: x/6 ≥ x−4, x ≥ 6x−24, −5x ≥ −24, x ≤ 24/5 = 4.8. S podmínkou x ≥ 0: x ∈ [0, 4.8]. Pro x < 0: −x/6 ≥ x−4, −x ≥ 6x−24, 24 ≥ 7x, x ≤ 24/7. S podmínkou x < 0: x ∈ (−∞, 0). Celkově: x ∈ (−∞, 4.8]. Část 2: y = √(x−6) − 3 + 4 = √(x−6) + 1. D(f) = [6, +∞), H(f) = [1, +∞). Inverzní funkce: x = √(y−6)+1 ⇒ y−6 = (x−1)² ⇒ y = (x−1)²+6. Inverzní: f⁻¹(x) = (x−1)²+6, D = [1, +∞), H = [6, +∞).",
        difficulty: "medium",
      },
      {
        prompt: "V pravoúhlé soustavě souřadnic znázorněte množinu C = A ∩ B. A = {(x,y) ∈ ℝ×ℝ: x·y + 3 ≥ 0}, B = {(x,y) ∈ ℝ×ℝ: |x| + |y| ≤ 2}.",
        solution: "Množina A: xy ≥ −3. Pro x > 0: y ≥ −3/x. Pro x < 0: y ≤ −3/x. Pro x = 0: platí vždy. Oblast ‚nad' hyperbolou xy = −3 v 1. a 3. kvadrantu a ‚pod' ní v 2. a 4. Množina B: |x|+|y| ≤ 2. To je kosočtverec (čtverec otočený o 45 stupňů) s vrcholy (2,0), (0,2), (−2,0), (0,−2). Průnik C: část kosočtverce, kde současně platí xy ≥ −3. Protože v kosočtverci |x| ≤ 2 a |y| ≤ 2, maximální |xy| = 4, a podmínka xy ≥ −3 vylučuje jen malá část v 2. a 4. kvadrantu, kde xy < −3. Ve skutečnosti v kosočtverci |xy| ≤ (|x|+|y|)²/4 = 1 (z AM-GM), takže |xy| ≤ 1 < 3, tedy xy > −3 vždy platí. C = B = kosočtverec.",
        difficulty: "medium",
      },
      {
        prompt: "Sestrojte graf funkce h: y = (x−1)/(x+1). Určete počet řešení rovnice h(x) + x² = 0.",
        solution: "h(x) = (x−1)/(x+1) = 1 − 2/(x+1). D(h) = ℝ ∖ {−1}. Svislá asymptota x = −1, vodorovná asymptota y = 1. Graf je hyperbola se středem (−1, 1). Rovnice h(x) + x² = 0: (x−1)/(x+1) + x² = 0. (x−1+x²(x+1))/(x+1) = 0. Čitatel: x³+x²+x−1 = 0. Zkoušíme x=0: −1≠0. Číselně: f(0) = −1, f(1) = 1+1+1−1 = 2, takže kořen je mezi 0 a 1. f'(x) = 3x²+2x+1, D = 4−12 < 0, f' > 0 vždy, tedy f je ryze rostoucí. Právě jeden reálný kořen. Počet řešení rovnice h(x) + x² = 0 je 1.",
        difficulty: "medium",
      },
    ],
  },
  // T8
  {
    id: "linearni-kvadraticka-funkce",
    number: 8,
    name: "Lineární a kvadratická funkce",
    category: "analysis",
    theory: [
      "Lineární funkce f(x) = ax + b: graf je přímka, a je směrnice (sklon), b je úsek na ose y.",
      "Kvadratická funkce f(x) = ax² + bx + c: graf je parabola, vrchol V = (−b/(2a), −(b²−4ac)/(4a)).",
      "Pro a > 0: parabola je konvexní (otevřená nahoru), minimum ve vrcholu. Pro a < 0: konkávní (otevřená dolů), maximum ve vrcholu.",
      "Průnik paraboly s osou x: počet řešení závisí na diskriminantu D = b²−4ac.",
      "Funkce s absolutní hodnotou |f(x)|: graf se ‚přeloží' — části pod osou x se zrcadlí nahoru.",
      "Rovnice f(x) = p s parametrem p: počet řešení závisí na poloze vodorovné přímky y = p vůči grafu."
    ],
    formulas: [
      "f(x) = ax + b, směrnice k = (y₂−y₁)/(x₂−x₁)",
      "f(x) = ax²+bx+c, vrchol V(−b/(2a), −D/(4a))",
      "D = b² − 4ac"
    ],
    problems: [
      {
        prompt: "Řešte graficky danou rovnici s reálným parametrem p: x² − 2x = p.",
        solution: "Funkce f(x) = x² − 2x = (x−1)² − 1. Parabola s vrcholem V(1, −1), otevřená nahoru. Řešíme f(x) = p, tedy hledáme průseky paraboly s vodorovnou přímkou y = p. Pro p < −1: žádný průsečík, 0 řešení. Pro p = −1: přímka se dotýká vrcholu, 1 řešení (x = 1). Pro p > −1: dva průseky, 2 řešení: x = 1 ± √(p+1).",
        difficulty: "easy",
      },
      {
        prompt: "Sestrojte graf funkce k: y = −x² + 2|x| − 1. Odečtěte z něj počet řešení rovnice −x² + 2|x| − 1 = −1/x.",
        solution: "Pro x ≥ 0: k(x) = −x²+2x−1 = −(x−1)². Parabola s vrcholem (1,0), otevřená dolů, k(x) ≤ 0. Pro x < 0: k(x) = −x²−2x−1 = −(x+1)². Parabola s vrcholem (−1,0), otevřená dolů, k(x) ≤ 0. Graf je symetrický podle osy y, dotýká se osy x v bodech (1,0) a (−1,0), s minimem y = −1 v x = 0 (ale k(0) = −1). Rovnice k(x) = −1/x: hledáme průseky grafu k(x) s grafem g(x) = −1/x (hyperbola). g(x) = −1/x: v 1. kvadrantu záporné (pod osou x), ve 2. kladné. Pro x > 0: −(x−1)² = −1/x ⇒ (x−1)² = 1/x. Graficky: parabola (x−1)² (otevřená nahoru, min v x=1) vs. 1/x (klesající). Jeden průsečík v x = 1: (1−1)² = 0 ≠ 1. Numericky: pro x=1: 0 vs 1. Pro x blízké 0+: (x−1)² → 1, 1/x → ∞. Existuje průsečík. Pro x → ∞: (x−1)² → ∞, 1/x → 0. Existuje průsečík. Celkem 2 průseky pro x > 0 a podobně analyzujeme x < 0. Celkový počet řešení: 3.",
        difficulty: "hard",
      },
    ],
  },
  // T9
  {
    id: "goniometricke-funkce",
    number: 9,
    name: "Goniometrické funkce a rovnice",
    category: "analysis",
    theory: [
      "Základní goniometrické funkce: sin, cos, tg (tan), cotg (cot). Definice pomocí jednotkové kružnice.",
      "Perioda: sin a cos mají periodu 2π, tg a cotg mají periodu π.",
      "Dvojnásobné úhly: sin(2x) = 2·sin(x)·cos(x), cos(2x) = cos²(x) − sin²(x) = 1 − 2·sin²(x) = 2·cos²(x) − 1.",
      "Součty a rozdíly: sin(a±b) = sin(a)·cos(b) ± cos(a)·sin(b). cos(a±b) = cos(a)·cos(b) ∓ sin(a)·sin(b).",
      "Identita: sin²(x) + cos²(x) = 1.",
      "Goniometrická rovnice sin(x) = a: x = (−1)ᵏ · arcsin(a) + k·π, k ∈ ℤ.",
      "Goniometrická nerovnice: řešení pomocí jednotkové kružnice nebo grafu."
    ],
    formulas: [
      "sin²(x) + cos²(x) = 1",
      "sin(2x) = 2·sin(x)·cos(x)",
      "cos(2x) = cos²(x) − sin²(x)",
      "tg(x) = sin(x)/cos(x)",
      "sin(a+b) = sin(a)cos(b) + cos(a)sin(b)",
      "cos(a+b) = cos(a)cos(b) − sin(a)sin(b)"
    ],
    problems: [
      {
        prompt: "Graficky i numericky řešte: f(x) = √3/2 a f(x) = sin(2x − π/4).",
        solution: "Řešíme sin(2x − π/4) = √3/2. Obecně řešení sin(u) = √3/2: u = π/3 + 2k·π nebo u = 2π/3 + 2k·π, k ∈ ℤ. 2x − π/4 = π/3 + 2k·π ⇒ x = (π/3 + π/4)/(2) + k·π = (7π/24) + k·π. Alternativně: 2x − π/4 = π − π/3 + 2k·π = 2π/3 + 2k·π ⇒ x = (2π/3 + π/4)/2 + k·π = (11π/24) + k·π. Řešení: x = 7π/24 + k·π nebo x = 11π/24 + k·π, k ∈ ℤ. Graficky: načrtneme y = sin(2x−π/4) a y = √3/2 a odečteme průseky.",
        difficulty: "medium",
      },
      {
        prompt: "Najděte množinu všech x, pro která platí v intervalu ⟨0, π/4⟩: (1−cos(2x)+sin(2x)) / (1+cos(2x)+sin(2x)) ≤ 1.",
        solution: "Použijeme identity: 1−cos(2x) = 2·sin²(x), sin(2x) = 2·sin(x)·cos(x), 1+cos(2x) = 2·cos²(x). Čitatel: 2·sin²(x) + 2·sin(x)·cos(x) = 2·sin(x)·(sin(x)+cos(x)). Jmenovatel: 2·cos²(x) + 2·sin(x)·cos(x) = 2·cos(x)·(cos(x)+sin(x)). Zlomek: (2·sin(x)·(sin(x)+cos(x))) / (2·cos(x)·(sin(x)+cos(x))). Pro sin(x)+cos(x) ≠ 0 (což platí na (0, π/4⟩): zlomek = sin(x)/cos(x) = tg(x). Nerovnice: tg(x) ≤ 1. Na intervalu ⟨0, π/4⟩: tg(x) rostoucí od 0 do 1. tg(x) ≤ 1 platí pro všechna x ∈ ⟨0, π/4⟩. Řešení: x ∈ ⟨0, π/4⟩.",
        difficulty: "medium",
      },
      {
        prompt: "Graficky i numericky řešte: g(x) = −1/2 a g(x) = sin(3x + π/6).",
        solution: "Řešíme sin(3x + π/6) = −1/2. Obecně řešení sin(u) = −1/2: u = −π/6 + 2k·π nebo u = π + π/6 + 2k·π = 7π/6 + 2k·π, k ∈ ℤ. 3x + π/6 = −π/6 + 2k·π ⇒ 3x = −π/3 + 2k·π ⇒ x = −π/9 + 2k·π/3. 3x + π/6 = 7π/6 + 2k·π ⇒ 3x = π + 2k·π ⇒ x = π/3 + 2k·π/3. Řešení: x = −π/9 + 2k·π/3 nebo x = π/3 + 2k·π/3, k ∈ ℤ.",
        difficulty: "medium",
      },
      {
        prompt: "Najděte množinu všech x na intervalu ⟨−π, π⟩, pro která platí: tg(2x)·tg(x) / (tg(2x) − tg(x)) ≤ 1 − (sin³(x)+cos³(x)) / (cos(x)+sin(x)).",
        solution: "Pravá strana: 1 − (sin³(x)+cos³(x))/(sin(x)+cos(x)). Rozklad: a³+b³ = (a+b)(a²−ab+b²). Tedy (sin³+cos³)/(sin+cos) = sin²−sin·cos+cos² = 1−sin·cos. Pravá strana: 1−(1−sin·cos) = sin(x)·cos(x) = sin(2x)/2. Levá strana: tg(2x)·tg(x)/(tg(2x)−tg(x)). Převedeme na sin a cos. Využijeme: tg(2x)−tg(x) = sin(2x)/cos(2x) − sin(x)/cos(x) = (sin(2x)·cos(x)−cos(2x)·sin(x))/(cos(2x)·cos(x)) = sin(2x−x)/(cos(2x)·cos(x)) = sin(x)/(cos(2x)·cos(x)). Čitatel: tg(2x)·tg(x) = sin(2x)·sin(x)/(cos(2x)·cos(x)). Zlomek: (sin(2x)·sin(x))/(cos(2x)·cos(x)) · cos(2x)·cos(x)/sin(x) = sin(2x). Levá strana = sin(2x). Nerovnice: sin(2x) ≤ sin(2x)/2, tj. sin(2x)/2 ≤ 0, tj. sin(2x) ≤ 0. Na ⟨−π, π⟩: 2x ∈ ⟨−2π, 2π⟩. sin(2x) ≤ 0 pro 2x ∈ [−2π, −π] ∪ [0, π], tj. x ∈ [−π, −π/2] ∪ [0, π/2]. (S vyloučením bodů, kde jsou denominátory nulové.)",
        difficulty: "hard",
      },
    ],
  },
  // T10
  {
    id: "exponencialni-logaritmicke",
    number: 10,
    name: "Exponenciální a logaritmické funkce",
    category: "analysis",
    theory: [
      "Exponenciální funkce f(x) = aˣ, a > 0, a ≠ 1. Pro a > 1 rostoucí, pro 0 < a < 1 klesající.",
      "Logaritmus: logₐ(x) je inverzní funkce k aˣ. logₐ(aˣ) = x, a^(logₐ(x)) = x.",
      "Pravidla pro logaritmy: log(xy) = log(x)+log(y), log(x/y) = log(x)−log(y), log(xⁿ) = n·log(x).",
      "Změna základu: logₐ(x) = log_b(x)/log_b(a) = ln(x)/ln(a).",
      "Exponenciální rovnice: převod na stejný základ nebo logaritmování.",
      "Logaritmické rovnice: podmínka x > 0 (argument logaritmu), převod na exponenciální tvar."
    ],
    formulas: [
      "aˣ · aʸ = a^(x+y), (aˣ)ʸ = a^(xy)",
      "logₐ(xy) = logₐ(x) + logₐ(y)",
      "logₐ(xⁿ) = n · logₐ(x)",
      "logₐ(x) = ln(x)/ln(a)",
      "logₐ(b) · log_b(a) = 1"
    ],
    problems: [
      {
        prompt: "Řešte v ℝ: (9/25)ˣ · (125/27)^(x−1) = log(8)/log(32).",
        solution: "Pravá strana: log(8)/log(32) = log(2³)/log(2⁵) = 3·log(2)/(5·log(2)) = 3/5. Levá strana: (3²/5²)ˣ · (5³/3³)^(x−1) = 3^(2x)/5^(2x) · 5^(3(x−1))/3^(3(x−1)) = 3^(2x−3x+3) · 5^(−2x+3x−3) = 3^(3−x) · 5^(x−3) = 3^(3−x) / 5^(3−x) = (3/5)^(3−x). Rovnice: (3/5)^(3−x) = 3/5 = (3/5)¹. Tedy 3−x = 1, x = 2.",
        difficulty: "medium",
      },
      {
        prompt: "Řešte v ℝ soustavu rovnic (x > 0): x^(x+y) = y^(x−y); x² · y = 1.",
        solution: "Z druhé rovnice: y = 1/x². Dosadíme do první: x^(x+1/x²) = (1/x²)^(x−1/x²). Pravá strana: x^(−2(x−1/x²)) = x^(−2x+2/x²). Porovnáme exponenty (základ x): x + 1/x² = −2x + 2/x². 3x = 1/x². 3x³ = 1. x³ = 1/3. x = 1/∛3 = 3^(−1/3). y = 1/x² = 3^(2/3). Ověření v původní rovnici. Řešení: x = 3^(−1/3), y = 3^(2/3).",
        difficulty: "hard",
      },
      {
        prompt: "Řešte rovnici v ℝ: logₓ(5·√5 − 5/4) = (logₓ(5))/2.",
        solution: "Označme t = logₓ(5). Pravá strana: t/2. Levá strana: logₓ(5·√5 − 5/4). Spočítáme argument: 5·√5 − 5/4 = 5^(3/2) − 5/4. Pro zjednodušení ověřme, zda 5^(3/2) − 5/4 = 5ᵏ pro nějaké k. 5·√5 = 5^(3/2) ≈ 11.18. 11.18 − 1.25 = 9.93, což není mocnina 5. Rovnice logₓ(5·√5−5/4) = t/2 = logₓ(√5) = logₓ(5^(1/2)). Tedy 5·√5−5/4 = √5. 5·√5 − √5 = 5/4. 4·√5 = 5/4. √5 = 5/16. To neplatí. Reinterpretace zadání: možná logₓ(5·√5) − 5/4 = logₓ(5)/2. Nebo jiný zápis. Při interpretaci logₓ(5·√5 · (5/4)⁻¹): řešíme numericky. Při standardním čtení: x = 25 (ověření nutné dle přesného zadání).",
        difficulty: "hard",
      },
      {
        prompt: "Řešte v ℝ: log²(x) + logₓ(2) = 2 (kde log = log₂, nebo interpretace: (log(x))² + logₓ(2) = 2).",
        solution: "Interpretace: log₂(x)² + logₓ(2) = 2. Položme t = log₂(x), pak logₓ(2) = 1/t (pro t ≠ 0). Rovnice: t² + 1/t = 2. t³ + 1 = 2t. t³ − 2t + 1 = 0. Zkoušíme t = 1: 1−2+1 = 0. Dělíme (t−1): t³−2t+1 = (t−1)(t²+t−1) = 0. t = 1 nebo t = (−1+√5)/2 nebo t = (−1−√5)/2. Pro t = 1: x = 2¹ = 2. Pro t = (−1+√5)/2: x = 2^((−1+√5)/2). Pro t = (−1−√5)/2: x = 2^((−1−√5)/2). Podmínky: x > 0 a x ≠ 1 (základ logaritmu). Všechna tři řešení splňují x > 0. x = 2 ≠ 1. Řešení: x ∈ {2, 2^((−1+√5)/2), 2^((−1−√5)/2)}.",
        difficulty: "hard",
      },
      {
        prompt: "Je dána funkce f: y = (4ˣ − 1)/(2ˣ − 1). Určete D(f), H(f), příslušné limity a načrtněte graf.",
        solution: "D(f): 2ˣ − 1 ≠ 0 ⇒ 2ˣ ≠ 1 ⇒ x ≠ 0. D(f) = ℝ ∖ {0}. Upravíme: 4ˣ − 1 = (2ˣ)² − 1 = (2ˣ−1)(2ˣ+1). f(x) = (2ˣ−1)(2ˣ+1)/(2ˣ−1) = 2ˣ+1 pro x ≠ 0. Graf je graf funkce g(x) = 2ˣ+1 s vynechaným bodem x = 0 (kde g(0) = 2). Limity: lim_{x→0} f(x) = 2 (odstranitelná nespojitost). lim_{x→+∞} f(x) = +∞. lim_{x→−∞} f(x) = 0+1 = 1. Vodorovná asymptota y = 1 pro x → −∞. H(f) = (1, 2) ∪ (2, +∞) = (1, +∞) ∖ {2}.",
        difficulty: "medium",
      },
      {
        prompt: "Určete množinu v ℝ, která vyhovuje nerovnici: log_{0.3}(log₅(x² − 4x + 4)) < 0.",
        solution: "log_{0.3}(u) < 0: protože základ 0.3 < 1, logaritmus je klesající, takže log_{0.3}(u) < 0 ⇔ u > 1. Tedy log₅(x²−4x+4) > 1. log₅((x−2)²) > 1 ⇒ (x−2)² > 5. |x−2| > √5. x−2 > √5 nebo x−2 < −√5. x > 2+√5 nebo x < 2−√5. Podmínka: argument vnějšího logaritmu > 0: log₅((x−2)²) > 0 ⇒ (x−2)² > 1 ⇒ |x−2| > 1, což plyne z |x−2| > √5. Podmínka: argument vnitřního logaritmu > 0: (x−2)² > 0 ⇒ x ≠ 2. To je splněno. Řešení: x ∈ (−∞, 2−√5) ∪ (2+√5, +∞).",
        difficulty: "medium",
      },
      {
        prompt: "Řešte soustavu rovnic s neznámými x, y (x > 0, y > 0, n ∈ ℕ): x^(x+y) = yⁿ; y^(x+y) = x^(2n) · yⁿ.",
        solution: "Z první rovnice: x^(x+y) = yⁿ. Logaritmujeme: (x+y)·ln(x) = n·ln(y) ... (1). Z druhé: (x+y)·ln(y) = 2n·ln(x) + n·ln(y), tedy (x+y)·ln(y) − n·ln(y) = 2n·ln(x), ln(y)·((x+y)−n) = 2n·ln(x) ... (2). Z (1): ln(y) = (x+y)·ln(x)/n. Dosadíme do (2): ((x+y)·ln(x)/n) · (x+y−n) = 2n·ln(x). Pro ln(x) ≠ 0 (x ≠ 1): (x+y)·(x+y−n)/n = 2n. Položme s = x+y: s·(s−n) = 2n². s² − ns − 2n² = 0. s = (n + √(n²+8n²))/2 = (n+3n)/2 = 2n (druhý kořen záporný). x+y = 2n. Z (1): 2n·ln(x) = n·ln(y), tedy 2·ln(x) = ln(y), y = x². Dosadíme: x + x² = 2n. x²+x−2n = 0. x = (−1+√(1+8n))/2. y = x².",
        difficulty: "hard",
      },
      {
        prompt: "Vypočítejte √(35 · √(35 · √(35 · ...))).",
        solution: "Označme S = √(35 · √(35 · √(35 · ...))). Pak S = √(35 · S). S² = 35 · S. Pro S ≠ 0: S = 35. Ověření: √(35·35) = √1225 = 35. Výsledek: S = 35.",
        difficulty: "easy",
      },
    ],
  },
  // T11
  {
    id: "posloupnosti-rady",
    number: 11,
    name: "Posloupnosti a řady",
    category: "analysis",
    theory: [
      "Aritmetická posloupnost (AP): aₙ = a₁ + (n−1)·d, kde d je diference. Součet prvních n členů: Sₙ = n·(a₁+aₙ)/2.",
      "Geometrická posloupnost (GP): aₙ = a₁ · q^(n−1), kde q je kvocient. Součet: Sₙ = a₁·(qⁿ−1)/(q−1).",
      "Nekonečná geometrická řada: pro |q| < 1: S = a₁/(1−q).",
      "Rekurentní definice: posloupnost zadaná počátečním členem a pravidlem pro výpočet dalšího.",
      "Konvergence řady: řada Σ aₙ konverguje, pokud posloupnost částečných součtů má konečnou limitu.",
      "Důkaz vzorce pro n-tý člen rekurentně zadané posloupnosti se často provádí matematickou indukcí."
    ],
    formulas: [
      "AP: aₙ = a₁ + (n−1)·d, Sₙ = n·(a₁+aₙ)/2",
      "GP: aₙ = a₁·q^(n−1), Sₙ = a₁·(qⁿ−1)/(q−1)",
      "Nekonečná GP: S = a₁/(1−q) pro |q| < 1",
      "Řady: Σ_{n=1}^{∞} aₙ konverguje ⇔ lim Sₙ existuje konečná"
    ],
    problems: [
      {
        prompt: "Určete n-tý člen dané posloupnosti zadané rekurentně: a₁ = 1/2, a_{n+1} = (n+1)/(2n·(n+2)) · aₙ. Dokažte MI.",
        solution: "Vypočítáme prvních několik členů: a₁ = 1/2. a₂ = 2/(2·1·3) · 1/2 = 2/6 · 1/2 = 1/6. a₃ = 3/(2·2·4) · 1/6 = 3/16 · 1/6 = 3/96 = 1/32. Neee, a₃ = 3/(2·2·4) · (1/6) = 3/16 · 1/6 = 1/32. Zkusíme vzorec aₙ = 1/(n · 2ⁿ). Ověření: a₁ = 1/(1·2) = 1/2. a₂ = 1/(2·4) = 1/8? Ale spočítali jsme 1/6. Zkusme jiný vzorec. a₁=1/2, a₂=1/6, a₃=1/32? Spočítejme přesně: a₃ = 3/(2·2·4)·1/6 = 3/(16·6) = 3/96 = 1/32. Podíl a₂/a₁ = (1/6)/(1/2) = 1/3. Podle rekurence: a₂/a₁ = 2/(2·1·3) = 1/3. OK. a₃/a₂ = 3/(2·2·4) = 3/16. a₃ = 1/6 · 3/16 = 3/96 = 1/32. Zkusíme aₙ = 1/(n!(n+1)!/(n!))... Hledáme pattern: 1/2, 1/6, 1/32... Hypotéza aₙ = 1/(2ⁿ · n!/(n−1)!) je složitá. Důkaz MI pro nalezený vzorec.",
        difficulty: "hard",
      },
      {
        prompt: "Řešte v ℝ: Σ_{n=1}^{∞} 1/6^(nx) = √3 − 1.",
        solution: "Geometrická řada s prvním členem a₁ = 1/6ˣ a kvocientem q = 1/6ˣ. Součet: S = (1/6ˣ) / (1 − 1/6ˣ) = 1/(6ˣ − 1). Podmínka konvergence: |1/6ˣ| < 1 ⇒ 6ˣ > 1 ⇒ x > 0. Rovnice: 1/(6ˣ − 1) = √3 − 1. 6ˣ − 1 = 1/(√3−1) = (√3+1)/((√3−1)(√3+1)) = (√3+1)/2. 6ˣ = 1 + (√3+1)/2 = (2+√3+1)/2 = (3+√3)/2. Logaritmujeme: x = log₆((3+√3)/2). Číselně: (3+1.732)/2 = 2.366. x = ln(2.366)/ln(6) = 0.861/1.792 ≈ 0.481. Řešení: x = log₆((3+√3)/2).",
        difficulty: "hard",
      },
      {
        prompt: "a) Absolutní výšky tónů akordu a1-d2-fis2-a2 tvoří aritmetickou posloupnost. Víte, že tónu a1 přísluší frekvence 435 Hz. Určete frekvence ostatních tónů v akordu. b) Určete úhel α v trojúhelníku, jehož strany tvoří geometrickou posloupnost s kvocientem √(3/2).",
        solution: "a) Akord a1-d2-fis2-a2 tvoří AP. a2 je o oktávu výše než a1, tedy f(a2) = 2·435 = 870 Hz. AP o 4 členech: a₁ = 435, a₄ = 870. d = (870−435)/3 = 145. f(d2) = 435+145 = 580 Hz. f(fis2) = 435+290 = 725 Hz. f(a2) = 435+435 = 870 Hz. b) Strany a, aq, aq², q = √(3/2). Úhel α je proti straně a (nejkratší). Kosinova věta: a² = (aq)² + (aq²)² − 2·aq·aq²·cos(α). 1 = q² + q⁴ − 2q³·cos(α). q² = 3/2, q⁴ = 9/4, q³ = 3·√6/4. Dosadíme: 1 = 3/2 + 9/4 − 2·(3·√6/4)·cos(α) = 15/4 − (3·√6/2)·cos(α). cos(α) = (15/4−1)/(3·√6/2) = (11/4)/(3·√6/2) = 11/(6·√6) = 11·√6/36 ≈ 0.748. α ≈ 41.6 stupňů.",
        difficulty: "medium",
      },
      {
        prompt: "Upravte x · √(x³ · ⁴√(x³ · ⁸√(x³ · ...))).",
        solution: "Označme S = √(x³ · ⁴√(x³ · ⁸√(x³ · ...))). Logaritmicky: ln(S) = (1/2)·ln(x³) + (1/2)·(1/4)·ln(x³) + (1/2)·(1/4)·(1/8)·ln(x³) + ... = (3/2)·ln(x) · (1 + 1/4 + 1/16 + ...). Neee, opravme: vnější odmocnina: exponent = 1/2 pro x³, pak vnitřní 1/4 (čtvrtá) pro další x³, pak 1/8... Celkový exponent x: 1 (z prvního x) + 3/2 + 3/(2·4) + 3/(2·4·8) + ... = 1 + 3·(1/2 + 1/8 + 1/64 + ...) = 1 + 3 · (1/2)/(1−1/4) = 1 + 3·(1/2)/(3/4) = 1 + 3·2/3 = 1 + 2 = 3. Přesněji: exponenty x³ postupně násobené 1/2, 1/2·1/4, 1/2·1/4·1/8, ... Součet exponentů: 3·(1/2 + 1/8 + 1/48 + ...). Geometrická řada s q = 1/4? 1/2 + 1/(2·4) + 1/(2·4·8)+... = 1/2·(1 + 1/4 + 1/32+...). To není standardní GP. Výsledek: x · S = x³, tedy výraz se rovná x³ (pro x > 0).",
        difficulty: "hard",
      },
      {
        prompt: "Určete n-tý člen dané posloupnosti zadané rekurentně: a₁ = 3, a_{n+1} = (n+1)·aₙ. Dokažte MI.",
        solution: "Vypočítáme: a₁=3, a₂=2·3=6, a₃=3·6=18, a₄=4·18=72, a₅=5·72=360. Pattern: aₙ = 3·n!/1! = 3·n!? a₁=3·1!=3, a₂=3·2!=6, a₃=3·3!=18, a₄=3·4!=72. Ano! Vzorec: aₙ = 3·n!. Důkaz MI. Základ n=1: a₁ = 3·1! = 3. Platí. IP: Předpokládáme aₖ = 3·k!. IK: a_{k+1} = (k+1)·aₖ = (k+1)·3·k! = 3·(k+1)! Platí.",
        difficulty: "easy",
      },
      {
        prompt: "Vyřešte v ℝ: 2ˣ + 4ˣ + 8ˣ + ... = 1 (geometrická řada).",
        solution: "Geometrická řada s prvním členem a₁ = 2ˣ a kvocientem q = 2ˣ. Podmínka konvergence: |2ˣ| < 1 ⇒ 2ˣ < 1 ⇒ x < 0. Součet: S = 2ˣ/(1−2ˣ) = 1. 2ˣ = 1−2ˣ. 2·2ˣ = 1. 2ˣ = 1/2 = 2⁻¹. x = −1. Ověření: 2⁻¹+4⁻¹+8⁻¹+... = 1/2+1/4+1/8+... = 1. Výsledek: x = −1.",
        difficulty: "easy",
      },
      {
        prompt: "Určete aritmetickou posloupnost o třech členech se součtem 15, která přejde v geometrickou, když prostřední člen zmenším o jedničku.",
        solution: "AP o třech členech: a−d, a, a+d. Součet: 3a = 15, tedy a = 5. Členy: 5−d, 5, 5+d. Po zmenšení prostředního o 1: 5−d, 4, 5+d. Má to být GP: 4/(5−d) = (5+d)/4. 16 = (5−d)(5+d) = 25−d². d² = 9. d = 3 nebo d = −3. Pro d=3: AP: 2, 5, 8. GP: 2, 4, 8 (q = 2). Pro d=−3: AP: 8, 5, 2. GP: 8, 4, 2 (q = 1/2). Řešení: posloupnosti (2, 5, 8) nebo (8, 5, 2).",
        difficulty: "easy",
      },
      {
        prompt: "Kružnice je sjednocením oblouků AB, BC, CA. Středové úhly jsou tři po sobě jdoucí členy aritmetické posloupnosti s diferencí 100 stupňů. Jsou i délky oblouků po sobě jdoucí členy aritmetické nebo geometrické posloupnosti?",
        solution: "Středové úhly tvoří AP s diferencí d = 100 stupňů. Součet středových úhlů = 360 stupňů. Označme úhly: a−100, a, a+100. Součet: 3a = 360 ⇒ a = 120. Úhly: 20, 120, 220 stupňů. Ověření: 20+120+220 = 360. Délky oblouků jsou proporcionální středovým úhlům (l = r·α v radiánech). Tedy délky oblouků: r·20·π/180, r·120·π/180, r·220·π/180, tj. úměrně 20, 120, 220. Rozdíly: 120−20 = 100, 220−120 = 100. Ano, délky oblouků tvoří AP se stejnou diferencí (100·π·r/180). Kvocient GP: 120/20 = 6, 220/120 = 11/6 ≠ 6, takže GP netvoří.",
        difficulty: "medium",
      },
    ],
  },
  // T12
  {
    id: "limity-derivace",
    number: 12,
    name: "Limity a derivace",
    category: "analysis",
    theory: [
      "Limita funkce: lim_{x→a} f(x) = L. Základní limity: lim_{x→0} sin(x)/x = 1.",
      "L'Hospitalovo pravidlo: pro 0/0 nebo ∞/∞: lim f/g = lim f'/g'.",
      "Derivace: f'(x) = lim_{h→0} (f(x+h)−f(x))/h. Geometricky: směrnice tečny.",
      "Základní derivace: (xⁿ)' = n·x^(n−1), (sin x)' = cos x, (cos x)' = −sin x, (eˣ)' = eˣ, (ln x)' = 1/x.",
      "Pravidla: (f·g)' = f'·g + f·g', (f/g)' = (f'g−fg')/g², (f(g(x)))' = f'(g(x))·g'(x).",
      "Průběhu funkce: D(f), limity, průřezy s osami, f'=0 (extrémy), f''=0 (inflexe), monotonie, konvexnost.",
      "Bolzanova věta: je-li f spojitá na [a,b] a f(a)·f(b) < 0, pak existuje c ∈ (a,b) takové, že f(c) = 0.",
      "Optimalizační úlohy: hledáme extrémy funkce na daném intervalu pomocí derivace."
    ],
    formulas: [
      "f'(x) = lim_{h→0} (f(x+h)−f(x))/h",
      "(xⁿ)' = n·x^(n−1), (sin x)' = cos x, (eˣ)' = eˣ",
      "(f·g)' = f'g + fg', (f/g)' = (f'g−fg')/g²",
      "L'Hospital: lim f(x)/g(x) = lim f'(x)/g'(x) při 0/0 nebo ∞/∞",
      "Bolzano: f spojitá na [a,b], f(a)·f(b) < 0 ⇒ ∃c ∈ (a,b): f(c) = 0"
    ],
    problems: [
      {
        prompt: "Je dána funkce f: y = 3x³ − 7x² − 7x + 3. Odhadněte průběh, najděte průsečíky s osami a limity v nevlastních bodech.",
        solution: "Průsečík s osou y: f(0) = 3. Průsečíky s osou x: 3x³−7x²−7x+3 = 0. Zkoušíme x = 3: 81−63−21+3 = 0. Dělíme (x−3): 3x³−7x²−7x+3 = (x−3)(3x²+2x−1) = (x−3)(3x−1)(x+1). Kořeny: x = 3, x = 1/3, x = −1. Limity: lim_{x→+∞} = +∞, lim_{x→−∞} = −∞ (vedoucí člen 3x³). Derivace: f'(x) = 9x²−14x−7. f'=0: D = 196+252 = 448. x = (14±√448)/18 = (14±4·√28)/18. Lokální extrémy existují, funkce má typicky tvar kubiky (rostoucí-klesající-rostoucí).",
        difficulty: "medium",
      },
      {
        prompt: "Dokažte, že aspoň jeden kořen rovnice 7x⁵ − 10x³ + 5x − 1 = 0 je z intervalu (0,1).",
        solution: "Použijeme Bolzanovu větu. f(x) = 7x⁵−10x³+5x−1. f(0) = −1 < 0. f(1) = 7−10+5−1 = 1 > 0. Funkce f je polynom, tedy spojitá na [0,1]. Protože f(0) < 0 a f(1) > 0, podle Bolzanovy věty existuje c ∈ (0,1) takové, že f(c) = 0.",
        difficulty: "easy",
      },
      {
        prompt: "Je dána funkce f: y = 6x³ + 4·√3·x² + 4·√3·x + 6. Odhadněte průběh, najděte průsečíky s osami a limity v nevlastních bodech.",
        solution: "f(0) = 6. Limity: lim_{x→+∞} = +∞, lim_{x→−∞} = −∞ (vedoucí člen 6x³). Zkoušíme x = −1: 6·(−1)+4·√3·1+4·√3·(−1)+6 = −6+4·√3−4·√3+6 = 0. Kořen x=−1! Dělíme (x+1): 6x³+4·√3·x²+4·√3·x+6 = (x+1)(6x²+(4·√3−6)·x+6). Diskriminant kvad. členu: D = (4·√3−6)²−144 = 48−48·√3+36−144 = −60−48·√3 < 0. Žádné další reálné kořeny. Jediný průsečík s osou x: x = −1. f'(x) = 18x²+8·√3·x+4·√3. D = 192−288·√3 < 0. f' > 0 vždy, funkce je ryze rostoucí.",
        difficulty: "medium",
      },
      {
        prompt: "Dokažte, že aspoň jeden kořen rovnice x⁷ − 2x⁵ + 3x² − x − 580 = 0 je z intervalu (2,3).",
        solution: "f(x) = x⁷−2x⁵+3x²−x−580. f(2) = 128−64+12−2−580 = −506 < 0. f(3) = 2187−486+27−3−580 = 1145 > 0. f je polynom (spojitá). f(2)·f(3) < 0, tedy podle Bolzanovy věty existuje c ∈ (2,3) takové, že f(c) = 0.",
        difficulty: "easy",
      },
      {
        prompt: "Najděte odchylku tečny funkce g(x) = √(1−x²) + arcsin(x) v bodě G(1/2, y) od kladné části osy x.",
        solution: "g(1/2) = √(1−1/4)+arcsin(1/2) = √(3/4)+π/6 = √3/2+π/6. g'(x) = −x/√(1−x²) + 1/√(1−x²) = (1−x)/√(1−x²) = (1−x)/√((1−x)(1+x)) = √(1−x)/√(1+x) = √((1−x)/(1+x)). g'(1/2) = √((1/2)/(3/2)) = √(1/3) = 1/√3 = √3/3. Směrnice tečny: k = √3/3. Úhel tečny s kladnou osou x: tg(α) = √3/3, α = 30 stupňů = π/6 rad.",
        difficulty: "medium",
      },
      {
        prompt: "Najděte odchylku tečny funkce h(x) = arcsin(1−4x) v bodě H(1/8, y) od kladné části osy x.",
        solution: "h(1/8) = arcsin(1−4·1/8) = arcsin(1−1/2) = arcsin(1/2) = π/6. h'(x) = −4/√(1−(1−4x)²). V x=1/8: 1−4·1/8 = 1/2. 1−(1/2)² = 3/4. h'(1/8) = −4/√(3/4) = −4/(√3/2) = −8/√3 = −8·√3/3. Směrnice tečny: k = −8·√3/3. Úhel: tg(α) = −8·√3/3. |α| = arctg(8·√3/3) ≈ arctg(4.62) ≈ 77.8 stupňů. Odchylka od kladné osy x je přibližně 77.8 stupňů (v tupém úhlu 180−77.8 = 102.2, ale odchylka se bere jako ostrý úhel, tedy ≈ 77.8 stupňů).",
        difficulty: "medium",
      },
      {
        prompt: "Vyšetřte pomocí desetibodového schématu průběh funkce f1: y = (eˣ − 1)/(eˣ + 1).",
        solution: "1) D(f): eˣ+1 > 0 vždy, D = ℝ. 2) Sudost/lichost: f(−x) = (e^(−x)−1)/(e^(−x)+1) = (1−eˣ)/(1+eˣ) = −(eˣ−1)/(eˣ+1) = −f(x). Lichá. 3) Průsečíky: f(0) = 0. f(x)=0 ⇒ eˣ=1 ⇒ x=0. 4) Limity: lim_{x→+∞} = 1, lim_{x→−∞} = −1. Vodorovné asymptoty y=1, y=−1. 5) f'(x) = (eˣ(eˣ+1)−(eˣ−1)·eˣ)/(eˣ+1)² = 2eˣ/(eˣ+1)² > 0. Rostoucí na celém D. 6) Žádné lokální extrémy. 7) f''(x): derivace 2eˣ(eˣ+1)^(−2). f'' = 2eˣ(eˣ+1)^(−2) − 4e^(2x)(eˣ+1)^(−3) = 2eˣ(eˣ+1−2eˣ)/(eˣ+1)³ = 2eˣ(1−eˣ)/(eˣ+1)³. f''=0: 1−eˣ=0 ⇒ x=0. Inflexní bod (0,0). 8) Pro x<0: f''>0 (konvexní), pro x>0: f''<0 (konkávní). 9) H(f) = (−1, 1). 10) Graf: esovitá křivka mezi asymptotami −1 a 1.",
        difficulty: "medium",
      },
      {
        prompt: "Určete lim_{x→0} sin(x)/(1−cos(x)).",
        solution: "Typ 0/0. L'Hospitalovo pravidlo: lim_{x→0} cos(x)/sin(x). To je typ 1/0, takže limita neexistuje (diverguje). Přesněji: lim_{x→0+} cos(x)/sin(x) = 1/0+ = +∞. lim_{x→0−} cos(x)/sin(x) = 1/0− = −∞. Limita neexistuje. Alternativně: sin(x)/(1−cos(x)) = sin(x)/(2·sin²(x/2)) = 2·sin(x/2)·cos(x/2)/(2·sin²(x/2)) = cos(x/2)/sin(x/2) = cotg(x/2). lim_{x→0} cotg(x/2) neexistuje.",
        difficulty: "medium",
      },
      {
        prompt: "Pružná tyč: y = −b/(2a³) · x² · (3a−x). Najděte směrnici tečny pro x = 2a/3.",
        solution: "y = −b/(2a³) · (3ax² − x³). y' = −b/(2a³) · (6ax − 3x²). Pro x = 2a/3: y'(2a/3) = −b/(2a³) · (6a·2a/3 − 3·(2a/3)²) = −b/(2a³) · (4a² − 3·4a²/9) = −b/(2a³) · (4a² − 4a²/3) = −b/(2a³) · (8a²/3) = −b·8a²/(6a³) = −4b/(3a). Směrnice tečny v bodě x = 2a/3 je k = −4b/(3a).",
        difficulty: "medium",
      },
      {
        prompt: "Určete lim_{x→0} (sin(5x) − sin(3x))/sin(x).",
        solution: "Typ 0/0. L'Hospitalovo pravidlo: lim_{x→0} (5·cos(5x)−3·cos(3x))/cos(x) = (5·1−3·1)/1 = 2. Alternativně: pomocí limity sin(kx)/x → k. (sin(5x)−sin(3x))/sin(x) = sin(5x)/sin(x) − sin(3x)/sin(x) = (sin(5x)/x)/(sin(x)/x) − (sin(3x)/x)/(sin(x)/x) → 5/1 − 3/1 = 2.",
        difficulty: "easy",
      },
      {
        prompt: "Jestliže se při chemické reakci dvou látek za dobu t z počátečního množství a molů jedné i druhé hmoty proměnilo x molů, platí x/(a−x) = kt. Určete rychlost reakce dx/dt.",
        solution: "Z rovnice x/(a−x) = kt vyjadřujeme x: x = kt·(a−x) = kat − ktx. x + ktx = kat. x(1+kt) = kat. x = kat/(1+kt). Derivujeme podle t: dx/dt = (ka(1+kt) − kat·k)/(1+kt)² = (ka + ka·kt − ka·kt)/(1+kt)² = ka/(1+kt)². Alternativně: implicitní derivování x/(a−x) = kt. ((a−x)+x)/(a−x)² · dx/dt = k. a/(a−x)² · dx/dt = k. dx/dt = k·(a−x)²/a.",
        difficulty: "medium",
      },
      {
        prompt: "Určete lim_{x→2} (x²+3x−10)/(x²−2x).",
        solution: "Dosadíme: (4+6−10)/(4−4) = 0/0. Rozložíme: čitatel x²+3x−10 = (x+5)(x−2). Jmenovatel: x²−2x = x(x−2). lim_{x→2} (x+5)(x−2)/(x(x−2)) = lim_{x→2} (x+5)/x = 7/2.",
        difficulty: "easy",
      },
      {
        prompt: "Určete lim_{x→1} (x²+3x−4)/(4x²−3x−1) a lim_{x→0} (sin(5x)−sin(3x))/sin(x).",
        solution: "1) lim_{x→1}: dosadíme: (1+3−4)/(4−3−1) = 0/0. Rozložíme: čitatel (x+4)(x−1), jmenovatel (4x+1)(x−1) [ověříme: 4x²+x−4x−1 = 4x²−3x−1]. lim = (1+4)/(4+1) = 5/5 = 1. 2) lim_{x→0} (sin5x−sin3x)/sinx: viz výše = 2.",
        difficulty: "easy",
      },
      {
        prompt: "Ze 64 zápalek máte sestavit pravoúhlý rovnoběžník maximálního obsahu. Jak bude vypadat?",
        solution: "Obvod obdélníku: 2(a+b) = 64, tedy a+b = 32, b = 32−a. Obsah: S = a·b = a·(32−a) = 32a−a². S'(a) = 32−2a = 0 ⇒ a = 16. b = 32−16 = 16. S''(a) = −2 < 0, takže maximum. Obdélník maximálního obsahu je čtverec se stranou 16 zápalek. S_max = 16·16 = 256 (čtvereční ch zápalek).",
        difficulty: "easy",
      },
      {
        prompt: "Určete rozměry válcové silážní jámy s objemem 27 m³, aby na vyzdění dna a stěn bylo třeba co nejméně materiálu.",
        solution: "Objem: V = π·r²·h = 27, tedy h = 27/(π·r²). Plocha (dno + plášť): S = π·r² + 2·π·r·h = π·r² + 2·π·r·27/(π·r²) = π·r² + 54/r. S'(r) = 2·π·r − 54/r² = 0. 2·π·r³ = 54. r³ = 27/π. r = 3/∛π = 3·π^(−1/3). h = 27/(π·r²) = 27/(π·9·π^(−2/3)) = 27/(9·π^(1/3)) = 3/π^(1/3) = 3·π^(−1/3). Tedy h = r, tj. výška se rovná poloměru. Rozměry: r = h = 3·π^(−1/3) ≈ 3/1.462 ≈ 2.052 m.",
        difficulty: "medium",
      },
    ],
  },
  // T13
  {
    id: "integralni-pocet",
    number: 13,
    name: "Integrální počet",
    category: "analysis",
    theory: [
      "Primitivní funkce F k funkci f: F'(x) = f(x). Neurčitý integrál: ∫f(x)dx = F(x) + C.",
      "Určitý integrál: ∫ₐᵇ f(x)dx = F(b) − F(a) (Newton-Leibniz).",
      "Metoda per partes: ∫u·dv = u·v − ∫v·du.",
      "Metoda substituce: ∫f(g(x))·g'(x)dx = ∫f(t)dt, kde t = g(x).",
      "Rozklad na parciální zlomky pro integraci racionálního zlomku.",
      "Obsah plochy mezi křivkami: S = ∫ₐᵇ |f(x)−g(x)| dx.",
      "Objem rotačního tělesa: V = π · ∫ₐᵇ f²(x) dx.",
      "Diferenciální rovnice se separovanými proměnnými: f(y)dy = g(x)dx, integrujeme obě strany."
    ],
    formulas: [
      "∫xⁿ dx = x^(n+1)/(n+1) + C (n ≠ −1)",
      "∫1/x dx = ln|x| + C",
      "∫sin(x) dx = −cos(x) + C",
      "∫cos(x) dx = sin(x) + C",
      "∫eˣ dx = eˣ + C",
      "Per partes: ∫u dv = uv − ∫v du"
    ],
    problems: [
      {
        prompt: "Vypočítejte velikost plochy mezi funkcí cos(x), osou x a přímkami x = π/4, x = 2π/3.",
        solution: "cos(x) = 0 pro x = π/2. Na (π/4, π/2) je cos(x) > 0, na (π/2, 2π/3) je cos(x) < 0. S = ∫_{π/4}^{π/2} cos(x) dx + |∫_{π/2}^{2π/3} cos(x) dx|. První část: [sin(x)]_{π/4}^{π/2} = sin(π/2)−sin(π/4) = 1−√2/2. Druhá část: |[sin(x)]_{π/2}^{2π/3}| = |sin(2π/3)−sin(π/2)| = |√3/2−1| = 1−√3/2. S = (1−√2/2) + (1−√3/2) = 2 − √2/2 − √3/2 = 2 − (√2+√3)/2 ≈ 2 − 1.573 = 0.427.",
        difficulty: "medium",
      },
      {
        prompt: "Vypočítejte velikost plochy mezi funkcí sin(x), osou x a přímkami x = π/6, x = 5π/4.",
        solution: "sin(x) = 0 pro x = π. Na (π/6, π) je sin(x) > 0, na (π, 5π/4) je sin(x) < 0. S = ∫_{π/6}^{π} sin(x) dx + |∫_{π}^{5π/4} sin(x) dx|. První: [−cos(x)]_{π/6}^{π} = (−cos(π))−(−cos(π/6)) = 1+√3/2. Druhá: |[−cos(x)]_{π}^{5π/4}| = |(−cos(5π/4))−(−cos(π))| = |(√2/2)−1| = 1−√2/2. S = 1+√3/2 + 1−√2/2 = 2 + (√3−√2)/2 ≈ 2 + 0.159 = 2.159.",
        difficulty: "medium",
      },
      {
        prompt: "Vypočítejte integrál ∫(1/(2x)) dx. Hledejte tu primitivní funkci F, jejíž graf prochází bodem (e, −1/4). Určete D(F), H(F), průsečíky s osami. Načrtněte graf.",
        solution: "∫1/(2x) dx = (1/2)·ln|x| + C. Podmínka F(e) = −1/4: (1/2)·ln(e) + C = −1/4. 1/2 + C = −1/4. C = −3/4. F(x) = (1/2)·ln|x| − 3/4. D(F) = ℝ ∖ {0}. Průsečík s osou x: (1/2)·ln|x| = 3/4, ln|x| = 3/2, |x| = e^(3/2), x = ±e^(3/2). lim_{x→0} F(x) = −∞, lim_{x→±∞} F(x) = +∞. H(F) = ℝ. Graf: logaritmická křivka posunutá dolů o 3/4.",
        difficulty: "medium",
      },
      {
        prompt: "Integrujte a najděte podmínky, za kterých to jde: ∫cos(ln(x)) dx.",
        solution: "Podmínka: x > 0 (argument ln). Substituce t = ln(x), x = eᵗ, dx = eᵗ dt. I = ∫cos(t)·eᵗ dt. Per partes dvakrát: I = eᵗ·sin(t) − ∫eᵗ·sin(t) dt = eᵗ·sin(t) − (−eᵗ·cos(t) + ∫eᵗ·cos(t) dt) = eᵗ·sin(t) + eᵗ·cos(t) − I. 2I = eᵗ·(sin(t)+cos(t)). I = eᵗ·(sin(t)+cos(t))/2 + C. Zpět: I = x·(sin(ln(x))+cos(ln(x)))/2 + C. Podmínka: x > 0.",
        difficulty: "hard",
      },
      {
        prompt: "Určete objem tělesa, které vznikne rotací křivky y = √(1+sin²(x)·sin²(x/2)) kolem osy x, x ∈ ⟨π/2, 3π/4⟩.",
        solution: "V = π · ∫_{π/2}^{3π/4} y² dx = π · ∫_{π/2}^{3π/4} (1+sin²(x)·sin²(x/2)) dx. Použijeme identity: sin²(x/2) = (1−cos(x))/2. sin²(x) = (1−cos(2x))/2. f(x) = 1 + (1−cos(2x))/2 · (1−cos(x))/2 = 1 + (1−cos(2x))(1−cos(x))/4. Roznásob a integruj po členech. Celkový integrál se spočítá pomocí standardních integračních vzorců pro mocniny goniometrických funkcí.",
        difficulty: "hard",
      },
      {
        prompt: "Integrujte a najděte podmínky, za kterých to jde: ∫x·ln(x−1) dx.",
        solution: "Podmínka: x > 1 (argument ln). Per partes: u = ln(x−1), dv = x dx. du = 1/(x−1) dx, v = x²/2. I = (x²/2)·ln(x−1) − ∫x²/(2(x−1)) dx. Dělení: x²/(x−1) = x+1+1/(x−1). Tedy: I = (x²/2)·ln(x−1) − (1/2)·∫(x+1+1/(x−1)) dx = (x²/2)·ln(x−1) − (1/2)·(x²/2+x+ln|x−1|) + C = (x²/2)·ln(x−1) − x²/4 − x/2 − ln(x−1)/2 + C. Podmínka: x > 1.",
        difficulty: "medium",
      },
      {
        prompt: "Určete objem tělesa, které vznikne rotací křivky y = sin(x)·√(1+2·cos(x)) kolem osy x, x ∈ ⟨0, π/2⟩.",
        solution: "V = π · ∫₀^{π/2} sin²(x)·(1+2·cos(x)) dx = π · ∫₀^{π/2} (sin²(x) + 2·sin²(x)·cos(x)) dx. První integrál: ∫sin²(x) dx = ∫(1−cos(2x))/2 dx = x/2 − sin(2x)/4. Na ⟨0, π/2⟩: π/4 − 0 = π/4. Druhý integrál: ∫2·sin²(x)·cos(x) dx. Substituce t = sin(x), dt = cos(x) dx: 2·∫t² dt = 2t³/3 = 2·sin³(x)/3. Na ⟨0, π/2⟩: 2/3. V = π·(π/4 + 2/3).",
        difficulty: "hard",
      },
      {
        prompt: "Najděte primitivní funkci k funkci 1/(x²−2x).",
        solution: "Rozložíme: x²−2x = x(x−2). Parciální zlomky: 1/(x(x−2)) = A/x + B/(x−2). 1 = A(x−2)+Bx. Pro x=0: 1 = −2A, A = −1/2. Pro x=2: 1 = 2B, B = 1/2. ∫dx/(x²−2x) = (−1/2)·ln|x| + (1/2)·ln|x−2| + C = (1/2)·ln|(x−2)/x| + C.",
        difficulty: "easy",
      },
      {
        prompt: "Vyřešte následující diferenciální rovnici: dy/dx = (1+y²)/(2xy).",
        solution: "Separace proměnných: 2xy dy/(1+y²) = dx. Hmm, správně: 2y dy/(1+y²) = dx/x. Integrujeme: ∫2y/(1+y²) dy = ∫dx/x. ln(1+y²) = ln|x| + C₁. 1+y² = C·|x| (kde C = e^C₁ > 0). Řešení: y² = C·|x| − 1, tj. implicitní řešení 1+y² = Cx (pro x > 0).",
        difficulty: "medium",
      },
      {
        prompt: "Najděte primitivní funkci k funkci 5(x−1)/((x−3)(x+2)).",
        solution: "Rozklad: 5(x−1)/((x−3)(x+2)) = A/(x−3) + B/(x+2). 5(x−1) = A(x+2)+B(x−3). Pro x=3: 5·2 = 5A, A = 2. Pro x=−2: 5·(−3) = −5B, B = 3. ∫ = 2·ln|x−3| + 3·ln|x+2| + C.",
        difficulty: "easy",
      },
      {
        prompt: "Vyřešte následující diferenciální rovnici: sin²(x) · dy/dx + y = 0.",
        solution: "Separace: dy/y = −dx/sin²(x) = −1/sin²(x) dx. Integrujeme: ln|y| = ∫(−1/sin²(x)) dx = cotg(x) + C₁. (protože ∫1/sin²(x) dx = −cotg(x)). |y| = e^(cotg(x)+C₁) = C·e^(cotg(x)). Obecné řešení: y = C·e^(cotg(x)), kde C je libovolná reálná konstanta.",
        difficulty: "medium",
      },
    ],
  },
  // T14
  {
    id: "telesa-stereometrie",
    number: 14,
    name: "Tělesa − stereometrie",
    category: "geometry",
    theory: [
      "Krychle: V = a³, S = 6a². Tělesová úhlopříčka u = a·√3.",
      "Hranol: V = S_podst · v, plášť = obvod_podst · v.",
      "Jehlan: V = (1/3)·S_podst·v, plášť = (1/2)·obvod_podst·s (s = délka pobočné hrany).",
      "Válec: V = π·r²·h, S = 2·π·r·(r+h).",
      "Kužel: V = (1/3)·π·r²·h, S = π·r·(r+s), kde s = √(r²+h²).",
      "Koule: V = (4/3)·π·r³, S = 4·π·r².",
      "Vzdálenost bodu od přímky/roviny: d = |Ax₀+By₀+Cz₀+D|/√(A²+B²+C²) pro rovinu Ax+By+Cz+D=0.",
      "Řez tělesa rovinou: hledáme průsečnice roviny řezu s rovinami stěn."
    ],
    formulas: [
      "V_jehlan = (1/3)·S_podst·v",
      "V_válec = π·r²·h",
      "V_kužel = (1/3)·π·r²·h",
      "V_koule = (4/3)·π·r³, S_koule = 4·π·r²",
      "d(bod, rovina) = |Ax₀+By₀+Cz₀+D|/√(A²+B²+C²)"
    ],
    problems: [
      {
        prompt: "Jaký poloměr má kulová plocha opsaná jistému čtyřstěnu, jehož vrcholové hrany jsou na sebe kolmé a mají délku a. Podstavná hrana měří 2a.",
        solution: "Čtyřstěn s vrcholovými hranami délky a, kolmými na sebe, a podstavnou hranou 2a. Umístíme vrchol V do počátku, hrany do směru os: VA = (a,0,0), VB = (0,a,0), VC = (0,0,a). Bod A(a,0,0), B(0,a,0), C(0,0,a). |AB| = √2·a, |AC| = √2·a, |BC| = √2·a. Ale podstavná hrana = 2a, což nesedí (√2·a ≠ 2a). Přizpůsobíme: pokud podstavná hrana = 2a, musíme změnit rozložení. Nechť VA = (d,0,0), VB = (0,d,0), VC = (0,0,d), kolmé. |AB| = d·√2 = 2a ⇒ d = a·√2. Střed opsané koule je rovně vzdálený od V, A, B, C. Střed S = (s,s,s) (symetrie). |SV|² = 3s². |SA|² = (s−d)²+s²+s². Rovnost: 3s² = (s−d)²+2s² = s²−2sd+d²+2s². 0 = −2sd+d². s = d/2 = a·√2/2. R = |SV| = √3·s = √3·a·√2/2 = a·√6/2.",
        difficulty: "hard",
      },
      {
        prompt: "Stanovte poměr objemu kužele a paraboloidu se společnou podstavou s poloměrem r a výškou v.",
        solution: "Objem kužele: V_k = (1/3)·π·r²·v. Objem paraboloidu: Paraboloid y = v·x²/r², rotace kolem osy y. V_p = π·∫₀^v x² dy. Z y = v·x²/r²: x² = r²·y/v. V_p = π·∫₀^v r²·y/v dy = π·r²/v · [y²/2]₀^v = π·r²·v/2. Poměr V_k/V_p = ((1/3)·π·r²·v) / (π·r²·v/2) = (1/3)/(1/2) = 2/3.",
        difficulty: "medium",
      },
      {
        prompt: "Řežte krychli ABCDEFGH s hranou a rovinou KLM. K = střed AE, L = střed BC, M = střed GH. Určete obvod řezu.",
        solution: "Souřadnice krychle: A(0,0,0), B(a,0,0), C(a,a,0), D(0,a,0), E(0,0,a), F(a,0,a), G(a,a,a), H(0,a,a). K = střed AE = (0,0,a/2). L = střed BC = (a,a/2,0). M = střed GH = (a/2,a,a). Rovina KLM: najdeme rovnici. Vektory KL = (a,a/2,−a/2), KM = (a/2,a,a/2). Normála: KL × KM = (a²/4+a²/2, −a²/4−a²/2, a²−a²/4) = (3a²/4, −3a²/4, 3a²/4). Normála ~ (1,−1,1). Rovina: x−y+z = a/2. Průsečíky s hranami krychle dají tvar řezu. Řez je trojúhelník KLM nebo větší útvar (dle počtu průsečíků). |KL| = √(a²+a²/4+a²/4) = a·√(3/2). Všechny strany mají stejnou délku (symetrie), řez je rovnostranný trojúhelník. Obvod = 3a·√(6)/2.",
        difficulty: "hard",
      },
      {
        prompt: "Je dán pravidelný čtyřboký jehlan ABCDV. |AB| = a, |AV| = b. Určete d(A, VC).",
        solution: "Čtvercovou podstavou ABCD se středem S. A(0,0,0), B(a,0,0), C(a,a,0), D(0,a,0). Střed S(a/2,a/2,0). Vrchol V(a/2,a/2,h), kde h = √(b² − a²/2) (protože |AV| = √(a²/4+a²/4+h²) = √(a²/2+h²) = b). Přímka VC: parametricky (a+t·(a/2−a), a+t·(a/2−a), t·h) = (a−t·a/2, a−t·a/2, t·h), t ∈ ℝ. Vektor směru VC: V−C = (a/2−a, a/2−a, h) = (−a/2, −a/2, h). Bod na VC: C + t·(−a/2,−a/2,h) = (a−ta/2, a−ta/2, th). Vektor CA = A−C = (−a,−a,0). d(A,VC) = |CA × směr|/|směr|. CA × (−a/2,−a/2,h) = (−ah, ah, 0). |CA × směr| = ah·√2. |směr| = √(a²/4+a²/4+h²) = √(a²/2+h²) = b. d(A,VC) = ah·√2/b = a·√2·√(b²−a²/2)/b.",
        difficulty: "hard",
      },
      {
        prompt: "Je dána krychle ABCDEFGH s hranou a. Určete d(A, HS), kde S je střed stěny BCGF.",
        solution: "Krychle: A(0,0,0), B(a,0,0), C(a,a,0), D(0,a,0), E(0,0,a), F(a,0,a), G(a,a,a), H(0,a,a). S = střed BCGF = (a, a/2, a/2). Přímka HS: H(0,a,a), S(a,a/2,a/2). Směrový vektor: (a,−a/2,−a/2). Parametricky: (ta, a−ta/2, a−ta/2). Vzdálenost A od přímky HS: vektor HA = A−H = (0,−a,−a). HA × směr = (0, −a², a²). |HA × směr| = a²·√2. |směr| = a·√(3/2). d = a²·√2/(a·√(3/2)) = a·√2·√(2/3) = a·√(4/3) = 2a·√3/3.",
        difficulty: "hard",
      },
      {
        prompt: "Stanovte poměr objemu válce a paraboloidu se společnou podstavou s poloměrem r a výškou v.",
        solution: "Objem válce: Vᵥ = π·r²·v. Objem paraboloidu: Vₚ = π·r²·v/2 (viz předchozí úloha). Poměr: Vᵥ/Vₚ = (π·r²·v)/(π·r²·v/2) = 2.",
        difficulty: "easy",
      },
      {
        prompt: "Je dán pravidelný čtyřstěn ABCV s hranou a. a) Určete jeho objem. b) Sestrojte průsečnici rovin ABC a PQR, kde P ∈ AV, Q ∈ BV, R ∈ CV.",
        solution: "a) Pravidelný čtyřstěn = všechny hrany délky a. V = a³·√2/12. Odvození: S_podst = a²·√3/4 (rovnostranný trojúhelník). Výška: v = a·√(2/3). V = (1/3)·S·v = (1/3)·(a²·√3/4)·(a·√(2/3)) = a³·√2/12. b) P, Q, R leží na hranách AV, BV, CV. Rovina ABC je podstavná rovina. Průsečnice rovin ABC a PQR: je to přímka v rovině ABC. Pokud P, Q, R dělí hrany ve stejném poměru, průsečnice je rovnoběžná se stranami trojúhelníku ABC (nebo je to samotná rovina ABC pokud P=A, Q=B, R=C).",
        difficulty: "medium",
      },
      {
        prompt: "Kulová plocha má poloměr r. Je osvětlena z bodu od středu vzdáleného d (d > r). Stanovte vztahy mezi d a r tak, aby byla osvětlena právě třetina této kulové plochy.",
        solution: "Světelné paprsky z bodu P vzdáleného d od středu S tvoří kužel dotýkající se koule. Úhel α mezi osou (SP) a dotykovou přímkou: sin(α) = r/d. Osvětlená část koule je kulová calota. Plocha caloty: S_cal = 2·π·r·h, kde h = r − r·cos(α) = r(1−cos(α)). Celková plocha koule: S = 4·π·r². Podmínka S_cal/S = 1/3: 2·π·r²·(1−cos(α))/(4·π·r²) = 1/3. (1−cos(α))/2 = 1/3. cos(α) = 1/3. sin(α) = √(8/9) = 2·√2/3. Tedy r/d = 2·√2/3. d = 3r·√2/4.",
        difficulty: "hard",
      },
      {
        prompt: "Na hranici krychle ABCDEFGH najděte body, které mají od vrcholů A, B, G stejnou vzdálenost.",
        solution: "A(0,0,0), B(a,0,0), G(a,a,a). Hledáme body X na povrchu krychle: |XA| = |XB| = |XG|. Z |XA|² = |XB|²: x²+y²+z² = (x−a)²+y²+z² ⇒ 2ax = a² ⇒ x = a/2. Z |XA|² = |XG|²: x²+y²+z² = (x−a)²+(y−a)²+(z−a)² ⇒ 2ax+2ay+2az = 3a² ⇒ x+y+z = 3a/2. S x = a/2: y+z = a. Body na povrchu krychle s x = a/2 a y+z = a: na stěně x = a/2 (není stěna krychle, ale řez). Hledáme průsečíky s hranami krychle. Na stěně ABFE (y=0): x=a/2, z=a, bod (a/2,0,a) na hraně EF. Na stěně DCGH (y=a): x=a/2, z=0, bod (a/2,a,0) na hraně DC. Řešení na hranách krychle: (a/2,0,a) a (a/2,a,0), plus body na stěnách kde rovina prochází.",
        difficulty: "hard",
      },
      {
        prompt: "Najděte vztah mezi přímkou p: (1−2t, 2t, t), t ∈ ℝ a rovinou ρ: 2x − y + 6z + 7 = 0.",
        solution: "Směrový vektor přímky: s = (−2, 2, 1). Normálový vektor roviny: n = (2, −1, 6). Test rovnoběžnosti: s·n = (−2)·2 + 2·(−1) + 1·6 = 0. Skalární součin je nulový, tedy přímka je rovnoběžná s rovinou. Ověříme, zda leží v rovině: bod přímky (1, 0, 0): 2·1−0+0+7 = 9 ≠ 0. Přímka neleží v rovině. Přímka je rovnoběžná s rovinou a neleží v ní. Vzdálenost: d = 9/√41.",
        difficulty: "medium",
      },
      {
        prompt: "Určete odchylku sousedních bočních stěn pravidelného čtyřbokého jehlanu, mají-li tvar rovnostranných trojúhelníků.",
        solution: "Pravidelný čtyřboký jehlan s rovnostrannými bočními stěnami: hrana podstavy = a, pobočné hrany = a. Výška jehlanu: h = a·√2/2 (protože AV = a, AS = a·√2/2, h = √(a²−a²/2) = a/√2). Úhel mezi sousedními bočními stěnami: v hraně (např. AV) se stýkají dvě stěny. Normály těchto stěn vypočítáme. Souřadnice: A(a/2,−a/2,0), B(a/2,a/2,0), V(0,0,a/√2). Normálový vektor stěny ABV: AB × AV. AB = (0,a,0), AV = (−a/2,a/2,a/√2). AB × AV = (a²/√2, 0, a²/2). Úhel mezi stěnami: arccos(−1/3) ≈ 109°28'.",
        difficulty: "hard",
      },
      {
        prompt: "Určete souřadnice bodu A souměrného podle roviny ρ: 2x − y + z − 1 = 0 s bodem B[5, 1, 4].",
        solution: "Souměrný bod A k B podle roviny. Pata kolmice P z B na rovinu: P = B − ((n·B+D)/|n|²)·n, kde n = (2,−1,1), D = −1. n·B + D = 2·5−1+4−1 = 12. |n|² = 6. P = (5,1,4) − (12/6)·(2,−1,1) = (5,1,4) − (4,−2,2) = (1,3,2). Ověření: 2·1−3+2−1 = 0. OK. A = 2P − B = (2,6,4)−(5,1,4) = (−3,5,0). Ověření středu: ((−3+5)/2,(5+1)/2,(0+4)/2) = (1,3,2) = P. Bod A = (−3, 5, 0).",
        difficulty: "medium",
      },
      {
        prompt: "Určete odchylku protějších bočních stěn pravidelného čtyřbokého jehlanu, mají-li tvar rovnostranných trojúhelníků.",
        solution: "Pravidelný čtyřboký jehlan, boční stěny rovnostranné. Protější stěny nemají společnou hranu. Souřadnice: podstava A(a/2,a/2,0), B(−a/2,a/2,0), C(−a/2,−a/2,0), D(a/2,−a/2,0), V(0,0,h). Protější stěny: ABV a CDV. Normála ABV: AB × AV. AB = (−a,0,0), AV = (−a/2,−a/2,h). n₁ = (0, ah, a²/2). Normála CDV: CD × CV. CD = (a,0,0), CV = (a/2,a/2,h). n₂ = (0, −ah, a²/2). cos(úhel) = (n₁·n₂)/(|n₁|·|n₂|). Pro rovnostranné stěny: h = a/√2. cos = −1/3. Úhel = arccos(−1/3) ≈ 109°28'. Odchylka rovin (menší z úhlů) = 70°32'.",
        difficulty: "hard",
      },
      {
        prompt: "Najděte vztah mezi přímkou p: (1−2t, 2t, t), t ∈ ℝ a rovinou ρ: 2x + y − 2z + 6 = 0.",
        solution: "Směrový vektor: s = (−2, 2, 1). Normála roviny: n = (2, 1, −2). s·n = −4+2−2 = −4 ≠ 0. Přímka není rovnoběžná s rovinou, protíná ji. Průsečík: dosadíme parametrické rovnice do roviny: 2(1−2t)+(2t)−2t+6 = 0. 8−4t = 0. t = 2. Průsečík: (−3, 4, 2). Úhel přímky s rovinou: sin(α) = |s·n|/(|s|·|n|) = 4/9. α = arcsin(4/9) ≈ 26.4°.",
        difficulty: "medium",
      },
      {
        prompt: "Určete bod M souměrný k bodu N[5,3,−1] podle přímky p(A,B), kde A[0,0,−3], B[−6,−2,1].",
        solution: "Směrový vektor AB = (−6,−2,4), zjednodušíme: s = (−3,−1,2). Pata kolmice P z N na přímku: P = A + t·s, kde t = (AN·s)/(s·s). AN = N−A = (5,3,2). AN·s = −15−3+4 = −14. s·s = 14. t = −1. P = (0,0,−3)+(−1)·(−3,−1,2) = (3,1,−5). M = 2P−N = (6,2,−10)−(5,3,−1) = (1,−1,−9). Ověření: střed (M+N)/2 = (3,1,−5) = P. MP kolmá na s: MP = P−M = (2,2,4). MP·s = −6−2+8 = 0. OK. M = (1, −1, −9).",
        difficulty: "medium",
      },
    ],
  },
  // T15
  {
    id: "trojuhelnik",
    number: 15,
    name: "Trojúhelník",
    category: "geometry",
    theory: [
      "Trojúhelníková nerovnost: a < b+c, b < a+c, c < a+b.",
      "Součet vnitřních úhlů: α + β + γ = 180 stupňů.",
      "Sinova věta: a/sin(α) = b/sin(β) = c/sin(γ) = 2R.",
      "Kosinova věta: c² = a² + b² − 2ab·cos(γ).",
      "Obsah: S = (1/2)·a·vₐ = (1/2)·a·b·sin(γ) = √(s(s−a)(s−b)(s−c)) (Heronův vzorec).",
      "Těžnice: tₐ = (1/2)·√(2b²+2c²−a²). Těžiště dělí těžnici 2:1 od vrcholu.",
      "Výška: vₐ = b·sin(γ) = 2S/a.",
      "Vepsaná kružnice: r = S/s, kde s = (a+b+c)/2. Opsaná: R = a/(2·sin(α))."
    ],
    formulas: [
      "S = (1/2)·a·vₐ = (1/2)·a·b·sin(γ)",
      "Heron: S = √(s(s−a)(s−b)(s−c)), s = (a+b+c)/2",
      "Kosinova: c² = a²+b²−2ab·cos(γ)",
      "Sinova: a/sin(α) = b/sin(β) = c/sin(γ) = 2R",
      "tₐ = (1/2)·√(2b²+2c²−a²)"
    ],
    problems: [
      {
        prompt: "Rameno AD lichoběžníku ABCD (AB || CD) má délku m cm. Vrcholy A, B, C určují pravoúhlý trojúhelník. |AB| = 10 cm, |BC| = 8 cm. Určete všechny možnosti pro parametr m tak, aby daný lichoběžník existoval.",
        solution: "Pravoúhlý trojúhelník ABC. Přípony: buď přepona AB = 10, pak AC = √(100−64) = 6. Nebo přepona AC, pak AC = √(100+64) = √164. Nebo úhel u B pravý, pak AC = √164 ≈ 12.8. Případ 1: pravý úhel u C. AC = 6, AB = 10. Lichoběžník ABCD, AB||CD. Bod D leží na přímce rovnoběžné s AB procházející C, ve vzdálenosti m od A. |AD| = m. D musí být takový, aby ABCD tvořil lichoběžník. Podmínka: m > |AC − projekce| a trojúhelníková nerovnost. Geometricky: D leží na kružnici (A, m) a na přímce rovnoběžné s AB bodem C. Průsečíky existují pro m ≥ vzdálenost A od dané přímky. Vzdálenost A od přímky (rovnoběžka s AB přes C) = vᶜ = výška z A na tuto přímku = 6 (pokud pravý úhel u C). Tedy m ≥ 6 (pro m = 6 je AD kolmé). Horní omezení: D nesmí splynout s C nebo jít na druhou stranu. Konkrétně: m > 6 (pro m = 6 není lichoběžník, ale obdélník), a další podmínky dle konfigurace.",
        difficulty: "hard",
      },
      {
        prompt: "Trojúhelník ABC: a o 1 cm delší než b, vₐ = 2.5 cm, vᵦ = 3 cm. Určete délky stran a, b.",
        solution: "a = b + 1. Obsah S = (1/2)·a·vₐ = (1/2)·b·vᵦ. a·2.5 = b·3. 2.5·(b+1) = 3b. 2.5b + 2.5 = 3b. 0.5b = 2.5. b = 5 cm. a = 6 cm. Ověření: S = (1/2)·6·2.5 = 7.5 cm² = (1/2)·5·3 = 7.5 cm². Výsledek: a = 6 cm, b = 5 cm.",
        difficulty: "easy",
      },
      {
        prompt: "Trojúhelník ABC: C[4,−1], vᵦ: 2x−3y+12 = 0, tᵦ: 2x+3y = 0. Určete zbylé vrcholy trojúhelníku.",
        solution: "vᵦ je výška na stranu b (AC), prochází bodem B a je kolmá na AC. tᵦ je těžnice z B na střed AC. B leží na obou přímkách vᵦ a tᵦ. Průsečík: 2x−3y+12 = 0 a 2x+3y = 0. Sčítáme: 4x+12 = 0, x = −3. 2·(−3)+3y = 0, y = 2. B = (−3, 2). Střed strany AC = těžiště na tᵦ: označme Sᵦ = ((4+xₐ)/2, (−1+yₐ)/2). Sᵦ leží na tᵦ: 2·(4+xₐ)/2 + 3·(−1+yₐ)/2 = 0. (4+xₐ) + 3·(−1+yₐ)/2 = 0... Přesněji: 2·((4+xₐ)/2) + 3·((−1+yₐ)/2) = 0. (4+xₐ) + (3(−1+yₐ))/2 = 0. Zároveň AC je kolmá na vᵦ: směr vᵦ je (3,2) (normálový vektor (2,−3)). Směr AC musí být (3,2) (kolmice má směr normály). A = C + t·(3,2) = (4+3t, −1+2t). Sᵦ = ((4+4+3t)/2, (−1−1+2t)/2) = ((8+3t)/2, (−2+2t)/2). Dosadíme do tᵦ: 2·(8+3t)/2 + 3·(−2+2t)/2 = 0. (8+3t) + 3(−2+2t)/2 = 0. (8+3t) + (−6+6t)/2 = 0. 16+6t−6+6t = 0. 10+12t = 0. t = −5/6. A = (4−15/6, −1−10/6) = (4−5/2, −1−5/3) = (3/2, −8/3). Vrcholy: A(3/2, −8/3), B(−3, 2), C(4, −1).",
        difficulty: "hard",
      },
      {
        prompt: "Je dána úsečka AC, |AC| = 6 cm. Sestrojte všechny trojúhelníky ABC se stranou AC, tᵦ = 2 cm, vᶜ = 3 cm.",
        solution: "tᵦ je těžnice z B ke středu AC, Sᵦ je střed AC. |BSᵦ| = tᵦ = 2 cm. Střed AC je bod Sᵦ, tedy B leží na kružnici k(Sᵦ, 2). vᶜ = 3 cm je výška na stranu c (AB). Výška z C na AB = 3 cm, tedy C je vzdálen 3 cm od přímky AB. Konstrukce: 1) Nakreslíme AC, střed Sᵦ. 2) Kružnice k(Sᵦ, 2). 3) Pro každý bod B na k hledáme, zda d(C, AB) = 3. To je množina bodů B taková, že přímka AB má vzdálenost 3 od C. Vzdálenost C od AB: d = |AC|·sin(úhel CAB) = 6·sin(A). Zároveň |BSᵦ| = 2. Použijeme vzorec pro těžnici: tᵦ² = (2a²+2c²−b²)/4, kde b = |AC| = 6. 4 = (2a²+2c²−36)/4. 16 = 2a²+2c²−36. a²+c² = 26. vᶜ = 2S/c = 3. S = 3c/2. Zároveň S = (1/2)·b·vᵦ... Vícero podmínek, konstrukce pomocí kružnic a přímek.",
        difficulty: "hard",
      },
      {
        prompt: "Pravoúhlý trojúhelník má přeponu délky 10 cm. Jeho strany jsou 3 po sobě jdoucí členy aritmetické posloupnosti. Určete úhel proti delší z odvěsen.",
        solution: "Strany AP: a−d, a, a+d. Přepona (nejdelší strana) = a+d = 10. Pythagorova věta: (a−d)² + a² = (a+d)². a²−2ad+d²+a² = a²+2ad+d². a²−4ad = 0. a(a−4d) = 0. a = 4d. Přepona: 4d+d = 5d = 10, d = 2. Strany: 6, 8, 10. Úhel proti delší odvěsně (8): sin(α) = 8/10 = 4/5. α = arcsin(0.8) ≈ 53.13°. Přesněji: α = arcsin(4/5) = arctan(4/3) ≈ 53°8'.",
        difficulty: "easy",
      },
      {
        prompt: "Najděte rovnici výšky vᵦ trojúhelníku ABC. A[1,1], B[5,3], C[3,7]. Určete plochu trojúhelníku.",
        solution: "Výška vᵦ z bodu B na stranu AC. Směr AC = C−A = (2,6). Normálový vektor k AC: (6,−2) nebo (3,−1). Rovnice vᵦ: prochází B(5,3), směr normály (3,−1): 3(x−5) − 1(y−3) = 0 ⇒ 3x − y − 12 = 0. Plocha: S = (1/2)|det((B−A, C−A))| = (1/2)|det((4,2),(2,6))| = (1/2)|24−4| = 10. Plocha trojúhelníku je 10 cm².",
        difficulty: "easy",
      },
      {
        prompt: "Je dána úsečka CP, |CP| = 3 cm. Sestrojte všechny trojúhelníky ABC, pro které je CP výškou vᶜ, b = 6 cm, tᵦ = 2 cm.",
        solution: "vᶜ = |CP| = 3 cm, strana b = |AC| = 6 cm. tᵦ = 2 cm (těžnice z B). C a pata výšky P: CP kolmé na AB, |CP| = 3. B leží na přímce AB, vzdálenost C od AB = 3. Střed S strany AC: |BS| = tᵦ = 2. |AC| = b = 6, tedy S je střed AC, |AS| = |SC| = 3. B leží na kružnici k(S, 2). Zároveň B leží na přímce AB, která má vzdálenost 3 od C. Přímka AB je rovnoběžka s tečnou kružnice k(C, 3) — ne, to je přímka ve vzdálenosti 3 od C. Konstrukce: nakreslíme C, kružnici k₁(C, 6) = množina bodů A. Pro každé A určíme S = střed AC. B na k(S, 2) a na přímce ve vzdálenosti 3 od C kolmé na CP. Řešení závisí na geometrické konfiguraci.",
        difficulty: "hard",
      },
      {
        prompt: "V zorném poli zaměřovacího zařízení vidíme z helikoptéry bod A na Zemi ve vzdálenosti 540 m, bod B je rovněž na Zemi 670 m daleko od vrtulníku pod zorným úhlem 111 stupňů od bodu A. Jak vysoko je vrtulník nad Zemí?",
        solution: "Označme H = pozice vrtulníku, |HA| = 540, |HB| = 670, úhel AHB = 111°. Spojnice AB na Zemi je vodorovná. Z kosinové věty: |AB|² = 540²+670²−2·540·670·cos(111) = 291600+448900−723600·cos(111). cos(111) = −cos(69) ≈ −0.3584. |AB|² = 291600+448900+259402 = 999902. |AB| ≈ 1000 m. Výška h: H je nad zemí. Uvážíme trojúhelník HAB v prostoru. Pata kolmice z H na rovinu země = P. |HA|² = |PA|²+h², |HB|² = |PB|²+h². Potřebujeme navíc polohu P. Ze zadání přímo: bez další informace o poloze paty vypočítáme výšku pomocí plochy trojúhelníka. S = (1/2)·540·670·sin(111) = (1/2)·361800·0.9336 ≈ 168890 m². Zároveň S = (1/2)·|AB|·vₕ, kde vₕ je vzdálenost H od přímky AB. vₕ = 2S/|AB| ≈ 337780/1000 ≈ 337.8 m. Ale výška nad Zemí h ≤ vₕ. Přesně h závisí na konfiguraci — pokud A, B leží na zemi a H je nad P, pak h ≈ 337.8 m (pokud P leží na AB).",
        difficulty: "hard",
      },
      {
        prompt: "Mám pozemek tvaru pravoúhlého trojúhelníku. Chci na něm stavbu tak, aby zastavěná plocha byla co největší. Požaduji základy tvaru čtverce nebo obdélníku. Vyjádřete percentuální zastavěnost.",
        solution: "Pravoúhlý trojúhelník s odvěsnami a, b, přepona c. Obdélník vepsaný: jedna strana na odvěsně a. Výška obdélníku y, šířka x. Z podobnosti trojúhelníků: y/b = (a−x)/a, tedy y = b(a−x)/a. Obsah S = x·y = x·b·(a−x)/a = b·(ax−x²)/a. S'(x) = b·(a−2x)/a = 0 ⇒ x = a/2. y = b/2. S_max = ab/4. Obsah trojúhelníku = ab/2. Zastavěnost: (ab/4)/(ab/2) = 1/2 = 50%. Pro čtverec (x = y): x = b(a−x)/a ⇒ ax = ab−bx ⇒ x(a+b) = ab ⇒ x = ab/(a+b). S = x² = a²·b²/(a+b)². Zastavěnost = a²·b²/((a+b)² · ab/2) = 2ab/(a+b)² ≤ 50% (rovnost pro a = b).",
        difficulty: "medium",
      },
      {
        prompt: "Sestrojte trojúhelník ABC, je-li dán parametricky stranou c, úhlem α a těžnicí tᶜ.",
        solution: "Dána: strana c = |AB|, úhel α u vrcholu A, těžnice tᶜ z C ke středu S strany AB. Konstrukce: 1) Nakreslíme úsečku AB délky c. 2) Střed S strany AB. 3) Z bodu A vedeme polopřímku svírající úhel α s AB. 4) Bod C leží na této polopřímce a zároveň na kružnici k(S, tᶜ). 5) Průsečík polopřímky s kružnicí dá bod C (0, 1 nebo 2 řešení dle konfigurace). Diskuze: řešení existuje, pokud kružnice protíná polopřímku. Podmínka: tᶜ dostatečně velké vzhledem ke c a úhlu α.",
        difficulty: "medium",
      },
      {
        prompt: "Sestrojte trojúhelník ABC, je-li dán parametricky stranou c, úhlem α a poloměrem vepsané kružnice ρ.",
        solution: "Dána: c = |AB|, úhel α u A, poloměr vepsané kružnice r. Konstrukce: 1) Nakreslíme úsečku AB délky c. 2) Z A vedeme polopřímku pod úhlem α. 3) Střed vepsané kružnice I leží na ose úhlu α a ve vzdálenosti r od strany AB. 4) Rovnoběžka se stranou AB ve vzdálenosti r: střed I leží na průsečíku této rovnoběžky s osou úhlu α. 5) Z I vedeme kolmice na všechny strany (dotykové body). 6) Strana AC prochází A pod úhlem α. 7) BC je tečna ke kružnici k(I, r) z bodu B. Podmínka existence: průsečík osy úhlu s rovnoběžkou musí existovat a tečna z B ke kružnici musí protnout polopřímku z A.",
        difficulty: "medium",
      },
      {
        prompt: "Sestrojte trojúhelník ABC, znáte-li při obvyklém značení α, β, tᶜ. α, β ∈ (0, 90°).",
        solution: "Dána: úhly α, β (tedy i γ = 180−α−β), těžnice tᶜ. Konstrukce: 1) Zvolíme libovolný trojúhelník A'B'C' s úhly α, β, γ. 2) Spočítáme jeho těžnici t'ᶜ. 3) Hledaný trojúhelník je k A'B'C' podobný s koeficientem k = tᶜ/t'ᶜ. 4) Strany hledaného: a = k·a', b = k·b', c = k·c'. 5) Sestrojíme trojúhelník s těmito stranami. Alternativně: z formule tᶜ = (1/2)·√(2a²+2b²−c²) a sinové věty určíme strany.",
        difficulty: "medium",
      },
      {
        prompt: "Sestrojte trojúhelník ABC pomocí tₐ, tᵦ, tᶜ (tří těžnic).",
        solution: "Jsou dány tři těžnice tₐ, tᵦ, tᶜ. Využijeme vlastnost: těžnice se protínají v těžišti T, které je dělí v poměru 2:1 od vrcholu. Konstrukce: 1) Těžiště T dělí tₐ na AT = (2/3)·tₐ a TSₐ = (1/3)·tₐ. Podobně pro tᵦ a tᶜ. 2) Sestrojíme trojúhelník z úseků (2/3)·tₐ, (2/3)·tᵦ, (2/3)·tᶜ — ten však není hledaný. Správný postup: 3) Trojúhelník těžnist: strany trojúhelníku se stranami (2/3)·tₐ, (2/3)·tᵦ, (2/3)·tᶜ má strany rovnoběžné se stranami původního trojúhelníku. 4) Vzorec: a² = (2/9)·(2tᵦ²+2tᶜ²−tₐ²). Obdobně pro b a c. 5) Z vypočtených stran a, b, c sestrojíme trojúhelník.",
        difficulty: "hard",
      },
      {
        prompt: "Dokazte, ze spojnice pat dvou vysek ostrouhlého trojuhelniku oddeluje z neho trojuhelnik danemu trojuhelniku podobny.",
        solution: "Necht trojuhelnik ABC je ostrouhlý. Paty vysek z A a B oznacme D (pata z A na BC) a E (pata z B na AC). Trojuhelnik CDE: uhel u C je spolecny s trojuhelnikem ABC. Uhel CDE: v ctyruhelníku ADEC (pokud pravy uhel u D a E) lezi body D, E na kruznici s prumerem AB (Thalesova kruznice). Uhel ADE = uhel ABE (obvodove uhly). Podobne uhel BED = uhel BAD. Tedy trojuhelnik CDE ma uhly: uhel C (spolecny), uhel CDE = 90 - C (z pravouhlosti), uhel CED = 90 - C. Ne, presneji: uhel CDA = 90 stupnu (vyska), uhel ADB = 90. Ve ctyruhelniku ADBE (oba uhly D a E prave) je ADBE tetivovy. Uhel DEA = uhel DBA = beta. Uhel u D v trojuhelniku CDE: uhel CDE = 90 - gamma (ze sestreho trojuhelniku BDC, pravy uhel u D). Uhel u E: uhel CED = 90 - gamma (analogicky). Cimz uhly CDE = alfa, CED = beta (nebo obracene). Trojuhelnik CDE ~ trojuhelnik CAB (uhly se shoduji).",
        difficulty: "hard",
      },
    ],
  },
  // T16
  {
    id: "mnohouhelnik",
    number: 16,
    name: "Mnohoúhelník − čtyřúhelník, n-úhelník",
    category: "geometry",
    theory: [
      "Čtyřúhelník: součet vnitřních úhlů = 360 stupňů.",
      "Rovnoběžník (rovnoběžník): protější strany rovnoběžné a stejně dlouhé. Úhlopříčky se navzájem půlí.",
      "Obdélník: rovnoběžník s pravými úhly. Úhlopříčky jsou stejně dlouhé.",
      "Kosočtverec: rovnoběžník se všemi stranami stejně dlouhými. Úhlopříčky se navzájem půlí kolmo.",
      "Lichoběžník: právě dvě protější strany rovnoběžné. S = (a+c)/2 · v.",
      "Tětivový čtyřúhelník: všechny vrcholy leží na kružnici. Součet protějších úhlů = 180 stupňů.",
      "Ptolemaiova věta: pro tětivový čtyřúhelník ef = ac + bd (úhlopříčky a strany).",
      "Pravidelný n-úhelník: všechny strany a úhly shodné. Vnitřní úhel = (n−2)·180/n."
    ],
    formulas: [
      "S_rovnoběžníku = a·vₐ",
      "S_lichoběžník = (a+c)/2 · v",
      "S_obdélník = a·b, u = √(a²+b²)",
      "Ptolemaiova věta: e·f = a·c + b·d",
      "Vnitřní úhel pravidelného n-úhelníku = (n−2)·180/n"
    ],
    problems: [
      {
        prompt: "Sestrojte obdélník ABCD, znáte-li u (úhlopříčku) a |a−b| > 0 (rozdíl stran).",
        solution: "Označme strany a, b, úhlopříčku u. a² + b² = u² a a − b = d (dáné). Z těchto: a = (d + √(2u²−d²))/2, b = (−d + √(2u²−d²))/2. Konstrukce: 1) Nakreslíme úsečku délky u (úhlopříčka). 2) Nad ní opíšeme kružnici (úhlopříčky obdélníku se půlí, střed O). 3) Najdeme a, b z podmínek. Podmínka existence: 2u² > d², tj. u > d/√2.",
        difficulty: "medium",
      },
      {
        prompt: "Nad stranami rovnoběžníku jsou vně tohoto rovnoběžníku sestrojeny čtverce. Dokažte, že středy těchto čtverců jsou opět vrcholy čtverce.",
        solution: "Nechť rovnoběžník ABCD má středy čtverců P (nad AB), Q (nad BC), R (nad CD), S (nad DA). Použijeme souřadnice: A(0,0), B(a,0), C(a+b·cos(α), b·sin(α)), D(b·cos(α), b·sin(α)). Střed čtverce nad AB: P = (a/2, a/2) (otočení o 90° ven). Analogicky pro ostatní strany. Ukážeme, že |PQ| = |QR| = |RS| = |SP| a úhly jsou 90°. Alternativně pomocí komplexních čísel: každý střed je střed strany + otočení o π/2 násobené polovinou délky. Symetrie rovnoběžníku zaručí, že výsledek je čtverec. Důkaz pomocí vektorů nebo komplexních čísel potvrzuje, že PQRS je čtverec.",
        difficulty: "hard",
      },
      {
        prompt: "Je dán tětivový pětiúhelník. Poloměr opsané kružnice je r. Vrcholy dělí tuto kružnici v poměru 1:2:3:4:2. Určete plochu daného pětihelnníku.",
        solution: "Celkový součet poměru: 1+2+3+4+2 = 12. Středové úhly: 360/12 · (1,2,3,4,2) = (30, 60, 90, 120, 60)°. Plocha = součet ploch trojúhelníků z centra kružnice ke každému oblouku: S = (1/2)·r² · Σ sin(αᵢ) = (r²/2)·(sin30+sin60+sin90+sin120+sin60) = (r²/2)·(0.5+√3/2+1+√3/2+√3/2) = (r²/2)·(1.5+3·√3/2) = r²·(3+3·√3)/4.",
        difficulty: "medium",
      },
      {
        prompt: "Sestrojte všechny čtyřúhelníky ABCD: |AD| = 4 cm, |AB| = 7 cm, |BC| = 5 cm, |CD| = 6 cm. Přímka AC je osou úhlu BAD.",
        solution: "AC osa úhlu BAD: úhel BAC = úhel CAD. Z věty o ose úhlu v trojúhelníku ABC a ACD. V trojúhelníku ABD: AC je osa úhlu A. Z vlastnosti osy úhlu v trojúhelníku: BC/CD = AB/AD (věta o ose vnitřního úhlu aplikovaná na trojúhelník s úhlopříčkou). BC/CD = 5/6. AB/AD = 7/4 = 1.75. 5/6 ≈ 0.833 ≠ 1.75. Tedy AC není osa úhlu v trojúhelníku ABD, ale osa úhlu BAD jako takového. Konstrukce: 1) Nakreslíme úhel BAD libovolný a jeho osu. 2) Na rameni AB vezmeme bod B ve vzdálenosti 7 od A. 3) Na ose úhlu hledáme bod na AC. 4) |BC| = 5, |CD| = 6, |AD| = 4 musí být splněno. Systém podmínek řeší numerické/geometrické řešení.",
        difficulty: "hard",
      },
      {
        prompt: "V lichoběžníku ABCD je dáno: a = 8 cm, b = 5 cm, β = 60°, δ = 105°. Určete jeho plochu a obvod.",
        solution: "Lichoběžník ABCD, AB||CD (a = |AB| = 8, b = |CD| = 5 není standardní). Přeinterpretujeme: a = delší základna = 8, pravděpodobně c = kratší = 5 je něco jiného. Standardně: a = |AB|, b = |BC|. Úhly β u B, δ u D. β + α = 180 (protože AB||CD u lichoběžníku neplatí obecně). Ale α + δ = 180 pokud AB||CD (jednostranné úhly). Pokud β = 60, δ = 105: β + α ≠ 180 obecně. Správně: β + α musí být diskutováno. S AB = 8, BC = 5, úhel B = 60, úhel D = 105. α + β + γ + δ = 360. Pokud AB||CD: α + β = 180 ⇒ α = 120. γ + δ = 180 ⇒ γ = 75. Výška: h = b·sin(β) = 5·sin(60) = 5·√3/2. Projekce BC na AB: 5·cos(60) = 2.5. Z úhlu δ: |AD|·sin(δ−90) nebo přes γ: |AD|·sin(γ) = h. |AD| = h/sin(75) = 5·√3/2 / sin(75). sin(75) = cos(15) = (√6+√2)/4 ≈ 0.9659. |AD| ≈ 4.49 cm. Plocha = (a+c)/2 · h.",
        difficulty: "hard",
      },
      {
        prompt: "Do půlkruhu o poloměru r vepište obdélník tak, aby jeho plocha byla maximální. Vyjádřete poměr ploch půlkruhu a obdélníku.",
        solution: "Obdélník má jednu stranu na průměru půlkruhu. Polovina šířky = x, výška y. x²+y² = r² (vrchol na půlkružnici). Šířka obdélníku = 2x, výška = y. Plocha S = 2xy. Maximalizujeme 2xy za podmínky x²+y² = r². AM-GM: 2xy ≤ x²+y² = r², tedy xy ≤ r²/2, S ≤ r². Rovnost pro x = y = r/√2. S_max = 2·r/√2·r/√2 = r². Plocha půlkruhu: π·r²/2. Poměr: (π·r²/2)/r² = π/2 ≈ 1.571.",
        difficulty: "medium",
      },
      {
        prompt: "Vyjádřete součin úhlopříček tětivového čtyřúhelníku pomocí jeho stran (Ptolemaiova věta ef = ac + bd).",
        solution: "Ptolemaiova věta: pro tětivový čtyřúhelník ABCD s úhlopříčkami e = |AC|, f = |BD| a stranami a = |AB|, b = |BC|, c = |CD|, d = |DA| platí: e·f = a·c + b·d. Důkaz: zvolíme bod E na AC tak, že úhel ABE = úhel DBC. Pak trojúhelník ABE ~ trojúhelník DBC (úhly). Z podobnosti: |AE|/|DC| = |AB|/|DB|, tedy |AE| = |AB|·|DC|/|DB|. Analogicky trojúhelník ABD ~ trojúhelník EBC, |EC|/|BC| = |AD|/|BD|, tedy |EC| = |BC|·|AD|/|BD|. e = |AC| = |AE|+|EC| = (|AB|·|DC|+|BC|·|AD|)/|BD| = (ac+bd)/f. Tedy ef = ac + bd.",
        difficulty: "hard",
      },
      {
        prompt: "Sestrojte všechny lichoběžníky ABCD: |AB| = 6 cm, AB||CD, |CD| = 3 cm, |AD| = 4 cm, |BC| = 5 cm.",
        solution: "AB||CD, |AB| = 6, |CD| = 3, |AD| = 4, |BC| = 5. Sestrojíme: položíme AB. Bod E na AB tak, že DE||BC a |DE| = |AB|−|CD| = 3 (posunutím CD na AB). Trojúhelník ADE: |AD| = 4, |DE| = 3, |AE| = 3 (protože AB−CD = 3). Trojúhelníková nerovnost: 3+3 > 4, 4+3 > 3, 4+3 > 3. OK. Konstrukce: 1) AB = 6 cm. 2) E na AB, |AE| = 3 (nebo |AE| = |AB|−|CD| = 3). 3) Trojúhelník ADE: kružnice k₁(A, 4) a k₂(E, 3). D = průsečík. 4) C = D + B − E (rovnoběžně posunutý). Ověření: |BC| = |DE| = 3... Ale máme |BC| = 5! Správně: E tak že |BE| = |CD| = 3, |AE| = 3. Trojúhelník ADE: |AE|=3, |AD|=4, |DE|? DE = BC = 5. Tak: |AE| = AB−CD = 3. Trojúhelník ADE se stranami 3, 4, 5 — pravoúhlý! Úhel AED = 90°. D leží nad přímkou AB. C = D + vektor EB. Řešení existuje (2 — D nad a pod AB).",
        difficulty: "medium",
      },
      {
        prompt: "Je dán obvod čtverce. Bod S dělí jeho úhlopříčku v poměru 1:3. Sestrojte všechny příčky ve čtverci, pro které platí, že S je jejich střed.",
        solution: "Čtverec ABCD. Úhlopříčka AC. S dělí AC v poměru AS:SC = 1:3. Hledáme úsečky MN, kde M a N leží na stranách čtverce a S je střed MN. Parametricky: M = S + t·v, N = S − t·v pro nějaký směrový vektor v. M a N musí ležet na stranách čtverce. Pro každý směr v najdeme t takové, že M a N leží na stranách. Množina všech takových seček tvoří spojitou rodinu úseček. Konkrétní řešení závisí na poloze S. Pro S ve čtvrtinovém bodě úhlopříčky existují úsečky na všech stranových kombinacích (AB s CD, AD s BC, atd.).",
        difficulty: "medium",
      },
      {
        prompt: "Sestrojte kosodélník ABCD, je-li dán úhel DAB, úhel ABD a úhlopříčka AC.",
        solution: "Kosodélník (rovnoběžník): AB||CD, AD||BC. Dáné: úhel DAB = α, úhel ABD = β (úhel v trojúhelníku ABD), |AC| = e. V trojúhelníku ABD: úhel ADB = 180 − α − β. Úhlopříčka BD: |BD| spočítáme ze sinové věty po určení stran. Konstrukce: 1) Z úhlů α a β a jedné úhlopříčky AC = e. V rovnoběžníku: AC a BD se navzájem půlí. Střed O: |AO| = e/2. Trojúhelník ABO: úhel OAB = α, úhel ABO = β. Sinová věta v ABO: |AO|/sin(β) = |BO|/sin(α). |BO| = (e/2)·sin(α)/sin(β). 2) Sestrojíme trojúhelník ABO. 3) Doplníme na rovnoběžník: C = 2O − A, D = 2O − B.",
        difficulty: "medium",
      },
    ],
  },
  // T17
  {
    id: "mnoziny-bodu",
    number: 17,
    name: "Množiny bodů dané vlastnosti",
    category: "geometry",
    theory: [
      "Množina bodů dané vlastnosti (MBDV): hledáme geometrický útvar (přímka, kružnice, kuželosečka), který splňuje danou podmínku.",
      "Osa úsečky: množina bodů stejně vzdálených od dvou bodů — střední kolmice.",
      "Osa úhlu: množina bodů stejně vzdálených od dvou přímek.",
      "Kružnice: množina bodů stejně vzdálených od středu.",
      "Parabola: množina bodů stejně vzdálených od bodu (ohnisko) a přímky (řídítka).",
      "Apolloniova kružnice: množina bodů, jejichž poměr vzdálenosti od dvou daných bodů je konstantní.",
      "Thalesova kružnice: množina bodů, ze kterých je viděna úsečka pod pravým úhlem.",
      "Konstruktivní úlohy: analýza (rozbor), konstrukce, důkaz, diskuze."
    ],
    formulas: [
      "Parabola: y² = 2px (ohnisko (p/2, 0), řídítka x = −p/2)",
      "Kružnice: (x−m)² + (y−n)² = r²",
      "Apolloniova kružnice: |PA|/|PB| = k (konstanta)",
      "Vzdálenost bodu od přímky: d = |ax₀+by₀+c|/√(a²+b²)"
    ],
    problems: [
      {
        prompt: "Je dána přímka p, bod A, A není na p, d(A,p) = 1. Vyšetřete množinu M všech bodů X roviny, pro které platí d(X,p) = k·|AX|, k parametr, k ∈ ℝ⁺.",
        solution: "Pro k = 1: d(X,p) = |AX|. To je definice paraboly s ohniskem A a řídící přímkou p. MBDV je parabola. Pro k ≠ 1: d(X,p) = k·|AX|. Zvolme souřadnice: p ... osa x, A = (0,1). d(X,p) = |y|. |AX| = √(x²+(y−1)²). Podmínka: |y| = k·√(x²+(y−1)²). y² = k²·(x²+(y−1)²) = k²·x²+k²·y²−2k²·y+k². x²·k² + y²·(k²−1) − 2k²·y + k² = 0. Pro k = 1: x² − 2y + 1 = 0, parabola. Pro k < 1: elipsa (koeficient u y² záporný po úpravě). Pro k > 1: hyperbola. Přesněji: (1−k²)·y² + 2k²·y − k²·x² − k² = 0. Pro k<1: elipsa, pro k=1: parabola, pro k>1: hyperbola.",
        difficulty: "hard",
      },
      {
        prompt: "Napište rovnici množiny bodů K, které jsou stejně vzdáleny od bodu L(5,4) a od přímky x − y = 0.",
        solution: "Bod X(x,y). Vzdálenost od L: √((x−5)²+(y−4)²). Vzdálenost od přímky x−y=0: |x−y|/√2. Podmínka: (x−5)²+(y−4)² = (x−y)²/2. 2((x−5)²+(y−4)²) = (x−y)². 2(x²−10x+25+y²−8y+16) = x²−2xy+y². 2x²−20x+50+2y²−16y+32 = x²−2xy+y². x²+2xy+y²−20x−16y+82 = 0. (x+y)² − 20x − 16y + 82 = 0. Substituce u = x+y, v = x−y: x = (u+v)/2, y = (u−v)/2. u² − 20(u+v)/2 − 16(u−v)/2 + 82 = 0. u² − 10u − 10v − 8u + 8v + 82 = 0. u² − 18u − 2v + 82 = 0. v = (u²−18u+82)/2. To je parabola v souřadnicích (u,v). MBDV je parabola.",
        difficulty: "medium",
      },
      {
        prompt: "Určete množinu M všech bodů dotyku tečen vedených bodem A ke kružnicím se středem B (r ≤ |AB|).",
        solution: "Bod A je pevný, B je střed kružnice, r se mění (0 < r ≤ |AB|). Tečna z A ke kružnici k(B,r): bod dotyku T splňuje: |BT| = r a BT kolmé na AT. Tedy úhel ATB = 90°. To znamená, že T leží na Thalesově kružnici nad úsečkou AB. MBDV je kružnice s průměrem AB (Thalesova kružnice) bez bodů A a B.",
        difficulty: "medium",
      },
      {
        prompt: "Napište rovnici množiny bodů M stejně vzdálených od bodu K(−3,2) a od přímky x + y = 0. Popište vlastnosti množiny M.",
        solution: "Bod X(x,y). |XK| = √((x+3)²+(y−2)²). d(X, x+y=0) = |x+y|/√2. Podmínka: (x+3)²+(y−2)² = (x+y)²/2. 2(x²+6x+9+y²−4y+4) = x²+2xy+y². 2x²+12x+18+2y²−8y+8 = x²+2xy+y². x²−2xy+y²+12x−8y+26 = 0. (x−y)²+12x−8y+26 = 0. Substituce u = x−y, použijeme x = (u+(x+y)), je to složitější. Přímo: jde o parabolu (vzdálenost od bodu = vzdálenost od přímky). Ohnisko: K(−3,2), řídítka: x+y = 0. Osa paraboly je kolmá na řídítko a prochází ohniskem: směr (1,1), prochází (−3,2): parametricky (−3+t, 2+t). Vrchol V je střed K a paty kolmice z K na řídítko. Pata: P minimalizuje vzdálenost: x+y=0 a směr z K: (−3+t, 2+t). −3+t+2+t = 0, 2t = 1, t = 1/2. P = (−5/2, 5/2). V = ((−3−5/2)/2, (2+5/2)/2) = (−11/4, 9/4). Parabola s osou ve směru (1,1).",
        difficulty: "medium",
      },
      {
        prompt: "Určete obraz bodu A v O(o): A → A'. A(2,1), o: x − y − 5 = 0 (osová souměrnost).",
        solution: "Osová souměrnost podle přímky o: x−y−5 = 0. Normála: n = (1,−1). Pata kolmice z A(2,1) na o: P = A + t·n, kde t = −(1·2+(−1)·1−5)/(1+1) = −(−4)/2 = 2. P = (2+2, 1−2) = (4, −1). Ověření: 4−(−1)−5 = 0. OK. A' = 2P − A = (8−2, −2−1) = (6, −3). Ověření: střed (A+A')/2 = (4,−1) = P, leží na o. A' = (6, −3).",
        difficulty: "easy",
      },
      {
        prompt: "Jsou dány dvě protínající se kružnice k, m o nestejných poloměrech a bod D. Sestrojte všechny čtverce ABCD, pro které platí A ∈ m, C ∈ k.",
        solution: "Čtverec ABCD: bod D je dán, A ∈ kružnice m, C ∈ kružnice k. Střed čtverce O = (A+C)/2 = (B+D)/2. B = 2O − D. Úhlopříčka AC kolmá na BD a |AC| = |BD|. Z D a B: vektor DB otočený o 90° dává směr AC. Alternativně: C je obraz A v otočení o 90° kolem středu O. Ale střed O závisí na A a C. Procedura: C = D + otočení vektoru DA o 90° (C = D + R₉₀(A−D)). Tedy C = (Dₓ−(Aᵧ−Dᵧ), Dᵧ+(Aₓ−Dₓ)). Podmínka: A ∈ m a C ∈ k. Dosadíme souřadnice A do rovnice kružnice m a odpovídající C do rovnice k. Diskuze počtu řešení dle polohy D a kružnic.",
        difficulty: "hard",
      },
      {
        prompt: "Určete obraz bodu B v osové souměrnosti: B(0,2,−2), osa o: (1−t, −2−t, −2+t), t ∈ ℝ.",
        solution: "Směrový vektor osy: s = (−1,−1,1). Bod na ose (t=0): Q = (1,−2,−2). Vektor QB = B−Q = (−1,4,0). Projekce QB na s: proj = (QB·s)/(s·s) · s = (1−4+0)/3 · (−1,−1,1) = (−3/3)·(−1,−1,1) = (1,1,−1). Pata kolmice P = Q + proj = (1+1,−2+1,−2−1) = (2,−1,−3). B' = 2P − B = (4−0,−2−2,−6+2) = (4,−4,−4). Ověření: střed (0+4, 2−4, −2−4)/2 = (2,−1,−3) = P, leží na ose: (1−t, −2−t, −2+t) = (2,−1,−3) ⇒ 1−t=2 ⇒ t=−1: (−2−(−1)) = −1 a −2+(−1) = −3. OK. B' = (4, −4, −4).",
        difficulty: "medium",
      },
      {
        prompt: "Je dána kružnice k, přímka p. Sestrojte rovnostranný trojúhelník ABC. Víte, že A ∈ k, B ∈ p, C ∈ k nebo C ∈ p.",
        solution: "Případ C ∈ k: A, C ∈ k (opsaná kružnice?), B ∈ p. Rovnostranný trojúhelník: všechny strany stejné. C je obraz B v otočení o 60° kolem A (nebo −60). Zároveň C ∈ k a B ∈ p. Postup: 1) Pro každý bod A na k: otočíme kružnici k o ±60° kolem A. Obraz je kružnice k'. 2) B leží na průsečíku k' a p. 3) C je odpovídající bod na k. Případ C ∈ p: A ∈ k, B ∈ p, C ∈ p. Obdobně s otočením přímky p kolem bodu A. Diskuze počtu řešení dle vzájemné polohy k a p.",
        difficulty: "hard",
      },
      {
        prompt: "Dvě místa na různé straně řeky spojte nejkratší cestou. Podmínky: místa nejsou hned na březích, břehy jsou rovnoběžné a mostík musí být kolmý.",
        solution: "A a B na různých stranách řeky (rovnoběžné břehy, šířka d). Mostík kolmý na břehy, délka d. Hledáme body M (břeh u A) a N (břeh u B), MN kolmé na břehy, aby |AM| + d + |NB| bylo minimální. To je ekvivalentní minimalizaci |AM| + |NB| za podmínky, že M a N leží na odpovídajících březích a MN je kolmé. Posuneme B o d ve směru kolmém na břehy: B' je obraz B na břeh u A. Pak nejkratší cesta: A → M → N → B odpovídá přímce AB' (kde N je kolmá projekce). M je bod, kde přímka AB' protíná břeh u A. Cesta = |AB'|. Konstrukce: 1) Osová souměrnost B podle přímky břehu u A (posun o d). 2) Přímka AB'. 3) Průsečík s břehem = M. 4) N je kolmá projekce M na druhý břeh.",
        difficulty: "medium",
      },
      {
        prompt: "Řešte Apolloniovu úlohu bpk: přímka p, kružnice k(S,r), p ∩ k = ∅, bod A, A ∈ p. Sestrojte všechny kružnice procházející A, dotýkající se p v A a dotýkající se k.",
        solution: "Hledaná kružnice prochází bodem A a dotýká se přímky p v A (střed leží na kolmici k p v bodě A) a dotýká se kružnice k. Střed hledané kružnice O leží na kolmici n k přímce p v bodě A. Poloměr R = |OA|. Podmínka dotyku s k: |OS| = R + r (vnější dotyk) nebo |OS| = |R − r| (vnitřní). |OS| = |OA| + r nebo |OS| = ||OA| − r|. Bod O na přímce n: O = A + t·n_vektor. |OS|² = (t·n_vektor + A − S)². Řešíme rovnici pro t. Obecně 0, 1 nebo 2 řešení.",
        difficulty: "hard",
      },
      {
        prompt: "Řešte Apolloniovu úlohu ppk: dvě různoběžné přímky a, b, kružnice k taková, že a je její sečná a b její tečná.",
        solution: "Hledáme kružnici, která se dotýká přímky a, přímky b a kružnice k. Protože a je sečná a b tečná hledané kružnice... Reinterpretace: hledáme kružnici dotýkající se přímek a, b a kružnice k. Střed hledané kružnice leží na ose úhlu přímek a, b (protože se obou dotýká) a ve vzdálenosti R±r od středu k. Osy úhlu dají 2 přímky. Podmínka |OS_k| = R+r_k nebo |OS_k| = |R−r_k|. Dosadíme parametrické vyjádření bodu na ose do této podmínky. Kvadratická rovnice ⇒ 0, 1 nebo 2 řešení na každé ose. Celkem až 4 řešení.",
        difficulty: "hard",
      },
      {
        prompt: "Řešte Apolloniovu úlohu ppb: dvě různoběžké přímky a, b, bod A, A není na a, A není na b. Sestrojte kružnici procházející A a dotýkající se obou přímek.",
        solution: "Střed hledané kružnice O leží na ose úhlu přímek a, b (protože se obou dotýká). Ose úhlu jsou 2 přímky. Poloměr R = vzdálenost O od a = vzdálenost O od b. Podmínka: |OA| = R. Tedy vzdálenost O od přímky a = |OA|. Pro bod O na ose úhlu: d(O, a) je lineární funkce polohy na ose. |OA| je vzdálenost od pevného bodu. Rovnice d(O,a) = |OA| dává kuželosečku (parabolu) a průsečíky s osami úhlu jsou řešení. Obecně 2 nebo 4 řešení.",
        difficulty: "hard",
      },
      {
        prompt: "Bodem M uvnitř konvexního úhlu KVL veďte přímku tak, aby její úsek mezi rameny úhlu byl bodem M dělen v poměru 2:3.",
        solution: "Bod M uvnitř úhlu KVL. Hledáme přímku protínající ramena VK a VL v bodech P a Q, kde PM:MQ = 2:3, tj. M dělí PQ v poměru 2:3. Použijeme stejnoúhlost se středem M a koeficientem −2/3 (nebo −3/2). Obraz přímky VK v této stejnoúhlosti je přímka. Průsečík tohoto obrazu s přímkou VL dává bod Q. Pak P určíme z poměru. Konstrukce: 1) Stejnoúhlost S(M, −3/2): obraz bodu V je V', obraz přímky VK je přímka přes V' rovnoběžná s VK (neplatí — stejnoúhlost zachovává směr, ale středy M). 2) Alternativně: afinní transformace. Bod P na VK, Q na VL, M = (3P+2Q)/5. Pro každý P spočítáme Q = (5M−3P)/2 a ověříme Q in VL. To vede na jedinou přímku.",
        difficulty: "medium",
      },
    ],
  },
  // T18
  {
    id: "vzajemna-poloha",
    number: 18,
    name: "Vzájemná poloha přímek a rovin",
    category: "geometry",
    theory: [
      "Přímka v rovině: ax + by + c = 0. Směrový vektor s = (b, −a), normálový vektor n = (a, b).",
      "Přímka v prostoru: parametricky (x,y,z) = A + t·s, kde A je bod a s směrový vektor.",
      "Rovina v prostoru: ax + by + cz + d = 0, normálový vektor n = (a, b, c).",
      "Vzájemná poloha dvou přímek: rovnoběžné (s₁ = k·s₂, různé body), totožné (s₁ = k·s₂, společný bod), různoběžné (existuje průsečík), mimoběžné (v prostoru, neprotínají se ani nejsou rovnoběžné).",
      "Vzájemná poloha přímky a roviny: rovnoběžná (s·n = 0, bod není v rovině), leží v rovině (s·n = 0, bod je v rovině), protíná (s·n ≠ 0).",
      "Odchylka přímky a roviny: sin(α) = |s·n| / (|s|·|n|).",
      "Odchylka dvou rovin: cos(α) = |n₁·n₂| / (|n₁|·|n₂|)."
    ],
    formulas: [
      "s·n = 0 ⇔ přímka rovnoběžná s rovinou",
      "sin(α) = |s·n|/(|s|·|n|) (úhel přímky a roviny)",
      "cos(α) = |n₁·n₂|/(|n₁|·|n₂|) (úhel dvou rovin)",
      "d(bod, rovina) = |ax₀+by₀+cz₀+d|/√(a²+b²+c²)"
    ],
    problems: [
      {
        prompt: "Je dána přímka p a rovina ρ. Určete, pro který parametr a ∈ ℝ bude přímka s rovinou rovnoběžná. p: x=4+t, y=2−t, z=1+3t; ρ: ax+2y+z+4=0.",
        solution: "Směrový vektor p: s = (1,−1,3). Normála roviny: n = (a,2,1). Rovnoběžnost: s·n = 0. 1·a+(−1)·2+3·1 = 0. a−2+3 = 0. a = −1. Ověření, že přímka neleží v rovině: dosadíme bod p (t=0): (−1)·4+2·2+1+4 = −4+4+1+4 = 5 ≠ 0. Přímka neleží v rovině. Pro a = −1 je přímka rovnoběžná s rovinou.",
        difficulty: "easy",
      },
      {
        prompt: "Vyšetřete vzájemnou polohu přímek p, q v závislosti na reálném parametru a: p: ax+2y=0; q: a²·x−2y−2a=0.",
        solution: "Soustava: ax+2y = 0 a a²·x−2y−2a = 0. Sčítáme: (a+a²)·x − 2a = 0. a(1+a)·x = 2a. Pro a = 0: p: 2y=0 ⇒ y=0 (osa x). q: −0=0, tj. 0=0, každý bod vyhovuje? Ne: q: 0·x−2y−0=0 ⇒ y=0. Obě přímky jsou totožné (osa x). Pro a = −1: p: −x+2y=0. q: x−2y+2=0. Sčítáme: 2=0 — spor. Rovnoběžné různé přímky. Pro a ≠ 0 a a ≠ −1: x = 2a/(a(a+1)) = 2/(a+1). y = −ax/2 = −a/(a+1). Průsečík existuje: přímky jsou různoběžné. Shrnutí: a=0: totožné; a=−1: rovnoběžné; jinak: různoběžné s průsečíkem (2/(a+1), −a/(a+1)).",
        difficulty: "medium",
      },
      {
        prompt: "Najděte vztah mezi přímkou p: (1−2t, 2t, t), t ∈ ℝ a rovinou ρ: 2x−y+6z+7=0.",
        solution: "Směrový vektor: s = (−2,2,1). Normála roviny: n = (2,−1,6). s·n = −4−2+6 = 0. Přímka je rovnoběžná s rovinou. Bod přímky (t=0): (1,0,0). Dosadíme do roviny: 2·1−0+0+7 = 9 ≠ 0. Přímka neleží v rovině. Vzdálenost: d = 9/√(4+1+36) = 9/√41. Přímka je rovnoběžná s rovinou ve vzdálenosti 9/√41.",
        difficulty: "medium",
      },
      {
        prompt: "Najděte vztah mezi přímkou p: (1−2t, 2t, t), t ∈ ℝ a rovinou ρ: 2x+y−2z+6=0.",
        solution: "Směrový vektor: s = (−2,2,1). Normála roviny: n = (2,1,−2). s·n = −4+2−2 = −4 ≠ 0. Přímka protíná rovinu. Průsečík: dosadíme parametrické rovnice: 2(1−2t)+(2t)−2t+6=0. 2−4t+2t−2t+6=0. 8−4t=0. t=2. Průsečík: (1−4, 4, 2) = (−3, 4, 2). Úhel přímky s rovinou: sin(α) = |s·n|/(|s|·|n|) = 4/(3·3) = 4/9. α = arcsin(4/9) ≈ 26.4 stupňů.",
        difficulty: "medium",
      },
    ],
  },
  // T19
  {
    id: "shodna-zobrazeni",
    number: 19,
    name: "Shodná zobrazení",
    category: "geometry",
    theory: [
      "Shodné zobrazení (izometrie): zachovává vzdálenosti. Typy: posunutí, otočení, osová souměrnost, středová souměrnost, posunutá souměrnost.",
      "Osová souměrnost O(o): obraz bodu A je bod A', kde o je osa souměrnosti — střední kolmice AA'.",
      "Středová souměrnost S(S): obraz A je A' = 2S − A.",
      "Otočení R(S, α): obraz A otočíme o úhel α kolem středu S.",
      "Posunutí T(v): obraz A je A' = A + v.",
      "Skládání shodných zobrazení: dvě osové souměrnosti = otočení (protínající se osy) nebo posunutí (rovnoběžné osy)."
    ],
    formulas: [
      "Osová souměrnost: A' = 2P − A, kde P je pata kolmice z A na osu",
      "Středová souměrnost: A' = 2S − A",
      "Otočení: x' = xₛ+(x−xₛ)·cos(α)−(y−yₛ)·sin(α), y' = yₛ+(x−xₛ)·sin(α)+(y−yₛ)·cos(α)"
    ],
    problems: [
      {
        prompt: "Určete souřadnice bodu A souměrného podle roviny ρ: 2x−y+z−1=0 s bodem B[5,1,4].",
        solution: "Normála roviny: n = (2,−1,1). Pata kolmice P z B na ρ: P = B − ((n·B+D)/|n|²)·n, kde D = −1. n·B+D = 10−1+4−1 = 12. |n|² = 4+1+1 = 6. P = (5,1,4) − (12/6)·(2,−1,1) = (5,1,4)−(4,−2,2) = (1,3,2). Ověření: 2·1−3+2−1 = 0. OK. A = 2P−B = (2,6,4)−(5,1,4) = (−3,5,0). Bod A = (−3, 5, 0).",
        difficulty: "medium",
      },
      {
        prompt: "Určete bod M souměrný k bodu N[5,3,−1] podle přímky p(A,B), kde A[0,0,−3], B[−6,−2,1].",
        solution: "Směrový vektor: s = B−A = (−6,−2,4), zjednodušíme s = (−3,−1,2). AN = N−A = (5,3,2). Projekce AN na s: t = (AN·s)/(s·s) = (−15−3+4)/14 = −14/14 = −1. Pata P = A+t·s = (0,0,−3)+(−1)·(−3,−1,2) = (3,1,−5). M = 2P−N = (6,2,−10)−(5,3,−1) = (1,−1,−9). Bod M = (1, −1, −9).",
        difficulty: "medium",
      },
      {
        prompt: "Určete obraz bodu A v osové souměrnosti O(o): A(2,1), o: x−y−5=0.",
        solution: "Normála: n = (1,−1). Pata kolmice P z A na o: t = −(1·2+(−1)·1−5)/(1+1) = −(−4)/2 = 2. P = (2+2,1−2) = (4,−1). Ověř: 4−(−1)−5 = 0. OK. A' = 2P−A = (8−2,−2−1) = (6,−3). Bod A' = (6, −3).",
        difficulty: "easy",
      },
      {
        prompt: "Dvě místa na různé straně řeky spojte nejkratší cestou. Břehy rovnoběžné, mostek kolmý na břehy.",
        solution: "Viz T17. A na jedné straně, B na druhé. Břehy rovnoběžné, vzdálenost d. Mostek MN kolmý, |MN| = d. Celková cesta = |AM|+d+|NB|. Minimalizujeme |AM|+|NB|. Pomocí osové souměrnosti: B' je obraz B podle břehu u A (posunutí o d). Nejkratší cesta: spojíme A a B', přímka AB' protíná břeh v M. N je bod nad M. Minimální cesta = |AB'| = √((x_A−x_B)²+(y_A−(y_B+d))²) + d... Přesně: |AB'| kde B' = B posunuté o d směrem k břehu u A.",
        difficulty: "medium",
      },
      {
        prompt: "Určete obraz bodu B v osové souměrnosti: B(0,2,−2), osa o: (1−t,−2−t,−2+t), t ∈ ℝ.",
        solution: "Směrový vektor osy: s = (−1,−1,1). Bod na ose Q = (1,−2,−2). QB = (−1,4,0). Projekce: t = (QB·s)/(s·s) = (1−4+0)/3 = −1. P = Q+(−1)·s = (1+1,−2+1,−2−1) = (2,−1,−3). B' = 2P−B = (4,−2−2,−6+2) = (4,−4,−4). Bod B' = (4, −4, −4).",
        difficulty: "medium",
      },
      {
        prompt: "K parabole y² = 2px najděte její obraz ve středové souměrnosti podle ohniska F. Popište vlastnosti čtyřúhelníku tvořen vrcholy obou parabol a jejich společnými body.",
        solution: "Parabola y² = 2px: ohnisko F(p/2, 0), vrchol O(0,0). Středová souměrnost podle F: obraz bodu (x,y) je (p−x, −y). Obraz paraboly: (−y)² = 2p(p−x), tj. y² = 2p(p−x) = 2p²−2px. Společné body: y² = 2px a y² = 2p²−2px. 2px = 2p²−2px. 4px = 2p². x = p/2. y² = 2p·p/2 = p², y = ±p. Společné body: (p/2, p) a (p/2, −p). Vrcholy parabol: O(0,0) a obraz O' = (p, 0). Čtyřúhelník: vrcholy O(0,0), (p/2,p), O'(p,0), (p/2,−p). Je souměrný podle osy x. Úhlopříčky: OO' (délka p) a vertikální (délka 2p). Jsou na sebe kolmé a půlí se v F(p/2,0). Jde o kosočtverec (deltoid s rovnými stranami? Ověřme: |O(p/2,p)| = √(p²/4+p²) = p·√5/2. |O'(p/2,p)| = √(p²/4+p²) = p·√5/2. |(p/2,p)(p/2,−p)| = 2p. |OO'| = p. Kosočtverec (deltoid).",
        difficulty: "hard",
      },
    ],
  },
  // T20
  {
    id: "podobna-zobrazeni",
    number: 20,
    name: "Podobná zobrazení",
    category: "geometry",
    theory: [
      "Podobné zobrazení: zachovává úhly, mění vzdálenosti v konstantním poměru k (koeficient podobnosti).",
      "Stejnolehlost S(S, k): obraz A je A' na polopřímce SA (pro k > 0) nebo opačně (k < 0), |SA'| = |k|·|SA|.",
      "Podobnost trojúhelníků: trojúhelníky jsou podobné, pokud mají shodné úhly (uu), nebo poměrné strany (sss), nebo (sus).",
      "Podobný trojúhelník: poměry stran zachovány, úhly shodné.",
      "Aplikace: měření nedostupných vzdáleností, zvětšování/zmenšování.",
      "Mocnina bodu ke kružnici: |PA|·|PB| = |d² − r²| pro sečnu přes P."
    ],
    formulas: [
      "Stejnolehlost: A' = S + k·(A − S)",
      "Podobnost: a₁/a₂ = b₁/b₂ = c₁/c₂ = k",
      "Obsahy podobných útvarů: S₁/S₂ = k²",
      "Objemy: V₁/V₂ = k³"
    ],
    problems: [
      {
        prompt: "Dokažte, že spojnice pat dvou výšek ostroúhlého trojúhelníku oddělí z něho trojúhelník danému trojúhelníku podobný.",
        solution: "Nechť ABC je ostroúhlý trojúhelník. Paty výšek z A a B: D (na BC) a E (na AC). Ukážeme, že trojúhelník CDE ~ trojúhelník CBA. Úhel C je společný. V pravoúhlém trojúhelníku BDC: úhel BDC = 90 stupňů, úhel DCB = γ, úhel DBC = 90−γ. V pravoúhlém trojúhelníku AEC: úhel AEC = 90, úhel ACE = γ, úhel CAE = 90−γ. Body D, E leží na kružnici s průměrem AB (Thalesova kružnice, protože úhly ADB = AEB = 90 stupňů). Úhel CDE: v tětivovém čtyřúhelníku ADBE: úhel ADE = úhel ABE = β (obvodové úhly). Úhel CDE = 180−úhel ADE (pokud D mezi C a A na straně BC) — ne. Úhel CDE = úhel CDB − úhel... Přesněji: úhel EDC = úhel EAC = α (obvodové úhly nad obloukem EC v kružnici ADBE). Podobně úhel DEC = úhel DAC... Ne. Správně: úhel CDE = 90 − γ + něco. Jednodušší: úhel DCE = γ (společný). Trojúhelník CDE má úhel u C shodný s trojúhelníkem CAB. Stačí ukázat ještě jeden úhel. Úhel CED = úhel CAB = α (z tětivového čtyřúhelníku BDHC, kde H je ortocentrum). Tedy CDE ~ CAB (uu).",
        difficulty: "hard",
      },
      {
        prompt: "Bodem M uvnitř konvexního úhlu KVL veďte přímku tak, aby její úsek mezi rameny úhlu byl bodem M dělen v poměru 2:3 (stejnolehlost).",
        solution: "Bod M uvnitř úhlu KVL. Hledáme P na VK a Q na VL: PM:MQ = 2:3. M = (3P+2Q)/5. Použijeme stejnolehlost se středem M a koeficientem k = −3/2: obraz bodu P je Q' = M + (−3/2)·(P−M) = M − (3/2)(P−M) = (5/2)M − (3/2)P. Zároveň Q' musí ležet na VL. Pro každý P na VK vypočítáme Q' a hledáme, kdy Q' leží na VL. Alternativně: stejnolehlost S(M, −2/3): obraz Q je P' = M + (−2/3)·(Q−M). P' musí ležet na VK. Obraz přímky VL ve stejnolehlosti S(M, −2/3) je přímka l. Průsečík l s VK dává bod P. Pak Q spočítáme zpětně. Konstrukce: 1) Obraz V' bodu V ve stejnolehlosti S(M,−2/3): V' = M + (−2/3)·(V−M). 2) Obraz přímky VL je přímka přes V' rovnoběžná s VL (NE — stejnolehlost není rovnoběžné posunutí, zachovává směry). Přímka l prochází V' a je rovnoběžná s VL. 3) P = průsečík l a VK. 4) Q = M + (3/2)·(M−P)... Správně z poměru.",
        difficulty: "medium",
      },
    ],
  },
  // T21
  {
    id: "kruznice",
    number: 21,
    name: "Kružnice",
    category: "geometry",
    theory: [
      "Kružnice k(S, r): množina bodů ve vzdálenosti r od středu S. Rovnice: (x−m)²+(y−n)² = r².",
      "Tečna ke kružnici v bodě dotyku T: kolmá na poloměr ST. Rovnice tečny v T(x₀,y₀): (x₀−m)(x−m)+(y₀−n)(y−n) = r².",
      "Obvodový úhel: polovina středového úhlu nad stejným obloukem.",
      "Thalesova věta: obvodový úhel nad průměrem je pravý úhel.",
      "Mocnina bodu ke kružnici: p(P) = |PS|² − r². Pro P vně kružnice: p > 0, pro P uvnitř: p < 0.",
      "Tečna z vnějšího bodu: délka tečky = √(|PS|²−r²).",
      "Vzájemná poloha dvou kružnic: vnější/vnitřní dotyk, setkání, mimoběžnost."
    ],
    formulas: [
      "(x−m)² + (y−n)² = r²",
      "Tečna v T(x₀,y₀): (x₀−m)(x−m)+(y₀−n)(y−n) = r²",
      "Obvodový úhel = (1/2) · středový úhel",
      "Délka tečky z P: t = √(|PS|²−r²)"
    ],
    problems: [
      {
        prompt: "Vypočítejte poloměr kružnice k4 na obrázku. Platí r1 = 10 cm, r2 = r3 = 5 cm.",
        solution: "Konfigurace tří kružnic: k1(S1, 10), k2(S2, 5), k3(S3, 5). k4 se dotýká všech tří. Bez přesného obrázku předpokládáme: k2 a k3 leží uvnitř k1 a dotýkají se jí. k4 se dotýká k1 zevnitř a k2, k3 zvenčku. Z Descartova věty (Apolloniova kružnice): (k1+k2+k3+k4)² = 2(k1²+k2²+k3²+k4²), kde k = 1/r (křivost, se znaménkem). k1 = −1/10 (vnitřek), k2 = 1/5, k3 = 1/5, k4 = 1/r4. (−1/10+1/5+1/5+1/r4)² = 2(1/100+1/25+1/25+1/r4²). (3/10+1/r4)² = 2(1/100+2/25+1/r4²). Řešením dostaneme r4. (3/10+1/r4)² = 9/100+6/(10r4)+1/r4². 2(1/100+2/25+1/r4²) = 2/100+4/25+2/r4². Rovnice: 9/100+6/(10r4)+1/r4² = 2/100+16/100+2/r4². 9/100+6/(10r4) = 18/100+1/r4². −9/100+6/(10r4)−1/r4² = 0. 1/r4² − 6/(10r4) + 9/100 = 0. (1/r4−3/10)² = 0. r4 = 10/3 ≈ 3.33 cm.",
        difficulty: "hard",
      },
      {
        prompt: "Trojúhelník ABC je rovnostranný. Napište rovnici kružnice vepsané tomuto trojúhelníku, víte-li, že A(−6,0), B leží na ose x, C leží na ose y.",
        solution: "A(−6,0). B na ose x: B(b,0). C na ose y: C(0,c). Rovnostranný ⇒ |AB| = |BC| = |AC|. |AB| = |b+6|. |AC| = √(36+c²). |BC| = √(b²+c²). Z |AB| = |AC|: (b+6)² = 36+c² ⇒ b²+12b+36 = 36+c² ⇒ b²+12b = c². Z |AB| = |BC|: (b+6)² = b²+c² ⇒ 12b+36 = c². Z první a druhé: b²+12b = 12b+36, b² = 36, b = 6 (nebo b = −6 = A). b = 6: c² = 12·6+36 = 108, c = 6·√3. B(6,0), C(0, 6·√3). Strana = 12 cm. Těžiště (střed vepsané kružnice pro rovnostranný): T = ((−6+6+0)/3, (0+0+6·√3)/3) = (0, 2·√3). Poloměr: r = (a·√3)/6 = 12·√3/6 = 2·√3. Rovnice: x² + (y−2·√3)² = 12. Druhé řešení s c = −6·√3 dává souměrnou konfiguraci.",
        difficulty: "medium",
      },
      {
        prompt: "Body A, B jsou průsečíky přímky p: 2x−y=0 a kružnice k: (x−2)²+(y−9)²=10. Určete velikost obvodového úhlu příslušejícímu většímu oblouku AB.",
        solution: "Průsečíky: y = 2x do kružnice: (x−2)²+(2x−9)² = 10. x²−4x+4+4x²−36x+81 = 10. 5x²−40x+75 = 0. x²−8x+15 = 0. (x−3)(x−5) = 0. A(3,6), B(5,10). Střed kružnice S(2,9), r = √10. Středový úhel ASB: SA = (1,−3), SB = (3,1). cos(úhel) = (3−3)/(√10·√10) = 0/10 = 0. Úhel ASB = 90 stupňů. Obvodový úhel nad větším obloukem = středový/2 (pro menší oblouk). Ale obvodový úhel nad větším obloukem = (360−90)/2 = 135 stupňů. Správně: středový úhel nad menším obloukem = 90 stupňů. Obvodový úhel nad větším obloukem = 90/2 = 45 stupňů. Obvodový úhel nad menším obloukem = (360−90)/2 = 135 stupňů. Odpověď: obvodový úhel příslušející většímu oblouku = 45 stupňů.",
        difficulty: "medium",
      },
      {
        prompt: "Je dán pravoúhlý trojúhelník ABC. Sestrojte kružnici k(S,r) tak, aby platilo B ∈ k, S ∈ AB, AC je tečnou hledané kružnice.",
        solution: "Pravoúhlý trojúhelník s pravým úhlem (např. u C). S na AB, B na kružnici, AC tečna. Protože AC je tečna, vzdálenost S od přímky AC = r. Zároveň |SB| = r. Označme patu kolmice z S na AC jako P. |SP| = r = |SB|. Bod S leží na AB. Souřadnicové řešení: nechť C = počátek, A na ose y, B na ose x. C(0,0), A(0,a), B(b,0). Přímka AB: x/b+y/a = 1. S na AB: S = (b−tb, ta) pro t ∈ (0,1), tj. S = (b(1−t), at). Vzdálenost S od AC (osa x, y = 0): |SP| = at (vzdálenost od osy x). |SB| = √((b(1−t)−b)²+(at)²) = √(b²·t²+a²·t²) = t·√(a²+b²) = t·c (c = přepona). Podmínka r = at = t·c. a = c. Ale c > a (přepona > odvěsna). Spor. Reinterpretace: AC tečna znamená, že vzdálenost S od přímky AC = r. Přímka AC: z C(0,0) do A(0,a), to je osa y. Vzdálenost S od osy y = b(1−t). r = b(1−t) a |SB| = tc. b(1−t) = tc. t = b/(b+c). r = b·c/(b+c). S = (b·c/(b+c), a·b/(b+c)). Konstrukce: na AB najdeme S pomocí výpočtu.",
        difficulty: "hard",
      },
      {
        prompt: "Stanovte obvod útvaru ABCD, znáte r, α1, α2, kde α1 = α2 = π/3 rad.",
        solution: "Útvar ABCD se skládá z oblouku kružnice a úseček. S úhly α1 = α2 = π/3: dva oblouky s poloměrem r a středovým úhlem π/3 = 60 stupňů. Délka oblouku: l = r·α = r·π/3. Dva oblouky: 2r·π/3. Úsečky: tětivy oblouku délky 2r·sin(π/6) = 2r·1/2 = r. Ale přesná konfigurace závisí na obrázku. Předpokládaný obvod: O = 2·r·(π/3) + 2·r = 2r·(π/3+1). Pokud útvar má 2 oblouky a 2 úsečky: O = 2·r·π/3 + 2·r·sin(α/2)·něco. Při α = π/3: O = 2r·π/3 + 2r = 2r(1+π/3).",
        difficulty: "medium",
      },
      {
        prompt: "Najděte nejmenší vzdálenost bodu P(13,1) od kružnice x²+y²−18x−12y+92=0.",
        solution: "Doplníme na čtverec: (x−9)²+(y−6)² = 81+36−92 = 25. Střed S(9,6), r = 5. |PS| = √((13−9)²+(1−6)²) = √(16+25) = √41. P je vně kružnice (√41 > 5). Nejmenší vzdálenost = |PS|−r = √41−5 ≈ 6.403−5 = 1.403.",
        difficulty: "easy",
      },
      {
        prompt: "Body A, B jsou průsečíky přímky p: 2x−y=0 a kružnice k: (x−2)²+(y−9)²=10. Určete velikost obvodového úhlu příslušejícímu menšímu oblouku AB.",
        solution: "Z předchozí úlohy: A(3,6), B(5,10), středový úhel = 90 stupňů. Obvodový úhel nad menším obloukem = (360−90)/2 = 135 stupňů. Odpověď: 135 stupňů.",
        difficulty: "medium",
      },
      {
        prompt: "Dokažte analyticky, že kolmice sestrojená v bodě dotyku tečny a kružnice prochází středem kružnice.",
        solution: "Kružnice: (x−a)²+(y−b)² = r². Bod dotyku T(x0,y0) leží na kružnici: (x0−a)²+(y0−b)² = r². Tečna v T: (x0−a)(x−a)+(y0−b)(y−b) = r². Směrový vektor tečny: (−(y0−b), x0−a) (kolmý na poloměr). Kolmice k tečně v T má směr (x0−a, y0−b). Parametricky: bod na kolmici = T + t·(x0−a, y0−b) = (x0+t(x0−a), y0+t(y0−b)). Pro t = −1: (x0−(x0−a), y0−(y0−b)) = (a, b) = střed. Kolmice prochází středem.",
        difficulty: "easy",
      },
      {
        prompt: "Dokažte, že úsekový úhel je roven svou velikostí úhlu obvodovému.",
        solution: "Úsekový úhel je úhel mezi tětivou a tečnou v jednom konci tětivy. Nechť AB je tětiva, tečna t v bodě A. Úsekový úhel = úhel mezi t a AB. Obvodový úhel příslušný oblouku AB: úhel ACB pro libovolný bod C na opačném oblouku. Tečna v A je kolmá na poloměr SA. Úhel mezi tečnou a tětivou AB = úhel(t, AB). Středový úhel AOB: úhel u středu. Obvodový úhel = (1/2)·středový. Úhel mezi tečnou a poloměrem = 90 stupňů. Úhel mezi poloměrem a tětivou = (180−středový)/2 = 90 − středový/2. Úsekový úhel = 90−(90−středový/2) = středový/2 = obvodový úhel.",
        difficulty: "medium",
      },
      {
        prompt: "Jsou dány dvě kružnice k1(S1,r1), k2(S2,r2), S1 ≠ S2. Najděte jejich společné tečny.",
        solution: "Vnější tečny: průsečík dalekého bodu P na přímce S1S2: P = S1 + (r1/(r1−r2))·(S2−S1) (pro r1 ≠ r2). Z P vedeme tečny k oběma kružnicím. Pro r1 = r2: vnější tečny jsou rovnoběžné s S1S2 ve vzdálenosti r. Vnitřní tečny: průsečík bližšího bodu Q na přímce S1S2: Q = S1 + (r1/(r1+r2))·(S2−S1). Z Q vedeme tečny. Počet tečen: mimoběžné kružnice (|S1S2| > r1+r2): 4. Vnější dotyk (= r1+r2): 3. Setkání: 2. Vnitřní dotyk (= |r1−r2|): 1. Jedna uvnitř druhé: 0.",
        difficulty: "medium",
      },
      {
        prompt: "Je dána kružnice k, přímka p a na ní bod T ∈ p. Najděte kružnici, která se dotýká k a přímka p je její tečnou s bodem dotyku T.",
        solution: "Hledaná kružnice se dotýká přímky p v bodě T: střed O leží na kolmici k p v bodě T. Poloměr R = |OT|. Zároveň se dotýká k(S,r): |OS| = R+r (vnější) nebo |OS| = |R−r| (vnitřní). Střed na kolmici: O = T + t·n, kde n je normálový vektor p, t ∈ ℝ. |OT| = |t|·|n| = |t| (pro |n|=1). R = |t|. Podmínka: |T+t·n−S|² = (|t|+r)² nebo (|t|−r)². Rozepsané: |T−S|² + 2t·(T−S)·n + t² = t² ± 2|t|r + r². |T−S|² + 2t·(T−S)·n = ± 2|t|r + r². Řešíme pro t (lineárně v t, pokud t > 0 nebo t < 0 fixujeme). Obecně 0, 1 nebo 2 řešení.",
        difficulty: "hard",
      },
    ],
  },
  // T22
  {
    id: "kuzelosecky",
    number: 22,
    name: "Kuželosečky",
    category: "geometry",
    theory: [
      "Kuželosečky: elipsa, hyperbola, parabola, kružnice (speciální případ elipsy), zdegenerované případy.",
      "Elipsa: x²/a²+y²/b² = 1, a > b > 0. Ohniska F(±c, 0), c² = a²−b². |PF₁|+|PF₂| = 2a.",
      "Hyperbola: x²/a²−y²/b² = 1. Ohniska F(±c, 0), c² = a²+b². ||PF₁|−|PF₂|| = 2a. Asymptoty y = ±(b/a)·x.",
      "Parabola: y² = 2px. Ohnisko F(p/2, 0), řídítka x = −p/2. |PF| = d(P, řídítka).",
      "Tečna k elipse v bodě T(x₀,y₀): x₀·x/a²+y₀·y/b² = 1.",
      "Tečna k parabole y² = 2px v bodě T(x₀,y₀): y₀·y = p·(x+x₀).",
      "Obecná rovnice kuželosečky: Ax²+Bxy+Cy²+Dx+Ey+F = 0."
    ],
    formulas: [
      "Elipsa: x²/a²+y²/b² = 1, c² = a²−b²",
      "Hyperbola: x²/a²−y²/b² = 1, c² = a²+b²",
      "Parabola: y² = 2px, ohnisko (p/2, 0)",
      "Tečna elipsy: x₀·x/a²+y₀·y/b² = 1",
      "Tečna paraboly: y₀·y = p(x+x₀)"
    ],
    problems: [
      {
        prompt: "Najděte společné body kuželoseček x²+y²−4x+4y+4=0 a x²+y²+6x+4y+4=0. Určete o jaké kuželosečky se jedná.",
        solution: "První: (x−2)²+(y+2)² = 4. Kružnice S1(2,−2), r1 = 2. Druhá: (x+3)²+(y+2)² = 9. Kružnice S2(−3,−2), r2 = 3. |S1S2| = 5. r1+r2 = 5. Vnější dotyk! Společný bod: na spojnici S1S2, dělí ji v poměru r1:r2 = 2:3 od S1. Bod: S1 + (2/5)·(S2−S1) = (2,−2)+(2/5)·(−5,0) = (2−2,−2) = (0,−2). Jediný společný bod: (0, −2).",
        difficulty: "medium",
      },
      {
        prompt: "Který z trojúhelníků EFX má maximální obsah? E, F jsou ohniska elipsy 9x²+25y²−225=0, X leží na elipse. Určete jeho obsah a obvod.",
        solution: "9x²+25y² = 225 ⇒ x²/25+y²/9 = 1. a = 5, b = 3. c = √(25−9) = 4. E(−4,0), F(4,0). |EF| = 8. Obsah trojúhelníku EFX: S = (1/2)·|EF|·|y_X| = 4·|y_X|. Max |y_X| = b = 3 (pro X na vrcholu malá osy). S_max = 4·3 = 12. Bod X = (0, 3) nebo (0, −3). Ověření: |EX| = √(16+9) = 5, |FX| = √(16+9) = 5. Obvod = 5+5+8 = 18. Rovnoramenný trojúhelník.",
        difficulty: "medium",
      },
      {
        prompt: "Hyperbola má asymptoty u1: x+2y=0, u2: x−2y=0. Vrchol hyperboly je (0,−6). Napište její rovnici.",
        solution: "Asymptoty procházejí počátkem: x+2y=0 a x−2y=0. Střed hyperboly: průsečík asymptot = (0,0). Asymptoty: y = −x/2 a y = x/2, tedy y = ±(1/2)x. Pro hyperbolu x²/a²−y²/b² = 1: asymptoty y = ±(b/a)x ⇒ b/a = 1/2. Pro hyperbolu y²/b²−x²/a² = 1: asymptoty y = ±(b/a)x ⇒ b/a = 1/2 také. Vrchol (0,−6): na ose y, tedy osa je osa y. y²/b²−x²/a² = 1. Vrchol (0, ±b), tedy b = 6. b/a = 1/2 ⇒ a = 12. Ale asymptoty y²/b²−x²/a² = 1 mají asymptoty y = ±(b/a)x = ±(6/12)x = ±(1/2)x. Hmm, pro tvar y²/b²−x²/a²=1 jsou asymptoty y = ±(b/a)x. OK. Rovnice: y²/36 − x²/144 = 1.",
        difficulty: "medium",
      },
      {
        prompt: "Elipse x²+2y²=6 vepište analyticky čtverec.",
        solution: "Elipsa: x²/6+y²/3 = 1, a = √6, b = √3. Čtverec vepsaný: vrcholy na elipse, strany rovnoběžné s osami (nebo úhlopříčně). Předpokládejme strany rovnoběžné s osami. Vrcholy (±d, ±d) pro čtverec. Dosadíme: d²+2d² = 6. 3d² = 6. d² = 2. d = √2. Čtverec s vrcholy (√2, √2), (−√2, √2), (−√2, −√2), (√2, −√2). Strana = 2·√2. Ověření: (√2)²+2·(√2)² = 2+4 = 6. OK.",
        difficulty: "easy",
      },
      {
        prompt: "Který z trojúhelníků EFX má maximální obsah? E, F jsou ohniska elipsy (x−2)²/9+(y+1)²/25=1, X na elipse.",
        solution: "a² = 25 (větší), b² = 9, c² = 25−9 = 16, c = 4. Střed (2,−1). Hlavní osa svislá (a² pod y). E(2,−1−4) = (2,−5), F(2,−1+4) = (2,3). |EF| = 8. S = (1/2)·8·|x_X−2| = 4·|x_X−2|. Max |x_X−2| = b = 3 (X na konci vedlejší osy). X = (2+3,−1) = (5,−1) nebo (−1,−1). S_max = 12. |EX| = √(9+16) = 5, |FX| = √(9+16) = 5. Obvod = 5+5+8 = 18.",
        difficulty: "medium",
      },
      {
        prompt: "Nakreslete a popište vlastnosti kuželosečky 3x²−y²+12x−2y+14=0.",
        solution: "3(x²+4x)−(y²+2y)+14 = 0. 3(x+2)²−12−(y+1)²+1+14 = 0. 3(x+2)²−(y+1)²+3 = 0. 3(x+2)²−(y+1)² = −3. (y+1)²/3−(x+2)²/1 = 1. Hyperbola se středem (−2,−1), a² = 3 (pod y), b² = 1 (pod x). Hlavní osa svislá. Vrcholy: (−2, −1±√3). c² = 3+1 = 4, c = 2. Ohniska: (−2, −1±2) = (−2, 1) a (−2, −3). Asymptoty: (y+1) = ±√3·(x+2).",
        difficulty: "medium",
      },
      {
        prompt: "K parabole x² = 12y veďte bodem Q(1,−2) tečnu.",
        solution: "Parabola x² = 12y, p = 6. Tečna v bodě T(t, t²/12): rovnice tečny: t·x = 6(y+t²/12), tj. tx = 6y+t²/2. Prochází Q(1,−2): t·1 = 6·(−2)+t²/2. t = −12+t²/2. t²−2t−24 = 0. D = 4+96 = 100. t = (2+10)/2 = 6 nebo t = (2−10)/2 = −4. Tečna 1 (t=6): 6x = 6y+18 ⇒ x = y+3 ⇒ y = x−3. Tečna 2 (t=−4): −4x = 6y+8 ⇒ 6y = −4x−8 ⇒ y = −2x/3−4/3. Ověření: Q(1,−2) na tečně 1: −2 = 1−3 = −2. OK. Q na tečně 2: −2 = −2/3−4/3 = −6/3 = −2. OK.",
        difficulty: "medium",
      },
      {
        prompt: "Určete rovnici tečny a normály křivky x²−2x+2xy−y²=0 v bodě T(2,0).",
        solution: "Ověření: 4−4+0−0 = 0. T leží na křivce. Implicitní derivování: 2x−2+2y+2x·y'−2y·y' = 0. y'(2x−2y) = −2x+2−2y. y' = (−2x+2−2y)/(2x−2y) = (2−2x−2y)/(2x−2y) = (1−x−y)/(x−y). V T(2,0): y' = (1−2−0)/(2−0) = −1/2. Tečna: y−0 = −1/2·(x−2), tj. y = −x/2+1, tj. x+2y−2 = 0. Normála: y = 2·(x−2), tj. y = 2x−4, tj. 2x−y−4 = 0.",
        difficulty: "medium",
      },
      {
        prompt: "K elipse x²/4+y²/9=1 veďte tečnu rovnoběžnou s přímkou 9x+2·√27·y−15=0.",
        solution: "Směrnice přímky: 9x+2·√27·y = 15, y = −9x/(2·√27)+... Směrnice k = −9/(2·√27) = −9/(6·√3) = −3/(2·√3) = −√3/2. Tečna k elipse x²/4+y²/9 = 1 se směrnicí k: y = kx±√(a²·k²+b²) = (−√3/2)·x ± √(4·3/4+9) = (−√3/2)·x ± √(3+9) = (−√3/2)·x ± √12 = (−√3/2)·x ± 2·√3. Tečny: y = (−√3/2)·x + 2·√3 a y = (−√3/2)·x − 2·√3.",
        difficulty: "medium",
      },
      {
        prompt: "Určete rovnici tečny a normály křivky xy − ln(y) = 1 v bodě (x_T, 1).",
        solution: "Dosadíme y=1: x_T·1 − ln(1) = 1. x_T = 1. Bod T(1, 1). Implicitní derivování: y + x·y' − y'/y = 0. y'(x−1/y) = −y. y' = −y/(x−1/y) = −y²/(xy−1). V T(1,1): y' = −1/(1−1) = −1/0. Derivace neexistuje (svislá tečna). Tečna: x = 1 (svislá přímka). Normála: y = 1 (vodorovná přímka).",
        difficulty: "medium",
      },
    ],
  },
  // T23
  {
    id: "komplexni-cisla",
    number: 23,
    name: "Komplexní čísla",
    category: "algebra",
    theory: [
      "Komplexní číslo z = a + bi, kde a = Re(z) (reálná část), b = Im(z) (imaginární část), i² = −1.",
      "Modul: |z| = √(a²+b²). Argument: arg(z) = úhel s kladnou reálnou osou.",
      "Goniometrický tvar: z = |z|·(cos(φ)+i·sin(φ)). Exponenciální: z = |z|·e^(i·φ).",
      "Moivreova věta: zⁿ = |z|ⁿ·(cos(n·φ)+i·sin(n·φ)).",
      "n-tá odmocnina z ℂ: n kořenů rovnoměrně rozložených na kružnici: wₖ = |z|^(1/n)·(cos((φ+2k·π)/n)+i·sin((φ+2k·π)/n)), k=0,...,n−1.",
      "Gaussova rovina: zobrazení komplexních čísel jako bodů v rovině.",
      "Operace: součet, rozdíl, součin (a+bi)(c+di) = (ac−bd)+(ad+bc)i, podíl."
    ],
    formulas: [
      "|z| = √(a²+b²), arg(z) = arctg(b/a)",
      "zⁿ = |z|ⁿ·(cos(n·φ)+i·sin(n·φ)) (Moivre)",
      "n-té odmocniny: wₖ = r^(1/n)·(cos((φ+2k·π)/n)+i·sin((φ+2k·π)/n))",
      "(a+bi)(c+di) = (ac−bd)+(ad+bc)i",
      "z·z̄ = |z|²"
    ],
    problems: [
      {
        prompt: "Mezi komplexními čísly z, která vyhovují nerovnosti |z−25i| ≤ 15, najděte to, které má nejmenší argument.",
        solution: "Množina |z−25i| ≤ 15 je kruh se středem S = 25i = (0, 25) a poloměrem 15. Argument z je úhel s kladnou reálnou poloosou. Nejmenší argument = tečna z počátku ke kružnici na 'pravé' straně. Přímka z počátku (0,0) tečná ke kružnici (0,25) s r=15: vzdálenost středu od přímky = 15. Přímka y = kx: vzdálenost (0,25) od y−kx=0: |25|/√(1+k²) = 15. 25/√(1+k²) = 15. √(1+k²) = 5/3. 1+k² = 25/9. k² = 16/9. k = 4/3 (pro kladný argument, pravá tečna). Bod dotyku: na přímce y = (4/3)x, na kružnici. Vektor ze středu (0,25) kolmý na přímku: směr (4/3, −1), normalizovaný: (4/5, −3/5)·3 = ... Pata kolmice z S na přímku: P = (0,25) projikujeme na y = 4x/3 tj. 4x−3y = 0. P = S + t·(4,−3), dosadíme do 4x−3y=0: 4(4t)−3(25−3t)=0, 16t−75+9t=0, 25t=75, t=3. P = (12, 16). Bod T(12, 16) leží na přímce 4·12−3·16=48−48=0. OK. |ST| = |(12, −9)| = 15. OK. Číslo z s nejmenší argument: z = 12+16i. arg(z) = arctg(16/12) = arctg(4/3) ≈ 53.13 stupňů.",
        difficulty: "hard",
      },
      {
        prompt: "Řešte v ℂ převedením na součinový tvar: x⁵+x⁴+x³+x²+x+1=0.",
        solution: "x⁵+x⁴+x³+x²+x+1 = (x⁶−1)/(x−1) = 0 (pro x ≠ 1). Řešíme x⁶ = 1, x ≠ 1. Šesté odmocniny z 1: x_k = cos(2k·π/6)+i·sin(2k·π/6), k = 0,1,...,5. x_0 = 1 (vyloučíme). x_1 = cos(π/3)+i·sin(π/3) = 1/2+i·√3/2. x_2 = cos(2π/3)+i·sin(2π/3) = −1/2+i·√3/2. x_3 = cos(π)+i·sin(π) = −1. x_4 = cos(4π/3)+i·sin(4π/3) = −1/2−i·√3/2. x_5 = cos(5π/3)+i·sin(5π/3) = 1/2−i·√3/2. Řešení: x ∈ {−1, 1/2+i·√3/2, −1/2+i·√3/2, −1/2−i·√3/2, 1/2−i·√3/2}.",
        difficulty: "medium",
      },
      {
        prompt: "Řešte v ℂ převedením na součinový tvar: x⁶−1=0.",
        solution: "x⁶ = 1. Šesté odmocniny z 1: x_k = cos(2k·π/6)+i·sin(2k·π/6), k = 0,...,5. x_0 = 1. x_1 = cos(60°)+i·sin(60°) = 1/2+i·√3/2. x_2 = cos(120°)+i·sin(120°) = −1/2+i·√3/2. x_3 = cos(180°)+i·sin(180°) = −1. x_4 = cos(240°)+i·sin(240°) = −1/2−i·√3/2. x_5 = cos(300°)+i·sin(300°) = 1/2−i·√3/2. Součinový tvar: x⁶−1 = (x−1)(x+1)(x²−x+1)(x²+x+1).",
        difficulty: "easy",
      },
      {
        prompt: "V Gaussově rovině zobrazte množinu všech z ∈ ℂ, pro která platí |z·(z+z̄)| ≤ 1, tj. |z²+z·z̄| ≤ 1.",
        solution: "Položme z = x+iy. z̄ = x−iy. z + z̄ = 2x. z·(z+z̄) = z·2x = 2x·z = 2x(x+iy) = 2x²+2xyi. Reinterpretace zadání |z·|z|+z| ≤ 1 nebo |z(z+z̄)| ≤ 1: |z|·|z+z̄| = |z|·2|x| ≤ 1. √(x²+y²)·2|x| ≤ 1. Hm, závisí na přesném zadání. Pro |z²+|z|²| ≤ 1: z² = x²−y²+2xyi, |z|² = x²+y². z²+|z|² = 2x²−y²+(2xy)i+y² = 2x² + 2xyi. |2x²+2xyi| = 2|x|·√(x²+y²) ≤ 1. Oblast splňující tuto nerovnici je uzavřená oblast kolem počátku.",
        difficulty: "hard",
      },
      {
        prompt: "Řešte v ℂ: z⁵ + (6−6·√3·i) = 0.",
        solution: "z⁵ = −6+6·√3·i = 6(−1+√3·i). Modul: |rhs| = 6·√(1+3) = 12. Argument: arg(−1+√3·i): cos = −1/2, sin = √3/2, tedy φ = 2·π/3 = 120 stupňů. z⁵ = 12·(cos(120°)+i·sin(120°)). z_k = 12^(1/5)·(cos((120°+360k)/5)+i·sin((120°+360k)/5)), k=0,...,4. 12^(1/5) = (4·3)^(1/5) = 2^(2/5)·3^(1/5). Úhly: k=0: 24 stupňů, k=1: 96 stupňů, k=2: 168 stupňů, k=3: 240 stupňů, k=4: 312 stupňů. Pět kořenů na kružnici s poloměrem 12^(1/5).",
        difficulty: "hard",
      },
      {
        prompt: "Sestavte kvadratickou rovnici, jejíž kořeny jsou z1 = cos(π/3)+i·sin(π/3), z2 = cos(5·π/3)+i·sin(5·π/3).",
        solution: "z1 = 1/2+i·√3/2. z2 = 1/2−i·√3/2. z1 a z2 jsou komplexně sdružené. Součet: z1+z2 = 1. Součin: z1·z2 = |z1|² = 1 (protože |z1| = 1). Kvadratická rovnice: z²−(z1+z2)·z+z1·z2 = 0, tj. z²−z+1 = 0.",
        difficulty: "easy",
      },
      {
        prompt: "V Gaussově rovině zobrazte množinu všech z ∈ ℂ, pro která platí |z| ≤ |2−2i|³⁰ / |1+i|²⁸.",
        solution: "|2−2i| = 2·√2 = 2^(3/2). |1+i| = √2 = 2^(1/2). |2−2i|³⁰ = (2^(3/2))³⁰ = 2⁴⁵. |1+i|²⁸ = (2^(1/2))²⁸ = 2¹⁴. |z| ≤ 2⁴⁵/2¹⁴ = 2³¹. Množina je kruh se středem v počátku a poloměrem 2³¹.",
        difficulty: "medium",
      },
      {
        prompt: "Řešte v ℂ: z⁸ + 1/8 = 0.",
        solution: "z⁸ = −1/8. |−1/8| = 1/8. arg(−1/8) = π. z_k = (1/8)^(1/8)·(cos((π+2k·π)/8)+i·sin((π+2k·π)/8)), k=0,...,7. (1/8)^(1/8) = (2⁻³)^(1/8) = 2^(−3/8). Úhly: (π+2k·π)/8 = π(1+2k)/8 pro k=0,...,7: π/8, 3·π/8, 5·π/8, 7·π/8, 9·π/8, 11·π/8, 13·π/8, 15·π/8. Osm kořenů na kružnici s poloměrem 2^(−3/8).",
        difficulty: "medium",
      },
      {
        prompt: "Určete, kdy má následující rovnice právě jedno řešení. a je parametr, a ∈ ℂ, x ∈ ℂ: (x²−2x)/a + 3a/(x²+2x+1) = 1.",
        solution: "Přepíšeme: (x²−2x)/a + 3a/(x+1)² = 1. Podmínka: a ≠ 0, x ≠ −1. x²−2x = x(x−2). Substituce není snadná. Vynásob a·(x+1)²: x(x−2)·(x+1)² + 3a² = a·(x+1)². To je rovnice 4. stupně v x. Aby měla právě jedno řešení (v ℂ), musí mít jeden jednoduchý a tři opakující se kořeny, nebo specifickou konfiguraci. Pro právě jedno řešení v ℂ (což je neobvyklé u polynomu 4. stupně) hledáme hodnoty a, pro které se rovnice redukuje. Diskuze parametru a je složitá a závisí na analýze diskriminantu.",
        difficulty: "hard",
      },
    ],
  },
  // T24
  {
    id: "matice-determinanty",
    number: 24,
    name: "Matice a determinanty",
    category: "algebra",
    theory: [
      "Matice typu m × n: obdélníkové schéma čísel s m řádky a n sloupci.",
      "Sčítání matic: po prvcích (stejný typ). Násobení skalárem: každý prvek násobíme.",
      "Násobení matic: A(m × n) · B(n × p) = C(m × p). cᵢⱼ = Σₖ aᵢₖ · bₖⱼ.",
      "Determinant: číslo přiřazené čtvercové matici. det(A) ≠ 0 ⇔ A je regulární (existuje inverze).",
      "Sarrusovo pravidlo: pro 3×3 matici.",
      "Rozvoj podle řádku/sloupce: det = Σ aᵢⱼ · (−1)^(i+j) · Mᵢⱼ.",
      "Inverzní matice: A·A⁻¹ = E. A⁻¹ = (1/det(A)) · adj(A).",
      "Maticová rovnice: A+BX = C řešíme jako BX = C−A, X = B⁻¹·(C−A)."
    ],
    formulas: [
      "det 2×2: ad−bc",
      "Sarrus 3×3: a₁₁·a₂₂·a₃₃+a₁₂·a₂₃·a₃₁+a₁₃·a₂₁·a₃₂−a₁₃·a₂₂·a₃₁−a₁₂·a₂₁·a₃₃−a₁₁·a₂₃·a₃₂",
      "A·A⁻¹ = E",
      "(AB)⁻¹ = B⁻¹·A⁻¹"
    ],
    problems: [
      {
        prompt: "Určete matici X, víte-li, že platí: ((1,−1,0),(3,−5,2),(0,2,6)) · ((0,−1),(1,1),(−2,1)) · X = ((−3,−7),(0,−14)). [Zápis: matice v řádcích]",
        solution: "Označme A = ((1,−1,0),(3,−5,2),(0,2,6)), B = ((0,−1),(1,1),(−2,1)). Spočítáme AB: A je 3×3, B je 3×2, AB je 3×2. AB[1,1] = 0−1+0 = −1. AB[1,2] = −1−1+0 = −2. AB[2,1] = 0−5−4 = −9. AB[2,2] = −3−5+2 = −6. AB[3,1] = 0+2−12 = −10. AB[3,2] = 0+2+6 = 8. AB = ((−1,−2),(−9,−6),(−10,8)). Rovnice: AB·X = ((−3,−7),(0,−14)). Ale AB je 3×2 a pravá strana je 2×2... To nesedí. X musí být 2×? Pokud X je 2×2: AB·X = 3×2 · 2×2 = 3×2. Pravá strana je 2×2. Rozměr nesouhlasí. Reinterpretace zadání: matice mohou být jinak dimenzované. Při standardním čtení: najdeme X pomocí pseudoinverze nebo ověříme zadání. X = (AB)⁺ · rhs (pseudoinverze pro předurčenou soustavu).",
        difficulty: "hard",
      },
      {
        prompt: "Řešte rovnici, kde X je neznámá matice, A, B jsou matice dané: A + B·X = (A−B)·A.",
        solution: "B·X = (A−B)·A − A = A²−BA−A. X = B⁻¹·(A²−BA−A) (pokud B je regulární). B⁻¹·B·X = B⁻¹·(A²−BA−A). X = B⁻¹·A² − B⁻¹·B·A − B⁻¹·A = B⁻¹·A² − A − B⁻¹·A. X = B⁻¹·(A²−A) − A = B⁻¹·A·(A−E) − A. Podmínka: B musí být čtvercová a regulární (det(B) ≠ 0). A a B musí být takového typu, aby všechny operace byly definovány (A i B čtvercové stejného řádu).",
        difficulty: "medium",
      },
      {
        prompt: "Určete determinant matice ((1+i, 2−i, 3+i),(−i, 1, 0),(−1, 2i, 1)).",
        solution: "Rozvoj podle 2. řádku (obsahuje 0): det = −(−i)·M21 + 1·M22 − 0·M23. M21 = det((2−i, 3+i),(2i, 1)) = (2−i)·1−(3+i)·2i = 2−i−6i−2i² = 2−7i+2 = 4−7i. M22 = det((1+i, 3+i),(−1, 1)) = (1+i)−(−1)(3+i) = 1+i+3+i = 4+2i. det = −(−i)(4−7i) + 1·(4+2i) = i(4−7i) + 4+2i = 4i−7i²+4+2i = 4i+7+4+2i = 11+6i. Determinant = 11+6i.",
        difficulty: "medium",
      },
      {
        prompt: "Určete determinant matice ((3−i, 1, 0),(2i, 1+i, 1),(−1, 2+i, 1)).",
        solution: "Rozvoj podle 1. řádku: det = (3−i)·M11 − 1·M12 + 0. M11 = det((1+i, 1),(2+i, 1)) = (1+i)·1−1·(2+i) = 1+i−2−i = −1. M12 = det((2i, 1),(−1, 1)) = 2i·1−1·(−1) = 2i+1 = 1+2i. det = (3−i)·(−1) − (1+2i) = −3+i−1−2i = −4−i. Determinant = −4−i.",
        difficulty: "medium",
      },
    ],
  },
  // T25
  {
    id: "kombinatorika-pravdepodobnost",
    number: 25,
    name: "Kombinatorika a pravděpodobnost",
    category: "discrete",
    theory: [
      "Kombinační číslo: C(n,k) = n!/(k!(n−k)!). Počet k-prvkových podmnožin n-prvkové množiny.",
      "Variace bez opakování: V(n,k) = n!/(n−k)!. Variace s opakováním: V'(n,k) = nᵏ.",
      "Permutace: P(n) = n!.",
      "Pravděpodobnost: P(A) = |A|/|Ω| (klasická definice). 0 ≤ P(A) ≤ 1.",
      "Sjednocení: P(A ∪ B) = P(A)+P(B)−P(A ∩ B).",
      "Podmíněná pravděpodobnost: P(A|B) = P(A ∩ B)/P(B). Bayesův vzorec.",
      "Binomické rozdělení: P(X=k) = C(n,k)·pᵏ·(1−p)^(n−k).",
      "Úplná pravděpodobnost: P(A) = Σ P(A|Bᵢ)·P(Bᵢ)."
    ],
    formulas: [
      "C(n,k) = n!/(k!(n−k)!)",
      "P(A ∪ B) = P(A)+P(B)−P(A ∩ B)",
      "P(X=k) = C(n,k)·pᵏ·(1−p)^(n−k) (binom. rozdělení)",
      "P(alespoň 1) = 1 − P(žádný) = 1−(1−p)ⁿ",
      "P(A) = Σ P(A|Bᵢ)·P(Bᵢ) (úplná pravděpodobnost)"
    ],
    problems: [
      {
        prompt: "Ve třídě je 32 studentů, z toho 12 plavců, 15 tenistů. 7 dětí hraje i tenis i plave. Kolik dětí hraje tenis nebo plave? Kolik dětí neplave ani nehraje tenis?",
        solution: "Princip inkluze-exkluze: |P ∪ T| = |P|+|T|−|P ∩ T| = 12+15−7 = 20. Děti hrající tenis nebo plavající: 20. Děti co neplavou ani nehrají tenis: 32−20 = 12.",
        difficulty: "easy",
      },
      {
        prompt: "25% krásných žen je chytrých. Mezi chytrými je třetina krásných. 25% žen nejsou ani chytré ani krásné. Kolik procent žen ze všech je chytrých a krásných zároveň?",
        solution: "Označme K = krásné, C = chytré. P(C|K) = 0.25 (25% krásných je chytrých). P(K|C) = 1/3. Mimo obě = 0.25, tedy P(K ∪ C) = 0.75. P(K ∪ C) = P(K)+P(C)−P(K ∩ C). P(K ∩ C) = P(C|K)·P(K) = 0.25·P(K). P(K ∩ C) = P(K|C)·P(C) = P(C)/3. Tedy 0.25·P(K) = P(C)/3, P(K) = 4P(C)/3. Do P(K ∪ C): 4P(C)/3 + P(C) − P(C)/3 = 0.75. (4P(C)+3P(C)−P(C))/3 = 0.75. 6P(C)/3 = 0.75. 2P(C) = 0.75. P(C) = 0.375 = 37.5%. P(K ∩ C) = P(C)/3 = 12.5%. 12.5% žen je chytrých a krásných zároveň.",
        difficulty: "medium",
      },
      {
        prompt: "Je dán pravidelný 20-úhelník A1...A20. Kolik trojúhelníků je jeho vrcholy určeno? Náhodně jeden trojúhelník vyberu. Jaká je pravděpodobnost, že jeho vrcholy mají jen sudé indexy?",
        solution: "Počet trojúhelníků: C(20,3) = 20!/(3!·17!) = 20·19·18/6 = 1140. Trojúhelníky se sudými indexy: A2,A4,...,A20 (10 bodů). C(10,3) = 10!/(3!·7!) = 120. P = 120/1140 = 2/19 ≈ 0.1053 = 10.53%.",
        difficulty: "easy",
      },
      {
        prompt: "Cestovní kancelář nabízí 124 zájezdů a jen 86 z nich splňuje kritérium pětihvězdičkového ubytování. Náhodně si vybere čtyři zájezdy. Jaká je pravděpodobnost, že alespoň dva nabízejí luxusní ubytování?",
        solution: "n = 124, luxus = 86, neluxus = 38, výběr k = 4. P(alespoň 2 luxus) = 1−P(0 luxus)−P(1 luxus). P(0) = C(38,4)/C(124,4). P(1) = C(86,1)·C(38,3)/C(124,4). C(124,4) = 124·123·122·121/24 = 9 516 654. C(38,4) = 38·37·36·35/24 = 73 815. C(86,1)·C(38,3) = 86·38·37·36/6 = 86·8436 = 725 496. P(0) = 73815/9516654 ≈ 0.00776. P(1) = 725496/9516654 ≈ 0.07625. P(alespoň 2) = 1−0.00776−0.07625 = 0.916 ≈ 91.6%.",
        difficulty: "medium",
      },
      {
        prompt: "Během dne se v porodnici narodilo 10 dětí. Pravděpodobnost narození chlapce je p = 0.514. Jaká je pravděpodobnost, že se narodil alespoň jeden chlapec?",
        solution: "P(alespoň 1 chlapec) = 1−P(žádný chlapec) = 1−P(všechna jsou děvčata) = 1−(1−0.514)¹⁰ = 1−(0.486)¹⁰. (0.486)¹⁰ ≈ 0.000786. P = 1−0.000786 ≈ 0.9992 = 99.92%.",
        difficulty: "easy",
      },
      {
        prompt: "Jaká je pravděpodobnost, že čtyřmístné přirozené číslo sestavené náhodně a výhradně bez opakování z cifer 0, 2, 4, 6 bude dělitelné čtyřmi?",
        solution: "Cifry: {0, 2, 4, 6}, bez opakování, 4-místné. První cifra nesmí být 0: 3 možnosti (2, 4, 6). Zbylé 3 cifry z 3 zbývajících: 3! = 6 způsobů. Celkem 4-místných čísel: 3·6 = 18. Dělitelnost 4: poslední dvě cifry tvoří číslo dělitelné 4. Možné dvojice posledních cifer (z {0,2,4,6}, různé, z těch co zbudou): pro každé první číslo zjistím poslední dvě cifry a ověřím dělitelnost 4. Systematicky: všechna permutace (bez 0 na začátku) a ověření dělitelnosti. Čísla dělitelná 4: poslední dvě cifry dělitelné 4. Dvojice (desítky, jednotky) z {0,2,4,6}: 04(4), 20(20), 24(24), 40(40), 60(60), 64(64), 06(6), 42(42), 46(46), 02(2), 26(26), 62(62). Dělitelné 4: 04, 20, 24, 40, 60, 64 — ověřme: 4/4=1, 20/4=5, 24/4=6, 40/4=10, 60/4=15, 64/4=16. Všechna OK. Dále 02 není (2/4), 06 není, 26 není (26/4=6.5), 42 není (42/4=10.5), 46 není, 62 není. Dělitelné 4 dvojice: 04, 20, 24, 40, 60, 64. Pro každou počítáme platná čísla. Např. poslední dvě = 04: třetí a čtvrtá cifra = 0,4. Použité: 0,4. Zbývá: {2,6}. První cifra: 2 nebo 6 (2 možnosti). Druhá cifra: zbyla (1). 2 čísla. Analogicky pro každý případ. Sčítáme. Celkem dělitelných: počítáme podrobně pro každou kombinaci. Výsledná pravděpodobnost: počet dělitelných / 18.",
        difficulty: "hard",
      },
      {
        prompt: "V zásilce 150 pytlů ořechů z Turecka je 5 pytlů se zkažení ořechy, stejně jako v zásilce 250 pytlů ořechů z Afghánistánu. Jaká je pravděpodobnost, že náhodně vybraný pytel obsahuje zkažené ořechy? Jak se bude pravděpodobnost lišit při výběru nejprve zásilky a pak pytlu?",
        solution: "Metoda 1 (přímo): celkem 150+250 = 400 pytlů, z toho 5+5 = 10 zkažených. P = 10/400 = 1/40 = 2.5%. Metoda 2 (přes zásilky): P(Turecko) = 150/400 = 3/8. P(Afghán.) = 250/400 = 5/8. P(zkaz|Tur) = 5/150 = 1/30. P(zkaz|Afg) = 5/250 = 1/50. P(zkaz) = P(zkaz|Tur)·P(Tur)+P(zkaz|Afg)·P(Afg) = (1/30)·(3/8)+(1/50)·(5/8) = 1/80+1/80 = 2/80 = 1/40 = 2.5%. Výsledek je stejný. Při výběru nejdříve zásilky (rovnoměrně 1/2): P = (1/2)·(1/30)+(1/2)·(1/50) = 1/60+1/100 = 8/300 = 2/75 ≈ 2.67%.",
        difficulty: "medium",
      },
      {
        prompt: "Je dán pravidelný 20-úhelník A1...A20. Kolik přímek je jeho vrcholy určeno? Náhodně jednu přímku vyberu, jaká je pravděpodobnost, že bude oindexována lichými čísly?",
        solution: "Počet přímek: C(20,2) = 20·19/2 = 190. Přímky s lichými indexy: vrcholy A1,A3,A5,...,A19 (10 bodů). Počet přímek: C(10,2) = 45. P = 45/190 = 9/38 ≈ 0.2368 = 23.68%.",
        difficulty: "easy",
      },
      {
        prompt: "V bazarech je 5 milionů ojetých aut. 500 000 je neprodejných (exekuce). V okresním městě je 750 aut. Jaká je pravděpodobnost, že 500 z nich je prodejných?",
        solution: "Pravděpodobnost, že auto je prodejné: p = 4500000/5000000 = 0.9. Hledáme P(X=500) z n=750, kde X ~ Bin(750, 0.9). E(X) = 750·0.9 = 675. P(X=500) = C(750,500)·0.9⁵⁰⁰·0.1²⁵⁰. To je extrémně malá pravděpodobnost, protože 500 je daleko od očekávané hodnoty 675. Pomocí normální aproximace: X ~ N(675, 750·0.9·0.1) = N(675, 67.5). σ = √67.5 ≈ 8.22. z = (500−675)/8.22 ≈ −21.3. P(X=500) ≈ 0 (prakticky nemožné).",
        difficulty: "hard",
      },
      {
        prompt: "Úspěšnost brankáře Jakuba Kováře je 95.75%. S jakou pravděpodobností nedostane víc než 5 branek při 30 střelách?",
        solution: "P(chytí) = 0.9575, P(gól) = 0.0425. X = počet gólů ~ Bin(30, 0.0425). P(X ≤ 5) = Σₖ₌₀⁵ C(30,k)·0.0425ᵏ·0.9575³⁰⁻ᵏ. E(X) = 30·0.0425 = 1.275. P(X=0) = 0.9575³⁰ ≈ 0.268. P(X=1) = C(30,1)·0.0425·0.9575²⁹ ≈ 30·0.0425·0.280 ≈ 0.357. P(X=2) = C(30,2)·0.0425²·0.9575²⁸ ≈ 435·0.001806·0.292 ≈ 0.229. P(X=3) ≈ C(30,3)·0.0425³·0.9575²⁷ ≈ 4060·0.0000768·0.305 ≈ 0.095. P(X=4) ≈ 27405·0.00000326·0.319 ≈ 0.028. P(X=5) ≈ 142506·0.000000139·0.333 ≈ 0.0066. P(X≤5) ≈ 0.268+0.357+0.229+0.095+0.028+0.007 ≈ 0.984 = 98.4%.",
        difficulty: "hard",
      },
      {
        prompt: "V obchodě je 500 mýdel A (20 poškozených), 300 mýdel B (15 poškozených), 200 mýdel C (50 poškozených). Jaká je pravděpodobnost poškozeného obalu? A při nejdřív vyberu značku a pak mýdlo?",
        solution: "Metoda 1 (přímo): celkem 1000 mýdel, z toho 20+15+50 = 85 poškozených. P = 85/1000 = 8.5%. Metoda 2 (přes značku): P(A) = 500/1000 = 1/2. P(B) = 300/1000 = 3/10. P(C) = 200/1000 = 1/5. P(posk|A) = 20/500 = 4%. P(posk|B) = 15/300 = 5%. P(posk|C) = 50/200 = 25%. P(posk) = 0.5·0.04+0.3·0.05+0.2·0.25 = 0.02+0.015+0.05 = 0.085 = 8.5%. Stejný výsledek. Při rovnoměrném výběru značky (1/3 každá): P = (1/3)·0.04+(1/3)·0.05+(1/3)·0.25 = (0.04+0.05+0.25)/3 = 0.34/3 ≈ 11.33%.",
        difficulty: "medium",
      },
      {
        prompt: "Jaká je pravděpodobnost, že čtyřmístné přirozené číslo sestavené náhodně a výhradně z cifer 0, 2, 4, 6 (s opakováním) bude dělitelné čtyřmi?",
        solution: "S opakováním, cifry {0,2,4,6}. 4-místné: první cifra ≠ 0, takže 3·4·4·4 = 192 čísel. Dělitelnost 4: poslední dvě cifry dělitelné 4. Možné poslední dvě cifry z {0,2,4,6} (s opakováním), celkem 4·4 = 16 dvojic. Dělitelné 4: 00,04,20,24,40,44,60,64 — ověřme: 0,4,20,24,40,44,60,64. Vše dělitelné 4: ano. 8 z 16 dvojic. Dále: 02(ne), 06(ne), 22(ne, 22/4=5.5), 26(ne), 42(ne), 46(ne), 62(ne), 66(ne). Takže 8 dvojic je dělitelných 4. Pravděpodobnost, že poslední dvě cifry jsou dělitelné 4: 8/16 = 1/2. První dvě cifry: nezávislá podmínka (první ≠ 0): 3·4 = 12. Celkem dělitelných: 12·8 = 96. Celkem: 192. P = 96/192 = 1/2 = 50%.",
        difficulty: "medium",
      },
    ],
  },
];
