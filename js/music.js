const Music = (() => {
  const MAX = 0.6; let audio, fade;
  function ramp(to, done){ clearInterval(fade); fade = setInterval(() => {
      const d = to - audio.volume; if (Math.abs(d) < 0.04) { audio.volume = to; clearInterval(fade); done && done(); } else audio.volume = Math.min(1, Math.max(0, audio.volume + Math.sign(d)*0.04)); }, 40); }
  function init(){
    const play = document.getElementById("playBtn"), mute = document.getElementById("muteBtn"), msg = document.getElementById("musicMsg");
    audio = new Audio(window.WEDDING.musicSrc); audio.loop = true; audio.preload = "none"; audio.volume = 0;
    const label = () => {
      play.setAttribute("aria-label", Lang.t(audio.paused ? "music_on" : "music_off"));
      mute.setAttribute("aria-label", Lang.t(audio.muted ? "unmute" : "mute"));
      document.getElementById("music").classList.toggle("playing", !audio.paused);
      mute.classList.toggle("off", audio.muted);
    };
    play.addEventListener("click", () => {
      msg.textContent = "";
      if (audio.paused) audio.play().then(() => { ramp(MAX); label(); }).catch(() => { msg.textContent = Lang.t("music_err"); });
      else ramp(0, () => { audio.pause(); label(); });
    });
    mute.addEventListener("click", () => { audio.muted = !audio.muted; label(); });
    audio.addEventListener("error", () => { msg.textContent = Lang.t("music_err"); });
    document.addEventListener("langchange", label);
  }
  return { init };
})();
