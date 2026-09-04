# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CODECHECK project website (codecheck.org.uk) — a Jekyll static site for an academic initiative around independent execution of computations underlying scholarly research articles.

The repository is named `codecheckers.github.io` on purpose: the site **must** be built by GitHub Pages from the `master` branch of the organisation site repo, because only then do other project repos render as subpages (e.g. <https://codecheck.org.uk/register> comes from a *different* repository). Do not propose moving the build to CI/a `gh-pages` branch. The custom domain lives in `CNAME`.

## Build & Development Commands

```bash
bundle install      # Ruby dependencies

make preview        # jekyll clean + jekyll serve (live reload, http://localhost:4000)
make build          # jekyll clean + jekyll build
make proof          # build + htmlproofer over _site (ignores /register, localhost)
make checklinks     # build + Dockerised linaroits/linkcheck

docker compose up   # alternative dev server
```

Note the version skew: local/GH Pages builds use Jekyll 3.10 (`Gemfile`), while `docker-compose.yml` pins the `jekyll/jekyll:4.2.0` image. Prefer `make preview` when behaviour differences matter.

`error_mode: strict` in `_config.yml` means Liquid errors fail the build rather than rendering silently — always run `make build` after touching templates or front matter.

`make proof` deliberately ignores `/register` because those pages are not part of this repository.

## Architecture

- **Jekyll 3.10**, kramdown with the GFM parser, plugins `jekyll-seo-tag`, `jekyll-remote-theme`, `jekyll-redirect-from`.
- **Theme**: `remote_theme: aterenin/minima-reboot`. To override a theme file, run `bundle info minima-reboot` and copy the file into this repo at the same path.
- **Frontend**: Bootstrap 4.1.3 + jQuery + Mustache.js, all **vendored** under `assets/js/` (the original CDN URLs are kept in HTML comments next to each `<script>` tag). No build step, no npm.

### Navigation and content

Top-level `.md` files are the content pages; the navigation is whatever `header_pages` in `_config.yml` lists (`project`, `process`, `workflows`, `partners`, `get-involved`). Other top-level pages (`faq.md`, `benefits.md`, `institutions.md`, `mozilla-project.md`) exist but are only reachable via in-page links.

### Layouts

`_layouts/` holds three custom layouts on top of the theme's:

- `default.html` — general pages
- `spec.html` — versioned specification pages, renders `page.title` + `page.version` in a custom header
- `nl.html` — CHECK-NL subsite, adds the Dutch flag banner styling

### Versioned specs

`spec/config/*.md` are versioned documents. Each sets `layout: spec`, a `version`, an explicit `permalink` (e.g. `spec/config/1.0/`), and `redirect_from` aliases so that `spec/config/latest/` points at the current version. When publishing a new spec version, move the `latest`/major-version aliases from the old file to the new one.

### Dynamic register content

The homepage shows live data from the separately hosted CODECHECK register. The `$.ajax` calls live **inline in `index.md`** (in a `<script>` block near the bottom), fetching:

- `https://codecheck.org.uk/register/featured.json` — latest checks
- `https://codecheck.org.uk/register/stats.json` — check count
- `https://codecheck.org.uk/register/codecheckers/index.json`
- `https://codecheck.org.uk/register/venues/index.json`

`assets/codecheck.js` only provides the helpers (`parseChecks`, `updateList`, `updateCount`) that turn that JSON into Mustache-rendered list items. Scripts are injected via the `head_inline` front matter key.

Beware stale register URLs: the register is a separate site that gets restructured independently of this repo, so links here rot silently (`make proof` ignores `/register`). Verify with `curl -s -o /dev/null -w "%{http_code}" <url>` before citing a register path. Current pages are `/register/` (checks), `/register/venues/`, `/register/works/`, `/register/persons/` (nav label says "People"), `/register/organisations/`, and `/register/statistics/`.

### Homepage news items

`index.md` carries a reverse-chronological `## News` section; new entries go directly under the `## News` heading. Each is `### YYYY-MM | Short title <emoji>` followed by prose, one sentence per line (semantic linefeeds), with links written inline or as bare `<https://…>` autolinks.

Concrete figures quoted in news items (check counts, codechecker counts, …) should be read from the live register rather than guessed — `https://codecheck.org.uk/register/stats.json` carries `cert_count`, `venue_count`, `codechecker_count` plus per-year breakdowns, and the `works`/`persons`/`organisations` pages each state their own total in the first line of body text.

Screenshots accompanying news items live in `img/` and are embedded with kramdown attributes, e.g. `[![Alt text](/img/file.png){:width="500"}](/target)`. Capture them with headless Chrome and crop with ImageMagick:

```bash
google-chrome --headless --disable-gpu --hide-scrollbars --window-size=1280,1400 \
  --virtual-time-budget=8000 --screenshot=shot.png <url>
convert shot.png -crop 1280x1270+0+0 +repage -bordercolor '#cccccc' -border 1 img/name.png
```

### Guide

`guide/` is the process documentation, with the community workflow split by role — `community-workflow-overview.md`, `-author.md`, `-codechecker.md`, `-editor.md` — plus `bundle.md`, `event-recipe.md`, and downloadable report templates in `guide/templates/` (`.odt`/`.docx`) and PDFs. Changes to one role's workflow usually need a matching edit in the overview and the other roles.

### Subsites

`nl/` (CHECK-NL, Dutch project, `nl` layout) and `pub/` (CHECK-PUB OJS plugin) are self-contained page sets.

## Visual and responsive testing

Layout regressions are checked by rendering the built site in headless Chrome:

```bash
make screenshots                       # home page at 393x851, 768x1024, 1280x900
make screenshots PATHS="/ /faq/"       # other pages
test/screenshot.sh -b -o shots -w 393x1600 /404.html   # full control
```

`test/screenshot.sh` builds (with `-b`), serves `_site/` on a free port with
`python3 -m http.server`, shoots each path at each viewport and prints the PNG
paths; without `-o` they go to a fresh `/tmp/codecheck-shots-*` directory. No
npm, no Puppeteer - just `google-chrome --headless --screenshot`.

- `393x851` is the CSS-pixel viewport of current Android phones incl. the
  Fairphone FP4 (1080x2340 at DPR 2.75) - use it for the mobile check.
- Chrome captures the **viewport**, not the full page, so to look at the footer
  either shoot a short page (`/404.html`) or pass a tall viewport
  (`-w 393x1600`).
- The home page's "Latest CODECHECKs" list is fetched live from the register,
  so screenshots of `/` need network access; an empty list means the AJAX call
  failed, not a layout bug.

**jsdom cannot do this job**: it parses HTML and runs scripts but implements no
CSS cascade, no box model and no media queries (`getBoundingClientRect()`
returns zeros), so responsive breakpoints are invisible to it. Use it only for
DOM/JS logic (e.g. `assets/codecheck.js` helpers), never for layout.

### Responsive layout conventions

Grid columns need an explicit `col-12` for the stacked case (`col-12 col-lg`) -
a bare `col`/`col-6` keeps sharing the row on phones and produces the cramped
half-width columns this site had in the home page banner and the footer.

- Home page banner: logo and the "Latest CODECHECKs" column split at `lg`
  (992px); below that the logo spans the full width, capped at 400px and
  centred by `assets/codecheck.css` behind
  `@media screen and (max-width: 991.98px)`.
- Footer (`_includes/footer.html`): **two columns at most**, from `md` on -
  copyright/licence next to the links, description across the full width.
  Three columns were tried and are too narrow for handles like
  `linkedin.com/company/codecheck/`, which then overlap the next column.
  The footer lists also opt out of the global `ul` max-width, which would
  otherwise shift their centred content off the column centre.

## Assets and branding

`logo/`, `badges/`, and `img/` hold branding sources; `logo` and `badge` are excluded from the Jekyll build in `_config.yml`. CODECHECK green is `#008033`. Website figures are kept in a shared Google Drive folder linked from `README.md`.

## Markdown linting

`.markdownlint.json` permits inline HTML (`div`, `span`, `iframe`, `details`, …) and disables MD013 (line length), MD041 (first-line heading), and MD026 (trailing punctuation in headings). Content files freely mix HTML into Markdown; keep to that style.

## Licensing

Content is CC BY-SA 4.0; graphics in `logo/` and `badges/` are CC BY 4.0.
