export type PhysicsExample = {
  prompt: string;
  solution: string;
};

export type PhysicsTopic = {
  id: string;
  number: number;
  name: string;
  category:
    | "mechanics"
    | "thermo"
    | "electricity"
    | "magnetism"
    | "optics"
    | "modern";
  keywords: string[];
  explanation: string;
  formulas: string[];
  examples: PhysicsExample[];
};

export const physicsTopics: PhysicsTopic[] = [
  // ───────────────────────────────────────────────
  // T1 — Atom a jaderna fyzika (modern)
  // ───────────────────────────────────────────────
  {
    id: "1-atom",
    number: 1,
    name: "Atom a jaderná fyzika",
    category: "modern",
    keywords: [
      "stavba atomu, stavba jádra (protony, neutrony)",
      "protonové (Z), neutronové (N) a nukleonové (A) číslo",
      "izotop, nuklid, zápis ᴬZX",
      "vazebná energie jádra, hmotnostní schodek (defekt)",
      "stabilita jader, kapková a slupkový model",
      "radioaktivita: přeměna α, β⁻, β⁺, γ; rozpadové řady",
      "zákon radioaktivní přeměny, poločas přeměny",
      "jaderné reakce: štěpení (řetězová reakce) a syntéza (fúze)",
      "zákony zachování v jaderných reakcích (náboj, nukleonové číslo, energie, hybnost)",
      "využití jaderné energie, dozimetrie",
    ],
    explanation:
      "Atom se skládá z jádra (protony + neutrony) a elektronového obalu. Hmotnost jádra je vždy menší než součet hmotností jednotlivých nukleonů — tento hmotnostní schodek Δm odpovídá vazebné energii E = Δm·c². Stabilita jádra závisí na poměru Z a N; nestabilní jádra se přeměňují radioaktivním rozpadem (α, β, γ). Radioaktivní přeměna se řídí exponenciálním zákonem N = N₀·e⁻ᵏᵗ s poločasem T₁/₂ = ln2/λ. Jaderná energie se uvolňuje štěpením těžkých jader (uran, plutonium) nebo fúzí lehkých jader (vodík → helium).",
    formulas: [
      "E = m·c² (ekvivalence hmotnosti a energie)",
      "Vazebná energie: E_v = (Z·m_p + N·m_n − m_jádra)·c²",
      "N = N₀·e⁻ᵏᵗ (zákon radioaktivní přeměny)",
      "T₁/₂ = ln2/λ ≈ 0,693/λ",
      "Aktivita: A = λ·N = A₀·e⁻ᵏᵗ",
      "α přeměna: ᴬZX → ᴬ⁻⁴(Z−2)Y + ⁴₂He",
      "β⁻ přeměna: ᴬZX → ᴬ(Z+1)Y + e⁻ + ν̄ₑ",
      "β⁺ přeměna: ᴬZX → ᴬ(Z−1)Y + e⁺ + νₑ",
    ],
    examples: [
      {
        prompt:
          "Radioizotop uhlíku ¹⁴C má poločas přeměny T₁/₂ ≈ 5730 let. Kolik procent původního počtu jader zbude po 22 920 letech?",
        solution:
          "Počet poločasů: n = 22 920 / 5 730 = 4. Po 4 poločasech zbývá N = N₀·(1/2)⁴ = N₀/16. To odpovídá 100/16 ≈ 6,25 % původního množství.",
      },
      {
        prompt:
          "Spálením 1 t černého uhlí (výhřevnost H = 25 MJ/kg) se uvolní energie Q. Jaký je odpovídající hmotnostní úbytek Δm?",
        solution:
          "Q = m·H = 1000 · 25·10⁶ = 2,5·10¹⁰ J. Z E = Δm·c² dostaneme Δm = Q/c² = 2,5·10¹⁰ / (9·10¹⁶) ≈ 2,8·10⁻⁷ kg = 0,28 mg.",
      },
      {
        prompt:
          "Vypočtěte vazebnou energii jádra hélia ⁴He. Hmotnosti: m_p = 1,00728 u, m_n = 1,00866 u, m(⁴He) = 4,00260 u, 1 u = 931,5 MeV/c².",
        solution:
          "Hmotnostní schodek: Δm = 2·1,00728 + 2·1,00866 − 4,00260 = 4,03188 − 4,00260 = 0,02928 u. Vazebná energie: E_v = 0,02928 · 931,5 ≈ 27,3 MeV. Na nukleon: E_v/A = 27,3/4 ≈ 6,8 MeV/nukleon.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T2 — Dynamika hmotnych bodu (mechanics)
  // ───────────────────────────────────────────────
  {
    id: "2-dynamika",
    number: 2,
    name: "Dynamika hmotných bodů",
    category: "mechanics",
    keywords: [
      "síla a její účinky (deformační, pohybový)",
      "inerciální a neinerciální vztažná soustava",
      "Galileův princip relativity",
      "setrvačné (zdánlivé) síly",
      "1. Newtonův zákon (zákon setrvačnosti)",
      "2. Newtonův zákon (zákon síly): F⃗ = m·a⃗",
      "3. Newtonův zákon (zákon akce a reakce)",
      "hybnost p⃗ = m·v⃗ a zákon zachování hybnosti",
      "impuls síly F⃗·Δt = Δp⃗",
    ],
    explanation:
      "Dynamika zkoumá příčiny pohybu — síly. 1. Newtonův zákon: těleso v inerciální soustavě setrvává v klidu nebo rovnoměrném přímočarém pohybu, pokud na něj nepůsobí výsledná síla. 2. zákon: F⃗ = m·a⃗ (zrychlení je přímo úměrné působící síle a nepřímo úměrné hmotnosti). 3. zákon: akce a reakce — síly jsou stejně velké, opačně orientované a působí na dvě různá tělesa. Hybnost p⃗ = m·v⃗ se zachovává v izolované soustavě. V neinerciální soustavě zavádíme setrvačné síly (odstředivá, Coriolisova).",
    formulas: [
      "F⃗ = m·a⃗ (2. Newtonův zákon)",
      "p⃗ = m·v⃗ (hybnost)",
      "F⃗·Δt = Δp⃗ (impuls síly)",
      "Σp⃗ = konst. (zákon zachování hybnosti v izolované soustavě)",
      "Setrvačná síla: F⃗_s = −m·a⃗ (v neinerciální soustavě)",
      "Tíhová síla: F_G = m·g",
      "Třecí síla: F_t = f·F_N (f = koeficient tření, F_N = normálová síla)",
      "Dostředivá síla: F_d = m·v²/r = m·ω²·r",
    ],
    examples: [
      {
        prompt:
          "Provazolezec o hmotnosti 70 kg spadl z výšky 6 m do záchranné sítě, která se prohnula o 1 m. Určete průměrnou sílu, kterou na něho síť působila. (g = 9,8 m·s⁻²)",
        solution:
          "Rychlost při dopadu: v₀ = √(2gh) = √(2·9,8·6) = √117,6 ≈ 10,84 m·s⁻¹. Zpomalení v síti (rovnoměrně zpomalený pohyb, dráha x = 1 m): a = v₀²/(2x) = 117,6/2 = 58,8 m·s⁻². Síla sítě musí překonat tíhu i zpomalit: F = m·(a + g) = 70·(58,8 + 9,8) = 70·68,6 ≈ 4 802 N ≈ 4,8 kN.",
      },
      {
        prompt:
          "Dvě koule o hmotnostech m₁ = 2 kg (rychlost v₁ = 3 m·s⁻¹) a m₂ = 3 kg (rychlost v₂ = −1 m·s⁻¹) se čelně srazí a po srážce se pohybují spolu. Určete rychlost po srážce.",
        solution:
          "Zákon zachování hybnosti: m₁v₁ + m₂v₂ = (m₁ + m₂)·v. Dosadíme: 2·3 + 3·(−1) = (2 + 3)·v → 6 − 3 = 5v → v = 3/5 = 0,6 m·s⁻¹. Koule se pohybují směrem původního pohybu první koule rychlostí 0,6 m·s⁻¹.",
      },
      {
        prompt:
          "Na těleso o hmotnosti 5 kg působí konstantní síla F = 20 N po dobu 4 s. Těleso bylo na počátku v klidu. Jaká je konečná rychlost a jakou dráhu těleso urazilo?",
        solution:
          "Zrychlení: a = F/m = 20/5 = 4 m·s⁻². Rychlost po 4 s: v = a·t = 4·4 = 16 m·s⁻¹. Dráha: s = ½·a·t² = ½·4·16 = 32 m.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T3 — Elektricky proud v polovodicich, kapalinach a plynech (electricity)
  // ───────────────────────────────────────────────
  {
    id: "3-proud-pl-k-pl",
    number: 3,
    name: "Elektrický proud v polovodičích, kapalinách a plynech",
    category: "electricity",
    keywords: [
      "vlastní (intrinsický) polovodič, generace párů elektron–díra",
      "příměsový polovodič typu N (donor) a typu P (akceptor)",
      "PN přechod, difúze, hradlová vrstva",
      "dioda a její voltampérová charakteristika (VA)",
      "tranzistor NPN a PNP, zesilovací činitel β",
      "elektrolýza, Faradayovy zákony elektrolýzy",
      "elektrický proud v kapalinách, disociace, ionty",
      "elektrický proud v plynech, ionizace, druhy výbojů (oblouk, jiskra, doutnavý, koróna)",
      "galvanický článek, akumulátor",
    ],
    explanation:
      "V polovodičích (Si, Ge) závisí vodivost na teplotě a příměsích. Vlastní polovodič má stejný počet elektronů a děr; příměsový N-typ (donor — 5. skupina) má přebytek elektronů, P-typ (akceptor — 3. skupina) přebytek děr. PN přechod tvoří základ diody — propouští proud v propustném směru (od P k N), v závěrném téměř nevodí. Tranzistor (NPN/PNP) zesiluje signál řízením proudu kolektoru malým proudem báze. V elektrolytu přenášejí náboj ionty — Faradayovy zákony popisují hmotnost vyloučené látky. V plynech vzniká proud ionizací — rozlišujeme nesamostatný a samostatný výboj.",
    formulas: [
      "I = dQ/dt (definice proudu)",
      "Faradayův zákon: m = A·I·t, kde A = M/(z·F), F = 96 485 C·mol⁻¹",
      "Prahové napětí diody: ~0,7 V (Si), ~0,3 V (Ge)",
      "Tranzistor: I_C = β·I_B (zesilovací činitel)",
      "Odpor polovodiče: R klesá s rostoucí teplotou (záporný teplotní součinitel)",
      "Pasivační napětí výboje v plynu: U_z (zápalné napětí)",
    ],
    examples: [
      {
        prompt:
          "Jak dlouho musí roztokem síranu nikelnatého procházet proud I = 5 A, aby se na katodě vyloučila vrstva niklu o tloušťce h = 0,02 mm na ploše S = 2,1 dm²? (ρ_Ni = 8900 kg·m⁻³, A = 3,04·10⁻⁷ kg·C⁻¹)",
        solution:
          "Hmotnost niklu: m = ρ·V = ρ·S·h = 8900 · 0,021 · 2·10⁻⁵ = 8900 · 4,2·10⁻⁷ ≈ 3,738·10⁻³ kg. Čas: t = m/(A·I) = 3,738·10⁻³ / (3,04·10⁻⁷ · 5) = 3,738·10⁻³ / 1,52·10⁻⁶ ≈ 2 459 s ≈ 41 min.",
      },
      {
        prompt:
          "Při elektrolýze roztoku CuSO₄ procházel proud I = 2 A po dobu t = 30 min. Kolik gramů mědi se vyloučilo na katodě? (M_Cu = 63,5 g·mol⁻¹, z = 2, F = 96 485 C·mol⁻¹)",
        solution:
          "Elektrochemický ekvivalent: A = M/(z·F) = 63,5·10⁻³/(2·96 485) = 3,29·10⁻⁷ kg·C⁻¹. Hmotnost: m = A·I·t = 3,29·10⁻⁷ · 2 · 1800 = 1,184·10⁻³ kg ≈ 1,18 g.",
      },
      {
        prompt:
          "Vysvětlete, proč dioda propouští proud jen jedním směrem a nakreslete typický tvar VA charakteristiky.",
        solution:
          "V propustném směru (+ na P, − na N) se hradlová vrstva zužuje, nositele náboje překonají bariéru a proud roste exponenciálně od prahového napětí (~0,7 V pro Si). V závěrném směru (+ na N, − na P) se hradlová vrstva rozšiřuje, teče jen velmi malý závěrný proud (řádově μA). VA charakteristika má typický tvar: v III. kvadrantu téměř nulový proud, v I. kvadrantu od prahového napětí strmý nárůst.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T4 — Elektricky zdroj a elektricky obvod (electricity)
  // ───────────────────────────────────────────────
  {
    id: "4-obvod",
    number: 4,
    name: "Elektrický zdroj a elektrický obvod",
    category: "electricity",
    keywords: [
      "elektrický proud jako jev a veličina, I = dQ/dt",
      "elektromotorické napětí (EMF) U_e",
      "vnitřní odpor zdroje R_i",
      "Ohmův zákon pro část obvodu: U = R·I",
      "Ohmův zákon pro celý obvod: I = U_e/(R + R_i)",
      "Kirchhoffovy zákony (1. uzlový, 2. smyčkový)",
      "sériové a paralelní řazení rezistorů",
      "měření proudu (ampérmetr) a napětí (voltmetr)",
      "práce a výkon stejnosměrného proudu: P = U·I, W = U·I·t",
    ],
    explanation:
      "Elektrický proud je uspořádaný pohyb nosičů náboje. Zdroj má EMF U_e a vnitřní odpor R_i. Ohmův zákon pro celý obvod: I = U_e/(R + R_i); pro část: U = R·I. Sériově: R = R₁ + R₂ (proud stejný, napětí se sčítají). Paralelně: 1/R = 1/R₁ + 1/R₂ (napětí stejné, proudy se sčítají). Kirchhoffovy zákony: 1. v uzlu ΣI = 0, 2. ve smyčce ΣU = ΣU_e. Výkon P = U·I = R·I² = U²/R.",
    formulas: [
      "U = R·I (Ohmův zákon pro část obvodu)",
      "I = U_e / (R + R_i) (Ohmův zákon pro celý obvod)",
      "Sériově: R = R₁ + R₂ + ... + Rₙ",
      "Paralelně: 1/R = 1/R₁ + 1/R₂ + ... + 1/Rₙ",
      "1. Kirchhoffův zákon: ΣI_k = 0 (v uzlu)",
      "2. Kirchhoffův zákon: ΣU_k = ΣU_e (ve smyčce)",
      "Výkon: P = U·I = R·I² = U²/R",
      "Práce: W = U·I·t = P·t",
      "Svorkové napětí: U = U_e − R_i·I",
    ],
    examples: [
      {
        prompt:
          "Zdroj s EMF U_e a vnitřním odporem R_i. Při dvou sériově zapojených rezistorech R₁ = R₂ = 2 Ω teče proud I₁ = 1,2 A; při paralelním zapojení teče I₂ = 3 A. Určete U_e a R_i.",
        solution:
          "Sériově: R_s = 2 + 2 = 4 Ω → U_e = I₁·(R_s + R_i) = 1,2·(4 + R_i). Paralelně: R_p = 2·2/(2+2) = 1 Ω → U_e = I₂·(R_p + R_i) = 3·(1 + R_i). Rovnice: 1,2·(4 + R_i) = 3·(1 + R_i) → 4,8 + 1,2R_i = 3 + 3R_i → 1,8 = 1,8R_i → R_i = 1 Ω. U_e = 1,2·(4 + 1) = 6 V.",
      },
      {
        prompt:
          "Dva rezistory R₁ = 6 Ω a R₂ = 3 Ω jsou zapojeny paralelně a připojeny ke zdroji U = 12 V. Určete celkový proud, proudy větvemi a výkon.",
        solution:
          "R = R₁·R₂/(R₁ + R₂) = 6·3/(6+3) = 18/9 = 2 Ω. Celkový proud: I = U/R = 12/2 = 6 A. Proud přes R₁: I₁ = U/R₁ = 12/6 = 2 A. Proud přes R₂: I₂ = U/R₂ = 12/3 = 4 A. Kontrola: I₁ + I₂ = 6 A ✓. Celkový výkon: P = U·I = 12·6 = 72 W.",
      },
      {
        prompt:
          "Žárovka má na štítku 60 W / 230 V. Jaký je její odpor za provozu a jaký proud jí protéká?",
        solution:
          "Proud: I = P/U = 60/230 ≈ 0,261 A. Odpor: R = U²/P = 230²/60 = 52 900/60 ≈ 882 Ω. Alternativně R = U/I = 230/0,261 ≈ 882 Ω.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T5 — Elektromagneticke vlneni a zareni (optics)
  // ───────────────────────────────────────────────
  {
    id: "5-em-vlneni",
    number: 5,
    name: "Elektromagnetické vlnění a záření",
    category: "optics",
    keywords: [
      "elektromagnetické vlnění, Maxwell",
      "LC obvod jako zdroj elmag. vlnění",
      "rychlost šíření c = 1/√(μ₀ε₀)",
      "příčné vlnění: E⃗ ⊥ B⃗ ⊥ v⃗",
      "spektrum elmag. záření (rádiové → γ)",
      "viditelné světlo 380–760 nm",
      "Huygensův princip, vlnoplocha, paprsek",
      "Stefan-Boltzmannův zákon, Wienův posunovací zákon",
      "absolutně černé těleso, Planckův vyzařovací zákon",
      "Poyntingův vektor S⃗ = E⃗ × B⃗ / μ₀",
    ],
    explanation:
      "Elektromagnetické vlnění vzniká vzájemnou indukcí elektrického a magnetického pole a šíří se rychlostí c ≈ 3·10⁸ m·s⁻¹ (ve vakuu). Vektory E⃗ a B⃗ jsou navzájem kolmé a kolmé ke směru šíření — jde o příčné vlnění. Spektrum sahá od rádiových vln přes mikrovlny, infračervené, viditelné (380–760 nm), ultrafialové, rentgenové až po gama záření. Absolutně černé těleso vyzařuje podle Stefan-Boltzmannova zákona M = σ·T⁴ a maximum vyzařování se posouvá podle Wienova zákona λ_max·T = b.",
    formulas: [
      "c = λ·f = 1/√(μ₀·ε₀) ≈ 3·10⁸ m·s⁻¹",
      "E = h·f (energie fotonu); h = 6,626·10⁻³⁴ J·s",
      "Stefan-Boltzmannův zákon: M = σ·T⁴; σ = 5,67·10⁻⁸ W·m⁻²·K⁻⁴",
      "Wienův zákon: λ_max·T = b; b = 2,898·10⁻³ m·K",
      "Poyntingův vektor: S⃗ = (1/μ₀)·E⃗ × B⃗",
      "Intenzita záření: I = P/S (W·m⁻²)",
      "Vztah E a B ve vlně: E = c·B",
    ],
    examples: [
      {
        prompt:
          "Povrch Slunce má teplotu T ≈ 5 800 K. Na jaké vlnové délce je maximum vyzařování?",
        solution:
          "Wienův zákon: λ_max = b/T = 2,898·10⁻³ / 5800 ≈ 5,0·10⁻⁷ m = 500 nm. Maximum leží v zelené oblasti viditelného spektra.",
      },
      {
        prompt:
          "Teplota povrchu hvězdy je 12 000 K. Kolikrát větší je intenzita jejího vyzařování oproti Slunci (T_S = 6 000 K)?",
        solution:
          "Stefan-Boltzmannův zákon: M ~ T⁴. Poměr: M_hvězda/M_Slunce = (T_h/T_S)⁴ = (12 000/6 000)⁴ = 2⁴ = 16. Hvězda vyzařuje 16× intenzivněji z jednotky plochy.",
      },
      {
        prompt:
          "Jaká je energie fotonu fialového světla o vlnové délce λ = 400 nm? Vyjádřete v joulech i v elektronvoltech.",
        solution:
          "E = h·f = h·c/λ = 6,626·10⁻³⁴ · 3·10⁸ / (400·10⁻⁹) = 1,988·10⁻²⁵ / 4·10⁻⁷ = 4,97·10⁻¹⁹ J. V eV: E = 4,97·10⁻¹⁹ / 1,6·10⁻¹⁹ ≈ 3,1 eV.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T6 — Elektrostaticke pole (electricity)
  // ───────────────────────────────────────────────
  {
    id: "6-elektrostatika",
    number: 6,
    name: "Elektrostatické pole",
    category: "electricity",
    keywords: [
      "elektrický náboj, elementární náboj e = 1,6·10⁻¹⁹ C",
      "Coulombův zákon: F = k·Q₁Q₂/r²",
      "intenzita elektrického pole E⃗ = F⃗/q",
      "potenciál φ a napětí U = Δφ",
      "vodič v elektrostatickém poli, elektrostatická indukce",
      "dielektrikum, polarizace, permitivita ε = ε₀·εᵣ",
      "Faradayova klec",
      "kapacita kondenzátoru C = Q/U, deskový kondenzátor C = ε·S/d",
      "řazení kondenzátorů (paralelně, sériově)",
      "energie kondenzátoru E = ½·C·U²",
    ],
    explanation:
      "Coulombův zákon popisuje silové působení mezi bodovými náboji: F = k·Q₁Q₂/r², kde k = 1/(4πε₀) ≈ 9·10⁹ N·m²·C⁻². Intenzita pole E⃗ = F⃗/q udává sílu na jednotkový kladný náboj. Potenciál φ = W/q je energie na jednotkový náboj; napětí U = φ₁ − φ₂. Vodiče v poli — indukce (přerozdělení nábojů), Faradayova klec stíní vnitřek. Kondenzátor uchovává náboj: C = Q/U; deskový C = ε₀εᵣS/d. Paralelně se kapacity sčítají, sériově se sčítají převrácené hodnoty.",
    formulas: [
      "Coulombův zákon: F = k·Q₁Q₂/r²; k = 1/(4πε₀) ≈ 9·10⁹ N·m²·C⁻²",
      "Intenzita: E = F/q; bodový náboj: E = k·Q/r²",
      "Potenciál: φ = k·Q/r; napětí: U = φ₁ − φ₂",
      "Kapacita: C = Q/U; deskový: C = ε₀·εᵣ·S/d",
      "Paralelně: C = C₁ + C₂ + ... + Cₙ",
      "Sériově: 1/C = 1/C₁ + 1/C₂ + ... + 1/Cₙ",
      "Energie kondenzátoru: E = ½·C·U² = ½·Q·U = Q²/(2C)",
      "E⃗ = −grad φ (vztah intenzity a potenciálu)",
    ],
    examples: [
      {
        prompt:
          "Dutá vodivá koule o poloměru R = 10 cm nese náboj Q = 10⁻¹⁰ C. Jaký je potenciál na povrchu koule a intenzita pole ve vzdálenosti r = 30 cm od středu?",
        solution:
          "Potenciál na povrchu: φ = k·Q/R = 9·10⁹ · 10⁻¹⁰ / 0,1 = 9 V. Intenzita ve vzdálenosti r = 0,3 m: E = k·Q/r² = 9·10⁹ · 10⁻¹⁰ / 0,09 = 10 V·m⁻¹.",
      },
      {
        prompt:
          "Deskový kondenzátor má plochu desek S = 200 cm², vzdálenost d = 2 mm a dielektrikum s εᵣ = 5. Vypočtěte kapacitu a energii při napětí U = 100 V.",
        solution:
          "C = ε₀·εᵣ·S/d = 8,85·10⁻¹² · 5 · 200·10⁻⁴ / (2·10⁻³) = 8,85·10⁻¹² · 5 · 10 = 4,425·10⁻¹⁰ F ≈ 0,44 nF. Energie: E = ½·C·U² = ½ · 4,425·10⁻¹⁰ · 10 000 ≈ 2,21·10⁻⁶ J ≈ 2,2 μJ.",
      },
      {
        prompt:
          "Dva bodové náboje Q₁ = 4·10⁻⁸ C a Q₂ = −2·10⁻⁸ C jsou ve vzdálenosti r = 30 cm. Jaká síla mezi nimi působí? Přitahují se, nebo odpuzují?",
        solution:
          "F = k·|Q₁·Q₂|/r² = 9·10⁹ · 4·10⁻⁸ · 2·10⁻⁸ / (0,3)² = 9·10⁹ · 8·10⁻¹⁶ / 0,09 = 7,2·10⁻⁶ / 0,09 = 8·10⁻⁵ N = 80 μN. Náboje mají opačná znaménka, proto se PŘITAHUJÍ.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T7 — Geometricka optika (optics)
  // ───────────────────────────────────────────────
  {
    id: "7-geom-optika",
    number: 7,
    name: "Geometrická optika",
    category: "optics",
    keywords: [
      "světelný paprsek, přímočaré šíření světla",
      "Fermatův princip (princip nejkratšího času)",
      "zákon odrazu: úhel dopadu = úhel odrazu",
      "Snellův zákon lomu: n₁·sin α = n₂·sin β",
      "totální odraz, mezní úhel",
      "rovinné a kulové zrcadlo (duté, vypuklé)",
      "čočky: spojky (bikonvexní, planokonvexní, konkávně-konvexní) a rozptylky (bikonkávní, planokonkávní, konvexně-konkávní)",
      "zobrazovací rovnice: 1/a + 1/a' = 1/f, zrcadlo: f = r/2",
      "optická mohutnost φ = 1/f, oko, lupa, mikroskop, dalekohled",
    ],
    explanation:
      "Geometrická optika pracuje s paprsky — světlo se šíří přímočaře v homogenním prostředí. Zákon odrazu: úhel dopadu = úhel odrazu. Snellův zákon lomu: n₁·sin α = n₂·sin β; při přechodu do opticky řidšího prostředí může nastat totální odraz (sin α_m = n₂/n₁). Zobrazovací rovnice tenké čočky: 1/a + 1/a' = 1/f. Pro zrcadlo f = r/2 (duté → f > 0, vypuklé → f < 0). Optická mohutnost φ = 1/f se udává v dioptriích (D = m⁻¹).",
    formulas: [
      "Zákon odrazu: α = α'",
      "Snellův zákon: n₁·sin α = n₂·sin β",
      "Totální odraz: sin α_m = n₂/n₁ (pro n₁ > n₂)",
      "Zobrazovací rovnice: 1/a + 1/a' = 1/f",
      "Zrcadlo: f = r/2",
      "Optická mohutnost: φ = 1/f (D = m⁻¹)",
      "Příčné zvětšení: Z = −a'/a = y'/y",
      "Čočkářská rovnice: 1/f = (n − 1)·(1/r₁ − 1/r₂)",
    ],
    examples: [
      {
        prompt:
          "Duté zrcadlo má poloměr křivosti r = 16 m. Slunce má průměr d_S = 1,4·10⁹ m a je vzdáleno a = 1,5·10¹¹ m. Jak velký obraz Slunce vznikne v ohnisku?",
        solution:
          "Ohnisková vzdálenost: f = r/2 = 8 m. Slunce je prakticky v nekonečnu, obraz vznikne v ohnisku. Z podobnosti: d'/f = d_S/a → d' = d_S·f/a = 1,4·10⁹ · 8 / 1,5·10¹¹ ≈ 0,075 m = 7,5 cm.",
      },
      {
        prompt:
          "Předmět je ve vzdálenosti a = 30 cm od tenké spojky s ohniskovou vzdáleností f = 20 cm. Určete polohu obrazu a zvětšení.",
        solution:
          "1/a' = 1/f − 1/a = 1/20 − 1/30 = (3 − 2)/60 = 1/60 → a' = 60 cm. Zvětšení: Z = −a'/a = −60/30 = −2. Obraz je reálný, převrácený a 2× zvětšený.",
      },
      {
        prompt:
          "Světlo přechází ze skla (n₁ = 1,5) do vzduchu (n₂ = 1,0). Určete mezní úhel totálního odrazu.",
        solution:
          "sin α_m = n₂/n₁ = 1,0/1,5 = 0,667 → α_m = arcsin(0,667) ≈ 41,8°. Při úhlu dopadu větším než 41,8° nastává totální odraz.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T8 — Gravitacni pole (mechanics)
  // ───────────────────────────────────────────────
  {
    id: "8-gravitace",
    number: 8,
    name: "Gravitační pole",
    category: "mechanics",
    keywords: [
      "Newtonův gravitační zákon: F = G·m₁·m₂/r²",
      "gravitační konstanta G = 6,674·10⁻¹¹ N·m²·kg⁻²",
      "intenzita gravitačního pole K⃗ = F⃗_g/m",
      "gravitační potenciál φ = −G·M/r",
      "tíhové pole (gravitace + setrvačná složka rotace Země)",
      "volný pád, svislý vrh vzhůru/dolů, vodorovný vrh, šikmý vrh",
      "dostředivá síla a pohyb po kružnici: F_d = m·v²/r",
      "kosmické rychlosti (1. kruhová, 2. úniková)",
      "Keplerovy zákony pohybu planet",
    ],
    explanation:
      "Newtonův gravitační zákon: každá dvě tělesa se přitahují silou F = G·m₁m₂/r². Intenzita pole K = G·M/r² udává zrychlení, které pole udělí zkušebnímu tělesu. Na povrchu Země: g ≈ 9,81 m·s⁻². Pro projektilové pohyby v homogenním tíhovém poli rozlišujeme 5 typů vrhů (volný pád, svislý dolů/nahoru, vodorovný, šikmý). V centrálním poli se tělesa pohybují po kuželosečkách (Keplerovy zákony). První kosmická rychlost v₁ = √(gR) ≈ 7,9 km·s⁻¹, úniková v₂ = v₁√2 ≈ 11,2 km·s⁻¹.",
    formulas: [
      "F = G·m₁·m₂/r²; G = 6,674·10⁻¹¹ N·m²·kg⁻²",
      "Intenzita: K = G·M/r²; na povrchu Země: g = G·M_Z/R_Z²",
      "Potenciál: φ = −G·M/r",
      "Volný pád: h = ½g·t², v = g·t",
      "Šikmý vrh — dolet: d = v₀²·sin(2α)/g; max výška: h = v₀²·sin²α/(2g)",
      "Vodorovný vrh: x = v₀·t, y = ½g·t²",
      "1. kosmická rychlost: v₁ = √(G·M/R) = √(g·R)",
      "2. kosmická rychlost: v₂ = v₁·√2",
      "3. Keplerův zákon: T²/a³ = konst. = 4π²/(G·M)",
    ],
    examples: [
      {
        prompt:
          "Pod jakým elevačním úhlem α musíme vrhnout těleso, aby se maximální výška h rovnala doletu d?",
        solution:
          "Výška: h = v₀²·sin²α/(2g). Dolet: d = v₀²·sin(2α)/g = 2v₀²·sinα·cosα/g. Podmínka h = d: sin²α/(2g) = 2·sinα·cosα/g → sinα/2 = 2·cosα → tgα = 4 → α = arctg(4) ≈ 76°.",
      },
      {
        prompt:
          "Družice obíhá Zemi ve výšce h = 300 km nad povrchem. Určete její oběžnou rychlost a periodu. (R_Z = 6 371 km, g = 9,81 m·s⁻², M_Z = 5,97·10²⁴ kg)",
        solution:
          "r = R_Z + h = 6 371 + 300 = 6 671 km = 6,671·10⁶ m. Rychlost: v = √(G·M/r) = √(6,674·10⁻¹¹ · 5,97·10²⁴ / 6,671·10⁶) = √(5,975·10⁷) ≈ 7 730 m·s⁻¹ ≈ 7,73 km·s⁻¹. Perioda: T = 2π·r/v = 2π · 6,671·10⁶ / 7 730 ≈ 5 424 s ≈ 90,4 min.",
      },
      {
        prompt:
          "Z věže vysoké h = 45 m je vodorovně hozena koule rychlostí v₀ = 20 m·s⁻¹. Jak daleko od paty věže dopadne a jakou rychlostí? (g = 10 m·s⁻²)",
        solution:
          "Čas pádu: h = ½g·t² → t = √(2h/g) = √(90/10) = 3 s. Dolet: x = v₀·t = 20·3 = 60 m. Rychlost: v_y = g·t = 30 m·s⁻¹, v = √(v₀² + v_y²) = √(400 + 900) = √1300 ≈ 36,1 m·s⁻¹.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T9 — Kinematika (mechanics)
  // ───────────────────────────────────────────────
  {
    id: "9-kinematika",
    number: 9,
    name: "Kinematika hmotných bodů",
    category: "mechanics",
    keywords: [
      "kinematika vs. dynamika",
      "vztažná soustava, vztažné těleso, hmotný bod",
      "relativnost pohybu, Galileův princip relativity",
      "trajektorie, dráha (skalár), posunutí (vektor)",
      "rychlost: průměrná, okamžitá, v = ds/dt",
      "zrychlení: tečné, normálové, a = dv/dt = d²s/dt²",
      "rovnoměrný přímočarý pohyb, rovnoměrně zrychlený/zpomalený pohyb",
      "volný pád, vrhy (svislý, vodorovný, šikmý)",
      "pohyb po kružnici: úhlová rychlost ω, perioda T, frekvence f",
    ],
    explanation:
      "Kinematika popisuje pohyb hmotného bodu bez ohledu na příčiny (síly). Klíčové veličiny jsou poloha, rychlost v = ds/dt a zrychlení a = dv/dt v závislosti na čase. Pohyb je relativní vůči vztažné soustavě. Rozlišujeme dráhu (skalár — celková délka trajektorie) a posunutí (vektor — změna polohového vektoru). Mezi typové úlohy patří rovnoměrně zrychlený pohyb (s = v₀t + ½at²), volný pád, vrhy a pohyb po kružnici s dostředivým zrychlením a_d = v²/r = ω²r.",
    formulas: [
      "v = ds/dt (okamžitá rychlost)",
      "a = dv/dt = d²s/dt² (zrychlení)",
      "Rovnoměrně zrychlený pohyb: s = v₀t + ½at²; v = v₀ + at",
      "Bez času: v² = v₀² + 2a·s",
      "Volný pád: h = ½gt²; v = gt; g ≈ 9,81 m·s⁻²",
      "Vodorovný vrh: x = v₀·t, y = ½g·t²",
      "Šikmý vrh: d = (v₀²·sin 2α)/g",
      "Pohyb po kružnici: ω = 2π·f = 2π/T; a_d = v²/r = ω²·r",
      "Obvodová rychlost: v = ω·r = 2π·r·f",
    ],
    examples: [
      {
        prompt:
          "Auto se rozjíždí z klidu rovnoměrně zrychleným pohybem se zrychlením a = 2 m·s⁻². Jakou rychlost má za t = 5 s a kolik metrů ujede?",
        solution:
          "Rychlost: v = a·t = 2·5 = 10 m·s⁻¹ = 36 km·h⁻¹. Dráha: s = ½·a·t² = ½·2·25 = 25 m.",
      },
      {
        prompt:
          "Z jaké výšky musí padat těleso, aby dopadlo rychlostí v = 20 m·s⁻¹? (g = 10 m·s⁻²)",
        solution:
          "Z v² = 2g·h: h = v²/(2g) = 400/20 = 20 m.",
      },
      {
        prompt:
          "Kolotoč má poloměr r = 5 m a otočí se jednou za T = 10 s. Jakou obvodovou rychlost a dostředivé zrychlení má dítě na okraji?",
        solution:
          "ω = 2π/T = 2π/10 ≈ 0,628 rad·s⁻¹. Rychlost: v = ω·r = 0,628·5 ≈ 3,14 m·s⁻¹. Dostředivé zrychlení: a_d = ω²·r = 0,628²·5 ≈ 1,97 m·s⁻².",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T10 — Kmitavy pohyb (mechanics)
  // ───────────────────────────────────────────────
  {
    id: "10-kmity",
    number: 10,
    name: "Kmitavý pohyb",
    category: "mechanics",
    keywords: [
      "periodický pohyb, oscilátor, kmit, perioda T, frekvence f",
      "harmonický kmitavý pohyb (HKP): y = A·sin(ωt + φ₀)",
      "amplituda, fáze, fázový diagram",
      "rychlost a zrychlení při HKP",
      "matematické kyvadlo: T = 2π√(l/g)",
      "fyzické (fyzikální) kyvadlo",
      "pružinový oscilátor: T = 2π√(m/k)",
      "energie harmonického oscilátoru, přeměny E_k a E_p",
      "tlumené kmitání, nucené kmitání, rezonance",
    ],
    explanation:
      "Harmonický kmitavý pohyb je periodický pohyb popsaný funkcí y = A·sin(ωt + φ₀), kde A je amplituda, ω = 2π/T = 2πf je úhlová frekvence. Rychlost: v = Aω·cos(ωt + φ₀), zrychlení: a = −Aω²·sin(ωt + φ₀) = −ω²·y. Pro matematické kyvadlo T = 2π√(l/g), pro pružinový oscilátor T = 2π√(m/k). Celková energie E = ½kA² = ½mω²A² je konstantní (přelévá se mezi kinetickou a potenciální). Při rezonanci (budicí frekvence = vlastní frekvence) amplituda prudce roste.",
    formulas: [
      "y = A·sin(ωt + φ₀) (výchylka)",
      "v = Aω·cos(ωt + φ₀) (rychlost)",
      "a = −Aω²·sin(ωt + φ₀) = −ω²·y (zrychlení)",
      "ω = 2π/T = 2πf",
      "Matematické kyvadlo: T = 2π√(l/g)",
      "Pružinový oscilátor: T = 2π√(m/k)",
      "Energie: E = ½k·A² = ½m·ω²·A²",
      "E_k = ½m·v², E_p = ½k·y², E_k + E_p = konst.",
    ],
    examples: [
      {
        prompt:
          "Matematické kyvadlo má periodu T = 4 s. Jaká je jeho délka? (g = 9,81 m·s⁻²)",
        solution:
          "Z T = 2π√(l/g) → l = T²·g/(4π²) = 16·9,81/(4·9,87) = 156,96/39,48 ≈ 3,98 m.",
      },
      {
        prompt:
          "Těleso o hmotnosti m = 0,5 kg kmitá na pružině s tuhostí k = 200 N·m⁻¹. Určete periodu, frekvenci a maximální rychlost při amplitudě A = 3 cm.",
        solution:
          "T = 2π√(m/k) = 2π√(0,5/200) = 2π√(0,0025) = 2π·0,05 = 0,314 s. f = 1/T ≈ 3,18 Hz. ω = 2πf ≈ 20 rad·s⁻¹. v_max = A·ω = 0,03·20 = 0,6 m·s⁻¹.",
      },
      {
        prompt:
          "Harmonický oscilátor má amplitudu A = 5 cm a frekvenci f = 2 Hz. Jaká je maximální velikost zrychlení?",
        solution:
          "ω = 2πf = 2π·2 = 4π ≈ 12,57 rad·s⁻¹. Maximální zrychlení: a_max = ω²·A = (4π)²·0,05 = 16π²·0,05 ≈ 157,9·0,05 ≈ 7,9 m·s⁻².",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T11 — Kvantova fyzika (modern)
  // ───────────────────────────────────────────────
  {
    id: "11-kvantova",
    number: 11,
    name: "Kvantová fyzika",
    category: "modern",
    keywords: [
      "kvantum energie, Planckova konstanta h = 6,626·10⁻³⁴ J·s",
      "vnější fotoelektrický jev, Einsteinova rovnice",
      "výstupní práce, prahová frekvence",
      "Comptonův jev, rozptyl fotonů na elektronech",
      "de Broglieho vlnová délka: λ = h/p",
      "dualismus vlna–částice",
      "modely atomu (Thomson, Rutherford, Bohr)",
      "Bohrovy postuláty, energetické hladiny atomu vodíku",
      "Heisenbergův princip neurčitosti: Δx·Δp ≥ ℏ/2",
      "laser (stimulovaná emise, inverze populace)",
    ],
    explanation:
      "Energie elektromagnetického záření je kvantována: E = h·f, kde h je Planckova konstanta. Fotoelektrický jev: foton s dostatečnou energií vyrazí elektron z kovu, přičemž maximální kinetická energie elektronu je E_k = h·f − W (W = výstupní práce). De Broglieho hypotéza přiřazuje každé částici vlnovou délku λ = h/(m·v). Bohrův model atomu vodíku popisuje elektron na kvantovaných kruhových drahách s energiemi Eₙ = −13,6/n² eV. Heisenbergův princip neurčitosti omezuje současné přesné určení polohy a hybnosti.",
    formulas: [
      "E = h·f = h·c/λ; h = 6,626·10⁻³⁴ J·s",
      "Fotoefekt: E_k,max = h·f − W",
      "Prahová frekvence: f₀ = W/h; λ₀ = h·c/W",
      "de Broglie: λ = h/p = h/(m·v)",
      "Bohrův model: Eₙ = −13,6/n² eV (vodík)",
      "Heisenberg: Δx·Δp ≥ ℏ/2; ℏ = h/(2π)",
      "1 eV = 1,602·10⁻¹⁹ J",
      "Compton: Δλ = (h/(m_e·c))·(1 − cosθ)",
    ],
    examples: [
      {
        prompt:
          "Sodík má výstupní práci W = 2,28 eV. Jaká je prahová vlnová délka fotoefektu a jakou maximální kinetickou energii mají fotoelektrony při ozáření světlem λ = 400 nm?",
        solution:
          "Prahová λ₀ = h·c/W = 6,626·10⁻³⁴·3·10⁸/(2,28·1,6·10⁻¹⁹) = 1,988·10⁻²⁵/3,648·10⁻¹⁹ ≈ 5,45·10⁻⁷ m = 545 nm. Energie fotonu λ = 400 nm: E = h·c/λ = 1,988·10⁻²⁵/4·10⁻⁷ = 4,97·10⁻¹⁹ J = 3,1 eV. E_k = E − W = 3,1 − 2,28 = 0,82 eV ≈ 1,31·10⁻¹⁹ J.",
      },
      {
        prompt:
          "Určete de Broglieho vlnovou délku elektronu urychleného napětím U = 100 V. (m_e = 9,11·10⁻³¹ kg, e = 1,6·10⁻¹⁹ C)",
        solution:
          "Kinetická energie: E_k = e·U = 1,6·10⁻¹⁹·100 = 1,6·10⁻¹⁷ J. Hybnost: p = √(2·m_e·E_k) = √(2·9,11·10⁻³¹·1,6·10⁻¹⁷) = √(2,916·10⁻⁴⁷) = 5,4·10⁻²⁴ kg·m·s⁻¹. λ = h/p = 6,626·10⁻³⁴/5,4·10⁻²⁴ ≈ 1,23·10⁻¹⁰ m = 0,123 nm.",
      },
      {
        prompt:
          "Na jakou vlnovou délku odpovídá přechod elektronu v atomu vodíku z hladiny n = 3 na n = 2 (Balmerova série)? (E₁ = −13,6 eV)",
        solution:
          "E₃ = −13,6/9 = −1,511 eV; E₂ = −13,6/4 = −3,4 eV. Energie fotonu: ΔE = E₃ − E₂ = −1,511 − (−3,4) = 1,889 eV = 3,02·10⁻¹⁹ J. λ = h·c/ΔE = 6,626·10⁻³⁴·3·10⁸/3,02·10⁻¹⁹ ≈ 6,58·10⁻⁷ m ≈ 658 nm (červená čára H_α).",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T12 — Magneticke pole a elektromagneticka indukce (magnetism)
  // ───────────────────────────────────────────────
  {
    id: "12-magneticke",
    number: 12,
    name: "Magnetické pole a elektromagnetická indukce",
    category: "magnetism",
    keywords: [
      "magnetické pole, magnetické indukční čáry, domény",
      "Ampérovo pravidlo pravé ruky",
      "magnetická indukce B⃗ (přímý vodič, závit, solenoidy)",
      "síla na vodič s proudem: F = B·I·l·sinα",
      "Lorentzova síla: F⃗ = q·v⃗ × B⃗",
      "Flemingovo pravidlo levé ruky",
      "magnetický indukční tok Φ = B⃗·S⃗ = B·S·cosα",
      "Faradayův zákon elmag. indukce: u_i = −dΦ/dt",
      "Lenzův zákon (indukovaný proud působí proti změně)",
      "vlastní indukce L, energie magnetického pole W = ½L·I²",
    ],
    explanation:
      "Vodič s proudem vytváří magnetické pole s indukcí B. Síla na vodič v poli: F = B·I·l·sinα. Na pohybující se náboj působí Lorentzova síla F = q·v·B·sinα (kolmo na v⃗ i B⃗ — zakřivuje trajektorii). Faradayův zákon elektromagnetické indukce: změna magnetického toku indukuje napětí u_i = −dΦ/dt. Lenzův zákon určuje směr — indukovaný proud působí proti změně, která ho vyvolala. Vlastní indukce: Φ = L·I, kde L je indukčnost; energie v magnetickém poli cívky W = ½L·I².",
    formulas: [
      "B přímého vodiče: B = μ₀·I/(2πr)",
      "B solenoid: B = μ₀·n·I (n = N/l)",
      "Síla na vodič: F = B·I·l·sinα",
      "Lorentzova síla: F = q·v·B·sinα",
      "Magnetický tok: Φ = B·S·cosα",
      "Faradayův zákon: u_i = −dΦ/dt = −N·dΦ₁/dt",
      "Vlastní indukce: Φ = L·I; u_L = −L·dI/dt",
      "Energie magn. pole: W = ½L·I²",
      "Transformátor: U₁/U₂ = N₁/N₂",
    ],
    examples: [
      {
        prompt:
          "Elektron letí ve vakuu rychlostí v = 10⁷ m·s⁻¹ kolmo k magnetickému poli o indukci B = 5·10⁻³ T. Jaký je poloměr jeho kruhové trajektorie?",
        solution:
          "Lorentzova síla = dostředivá síla: q·v·B = m·v²/r → r = m·v/(q·B) = 9,11·10⁻³¹·10⁷/(1,6·10⁻¹⁹·5·10⁻³) = 9,11·10⁻²⁴/8·10⁻²² = 0,0114 m ≈ 1,14 cm.",
      },
      {
        prompt:
          "Cívka má N = 200 závitů a plochu průřezu S = 50 cm². Magnetická indukce se rovnoměrně změní z B₁ = 0 na B₂ = 0,5 T za čas Δt = 0,1 s. Jaké je indukované napětí?",
        solution:
          "ΔΦ = (B₂ − B₁)·S = 0,5·50·10⁻⁴ = 2,5·10⁻³ Wb. u_i = N·ΔΦ/Δt = 200·2,5·10⁻³/0,1 = 200·0,025 = 5 V.",
      },
      {
        prompt:
          "Cívka má indukčnost L = 0,2 H a prochází jí proud I = 3 A. Kolik energie je uloženo v magnetickém poli cívky?",
        solution:
          "W = ½·L·I² = ½·0,2·9 = 0,9 J.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T13 — Mechanicka energie, prace a vykon (mechanics)
  // ───────────────────────────────────────────────
  {
    id: "13-energie",
    number: 13,
    name: "Mechanická energie, práce a výkon",
    category: "mechanics",
    keywords: [
      "mechanická práce: W = F·s·cosα",
      "výkon: P = W/t = F⃗·v⃗",
      "účinnost: η = P_užitečný/P_příkon",
      "kinetická energie: E_k = ½mv²",
      "potenciální tíhová energie: E_p = mgh",
      "potenciální energie pružnosti: E_p = ½kx²",
      "kinetická energie rotace: E_k = ½Iω²",
      "zákon zachování mechanické energie",
      "Bernoulliho rovnice (energie proudící tekutiny)",
    ],
    explanation:
      "Práce W = F·s·cosα je skalární součin síly a posunutí. Výkon P = W/t = F·v je rychlost konání práce. Kinetická energie E_k = ½mv², potenciální tíhová E_p = mgh. Zákon zachování mechanické energie: v izolované soustavě bez nekonzervativních sil je součet E_k + E_p konstantní. Pro rotující těleso E_k = ½Iω². Účinnost η = P_užit/P_celk vyjadřuje, jaký podíl dodané energie se přemění na užitečnou práci.",
    formulas: [
      "W = F·s·cosα (práce konstantní síly)",
      "P = W/t = F·v (výkon)",
      "E_k = ½m·v² (kinetická energie translace)",
      "E_p = m·g·h (potenciální tíhová energie)",
      "E_p = ½k·x² (potenciální energie pružnosti)",
      "E_k,rot = ½I·ω² (kinetická energie rotace)",
      "ZZ energie: E_k₁ + E_p₁ = E_k₂ + E_p₂",
      "η = W_užit/W_celk = P_užit/P_celk",
      "Bernoulli: ½ρv² + ρgh + p = konst.",
    ],
    examples: [
      {
        prompt:
          "Těleso o hmotnosti m = 2 kg sklouzne bez tření z výšky h = 5 m. Jakou rychlost má na úpatí?",
        solution:
          "ZZ energie: mgh = ½mv² → v = √(2gh) = √(2·9,81·5) = √(98,1) ≈ 9,9 m·s⁻¹.",
      },
      {
        prompt:
          "Motor automobilu o hmotnosti m = 1 200 kg má výkon P = 60 kW. Za jak dlouho zrychlí auto z klidu na v = 100 km·h⁻¹ (≈ 27,8 m·s⁻¹), zanedbáme-li odpor?",
        solution:
          "Kinetická energie: E_k = ½mv² = ½·1200·27,8² = 600·772,84 ≈ 463 700 J. Čas: t = E_k/P = 463 700/60 000 ≈ 7,7 s.",
      },
      {
        prompt:
          "Z nejvyššího bodu koule o poloměru R = 0,2 m klouže bez tření malé tělísko. V jakém bodě (úhel α od svislice) se tělísko odtrhne od povrchu?",
        solution:
          "Ze ZZ energie: v² = 2gR(1 − cosα). V bodě odtržení normálová síla = 0, takže mg·cosα = mv²/R. Dosadíme: g·cosα = 2g(1 − cosα) → cosα = 2 − 2cosα → 3cosα = 2 → cosα = 2/3 → α ≈ 48,2°.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T14 — Mechanicke vlneni (mechanics)
  // ───────────────────────────────────────────────
  {
    id: "14-mech-vlneni",
    number: 14,
    name: "Mechanické vlnění",
    category: "mechanics",
    keywords: [
      "příčné vlnění (kmity kolmé na směr šíření)",
      "podélné vlnění (kmity ve směru šíření, např. zvuk)",
      "postupné a stojaté vlnění",
      "vlnová délka λ, frekvence f, perioda T, fázová rychlost v",
      "Huygensův princip, vlnoplocha, paprsek",
      "rovnice postupné vlny: y = A·sin(ωt − kx)",
      "interference, odraz, lom, ohyb vlnění",
      "Dopplerův jev",
      "zvuk: výška, barva, hlasitost, intenzita, práh slyšení",
    ],
    explanation:
      "Mechanické vlnění je šíření kmitavého rozruchu hmotným prostředím. Příčné vlnění: kmity jsou kolmé na směr šíření (např. vlna na struně). Podélné vlnění: kmity jsou ve směru šíření (např. zvuk ve vzduchu). Vlnová délka λ = v·T = v/f. Při interferenci dvou koherentních vln v místech s dráhovým rozdílem Δd = k·λ vzniká maximum, při Δd = (2k+1)·λ/2 minimum. Dopplerův jev mění pozorovanou frekvenci při vzájemném pohybu zdroje a pozorovatele.",
    formulas: [
      "v = λ·f = λ/T (fázová rychlost)",
      "Postupná vlna: y = A·sin(ωt − kx); k = 2π/λ (vlnové číslo)",
      "Interference max: Δd = k·λ; min: Δd = (2k+1)·λ/2",
      "Dopplerův jev (přibližování zdroje): f' = f·v/(v − v_z)",
      "Dopplerův jev (vzdalování zdroje): f' = f·v/(v + v_z)",
      "Stojaté vlnění: uzly ve vzdálenostech λ/2",
      "Intenzita zvuku: I = P/S (W·m⁻²); hladina L = 10·log(I/I₀) dB",
    ],
    examples: [
      {
        prompt:
          "Siréna lokomotivy vysílá zvuk f = 1000 Hz. Měřič u tratě naměří f' = 944 Hz. Vzdaluje se, nebo přibližuje vlak a jakou má rychlost? (v_zvuk = 340 m·s⁻¹)",
        solution:
          "f' < f → vlak se VZDALUJE. Vzorec: f' = f·v/(v + v_z) → v_z = v·(f/f' − 1) = 340·(1000/944 − 1) = 340·0,0593 ≈ 20,2 m·s⁻¹ ≈ 72,6 km·h⁻¹.",
      },
      {
        prompt:
          "Struna délky l = 0,8 m je upnuta na obou koncích. Jaká je frekvence základního tónu, je-li rychlost vlny na struně v = 320 m·s⁻¹?",
        solution:
          "Základní tón: λ₁ = 2l = 2·0,8 = 1,6 m. Frekvence: f₁ = v/λ₁ = 320/1,6 = 200 Hz.",
      },
      {
        prompt:
          "Dva reproduktory vzdálené d = 2 m vysílají koherentní zvuk f = 1700 Hz. Pozorovatel stojí daleko na kolmici k úsečce spojující reproduktory. Pod jakým úhlem od osy je první minimum? (v = 340 m·s⁻¹)",
        solution:
          "λ = v/f = 340/1700 = 0,2 m. První minimum: d·sinθ = λ/2 → sinθ = λ/(2d) = 0,2/(2·2) = 0,05 → θ = arcsin(0,05) ≈ 2,87°.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T15 — Mechanika tekutin (mechanics)
  // ───────────────────────────────────────────────
  {
    id: "15-tekutiny",
    number: 15,
    name: "Mechanika tekutin",
    category: "mechanics",
    keywords: [
      "tekutina: kapalina a plyn, ideální vs. reálná tekutina",
      "tlak: p = F/S, jednotka Pa = N·m⁻²",
      "hydrostatický tlak: p = h·ρ·g",
      "atmosférický tlak, Torricelliho pokus",
      "Pascalův zákon: F₁/S₁ = F₂/S₂ (hydraulický lis)",
      "Archimédův zákon: F_vz = V_ponořená·ρ_kap·g",
      "rovnice spojitosti (kontinuity): S₁v₁ = S₂v₂",
      "Bernoulliho rovnice: ½ρv² + ρgh + p = konst.",
      "obtékání těles, odporová síla, hydrodynamický paradox",
    ],
    explanation:
      "V kapalině v klidu roste tlak s hloubkou: p = h·ρ·g. Pascalův zákon: tlak se v uzavřené tekutině šíří všemi směry rovnoměrně — základ hydraulického lisu. Archimédův zákon: na těleso ponořené v tekutině působí vztlaková síla rovná tíze vytlačené tekutiny. V proudící ideální tekutině platí rovnice spojitosti S₁v₁ = S₂v₂ (zachování hmotnosti) a Bernoulliho rovnice ½ρv² + ρgh + p = konst. (zachování energie).",
    formulas: [
      "p = F/S (definice tlaku)",
      "Hydrostatický tlak: p = h·ρ·g",
      "Pascalův zákon: F₁/S₁ = F₂/S₂",
      "Archimédův zákon: F_vz = V·ρ_kap·g",
      "Rovnice spojitosti: S₁·v₁ = S₂·v₂",
      "Bernoulliho rovnice: ½ρv² + ρgh + p = konst.",
      "Torricelliho rovnice (výtok): v = √(2g·h)",
    ],
    examples: [
      {
        prompt:
          "Jaký je hydrostatický tlak v hloubce h = 10 m ve sladké vodě? (ρ = 1000 kg·m⁻³, g = 9,81 m·s⁻²)",
        solution:
          "p = h·ρ·g = 10·1000·9,81 = 98 100 Pa ≈ 98,1 kPa ≈ 1 atm. Celkový tlak na potápěče = atmosférický + hydrostatický ≈ 2 atm.",
      },
      {
        prompt:
          "Dřevěný kvádr o rozměrech 20×10×5 cm a hustotě ρ_d = 600 kg·m⁻³ plave ve vodě (ρ_v = 1000 kg·m⁻³). Jak hluboko je ponořen?",
        solution:
          "Podmínka plavání: F_G = F_vz → m·g = V_pon·ρ_v·g → ρ_d·V = V_pon·ρ_v → V_pon/V = ρ_d/ρ_v = 600/1000 = 0,6. Ponořeno je 60 % objemu. Pokud plave na nejdelší straně (20 cm): výška nad vodou = 5·0,4 = 2 cm, ponořeno = 3 cm.",
      },
      {
        prompt:
          "Vodovodní potrubí má průměr d₁ = 10 cm a rychlost proudění v₁ = 2 m·s⁻¹. Zúží se na d₂ = 5 cm. Jaká je rychlost v zúžení?",
        solution:
          "Rovnice spojitosti: S₁v₁ = S₂v₂. S = π(d/2)². Poměr ploch: S₁/S₂ = (d₁/d₂)² = (10/5)² = 4. Tedy v₂ = v₁·S₁/S₂ = 2·4 = 8 m·s⁻¹.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T16 — Mechanika tuheho telesa (mechanics)
  // ───────────────────────────────────────────────
  {
    id: "16-tuhe-teleso",
    number: 16,
    name: "Mechanika tuhého tělesa",
    category: "mechanics",
    keywords: [
      "tuhé těleso, translační a rotační pohyb",
      "rovnovážné polohy: stálá, vratká, volná (labilní, stabilní, indiferentní)",
      "moment síly: M⃗ = r⃗ × F⃗, M = F·r·sinα",
      "skládání a rozklad sil, těžiště",
      "moment setrvačnosti: I = Σmᵢrᵢ²",
      "Steinerova věta: I = I₀ + m·d²",
      "pohybová rovnice rotace: M = I·ε (ε = úhlové zrychlení)",
      "kinetická energie rotace: E_k = ½I·ω²",
      "jednoduché stroje (páka, kladka, nakloněná rovina, klín, šroub)",
    ],
    explanation:
      "Tuhé těleso je idealizace, kde se vzájemné vzdálenosti bodů nemění. Pohyb se rozkládá na translaci (pohyb těžiště) a rotaci. Pro rotaci platí analogie Newtonova zákona: M = I·ε (moment síly = moment setrvačnosti × úhlové zrychlení). Moment setrvačnosti I = Σmᵢrᵢ² závisí na rozložení hmoty vůči ose. Steinerova věta: I = I₀ + m·d² umožňuje přepočet k libovolné rovnoběžné ose. Rovnováha: ΣF⃗ = 0 a ΣM = 0.",
    formulas: [
      "Moment síly: M = F·r·sinα; M⃗ = r⃗ × F⃗",
      "M = I·ε (pohybová rovnice rotace)",
      "I_válec = ½m·r²; I_koule = (2/5)m·r²; I_tyč(střed) = (1/12)m·l²",
      "Steinerova věta: I = I₀ + m·d²",
      "E_k(rot) = ½I·ω²",
      "Celková E_k = ½m·v² + ½I·ω² (valení: v = ω·r)",
      "Rovnováha: ΣF⃗ = 0⃗ a ΣM = 0",
      "Páka: F₁·r₁ = F₂·r₂",
    ],
    examples: [
      {
        prompt:
          "Letecký motor má výkon P = 1 500 kW při otáčkách n = 2 400 min⁻¹. Jaký krouticí moment vyvíjí?",
        solution:
          "Frekvence: f = n/60 = 2400/60 = 40 Hz. Úhlová rychlost: ω = 2πf = 2π·40 = 251,3 rad·s⁻¹. Moment: M = P/ω = 1 500 000/251,3 ≈ 5 969 N·m ≈ 6,0 kN·m.",
      },
      {
        prompt:
          "Válec o hmotnosti m = 10 kg a poloměru r = 0,2 m se valí po vodorovné podložce rychlostí v = 5 m·s⁻¹. Jaká je jeho celková kinetická energie?",
        solution:
          "I_válec = ½m·r² = ½·10·0,04 = 0,2 kg·m². ω = v/r = 5/0,2 = 25 rad·s⁻¹. E_k = ½m·v² + ½I·ω² = ½·10·25 + ½·0,2·625 = 125 + 62,5 = 187,5 J.",
      },
      {
        prompt:
          "Tyč o hmotnosti m = 3 kg a délce l = 1,2 m je zavěšena na jednom konci. Jaký je její moment setrvačnosti vzhledem k ose na konci tyče?",
        solution:
          "Moment setrvačnosti k ose středem: I₀ = (1/12)m·l² = (1/12)·3·1,44 = 0,36 kg·m². Steiner (d = l/2 = 0,6 m): I = I₀ + m·d² = 0,36 + 3·0,36 = 0,36 + 1,08 = 1,44 kg·m². Alternativně: I_tyč(konec) = (1/3)m·l² = (1/3)·3·1,44 = 1,44 kg·m² ✓.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T17 — Struktura kapalin (thermo)
  // ───────────────────────────────────────────────
  {
    id: "17-kapaliny",
    number: 17,
    name: "Struktura a vlastnosti kapalin",
    category: "thermo",
    keywords: [
      "částicová struktura kapalin, krátkodosahové uspořádání",
      "povrchová vrstva, povrchová energie",
      "povrchové napětí: σ = F/l = ΔW/ΔS",
      "tvorba kapek, dutých bublin",
      "smáčení a nesmáčení, kontaktní (krajový) úhel",
      "kapilární jevy: elevace (smáčivé) a deprese (nesmáčivé)",
      "kapilární tlak",
      "anomálie vody (maximální hustota při ~4 °C)",
    ],
    explanation:
      "Kapalina má krátkodosahové uspořádání částic — drží pohromadě kohezními silami. Na povrchu jsou částice vtahovány dovnitř, čímž vzniká povrchové napětí σ = F/l = ΔW/ΔS. Smáčivá kapalina (kontaktní úhel < 90°) v kapiláře stoupá (elevace), nesmáčivá (> 90°) klesá (deprese). Výška kapilární elevace h = 2σ/(ρ·g·r). Voda má anomálii — maximální hustotu při ~4 °C, proto led plave na vodě a život v zamrzlých rybnících přežívá.",
    formulas: [
      "Povrchové napětí: σ = F/l = ΔW/ΔS",
      "Kapilární elevace/deprese: h = 2σ·cosθ/(ρ·g·r)",
      "Kapilární tlak: Δp = 2σ/r (koule), Δp = 4σ/r (bublina — dvě plochy)",
      "Teplotní objemová roztažnost: V = V₀(1 + β·Δt), β ≈ 3α",
      "Teplotní závislost hustoty: ρ = ρ₀/(1 + β·Δt)",
    ],
    examples: [
      {
        prompt:
          "Ve skleněné kapiláře o vnitřním poloměru r = 0,5 mm vystoupí voda do výšky h. Povrchové napětí vody σ = 0,073 N·m⁻¹, ρ = 1000 kg·m⁻³, kontaktní úhel θ ≈ 0°. Určete h.",
        solution:
          "h = 2σ·cosθ/(ρ·g·r) = 2·0,073·1/(1000·9,81·0,5·10⁻³) = 0,146/4,905 ≈ 0,0298 m ≈ 3,0 cm.",
      },
      {
        prompt:
          "Vypočtěte přetlak uvnitř dešťové kapky o poloměru r = 1 mm. (σ = 0,073 N·m⁻¹)",
        solution:
          "Kapka má jeden povrch: Δp = 2σ/r = 2·0,073/0,001 = 146 Pa. Mýdlová bublina by měla dvojnásobek (2 povrchy): Δp = 4σ/r = 292 Pa.",
      },
      {
        prompt:
          "Vysvětlete anomálii vody a její význam pro přírodu.",
        solution:
          "Voda má maximální hustotu při ~4 °C (ρ ≈ 999,97 kg·m⁻³). Při ochlazování pod 4 °C se hustota snižuje a studenější voda stoupá k hladině. Proto v zimě zamrzá hladina rybníka odshora, zatímco u dna zůstává voda o teplotě ~4 °C — to umožňuje přežití vodních organismů. Led (ρ ≈ 917 kg·m⁻³) plave na vodě díky menší hustotě.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T18 — Struktura pevnych latek (thermo)
  // ───────────────────────────────────────────────
  {
    id: "18-pevne-latky",
    number: 18,
    name: "Struktura a vlastnosti pevných látek",
    category: "thermo",
    keywords: [
      "krystalické látky: monokrystaly a polykrystaly",
      "amorfní látky (sklo, pryskyřice)",
      "krystalová mřížka, elementární buňka, mřížková konstanta",
      "typy kubických mřížek: prostá, plošně středěná (FCC), prostorově středěná (BCC)",
      "počet atomů v buňce: prostá 1, BCC 2, FCC 4",
      "typy vazeb (iontová, kovalentní, kovová, van der Waalsova)",
      "deformace: pružná (elastická) a trvalá (plastická)",
      "Hookův zákon: σ = E·ε (normálové napětí = modul pružnosti × poměrné prodloužení)",
      "teplotní roztažnost: délková Δl = α·l₀·Δt, objemová β ≈ 3α, bimetal",
    ],
    explanation:
      "Pevné látky dělíme na krystalické (pravidelné uspořádání v mřížce) a amorfní (bez dlouhodosahového řádu). Krystalová mřížka má elementární buňku — nejmenší jednotku, jejímž opakováním vzniká celý krystal. Kubické mřížky: prostá (1 atom/buňka), BCC (2 atomy), FCC (4 atomy). Při malé deformaci platí Hookův zákon σ = E·ε, kde σ je mechanické napětí, E modul pružnosti (Youngův) a ε = Δl/l₀ poměrné prodloužení. Teplotní roztažnost: Δl = α·l₀·Δt (délková), objemový koeficient β ≈ 3α.",
    formulas: [
      "Hookův zákon: σ = E·ε; σ = F/S, ε = Δl/l₀",
      "Délková roztažnost: l = l₀·(1 + α·Δt); Δl = α·l₀·Δt",
      "Objemová roztažnost: V = V₀·(1 + β·Δt); β ≈ 3α",
      "Počet atomů v buňce: prostá: 8×(1/8) = 1; BCC: 8×(1/8)+1 = 2; FCC: 8×(1/8)+6×(1/2) = 4",
      "Energie pružné deformace: W = ½·F·Δl = ½·E·ε²·V",
    ],
    examples: [
      {
        prompt:
          "Ocelový drát délky l₀ = 2 m a průřezu S = 1 mm² je zatížen silou F = 200 N. Jaké je prodloužení? (E_ocel = 210 GPa)",
        solution:
          "σ = F/S = 200/(1·10⁻⁶) = 2·10⁸ Pa = 200 MPa. ε = σ/E = 2·10⁸/(210·10⁹) = 9,52·10⁻⁴. Δl = ε·l₀ = 9,52·10⁻⁴·2 = 1,904·10⁻³ m ≈ 1,9 mm.",
      },
      {
        prompt:
          "Kolik atomů má elementární buňka prostorově středěné kubické mřížky (BCC, např. α-železo)?",
        solution:
          "V rohách krychle je 8 atomů, každý sdílený s 8 sousedními buňkami → 8×(1/8) = 1 atom. Uprostřed je 1 celý atom. Celkem: 1 + 1 = 2 atomy na buňku.",
      },
      {
        prompt:
          "Ocelový most délky l₀ = 100 m se zahřeje z −20 °C na +35 °C. O kolik se prodlouží? (α_ocel = 12·10⁻⁶ K⁻¹)",
        solution:
          "Δt = 35 − (−20) = 55 °C = 55 K. Δl = α·l₀·Δt = 12·10⁻⁶·100·55 = 0,066 m = 6,6 cm.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T19 — Stridavy proud (electricity)
  // ───────────────────────────────────────────────
  {
    id: "19-stridavy",
    number: 19,
    name: "Střídavý proud",
    category: "electricity",
    keywords: [
      "vznik střídavého proudu — rotace závitu v magnetickém poli",
      "okamžité hodnoty: u = U_m·sin(ωt), i = I_m·sin(ωt ± φ)",
      "efektivní hodnoty: U = U_m/√2, I = I_m/√2",
      "obvod s R, L, C — impedance Z",
      "fázový posun, fázorový diagram",
      "činný, jalový a zdánlivý výkon; účiník cosφ",
      "rezonance v sériovém RLC obvodu: ω₀ = 1/√(LC)",
      "trojfázová soustava (hvězda × trojúhelník): U_f = 230 V, U_s = 400 V",
      "transformátor: N₁/N₂ = U₁/U₂",
      "přenos elektrické energie, ztráty na vedení",
    ],
    explanation:
      "Střídavý proud vzniká rotací závitu v magnetickém poli: u = U_m·sin(ωt). Efektivní hodnoty U = U_m/√2 (pro sinusový průběh). V obvodu R, L, C má impedance Z = √(R² + (X_L − X_C)²), kde X_L = ωL a X_C = 1/(ωC). Účinný výkon P = U·I·cosφ. Při rezonanci X_L = X_C, impedance je minimální (Z = R), proud maximální. Trojfázová soustava: napětí fázové 230 V, sdružené 400 V (poměr √3). Transformátor mění napětí: U₁/U₂ = N₁/N₂.",
    formulas: [
      "u = U_m·sin(ωt); U = U_m/√2; I = I_m/√2",
      "X_L = ωL (induktivní reaktance)",
      "X_C = 1/(ωC) (kapacitní reaktance)",
      "Z = √(R² + (X_L − X_C)²) (impedance)",
      "Činný výkon: P = U·I·cosφ",
      "Jalový výkon: Q = U·I·sinφ",
      "Zdánlivý výkon: S = U·I; S² = P² + Q²",
      "Rezonance: ω₀ = 1/√(LC); f₀ = 1/(2π√(LC))",
      "Transformátor: U₁/U₂ = N₁/N₂ = I₂/I₁",
      "Trojfázová: U_sdružené = √3·U_fázové",
    ],
    examples: [
      {
        prompt:
          "Elektromotor má štítkové údaje: 230 V, 5 A, cosφ = 0,8. Jaký je činný výkon?",
        solution:
          "P = U·I·cosφ = 230·5·0,8 = 920 W.",
      },
      {
        prompt:
          "Sériový RLC obvod: R = 100 Ω, L = 0,5 H, C = 20 μF, napájení 230 V / 50 Hz. Určete impedanci a proud.",
        solution:
          "ω = 2π·50 = 314 rad·s⁻¹. X_L = ωL = 314·0,5 = 157 Ω. X_C = 1/(ωC) = 1/(314·20·10⁻⁶) = 1/6,28·10⁻³ ≈ 159,2 Ω. Z = √(100² + (157 − 159,2)²) = √(10 000 + 4,84) ≈ 100,02 Ω. Proud: I = U/Z = 230/100,02 ≈ 2,3 A. Obvod je téměř v rezonanci (X_L ≈ X_C).",
      },
      {
        prompt:
          "Transformátor má na primární cívce N₁ = 1 000 závitů a na sekundární N₂ = 50 závitů. Primární napětí je U₁ = 230 V. Jaké je sekundární napětí?",
        solution:
          "U₂ = U₁·N₂/N₁ = 230·50/1000 = 11,5 V. Jde o transformátor s převodem dolů (step-down).",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T20 — Teorie relativity (modern)
  // ───────────────────────────────────────────────
  {
    id: "20-relativita",
    number: 20,
    name: "Teorie relativity",
    category: "modern",
    keywords: [
      "inerciální a neinerciální vztažné soustavy",
      "Galileův princip relativity, Galileova transformace",
      "Michelsonův-Morleyho experiment (neexistence éteru)",
      "Einsteinovy postuláty STR (1905)",
      "Lorentzova transformace, Lorentzův faktor γ",
      "dilatace času: Δt = γ·Δt₀",
      "kontrakce délek: l = l₀/γ",
      "relativistická hybnost: p = γ·m·v",
      "ekvivalence hmotnosti a energie: E = mc², E₀ = m₀c²",
      "relativistická kinetická energie: E_k = (γ − 1)·m·c²",
    ],
    explanation:
      "Speciální teorie relativity (Einstein, 1905) vychází ze dvou postulátů: 1) fyzikální zákony jsou stejné ve všech inerciálních soustavách, 2) rychlost světla ve vakuu c je konstantní a nezávisí na pohybu zdroje ani pozorovatele. Důsledky: dilatace času (pohybující se hodiny jdou pomaleji), kontrakce délek (pohybující se tyč je kratší ve směru pohybu). Lorentzův faktor γ = 1/√(1 − v²/c²). Hmotnost a energie jsou ekvivalentní: E = mc²; klidová energie E₀ = m₀c².",
    formulas: [
      "γ = 1/√(1 − v²/c²) (Lorentzův faktor)",
      "Dilatace času: Δt = γ·Δt₀ (Δt₀ = vlastní čas)",
      "Kontrakce délek: l = l₀/γ (l₀ = vlastní délka)",
      "Relativistická hybnost: p = γ·m·v",
      "Celková energie: E = γ·m·c²",
      "Klidová energie: E₀ = m·c²",
      "Kinetická energie: E_k = (γ − 1)·m·c²",
      "Relativistické skládání rychlostí: u = (v₁ + v₂)/(1 + v₁v₂/c²)",
      "Vztah energie a hybnosti: E² = (pc)² + (mc²)²",
    ],
    examples: [
      {
        prompt:
          "Mion má vlastní poločas rozpadu τ₀ = 2,2 μs a letí rychlostí v = 0,995c. Jaký je jeho poločas v laboratorní soustavě a jak daleko doletí?",
        solution:
          "γ = 1/√(1 − 0,995²) = 1/√(1 − 0,990) = 1/√0,01 = 10. Poločas v lab: τ = γ·τ₀ = 10·2,2 = 22 μs. Dráha: s = v·τ = 0,995·3·10⁸·22·10⁻⁶ ≈ 6 567 m ≈ 6,6 km.",
      },
      {
        prompt:
          "Jaká je klidová energie elektronu v MeV? (m_e = 9,109·10⁻³¹ kg)",
        solution:
          "E₀ = m_e·c² = 9,109·10⁻³¹ · (3·10⁸)² = 9,109·10⁻³¹ · 9·10¹⁶ = 8,198·10⁻¹⁴ J. V MeV: E₀ = 8,198·10⁻¹⁴ / (1,602·10⁻¹³) ≈ 0,511 MeV.",
      },
      {
        prompt:
          "Elektron má kinetickou energii E_k = 2,5 MeV. Určete jeho rychlost jako násobek c.",
        solution:
          "E₀ = 0,511 MeV. γ = (E_k + E₀)/E₀ = (2,5 + 0,511)/0,511 = 3,011/0,511 ≈ 5,89. Z γ = 1/√(1 − v²/c²): v²/c² = 1 − 1/γ² = 1 − 1/34,7 = 1 − 0,0288 = 0,971. v = c·√0,971 ≈ 0,986c.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T21 — Termodynamicke deje (thermo)
  // ───────────────────────────────────────────────
  {
    id: "21-termo-deje",
    number: 21,
    name: "Termodynamické děje v plynech",
    category: "thermo",
    keywords: [
      "ideální plyn, stavová rovnice pV = NkT = nRT",
      "Boltzmannova konstanta k = 1,381·10⁻²³ J·K⁻¹",
      "vnitřní energie ideálního plynu: U = (i/2)·nRT",
      "1. termodynamický zákon: ΔU = Q + W",
      "izotermický děj (T = konst.): pV = konst.",
      "izobarický děj (p = konst.): V/T = konst.",
      "izochorický děj (V = konst.): p/T = konst.",
      "adiabatický děj (Q = 0): pV^κ = konst.",
      "kruhový (cyklický) děj, Carnotův cyklus, účinnost η",
    ],
    explanation:
      "Stav ideálního plynu popisuje stavová rovnice pV = nRT (n = látkové množství, R = 8,314 J·mol⁻¹·K⁻¹) nebo pV = NkT (N = počet molekul). Vnitřní energie závisí na počtu stupňů volnosti i: U = (i/2)nRT. 1. termodynamický zákon: ΔU = Q + W (změna vnitřní energie = teplo + práce). Speciální děje: izotermický (pV = konst.), izobarický (V/T = konst.), izochorický (p/T = konst.), adiabatický (Q = 0, pVᵏ = konst.). Účinnost cyklu η = W/Q₁; Carnotův limit η_C = 1 − T₂/T₁.",
    formulas: [
      "pV = nRT; R = 8,314 J·mol⁻¹·K⁻¹",
      "pV = NkT; k = 1,381·10⁻²³ J·K⁻¹",
      "1. TD zákon: ΔU = Q + W",
      "Izotermický: pV = konst. (Boyle-Mariotte); W = nRT·ln(V₂/V₁)",
      "Izobarický: V/T = konst. (Gay-Lussac); W = −p·ΔV",
      "Izochorický: p/T = konst.; W = 0, Q = ΔU",
      "Adiabatický: pV^κ = konst.; TV^(κ−1) = konst.",
      "Účinnost: η = |W|/Q₁; η_Carnot = 1 − T₂/T₁",
      "Poissonova konstanta: κ = c_p/c_V; jednoatomový: κ = 5/3, dvouatomový: κ = 7/5",
    ],
    examples: [
      {
        prompt:
          "Motor údajně pracuje s účinností 75 % mezi teplotami varu (373 K) a tuhnutí (273 K) vody. Je to fyzikálně možné?",
        solution:
          "Maximální účinnost (Carnot): η_max = 1 − T₂/T₁ = 1 − 273/373 ≈ 0,268 = 26,8 %. Tvrzená účinnost 75 % > 26,8 % je NEMOŽNÁ — porušovalo by to 2. termodynamický zákon.",
      },
      {
        prompt:
          "V izotermickém ději se 2 mol ideálního plynu při teplotě T = 300 K rozpínají z objemu V₁ = 10 l na V₂ = 30 l. Jakou práci vykonají?",
        solution:
          "Práce při izotermickém ději: W = nRT·ln(V₂/V₁) = 2·8,314·300·ln(30/10) = 4988,4·ln(3) = 4988,4·1,099 ≈ 5 482 J ≈ 5,5 kJ. (Konvence: práce vykonaná plynem je kladná.)",
      },
      {
        prompt:
          "Plyn o počátečním tlaku p₁ = 100 kPa a objemu V₁ = 5 l je adiabaticky stlačen na V₂ = 1 l. Jaký je konečný tlak? (κ = 5/3, jednoatomový plyn)",
        solution:
          "Adiabatický děj: p₁V₁^κ = p₂V₂^κ → p₂ = p₁·(V₁/V₂)^κ = 100·(5/1)^(5/3) = 100·5^(5/3). 5^(5/3) = 5^1·5^(2/3) = 5·(³√25) = 5·2,924 ≈ 14,62. p₂ = 100·14,62 ≈ 1 462 kPa ≈ 1,46 MPa.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T22 — Termodynamika, teplo a skupenske premeny (thermo)
  // ───────────────────────────────────────────────
  {
    id: "22-termodynamika",
    number: 22,
    name: "Termodynamika, teplo a skupenské přeměny",
    category: "thermo",
    keywords: [
      "teplo Q jako forma přenosu energie",
      "měrná tepelná kapacita c: Q = m·c·Δt",
      "kalorimetrická rovnice",
      "skupenství: pevné, kapalné, plynné (+ plazma)",
      "skupenské přeměny: tání/tuhnutí, vypařování/kondenzace, sublimace/desublimace",
      "skupenské teplo: Q = L·m (tání: l_t, vypařování: l_v)",
      "fázový diagram: křivky tání, vypařování, sublimace",
      "trojný bod, kritický bod",
      "sytá a přehřátá pára",
    ],
    explanation:
      "Teplo Q je energie přenesená mezi tělesy různé teploty. Pro zahřátí: Q = m·c·Δt, kde c je měrná tepelná kapacita. Při skupenské přeměně se mění vnitřní struktura látky bez změny teploty; potřebné teplo Q = L·m (L = měrné skupenské teplo). Kalorimetrická rovnice: teplo odevzdané = teplo přijaté. Fázový diagram znázorňuje oblasti stabilních fází v závislosti na tlaku a teplotě; trojný bod je jediné místo koexistence všech tří fází.",
    formulas: [
      "Q = m·c·Δt (ohřev/ochlazení)",
      "Q = L·m (skupenské teplo; l_t = tání, l_v = vypařování)",
      "Kalorimetrická rovnice: m₁·c₁·(t₁ − t) = m₂·c₂·(t − t₂)",
      "Tepelná kapacita tělesa: C = m·c; Q = C·Δt",
      "Clausius-Clapeyronova rovnice: dp/dT = L/(T·ΔV)",
      "Sytá pára: tlak závisí pouze na teplotě",
    ],
    examples: [
      {
        prompt:
          "Olověná střela (c = 130 J·kg⁻¹·K⁻¹, t₀ = 27 °C) narazí rychlostí v = 600 m·s⁻¹ a celá kinetická energie se přemění na vnitřní. Roztaví se? (t_t = 327 °C, l_t = 24,5 kJ·kg⁻¹)",
        solution:
          "E_k/m = ½v² = ½·600² = 180 000 J·kg⁻¹. Teplo na zahřátí na bod tání: Q₁/m = c·Δt = 130·(327 − 27) = 130·300 = 39 000 J·kg⁻¹. Teplo na roztavení: Q₂/m = l_t = 24 500 J·kg⁻¹. Celkem potřeba: 39 000 + 24 500 = 63 500 J·kg⁻¹. Energie 180 000 ≫ 63 500 → ANO, střela se zcela roztaví a zbývající energie (116,5 kJ·kg⁻¹) ji přehřeje.",
      },
      {
        prompt:
          "Do kalorimetru s 200 g vody o teplotě 20 °C vhodíme 50 g ledu o teplotě 0 °C. Jaká bude rovnovážná teplota? (c_v = 4 180 J·kg⁻¹·K⁻¹, l_t = 334 kJ·kg⁻¹)",
        solution:
          "Teplo na roztavení ledu: Q₁ = m_l·l_t = 0,05·334 000 = 16 700 J. Teplo, které může voda odevzdat při ochlazení na 0 °C: Q_max = m_v·c_v·Δt = 0,2·4180·20 = 16 720 J. Q_max ≈ Q₁ → led se právě roztaví, výsledná teplota ≈ 0 °C (přesněji nepatrně nad 0 °C).",
      },
      {
        prompt:
          "Kolik energie je potřeba k přeměně 2 kg ledu o teplotě −10 °C na páru o teplotě 100 °C? (c_led = 2 090 J·kg⁻¹·K⁻¹, l_t = 334 kJ·kg⁻¹, c_voda = 4 180 J·kg⁻¹·K⁻¹, l_v = 2 260 kJ·kg⁻¹)",
        solution:
          "Q₁ = m·c_led·10 = 2·2090·10 = 41 800 J. Q₂ = m·l_t = 2·334 000 = 668 000 J. Q₃ = m·c_voda·100 = 2·4180·100 = 836 000 J. Q₄ = m·l_v = 2·2 260 000 = 4 520 000 J. Celkem: Q = 41 800 + 668 000 + 836 000 + 4 520 000 = 6 065 800 J ≈ 6,07 MJ.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T23 — Veliciny a mereni (modern)
  // ───────────────────────────────────────────────
  {
    id: "23-veliciny",
    number: 23,
    name: "Veličiny a jejich měření",
    category: "modern",
    keywords: [
      "fyzikální veličina X = {X}·[X] (číslo × jednotka)",
      "soustava SI — 7 základních jednotek: m, kg, s, A, K, mol, cd",
      "odvozené jednotky (N, Pa, J, W, C, V, Ω, ...)",
      "rozměrová (dimenzionální) analýza",
      "předpony SI: piko, nano, mikro, mili, kilo, mega, giga, tera",
      "chyby měření: systematické, náhodné, hrubé",
      "absolutní a relativní chyba",
      "aritmetický průměr: x̄ = Σxᵢ/n",
      "směrodatná odchylka a chyba průměru",
    ],
    explanation:
      "Fyzikální veličina je vlastnost, kterou lze měřit; vyjadřuje se jako X = {X}·[X] (číselná hodnota × jednotka). Soustava SI definuje 7 základních jednotek: metr (m), kilogram (kg), sekunda (s), ampér (A), kelvin (K), mol (mol), kandela (cd). Odvozené jednotky vznikají kombinací základních (N = kg·m·s⁻², J = N·m atd.). Každé měření je zatíženo chybou — systematickou (konstantní posunutí) nebo náhodnou (rozptyl hodnot). Výsledek měření se uvádí jako X = x̄ ± s, kde s je chyba průměru.",
    formulas: [
      "X = {X}·[X] (fyzikální veličina = číslo × jednotka)",
      "1 N = 1 kg·m·s⁻²; 1 J = 1 N·m = 1 kg·m²·s⁻²; 1 W = 1 J·s⁻¹",
      "Aritmetický průměr: x̄ = (1/n)·Σxᵢ",
      "Výběrová směrodatná odchylka: s₁ = √(Σ(xᵢ − x̄)²/(n − 1))",
      "Chyba průměru: s = s₁/√n",
      "Absolutní chyba: Δx = |x_měř − x_skut|",
      "Relativní chyba: δ = Δx/x · 100 %",
    ],
    examples: [
      {
        prompt:
          "Převeďte rychlost 72 km·h⁻¹ na m·s⁻¹ a ověřte rozměrovou analýzou.",
        solution:
          "72 km·h⁻¹ = 72 · (1000 m)/(3600 s) = 72/3,6 = 20 m·s⁻¹. Rozměrově: [km·h⁻¹] = [10³ m · (3,6·10³ s)⁻¹] = [m·s⁻¹] — jednotky souhlasí.",
      },
      {
        prompt:
          "Při měření délky tyče byly naměřeny hodnoty: 1,52; 1,54; 1,53; 1,51; 1,55 m. Určete průměr a chybu průměru.",
        solution:
          "x̄ = (1,52 + 1,54 + 1,53 + 1,51 + 1,55)/5 = 7,65/5 = 1,530 m. Odchylky: −0,01; +0,01; 0; −0,02; +0,02. s₁ = √((0,0001 + 0,0001 + 0 + 0,0004 + 0,0004)/4) = √(0,001/4) = √0,00025 = 0,0158 m. Chyba průměru: s = s₁/√n = 0,0158/√5 ≈ 0,007 m. Výsledek: l = (1,530 ± 0,007) m.",
      },
      {
        prompt:
          "Pomocí rozměrové analýzy ověřte, že vztah pro kinetickou energii E_k = ½mv² má rozměr energie.",
        solution:
          "[E_k] = [m]·[v²] = kg·(m·s⁻¹)² = kg·m²·s⁻² = J ✓. Rozměr odpovídá jednotce energie (joule), vztah je rozměrově správný.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T24 — Vlnova optika (optics)
  // ───────────────────────────────────────────────
  {
    id: "24-vlnova-optika",
    number: 24,
    name: "Vlnová optika",
    category: "optics",
    keywords: [
      "vlnová podstata světla, Huygensův princip",
      "koherence, monochromatičnost",
      "interference světla: konstruktivní a destruktivní",
      "Youngův experiment (dvojštěrbina)",
      "ohyb (difrakce) na štěrbině a na mřížce",
      "interference na tenké vrstvě (klínu)",
      "disperze světla, spektrum, rozklad hranolém",
      "polarizace světla: lineární, kruhová",
      "Brewsterův úhel: tg α_B = n₂/n₁",
      "optická dráha, optická dráhový rozdíl",
    ],
    explanation:
      "Vlnová optika vysvětluje jevy, které geometrická optika nedokáže — interferenci, ohyb a polarizaci. Interference: dráhový rozdíl Δd = k·λ → maximum (konstruktivní), Δd = (2k+1)·λ/2 → minimum (destruktivní). Youngův experiment s dvojštěrbinou dokazuje vlnovou povahu světla. Ohyb na štěrbině šířky b: minimum při b·sinθ = k·λ. Polarizace: omezení kmitů E⃗ na jednu rovinu. Při Brewsterově úhlu je odražené světlo zcela lineárně polarizované.",
    formulas: [
      "Interference max: Δd = k·λ (k = 0, 1, 2, ...)",
      "Interference min: Δd = (2k+1)·λ/2",
      "Youngův experiment: Δd = d·sinθ; y_k = k·λ·L/d",
      "Ohyb na štěrbině (min): b·sinθ = k·λ",
      "Optická mřížka (max): d·sinθ = k·λ",
      "Brewsterův úhel: tg α_B = n₂/n₁",
      "Totální odraz: sin α_m = n₂/n₁",
      "Tenká vrstva (max v odrazu): 2n·d = (k + ½)·λ",
    ],
    examples: [
      {
        prompt:
          "Ve Youngově experimentu jsou dvě štěrbiny vzdálené d = 0,5 mm a stínítko je ve vzdálenosti L = 2 m. Jaká je vzdálenost mezi sousedními maximy při osvětlení světlem λ = 550 nm?",
        solution:
          "Δy = λ·L/d = 550·10⁻⁹ · 2 / (0,5·10⁻³) = 1,1·10⁻⁶/5·10⁻⁴ = 2,2·10⁻³ m = 2,2 mm.",
      },
      {
        prompt:
          "Určete Brewsterův úhel pro rozhraní vzduch (n₁ = 1) – sklo (n₂ = 1,5).",
        solution:
          "tg α_B = n₂/n₁ = 1,5/1 = 1,5. α_B = arctg(1,5) ≈ 56,3°. Při dopadu pod tímto úhlem je odražené světlo zcela polarizované.",
      },
      {
        prompt:
          "Na optickou mřížku s mřížkovou konstantou d = 5 μm dopadá monochromatické světlo λ = 500 nm. Pod jakým úhlem leží maximum 1. řádu?",
        solution:
          "d·sinθ = k·λ → sinθ = k·λ/d = 1·500·10⁻⁹/(5·10⁻⁶) = 0,1. θ = arcsin(0,1) ≈ 5,74°.",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // T25 — Zaklady kineticke teorie (thermo)
  // ───────────────────────────────────────────────
  {
    id: "25-kineticka",
    number: 25,
    name: "Základy kinetické teorie",
    category: "thermo",
    keywords: [
      "molekulově-kinetická teorie látek",
      "Brownův pohyb, difúze",
      "model ideálního plynu (bodové molekuly, pružné srážky)",
      "tlak plynu jako důsledek nárazů molekul na stěny",
      "střední kvadratická rychlost: v_kv = √(3kT/m)",
      "střední kinetická energie molekuly: E_k = (3/2)kT",
      "Boltzmannova konstanta k = 1,381·10⁻²³ J·K⁻¹",
      "Maxwellovo-Boltzmannovo rozdělení rychlostí",
      "stupně volnosti, ekvipartiční teorém: ½kT na stupeň volnosti",
      "stavová rovnice ideálního plynu: pV = NkT = nRT",
    ],
    explanation:
      "Kinetická teorie popisuje plyn jako soubor velkého počtu molekul v neustálém chaotickém pohybu. Tlak vzniká nárazy molekul na stěny nádoby. Teplota je mírou střední kinetické energie translačního pohybu molekul: ½m·v_kv² = (3/2)kT. Stavová rovnice pV = NkT = nRT propojuje makroskopické veličiny (p, V, T) s mikroskopickými. Maxwell-Boltzmannovo rozdělení popisuje statistické rozložení rychlostí molekul — nejpravděpodobnější rychlost je menší než střední a ta je menší než kvadratická.",
    formulas: [
      "pV = NkT = nRT; R = 8,314 J·mol⁻¹·K⁻¹; k = R/N_A",
      "Tlak plynu: p = (1/3)·n_V·m·v_kv² (n_V = koncentrace molekul)",
      "Střední kinetická energie molekuly: E_k = (3/2)kT",
      "½m·v_kv² = (3/2)kT → v_kv = √(3kT/m) = √(3RT/M_m)",
      "Nejpravděpodobnější rychlost: v_p = √(2kT/m)",
      "Střední rychlost: v̄ = √(8kT/(πm))",
      "Ekvipartiční teorém: na jeden stupeň volnosti připadá ½kT",
      "Vnitřní energie: U = (i/2)·NkT = (i/2)·nRT",
    ],
    examples: [
      {
        prompt:
          "Jaká je střední kvadratická rychlost molekul kyslíku při teplotě T = 300 K? (M_O₂ = 32 g·mol⁻¹ = 0,032 kg·mol⁻¹)",
        solution:
          "v_kv = √(3RT/M_m) = √(3·8,314·300/0,032) = √(7482,6/0,032) = √(233 831) ≈ 484 m·s⁻¹.",
      },
      {
        prompt:
          "Kolik molekul je v 1 cm³ ideálního plynu při normálních podmínkách (p = 101 325 Pa, T = 273,15 K)?",
        solution:
          "Z pV = NkT: N/V = p/(kT) = 101 325/(1,381·10⁻²³·273,15) = 101 325/3,771·10⁻²¹ ≈ 2,687·10²⁵ m⁻³. V 1 cm³ = 10⁻⁶ m³: N = 2,687·10²⁵·10⁻⁶ ≈ 2,687·10¹⁹ molekul (Loschmidtovo číslo).",
      },
      {
        prompt:
          "Na jakou teplotu je třeba zahřát kyslík (M = 0,032 kg·mol⁻¹), aby střední kvadratická rychlost jeho molekul dosáhla v_kv = 700 m·s⁻¹?",
        solution:
          "Z v_kv = √(3RT/M): T = M·v_kv²/(3R) = 0,032·700²/(3·8,314) = 0,032·490 000/24,942 = 15 680/24,942 ≈ 629 K ≈ 356 °C.",
      },
    ],
  },
];

export function getPhysicsTopicById(id: string): PhysicsTopic | undefined {
  return physicsTopics.find((t) => t.id === id);
}
