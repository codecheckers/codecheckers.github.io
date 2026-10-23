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

Top-level `.md` files are the content pages; the navigation is whatever `header_pages` in `_config.yml` lists (`project`, `benefits`, `workflows`, `partners`, `get-involved`), labelled with each page's `nav_title` if set, else its `title` (`_includes/header.html`). Other top-level pages (`faq.md`, `institutions.md`, `mozilla-project.md`) exist but are only reachable via in-page links.

`benefits.md` also holds what used to be the Process page (implementation dimensions and the figures from the CODECHECK paper); `process.md` is kept as a stub with `redirect_to: /benefits/#implementing-codecheck`, so link to that anchor directly.

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

`community-workflow-onboarding.md` lists the topics of the onboarding call a CODECHECK editor has with a new codechecker, ordered as the codechecker meets them during a check (roles → what a check is → first steps → time → communication → certificate → `codecheck.yml` → draft → publication → AI), followed by a section for institutional codecheckers. External links point at `#ai-in-codechecking`, so keep that heading.

#### Onboarding call transcriptions

<!-- Source: own rule, added 2026-10-23; based on the transcriptions of onboarding calls in October 2026. -->

The page is maintained from recordings of real onboarding calls (the editor's side), kept **outside the repo** in `~/Documents/CODECHECK/2026-10_Recordings-Transcriptions-Onboarding/`, each transcript saved next to its recording as `<recording name>.transcript.txt`. The recordings are private: never commit them or the transcripts, and never send the audio to a transcription service.

Transcribe locally with faster-whisper in a uv venv in the scratchpad (`uv pip install faster-whisper`): model `large-v3-turbo`, `device="cpu"`, `compute_type="int8"`, `BatchedInferencePipeline(...).transcribe(audio, language="en", batch_size=8, beam_size=5)`, writing one `[hh:mm:ss] text` line per segment. Decode the audio with system ffmpeg into a 16 kHz mono float array instead of faster-whisper's own PyAV decoding (which failed with a `metadata_errors` TypeError), and filter it on the way: `-af highpass=f=80,dynaudnorm=f=250:g=15` - one recording had a loud rumble below 60 Hz and quiet remote speakers that made Whisper skip whole minutes. Transcribe a 5-minute sample (`ffmpeg -t 300`) first and read it; if it has gaps, look at a spectrogram (`-lavfi showspectrumpic`). The full run takes about 0.6x real time on 12 cores, so run it in the background. Expect mis-heard names ("Kojek", "Carto" for CODECHECK, Quarto).

Turning a transcript into documentation changes:

- Go through the transcript topic by topic and compare each with the page: new advice, more precise wording (rules of thumb, concrete examples), different order, and contradictions with the page or the role guides.
- Fold new points into the existing sections rather than appending; remove what is now said twice. The goal is a shorter, more precise page, not a longer one - compare word counts before and after.
- Generalise: no names, institutions, or details of the checked work from the call; turn the specific case into an example ("six of eight tables", "an empty README").
- Check every claim against `community-workflow-codechecker.md` and the editor guide (e.g. where to publish, licensing, forking) and fix whichever is wrong in both places; ask the user when the call contradicts the guides.
- Publication details are often deferred to a later conversation in the call, so don't drop topics from the page just because a call skipped them.

### Subsites

`nl/` (CHECK-NL, Dutch project, `nl` layout) and `pub/` (CHECK-PUB OJS plugin) are self-contained page sets.

## Visual and responsive testing

Layout regressions are checked by rendering the built site in headless Chrome:

```bash
make screenshots                       # home page at 393x851, 768x1024, 1280x900
make screenshots PATHS="/ /faq/"       # other pages
test/screenshot.sh -b -o shots -w 393x1600 /404.html   # full control
```

`test/overflow.py` (`make overflow`, `make overflow WIDTH=768`) measures
`documentElement.scrollWidth` against the viewport on each page and names the
elements sticking out when one is too wide - fixed-width images, embedded
players and bare-URL autolinks are the usual culprits, and `assets/codecheck.css`
caps all three. A page that overflows drags the header and footer out with it.

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

## Global rules

<!-- Source: own rule, added 2026-10-23; see ~/.claude/CLAUDE.md, rule G0.2. -->

This applies only if a user-level `~/.claude/CLAUDE.md` exists; otherwise
ignore this section. That file holds rules for all projects, with IDs such as
G1.1. Whenever one of them changes what you do, say so in your reply and name
the rule, e.g. "I found X. I did not do Y but suggest Z, following global rule
G1.1."
