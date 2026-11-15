(function(){
  const W = window.WEDDING, $ = id => document.getElementById(id);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function buildEvents(){
    const t = $("timeline"); t.innerHTML = "";
    let last = "";
    W.events.forEach(ev => {
      const day = ev.date[Lang.cur];
      if (day !== last) { const h = document.createElement("h3"); h.className = "day reveal in"; h.textContent = day; t.appendChild(h); last = day; }
      const c = document.createElement("article"); c.className = "ev reveal in";
      c.innerHTML = `<time></time><div><h4></h4><p></p></div>`;
      c.querySelector("time").textContent = ev.time[Lang.cur]; c.querySelector("h4").textContent = ev.name[Lang.cur]; c.querySelector("p").textContent = ev.desc[Lang.cur];
      if (ev.maps) { const a = document.createElement("a"); a.className = "btn small"; a.target = "_blank"; a.rel = "noopener"; a.href = mapsUrl(); a.textContent = Lang.t("maps_btn"); c.lastChild.appendChild(a); }
      t.appendChild(c);
    });
  }
  const mapsUrl = () => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(W.venue.mapsQuery);

  function buildPhones(){
    const p = $("phones"); p.innerHTML = "";
    W.host.phones.forEach(n => { const a = document.createElement("a"); a.className = "btn ghost-l"; a.href = "tel:+91" + n; a.textContent = "📞 " + n; a.setAttribute("aria-label", Lang.t("call") + " " + n); p.appendChild(a); });
  }

  function photos(){  // keep original photos; show monogram if file is missing
    document.querySelectorAll("img[data-photo]").forEach(img => {
      const fig = img.closest("figure"); img.src = W[img.dataset.photo].photo;
      img.addEventListener("error", () => fig.classList.add("missing")); img.addEventListener("load", () => fig.classList.remove("missing"));
    });
  }

  function petals(){
    if (reduce) return; const c = $("petals"), x = c.getContext("2d"); let w, h, ps = [];
    const size = () => { w = c.width = innerWidth; h = c.height = innerHeight; }; size(); addEventListener("resize", size);
    const n = innerWidth < 600 ? 14 : 26;
    for (let i = 0; i < n; i++) ps.push({ x: Math.random()*w, y: Math.random()*h, r: 4+Math.random()*6, s: .3+Math.random()*.7, a: Math.random()*6, v: .01+Math.random()*.02 });
    (function f(){ x.clearRect(0,0,w,h); ps.forEach(p => { p.y += p.s; p.a += p.v; p.x += Math.sin(p.a)*.6; if (p.y > h+10) { p.y = -10; p.x = Math.random()*w; }
      x.save(); x.translate(p.x,p.y); x.rotate(p.a); x.fillStyle = "rgba(197,164,119,.45)"; x.beginPath(); x.ellipse(0,0,p.r,p.r/2,0,0,7); x.fill(); x.restore(); }); requestAnimationFrame(f); })();
  }

  function reveal(){
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || reduce) return els.forEach(e => e.classList.add("in"));
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
    els.forEach(e => io.observe(e));
  }

  function enter(){ const i = $("intro"); i.classList.add("gone"); document.body.classList.remove("locked"); setTimeout(() => i.remove(), 900); }

  document.addEventListener("DOMContentLoaded", () => {
    Lang.set(Lang.cur); photos(); buildEvents(); buildPhones();
    $("mapsLink").href = mapsUrl();
    document.addEventListener("langchange", () => { buildEvents(); buildPhones(); });
    Countdown.start(); Music.init(); Gallery.init(); RSVP.init(); petals(); reveal();

    $("langBtn").onclick = () => Lang.set(Lang.cur === "en" ? "hi" : "en");
    $("openBtn").onclick = () => { $("envelope").classList.add("open"); setTimeout(enter, reduce ? 0 : 1100); };
    $("skipBtn").onclick = enter;
    $("burger").onclick = e => { const o = $("menu").classList.toggle("show"); e.currentTarget.setAttribute("aria-expanded", o); };
    $("menu").addEventListener("click", e => { if (e.target.tagName === "A") { $("menu").classList.remove("show"); $("burger").setAttribute("aria-expanded", "false"); } });
    addEventListener("scroll", () => $("nav").classList.toggle("solid", scrollY > 40), { passive: true });

    $("copyBtn").onclick = async () => { const m = $("copyMsg"), a = W.venue.address[Lang.cur];
      try { await navigator.clipboard.writeText(a); m.textContent = Lang.t("copied"); m.className = "status ok"; }
      catch(e){ m.textContent = Lang.t("copyfail"); m.className = "status bad"; } };
  });
})();
