# Web ODS Vrchlabí — komunální volby 2026

Jednoduchý responzivní web (HTML/CSS/JS, žádný build proces) pro místní
sdružení ODS Vrchlabí. Skládá se ze 4 stránek:

- `index.html` — hlavní stránka / rozcestník
- `volebni-program.html` — volební program (dlaždice s tématy)
- `kandidatka.html` — kandidátka pro komunální volby 2026
- `kontakty.html` — kontakty

## Jak web spustit / prohlédnout

Web je čistě statický — žádný server ani instalace není potřeba.
Nejjednodušší je otevřít `index.html` přímo v prohlížeči (poklikáním),
nebo si ve VS Code nainstalovat rozšíření "Live Server" pro plynulejší
prohlížení s automatickým obnovováním.

## Co upravovat — obsah

**Neupravujte HTML stránky, pokud nechcete měnit strukturu webu.**
Textový obsah, který se mění nejčastěji, je v těchto dvou souborech:

- `assets/js/data/program-data.js` — obsah volebního programu
  (téma, podtitul, text, ikona, fotka)
- `assets/js/data/kandidati-data.js` — kandidátka (jméno, politická
  příslušnost, fotka, popis u lídra)

Oba soubory jsou obyčejný JavaScript pole objektů s komentáři u
každého pole — otevřete je v Poznámkovém bloku, VS Code nebo
libovolném textovém editoru, upravte text mezi uvozovkami a uložte.
Web se po obnovení stránky sám přeskládá podle nového obsahu.

### Ikony volebního programu

Pole `mdiIcon` odkazuje na knihovnu Material Design Icons. Seznam a
náhled všech ikon: https://pictogrammers.com/library/mdi/ — zkopírujte
název ikony BEZ předpony `mdi-` (např. u ikony `mdi-home-city-outline`
napište do souboru jen `home-city-outline`).

## Co je potřeba doplnit / zkontrolovat

1. **Fotky k jednotlivým bodům volebního programu** — pole `foto` v
   `program-data.js` odkazuje na soubory v `assets/img/program/`
   (`bydleni.jpg`, `seniori.jpg`, `podnikani.jpg`, `ctvrte.jpg`,
   `doprava.jpg`, `sport.jpg`, `bezpecnost.jpg`, `parkovani.jpg`),
   ty zatím ve složce nejsou. Dokud chybí, dlaždice a detail bodu se
   zobrazí bez fotky (chybějící obrázek web nijak nerozbije). Stačí
   do `assets/img/program/` nahrát fotky pod těmito názvy.

Fotky kandidátů, logo ODS i e-mailový kontakt jsou už doplněné.

## Grafický styl

Barvy vycházejí z aktuálního grafického manuálu ODS
(https://www.ods.cz/o-nas/grafika): plná modrá `#034ea2` a přechod
`#1e398d → #009edb`. Písmo Avenir Next LT Pro z manuálu je licencované,
proto web používá volně dostupné náhrady Poppins (nadpisy) a Inter
(text) z Google Fonts, které mají podobný moderní geometrický charakter.

## Logo

Hlavička a patička používají soubor `assets/img/logo-ods.png`. Pokud
by tento soubor někdy chyběl nebo se poškodil, web se sám přepne na
náhradní textovou značku "V" (viz `assets/js/main.js` /
`odsLogoFallback` v hlavičce každé stránky) — web tím nespadne, jen
se dočasně zobrazí bez loga.

## Nasazení

Jde o čistě statické soubory — po doplnění obsahu je možné celou
složku nahrát na jakýkoli webhosting (FTP) nebo použít službu jako
Netlify / GitHub Pages. Stačí nahrát celý obsah této složky tak, jak
je (žádné buildování).
