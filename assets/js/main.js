/* =====================================================================
   3D GeoInfo and SDSC 2027, Rabat
   Page behaviour and content rendering. Reads window.SITE from
   assets/data/site.js and fills the page.
   ===================================================================== */
(function () {
  "use strict";
  const S = window.SITE || {};
  const E = S.event || {};
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const setHTML = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };
  const TBA = "To be announced";
  const money = (n) => `${S.fees?.currency || "€"}${Number(n).toLocaleString("en")}`;
  const link = (url, text) => url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(text)}</a>` : esc(text);

  /* ---------- Header ---------- */
  const header = $(".site-header");
  const toTop = $("#scroll-top");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
    toTop.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.querySelectorAll(".navbar-collapse a[href^='#']").forEach((a) => {
    a.addEventListener("click", () => {
      const nav = $("#navmenu");
      if (nav.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });

  /* ---------- Event facts ---------- */
  document.querySelectorAll("[data-event]").forEach((el) => { el.textContent = E[el.dataset.event] ?? ""; });
  document.querySelectorAll("a[data-href='conftool']").forEach((a) => { a.href = E.conftool || "#"; });
  document.querySelectorAll("a[data-href='email']").forEach((a) => { a.href = "mailto:" + (E.email || ""); a.textContent = E.email || ""; });
  if (E.pageTitle) document.title = E.pageTitle;
  if (E.map) {
    const osm = `https://www.openstreetmap.org/?mlat=${E.map.lat}&mlon=${E.map.lon}#map=${E.map.zoom || 15}/${E.map.lat}/${E.map.lon}`;
    document.querySelectorAll(".map-link").forEach((a) => { a.href = osm; });
    const frame = $("#map");
    if (frame) {
      const d = 0.012;
      const bbox = [E.map.lon - d, E.map.lat - d * 0.7, E.map.lon + d, E.map.lat + d * 0.7].join("%2C");
      frame.src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${E.map.lat}%2C${E.map.lon}`;
    }
  }

  /* ---------- Level of detail on the hero drawing ---------- */
  const drawing = $(".gate-drawing");
  const lodButtons = document.querySelectorAll("[data-lod-set]");
  const setLod = (n) => {
    if (!drawing) return;
    drawing.dataset.lod = n;
    lodButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lodSet === String(n))));
  };
  lodButtons.forEach((b) => b.addEventListener("click", () => setLod(b.dataset.lodSet)));

  /* ---------- Deadlines ---------- */
  setHTML("#deadlines-body", (S.deadlines || []).map((d, i) =>
    `<tr><td class="num">${String(i + 1).padStart(2, "0")}</td><td>${esc(d.label)}</td><td class="date">${esc(d.date)}</td></tr>`).join(""));

  /* ---------- Topics ---------- */
  const list = (items) => `<ul class="topic-list">${(items || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
  setHTML("#topics-common", list(S.topics?.common));
  setHTML("#topics-geoinfo", list(S.topics?.geoinfo));
  setHTML("#topics-sdsc", list(S.topics?.sdsc));

  /* ---------- People ---------- */
  const namedChairs = (S.chairs || []).filter((p) => p.name && p.name !== TBA);
  if (namedChairs.length) {
    setHTML("#chairs-list", `<div class="people-grid">${namedChairs.map((p) => `
      <div class="person">${p.photo ? `<img src="${esc(p.photo)}" alt="">` : ""}
        <div class="role">${esc(p.role)}</div><div class="name">${esc(p.name)}</div><div class="aff">${esc(p.affiliation)}</div></div>`).join("")}</div>`);
  } else {
    const art = (r) => (/^(SDSC|[aeiou])/i.test(r) ? "an " : "a ") + r;
    const roles = (S.chairs || []).map((p) => art(`${p.role} from ${p.affiliation}`));
    const sentence = roles.length ? `The conference will have ${roles.length > 1 ? roles.slice(0, -1).join(", ") + " and " : ""}${roles[roles.length - 1]}. ` : "";
    setHTML("#chairs-list", `<p class="lede">${esc(sentence)}${esc(S.peopleNote || "")}</p>`);
  }
  const members = (sel, arr, title) => {
    if (!arr || !arr.length) { setHTML(sel, ""); return; }
    setHTML(sel, `<h3>${esc(title)}</h3><div class="member-grid">${arr.map((m) => `<div><strong>${esc(m.name)}</strong><span>${esc(m.affiliation)}</span></div>`).join("")}</div>`);
  };
  members("#organising-list", S.organisingCommittee, "Organising committee");
  members("#scientific-list", S.scientificCommittee, "Scientific committee");

  /* ---------- Keynotes and workshops ---------- */
  const keynotes = (S.keynotes || []).filter((k) => k.name && k.name !== TBA);
  setHTML("#keynotes-list", keynotes.length
    ? `<div class="people-grid">${keynotes.map((k) => `
        <div class="person">${k.photo ? `<img src="${esc(k.photo)}" alt="">` : ""}
          <div class="name">${esc(k.name)}</div><div class="aff">${esc(k.affiliation)}</div>${k.talk ? `<div class="talk">${esc(k.talk)}</div>` : ""}</div>`).join("")}</div>`
    : `<p class="lede">${esc(S.keynotesNote || "")}</p>`);
  setHTML("#workshops-list", (S.workshops || []).map((w) =>
    `<h3>${esc(w.title)}</h3><p>${esc(w.description)} Write to <a data-href="email" href="mailto:${esc(E.email)}">${esc(E.email)}</a>.</p>`).join(""));

  /* ---------- Programme ---------- */
  const days = S.programme || [];
  setHTML("#schedule-tabs", days.map((d, i) => `
    <li class="nav-item" role="presentation">
      <button class="nav-link${i === 0 ? " active" : ""}" id="day-tab-${i}" data-bs-toggle="pill" data-bs-target="#day-${i}" type="button" role="tab" aria-controls="day-${i}" aria-selected="${i === 0}">
        <span class="d">${esc(d.day)} ${esc(d.date)}</span><small>${esc(d.label)}</small></button></li>`).join(""));
  setHTML("#schedule-panes", days.map((d, i) => `
    <div class="tab-pane fade${i === 0 ? " show active" : ""}" id="day-${i}" role="tabpanel" aria-labelledby="day-tab-${i}">
      <ul class="timeline">${d.items.map((it) => `
        <li><div class="time">${esc(it.time)}</div><div>
          <div class="what">${esc(it.title)}</div>
          ${it.rooms ? `<ul class="rooms">${it.rooms.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}
          ${it.where ? `<div class="where">${esc(it.where)}</div>` : ""}
        </div></li>`).join("")}
      </ul></div>`).join(""));

  /* ---------- Hotels ---------- */
  setHTML("#hotels-body", (S.hotels || []).map((h) => `
    <tr><td>${link(h.url, h.name)}</td><td>${esc(h.area)}</td><td>${esc(h.category)}</td><td class="num">${esc(h.distance)}</td></tr>`).join(""));

  /* ---------- Fees ---------- */
  const F = S.fees || { packages: [], extras: [], includes: [] };
  setHTML("#fees-head", `<tr><th>Package</th><th></th><th class="r">${esc(F.earlyLabel)}</th><th class="r">${esc(F.lateLabel)}</th></tr>`);
  setHTML("#fees-body", (F.packages || []).map((p) => p.rows.map((r, j) => `
    <tr${j === 0 ? ' class="group"' : ""}>
      ${j === 0 ? `<td rowspan="${p.rows.length}"><strong>${esc(p.name)}</strong><span class="sub">${esc(p.days)}</span></td>` : ""}
      <td>${esc(r.type)}</td><td class="r num">${money(r.early)}</td><td class="r num">${money(r.late)}</td></tr>`).join("")).join(""));
  setHTML("#fees-extras", (F.extras || []).map((x) => `<li><span>${esc(x.label)}</span><span class="num">${money(x.price)}</span></li>`).join(""));
  setHTML("#fees-includes", (F.includes || []).map((x) => `<li>${esc(x)}</li>`).join(""));

  /* ---------- Sponsorship ---------- */
  setHTML("#tiers-body", (S.sponsorTiers || []).map((t) => `
    <tr><td><span class="swatch" style="background:${esc(t.colour)}"></span><strong>${esc(t.name)}</strong></td>
      <td class="num">${money(t.price)} + VAT</td><td>${t.benefits.map(esc).join(", ")}</td></tr>`).join(""));

  /* ---------- Organisations ---------- */
  setHTML("#supporters-list", (S.supporters || []).map((o) =>
    `<li>${o.logo ? `<img src="${esc(o.logo)}" alt="${esc(o.name)}">` : `<span class="org">${esc(o.name)}</span>`}<span class="full">${link(o.url, o.full)}</span></li>`).join(""));
  const sponsors = S.sponsors || [];
  setHTML("#sponsors-list", sponsors.length
    ? `<ul class="org-list">${sponsors.map((o) => `<li>${o.logo ? `<img src="${esc(o.logo)}" alt="${esc(o.name)}">` : `<span class="org">${esc(o.name)}</span>`}<span class="full">${esc(o.tier || "")}</span></li>`).join("")}</ul>`
    : `<p>No sponsors confirmed yet. The packages are listed below.</p>`);
  setHTML("#journals-list", (S.journalPartners || []).map((j) => `<li>${link(j.url, j.name)}, ${esc(j.note)}</li>`).join(""));

  /* ---------- Past editions ---------- */
  setHTML("#past-editions", (S.pastEditions || []).map((p) =>
    `<li>${link(p.url, p.name)} <span>${esc(p.detail)}</span></li>`).join(""));

  /* ---------- Scroll-spy ---------- */
  if (window.bootstrap && bootstrap.ScrollSpy) {
    new bootstrap.ScrollSpy(document.body, { target: "#navmenu", rootMargin: "0px 0px -60%" });
  }
})();
