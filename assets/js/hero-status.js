/*
=================================================================
  Home status bar
-----------------------------------------------------------------
  * Strasbourg clock (Europe/Paris), refreshed on each minute.
    The <time> box has a reserved width in CSS, so filling it
    causes no layout shift.
  * Copy-to-clipboard for the email. Without JS (or without the
    Clipboard API) the mailto link alone stays, the button is hidden.
=================================================================
*/
(() => {
  const clock = document.querySelector(".status-clock");
  if (clock && window.Intl) {
    const fmt = new Intl.DateTimeFormat(clock.dataset.locale || "fr-FR", {
      timeZone: clock.dataset.tz || "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
    const iso = new Intl.DateTimeFormat("en-CA", {
      timeZone: clock.dataset.tz || "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23"
    });
    const tick = () => {
      const now = new Date();
      clock.textContent = fmt.format(now);
      clock.setAttribute("datetime", iso.format(now));
      // Next update right after the minute changes
      setTimeout(tick, 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()) + 50);
    };
    tick();
  }

  const btn = document.querySelector(".status-copy");
  const out = document.querySelector(".status-feedback");
  if (!btn || !out || !navigator.clipboard || !window.isSecureContext) return;

  btn.hidden = false;
  let timer = 0;
  const say = (msg, ok) => {
    clearTimeout(timer);
    out.textContent = msg;
    out.classList.toggle("is-error", !ok);
    btn.classList.toggle("is-done", ok);
    timer = setTimeout(() => {
      out.textContent = "";
      btn.classList.remove("is-done");
    }, 4000);
  };

  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(btn.dataset.copy).then(
      () => say(btn.dataset.ok, true),
      () => say(btn.dataset.fail, false)
    );
  });
})();
