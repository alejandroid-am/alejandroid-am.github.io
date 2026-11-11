# Alejandro Amaro Mendoza - Portfolio

Personal portfolio built with Jekyll and hosted on GitHub Pages.

**Live site:** [alejandro-is.me](https://www.alejandro-is.me)

## Structure

```
├── _config.yml           # Jekyll configuration
├── _data/                # All editable copy (FR + EN): home, offers, services, about, contact, i18n
├── _includes/            # Page parts (home, services, about, contact, rows, cards)
│   └── case/             # Blocks for case studies: hero, figure, pair, video, palette, type, logo, quote, compare, detail
├── _layouts/             # default (chrome), project (case studies), redirect
├── _projects/            # One .md per case study (/projects/<name>/)
├── _plantillas/          # proyecto.md: commented template for a new project (not published)
├── _propuestas/          # Design proposals (not published)
├── assets/
│   ├── css/site.css      # Visual system of the site (every page)
│   ├── css/style.css     # Legacy styles, loaded only on the case studies
│   ├── js/site.js        # Shared behaviour; main.js + zoom.js only on case studies
│   ├── fonts/            # Self-hosted fonts + OFL licences
│   └── img/              # Images organized by project
├── tools/                # Standalone web tools + optimize-images.sh (excluded from the build)
├── index.html, en/       # Home FR / EN
├── services/, projets/, a-propos/, contact/  (+ en/services/, en/projects/, en/about/, en/contact/)
├── cv/, portfolio.html, about.html, contact.html   # Redirects to the new pages
└── mentions-legales.html
```

## Adding a project

1. Prepare images: `tools/optimize-images.sh <image> assets/img/<project>` (makes `.webp` + `-960w.webp`, prints w/h and an include line).
2. Copy `_plantillas/proyecto.md` to `_projects/<project>.md`, fill the front matter, write the body with the `case/` includes.
3. It appears on `/projets/` automatically, and in the home rail if it has `home_order` (and not `hide_from_home`). `locked: true` shows a padlock card, never the body.

## Development

```bash
bundle install
bundle exec jekyll serve
```

## Tools: External Artifacts

The `/tools/` directory is **excluded from Jekyll processing** (`exclude` in `_config.yml`). 
Files in this directory are served as-is by GitHub Pages without any Jekyll templating.

### Updating Audita11y
Replace `/tools/audita11y/index.html` with the compiled HTML artifact. 
Do not integrate into the Jekyll build or convert: it is a standalone React app served as a static file.

### Updating OmniFormat
Replace `/tools/omniformat/index.html` (or the entire folder contents) with the compiled artifact.
The final format (single HTML or multiple files) is still to be determined.
Same rule: do not process through Jekyll, serve as-is.

## Deployment

Push to `main` branch → GitHub Pages auto-deploys via GitHub Actions.
Custom domain: `www.alejandro-is.me` (configured via CNAME file).

> **HTTPS**: Ensure "Enforce HTTPS" is enabled in the repository Settings → Pages.
