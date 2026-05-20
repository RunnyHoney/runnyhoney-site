// neocron city :: small client-side fx

(function () {
  const clockEl = document.getElementById("clock");
  const roleEl = document.getElementById("role");

  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    const d = new Date();
    if (clockEl) clockEl.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }
  tick();
  setInterval(tick, 1000);

  const roles = [
    "JUNIOR DEVELOPER",
    "WEB DEVELOPER",
    "RADIO PROGRAMMER",
    "MASTER CONTROL OP",
    "SIGNAL JOCKEY",
    "NETRUNNER",
  ];
  if (roleEl) {
    let i = 0;
    setInterval(() => {
      i = (i + 1) % roles.length;
      roleEl.style.opacity = "0";
      setTimeout(() => {
        roleEl.textContent = roles[i];
        roleEl.style.opacity = "1";
      }, 180);
    }, 3200);
    roleEl.style.transition = "opacity 180ms ease";
  }

  document.querySelectorAll("a[data-noop]").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const val = a.querySelector(".val");
      if (!val) return;
      const original = val.textContent;
      val.textContent = "// CHANNEL NOT YET OPEN";
      setTimeout(() => { val.textContent = original; }, 1400);
    });
  });

  const ticker = document.getElementById("ticker");
  if (ticker) {
    ticker.innerHTML += ticker.innerHTML;
  }
})();
