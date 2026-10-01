/* =====================================================================
   3D GeoInfo | SDSC 2027 – Rabat   –   page behaviour + content rendering
   Reads window.SITE (assets/data/site.js) and fills the page.
   ===================================================================== */
(function () {
  "use strict";
  const S = window.SITE || {};
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tbc = (flag) => (flag ? ' <span class="badge-tbc">TBC</span>' : "");
  const avatar = (photo, cls) => photo ? `<img src="${esc(photo)}" alt="">` : `<div class="${cls || "avatar"}" aria-hidden="true"><img src="assets/img/avatar.svg" alt=""></div>`;
  const setText = (sel, text) => { const el = $(sel); if (el) el.textContent = text; };
  const setHTML = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };

  /* ---------- Header behaviour ---------- */
  const header = $(".site-header");
  const scrollTop = $("#scroll-top");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
    scrollTop.classList.toggle("show", window.scrollY > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  scrollTop.addEventListener("click", (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });

  // Collapse the mobile menu after choosing a link
  document.querySelectorAll(".navbar-collapse a[href^='#']").forEach((a) => {
    a.addEventListener("click", () => {
      const nav = $("#navmenu");
      if (nav.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });

  /* ---------- Event facts ---------- */
  const E = S.event || {};
  document.querySelectorAll("[data-event]").forEach((el) => { el.textContent = E[el.dataset.event] ?? ""; });
  document.querySelectorAll("a[data-href='conftool']").forEach((a) => { a.href = E.conftool || "#"; });
  document.querySelectorAll("a[data-href='email']").forEach((a) => { a.href = "mailto:" + (E.email || ""); a.textContent = E.email || ""; });
  document.title = `${E.shortTitle || "3D GeoInfo | SDSC 2027"} – ${E.city || "Rabat"}`;
  if (E.map) {
    const d = 0.012;
    const bbox = [E.map.lon - d, E.map.lat - d * 0.7, E.map.lon + d, E.map.lat + d * 0.7].join("%2C");
    const mapFrame = $("#map");
    if (mapFrame) mapFrame.src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${E.map.lat}%2C${E.map.lon}`;
    document.querySelectorAll("#map-link, .map-link").forEach((a) => { a.href = `https://www.openstreetmap.org/?mlat=${E.map.lat}&mlon=${E.map.lon}#map=${E.map.zoom || 15}/${E.map.lat}/${E.map.lon}`; });
  }

  /* ---------- Deadlines ---------- */
  setHTML("#deadlines-body", (S.deadlines || []).map((d) =>
    `<tr><td>${esc(d.label)}</td><td class="date">${esc(d.date)}${tbc(d.tbc)}</td></tr>`).join(""));

  /* ---------- Topics ---------- */
  const list = (items) => `<ul class="topic-list">${(items || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
  setHTML("#topics-common", list(S.topics?.common));
  setHTML("#topics-geoinfo", list(S.topics?.geoinfo));
  setHTML("#topics-sdsc", list(S.topics?.sdsc));

  /* ---------- Committees ---------- */
  setHTML("#chairs-grid", (S.chairs || []).map((p) => `
    <div class="col-sm-6 col-lg-4"><div class="person">
      ${avatar(p.photo)}
      <div class="role">${esc(p.role)}</div>
      <h5>${esc(p.name)}</h5><p>${esc(p.affiliation)}</p>
    </div></div>`).join(""));

  const members = (sel, arr, emptyMsg) => {
    if (!arr || !arr.length) { setHTML(sel, `<div class="notice">${emptyMsg}</div>`); return; }
    setHTML(sel, `<div class="member-grid">${arr.map((m) => `<div><strong>${esc(m.name)}</strong><span>${esc(m.affiliation)}</span></div>`).join("")}</div>`);
  };
  members("#organising-list", S.organisingCommittee, "The local organising committee will be announced soon.");
  members("#scientific-list", S.scientificCommittee, "The international scientific committee will be announced in early 2027.");

  /* ---------- Keynotes & workshops ---------- */
  setHTML("#keynotes-grid", (S.keynotes || []).map((k) => `
    <div class="col-md-6 col-xl-4"><div class="card-soft"><div class="card-body keynote">
      ${avatar(k.photo)}
      <div><h5>${esc(k.name)}</h5><div class="aff">${esc(k.affiliation)}</div>${k.talk ? `<div class="talk">${esc(k.talk)}</div>` : ""}</div>
    </div></div></div>`).join(""));

  setHTML("#workshops-grid", (S.workshops || []).map((w) => `
    <div class="col-md-6"><div class="card-soft accent"><div class="card-body">
      <div class="icon"><i class="bi bi-tools"></i></div>
      <h5>${esc(w.title)}${tbc(w.tbc)}</h5>
      <div class="text-muted small mb-2">${esc(w.chairs)}</div>
      <p class="mb-0">${esc(w.description)}</p>
    </div></div></div>`).join(""));

  /* ---------- Programme ---------- */
  const days = S.programme || [];
  setHTML("#schedule-tabs", days.map((d, i) => `
    <li class="nav-item" role="presentation">
      <button class="nav-link${i === 0 ? " active" : ""}" data-bs-toggle="pill" data-bs-target="#day-${i}" type="button" role="tab">
        ${esc(d.day)}<small>${esc(d.date)} · ${esc(d.label)}</small></button></li>`).join(""));
  setHTML("#schedule-panes", days.map((d, i) => `
    <div class="tab-pane fade${i === 0 ? " show active" : ""}" id="day-${i}" role="tabpanel">
      <ul class="timeline">${d.items.map((it) => `
        <li><div class="time">${esc(it.time)}</div><div><div>${esc(it.title)}</div>${it.where ? `<div class="where"><i class="bi bi-geo-alt"></i> ${esc(it.where)}</div>` : ""}</div></li>`).join("")}
      </ul></div>`).join(""));

  /* ---------- Hotels ---------- */
  setHTML("#hotels-body", (S.hotels || []).map((h) => `
    <tr><td>${h.url ? `<a href="${esc(h.url)}" target="_blank" rel="noopener">${esc(h.name)}</a>` : esc(h.name)}</td>
        <td>${esc(h.area)}</td><td class="stars">${h.stars ? "★".repeat(h.stars) : "—"}</td><td>${esc(h.distance)}</td></tr>`).join(""));

  /* ---------- Fees ---------- */
  const F = S.fees || { packages: [], extras: [], includes: [] };
  const cur = F.currency || "€";
  setHTML("#fees-grid", (F.packages || []).map((p) => `
    <div class="col-md-6 col-xl-4"><div class="card-soft fee-card">
      <div class="head"><h5>${esc(p.name)}</h5><small>${esc(p.days)}</small></div>
      <div class="table-responsive"><table class="table table-clean">
        <thead><tr><th></th><th class="text-end">Early</th><th class="text-end">Late</th></tr></thead>
        <tbody>${p.rows.map((r) => `<tr><td>${esc(r.type)}</td><td>${cur}${r.early}</td><td>${cur}${r.late}</td></tr>`).join("")}</tbody>
      </table></div></div></div>`).join(""));
  setText("#fees-early-label", F.earlyLabel || "Early");
  setText("#fees-late-label", F.lateLabel || "Late");
  setHTML("#fees-extras", (F.extras || []).map((x) => `<li>${esc(x.label)} — <strong>${cur}${x.price}</strong></li>`).join(""));
  setHTML("#fees-includes", (F.includes || []).map((x) => `<li>${esc(x)}</li>`).join(""));

  /* ---------- Sponsorship tiers ---------- */
  setHTML("#tiers-grid", (S.sponsorTiers || []).map((t) => `
    <div class="col-sm-6 col-xl-3"><div class="card-soft tier" style="border-top-color:${esc(t.colour)}"><div class="card-body">
      <h4>${esc(t.name)}</h4>
      <div class="price">€${Number(t.price).toLocaleString("en")} <small>+ VAT</small></div>
      <ul class="check-list mt-3">${t.benefits.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
    </div></div></div>`).join(""));

  /* ---------- Logos ---------- */
  const tile = (o) => `<a class="logo-tile" href="${esc(o.url || "#")}" target="_blank" rel="noopener">
      ${o.logo ? `<img src="${esc(o.logo)}" alt="${esc(o.name)}">` : `<div class="name">${esc(o.name)}</div>`}
      <div class="full">${esc(o.full || o.tier || "")}</div></a>`;
  setHTML("#supporters-grid", (S.supporters || []).map(tile).join(""));
  const sponsors = S.sponsors || [];
  setHTML("#sponsors-grid", sponsors.length ? sponsors.map(tile).join("")
    : `<div class="logo-tile placeholder"><div class="name">Your logo here</div><div class="full">Become a sponsor of 3D GeoInfo | SDSC 2027</div></div>`);
  setHTML("#journals-list", (S.journalPartners || []).map((j) =>
    `<li><a href="${esc(j.url)}" target="_blank" rel="noopener">${esc(j.name)}</a> <span class="text-muted">– ${esc(j.note)}</span></li>`).join(""));

  /* ---------- Past editions ---------- */
  setHTML("#past-editions", (S.pastEditions || []).map((p) =>
    `<li><a href="${esc(p.url)}" target="_blank" rel="noopener">${p.year} · ${esc(p.label)}</a></li>`).join(""));

  setText("#year", new Date().getFullYear());

  /* ---------- Scroll-spy on the nav ---------- */
  if (window.bootstrap && bootstrap.ScrollSpy) {
    new bootstrap.ScrollSpy(document.body, { target: "#navmenu", offset: 100, threshold: [0.1, 0.5] });
  }
})();
