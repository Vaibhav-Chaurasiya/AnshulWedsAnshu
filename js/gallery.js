const Gallery = (() => {
  let i = 0, items = [];
  const $ = id => document.getElementById(id);
  function show(n){ i = (n + items.length) % items.length; const img = $("lbImg"); img.classList.remove("in");
    img.src = items[i].src; img.alt = items[i].alt[Lang.cur]; requestAnimationFrame(() => img.classList.add("in")); }
  function open(n){ $("lb").hidden = false; document.body.classList.add("locked"); show(n); $("lbX").focus(); }
  function close(){ $("lb").hidden = true; document.body.classList.remove("locked"); }
  function build(){
    items = window.WEDDING.gallery; const g = $("grid"); g.innerHTML = "";
    items.forEach((it, n) => { const b = document.createElement("button"); b.className = "tile reveal in"; b.type = "button";
      const im = document.createElement("img"); im.src = it.src; im.alt = it.alt[Lang.cur]; im.loading = "lazy"; im.decoding = "async";
      im.onerror = () => b.classList.add("missing"); b.appendChild(im); b.onclick = () => open(n); g.appendChild(b); });
  }
  function init(){
    build(); document.addEventListener("langchange", build);
    $("lbX").onclick = close; $("lbP").onclick = () => show(i-1); $("lbN").onclick = () => show(i+1);
    $("lb").addEventListener("click", e => { if (e.target.id === "lb") close(); });
    document.addEventListener("keydown", e => { if ($("lb").hidden) return;
      if (e.key === "Escape") close(); else if (e.key === "ArrowLeft") show(i-1); else if (e.key === "ArrowRight") show(i+1); });
  }
  return { init };
})();
