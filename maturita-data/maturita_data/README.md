# Datový balík pro Claude Code — Maturita 2026

Tento balík obsahuje úplně všechno, co potřebuje Claude Code k tomu, aby přepracoval data v aplikaci Maturita 2026.

## Soubory v tomto balíku

| Soubor / složka | Obsah |
|---|---|
| **`PROMPT_PRO_CLAUDE_CODE.md`** | Hlavní prompt — toto pošli Claude Code |
| `sbirka_problems.txt` | 225 očíslovaných matematických úloh ze Sbírky |
| `kategorizace.md` | Mapování úloh do 25 mat. témat |
| `photo_index.md` | Co je na každé z 31 fotek + mapování na fyz. témata |
| `cestina_index.md` | Mapování 25 knih na zdrojové soubory |
| `photos/` | 31 fotek ručně psané teorie a řešených příkladů z fyziky |
| `cestina_knihy_pdf/` | 25 strukturovaných 8-bodových rozborů (po jedné knize) |
| `cestina_rozbory_pdf/` | 13 detailních rozborů s ukázkou textu pro 12 knih |
| `cestina_docx/` | 6 nejdetailnějších rozborů + národní obrození (kontext) |

## Jak to spustit

1. **Rozbal zip** vedle své aplikace `maturita-app/`. Měla by vzniknout struktura:
   ```
   /tvuj/projekt/
   ├── maturita-app/        ← tvoje aplikace
   └── maturita-data/       ← tento balík
       ├── PROMPT_PRO_CLAUDE_CODE.md
       ├── sbirka_problems.txt
       ├── kategorizace.md
       ├── photo_index.md
       ├── cestina_index.md
       ├── photos/
       ├── cestina_knihy_pdf/
       ├── cestina_rozbory_pdf/
       └── cestina_docx/
   ```

2. **Otevři terminál** v adresáři `/tvuj/projekt/` (NE v `maturita-app/` — Claude Code potřebuje vidět oba adresáře):
   ```bash
   cd /tvuj/projekt/
   claude
   ```

3. **Zkopíruj obsah** souboru `PROMPT_PRO_CLAUDE_CODE.md` a vlož do Claude Code jako první zprávu.

4. **Nech ho pracovat.** Bude to chvíli trvat — stovky souborových operací. Když se zasekne, dej mu pokyn `pokračuj` nebo `spusť build a oprav chyby`.

5. **Po doběhnutí** si v terminálu spusť aplikaci:
   ```bash
   cd maturita-app
   npm run dev
   ```
   a podívej se na `http://localhost:3000/cestina`, `/matika` a `/fyzika`. Zkontroluj 3 témata/knihy v každém modulu.

## Pokud něco zlobí

- **TypeScript chyby**: dej Claude Code pokyn `spusť npm run build a oprav chyby`
- **Notace vypadá divně**: pošli mu screenshot a řekni `tahle úloha má rozbitou notaci`
- **Chybí téma**: pošli mu odkaz na konkrétní fotku v `maturita-data/photos/`

## Pokud nemáš Claude Code

Návod na instalaci: https://docs.claude.com/en/docs/claude-code/setup
- `npm i -g @anthropic-ai/claude-code`
- `claude` (přihlášení)

Spustíš stejně, jako je popsáno výše.
