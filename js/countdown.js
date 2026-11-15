const Countdown = (() => {
  const target = new Date(window.WEDDING.weddingDate).getTime();
  const $ = id => document.getElementById(id);
  function tick(){
    const d = target - Date.now();
    if (d <= 0) { $("cd").hidden = true; $("cdDone").hidden = false; return false; }
    $("cdD").textContent = Math.floor(d/864e5);
    $("cdH").textContent = String(Math.floor(d/36e5)%24).padStart(2,"0");
    $("cdM").textContent = String(Math.floor(d/6e4)%60).padStart(2,"0");
    $("cdS").textContent = String(Math.floor(d/1e3)%60).padStart(2,"0");
    return true;
  }
  return { start(){ if (tick()) { const i = setInterval(() => { if (!tick()) clearInterval(i); }, 1000); } } };
})();
