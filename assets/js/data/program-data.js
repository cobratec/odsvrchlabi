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

   Obsah je převzatý ze souboru "programové teze.docx". Fotky
   k jednotlivým bodům zatím chybí — jakmile je budete mít, uložte
   je do assets/img/program/ pod názvy uvedenými níže.
   ========================================================= */

window.PROGRAM_DATA = [
  {
    tema: "Více bytů pro Vrchlabáky",
    podtitul: "Opravíme prázdné byty a zastavíme vylidňování našeho města",
    text: "Vrchlabí ztratilo za posledních 25 let více než desetinu svých obyvatel. Důvod? Cenově dostupné bydlení pro místní občany zde prakticky neexistuje. Město má přitom ve svém držení více než 80 bytů, které dlouhou dobu leží ladem a potřebují kompletní rekonstrukci. Místo investic do nich radnice v posledních letech utopila desítky milionů korun v parkovištích a dalších nepotřebných stavebních projektech. Tyto léta opuštěné byty je potřeba co nejdříve opravit a poté je nabídnout novým nájemníkům, ale i lidem vykonávajícím klíčové profese pro zdejší společnost.",
    mdiIcon: "home-city-outline",
    foto: "assets/img/program/bydleni.jpg"
  },
  {
    tema: "Vstříc potřebám seniorů",
    podtitul: "Denní stacionář, dotované senior taxi, MHD zdarma",
    text: "Naše společnost stárne a lidí v seniorském věku v našem městě přibývá. Dosavadní vedení města dlouhá léta tento fenomén přehlíželo a nereagovalo na něj. Seniory vnímáme jako nedílnou součást naší městské komunity a proto si zaslouží specifickou nabídku služeb odrážejících jejich každodenní potřeby. Pro občany starší 65 let zajistíme městskou hromadnou dopravu zdarma a zavedeme dotovaný systém senior taxi pro jejich maximální mobilitu. Podpoříme vznik denního stacionáře a posílení systému pečovatelské služby.",
    mdiIcon: "hand-heart-outline",
    foto: "assets/img/program/seniori.jpg"
  },
  {
    tema: "Prosperující město",
    podtitul: "Rozvoj podnikání, nové atraktivní pracovní příležitosti",
    text: "Pro budoucí rozvoj města a udržení jeho prosperity je potřeba reagovat na proměnu ekonomiky a sledovat trendy. Už nebude možné spoléhat se pouze na zdejší tradiční průmyslová odvětví či cestovní ruch. Připravíme proto zázemí pro nové zaměstnavatele na území města, ale i proaktivní jednotlivce v rámci sdílených pracovních prostor. Od této symbiózy si slibujeme nabídku nových atraktivních pracovních příležitostí pro místní obyvatele.",
    mdiIcon: "briefcase-outline",
    foto: "assets/img/program/podnikani.jpg"
  },
  {
    tema: "Město Vrchlabí není jen jeho centrum",
    podtitul: "Skoncujeme s letitým přehlížením Hořejšího Vrchlabí a Podhůří",
    text: "V Hořejším Vrchlabí i v Podhůří žijí tisíce našich spoluobčanů. Tyto čtvrti čelí dlouhodobému nezájmu ze strany současného vedení našeho města. Chátrá zde infrastruktura, mizí obchody a neřeší se oprávněné požadavky a potřeby zdejších obyvatel. Toto přehlížení musí skončit! Nastartujeme aktivity a projekty vedoucí k oživení těchto lokalit včetně potřebných investic do místní infrastruktury.",
    mdiIcon: "home-group",
    foto: "assets/img/program/ctvrte.jpg"
  },
  {
    tema: "Lepší dopravní obslužnost města",
    podtitul: "Úloha MHD? Vozit občany do práce, na nákup i za zábavou",
    text: "Jízdní řády autobusů městské hromadné dopravy musí odrážet především potřeby občanů a zlepšit obslužnost města Vrchlabí. Dopravní obslužné trasy rozšíříme o nové zastávky (Aquacentrum, Kaufland; v zimě lyžařský areál Vejsplachy…) a přizpůsobíme jízdní řád potřebám občanů pro cestu do zaměstnání, za zábavou či za sportem. Revizi podrobíme i dálkové spoje a systém jejich zastávek na území našeho města.",
    mdiIcon: "bus-side",
    foto: "assets/img/program/doprava.jpg"
  },
  {
    tema: "Podpora všem našim sportovcům",
    podtitul: "Narovnáme systém městských sportovních dotací",
    text: "Vrchlabí je městem sportu a v rozličných oddílech se mu věnuje velké množství zdejších obyvatel. Řada zdejších sportovců úspěšně reprezentuje (nejen) naše město na tuzemských i zahraničních akcích. Dosavadní systém podpory jednotlivých oddílů ze strany města Vrchlabí je však diskriminační, nevyvážený a nezohledňuje jejich oprávněné požadavky a ekonomické potřeby. Zrevidujeme proto systém městských dotací jednotlivým klubům a narovnáme podmínky jejich podpory, abychom nepřicházeli o talenty napříč všemi sporty.",
    mdiIcon: "trophy-outline",
    foto: "assets/img/program/sport.jpg"
  },
  {
    tema: "O naší bezpečnosti nebudeme smlouvat",
    podtitul: "Kontrola a vymáhání pravidel nesmí být jen zbožným přáním",
    text: "Chceme upravit agendu městské policie tak, aby měli strážníci více prostoru věnovat se tomu, co obyvatelé skutečně vnímají – pravidelnému monitoringu problémových míst, prevenci a rychlé reakci na opakující se problémy. Součástí musí být také důslednější kontrola a vymáhání pravidel týkajících se požívání alkoholu na veřejných místech tam, kde jej městská vyhláška omezuje. Jsme pro Vrchlabí, kde se lidé cítí bezpečně nejen ve svém přímém sousedství, ale i v samotném centru či cestou domů.",
    mdiIcon: "shield-check-outline",
    foto: "assets/img/program/bezpecnost.jpg"
  },
  {
    tema: "Fungující doprava = živé město",
    podtitul: "Dopravu musíme přizpůsobit našim potřebám, ne ji dusit",
    text: "Současné vedení radnice vede letitý a nesmiřitelný boj proti dopravě ve městě. Na vozovkách vybudovalo hrby a umělé schody, silnice se nesmyslně zužují a rozšiřují se chodníky. Parkovací místa se zmenšují, zmenšuje se jejich počet a komplikuje způsob parkování. Zásobování provozoven v centru komplikuje průjezd městem. V zájmu podpory zaměstnanosti a cestovního ruchu v centru města je nezbytné změnit systém parkování.",
    mdiIcon: "parking",
    foto: "assets/img/program/parkovani.jpg"
  }
];
