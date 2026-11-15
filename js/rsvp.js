const RSVP = (() => {
  const W = () => window.WEDDING.rsvp;
  function read(f){ const d = new FormData(f); return { name:(d.get("name")||"").trim(), phone:(d.get("phone")||"").replace(/[\s-]/g,"").replace(/^(\+91|91|0)(?=\d{10}$)/,""),
    guests:parseInt(d.get("guests"),10), att:d.get("att"), msg:(d.get("msg")||"").trim() }; }
  function validate(f){
    const v = read(f), e = {};
    if (v.name.length < 2) e.name = "e_name";
    if (!/^[6-9]\d{9}$/.test(v.phone)) e.phone = "e_phone";
    if (!(v.guests >= 1 && v.guests <= 20)) e.guests = "e_guests";
    if (!v.att) e.att = "e_att";
    f.querySelectorAll(".err").forEach(el => el.textContent = e[el.dataset.for] ? Lang.t(e[el.dataset.for]) : "");
    return Object.keys(e).length ? null : v;
  }
  function text(v){ const g = window.WEDDING.groom.short[Lang.cur], b = window.WEDDING.bride.short[Lang.cur];
    return `${g} & ${b} — ${v.att==="yes"?"✅ Attending":"❌ Unable to attend"}\nName: ${v.name}\nMobile: ${v.phone}\nGuests: ${v.guests}` + (v.msg ? `\nMessage: ${v.msg}` : ""); }
  function status(m, ok){ const s = document.getElementById("rsvpMsg"); s.textContent = m; s.className = "status " + (ok ? "ok" : "bad"); }
  function init(){
    const f = document.getElementById("rsvpForm");
    f.addEventListener("submit", async e => { e.preventDefault(); const v = validate(f); if (!v) return status("", true);
      if (!W().endpointUrl) return status(Lang.t("no_backend"), false);
      try { const r = await fetch(W().endpointUrl, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(v) });
        if (!r.ok) throw new Error(r.status); status(Lang.t("ok_sent"), true); f.reset(); } catch(err){ status(Lang.t("err_send"), false); } });
    document.getElementById("waBtn").addEventListener("click", () => { const v = validate(f); if (!v) return;
      const n = (W().whatsappNumber || "").replace(/\D/g,""); if (!n) return status(Lang.t("wa_pending"), false);
      window.open(`https://wa.me/${W().countryCode}${n}?text=${encodeURIComponent(text(v))}`, "_blank", "noopener"); status("", true); });
  }
  return { init };
})();
