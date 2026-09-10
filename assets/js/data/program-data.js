/* =========================================================
   VOLEBNÍ PROGRAM — komunální volby 2026
   ---------------------------------------------------------
   Tady upravujete obsah stránky "Volební program". Nic jiného
   se měnit nemusí — web se sám podle tohoto souboru přeskládá.

   Každá položka má tato pole:
     tema     – název tématu (nadpis dlaždice)
     podtitul – krátký podtitul, zobrazí se pod tématem na dlaždici
     text     – delší text, zobrazí se po rozkliknutí dlaždice
     mdiIcon  – název ikony z knihovny Material Design Icons,
                BEZ předpony "mdi-". Seznam a náhledy ikon:
                https://pictogrammers.com/library/mdi/
     foto     – cesta k obrázku k danému bodu programu (nepovinné,
                pokud necháte prázdný řetězec "", fotka se nezobrazí).
                Obrázky ukládejte do assets/img/program/.

   Obsah je převzatý z "programové teze – UPGRADE.docx". Fotky
   k jednotlivým bodům zatím chybí — jakmile je budete mít, uložte
   je do assets/img/program/ pod názvy uvedenými níže.
   ========================================================= */

window.PROGRAM_DATA = [
  {
    tema: "Více bytů pro Vrchlabáky",
    podtitul: "Opravíme prázdné byty a zastavíme vylidňování našeho města",
    text: "Vrchlabí ztratilo za posledních 25 let více než desetinu svých obyvatel. Důvod? Cenově dostupné bydlení pro místní občany zde prakticky neexistuje. Město má přitom ve svém držení více než 80 bytů, které dlouhou dobu leží ladem. Tyto léta opuštěné byty je potřeba co nejdříve opravit a poté je nabídnout novým nájemníkům, ale i lidem vykonávajícím klíčové profese pro zdejší společnost.",
    mdiIcon: "home-city-outline",
    foto: "assets/img/program/bydleni.jpg"
  },
  {
    tema: "Vstříc potřebám seniorů",
    podtitul: "Denní stacionář, dotované senior taxi, MHD zdarma",
    text: "Naše společnost stárne a lidí v seniorském věku v našem městě přibývá. Tito lidé si zaslouží specifickou nabídku služeb odrážejících jejich každodenní potřeby. Pro občany starší 65 let zajistíme městskou hromadnou dopravu zdarma a zavedeme dotovaný systém senior taxi pro jejich maximální mobilitu. Podpoříme vznik denního stacionáře a posílení systému pečovatelské služby.",
    mdiIcon: "hand-heart-outline",
    foto: "assets/img/program/seniori.jpg"
  },
  {
    tema: "Prosperující město",
    podtitul: "Rozvoj podnikání, nové atraktivní pracovní příležitosti",
    text: "Už není možné spoléhat se pouze na zdejší tradiční průmyslová odvětví či cestovní ruch. Připravíme proto zázemí pro nové zaměstnavatele nabízející práci s vyšší přidanou hodnotou a tedy lépe placení, ale i pro jednotlivce v rámci sdílených pracovních prostor.",
    mdiIcon: "briefcase-outline",
    foto: "assets/img/program/podnikani.jpg"
  },
  {
    tema: "Město Vrchlabí není jen jeho centrum",
    podtitul: "Skoncujeme s letitým přehlížením Hořejšího Vrchlabí a Podhůří",
    text: "V Hořejším Vrchlabí i v Podhůří žijí tisíce našich spoluobčanů, o které stávající vedení města dlouhodobě nejeví zájem. V těchto lokalitách chátrá infrastruktura, mizí obchody a neřeší se oprávněné požadavky a potřeby zdejších obyvatel. Nastartujeme aktivity a podpoříme projekty vedoucí k oživení těchto lokalit.",
    mdiIcon: "home-group",
    foto: "assets/img/program/ctvrte.jpg"
  },
  {
    tema: "Lepší dopravní obslužnost města",
    podtitul: "Úloha MHD? Vozit občany do práce, na nákup i za zábavou",
    text: "Dopravní obslužné trasy rozšíříme o nové zastávky (Aquacentrum, Kaufland; v zimě lyžařský areál Vejsplachy…) a přizpůsobíme jízdní řád potřebám občanů pro cestu do zaměstnání, za zábavou či za sportem. Revizi podrobíme i dálkové spoje a systém jejich zastávek na území našeho města.",
    mdiIcon: "bus-side",
    foto: "assets/img/program/doprava.jpg"
  },
  {
    tema: "Podpora všem našim sportovcům",
    podtitul: "Narovnáme systém městských sportovních dotací",
    text: "Dosavadní systém podpory jednotlivých oddílů ze strany města Vrchlabí je diskriminační, nevyvážený a zvýhodňuje jen některé sporty. Oprávněné požadavky a ekonomické potřeby mají však i další sporty a jejich mateřské kluby. Nesmíme přicházet o talenty napříč jednotlivými sporty. Systém městských dotací proto projde důkladnou revizí.",
    mdiIcon: "trophy-outline",
    foto: "assets/img/program/sport.jpg"
  }
];
