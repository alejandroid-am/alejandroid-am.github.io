/*
=================================================================
  Contact form (progressive enhancement)
  ---------------------------------------------------------------
  Without JS the form posts to Formspree as a normal HTML form.
  With JS:
  - the offer (and request type) is preselected from ?offre=<id>
  - ?projet=<title> (locked project) prefills the message and subject
  - fields are trimmed, errors appear next to the field in plain words
  - sends with fetch, the button switches to "Envoi…" at once
  - success / failure is announced in an aria-live region, and the
    text typed is kept if sending fails
=================================================================
*/
(() => {
  /* Form switched off (form_enabled: false): a locked project link
     (?projet=<title>) only fills the subject of the mailto button. */
  const mailto = document.getElementById("contact-mailto");
  const projetMail = new URLSearchParams(window.location.search).get("projet");
  if (mailto && projetMail && mailto.dataset.lockedSubject) {
    const line = mailto.dataset.lockedSubject.replace("%s", projetMail.slice(0, 120));
    mailto.href = "mailto:ale.amaro.m@proton.me?subject=" + encodeURIComponent(line);
  }

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status || !window.fetch) return;

  const button = form.querySelector(".form-submit");
  const buttonLabel = button.textContent;
  const offre = form.querySelector("#cf-offre");
  const demande = form.querySelector("#cf-demande");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  let sending = false;

  form.setAttribute("novalidate", "");

  /* --- Preselect the offer coming from a card (?offre=revue-ux) --- */
  const wanted = new URLSearchParams(window.location.search).get("offre");
  if (wanted && offre) {
    const option = Array.from(offre.options).find(o => o.value === wanted);
    if (option) {
      offre.value = wanted;
      if (demande && !demande.value) demande.value = option.dataset.demande || "projet";
    }
  }
  /* --- Case study on request (?projet=<title>, from a locked project) ---
     Prefills the message and the email subject; the visitor can edit both. */
  const projet = new URLSearchParams(window.location.search).get("projet");
  const message = form.querySelector("#cf-message");
  if (projet && message && !message.value && form.dataset.lockedSubject) {
    const line = form.dataset.lockedSubject.replace("%s", projet.slice(0, 120));
    message.value = line + "\n\n";
    const subject = form.querySelector('input[name="_subject"]');
    if (subject) subject.value += " · " + line;
  }
  /* Picking an offer also classifies the request, if not chosen yet */
  if (offre && demande) {
    offre.addEventListener("change", () => {
      const option = offre.options[offre.selectedIndex];
      if (!demande.value && option.dataset.demande) {
        demande.value = option.dataset.demande;
        validate(demande);
      }
    });
  }

  /* --- Validation --- */
  const fields = Array.from(form.querySelectorAll("[data-msg-empty]"));

  function errorFor(field) {
    if (field.tagName !== "SELECT") field.value = field.value.trim();
    if (!field.value) return field.dataset.msgEmpty;
    if (field.type === "email" && !emailPattern.test(field.value)) return field.dataset.msgFormat;
    return "";
  }

  function validate(field) {
    const message = errorFor(field);
    const box = document.getElementById(field.id + "-error");
    field.setAttribute("aria-invalid", message ? "true" : "false");
    if (box) {
      box.textContent = message;
      box.hidden = !message;
    }
    return !message;
  }

  fields.forEach(field => {
    field.addEventListener("blur", () => {
      if (field.value || field.getAttribute("aria-invalid")) validate(field);
    });
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") validate(field);
    });
    field.addEventListener("change", () => {
      if (field.tagName === "SELECT") validate(field);
    });
  });

  function showStatus(kind) {
    status.className = "form-status form-status--" + kind;
    status.innerHTML = status.dataset[kind];
    status.focus();
  }

  function setSending(on) {
    sending = on;
    button.textContent = on ? form.dataset.sending : buttonLabel;
    button.setAttribute("aria-disabled", on ? "true" : "false");
  }

  /* --- Submit --- */
  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (sending) return;

    const invalid = fields.filter(field => !validate(field));
    if (invalid.length) {
      invalid[0].focus();
      return;
    }

    setSending(true);
    status.className = "form-status";
    status.textContent = "";

    const data = new FormData(form);
    if (demande && demande.selectedIndex > 0) {
      data.set("_subject", data.get("_subject") + " · " + demande.options[demande.selectedIndex].text);
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error("HTTP " + response.status);
      form.reset();
      fields.forEach(field => field.removeAttribute("aria-invalid"));
      showStatus("success");
    } catch (error) {
      /* Nothing typed is lost: the form keeps its values */
      showStatus("error");
    } finally {
      setSending(false);
    }
  });
})();
