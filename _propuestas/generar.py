#!/usr/bin/env python3
"""
Genera _propuestas/index.html (3 propuestas de estilo, fase 0) a partir de
los textos reales de _data/*.yml. Jekyll ignora esta carpeta (empieza por _).

Uso:  python3 _propuestas/generar.py
"""
import html
import re
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "_data"
OUT = Path(__file__).resolve().parent / "index.html"


def load(name):
    return yaml.safe_load((DATA / name).read_text(encoding="utf-8"))


offers_y = load("offers.yml")
home = load("home.yml")["fr"]
cv = load("cv.yml")["fr"]
contact = load("contact.yml")["fr"]

EMAIL = "ale.amaro.m@proton.me"
LINKEDIN = "https://www.linkedin.com/in/alejandro-a-mendoza/"
SITE = "https://alejandro-is.me"
IMG = "../assets/img/"

# --------------------------------------------------------------------------
# Contenido
# --------------------------------------------------------------------------
# Orden: Projet primero, Agences, Récurrent al final.
order = {"projet": 0, "agences": 1, "recurrent": 2}
offers = sorted(offers_y["list"], key=lambda o: order[o["block"]])

NOTE = "précisé dans le devis"


def price_parts(o):
    p = o["fr"]["price"]
    if p.startswith("dès "):
        return "dès", p[4:], NOTE
    if o["id"] == "revue-ux":
        return "", p, "prix fermé"
    return "", p, ""


OFFERS = []
for i, o in enumerate(offers, 1):
    c = o["fr"]
    pre, amount, note = price_parts(o)
    OFFERS.append(
        dict(
            id=o["id"],
            num=f"{i:02d}",
            title=c["title"],
            short=c["short"],
            pre=pre,
            amount=amount,
            note=note,
            includes=c.get("includes", []),
            featured=bool(o.get("featured")),
            cta=c.get("request", offers_y["ui"]["fr"]["request"]),
            block={"projet": "Projet", "agences": "Agences", "recurrent": "Récurrent"}[o["block"]],
        )
    )

# Proyectos: descripciones reales (front matter, en inglés). BEDiZEN fuera
# (regla del brief: no usar ese nombre en contenido nuevo).
PROJECTS = [
    dict(
        title="In-House Tools",
        kind="Outils web internes",
        img="tools/social-generator-brand-a-ui.webp",
        w=1680, h=1150,
        alt="Interface du générateur de posts In-House Tools",
        desc="A post generator and a contract generator in daily use at the shop where I work. Before, only 2 people could make a contract. Now even the interns can.",
        url="/projects/in-house-tools/",
    ),
    dict(
        title="Keep Breathing",
        kind="Jeu vidéo, Global Game Jam 2026",
        img="KeepBreathing/keep-breathing-gameplay-screen.webp",
        w=1920, h=1080,
        alt="Capture de jeu de Keep Breathing",
        desc='A survival FPS made in 48 hours at Global Game Jam 2026, theme "Masks". Split across 3 PCs when the jury came by. Best Technical Achievement.',
        url="/projects/keepBreathing/",
    ),
    dict(
        title="Spin App",
        kind="Refonte UX mobile",
        img="Spin_app/Spin_App_Mockups_image-960w.webp",
        w=960, h=733,
        alt="Maquettes de l'application Spin App",
        desc="A redesign of a mobile top-up app that moves the reward wheel to after payment. Based on intuition, tested with 3 people, never built for lack of funding.",
        url="/projects/spin_app/",
    ),
    dict(
        title="WorkPics",
        kind="Logo et écrans d'application",
        img="Workpics/workpicks_ui_mockups.webp",
        w=2400, h=1696,
        alt="Écrans de l'application WorkPics",
        desc="Logo and app screens for a developer friend's field reporting app for construction teams, now published on Google Play.",
        url="/projects/workpics/",
    ),
    dict(
        title="Cinéville Festival",
        kind="Affiche, exercice d'examen",
        img="Cineville/cineville_poster-fina-aprouved-840w.webp",
        w=840, h=1189,
        alt="Affiche finale du Cinéville Festival",
        desc="A surrealist film festival poster, made as a graded exam exercise (not a real client). Library research, pencil sketches, then Photoshop.",
        url="/projects/cineville/",
    ),
]

PROCESS_T = ["Premier échange", "Devis clair", "Réalisation", "Livraison"]
PROCESS = list(zip(PROCESS_T, home["process"]))

TIMELINE = [
    ("2009", "Début du métier de designer", "17 ans de métier"),
    ("2019", "Premiers sites e-commerce", "WordPress, puis PrestaShop"),
    ("2024–2026", "Titre professionnel RNCP Concepteur designer UI, niveau 6", "CCI Campus Alsace, Strasbourg"),
    ("2026", "Global Game Jam : <span lang=\"en\">Best Technical Achievement</span>", "Le Shadok, Strasbourg"),
]
LANGS = "Espagnol (langue maternelle), français (C1), anglais (C1)"
SKILLS = [(s["name"], s["tags"]) for s in cv["skills"]]

# Texto del About actual (de Ale, en inglés): se mantiene con lang="en".
ABOUT_EN = [
    "I don't have a standard background, and honestly? That's my biggest asset. My design process is shaped by a life of constant reinvention.",
    'I learned <strong>resilience</strong> in Cuba, <strong>business strategy</strong> in Chile where I co-founded <a href="https://somosarte.cl/" target="_blank" rel="noopener noreferrer"><em>Somos Arte</em></a> and built a community of 10,000+ people from scratch, and <strong>adaptability</strong> in France, where I moved for love and mastered a third language.',
    "Because I don't look at a project and just see colors and typography. Thanks to my entrepreneurial roots, I see business goals, constraints, and user needs.",
]

VALUE_H1 = "Votre boutique en ligne, belle, à jour et qui vend."
VALUE_SUB = "Designer web &amp; e&#8209;commerce à Strasbourg, sur PrestaShop et WordPress. En français, <span lang=\"en\">in English</span>, <span lang=\"es\">en español</span>."
REPLY = contact["reply"]
VAT = home["vat"]

NAV = [("Projets", "projets"), ("Offres", "offres"), ("À propos", "apropos"), ("Contact", "contact")]


def nav(p, extra=""):
    links = "".join(f'<li><a href="#{p}-{a}">{l}</a></li>' for l, a in NAV)
    return f"""
<header class="nav" role="banner">
  <a class="logo" href="#{p}-top">Alejandro A.M.</a>
  <nav aria-label="Navigation principale ({p})"><ul>{links}</ul></nav>
  <p class="lang" aria-label="Langue"><span aria-current="true">FR</span><span aria-hidden="true"> / </span><a href="{SITE}/en/" hreflang="en" lang="en">EN</a></p>
  {extra}
</header>"""


def copy_btn(label="Copier"):
    return (f'<button type="button" class="copy" data-copy="{EMAIL}" data-ok="Copiée" '
            f'aria-label="Copier l\'adresse email">{label}</button>'
            '<span class="copy-out" role="status" aria-live="polite"></span>')


def form(p):
    opts = "".join(f'<option value="{d["value"]}">{d["label"]}</option>' for d in contact["demandes"])
    return f"""
<form class="form" action="#" onsubmit="return false">
  <p class="form-note">Maquette : le formulaire réel reste celui du site.</p>
  <label for="{p}-n">{contact['name']}</label><input id="{p}-n" type="text" autocomplete="name">
  <label for="{p}-e">{contact['email']}</label><input id="{p}-e" type="email" autocomplete="email">
  <label for="{p}-d">{contact['demande']}</label><select id="{p}-d"><option value="">{contact['demande_placeholder']}</option>{opts}</select>
  <label for="{p}-m">{contact['message']}</label><textarea id="{p}-m" rows="4"></textarea>
  <button type="submit" class="submit">{contact['submit']}</button>
</form>"""


def img(pj, cls="", lazy=True, sizes="100vw"):
    return (f'<img class="{cls}" src="{IMG}{pj["img"]}" alt="{pj["alt"]}" width="{pj["w"]}" height="{pj["h"]}"'
            f'{" loading=\"lazy\"" if lazy else ""} decoding="async">')


def proscons(lines):
    lis = "".join(f"<li>{l}</li>" for l in lines)
    return f'<aside class="pc" lang="es" aria-label="Pros y contras"><ul>{lis}</ul></aside>'


def footer(p):
    return f"""
<footer class="foot">
  <p>© 2026 Alejandro Amaro Mendoza, entrepreneur individuel</p>
  <p>{VAT}</p>
  <p><a href="{SITE}/mentions-legales.html">Mentions légales</a></p>
</footer>"""


# --------------------------------------------------------------------------
# A. Índice de precisión
# --------------------------------------------------------------------------
def build_a():
    p = "a"
    offers_rows = ""
    for o in OFFERS:
        inc = "".join(f"<li>{i}</li>" for i in o["includes"])
        offers_rows += f"""
    <details class="row offer{' is-featured' if o['featured'] else ''}">
      <summary>
        <span class="c-num">[{o['num']}]</span>
        <span class="c-name"><strong>{o['title']}</strong>{'<em class="tag">Point de départ conseillé</em>' if o['featured'] else ''}</span>
        <span class="c-desc">{o['short']}</span>
        <span class="c-price">{(o['pre'] + ' ') if o['pre'] else ''}{o['amount']}{f'<small>{o["note"]}</small>' if o['note'] else ''}</span>
        <span class="c-more" aria-hidden="true">+</span>
      </summary>
      <div class="more">
        <p class="lbl">Inclus</p><ul>{inc}</ul>
        <a class="cta" href="#a-contact">{o['cta']} →</a>
      </div>
    </details>"""
    proj_rows = ""
    for i, pj in enumerate(PROJECTS, 1):
        proj_rows += f"""
    <a class="row proj" href="{SITE}{pj['url']}" data-preview="{IMG}{pj['img']}" data-alt="{pj['alt']}">
      <span class="c-num">[{i:02d}]</span>
      <span class="c-name"><strong>{pj['title']}</strong></span>
      <span class="c-desc">{pj['kind']}</span>
      <span class="c-go">Étude de cas →</span>
      {img(pj, 'thumb')}
    </a>"""
    process_rows = "".join(
        f'<div class="row static"><span class="c-num">[{i:02d}]</span><span class="c-name"><strong>{t}</strong></span><span class="c-wide">{d}</span></div>'
        for i, (t, d) in enumerate(PROCESS, 1))
    tl_rows = "".join(
        f'<div class="row static"><span class="c-num">{y}</span><span class="c-name"><strong>{t}</strong></span><span class="c-wide">{s}</span></div>'
        for y, t, s in TIMELINE)
    sk_rows = "".join(
        f'<div class="row static"><span class="c-num">··</span><span class="c-name"><strong>{n}</strong></span><span class="c-wide">{" / ".join(t)}</span></div>'
        for n, t in SKILLS)
    about_en = "".join(f"<p>{x}</p>" for x in ABOUT_EN)

    def head(n, title, count=""):
        return f'<h2 class="sec-head" id="{p}-{n}"><span>{title}</span><span>{count}</span></h2>'

    return f"""
<div class="prop pA" id="A" data-prop="A">
<div class="frame" aria-hidden="true"></div>
{nav(p)}
<main id="{p}-top">
  <section class="hero" aria-labelledby="a-h1">
    <p class="mono-lbl">Designer web &amp; e-commerce · Strasbourg</p>
    <h1 id="a-h1">{VALUE_H1}</h1>
    <p class="sub">{VALUE_SUB}</p>
    <div class="hero-rows">
      <div class="row static"><span class="c-num">↳</span><span class="c-name"><strong>Offres</strong></span><span class="c-wide"><a href="#a-offres">Voir les offres et les prix</a></span></div>
      <div class="row static"><span class="c-num">↳</span><span class="c-name"><strong>Parcours</strong></span><span class="c-wide"><a href="#a-apropos">Parcours et compétences</a></span></div>
      <div class="row static"><span class="c-num">↳</span><span class="c-name"><strong>Email</strong></span><span class="c-wide"><a href="mailto:{EMAIL}">{EMAIL}</a> {copy_btn()}</span></div>
    </div>
  </section>

  {head('offres', 'Offres', f'[{len(OFFERS):02d}]')}
  <div class="rows">{offers_rows}</div>
  <p class="foot-note">Prix en euros. {VAT} Le premier échange est gratuit.</p>

  {head('projets', 'Projets', f'[{len(PROJECTS):02d}]')}
  <div class="rows projs">{proj_rows}</div>
  <figure class="preview" aria-hidden="true"><img alt="" src="" width="1600" height="1000"></figure>

  {head('process', 'Comment ça se passe', '[04]')}
  <div class="rows">{process_rows}</div>

  {head('apropos', 'À propos', '')}
  <div class="about">
    <img class="photo" src="{IMG}profile.webp" alt="Photo d'Alejandro Amaro Mendoza" width="1674" height="1672" loading="lazy">
    <div class="about-en" lang="en">{about_en}</div>
  </div>
  <h3 class="sub-head">Trajectoire</h3>
  <div class="rows">{tl_rows}
    <div class="row static"><span class="c-num">··</span><span class="c-name"><strong>Langues</strong></span><span class="c-wide">{LANGS}</span></div>
  </div>
  <h3 class="sub-head">Compétences</h3>
  <div class="rows">{sk_rows}</div>

  {head('contact', contact['title'], '')}
  <div class="rows">
    <div class="row static"><span class="c-num">↳</span><span class="c-name"><strong>Email</strong></span><span class="c-wide"><a href="mailto:{EMAIL}">{EMAIL}</a> {copy_btn()}</span></div>
    <div class="row static"><span class="c-num">↳</span><span class="c-name"><strong>LinkedIn</strong></span><span class="c-wide"><a href="{LINKEDIN}" target="_blank" rel="noopener noreferrer">alejandro-a-mendoza</a></span></div>
    <div class="row static"><span class="c-num">↳</span><span class="c-name"><strong>Délai</strong></span><span class="c-wide">{REPLY}</span></div>
  </div>
  <div class="form-wrap">{form(p)}</div>
</main>
{footer(p)}
{proscons([
    "<b>Pro:</b> la más rápida de leer y de mantener; transmite rigor y criterio, encaja con un reclutador y con un cliente que compara precios.",
    "<b>Pro:</b> el amarillo solo en hover y en la oferta recomendada hace que esa fila destaque sin esfuerzo; casi sin JS.",
    "<b>Contra:</b> poca emoción visual; las imágenes solo aparecen al pasar el ratón (en móvil, en miniatura) y el oficio gráfico se ve menos.",
])}
</div>"""


# --------------------------------------------------------------------------
# B. Bloques gruesos
# --------------------------------------------------------------------------
def build_b():
    p = "b"
    offers_rows = ""
    for o in OFFERS:
        offers_rows += f"""
      <article class="offer{' is-featured' if o['featured'] else ''}" aria-labelledby="b-o-{o['id']}">
        <p class="o-num" aria-hidden="true">{o['num']}</p>
        <div class="o-main">
          {'<p class="o-tag">Point de départ conseillé</p>' if o['featured'] else ''}
          <h3 id="b-o-{o['id']}">{o['title']}</h3>
          <p>{o['short']}</p>
        </div>
        <p class="o-price">{f'<span>{o["pre"]}</span>' if o['pre'] else ''}{o['amount']}{f'<small>{o["note"]}</small>' if o['note'] else ''}</p>
        <a class="o-cta" href="#b-contact">{o['cta']}<span class="sr"> : {o['title']}</span></a>
      </article>"""
    proj = ""
    for i, pj in enumerate(PROJECTS):
        side = "l" if i % 2 == 0 else "r"
        proj += f"""
    <article class="split proj side-{side}" aria-labelledby="b-p{i}">
      <div class="half media">{img(pj)}</div>
      <div class="stripe" aria-hidden="true"></div>
      <div class="half text">
        <p class="kicker">{i + 1:02d} / {pj['kind']}</p>
        <h3 id="b-p{i}">{pj['title']}</h3>
        <p lang="en">{pj['desc']}</p>
        <a class="block-link" href="{SITE}{pj['url']}">Voir l'étude de cas<span class="sr"> {pj['title']}</span></a>
      </div>
    </article>"""
    steps = "".join(f'<li><span class="big" aria-hidden="true">{i}</span><h3>{t}</h3><p>{d}</p></li>' for i, (t, d) in enumerate(PROCESS, 1))
    tl = "".join(f'<tr><th scope="row">{y}</th><td><strong>{t}</strong><br>{s}</td></tr>' for y, t, s in TIMELINE)
    sk = "".join(f'<div><h4>{n}</h4><p>{" · ".join(t)}</p></div>' for n, t in SKILLS)
    about_en = "".join(f"<p>{x}</p>" for x in ABOUT_EN)
    sentence = "Votre boutique en ligne, belle, à jour et qui vend."
    track = "".join(f'<span>{sentence}</span><span class="dot" aria-hidden="true">●</span>' for _ in range(4))
    return f"""
<div class="prop pB" id="B" data-prop="B">
{nav(p)}
<main id="{p}-top">
  <section class="hero" aria-labelledby="b-h1">
    <h1 id="b-h1">Votre boutique<br>en ligne, belle,<br>à jour et <mark>qui vend.</mark></h1>
    <div class="hero-side">
      <p>{VALUE_SUB}</p>
      <p class="btns"><a class="btn y" href="#b-offres">Voir les offres</a><a class="btn k" href="#b-apropos">Parcours et compétences</a></p>
    </div>
  </section>

  <section class="banner" aria-label="En une phrase">
    <p class="sr">{sentence}</p>
    <div class="marquee" aria-hidden="true"><div class="track">{track}</div><div class="track">{track}</div></div>
    <button type="button" class="pause" aria-pressed="false">Pause</button>
  </section>

  <figure class="bleed">
    <img src="{IMG}KeepBreathing/jury-presentation.webp" alt="Présentation de Keep Breathing devant le jury de la Global Game Jam 2026" width="1186" height="1320" loading="lazy">
    <figcaption>Global Game Jam 2026 · <span lang="en">Best Technical Achievement</span></figcaption>
  </figure>

  <section class="offers" aria-labelledby="b-offres">
    <h2 id="b-offres">Offres</h2>
    <div class="list">{offers_rows}</div>
    <p class="vat">Prix en euros. {VAT}</p>
  </section>

  <section class="projects" aria-labelledby="b-projets">
    <h2 id="b-projets" class="h-paper">Projets</h2>
    {proj}
  </section>

  <section class="process" aria-labelledby="b-process">
    <h2 id="b-process">Comment ça se passe</h2>
    <ol>{steps}</ol>
  </section>

  <section class="about" aria-labelledby="b-apropos">
    <div class="split">
      <div class="half media"><img src="{IMG}profile.webp" alt="Photo d'Alejandro Amaro Mendoza" width="1674" height="1672" loading="lazy"></div>
      <div class="stripe" aria-hidden="true"></div>
      <div class="half text">
        <h2 id="b-apropos">À propos</h2>
        <div lang="en">{about_en}</div>
      </div>
    </div>
    <div class="split facts">
      <div class="half">
        <h3>Trajectoire</h3>
        <table><tbody>{tl}<tr><th scope="row">Langues</th><td>{LANGS}</td></tr></tbody></table>
      </div>
      <div class="stripe" aria-hidden="true"></div>
      <div class="half">
        <h3>Compétences</h3>
        <div class="skills">{sk}</div>
      </div>
    </div>
  </section>

  <section class="contact" aria-labelledby="b-contact">
    <h2 id="b-contact">Parlons de<br>votre projet</h2>
    <p class="reply">{REPLY}</p>
    <p class="mail"><a href="mailto:{EMAIL}">{EMAIL}</a> {copy_btn()}</p>
    <p><a class="block-link" href="{LINKEDIN}" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    {form(p)}
  </section>
</main>
{footer(p)}
{proscons([
    "<b>Pro:</b> la más memorable y con más carácter; la oferta recomendada en bloque amarillo y los precios enormes se ven al primer vistazo.",
    "<b>Pro:</b> las imágenes a sangre y el 50/50 lucen el trabajo gráfico; el listón de una sola frase fija el mensaje.",
    "<b>Contra:</b> exige imágenes fuertes y bien recortadas (ahora hay capturas de interfaz); el ruido puede asustar a una pyme muy conservadora.",
])}
</div>"""


# --------------------------------------------------------------------------
# C. Relato en scroll
# --------------------------------------------------------------------------
def words(text):
    # Envuelve cada palabra (respetando etiquetas simples) para el revelado por scroll
    parts = re.split(r"(\s+)", text)
    return "".join(f'<span class="w">{x}</span>' if x.strip() else x for x in parts)


def build_c():
    p = "c"
    slides = ""
    for i, pj in enumerate(PROJECTS, 1):
        slides += f"""
        <li class="slide">
          <figure>
            <div class="frame-img">{img(pj)}</div>
            <figcaption>
              <span class="s-num">{i:02d}</span>
              <span class="s-title">{pj['title']}</span>
              <span class="s-kind">{pj['kind']}</span>
              <span class="s-desc" lang="en">{pj['desc']}</span>
              <a href="{SITE}{pj['url']}">Étude de cas<span class="sr"> {pj['title']}</span> →</a>
            </figcaption>
          </figure>
        </li>"""
    offers_rows = ""
    for o in OFFERS:
        offers_rows += f"""
      <li class="orow{' is-featured' if o['featured'] else ''}">
        <span class="o-num" aria-hidden="true">{o['num']}</span>
        <span class="o-title"><a href="#c-contact">{o['title']}</a>{'<em>Point de départ conseillé</em>' if o['featured'] else ''}</span>
        <span class="o-short">{o['short']}</span>
        <span class="o-price">{(o['pre'] + ' ') if o['pre'] else ''}{o['amount']}{f'<small>{o["note"]}</small>' if o['note'] else ''}</span>
        <span class="o-arrow" aria-hidden="true">→</span>
      </li>"""
    steps = "".join(
        f'<li class="step"><p class="step-n">{i:02d}</p><h3>{t}</h3><p class="lit">{words(d)}</p></li>'
        for i, (t, d) in enumerate(PROCESS, 1))
    tl = "".join(f'<li><p class="y">{y}</p><p><strong>{t}</strong><br>{s}</p></li>' for y, t, s in TIMELINE)
    sk = "".join(f'<li><strong>{n}</strong> {", ".join(t)}</li>' for n, t in SKILLS)
    return f"""
<div class="prop pC" id="C" data-prop="C">
{nav(p)}
<main id="{p}-top">
  <section class="hero" aria-labelledby="c-h1">
    <p class="eyebrow">Designer web &amp; e-commerce à Strasbourg</p>
    <h1 id="c-h1"><span class="ph">Votre boutique en ligne,</span> <span class="ph">belle, à jour</span> <span class="ph">et qui vend.</span></h1>
    <p class="sub">{VALUE_SUB}</p>
    <p class="btns"><a class="btn" href="#c-offres">Voir les offres</a><a class="btn ghost" href="#c-apropos">Parcours et compétences</a></p>
    <p class="mail"><a href="mailto:{EMAIL}">{EMAIL}</a> {copy_btn()}</p>
  </section>

  <section class="scene" aria-labelledby="c-s1">
    <p class="chap" id="c-s1">01 · Le point de départ</p>
    <p class="big lit">{words("Une boutique peut être belle et perdre ses ventes entre la fiche produit, le panier et la commande.")}</p>
  </section>

  <section class="scene" aria-labelledby="c-s2">
    <p class="chap" id="c-s2">02 · Ce que je regarde</p>
    <p class="big lit">{words("Je passe en revue ces trois pages, je classe ce qui freine, et je redessine en priorité ce qui compte pour vos clients.")}</p>
  </section>

  <section class="process" aria-labelledby="c-process">
    <h2 id="c-process" class="chap">03 · Comment ça se passe</h2>
    <ol>{steps}</ol>
  </section>

  <section class="rail" aria-labelledby="c-projets" data-rail>
    <div class="rail-sticky">
      <h2 id="c-projets" class="chap">04 · Projets</h2>
      <ul class="rail-track">{slides}</ul>
    </div>
  </section>

  <section class="offers" aria-labelledby="c-offres">
    <h2 id="c-offres">Offres</h2>
    <ul class="olist">{offers_rows}</ul>
    <p class="vat">Prix en euros. {VAT}</p>
  </section>

  <section class="about" aria-labelledby="c-apropos">
    <h2 id="c-apropos">À propos</h2>
    <div class="about-grid">
      <img src="{IMG}profile.webp" alt="Photo d'Alejandro Amaro Mendoza" width="1674" height="1672" loading="lazy">
      <div>
        <p class="big lit" lang="en">{words("I learned resilience in Cuba, business strategy in Chile, and adaptability in France.")}</p>
        <div lang="en" class="about-en">{''.join(f'<p>{x}</p>' for x in ABOUT_EN)}</div>
      </div>
    </div>
    <h3 class="chap">Trajectoire</h3>
    <ol class="tl">{tl}</ol>
    <div class="facts">
      <p><strong>Langues</strong> {LANGS}</p>
      <ul class="skills">{sk}</ul>
    </div>
  </section>

  <section class="contact" aria-labelledby="c-contact">
    <h2 id="c-contact" class="big">{contact['title']}.</h2>
    <p class="reply">{REPLY} <a href="{LINKEDIN}" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    <p class="mail"><a href="mailto:{EMAIL}">{EMAIL}</a> {copy_btn()}</p>
    {form(p)}
  </section>
</main>
{footer(p)}
{proscons([
    "<b>Pro:</b> explica el valor (problema, método, resultado) antes de enseñar precios; la más persuasiva para una pyme que no sabe qué necesita.",
    "<b>Pro:</b> el carril casi a pantalla completa da protagonismo a los proyectos; plana y moderna, sin 3D.",
    "<b>Contra:</b> más larga y con más JS (scroll); quien llega con prisa (reclutador) tarda más en ver precios y trayectoria. Las frases del relato son mías: revisar.",
])}
</div>"""


# --------------------------------------------------------------------------
# Página
# --------------------------------------------------------------------------
CSS = (Path(__file__).resolve().parent / "estilos.css").read_text(encoding="utf-8")
JS = (Path(__file__).resolve().parent / "script.js").read_text(encoding="utf-8")

page = f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Propuestas de estilo · alejandro-is.me (fase 0)</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400&family=Anton&family=Archivo:wght@400;500;700&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap" rel="stylesheet">
<style>
{CSS}
</style>
</head>
<body>
<nav class="switcher" aria-label="Elegir propuesta" lang="es">
  <span class="sw-lbl">Propuesta</span>
  <a href="#A" data-go="A">A · Índice</a>
  <a href="#B" data-go="B">B · Bloques</a>
  <a href="#C" data-go="C">C · Relato</a>
</nav>
{build_a()}
{build_b()}
{build_c()}
<script>
{JS}
</script>
</body>
</html>
"""

assert "\u2014" not in page, "Hay un guion largo en el HTML"
OUT.write_text(page, encoding="utf-8")
print("OK", OUT, len(page) // 1024, "KB")
