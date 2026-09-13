# Web ODS Vrchlabí — komunální volby 2026

Statický web (HTML/CSS/JS, žádný build). 4 stránky:

- `index.html` — homepage / rozcestník
- `volebni-program.html` — volební program (dlaždice s tématy)
- `kandidatka.html` — kandidátka
- `kontakty.html` — kontakty

## Spuštění

Čistě statické soubory — stačí otevřít `index.html` v prohlížeči, nebo pustit
přes Live Server / libovolný static server.

## Obsah

Program a kandidátka se needitují v HTML, ale v datových souborech:

- `assets/js/data/program-data.js` — body programu (`tema`, `podtitul`, `text`, `mdiIcon`, `foto`)
- `assets/js/data/kandidati-data.js` — kandidáti (`jmeno`, `prislusnost`, `foto`, `popis` jen u lídra)

Obě jsou obyčejná JS pole objektů, `main.js` je při načtení stránky vyrenderuje do DOMu.

**Ikony:** `mdiIcon` = název z https://pictogrammers.com/library/mdi/ bez prefixu `mdi-`.

**Fotky programu:** `assets/img/program/*.jpg`, název souboru = hodnota `foto` v datech.
Chybějící/nenačtená fotka web nerozbije — dlaždice/detail se prostě zobrazí bez ní.

## Styl

Barvy dle grafického manuálu ODS (ods.cz/o-nas/grafika): `--ods-blue #034ea2`,
gradient `#1e398d → #009edb`. Avenir Next LT Pro je licencovaný font, takže je
nahrazený Poppins (nadpisy) + Inter (text) z Google Fonts.

## Logo

`assets/img/logo-ods.png` v hlavičce a patičce. Když chybí nebo se nenačte,
`onerror` v HTML přepne na textový fallback "V" (`odsLogoFallback()`, inline
`<script>` v `<head>` každé stránky).

## Deploy

Statika bez buildu — nahrát celou složku na hosting / Netlify / GitHub Pages
tak, jak je.
