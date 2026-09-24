/* ODS Vrchlabí — sdílená JS logika pro všechny stránky.
   Obsah se bere z assets/js/data/*.js. */
(function () {
  "use strict";

  var PLACEHOLDER_PHOTO = "assets/img/placeholder-kandidat.svg";

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initActiveLink();
    initProgramTiles();
    initCandidates();
    initVoteCalendar();
  });

  /* Tlačítko "Přidat do kalendáře" na homepage — vygeneruje .ics se
     schůzkou "Jít volit ODS Vrchlabí" a nechá ho stáhnout/otevřít. */
  function initVoteCalendar() {
    var btn = document.getElementById("add-to-calendar-btn");
    if (!btn) return;

    btn.addEventListener("click", function () {
      var stamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      var ics = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//ODS Vrchlabi//Komunalni volby 2026//CS",
        "CALSCALE:GREGORIAN",
        "BEGIN:VTIMEZONE",
        "TZID:Europe/Prague",
        "BEGIN:DAYLIGHT",
        "TZOFFSETFROM:+0100",
        "TZOFFSETTO:+0200",
        "TZNAME:CEST",
        "DTSTART:19700329T020000",
        "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU",
        "END:DAYLIGHT",
        "BEGIN:STANDARD",
        "TZOFFSETFROM:+0200",
        "TZOFFSETTO:+0100",
        "TZNAME:CET",
        "DTSTART:19701025T030000",
        "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
        "END:STANDARD",
        "END:VTIMEZONE",
        "BEGIN:VEVENT",
        "UID:volby2026-" + stamp + "@odsvrchlabi.cz",
        "DTSTAMP:" + stamp,
        "DTSTART;TZID=Europe/Prague:20261010T090000",
        "DTEND;TZID=Europe/Prague:20261010T100000",
        "SUMMARY:Jít volit ODS Vrchlabí",
        "LOCATION:Vrchlabí",
        "DESCRIPTION:Komunální volby 2026 – hlasovací místnosti jsou otevřené v pátek 9. října 14:00–22:00 a v sobotu 10. října 8:00–14:00. Podpořte ODS Vrchlabí\\, kandidátní listina číslo 1.",
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\r\n");

      var blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "jit-volit-ods-vrchlabi.ics";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    });
  }

  /* ---------- Mobilní navigace ---------- */
  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-main-nav]");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Zvýraznění aktivní položky menu ---------- */
  function initActiveLink() {
    var current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-main-nav] a").forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === current) link.classList.add("is-active");
    });
  }

  /* ---------- Volební program: dlaždice + modal ---------- */
  function initProgramTiles() {
    var grid = document.querySelector("[data-program-grid]");
    if (!grid || !window.PROGRAM_DATA) return;

    var data = window.PROGRAM_DATA;
    grid.innerHTML = data.map(function (item, index) {
      return (
        '<button type="button" class="program-tile" data-index="' + index + '" aria-haspopup="dialog">' +
          '<span class="program-icon"><i class="mdi mdi-' + escapeAttr(item.mdiIcon || "star-outline") + '" aria-hidden="true"></i></span>' +
          "<h3>" + escapeHtml(item.tema) + "</h3>" +
          '<p class="program-sub">' + escapeHtml(item.podtitul) + "</p>" +
          '<span class="program-cta">Číst více <i class="mdi mdi-arrow-right" aria-hidden="true"></i></span>' +
        "</button>"
      );
    }).join("");

    var overlay = document.querySelector("[data-program-modal]");
    if (!overlay) return;
    var iconEl = overlay.querySelector("[data-modal-icon]");
    var titleEl = overlay.querySelector("[data-modal-title]");
    var subEl = overlay.querySelector("[data-modal-sub]");
    var textEl = overlay.querySelector("[data-modal-text]");
    var photoEl = overlay.querySelector("[data-modal-photo]");
    var closeEls = overlay.querySelectorAll("[data-modal-close]");

    grid.querySelectorAll(".program-tile").forEach(function (tile) {
      tile.addEventListener("click", function () {
        var item = data[Number(tile.getAttribute("data-index"))];
        iconEl.className = "mdi mdi-" + escapeAttr(item.mdiIcon || "star-outline");
        titleEl.textContent = item.tema;
        subEl.textContent = item.podtitul;
        textEl.textContent = item.text;
        if (item.foto) {
          photoEl.src = item.foto;
          photoEl.alt = item.tema;
          photoEl.style.display = "";
          photoEl.onerror = function () { photoEl.style.display = "none"; };
        } else {
          photoEl.style.display = "none";
        }
        openModal(overlay);
      });
    });

    closeEls.forEach(function (el) {
      el.addEventListener("click", function () { closeModal(overlay); });
    });
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal(overlay);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) closeModal(overlay);
    });
  }

  function openModal(overlay) {
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    var closeBtn = overlay.querySelector("[data-modal-close]");
    if (closeBtn) closeBtn.focus();
  }
  function closeModal(overlay) {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  /* ---------- Kandidátka ---------- */
  function initCandidates() {
    var leaderSlot = document.querySelector("[data-leader-card]");
    var gridSlot = document.querySelector("[data-candidates-grid]");
    if ((!leaderSlot && !gridSlot) || !window.KANDIDATI_DATA) return;

    var data = window.KANDIDATI_DATA;
    if (data.length === 0) return;

    var leader = data[0];
    if (leaderSlot) {
      leaderSlot.innerHTML =
        '<img class="leader-photo" src="' + escapeAttr(leader.foto || PLACEHOLDER_PHOTO) + '" alt="' + escapeAttr(leader.jmeno) + '" onerror="this.src=\'' + PLACEHOLDER_PHOTO + '\'">' +
        '<div class="leader-body">' +
          '<span class="leader-order">Lídr kandidátky · č. 1</span>' +
          "<h2>" + escapeHtml(leader.jmeno) + "</h2>" +
          '<span class="badge ' + (leader.prislusnost === "ODS" ? "badge-ods" : "badge-bezpp") + '">' + escapeHtml(leader.prislusnost) + "</span>" +
          (leader.popis ? '<p class="leader-desc">' + escapeHtml(leader.popis) + "</p>" : "") +
        "</div>";
    }

    if (gridSlot) {
      var rest = data.slice(1);
      gridSlot.innerHTML = rest.map(function (c, i) {
        var order = i + 2;
        return (
          '<div class="candidate-card">' +
            '<span class="candidate-number">' + order + "</span>" +
            '<img class="candidate-photo" src="' + escapeAttr(c.foto || PLACEHOLDER_PHOTO) + '" alt="' + escapeAttr(c.jmeno) + '" onerror="this.src=\'' + PLACEHOLDER_PHOTO + '\'">' +
            "<h3>" + escapeHtml(c.jmeno) + "</h3>" +
            '<span class="badge ' + (c.prislusnost === "ODS" ? "badge-ods" : "badge-bezpp") + '">' + escapeHtml(c.prislusnost) + "</span>" +
          "</div>"
        );
      }).join("");
    }
  }

  /* ---------- Utility ---------- */
  function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function escapeAttr(str) { return escapeHtml(str); }
})();
