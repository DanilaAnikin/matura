import { Book } from "@/lib/types";

export const books: Book[] = [
  {
    id: "moliere-lakomec",
    number: 1,
    title: "Lakomec",
    titleOriginal: "L'Avare",
    author: {
      name: "Molière (Jean-Baptiste Poquelin)",
      nationality: "Francouz",
      lifespan: "1622–1673",
    },
    year: "1668",
    era: "17. století",
    movement: "Klasicismus",
    genre: "Charakterová komedie (satirická komedie)",
    form: "Drama, 5 dějství, próza",
    plot: "Bohatý vdovec Harpagon je chorobně lakomý lichvář, který ovládá celou rodinu svou posedlostí penězi. Jeho syn Kléant miluje chudou Marianu, ale Harpagon si ji chce vzít sám. Dcera Eliška tajně miluje Valéra, který u Harpagona slouží jako správce. Harpagon plánuje provdat Elišku za starého boháče Anselma a Kléanta oženit s bohatou vdovou – vše 'bez věna'. Kléantův sluha Čipera ukradne Harpagonovi jeho poklad (truhlici se zlatem), což Harpagona přivede k šílenství – následuje slavný monolog, kde podezírá sám sebe, obecenstvo, celý svět. Při vyšetřování krádeže se objeví Anselm, který se ukáže být ztraceným otcem Valéra i Mariany. Harpagon souhlasí se svatbami svých dětí, ale jen pod podmínkou, že je nebude muset platit. Dostane zpět svou truhlici a je spokojen.",
    characters: [
      {
        name: "Harpagon",
        description:
          "Hlavní hrdina, starý vdovec a lichvář. Chorobně lakomý, podezíravý, bezcitný k vlastním dětem. Peníze jsou pro něj víc než život. Jeho jméno symbolizuje hrabivce.",
      },
      {
        name: "Kléant (Cléante)",
        description:
          "Harpagonův syn, mladý a marnotratný. Zamilovaný do Mariany. Kvůli otcově lakotě si musí půjčovat peníze – paradoxně od svého otce-lichváře.",
      },
      {
        name: "Eliška (Élise)",
        description:
          "Harpagonova dcera, zamilovaná do Valéra. Bojí se otce, ale nakonec se vzepře.",
      },
      {
        name: "Valér (Valère)",
        description:
          "Správce v Harpagonově domě. Podlézá Harpagonovi, aby mohl být nablízku Elišce. Ve skutečnosti je šlechtic, ztracený syn Anselma.",
      },
      {
        name: "Mariana",
        description:
          "Chudá dívka, stará se o nemocnou matku. Miluje Kléanta, ale má si vzít Harpagona. Je Anselmova dcera.",
      },
      {
        name: "Čipera (La Flèche)",
        description:
          "Kléantův sluha, mazaný a inteligentní. Ukradne Harpagonovi truhlici s pokladem.",
      },
      {
        name: "Anselm",
        description:
          "Bohatý šlechtic, ve skutečnosti otec Valéra a Mariany. Deus ex machina – rozuzlí děj. Je štědrý, opak Harpagona.",
      },
    ],
    themes: [
      "Chorobná lakota ničící lidské vztahy",
      "Peníze jako nejvyšší hodnota",
      "Generační konflikt (otec vs. děti)",
      "Sňatky z rozumu vs. z lásky",
      "Pokrytectví a intriky",
    ],
    style:
      "Klasicistní drama dodržující tři jednoty (místo, čas, děj). Hra je psána v próze (u komedie přípustné, ale novátorské). Situační komika a rychlé dialogy. Stichomythie (rychlé střídání replik). Hyperbola a ironie v dialozích. Rozlišení postav mluvou: Harpagon mluví vznešeji, služebnictvo (Čipera) používá lidovější výrazivo.",
    recognitionHints: [
      "Postava chorobně lakomého starce, který šupluje statek",
      "Slavný monolog o ukradené truhlici – 'Zloděj! Vražda! Spravedlnost!'",
      "Syn a otec se ucházejí o tutéž ženu",
      "Fráze 'bez věna!' opakující se v dialozích",
      "Inspirace antickou hrou Komedie o hrnci od Plauta",
    ],
    scenes: [
      "Harpagon zjistí ztrátu truhlice a běduje před publikem, podezírá sám sebe i diváky – 'Zloděj! Spravedlnost! Chyťte ho!'",
      "Otec a syn se hádají o lásku k téže ženě (Marianě) – ani jeden neví, že ten druhý ji taky miluje",
      "Frosina přesvědčuje Harpagona, že Mariana je výhodná nevěsta – chudá a skromná",
      "Anselm se ukáže být otcem Valéra i Mariany – deus ex machina rozuzlí celý děj",
    ],
    trivia:
      "Molière se inspiroval antickou hrou Komedie o hrnci od římského autora Plauta. Hra vznikla za vlády Ludvíka XIV. (Krále Slunce) v období francouzského absolutismu. Molière zemřel krátce po představení své hry Zdravý nemocný.",
  },
  {
    id: "moliere-tartuffe",
    number: 2,
    title: "Tartuffe",
    titleOriginal: "Tartuffe ou L'Imposteur",
    author: {
      name: "Molière (Jean-Baptiste Poquelin)",
      nationality: "Francouz",
      lifespan: "1622–1673",
    },
    year: "1664 (premiéra), 1669 (povolen)",
    era: "17. století",
    movement: "Klasicismus",
    genre: "Satirická komedie (charakterová komedie)",
    form: "Veršované drama v alexandrínu, 5 dějství",
    plot: "Pokrytec Tartuffe se vetře do domu měšťana Orgona, kterého očaruje předstíranou zbožností. Orgon a jeho matka paní Pernellová mu bezmezně obdivují, zbytek rodiny ho nenávidí a prokoukl ho. Orgon chce provdat svou dceru Marianu za Tartuffa (i když ta miluje Valéra) a chce mu odkázat majetek. Syn Damis přistihne Tartuffa, jak svádí Orgonovu ženu Elmíru, ale Orgon věří Tartuffovi, syna vydědí a přepíše dům na Tartuffa. Elmíra nastražen past – Orgon se schová pod stůl a slyší, jak Tartuffe svádí jeho ženu a pomlouvá ho. Orgon prohlédne, ale je pozdě – Tartuffe ho vyhazuje z vlastního domu a udává králi kvůli kompromitujícím materiálům. Zásah shůry (deus ex machina): králův zmocněnec zatýká Tartuffa a vrací majetek Orgonovi.",
    characters: [
      {
        name: "Tartuffe",
        description:
          "Pokrytec, podvodník, příživník. Předstírá extrémní zbožnost, aby získal moc a majetek. Je bezskrupulózní, chlípný (svádí hostitelovu ženu) a mstivý.",
      },
      {
        name: "Orgon",
        description:
          "Bohatý měšťan, hlava rodiny. Naivní, zmanipulovaný, bigotní. Věří Tartuffovi víc než vlastní rodině. Symbolizuje slepou poslušnost.",
      },
      {
        name: "Elmíra",
        description:
          "Orgonova manželka (druhá). Rozumná, klidná, věrná. Právě ona demaskuje Tartuffa nastražením pasti.",
      },
      {
        name: "Dorina",
        description:
          "Komorná. Prostořeká, odvážná, ztělesňuje zdravý selský rozum (vox populi). Nebojí se pánovi oponovat.",
      },
      {
        name: "Mariana",
        description:
          "Orgonova dcera, tichá, poslušná, miluje Valéra. Má být provdána za Tartuffa.",
      },
      {
        name: "Damis",
        description:
          "Orgonův syn, horkokrevný, impulzivní. Přistihne Tartuffa, ale otec mu nevěří.",
      },
      {
        name: "Kléant (Cléante)",
        description:
          "Elmířin bratr, hlas rozumu a umírněnosti. Mluvčí autorových názorů.",
      },
      {
        name: "Paní Pernellová",
        description:
          "Orgonova matka, slepě věří Tartuffovi až do úplného konce.",
      },
    ],
    themes: [
      "Pokrytectví a předstíraná zbožnost",
      "Náboženský fanatismus a slepá důvěřivost",
      "Manipulace a zneužití důvěry",
      "Střet zdravého rozumu s fanatismem",
      "Rozvrat rodiny vetřelcem",
    ],
    style:
      "Veršované drama v alexandrínu (dvanáctislabičný verš s předělem po 6. slabice), rým sdružený (AABB). Ironie a sarkasmus zejména v Dořininých poznámkách. Oxymóron (zbožná slova vs. hříšné činy). Hyperbola v popisu Tartuffovy 'svatosti'. Hra vyvolala skandál a byla 5 let zakázána církví.",
    recognitionHints: [
      "Jméno 'Tartuffe' (synonymum pro pokrytce v češtině i francouzštině)",
      "Scéna se schovaným manželem pod stolem",
      "Alexandrín (12 slabik) – veršovaná hra",
      "Fráze 'Ukryjte ňadra, jež nemohu spatřit'",
      "Hra zakázaná církví na 5 let",
    ],
    scenes: [
      "Orgon na zprávu o nemoci ženy odpoví 'A Tartuffe?' – slepota lásky k podvodníkovi",
      "Tartuffe se snaží svést Elmíru, zatímco Orgon je schovaný pod stolem a všechno slyší",
      "Králův důstojník zatýká Tartuffa namísto Orgona – deus ex machina (oslava krále Ludvíka XIV.)",
      "Damis přistihne Tartuffa a žaluje, ale otec mu nevěří a vydědí ho",
    ],
    trivia:
      "Hra vyvolala obrovský skandál. Byla 5 let zakázána na nátlak církve (Společnost svaté svátosti). Molière ji musel několikrát přepsat, než ji král povolil. Dílo je psáno ve verších na rozdíl od Lakomce, který je v próze.",
  },
  {
    id: "goethe-werther",
    number: 3,
    title: "Utrpení mladého Werthera",
    titleOriginal: "Die Leiden des jungen Werthers",
    author: {
      name: "Johann Wolfgang von Goethe",
      nationality: "Němec",
      lifespan: "1749–1832",
    },
    year: "1774",
    era: "Konec 18. století",
    movement: "Preromantismus / Sturm und Drang (Bouře a vzdor)",
    genre: "Epistolární (dopisový) román",
    form: "Próza ve formě dopisů, epika",
    plot: "Citlivý mladý muž Werther přijíždí na venkov (Wahlheim), kochá se přírodou a seznamuje se s Lottou na plese. Zamiluje se do ní, ačkoliv ví, že je zasnoubena s Albertem. Trpí nenaplněnou láskou. Na radu přítele Wilhelma odjíždí, aby zapomněl. Pokusí se pracovat v úřadě, ale narazí na omezující společenské konvence a maloměšťáctví. Vrací se za Lottou, která je už provdána za Alberta. Propadá depresím, žárlí, jeho stav se zhoršuje. Navštíví Lottu, vyzná jí lásku, ona ho odmítne (i když k němu něco cítí). Werther si vypůjčí od Alberta pistole a spáchá sebevraždu. Závěrečnou část ('Zpráva vydavatele') píše fiktivní vydavatel, protože hrdina je mrtvý a nemůže psát.",
    characters: [
      {
        name: "Werther",
        description:
          "Mladý, vzdělaný, extrémně citlivý a sentimentální muž. Miluje přírodu a umění. Řídí se pouze citem, což ho vede do záhuby. Typický hrdina hnutí Sturm und Drang. Nesnáší společenské přetvářky.",
      },
      {
        name: "Lotta (Charlotta)",
        description:
          "Krásná, milá, ušlechtilá dívka. Po smrti matky se stará o sourozence. Má Werthera ráda jako přítele, ale ctí závazek k Albertovi.",
      },
      {
        name: "Albert",
        description:
          "Lottin snoubenec (později manžel). Protipól Werthera – racionální, klidný, spolehlivý, pragmatický, ale poněkud nudný a citově chladnější.",
      },
      {
        name: "Wilhelm",
        description:
          "Adresát dopisů, Wertherův přítel. V ději nevystupuje, jen 'naslouchá'.",
      },
    ],
    themes: [
      "Nenaplněná tragická láska",
      "Střet citlivého jedince s chladnými společenskými konvencemi",
      "Světobol (Weltschmerz)",
      "Kult přírody a citu",
      "Sebevražda jako únik",
      "Konflikt srdce a rozumu",
    ],
    style:
      "Román v dopisech (epistolární). Větší část v ich-formě (dopisy Werthera), závěr v er-formě (Zpráva vydavatele). Jazyk je citově zabarvený, expresivní. Věty jsou často zvolací, nedokončené (apoziopeze), plné pomlček. Metafory přírodních jevů pro duševní stavy. Popisy přírody korespondují s náladou: jaro/léto = naděje, podzim/zima = deprese. Homér vs. Ossian – změna četby symbolizuje změnu psychiky.",
    recognitionHints: [
      "Forma dopisů jednoho pisatele – adresát neodpovídá",
      "Motiv sebevraždy kvůli nenaplněné lásce",
      "Modrý frak a žlutá vesta (wertherská horečka)",
      "Hrdina se zastřelí pistolemi, které si půjčil od soka",
      "Autobiografické prvky – Goethe a Charlotta Buffová",
    ],
    scenes: [
      "Werther a Lotta se poprvé setkávají na plese – oba citují Klopstocka a jsou si okamžitě blízcí",
      "Werther čte Lottě Ossiana – atmosféra se mění z jarně optimistické na podzimně depresivní",
      "Werther se zastřelí Albertovými pistolemi v noci – nalezen ráno, Lotta je zdrcena, Albert stojí 'bez pohnutí'",
    ],
    trivia:
      "Dílo se stalo bestsellerem a vyvolalo 'wertherskou horečku' – módu modrého fraku a žluté vesty a vlnu sebevražd. Goethe se inspiroval svou nenaplněnou láskou k Charlottě Buffové a sebevraždou svého kolegy Jerusalema. Další díla: Faust, Král duchů, Ifigenie na Tauridě.",
  },
  {
    id: "puskin-onegin",
    number: 4,
    title: "Evžen Oněgin",
    titleOriginal: "Jevgenij Oněgin",
    author: {
      name: "Alexandr Sergejevič Puškin",
      nationality: "Rus",
      lifespan: "1799–1837",
    },
    year: "1825–1832",
    era: "1. polovina 19. století",
    movement: "Ruský romantismus (s prvky realismu)",
    genre: "Román ve verších",
    form: "Lyricko-epika, veršovaný román, 8 hlav",
    plot: "Mladý šlechtic Evžen Oněgin je znuděný životem petrohradské smetánky. Zdědí statek na venkově, kde se seznamuje s mladým básníkem Vladimírem Lenským a skrze něj s rodinou Larinových – vdovou a dcerami Olgou a Taťánou. Taťána se do Oněgina zamiluje a napíše mu milostný dopis. Oněgin ji chladně odmítne a poučí ji ('učte se ovládat'). Na oslavách Taťániných jmenin Oněgin z nudy flirtuje s Olgou (snoubenkou Lenského). Žárlivý Lenský ho vyzve na souboj. Oněgin Lenského zabije. Otřesen odjíždí do ciziny. Taťána odjíždí do Moskvy, kde se provdá za staršího generála. Po letech se Oněgin vrací do Petrohradu, na plese potkává Taťánu – nyní vznešenou dámu – a zamiluje se do ní. Píše jí dopis. Taťána ho neodmítá pro nedostatek citu (stále ho miluje), ale z morálních zásad: 'Já vás mám ráda... však jinému jsem dána a budu mu věrná po celý čas.' Oněgin zůstává sám.",
    characters: [
      {
        name: "Evžen Oněgin",
        description:
          "Typ tzv. zbytečného člověka. Vzdělaný, chytrý, bohatý, ale znuděný, bez cíle, skeptický a cynický. Nedokáže udělat štěstí sobě ani jiným. Pohrdá společností, ale je jejím produktem.",
      },
      {
        name: "Taťána Larinová",
        description:
          "Romantická hrdinka, citlivá, upřímná, sečtělá, uzavřená. Představuje mravní ideál ruské ženy (věrnost, zodpovědnost). Prochází proměnou z naivní dívky v hrdou dámu.",
      },
      {
        name: "Vladimír Lenský",
        description:
          "Mladý básník, snílek, romantik. Opak Oněgina (nadšený, naivní). Jeho zbytečná smrt symbolizuje střet idealismu s tvrdou realitou.",
      },
      {
        name: "Olga Larinová",
        description:
          "Sestra Taťány. Veselá, hezká, ale povrchní a nestálá. Rychle na Lenského zapomene.",
      },
    ],
    themes: [
      "Hledání smyslu života – zbytečný člověk",
      "Nenaplněná láska",
      "Střet jedince se společností",
      "Ztráta iluzí",
      "Zrcadlení – symetrické odmítání",
      "Věrnost a zodpovědnost vs. vášeň",
    ],
    style:
      "Oněginská strofa – 14 veršů (čtyřstopý jamb), rýmové schéma: a-b-a-b c-c-d-d e-f-f-e g-g (střídání rýmu střídavého, sdruženého a obkročného). Lyrické odbočky autora (úvahy o životě, lásce, literatuře). Autor (Puškin) vstupuje do děje, oslovuje čtenáře a o Oněginovi mluví jako o svém známém. Bohatá metaforika, přirovnání, ironie v popisu společnosti. Princip zrcadlení: 1. část – Taťána píše, Oněgin odmítá; 2. část – Oněgin píše, Taťána odmítá.",
    recognitionHints: [
      "Oněginská strofa (14 veršů, specifické rýmové schéma)",
      "Dopis Taťány Oněginovi a naopak – zrcadlová kompozice",
      "Souboj, ve kterém Oněgin zabije Lenského",
      "Slavný citát 'Já vás mám ráda... však jinému jsem dána'",
      "Typ 'zbytečného člověka' – inspirace Byronovou Poutí Childe Harolda",
    ],
    scenes: [
      "Taťána píše Oněginovi milostný dopis – klíčový moment celého díla",
      "Oněgin chladně odmítá Taťánu: 'Učte se ovládat'",
      "Souboj Oněgina s Lenským – zbytečná smrt mladého básníka",
      "Závěrečná scéna: Taťána odmítá Oněgina z morálních zásad, ačkoliv ho stále miluje",
    ],
    trivia:
      "Puškin je považován za zakladatele moderní ruské literatury a jazyka. Sám zemřel tragicky v souboji – stejně jako Lenský v jeho díle. Dílo bylo inspirováno Byronovou Poutí Childe Harolda. Další díla: Piková dáma, Kapitánská dcerka, Boris Godunov.",
  },
  {
    id: "gogol-revizor",
    number: 5,
    title: "Revizor",
    titleOriginal: "Revizor",
    author: {
      name: "Nikolaj Vasiljevič Gogol",
      nationality: "Rus (ukrajinského původu)",
      lifespan: "1809–1852",
    },
    year: "1836",
    era: "1. polovina 19. století",
    movement: "Kritický realismus",
    genre: "Satirická komedie",
    form: "Drama, 5 dějství, próza",
    plot: "Hejtman oznamuje úředníkům, že do města míří revizor z Petrohradu. Ve městě panuje nepořádek a korupce, všichni mají strach. Statkáři Bobčinskij a Dobčinskij v hostinci narazí na Chlestakova – bezvýznamného úředníčka, který prohrál peníze – a mylně ho považují za revizora. Hejtman mu vnutí úplatek, Chlestakov postupně chápe svou roli a začíná ji hrát. Nechá se hostit, půjčuje si peníze, flirtuje s hejtmanovou ženou i dcerou. Zasnoubí se s hejtmanovou dcerou. Na radu sluhy Osipa rychle odjíždí pod záminkou. Před odjezdem píše dopis příteli novináři, kde se všem vysmívá. Poštmistr ze zvědavosti otevře dopis a přečte ho přede všemi. Vychází najevo, že Chlestakov byl podvodník. Do toho přichází četník a oznamuje příjezd skutečného revizora. Následuje proslulá 'němá scéna'.",
    characters: [
      {
        name: "Ivan Alexandrovič Chlestakov",
        description:
          "Bezvýznamný petrohradský úředník, marnotratný. Není promyšlený podvodník – jen využívá hlouposti ostatních. Má bujnou fantazii a ve svých lžích začíná věřit sám sobě.",
      },
      {
        name: "Hejtman (Skvoznik-Dmuchanovskij)",
        description:
          "Hlava města. Zkušený, autoritativní, ale zkorumpovaný a omezený. Bere úplatky jako samozřejmost. Má panický strach z nadřízených.",
      },
      {
        name: "Anna Andrejevna",
        description:
          "Hejtmanova žena. Zvědavá, koketní, provinční husička, touží po životě v Petrohradě.",
      },
      {
        name: "Marie Antonovna",
        description:
          "Hejtmanova dcera, do které se Chlestakov 'zasnoubí'. Stejná provinční touha po lepším.",
      },
      {
        name: "Osip",
        description:
          "Chlestakovův sluha. Chytřejší než pán, pragmatický, drsný. Donutí Chlestakova včas odjet.",
      },
      {
        name: "Bobčinskij a Dobčinskij",
        description:
          "Místní statkáři, drbny. Hybatelé děje – oni rozšíří zprávu o revizorovi. Mluví jeden přes druhého.",
      },
    ],
    themes: [
      "Kritika ruské byrokracie a úplatkářství",
      "Korupce a hloupost",
      "Podlézavost a pokrytectví",
      "Strach jako hybná síla",
      "Omyl a záměna osob (qui pro quo)",
      "Nastavení zrcadla společnosti",
    ],
    style:
      "Satirická komedie v próze. Děj vystavěn na principu qui pro quo (záměna osob/nedorozumění). Diferenciace jazyka: úředníci používají byrokratický slang, Chlestakov mluví 'petrohradsky' ale plácá nesmysly, Osip mluví lidově. Mluvící jména v originále (Ljapkin-Ťapkin = 'halabala', Držimorda = 'drž hubu'). Motto: 'Nenadávej na zrcadlo, když máš křivou hubu.' Závěrečná němá scéna.",
    recognitionHints: [
      "Slavná 'němá scéna' na konci – všichni strnou při zprávě o skutečném revizorovi",
      "Motiv záměny – bezvýznamného člověka považují za revizora",
      "Motto: 'Nenadávej na zrcadlo, když máš křivou hubu'",
      "Chlestakovův monolog, kde se chlubí vymyšleným vlivem",
      "Námět Gogolovi údajně poskytl Puškin",
    ],
    scenes: [
      "Hejtman oznamuje: 'Přijíždí revizor inkognito!' – panika mezi úředníky",
      "Chlestakovův monolog, kde lže o svém vlivu v Petrohradě a všichni mu věří",
      "Poštmistr otevře dopis a čte ho přede všemi – odhalení podvodu",
      "Závěrečná němá scéna – četník oznamuje příjezd skutečného revizora, všichni strnou",
    ],
    trivia:
      "Námět Gogolovi údajně poskytl A. S. Puškin. Gogol po premiéře (1836) a vlně kritiky odjel zklamán do ciziny. Historický kontext: Carské Rusko za vlády Mikuláše I. – doba tuhé cenzury, policejního státu a rozbujené byrokracie. Další díla: Mrtvé duše, Petrohradské povídky (Plášť).",
  },
  {
    id: "macha-maj",
    number: 6,
    title: "Máj",
    titleOriginal: undefined,
    author: {
      name: "Karel Hynek Mácha",
      nationality: "Čech",
      lifespan: "1810–1836",
    },
    year: "1836",
    era: "1. polovina 19. století (národní obrození, 3. fáze)",
    movement: "Romantismus",
    genre: "Lyricko-epická báseň (skladba)",
    form: "Poezie, 4 zpěvy a 2 intermezza",
    plot: "1. zpěv: Slavná lyrická oslava májové přírody ('Byl pozdní večer – první máj...'). Jarmila čeká u jezera na Viléma. Místo něj připluje posel se zprávou, že Vilém je ve vězení a zítra bude popraven za vraždu svého otce (který byl Jarmiliným svůdcem). Jarmila páchá sebevraždu skokem do jezera. 2. zpěv: Vilém ve vězení přemítá o svém osudu, o vině (cítí se nevinný), o posmrtném životě (nevěří v něj – 'nicota', 'prázdno'). 1. intermezzo: Půlnoční popraviště, duchové a přírodní síly se připravují na pohřeb. 3. zpěv: Poprava Viléma. Vilém se loučí s krajinou ('kolébko má i hrobe můj'). Příroda s ním soucítí. Po setnutí hlavy je tělo vpleteno do kola. 2. intermezzo: Nářek loupežníků nad ztrátou vůdce. 4. zpěv: S odstupem času (7 let) přichází na místo poutník (vypravěč – autor). Vidí kostlivce v kole. Ztotožňuje se s tragédií ('Hynku! – Viléme!! – Jarmilo!!!').",
    characters: [
      {
        name: "Vilém",
        description:
          "Typicky romantický hrdina (rozervanec). Vůdce loupežníků ('strašný lesů pán'). Vyděděnec společnosti. Zabil svůdce své milé, aniž věděl, že je to jeho otec. Je ateista – jeho tragédie je v tom, že nevěří v posmrtný život, vidí jen nicotu.",
      },
      {
        name: "Jarmila",
        description:
          "Pasivní postava, oběť osudu. Miluje Viléma, neunese hanbu a smutek, páchá sebevraždu skokem do jezera.",
      },
      {
        name: "Poutník (vypravěč)",
        description:
          "Zadumčivý, osamělý, nachází pochopení v příběhu Viléma. Ztotožňuje se s ním ve 4. zpěvu.",
      },
      {
        name: "Příroda",
        description:
          "Vystupuje téměř jako samostatná postava – je personifikována, soucítí s hrdinou.",
      },
    ],
    themes: [
      "Tragická láska",
      "Vina a trest",
      "Strach z nicoty a smrti",
      "Konflikt jedince s osudem",
      "Kontrast krásy přírody a lidského utrpení",
      "Existenciální úvahy o smyslu bytí",
    ],
    style:
      "Jambický verš (vzestupný rytmus) – v české poezii té doby novátorské. Hudebnost (eufonie) – hromadění samohlásek k navození temné atmosféry ('temná noci, temná noci'). Klíčový prostředek: oxymóron (protimluv) – 'mrtvé milenky cit', 'zbortěné harfy tón', 'světlo mrtvé'. Metafora, epiteton, personifikace. Kontrasty: světlo/tma, život/smrt, krása přírody/lidská tragédie. Převažuje lyrika nad epikou.",
    recognitionHints: [
      "Začátek 'Byl pozdní večer – první máj...'",
      "Oxymórony: 'mrtvé milenky cit', 'zbortěné harfy tón'",
      "Zvolání 'Hynku! – Viléme!! – Jarmilo!!!'",
      "Okolí hradu Bezděz a jezera (dnes Máchovo jezero)",
      "4 zpěvy a 2 intermezza",
      "Motiv otcovraždy",
    ],
    scenes: [
      "Slavná lyrická oslava májové přírody – 'Byl pozdní večer – první máj...'",
      "Vilém ve vězení přemítá o nicotě a strachu z neexistence po smrti",
      "Poprava Viléma – loučí se s krajinou: 'kolébko má i hrobe můj'",
      "Poutník (autor) přichází na popraviště po 7 letech a zvolává: 'Hynku! – Viléme!! – Jarmilo!!!'",
    ],
    trivia:
      "V době vydání (1836) byl Máj odmítnut kritikou (J. K. Tyl, K. J. Erben) – vyčítali mu nedostatek vlastenectví a pesimismus. Oceněn byl až generací Májovců (1858). Mácha zemřel velmi mladý (26 let) krátce před svatbou. Kontext: Doba národního obrození (3. fáze) – zatímco obrozenci chtěli literaturu výchovnou, Mácha přinesl umění existenciální. Inspirace Byronem.",
  },
  {
    id: "erben-kytice",
    number: 7,
    title: "Kytice z pověstí národních",
    titleOriginal: undefined,
    author: {
      name: "Karel Jaromír Erben",
      nationality: "Čech",
      lifespan: "1811–1870",
    },
    year: "1853",
    era: "Polovina 19. století (národní obrození)",
    movement: "Romantismus (český, inspirovaný folklórem)",
    genre: "Sbírka balad",
    form: "Poezie, lyricko-epika, 13 básní",
    plot: "Sbírka 13 balad vycházejících z lidových pověstí. Kytice (úvodní): matka zemře, její duše se vtělí do mateřídoušky – symbol vlastenectví. Poklad: matka na Velký pátek vidí otevřenou skálu s pokladem, pro zlato zapomene na dítě. Svatební košile: dívka se rouhá a prosí o návrat milého, i kdyby byl mrtvý – umrlec si pro ni přijde. Polednice: matka v rozčilení přivolá na dítě Polednici, dítě je matkou udušeno. Vodník: dcera neposlechne matku, jde k jezeru, vodník ji stáhne, má s ním dítě. Zlatý kolovrat: matka s dcerou zabijí nevlastní dceru Dorničku, zločin je odhalen kouzelným kolovratem. Každá báseň řeší téma viny a trestu – trest je často neodvratný a krutý.",
    characters: [
      {
        name: "Matka a dítě",
        description:
          "Nejsilnější pouto, ale i zdroj tragédie. Opakující se archetyp ve více básních.",
      },
      {
        name: "Nadpřirozené bytosti (Vodník, Polednice)",
        description:
          "Nejsou zlé samy o sobě, ale reprezentují přísný přírodní řád, který člověk nesmí narušit.",
      },
      {
        name: "Panna (Svatební košile)",
        description:
          "Dívka, která se rouhá a je potrestána návštěvou umrlce. Zachrání se modlitbou.",
      },
      {
        name: "Dornička (Zlatý kolovrat)",
        description:
          "Nevlastní dcera zabitá matkou a sestrou. Její zločin je odhalen kouzelným kolovratem.",
      },
    ],
    themes: [
      "Vina a trest (neodvratný, často až neúměrný provinění)",
      "Porušení mravního zákona či řádu přírody",
      "Matka a dítě – nejsilnější pouto",
      "Nadpřirozeno zasahující do lidského světa",
      "Osud a nemožnost uniknout mu",
      "Vlastenectví (úvodní báseň Kytice)",
    ],
    style:
      "Objektivní vypravěč – nehodnotí, nezasahuje do děje, pouze konstatuje neodvratnost osudu. Zrcadlová (osová) kompozice – básně jsou řazeny promyšleně, zrcadlí se témata. Pravidelný rytmický verš připomínající lidovou píseň. Zvukomalba (onomatopoeia). Gnómičnost – stručnost, hutnost vyjádření. Opakování, refrény, anafora. Dějový spád – popis je nahrazen dějem. Erben je velmi úsporný, žádná slova navíc.",
    recognitionHints: [
      "Básně o vině a trestu – Polednice, Vodník, Svatební košile",
      "Nadpřirozené bytosti z české lidové tradice",
      "Zrcadlová kompozice sbírky",
      "Verš připomínající lidovou píseň",
      "Slavný obraz: 'A na topole podle skal / zelený mužík zatleskal' (Vodník)",
      "Motiv matky a dítěte",
    ],
    scenes: [
      "Polednice: matka v hněvu přivolá Polednici na zlobivé dítě – když otec přijde, dítě je mrtvé",
      "Vodník: vodník hází zabitou hlavu dítěte na dveře matky – střet dvou mateřských lásek",
      "Svatební košile: umrlec vleče dívku na hřbitov, ona se zachrání modlitbou",
      "Poklad: matka na Velký pátek zapomene na dítě ve skále kvůli zlatu",
    ],
    trivia:
      "Kytice je Erbenovým celoživotním dílem (psal ji téměř 20 let). Sbíral pohádky a písně (Prostonárodní české písně a říkadla). Srovnání s Máchou: Mácha (Máj) je subjektivní a bouří se, Erben (Kytice) je objektivní a řád ctí. Kontext: Národní obrození – Kytice posilovala národní sebevědomí (důkaz starobylosti a mravní síly národa).",
  },
  {
    id: "havlicek-krest",
    number: 8,
    title: "Křest svatého Vladimíra",
    titleOriginal: undefined,
    author: {
      name: "Karel Havlíček Borovský",
      nationality: "Čech",
      lifespan: "1821–1856",
    },
    year: "1854 (psáno v Brixenu, vyšlo posmrtně)",
    era: "Polovina 19. století (národní obrození, 4. fáze)",
    movement: "Realismus (počátky českého realismu)",
    genre: "Satirická báseň (travestie)",
    form: "Poezie, epika, 10 zpěvů (nedokončeno)",
    plot: "Car Vladimír chce, aby mu bůh Perun na jeho svátek zahřměl na počest. Perun to odmítne, stěžuje si na malé oběti. Vladimír dá Peruna zatknout, soudit (vojenský soud) a odsoudit k smrti utopením v Dněpru. Lid je spokojený, že nemusí platit desátky. Car ale zjišťuje, že se mu lidé bez boha špatně ovládají (sedlák nechtěl robotovat). Vladimír vypíše výběrové řízení na nového boha. Sjíždějí se zástupci různých církví (jezuité, pravoslavní, muslimové, židé) a vychvalují svou víru. Dílo je nedokončené (končí konkurzem).",
    characters: [
      {
        name: "Car Vladimír",
        description:
          "Despotický vladce, hlupák, omezenec. Představuje absolutistického panovníka (narážka na Františka Josefa I.). Náboženství bere jen jako nástroj moci.",
      },
      {
        name: "Bůh Perun",
        description:
          "Slovanský bůh hromu. V Havlíčkově podání chudák, který má hlad a nechce sloužit zadarmo. Symbol zdravého selského rozumu a vzdoru proti vrchnosti.",
      },
      {
        name: "Jezuité",
        description:
          "Představeni jako největší chytráci a patolízalové při konkurzu na nového boha.",
      },
      {
        name: "Lid",
        description:
          "Prostý, utlačovaný, raduje se, když nemá pána nad sebou.",
      },
    ],
    themes: [
      "Satira na absolutismus (neomezená vláda jedince)",
      "Kritika církve jako nástroje k ovládání lidí",
      "Zneužívání náboženství pro politické účely",
      "Pokrytectví moci",
      "Policejní stát",
    ],
    style:
      "Kontrast mezi vznešeným tématem (křest, bohové) a nízkým, vulgárním zpracováním (travestie). Lidový, jednoduchý jazyk (psáno pro prostý lid). Vulgarismy záměrně ke snížení vážnosti tématu. Makaronismy (míchání češtiny a latiny – 'Oremus, oremus...'). Epigramatičnost – verše jsou úderné, pointované. Aktualizace – do historického děje vkládá moderní prvky (policie, žandarmy, telegraf), čímž podrývá narážku na současnost. Ironický vypravěč.",
    recognitionHints: [
      "Perun je souzen a utopen v Dněpru",
      "Konkurz na nového boha – různé církve se předhánějí",
      "Vulgarismy a makaronismy (latina + čeština)",
      "Alegorie na Rakousko-Uhersko 19. století, ale děj v Kyjevské Rusi",
      "Havlíček psal dílo ve vyhnanství v Brixenu",
    ],
    scenes: [
      "Perun odmítne zahřmět carovi na počest a stěžuje si na malé oběti",
      "Vojenský soud nad Perunem a jeho poprava utopením v Dněpru",
      "Konkurz na nového boha – jezuité, pravoslavní, muslimové se předhánějí",
      "Lid se raduje ze zrušení desátků – ale car zjišťuje, že bez boha lidi neovládne",
    ],
    trivia:
      "Napsáno během nuceného vyhnanství v Brixenu (1851–1855). Nesmělo vyjít tiskem, šířilo se v opisech. Inspirace: Starý ruský letopis (Nestorův letopis) o pokřtění Rusi. Další díla z Brixenu: Tyrolské elegie, Král Lávra. Kontext: Bachův absolutismus – doba cenzury a pronásledování vlastenců.",
  },
  {
    id: "havlicek-tyrolske-elegie",
    number: 9,
    title: "Tyrolské elegie",
    titleOriginal: undefined,
    author: {
      name: "Karel Havlíček Borovský",
      nationality: "Čech",
      lifespan: "1821–1856",
    },
    year: "1852 (psáno v Brixenu, vydáno až 1861)",
    era: "Polovina 19. století (národní obrození)",
    movement: "Realismus (s prvky satiry)",
    genre: "Satirická báseň (autobiografická)",
    form: "Poezie, lyricko-epika, 9 zpěvů",
    plot: "1. zpěv: Úvod, oslovení měsíce ('Svítí měsíček, polehounčku...'). Autor ironicky promlouvá k měsíci, který byl jediným svědkem jeho zatčení. 2.–3. zpěv: Popis zatčení v Havlíčkově bytě v noci. Vtrhne tam policie, komisař Dedera předává příkaz k deportaci od Bacha. Loučení s rodinou. 4.–7. zpěv: Cesta kočárem do vyhnanství přes Jihlavu do Alp. Popis 'péče' rakouské policie (ironie). 8. zpěv: Klíčová příhoda – splašené koně, kočár se řítí do propasti. Policie vyskočí strachem, Havlíček zůstává a kočár zastaví. 9. zpěv: Příjezd do Brixenu.",
    characters: [
      {
        name: "Karel Havlíček Borovský (vypravěč)",
        description:
          "Odvážný novinář, ironický. Pasivně se nebrání fyzicky, ale brání se slovem a výsměchem. I v těžké chvíli si zachovává humor.",
      },
      {
        name: "Dedera",
        description:
          "Policejní komisař, představitel státní moci. Plní rozkazy, ale v krizové situaci (splašení koně) je zbabělý.",
      },
      {
        name: "Měsíc",
        description:
          "Personifikovaný 'přítel', němý svědek, ke kterému se autor obrací (apostrofa).",
      },
      {
        name: "Bach",
        description:
          "Alexandr Bach, ministr vnitra (zmíněn v textu). Symbol absolutismu.",
      },
    ],
    themes: [
      "Kritika rakouské vlády, policie a Bachova absolutismu",
      "Osobní tragédie (vytržení od rodiny) s nadhledem a humorem",
      "Odvaha jedince proti moci státu",
      "Zbabělost moci v kontrastu s odvahou básníka",
      "Ironie jako zbraň proti útlaku",
    ],
    style:
      "Netradiční pojetí elegie (žalozpěv) – název je v kontrastu se satirickým obsahem. Nejde o pláč, ale o výsměch. Ich-forma, autobiografické prvky. Lidový, prostý, hovorový jazyk. Pravidelný rým (přerývaný ABCB) připomínající lidovou píseň. Ironie a sarkasmus jako hlavní zbraně: četníci jsou 'strážní andělé'. Apostrofa měsíce. Metafory: 'černá rodinka' (policie v uniformách).",
    recognitionHints: [
      "'Svítí měsíček, polehounčku...' – oslovení měsíce",
      "Popis zatčení v noci a deportace do Brixenu",
      "Ironie – název 'elegie' (žalozpěv) ale obsah je satirický",
      "Splašené koně – policie vyskočí, Havlíček kočár zastaví",
      "Autobiografické dílo – skutečná událost deportace",
    ],
    scenes: [
      "Oslovení měsíce: 'Svítí měsíček, polehounčku...' – jediný svědek zatčení",
      "Komisař Dedera vtrhne v noci do bytu s příkazem k deportaci",
      "Splašené koně v Alpách – policie vyskočí, Havlíček zachrání všem život a ironicky komentuje",
      "Příjezd do Brixenu – konec cesty, začátek života ve vyhnanství",
    ],
    trivia:
      "Havlíček byl pro režim nepohodlný svými články v Národních novinách, proto byl bez soudu deportován. Dílo mohlo vyjít až po jeho smrti (1861). Kontext: Bachův absolutismus (50. léta 19. století) – období tuhé cenzury, germanizace a potlačování českého národního hnutí. Havlíček je považován za zakladatele české moderní žurnalistiky.",
  },
  {
    id: "remarque-na-zapadni-fronte-klid",
    number: 10,
    title: "Na západní frontě klid",
    titleOriginal: "Im Westen nichts Neues",
    author: {
      name: "Erich Maria Remarque",
      nationality: "Němec",
      lifespan: "1898–1970",
    },
    year: "1929",
    era: "Meziválečná literatura",
    movement: "Ztracená generace / realismus s prvky expresionismu",
    genre: "Válečný (protiválečný) román",
    form: "Próza, epika",
    plot: "Pavel Bäumer a jeho spolužáci se pod vlivem fanatického učitele Kantorka dobrovolně hlásí do armády. Procházejí tvrdým výcvikem pod šikanujícím desátníkem Himmelstossem. Na frontě se setkávají s brutální realitou války – plynové útoky, bombardování, krysy, hlad. Postupně umírají přátelé: Kemmerich, Müller. Pavel jede na dovolenou domů, ale zjišťuje, že si s rodinou už nerozumí – válka ho odcizila civilnímu životu. V zákopu zabije francouzského vojáka (Gérarda Duvala) a tváří v tvář jeho umírání cítí výčitky svědomí. Umírá Pavlův nejbližší přítel Katczinsky, když ho Pavel nese do bezpečí. Pavel zůstává sám. Umírá v říjnu 1918, v den tak tichý, že vrchní velitelství napsalo do hlášení jen větu: 'Na západní frontě klid.'",
    characters: [
      {
        name: "Pavel Bäumer",
        description:
          "Vypravěč, gymnazista. Citlivý, před válkou psal básně. Válka ho změní v otrlého vojáka, který se snaží přežít. Ztracená generace – ztrácí schopnost žít v normální společnosti.",
      },
      {
        name: "Stanislav Katczinsky (Kat)",
        description:
          "O něco starší (40 let), hlava skupiny. Mazaný, zkušený, umí sehnat jídlo kdekoli. Pro Pavla je jako otec. Jeho smrt je definitivním koncem naděje.",
      },
      {
        name: "Albert Kropp",
        description:
          "Pavlův spolužák, 'myslitel' skupiny. Po amputaci nohy propadá depresi.",
      },
      {
        name: "Müller",
        description:
          "Pragmatický, vláčí s sebou učebnice fyziky. Dědí boty po Kemmerichovi.",
      },
      {
        name: "Himmelstoss",
        description:
          "Desátník, v civilu listonoš. Ztělesnění šikany a zneužívání moci. Na frontě se ukáže jako zbabělec.",
      },
      {
        name: "Kantorek",
        description:
          "Třídní učitel. Symbol demagogie a falešného vlastenectví. Dohnal studenty do války.",
      },
    ],
    themes: [
      "Absurdita a krutost války",
      "Ztráta iluzí a mládí",
      "Kamarádství jako jediná jistota",
      "Psychická destrukce vojáků (ztracená generace)",
      "Odcizení od civilního světa",
      "Kontrast přírody a hrůz války",
    ],
    style:
      "Ich-forma (Pavel Bäumer), v posledních odstavcích se mění na neosobní er-formu po Pavlově smrti. Reportážní styl – detailní, věcné popisy bojů a zranění (naturalismus). Reflexe a úvahy o smyslu války. Kontrast krásy přírody a válečných hrůz. Ironie v závěru – smrt hrdiny v den, kdy 'Na západní frontě klid'. Hovorový jazyk a vulgarismy v přímé řeči vojáků.",
    recognitionHints: [
      "Ironický název – hrdina umírá v den, kdy není co hlásit",
      "Boty po Kemmerichovi – dědí se po mrtvých",
      "Scéna zabití francouzského vojáka v zákopu a Pavlovy výčitky",
      "Učitel Kantorek – symbol falešného vlastenectví",
      "Fráze: 'Jsme opuštěni jako děti a zkušení jako staří lidé...'",
    ],
    scenes: [
      "Pavel v zákopu zabije francouzského vojáka Gérarda Duvala a čelí jeho pomalému umírání – vidí v něm člověka, ne nepřítele",
      "Smrt Katczinského – Pavel ho nese na zádech, Kat dostane střepinu do hlavy",
      "Pavel na dovolené doma zjišťuje, že si s rodinou už nerozumí – válka ho odcizila",
      "Epilog: Pavel umírá v tichý den, hlášení zní: 'Na západní frontě klid'",
    ],
    trivia:
      "Remarque se sám účastnil bojů 1. světové války a byl raněn. Po nástupu Hitlera (1933) byly jeho knihy páleny a byl zbaven občanství. Emigroval do USA. Další díla: Cesta zpátky, Tři kamarádi, Vítězný oblouk. Pojem 'ztracená generace' užila G. Steinová – autoři, kteří prožili 1. světovou válku: Hemingway, Fitzgerald, Remarque.",
  },
  {
    id: "steinbeck-o-mysich-a-lidech",
    number: 11,
    title: "O myších a lidech",
    titleOriginal: "Of Mice and Men",
    author: {
      name: "John Steinbeck",
      nationality: "Američan",
      lifespan: "1902–1968",
    },
    year: "1937",
    era: "Meziválečná literatura",
    movement: "Americký realismus / naturalismus",
    genre: "Novela (sociálně-psychologická) s prvky balady",
    form: "Próza, epika, 6 kapitol",
    plot: "George Milton a Lennie Small přicházejí k řece Salinas a míří na ranč za prací. Lennie je mentálně postižený, ale obrovitý silák; George se o něj stará (slib tetě Kláře). Sní o vlastní farmě s králíky. Na ranči se setkávají s agresivním Curleym (syn majitele), jeho osamělo ženou, starým Candym, černochem Crooksem a předákem Slimem. Curley napadne Lennieho, ten mu rozmáčkne ruku. Lennie nechtěně zabije štěně. Ve stodole hladí vlasy Curleyho ženě, která začne křičet – Lennie jí ze strachu zlomí vaz. Utíká na smluvené místo u řeky. George ho najde první, vypráví mu naposledy o jejich snu (králících) a střelí ho zezadu do týlu – akt milosrdenství, aby ho ušetřil kruté smrti z rukou Curleyho.",
    characters: [
      {
        name: "George Milton",
        description:
          "Drobný, bystrý, racionální. Stará se o Lennieho (slib tetě Kláře). Obětuje svůj klid pro přítele. Jeho čin na konci je aktem nejvyššího přátelství.",
      },
      {
        name: "Lennie Small",
        description:
          "Velký hromotluk (jméno Small je ironie), mentálně na úrovni dítěte. Hodný, pracovitý, ale neovládá svou obrovskou sílu. Má úchylku na hebké věci. Nevinný viník.",
      },
      {
        name: "Curley",
        description:
          "Syn majitele, malý vzrůstem, trpí komplexem méněcennosti. Agresivní, žárlivý, amatérský boxer.",
      },
      {
        name: "Curleyho žena",
        description:
          "Nemá jméno (je jen 'majetkem' manžela). Krásná, vyzývavá, ale hluboce osamělá. Sní o kariéře v Hollywoodu.",
      },
      {
        name: "Candy",
        description:
          "Starý uklízeč bez ruky. Bojí se vyhazovu. Jeho starý pes je zastřelen, protože 'smrdí a je k ničemu' – paralela k lidem v kapitalismu.",
      },
      {
        name: "Crooks",
        description:
          "Černošský stájník. Izolovaný kvůli barvě pleti, inteligentní, sečtělý, ale zahořklý.",
      },
      {
        name: "Slim",
        description:
          "Předák, přirozená autorita, 'princ ranče'. Jediný chápe Georgův čin na konci.",
      },
    ],
    themes: [
      "Americký sen (o vlastní farmě) – nedosažitelný",
      "Síla přátelství a odpovědnost za druhého",
      "Sociální kritika doby (hospodářská krize)",
      "Samota a osamělost každé postavy",
      "Rasismus a diskriminace",
      "Eutanazie (zastřelení Candyho psa jako předobraz Lennieho)",
    ],
    style:
      "Er-forma, objektivní, 'filmový' vypravěč – popisuje pouze to, co je vidět a slyšet (behaviorální metoda). Dialogy převažují nad popisy (dílo bylo psáno, aby šlo snadno převést na divadelní hru). Cyklická kompozice: příběh začíná i končí na stejném místě (vrbový háj u řeky) – uzavřený kruh osudu. Princip gradace: zabití myši → zabití štěněte → zabití ženy. Symbolika: myš/králík (křehkost, bezbrannost), červená (nebezpečí).",
    recognitionHints: [
      "Dva přátelé – velký silák a malý bystrý chlap",
      "Sen o vlastní farmě a králících",
      "Zastřelení Candyho starého psa předznamenávající konec Lennieho",
      "Cyklická kompozice: děj začíná i končí u řeky",
      "Okolí města Soledad (= 'samota' ve španělštině)",
    ],
    scenes: [
      "George a Lennie u řeky na začátku – Lennie hladí mrtvou myš, vyprávějí si o snu o farmě",
      "Lennie rozmáčkne Curleyho ruku na Georgův povel",
      "Zastřelení Candyho starého psa – Slim rozhodne, že 'je k ničemu' – předzvěst konce",
      "Závěrečná scéna: George vypráví Lenniemu o snu o králících a střelí ho zezadu do týlu",
    ],
    trivia:
      "Steinbeck se inspiroval osobní zkušeností na ranči v Kalifornii. Nositel Nobelovy ceny za literaturu (1962). Další díla: Hrozny hněvu, Na východ od ráje, Perla. Historický kontext: Velká hospodářská krize (krach na burze 1929), vysoká nezaměstnanost, migrace za prací.",
  },
  {
    id: "kafka-promena",
    number: 12,
    title: "Proměna",
    titleOriginal: "Die Verwandlung",
    author: {
      name: "Franz Kafka",
      nationality: "Pražský německý spisovatel židovského původu",
      lifespan: "1883–1924",
    },
    year: "1915",
    era: "Počátek 20. století",
    movement: "Předchůdce existencialismu, prvky expresionismu a magického realismu",
    genre: "Povídka (novela)",
    form: "Próza, epika, 3 kapitoly",
    plot: "Obchodní cestující Řehoř Samsa se jednoho rána probudí proměněný v obrovitý hmyz. Zpočátku řeší jen to, že zaspal do práce. Rodina se nemůže dostat do pokoje. Přichází prokurista z firmy. Když Řehoř otevře dveře, všichni jsou zděšeni, otec ho zažene zpět holí. Sestra Markétka se o něj jako jediná stará – zjišťuje, že mu chutná zkažené jídlo. Rodina postupně vynáší nábytek. Otec po Řehořovi hází jablka – jedno se mu zasekne do krunýře a způsobí zánět. Rodina musí pracovat, vezme si podnájemníky. Řehoř chátrá, je zanedbáván. Jednou ho přiláká sestra hrou na housle, vyleze ven a vyděsí podnájemníky. Sestra prohlásí, že se 'toho' musí zbavit. Řehoř v noci osamocen umírá, smířen s osudem, myslí na rodinu s láskou. Ráno služka najde vyschlé tělo. Rodina si s úlevou vyjede na výlet a plánuje dceřinu svatbu.",
    characters: [
      {
        name: "Řehoř Samsa (Gregor Samsa)",
        description:
          "Svědomitý obchodní cestující, živil celou rodinu (splácel otcův dluh). Obětavý, pasivní, hodný. I po proměně uvažuje lidsky. Svou smrt bere jako vysvobození pro ostatní.",
      },
      {
        name: "Markétka (Greta)",
        description:
          "Řehořova sestra. Zpočátku se o něj jediná stará. Postupně k němu ochladne a první vysloví myšlenku, že se ho musí zbavit. Prodělá 'proměnu' z dítěte v dospělou ženu.",
      },
      {
        name: "Otec",
        description:
          "Autoritativní, přísný. Po proměně syna se vrací do práce a získává zpět ztracenou sílu. Řehoře zraní jablkem.",
      },
      {
        name: "Matka",
        description:
          "Milující, ale slabá a podřízená otci. Z Řehoře má hrůzu, omdlévá.",
      },
    ],
    themes: [
      "Odcizení (alienace) a neschopnost komunikace",
      "Absurdita existence",
      "Vina a trest (bez zjevné viny)",
      "Sobeckost rodiny – proměnná laskavost pod tlakem okolností",
      "Nahraditelnost člověka",
      "Dehumanizace a ztráta lidskosti",
    ],
    style:
      "Er-forma s fokalizací na Řehoře (víme, co si myslí a cítí). Věcný, strohý popis bez citového zabarvení (typické pro Kafku) – působí jako úřední záznam noční můry. Absurdní/fantastická událost (proměna v hmyz) popisovaná naprosto realistickým stylem. Neurčitost: Kafka nikdy přesně neřekne, v jaký hmyz se Řehoř proměnil ('Ungeziefer' = havěť). Zakázal, aby byl hmyz na obálce namalován. Ironie v závěru, kdy si rodina oddechne. Polopřímá řeč pro Řehořovy myšlenky.",
    recognitionHints: [
      "Člověk se probudí proměněný v hmyz – ale řeší, že zaspal do práce",
      "Otec hází po Řehořovi jablka – jedno se mu zasekne v krunýři",
      "Obraz dámy v kožichu na zdi – poslední vazba na lidský svět",
      "Řehoř rozumí lidem, ale vydává jen zvířecí zvuky",
      "Kafkův pražský německý spisovatel židovského původu",
    ],
    scenes: [
      "Řehoř se probudí jako hmyz a jeho první myšlenka je, že zaspal do práce",
      "Otec po Řehořovi hází jablka – jedno se mu zasekne do krunýře a způsobí zánět",
      "Sestra hraje na housle podnájemníkům, Řehoř vyleze ven a vyděsí je",
      "Sestra prohlásí: 'Musíme se toho zbavit' – Řehoř v noci umírá, smířen",
    ],
    trivia:
      "Kafka pracoval jako úředník v pojišťovně (nenáviděl to). Měl komplikovaný vztah s otcem (pocit viny, méněcennosti – viz postava otce v Proměně). Většinu díla chtěl spálit, zachránil ho přítel Max Brod. Další díla: Proces, Zámek, Nezvěstný (Amerika). Termín 'kafkovskost' = absurdní, bezvýchodné situace.",
  },
  {
    id: "fitzgerald-velky-gatsby",
    number: 13,
    title: "Velký Gatsby",
    titleOriginal: "The Great Gatsby",
    author: {
      name: "Francis Scott Fitzgerald",
      nationality: "Američan",
      lifespan: "1896–1940",
    },
    year: "1925",
    era: "20. léta 20. století",
    movement: "Meziválečná americká literatura / Ztracená generace",
    genre: "Společenský a psychologický román",
    form: "Próza, epika, 9 kapitol",
    plot: "Mladý Nick Carraway se stěhuje do New Yorku na West Egg. Jeho sousedem je tajemný milionář Jay Gatsby, který pořádá velkolepé večírky jen proto, aby přilákal Daisy, kterou před lety miloval, ale ztratil, protože byl chudý. Nick zprostředkuje jejich setkání. Gatsby a Daisy obnoví milostný vztah. Gatsby chce, aby Daisy opustila Toma. Dochází ke konfrontaci v hotelu Plaza, kde Tom odhalí Gatsbyho nelegální obchody. Daisy v rozhodující chvíli cukne. Při cestě zpět Daisy (řídící Gatsbyho auto) srazí Tomovu milenku Myrtle Wilsonovou. Gatsby vezme vinu na sebe. Manžel Myrtle (George Wilson), zmanipulovaný Tomem, zastřelí Gatsbyho v jeho bazénu a spáchá sebevraždu. Na Gatsbyho pohřeb nikdo z 'přátel' nepřijde. Nick znechucený opouští New York.",
    characters: [
      {
        name: "Jay Gatsby (původně James Gatz)",
        description:
          "Tajemný zbohatlík, majetek z nelegálních obchodů (pašeráctví alkoholu). Celý život zasvětil snu – získat zpět Daisy. Naivní, romantický, věří, že peníze mohou opravit minulost. Je 'velký' svou schopností mít naději.",
      },
      {
        name: "Daisy Buchananová",
        description:
          "Nickova sestřenice. Krásná, ale povrchní, rozmazlená, 'její hlas zní penězi'. Není schopna hlubokého citu ani oběti. Nechá Gatsbyho vzít vinu za nehodu.",
      },
      {
        name: "Tom Buchanan",
        description:
          "Manžel Daisy. Bývalá sportovní hvězda. Arogantní, rasistický, nevěrný, brutální. Ztělesnění bezohlednosti 'starých peněz'.",
      },
      {
        name: "Nick Carraway",
        description:
          "Vypravěč (ich-forma). Účastník děje i pozorovatel. Snaží se být objektivní. Spojka mezi světy West Egg a East Egg.",
      },
      {
        name: "Jordan Bakerová",
        description:
          "Golfistka, přítelkyně Daisy. Cynická, nepoctivá. Krátký románek s Nickem.",
      },
      {
        name: "Myrtle Wilsonová",
        description:
          "Tomova milenka. Touží uniknout z chudoby, což ji stojí život.",
      },
    ],
    themes: [
      "Deziluze z amerického snu",
      "Povrchnost smetánky 20. let (jazzový věk)",
      "Peníze vs. morálka",
      "Nemožnost vrátit minulost",
      "Rozpad hodnot a morální prázdnota",
      "Staré peníze vs. nové peníze",
    ],
    style:
      "Ich-forma (Nick Carraway) – specifický vypravěč, účastník i pozorovatel. Retrospektivní rámec (Nick vypráví zpětně). Impresionistické popisy: barvy, hudba, atmosféra večírků. Bohatá symbolika barev: zlatá/stříbrná = bohatství, bílá = (předstíraná) nevinnost, žlutá = falešné zlato a smrt (Gatsbyho auto). Klíčové symboly: Zelené světlo = naděje a nedosažitelný sen, Oči doktora T. J. Eckleburga = boží oči sledující morální úpadek, Údolí popela = sociální dno.",
    recognitionHints: [
      "Zelené světlo na majáku – symbol nedosažitelného snu",
      "Velkolepé večírky, na které nikdo nezná hostitele",
      "Oslovení 'old sport' (staroušku)",
      "Žluté auto – nástroj zkázy",
      "East Egg vs. West Egg – staré vs. nové peníze",
    ],
    scenes: [
      "Gatsby se dívá přes záliv na zelené světlo u Daisyina domu – symbol naděje",
      "Konfrontace Gatsbyho s Tomem v hotelu Plaza – Daisy cukne a nedokáže opustit Toma",
      "Daisy v Gatsbyho autě srazí Myrtle – Gatsby vezme vinu na sebe",
      "Gatsbyho pohřeb – nikdo z 'přátel' nepřijde, jen Nick a Gatsbyho otec",
    ],
    trivia:
      "Fitzgerald s manželkou Zeldou byli celebritami své doby, žili bouřlivým životem (alkohol, večírky). Historický kontext: 20. léta v USA ('Roaring Twenties') – prohibice, hospodářská konjunktura, jazz, automobilismus. Konec éry přinesl krach na burze (1929). Další díla: Něžná je noc, Na prahu ráje.",
  },
  {
    id: "orwell-1984",
    number: 14,
    title: "1984",
    titleOriginal: "Nineteen Eighty-Four",
    author: {
      name: "George Orwell (Eric Arthur Blair)",
      nationality: "Brit",
      lifespan: "1903–1950",
    },
    year: "1949",
    era: "Polovina 20. století",
    movement: "Světová literatura 20. století (reakce na totalitní režimy)",
    genre: "Antiutopický román (dystopie)",
    form: "Próza, epika, 3 části",
    plot: "Winston Smith žije v Londýně (Oceánie), pracuje na Ministerstvu pravdy, kde přepisuje minulost. Tajně si vede deník (ideozločin). Potkává Julii, která mu předá lístek 'Miluji Tě'. Začnou tajný milostný poměr. Pronajímají si pokoj u starožitníka Charringtona. Navštíví O'Briena, o kterém si myslí, že je členem tajného Bratrstva. O'Brien jim dá Knihu. Zatčení: Charrington je agent Ideopolicie, O'Brien nastražil past. Winston je mučen na Ministerstvu lásky. V Místnosti 101 je konfrontován se svou největší noční můrou (krysy). Ze strachu zradí Julii ('Udělejte to Julii!'). Je zlomen, propuštěn. Potkává Julii, ale nic k ní necítí. V závěru sedí v kavárně a uvědomuje si, že miluje Velkého bratra.",
    characters: [
      {
        name: "Winston Smith",
        description:
          "Průměrný úředník, fyzicky slabý. Poslední myslící člověk, který se snaží zachovat si paměť a lidskost. Není hrdina, bojí se bolesti. Jeho vzpoura je intelektuální.",
      },
      {
        name: "Julie",
        description:
          "Mladá rebelka 'od pasu dolů'. Nenávidí stranu, protože jí zakazuje radost, ale nezajímají ji hlubší politické souvislosti. Je pragmatická.",
      },
      {
        name: "O'Brien",
        description:
          "Člen Vnitřní strany. Inteligentní, klidný, ale fanatický a krutý. Pro Winstona je paradoxně mučitelem i 'ochráncem'. Symbolizuje absolutní moc.",
      },
      {
        name: "Velký bratr (Big Brother)",
        description:
          "Mytická postava vůdce, možná ani neexistuje. Je jen tváří Strany na plakátech. 'Velký bratr tě sleduje.'",
      },
      {
        name: "Emanuel Goldstein",
        description:
          "Nepřítel lidu, hlavní objekt nenávisti (Minuty nenávisti). Pravděpodobně vymyšlený Stranou.",
      },
    ],
    themes: [
      "Manipulace s pravdou a historií",
      "Ztráta svobody a individuality",
      "Totalitní moc ovládající myšlenky",
      "Jazyk jako nástroj kontroly (Newspeak)",
      "Dvojmysl (Doublethink): Válka je mír, Svoboda je otroctví",
      "Surveillance a cenzura",
    ],
    style:
      "Er-forma s fokalizací na Winstona. Šedivý, špinavý, páchnoucí Londýn – kontrast s propagandou o blahobytu. Esejistické pasáže z Goldsteinovy Knihy vysvětlující fungování totalitního světa. Newspeak – nový jazyk Strany (cíl: zúžit myšlení). Doublethink (dvojité myšlení) – schopnost udržet v mysli dvě protichůdná tvrzení. Strohý, věcný jazyk. Vložený text (Goldsteinova Kniha).",
    recognitionHints: [
      "'Velký bratr tě sleduje' – plakáty se sledujícíma očima",
      "Newspeak, Doublethink, Thoughtcrime (ideozločin)",
      "Místnost 101 – nejhorší noční můra (pro Winstona krysy)",
      "Hesla: 'Válka je mír. Svoboda je otroctví. Nevědomost je síla.'",
      "Ministerstva: Pravdy (lží), Lásky (mučení), Míru (války), Hojnosti (hladu)",
    ],
    scenes: [
      "Winston tajně začíná psát deník – 'Psal pro budoucnost, pro neexistující lidi'",
      "Julie předá Winstonovi lístek: 'Miluji Tě'",
      "Místnost 101: O'Brien konfrontuje Winstona s krysami – Winston zradí Julii",
      "Závěrečná scéna: Winston sedí v kavárně, slzy mu stékají, a uvědomuje si, že miluje Velkého bratra",
    ],
    trivia:
      "Původní název 'Poslední člověk v Evropě'. Dopsáno 1948 (přesmyčka 84), krátce před autorovou smrtí na tuberkulózu. Navazuje na dystopie: Zamjatin (My), Huxley (Konec civilizace). V komunistických zemích byla kniha zakázána. Orwell varuje před stalinismem v SSSR, ale i před tendencemi v západních demokraciích.",
  },
  {
    id: "orwell-farma-zvirat",
    number: 15,
    title: "Farma zvířat",
    titleOriginal: "Animal Farm",
    author: {
      name: "George Orwell (Eric Arthur Blair)",
      nationality: "Brit",
      lifespan: "1903–1950",
    },
    year: "1945",
    era: "Polovina 20. století",
    movement: "Světová literatura 20. století (reakce na totalitu)",
    genre: "Alegorická novela, antiutopie, bajka",
    form: "Próza, epika, 10 kapitol",
    plot: "Starý Major (prase) svolá zvířata a vypráví jim o snu – světě bez lidí. Naučí je píseň 'Zvířata Anglie'. Major umírá. Zvířata vyženou opilého farmáře Jonese (revoluce). Přejmenovávají Panskou farmu na Farmu zvířat. Sepíší 7 přikázání ('Všechna zvířata jsou si rovna'). Vlády se ujímají prasata Napoleon a Kuliš. Spor o stavbu mlýna. Napoleon vyžene Kuliše pomocí psů. Nastoluje diktaturu. Kuliš označen za zrádce. Prasata postupně mění přikázání ('Žádné zvíře nesmí spát v posteli... s prostěradly'). Boxer (kůň) se strhá prací a je poslán na jatka (prasata tvrdí, že jede k veterináři, a za peníze z jeho kůže si koupí whisky). Závěr: prasata začnou chodit po dvou, nosit oblečení. Přikázání nahrazena jediným: 'Všechna zvířata jsou si rovna, ale některá jsou si rovnější.' Zvířata sledují hostinu prasat s lidmi a už nedokážou rozeznat, kdo je prase a kdo člověk.",
    characters: [
      {
        name: "Napoleon (prase)",
        description:
          "Předobraz Stalina. Krutý, mocichtivý, vypočítavý diktátor. Neumí řečnit, ale umí intrikovat.",
      },
      {
        name: "Kuliš / Snowball (prase)",
        description:
          "Předobraz Trockého. Inteligentní, dobrý řečník, myslí to s revolucí dobře, ale je vyhnán.",
      },
      {
        name: "Pištík / Squealer (prase)",
        description:
          "Předobraz propagandy (Pravda). Dokáže 'udělat z černého bílé'. Manipuluje s pamětí zvířat.",
      },
      {
        name: "Boxer (kůň)",
        description:
          "Předobraz udřeného lidu / Stachanovců. Silný, oddaný, naivní. Hesla: 'Soudruh Napoleon má vždycky pravdu' a 'Budu pracovat lépe'. Je zrazen režimem.",
      },
      {
        name: "Starý Major (prase)",
        description:
          "Předobraz Lenina/Marxe. Ideolog revoluce, umírá předtím, než se zvrhne.",
      },
      {
        name: "Pan Jones",
        description:
          "Předobraz cara Mikuláše II. Původní majitel, alkoholik.",
      },
      {
        name: "Ovce",
        description:
          "Tupý dav, který nepřemýšlí a jen sborově bečí hesla ('Čtyři nohy dobré, dvě nohy špatné').",
      },
    ],
    themes: [
      "Kritika totalitních režimů (konkrétně stalinismu)",
      "Mechanismus vzniku diktatury",
      "Zneužití revoluce",
      "Manipulace s davy a přepisování historie",
      "Moc korumpuje",
      "Propaganda a její účinky",
    ],
    style:
      "Er-forma, objektivní vypravěč, pohádkový tón (bajka) – klidný popis hrůzných událostí umocňuje ironii. Alegorie: celý příběh je metaforou skutečných historických událostí SSSR. Personifikace: zvířata mají lidské vlastnosti. Politický newspeak: fráze, eufemismy (snížení přídělů = 'úprava'). Gradace: postupné utahování šroubů diktatury. Jednoduchý, srozumitelný jazyk.",
    recognitionHints: [
      "'Všechna zvířata jsou si rovna, ale některá jsou si rovnější'",
      "Zvířata na farmě provedou revoluci a prasata se stanou diktátory",
      "Boxer: 'Budu pracovat lépe' – pak ho pošlou na jatka",
      "7 přikázání na zdi stodoly – postupně se mění",
      "Na konci nelze rozeznat prasata od lidí",
    ],
    scenes: [
      "Starý Major svolá zvířata a vypráví o snu – světě bez lidí. Naučí je píseň 'Zvířata Anglie'",
      "Napoleon vyžene Kuliše pomocí vycvičených psů – převrat",
      "Boxer se strhá prací a je 'odvezen k veterináři' – ve skutečnosti na jatka",
      "Závěrečná hostina prasat s lidmi – zvířata nerozeznají, kdo je prase a kdo člověk",
    ],
    trivia:
      "Napsáno během 2. světové války (1943–44), ale Orwell měl problém knihu vydat, protože SSSR byl spojencem Británie. Kniha přesně kopíruje dějiny SSSR: VŘSR (vyhnání Jonese), boj Stalina a Trockého, hladomory, industrializace (mlýn), pakt Molotov-Ribbentrop, Teheránská konference (závěrečná hostina).",
  },
  {
    id: "rolland-petr-a-lucie",
    number: 16,
    title: "Petr a Lucie",
    titleOriginal: "Pierre et Luce",
    author: {
      name: "Romain Rolland",
      nationality: "Francouz",
      lifespan: "1866–1944",
    },
    year: "1920",
    era: "Po 1. světové válce",
    movement: "Humanistický realismus / pacifistická literatura",
    genre: "Novela",
    form: "Próza, epika",
    plot: "Osmnáctiletý student Petr Aubier se za náletu německých bombardérů schová v pařížském metru a tam potká devatenáctiletou Lucii. Postupně se sblíží – Petr je z bohaté rodiny, Lucie chudá portrétistka starající se o nemocnou matku. Jejich láska roste navzdory válce. Petr se chce ženit, ale ví, že má za 4 měsíce narukovat (jeho bratr Filip už bojuje na frontě). Na Velký pátek 29. března 1918 jdou společně do kostela Saint-Gervais. Při bohoslužbě dopadne na kostel německý dělostřelecký granát 'Tlustá Berta' a Petr s Lucií umírají v sutinách spolu, naposledy se objímajíce. Jejich láska je krásná, ale odsouzena válkou k záhubě.",
    characters: [
      {
        name: "Petr Aubier",
        description:
          "Citlivý osmnáctiletý student, intelektuál. Zamiluje se do Lucie. Ví, že má brzy narukovat. Bratr Filip je na frontě.",
      },
      {
        name: "Lucie",
        description:
          "Devatenáctiletá kreslířka/portrétistka. Umělecky nadaná, samostatná. Chudá, stará se o nemocnou matku. Miluje Petra.",
      },
      {
        name: "Filip",
        description:
          "Petrův starší bratr, voják na frontě. Reprezentuje generaci mučenou válkou.",
      },
      {
        name: "Petrovi rodiče",
        description:
          "Bohatá městská rodina. Nepřipouštějí si neustále tolik válku, přesto se jich dotýká.",
      },
    ],
    themes: [
      "Láska vs. válka",
      "Smrt mladých – nesmyslná oběť",
      "Krása proti zkáze",
      "Humanismus a pacifismus",
      "Kontrast soukromého štěstí a veřejné tragédie",
      "Křehkost lidského štěstí",
    ],
    style:
      "Er-forma, vševědoucí vypravěč. Lyrický, citový, poetický jazyk. Kontrast krásy a hrůzy. Silná symbolika: metro (úkryt, setkání), bombardování (hrozba), kreslení (umění jako protipól války), jaro (naděje vs. smrt), kostel (posvátné místo proměněné v hrob). Chronologická kompozice, krátká novela, rámec velikonočního týdne.",
    recognitionHints: [
      "Setkání v metru během náletu – Paříž za 1. světové války",
      "Smrt obou milenců v kostele Saint-Gervais na Velký pátek",
      "Granát 'Tlustá Berta' dopadne na kostel",
      "Krásná lyrická novela s tragickým koncem",
      "Autor je nositel Nobelovy ceny za literaturu (1915)",
    ],
    scenes: [
      "Setkání Petra a Lucie v pařížském metru během německého náletu",
      "Procházka kvetoucí Paříží – kontrast krásy a války",
      "Smrt v kostele Saint-Gervais na Velký pátek – granát dopadne během bohoslužby, milenci umírají v objetí",
    ],
    trivia:
      "Romain Rolland byl nositel Nobelovy ceny za literaturu (1915), pacifista a humanista. Kritizoval fašismus. Další díla: Jan Kryštof, Dobrý člověk ještě žije. Historický kontext: Paříž 1918, poslední měsíce 1. světové války, německé bombardování.",
  },
  {
    id: "capek-bila-nemoc",
    number: 17,
    title: "Bílá nemoc",
    titleOriginal: undefined,
    author: {
      name: "Karel Čapek",
      nationality: "Čech",
      lifespan: "1890–1938",
    },
    year: "1937",
    era: "Meziválečná literatura",
    movement: "Demokratický proud české literatury",
    genre: "Tragédie (sociální, protiválečná). Alegorie.",
    form: "Drama, 3 jednání ve 14 obrazech",
    plot: "V zemi se šíří smrtelná 'Čengova nemoc' (bílá nemoc) napadající lidi nad 45 let – projevuje se bílou skvrnou a vede k rozpadu těla. Doktor Galén objeví lék, ale odmítá ho vydat bohatým a mocným, dokud nezastaví zbrojení a války. Léčí jen chudé. Dostává se do konfliktu s dvorním radou Sigéliem (kariérista) a Maršálem (diktátor chystající válku). Vypukne válka. Nemocí onemocní baron Krüg (majitel zbrojovek), který se chce nechat vyléčit, ale nemůže zradit Maršála – spáchá sebevraždu. Nakonec onemocní sám Maršál. Na naléhání dcery souhlasí s Galénovou podmínkou – vyhlásí mír. Galén spěchá s lékem k Maršálovi, ale před palácem je zfanatizovaný dav. Galén je ušlapán. Ampule s lékem je rozdupána. Maršál zemře a válka pokračuje.",
    characters: [
      {
        name: "Doktor Galén",
        description:
          "Humanista, pacifista. Naivní (myslí si, že změní svět sám), ale morálně pevný. Odmítá léčit mocné – porušení Hippokratovy přísahy, ale pro vyšší dobro.",
      },
      {
        name: "Maršál",
        description:
          "Diktátor, Vůdce. Charismatický, fanatický, bezohledný. Věří, že má 'vyšší poslání' vést národ k vítězství.",
      },
      {
        name: "Baron Krüg",
        description:
          "Průmyslník, výrobce zbraní. Člověk 'kšeftu', pragmatik. Válka je pro něj jen byznys. Spáchá sebevraždu.",
      },
      {
        name: "Dvorní rada Sigélius",
        description:
          "Ředitel kliniky. Kariérista, patolízal, slouží režimu. Pohrdá Galénem.",
      },
      {
        name: "Otec, Matka, Syn, Dcera",
        description:
          "Bezejmenná rodina. Ukázka, jak propaganda působí na obyčejné lidi – Otec papouškuje hesla o nutnosti války, dokud neonemocní Matka.",
      },
    ],
    themes: [
      "Konflikt demokracie/humanismu a diktatury/totality",
      "Odpovědnost vědce a jedince za osud světa",
      "Varování před fašismem a manipulací davů",
      "Davová psychóza a fanatismus",
      "Morální dilema: léčit vs. zachránit miliony",
    ],
    style:
      "Drama ve 3 jednáních, 14 obrazech. Princip kontrastu: tichý, neústupný Galén vs. hlučný, agresivní Maršál. Paradox v závěru: Maršála zabije jeho vlastní ideologie (dav zabije lékaře, který jediný mohl Maršála zachránit). Symbolika jmen: Galén (antický lékař), Sigélius (lat. sigillum = pečeť, uzavřenost), Krüg (něm. Krieg = válka). Lékařská terminologie, politická frazeologie.",
    recognitionHints: [
      "Lékař, který odmítá léčit mocné, dokud nezastaví válku",
      "Bílá skvrna na kůži jako symbol smrtelné nemoci",
      "Dav ušlape lékaře – Maršálova ideologie zabije jeho samotného",
      "Karel Čapek – protifašistické období jeho tvorby",
      "Alegorie na nacistické Německo",
    ],
    scenes: [
      "Galén odmítá léčit bohaté: 'Já bych prosil... zastavte válku a dám vám lék'",
      "Baron Krüg se zastřelí, protože nemůže zradit Maršála ani přijmout smrt",
      "Maršál onemocní a nakonec souhlasí s mírem – ale je pozdě",
      "Galén je ušlapán zfanatizovaným davem před palácem – lék je zničen",
    ],
    trivia:
      "Napsáno roku 1937 (rok před Mnichovskou dohodou a Čapkovou smrtí). Hra hrála v Národním divadle (Hugo Haas jako Galén), ale byla trnem v oku německému velvyslanectví. Čapek reagoval na zhoršující se politickou situaci v Evropě. Další díla: Válka s Mloky, R.U.R., Matka.",
  },
  {
    id: "capek-valka-s-mloky",
    number: 18,
    title: "Válka s Mloky",
    titleOriginal: undefined,
    author: {
      name: "Karel Čapek",
      nationality: "Čech",
      lifespan: "1890–1938",
    },
    year: "1936",
    era: "Meziválečná literatura",
    movement: "Demokratický proud české literatury",
    genre: "Antiutopický román, sci-fi, satirický román",
    form: "Próza, epika, 3 knihy",
    plot: "1. kniha (Andrias Scheuchzeri): Kapitán van Toch objeví v Tichmoří podivné tvory (mloky), kteří jsou učenliví. Uzavře s nimi obchod – dává jim nože a oni mu nosí perly. Průmyslník G. H. Bondy (van Tochův krajan z Jevíčka) v tom vidí potenciál a zakládá 'Salamander-Syndicate'. Mloci se stávají levnou pracovní silou po celém světě. 2. kniha (Po stupních civilizace): Formou výstřižků z novin a dějepisného přehledu popisuje rychlý rozvoj mločí civilizace. Lidé je zneužívají k pracím pod vodou. Mloci se množí, přebírají lidské zvyky, zbraně i nešvary. 3. kniha (Válka s Mloky): Mlokům dochází 'životní prostor' (narážka na nacistický Lebensraum). Pod vedením Chief Salamandera začínají odstřelovat pevniny. Lidé jsou bezmocní, protože jsou na mlocích ekonomicky závislí. Závěr: Autor rozmlouvá sám se sebou, uvažuje, že mloci nakonec dopadnou jako lidé – rozdělí se, začnou válčit a sami se zničí.",
    characters: [
      {
        name: "Kapitán van Toch (Vantoch)",
        description:
          "Dobráckýk prostý český námořník z Jevíčka. Mloky má rád ('tapa-boys'). Jeho naivita ale spustí katastrofu.",
      },
      {
        name: "G. H. Bondy",
        description:
          "Průmyslník, finančník. Inteligentní, ale cynický. V mlocích vidí jen zisk. Představuje kapitalismus, který 'prodá i provaz, na kterém ho oběsí'.",
      },
      {
        name: "Pan Povondra",
        description:
          "Vrátný u Bondyho. On pustil van Tocha k Bondymu. Celý život sbírá výstřižky o mlocích. Na konci cítí obrovskou vinu. Symbolizuje 'malého člověka', který se jen díval.",
      },
      {
        name: "Chief Salamander",
        description:
          "Vůdce mloků. Nikdy ho nikdo neviděl, mluví jen přes rádio. Démonická postava diktátora (připomíná Hitlera).",
      },
      {
        name: "Mloci",
        description:
          "Kolektivní hrdina. Nemají individualitu, jsou pracovití, průměrní, bez duše. Symbolizují zmanipulovaný dav.",
      },
    ],
    themes: [
      "Varování před fašismem, nacismem a rasismem",
      "Kritika lidské chamtivosti a krátkozrakosti",
      "Zneužití vědy a techniky",
      "Kolektivismus vs. individualismus",
      "Kapitalismus – 'kšeft je víc než morálka'",
      "Selhání mezinárodních institucí",
    ],
    style:
      "Er-forma, často ironický vypravěč. V poslední kapitole ich-forma (autor vstupuje do děje). Kolážovitost: fiktivní novinové články, vědecké zprávy, zápisy z jednání – dodává zdání reality (mystifikace). Střídání funkčních stylů: publicistický, odborný, umělecký. Cizí jazyky (angličtina, němčina) dodávají punc světovosti. Humor laskavý v 1. části se mění v mrazivou satiru ve 3. části. Specifická závěrečná kapitola, kde autor polemizuje o konci civilizace.",
    recognitionHints: [
      "Mloci jako symbol fašismu a zmanipulovaného davu",
      "Koláž novinových článků a vědeckých zpráv",
      "Kapitán van Toch z Jevíčka – český námořník v Tichomoří",
      "Závěrečná autoreflexivní kapitola – autor rozmlouvá sám se sebou",
      "Chief Salamander – diktátor mloků (narážka na Hitlera)",
    ],
    scenes: [
      "Van Toch objeví mloky v Devil Bay a začne s nimi obchodovat perlami",
      "Setkání van Tocha s Bondym v Praze – 'Nazdar, nazdárek, pane Bondy!' – zrod Salamander-Syndicate",
      "Mloci začínají odstřelovat pevniny – lidé jsou bezmocní",
      "Autorův monolog v závěru – rozmlouvá sám se sebou o konci civilizace",
    ],
    trivia:
      "Čapek reagoval na nástup Hitlera k moci (1933). Mloci symbolicky zastupují rozšiřující se fašismus. Čapek je jedním ze zakladatelů moderní sci-fi (slovo 'robot' vymyslel jeho bratr Josef pro hru R.U.R.). Historický kontext: napětí před 2. světovou válkou, hospodářská krize, selhání Společnosti národů.",
  },
  {
    id: "vancura-marketa-lazarova",
    number: 19,
    title: "Markéta Lazarová",
    titleOriginal: undefined,
    author: {
      name: "Vladislav Vančura",
      nationality: "Čech",
      lifespan: "1891–1942",
    },
    year: "1931",
    era: "Meziválečná literatura",
    movement: "Imaginativní proud české meziválečné prózy / vitalismus",
    genre: "Historický román (baladický)",
    form: "Próza, epika",
    plot: "Dva znepřátelené rody: rod loupežníka Kozlíka (sídlo na Roháčku) a rod zemana Lazara (Obořiště). Kozlíkův syn Mikoláš přepadne karavanu a zajme saského hraběte Kristiána, ale sám je zraněn. Kozlík chce spojence, ale Lazar odmítne a zradí ho. Pomsta: Mikoláš přepadne Obořiště a unese Lazarovu dceru Markétu (zaslíbenou Bohu – měla jít do kláštera). Na Roháčku vzniká mezi násilníkem Mikolášem a čistou Markétou pouto lásky. Zároveň se do sebe zamilují Kozlíkova dcera Alexandra a zajatý Kristián. Královské vojsko (hejtman Pivo) útočí. Kristián šílí a chce utéct, Alexandra ho ze strachu zabije kamenem. Kozlík je zajat. Markéta se vrací k otci, ten ji zavrhne. Mikoláš se pokusí osvobodit otce, ale je dopaden. Kozlík i Mikoláš jsou popraveni. Markéta (těhotná) a Alexandra (těhotná s Kristiánem) zůstávají samy, ale život jde dál (vitalismus).",
    characters: [
      {
        name: "Markéta Lazarová",
        description:
          "Krásná, čistá, zbožná dívka. Původně pasivní oběť, ale díky lásce k Mikolášovi dospěje v silnou ženu. Její láska je oběť i spása.",
      },
      {
        name: "Mikoláš Kozlík",
        description:
          "Loupežník, drsný, krutý, ale schopný hlubokého citu. Pro otce a rod by udělal cokoliv.",
      },
      {
        name: "Starý Kozlík",
        description:
          "Hlava rodu. Pohanský vladce, tyran, ale spravedlivý ke svým. Ztělesňuje nespoutanou přírodní sílu.",
      },
      {
        name: "Lazar",
        description:
          "Otec Markéty. Zbabělý, pokrytecký. Modlí se, ale je krutý a vypočítavý. Protipól hrdého Kozlíka.",
      },
      {
        name: "Alexandra",
        description:
          "Dcera Kozlíka. Tragická postava, miluje Kristiána, kterého v zoufalství zabije.",
      },
      {
        name: "Kristián",
        description:
          "Saský šlechtic, zajatý Kozlíkovci. Miluje Alexandru, ale šílí zoufalstvím.",
      },
    ],
    themes: [
      "Oslava nespoutaného života (vitalismus)",
      "Láska, která mění člověka",
      "Konflikt mezi středověkou krutostí a citovostí",
      "Střet pohanství a křesťanství",
      "Rodová soudržnost a čest",
      "Vítězství života nad smrtí",
    ],
    style:
      "Specifický 'vančurovský styl' – experimentuje s češtinou. Inspirace jazykem Bible kralické (humanistická čeština 16. století). Archaismy (hvozd, kvas, rkouc), přechodníky (jsa, berouc, nemajíc), inverze slovosledu ('I počal se smáti'). I o drsných věcech (vraždění, milování) se mluví básnicky. Subjektivní vypravěč: oslovuje čtenáře ('Představte si...', 'Slyšte!'), hodnotí postavy. Působí jako středověký kronikář nebo bard. Monumentalizace: postavy a činy jsou zveličovány. Bohatá metaforičnost (lyrizace prózy).",
    recognitionHints: [
      "Archaismy a přechodníky – starobylý jazyk na historický román",
      "Dva znepřátelené loupežnické rody",
      "Láska Markéty a Mikoláše – shakespearovský motiv",
      "Subjektivní vypravěč oslovující čtenáře",
      "Film Františka Vláčila (1967) – považován za nejlepší český film",
    ],
    scenes: [
      "Mikoláš unese Markétu z Obořiště – začátek jejich lásky",
      "Alexandra zabije Kristiána kamenem ze zoufalství a lásky",
      "Markéta se pokusí o sebevraždu dýkou, ale přežije – Bůh chce, aby žila dál",
      "Poprava Mikoláše – těhotná Markéta ho vidí naposledy",
    ],
    trivia:
      "Vančura byl původně lékař, člen uměleckého svazu Devětsil. Byl popraven nacisty v roce 1942 za heydrichiády. Dílo bylo geniálně zfilmováno Františkem Vláčilem (1967) – film je považován za nejlepší český film všech dob. Další díla: Rozmarné léto, Pekař Jan Marhoul, Kubula a Kuba Kubikula.",
  },
  {
    id: "vancura-rozmarne-leto",
    number: 20,
    title: "Rozmarné léto",
    titleOriginal: undefined,
    author: {
      name: "Vladislav Vančura",
      nationality: "Čech",
      lifespan: "1891–1942",
    },
    year: "1926",
    era: "Meziválečná literatura",
    movement: "Imaginativní proud české prózy / poetismus v próze",
    genre: "Humoristická novela",
    form: "Próza, epika",
    plot: "Na plovárně v městečku Krokovy Vary tráví čas tři přátelé: plavčík Antonín Důra, kanovník Roch a major Hugo. Vedou učené a malicherné debaty. Důra pronáší slavnou větu: 'Tento způsob léta zdá se mi poněkud nešťastným.' Do města přijíždí kouzelník Arnoštek a jeho krásná pomocnice Anna. Všichni tři přátelé se postupně zamilují do Anny: Důra je přistižen svou ženou Kateřinou, Roch je zbit opilci, major Hugo je zbit holí samotným Arnošťkem. Důrova žena Kateřina se mezitím bláznivě zamiluje do Arnošťka. Arnoštek se při představení zraní. Nakonec s Annou odjíždí. Kateřina se zklamaně vrací k Důrovi. Vše se vrací do starých, nudných kolejí.",
    characters: [
      {
        name: "Antonín Důra",
        description:
          "Mistr plavčí, stará se o své tělo. Poněkud ješitný, považuje se za filozofa. Slavná věta: 'Tento způsob léta...'",
      },
      {
        name: "Kanovník Roch",
        description:
          "Představitel církve a mravnosti. Používá biblické citáty, ale podlehne pokušení (Anně) stejně jako ostatní.",
      },
      {
        name: "Major Hugo",
        description:
          "Představitel armády a starých časů. Snaží se chovat galantně, ale v konfrontaci s realitou působí směšně.",
      },
      {
        name: "Arnoštek",
        description:
          "Kouzelník, potulný umělec. Malý, nedužívý, ale pro místní představuje závan dálek a exotiky.",
      },
      {
        name: "Anna",
        description:
          "Krásná, mlčenlivá pomocnice. Spíše pasivní objekt touhy tří mužů než aktivní postava.",
      },
      {
        name: "Kateřina Důrová",
        description:
          "Manželka plavčíka. Hádavá, žárlivá, ale sama se okamžitě vrhne do náruče Arnošťka.",
      },
    ],
    themes: [
      "Oslava života a krásy českého jazyka",
      "Kritika maloměšťáctví (nuda, stereotyp)",
      "Komický pohled na lidské slabosti",
      "Staří vs. mladí, stereotyp vs. dobrodružství",
      "Nesplněná touha a návrat k nudnému životu",
    ],
    style:
      "Specifický 'vančurovský styl' – jazyk je hlavní hrdina knihy. Archaismy a knižní výrazy ('Tento způsob léta zdá se mi poněkud nešťastným'). Syntax inspirovaná starou češtinou a Biblí kralickou: inverze, přechodníky ('Jsa mocen svého hrdla...', 'Vida ji...'), infinitivy na -ti (dýmiti, viděti). Vznešený jazyk na koupališti působí komicky. Humor a ironie – kontrast mezi tím, jak vznešeně postavy mluví, a jak hloupě jednají. Parodie.",
    recognitionHints: [
      "'Tento způsob léta zdá se mi poněkud nešťastným' – slavná věta",
      "Tři přátelé na koupališti a kouzelník s krásnou pomocnicí",
      "Archaismy a přechodníky na koupališti = komický kontrast",
      "Městečko Krokovy Vary, řeka Orše",
      "Film Jiřího Menzela (1967) s Rudolfem Hrušínským",
    ],
    scenes: [
      "Důra pronáší: 'Tento způsob léta zdá se mi poněkud nešťastným' – slavná úvodní věta",
      "Kanovník Roch se vydá za Annou do maringoky a je zbit opilci",
      "Major Hugo se chová jako rytíř, ale je zbit holí Arnošťkem",
      "Arnoštek s Annou odjíždí – vše se vrací do starých kolejí",
    ],
    trivia:
      "Vančura byl členem Devětsilu. Jeho próza je ovlivněna poetismem – hravost, obraznost, důraz na prožitek okamžiku. Slavný film Jiřího Menzela (1967), kde Důru hrál Rudolf Hrušínský. Další díla: Markéta Lazarová, Pekař Jan Marhoul.",
  },
  {
    id: "hrabal-ostre-sledovane-vlaky",
    number: 21,
    title: "Ostře sledované vlaky",
    titleOriginal: undefined,
    author: {
      name: "Bohumil Hrabal",
      nationality: "Čech",
      lifespan: "1914–1997",
    },
    year: "1965",
    era: "Česká literatura 60. let 20. století",
    movement: "Druhá vlna válečné prózy",
    genre: "Novela s prvky válečné prózy",
    form: "Próza, epika",
    plot: "Mladý elév Miloš Hrma se vrací do služby na nádraží v Kostomlatech po pokusu o sebevraždu (podřezal si žíly v hodinovém hotelu) – selhal při prvním sexuálním styku se svou dívkou Mášou ('zvadl mu amaryl' – trpí předčasnou ejakulací). Na nádraží se řeší aféra výpravčího Hubičky – v noci orazítkoval drážními razítky zadek telegrafistky Zdeničky Sváté. Stanicí projíždějí 'ostře sledované vlaky' (transporty zbraní). Hubička plánuje jeden takový vlak vyhodit do povětří. Hubička dohodne Milošovi setkání s Rakušankou Viktorií Freie, která přiveze výbušninu. Miloš s ní prožije úspěšný styk a získává sebevědomí. Vyleze na semafor, hodí bombu do projíždějícího německého vlaku. Vlak vybuchne, ale Miloš je spatřen německým vojákem. Střílí po sobě navzájem a oba padají do příkopu, kde umírají. Tragikomický konec – Miloš umírá ve chvíli, kdy konečně začal žít.",
    characters: [
      {
        name: "Miloš Hrma",
        description:
          "22 let, elév (začátečník). Citlivý, labilní, trpí komplexem méněcennosti kvůli svému mužství. Na konci prokáže nečekané hrdinství.",
      },
      {
        name: "Výpravčí Hubička",
        description:
          "Donchuán, sukničkář, bonviván. Proti okupantům bojuje svým způsobem (zesměšňováním, sabotáží). Milošův vzor.",
      },
      {
        name: "Přednosta stanice",
        description:
          "Chová holuby, touží po povýšení (inspektor státních drah). Trápí ho, že má pořád 'zasrané' oblečení od holubů.",
      },
      {
        name: "Zdenička Svátá",
        description:
          "Telegrafistka, nechala si potisknout pozadí razítky. Aféra je úředně vyšetřována.",
      },
      {
        name: "Rada Zedníček",
        description:
          "Kolaborant. Snaží se vnutit zaměstnancům německou propagandu, ale je směšný.",
      },
      {
        name: "Viktorie Freie",
        description:
          "Rakušanka, odbojářka. Zasvětí Miloše do sexu i odboje. Její jméno je symbolické (Viktorie = vítězství, Freie = svobodná).",
      },
    ],
    themes: [
      "Dospívání (iniciace) mladého muže na pozadí války",
      "Absurdita války (velké hrdinství vs. banální problémy s panictvím)",
      "Tragikomika",
      "Kontrast komických scén a tragických událostí",
      "Sexualita jako motiv dozrávání",
      "Civilní pohled na válku",
    ],
    style:
      "Ich-forma (Miloš Hrma) – vidíme svět jeho naivníma očima. Hrabalovský styl: hovorový jazyk, smysl pro detail a grotesku. Sexualizace – vše je propojeno s erotikou. Kontrast: razítkování zadku vs. průjezdy zubožených transportů. Retrospektivní i chronologický postup. Ironie: název 'ostře sledované vlaky' = vlaky s municí mající prioritu, ale snadný terč. Eufemismy: 'vadnoucí amaryl' (impotence). Němčina ve frázích kolaborantů.",
    recognitionHints: [
      "Aféra s razítky na zadku telegrafistky",
      "Mladý výpravčí se pokusil o sebevraždu kvůli sexuálnímu selhání",
      "Vyhození německého vojenského vlaku do povětří",
      "Malé nádraží za 2. světové války – civilní hrdinství",
      "Film Jiřího Menzela – Oscar za nejlepší cizojazyčný film (1967)",
    ],
    scenes: [
      "Miloš se vrací na nádraží po pokusu o sebevraždu – selhal při prvním styku s Mášou",
      "Hubička orazítkoval zadek Zdeničky Sváté drážními razítky – vyšetřování aféry",
      "Miloš prožije noc s Viktorií Freie a získává sebevědomí",
      "Miloš na semaforu hodí bombu do vlaku – oba vojáci padají do příkopu a umírají držíce se za ruce",
    ],
    trivia:
      "Hrabal se inspiroval vlastní zkušeností výpravčího v Kostomlatech během války. Film Jiřího Menzela (1966) získal Oscara za nejlepší cizojazyčný film. Další díla: Obsluhoval jsem anglického krále, Příliš hlučná samota, Postřižiny. Druhá vlna válečné prózy: autoři se nedívají na válku pateticky, ale skrze osudy obyčejných lidí.",
  },
  {
    id: "kundera-smesne-lasky",
    number: 22,
    title: "Směšné lásky",
    titleOriginal: undefined,
    author: {
      name: "Milan Kundera",
      nationality: "Čech (později Francouz)",
      lifespan: "1929–2023",
    },
    year: "1963–1969 (tři díly)",
    era: "Česká literatura 60. let",
    movement: "Česká próza 60. let / existencialismus",
    genre: "Sbírka povídek (filozofická, psychologická)",
    form: "Próza, epika, 7 povídek",
    plot: "Soubor 7 samostatných povídek spojených tématem tragikomiky milostných vztahů. Nikdo se nebude smát: Odborný asistent Klíma odmítá napsat posudek na špatnou práci pana Zátureckého. Vymyslí si lži a výmluvy, které ho nakonec zničí. Falešný autostop: Mladý pár z nudy začne hrát hru – dívka předstírá stopařku-svůdnici, chlapec drsného řidiče. Hra se vymkne kontrole a zničí jejich intimitu ('Jsem to já!' křičí dívka). Eduard a Bůh: Eduard chce sbalit věřící dívku Alici, proto předstírá víru v Boha. Kvůli tomu má problémy v práci, ale nakonec Alici získá a zjišťuje, že ji už nechce.",
    characters: [
      {
        name: "Klíma (Nikdo se nebude smát)",
        description:
          "Sebevědomý intelektuál, lže pro své pohodlí, ale lži ho zničí. Cynický, ale zranitelný.",
      },
      {
        name: "Pár z Falešného autostopu",
        description:
          "Mladý pár, který se ve hře ztratí – dívka se nemůže vrátit k sobě, chlapec se k ní chová jako k děvce.",
      },
      {
        name: "Eduard (Eduard a Bůh)",
        description:
          "Pragmatik, který 'věří' jen účelově. Směje se, že Bůh se musí smát lidem.",
      },
      {
        name: "Typický hrdina",
        description:
          "Intelektuál, sukničkář, cynik, který si rád zahrává s city druhých, ale nakonec se chytí do vlastní pasti.",
      },
    ],
    themes: [
      "Tragikomika milostných vztahů",
      "Motiv hry, která končí destrukcí (ztráta identity)",
      "Mystifikace a lež",
      "Ironie osudu",
      "Nemožnost brát se vážně",
      "Hra a maska – člověk hraje roli, až se jí stane",
    ],
    style:
      "Různé typy vypravěčů (ich-forma i er-forma). Esejistické pasáže – Kundera přerušuje děj filozofickými úvahami o životě a sexu. Ironie a cynismus. Absence citového zabarvení (chladný popis i u erotických scén). Aforismy fungující jako životní moudra (často cynická). Spisovná, vytříbená čeština. Přesné vyjadřování. Chladná analýza postav.",
    recognitionHints: [
      "Povídky o tragikomice lásky a hry",
      "'Jsem to já! Jsem to já!' – dívka v roli stopařky ztrácí identitu",
      "Intelektuální hrdina-cynik, který se chytí do vlastní pasti",
      "Kundera – česko-francouzský autor",
      "Esejistické pasáže uprostřed děje",
    ],
    scenes: [
      "Falešný autostop: dívka křičí 'Jsem to já!' ale už je pozdě – hra zničila intimitu",
      "Klíma se schovává před Zátureckým a jeho lži ho doženou",
      "Eduard předstírá víru, aby sbalil Alici – pak zjistí, že ji nechce",
    ],
    trivia:
      "Směšné lásky jsou posledním dílem psaným v ČSSR před Kunderovou emigrací (1975 do Francie). Později díla psal francouzsky. Vliv existencialismu (Sartre, Camus). Další díla: Žert, Nesnesitelná lehkost bytí. Kontext: Uvolnění režimu v 60. letech, možnost publikovat kritičtější díla.",
  },
  {
    id: "kundera-zert",
    number: 23,
    title: "Žert",
    titleOriginal: undefined,
    author: {
      name: "Milan Kundera",
      nationality: "Čech (později Francouz)",
      lifespan: "1929–2023",
    },
    year: "1967",
    era: "Česká literatura 60. let (Pražské jaro)",
    movement: "Česká próza 60. let",
    genre: "Společenský a psychologický román (intelektuální)",
    form: "Próza, epika, 7 kapitol",
    plot: "Student a nadšený svazák Ludvík Jahn poslal své vážné přítelkyni Markétě pohlednici: 'Optimismus je opium lidstva! Zdravý duch páchne blbostí. Ať žije Trockij! Ludvík.' Tento 'žert' je zachycen cenzurou. Ludvík je vyloučen ze strany i ze studií. Jeho nejlepší přítel Pavel Zemánek hlasuje pro jeho vyloučení. Ludvík musí na vojnu k 'černým baronům' (PTP). Zde prožívá platónskou lásku k plaché Lucii, kterou však ztratí. V 60. letech je úspěšný vědec, ale zahořklý. Potkává Helenu, manželku Pavla Zemánka. Rozhodne se pro pomstu: svede Helenu, aby Zemánka ponížil. Pomsta se mění ve frašku – Zemánek už s Helenou nežije a Ludvík mu vlastně udělal službu. Helena se pokusí o sebevraždu, ale omylem spolkne projímadlo. Román končí hořkým smířením s osudem.",
    characters: [
      {
        name: "Ludvík Jahn",
        description:
          "Intelektuál, jehož život zničil jeden vtip. Celý život upnul k pomstě, ale zjistil, že ztratil schopnost odpouštět i milovat. Tragická postava. Racionální, cynický, zahořklý.",
      },
      {
        name: "Lucie",
        description:
          "Tajemná dívka, kterou Ludvík miloval na vojně. Symbol čistoty a zranitelnosti. Ludvík ji nepochopil a ublížil jí.",
      },
      {
        name: "Pavel Zemánek",
        description:
          "Kariérista. V 50. letech fanatický svazák, co zničil Ludvíka. V 60. letech reformátor. Vždy 'na vlně', bez morálních zásad – proto je nezranitelný.",
      },
      {
        name: "Helena Zemánková",
        description:
          "Pavlova žena. Stále věří komunistickým ideálům. Tragikomická ve své snaze o lásku. Pokus o sebevraždu končí jako fraška (projímadlo).",
      },
      {
        name: "Jaroslav",
        description:
          "Ludvíkův přítel z dětství, miluje folklór. Nepolitický, snílek. Při hře na cimbál dostane infarkt.",
      },
      {
        name: "Kostka",
        description:
          "Křesťan snažící se smířit víru s komunismem. Morální oponent Ludvíka.",
      },
    ],
    themes: [
      "Nemožnost nápravy křivd z minulosti",
      "Devastace lidských osudů totalitním režimem",
      "Pomsta je zbytečná (viník se změnil)",
      "Ironie osudu – žert jako tragédie",
      "Folklór a tradice vs. moderní ideologie",
      "Zapomění a paměť",
    ],
    style:
      "Polyfonní kompozice: příběh vyprávěný ze zorného úhlu 4 různých postav (Ludvík, Helena, Jaroslav, Kostka). Každý vidí stejné události jinak. Střídání ich-forem. Jazyk se mění podle vypravěče: Helena mluví exaltovaně a ve frázích, Ludvík střízlivě a analyticky, Jaroslav s láskou k tradici. Esejistické vsuvky (muzikologické pasáže Jaroslava). Ironie – klíčový prvek (už v názvu). Kontrast: vážná témata vs. banální vyústění (projímadlo, trapnost).",
    recognitionHints: [
      "Pohlednice: 'Optimismus je opium lidstva! Ať žije Trockij!'",
      "Žert, který zničí život – vyloučení ze strany",
      "Pomsta svedením manželky bývalého přítele – ale je to fraška",
      "Polyfonní vyprávění – 4 vypravěči",
      "Jízda králů – symbol mizející tradice",
    ],
    scenes: [
      "Ludvík píše Markétě pohlednici: 'Optimismus je opium lidstva! Ať žije Trockij!'",
      "Hlasování o Ludvíkově vyloučení – Pavel Zemánek hlasuje pro",
      "Ludvík svede Helenu jako pomstu – zjistí, že Zemánek už s ní nežije",
      "Helena spolkne projímadlo místo léku při pokusu o sebevraždu – tragikomický konec",
    ],
    trivia:
      "Román vyšel v roce 1967 během Pražského jara a byl okamžitě senzací. Po okupaci 1968 byla kniha zakázána a stažena z knihoven. Zfilmováno Jaromilem Jirešem (1968). Kundera se podílel na scénáři. Román má světovou úroveň – řeší existenciální otázky srozumitelné i mimo kontext komunismu.",
  },
  {
    id: "havel-audience",
    number: 24,
    title: "Audience",
    titleOriginal: undefined,
    author: {
      name: "Václav Havel",
      nationality: "Čech",
      lifespan: "1936–2011",
    },
    year: "1975",
    era: "Česká literatura 70. let (normalizace)",
    movement: "Absurdní drama",
    genre: "Absurdní drama (tragikomedie)",
    form: "Drama, jednoaktovka",
    plot: "Spisovatel Ferdinand Vaněk (zakázaný autor, nyní pracuje v pivovaru jako 'příkulovač' sudů) je pozván do kanceláře svého nadřízeného – Sládka. Sládek pije pivo, nabízí Vaňkovi, snaží se navázat 'přátelský' hovor a postupně se opíjí. Sládek se svěří, že na něj tlačí tajná policie (StB), aby na Vaňka psal hlášení. Sládek ale neví, co psát, protože Vaňkovým intelektuálním věcem nerozumí. Absurdní pointa: Sládek navrhne Vaňkovi, aby ta hlášení na sebe psal sám (jakožto spisovatel to umí lépe). Vaněk to z principu odmítne. Sládek se urazí a opije do bezvědomí. Vaněk odejde, ale pak se vrátí, zaklepe a celá situace začíná nanovo (cykličnost). Vaněk sám říká Sládkovy fráze.",
    characters: [
      {
        name: "Ferdinand Vaněk",
        description:
          "Alter ego Václava Havla. Disident, intelektuál, pracuje manuálně. Zdvořilý, málomluvný, pasivní, ale morálně pevný. Celý čas Sládkovi vyká, odmítá pít pivo.",
      },
      {
        name: "Sládek",
        description:
          "Vedoucí v pivovaru. Představitel 'obyčejného člověka' a konzumního života. Pod tlakem režimu (bojí se o místo). Vlezlý, familiérní, opilý, sebelítostný. Opakuje fráze.",
      },
    ],
    themes: [
      "Absurdita totalitního režimu",
      "Morální dilema (nezradit své zásady vs. přežít)",
      "Manipulace a neschopnost komunikace",
      "Propast mezi intelektuálem a 'lidem'",
      "Bezvýchodnost a cykličnost života v totalitě",
      "Rezignace a šedá zóna",
    ],
    style:
      "Jednoaktovka. Cyklická kompozice: rozhovor se točí v kruhu, Sládek opakuje stejné otázky ('A lidi, jsou lidi?'), stejné fráze, stále otevírá pivo a chodí na záchod. Děj nikam nesměřuje – demonstruje bezvýchodnost. Dialog založený na nepoměru: Sládek mluví hodně (monology), Vaněk odpovídá jednoslovně. Opakování slov a situací vytváří pocit trapnosti a absurdity. Kontrast spisovného jazyka (Vaněk) vs. obecná čeština a vulgarismy (Sládek). Klíčová věta: 'To jsou paradoxy, co?'",
    recognitionHints: [
      "Sládek navrhne, aby disident psal hlášení sám na sebe",
      "Cyklická struktura – rozhovor se opakuje dokola",
      "'To jsou paradoxy, co?' – opakující se fráze",
      "Pivovar, sudy, neustálé pití piva",
      "Havel jako disident pracující v pivovaru",
      "Vaněk = alter ego Havla",
    ],
    scenes: [
      "Sládek opakuje: 'A lidi, jsou lidi?' – cykličnost rozhovoru",
      "Sládek navrhne Vaňkovi, aby psal hlášení sám na sebe – absurdní pointa",
      "Vaněk odmítne a Sládek se urazí: 'Ty to máš dobrý, ty jsi za vodou'",
      "Závěrečná scéna: Vaněk odejde, vrátí se a celá situace začíná znovu",
    ],
    trivia:
      "Havel v 70. letech skutečně pracoval v trutnovském pivovaru. Audience je první z 'vaňkovských her' (dále Vernisáž, Protest). Šířena v samizdatu (zakázaná literatura) a hrána v bytových divadlech. Kontext: Doba normalizace po roce 1968. 'Šedá zóna' – lidé jako Sládek se přizpůsobili režimu. Havel – dramatik, disident, poslední prezident ČSSR a první prezident ČR.",
  },
  {
    id: "fuks-spalovac-mrtvol",
    number: 25,
    title: "Spalovač mrtvol",
    titleOriginal: undefined,
    author: {
      name: "Ladislav Fuks",
      nationality: "Čech",
      lifespan: "1923–1994",
    },
    year: "1967",
    era: "Česká literatura 60. let",
    movement: "Psychologická próza",
    genre: "Psychologická novela / hororová psychologická novela",
    form: "Próza, epika, 19 krátkých kapitol",
    plot: "Karl (Karel) Kopfrkingl je zaměstnanec krematoria ve Strašnicích. Žije idylický rodinný život se ženou Marií ('Lakmé') a dětmi Zinou a Milim. Považuje se za vzdělaného, citlivého člověka, miluje rodinu, čte Tibetskou knihu mrtvých. Postupně mu jeho přítel Reinke (esesák) 'otevírá oči' – Karl si uvědomí svou domnělou německou krev a propadne nacistické ideologii. Manželka má židovský původ. Karl ji v krematoriu uškrtí ('zachraňuje' ji před tím horším, co přijde) a zfinguje sebevraždu. Stejně 'z lásky' zabije svého syna Milího. Dceru Zinu ušetří a dává ji Schmidtovi. Po válce končí v psychiatrické léčebně. Dílo ukazuje, jak se z obyčejného člověka snadno stane vrah, když je vystaven totalitní ideologii.",
    characters: [
      {
        name: "Karl Kopfrkingl",
        description:
          "Zdánlivě laskavý zaměstnanec krematoria. Postupně se z něj stává vrah a nacista. Uhlazené, vlídné věty kontrastují s děsivým obsahem. Opakuje 'moje krásná, moje čistá'. Přesvědčí sám sebe, že vražda je 'akt lásky'.",
      },
      {
        name: "Marie ('Lakmé') Kopfrkinglová",
        description:
          "Karlova žena, židovského původu. Tichá, oddaná. Karl ji zavraždí v krematoriu a zfinguje sebevraždu.",
      },
      {
        name: "Zina",
        description:
          "Karlova dcera. Jediná, která je ušetřena – Karl ji dá Schmidtovi.",
      },
      {
        name: "Mili",
        description:
          "Karlův syn, nemocný hoch. Karl ho zabije 'z lásky' – přesvědčí se, že ho zachraňuje.",
      },
      {
        name: "Willi Reinke",
        description:
          "Karlův přítel, esesák. Podněcuje Karla k nacismu. Manipulátor, který 'otevírá oči'.",
      },
    ],
    themes: [
      "Psychologická deformace člověka totalitní ideologií",
      "Banalita zla – jak se z obyčejného člověka stane vrah",
      "Nacismus a manipulace",
      "Masová ideologie vs. individuum",
      "Smrt a její 'osvobozující' funkce (zvrácená filozofie)",
      "Rodina jako oběť ideologie",
    ],
    style:
      "Er-forma, ale silně omezená na Kopfrkinglovu perspektivu (pseudo-objektivní vypravěč). Ironický kontrast: Kopfrkinglovy uhlazené, vlídné věty s děsivým obsahem. Opakování (osobní tiky: 'moje krásná, moje čistá'). Groteskní humor a makabróznf popisy. 19 krátkých kapitol, text se zrychluje k závěru. Vnitřní monolog. Motivy: krematorium, oheň, popel, masky, peří, kočka, rakve, číslo 14, Tibet (kniha mrtvých).",
    recognitionHints: [
      "Zaměstnanec krematoria, který se stane nacistou a vrahem",
      "'Moje krásná, moje čistá' – opakující se fráze",
      "Tibetská kniha mrtvých – Kopfrkinglova posedlost",
      "Krematorium ve Strašnicích",
      "Film Juraje Herze (1968) s Rudolfem Hrušínským",
      "Groteskní kontrast vlídných slov a hrozných činů",
    ],
    scenes: [
      "Kopfrkinglovi navštěvují zoo – kde se seznámili. Karl laskavě popisuje zvířata, zatímco jeho myšlenky temní",
      "Karl uškrtí svou ženu v krematoriu a zfinguje sebevraždu – 'zachraňuje' ji",
      "Karl zabije syna Milího 'z lásky' – přesvědčí se, že ho osvobozuje",
      "Závěrečná scéna – Karl končí v psychiatrické léčebně, přesvědčen, že zachránil svět",
    ],
    trivia:
      "Fuks je hlavní představitel psychologické prózy. Známá díla s tématem holocaustu: Pan Theodor Mundstock, Mí černovlasí bratři. Filmová adaptace: 1968, režie Juraj Herz, hrají Rudolf Hrušínský (Kopfrkingl) a Vlasta Chramostová (Lakmé) – kultovní český film. Historický kontext: Praha 1938–1939, období před a po Mnichovské dohodě, vznik Protektorátu.",
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.id === slug);
}
