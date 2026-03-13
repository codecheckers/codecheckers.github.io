# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CODECHECK project website (codecheck.org.uk) — a Jekyll-based static site for an academic initiative around independent execution of computations underlying scholarly research articles. Hosted via GitHub Pages from the `master` branch. The custom domain is configured via the `CNAME` file.

## Build & Development Commands

```bash
# Local development with live reload (requires bundler)
make preview        # runs jekyll clean + jekyll serve

# Build the site
make build          # runs jekyll clean + jekyll build

# Alternative: Docker-based development (Jekyll 4.2.0)
docker compose up   # serves at http://localhost:4000

# Validate HTML and links
make proof          # builds then runs htmlproofer

# Install Ruby dependencies
bundle install
```

## Architecture

- **Jekyll 3.10** with remote theme `aterenin/minima-reboot`
- **Plugins**: jekyll-seo-tag, jekyll-redirect-from
- **Markdown**: kramdown with GFM parser
- **Frontend**: Bootstrap 4.1.3, jQuery, Mustache.js (for dynamic content on homepage)
- **Config**: `_config.yml` — strict error mode enabled

### Key Directories

- `_layouts/` — custom layouts: `default.html`, `spec.html`, `nl.html`
- `_includes/` — header, footer, head components, SVG social icons
- `assets/` — CSS (`codecheck.css`, `bootstrap.min.css`), JS (`codecheck.js` loads dynamic register data)
- `guide/` — detailed CODECHECK process documentation and templates
- `nl/` — CHECK-NL Dutch project subsite (uses `nl` layout)
- `pub/` — CHECK-PUB OJS plugin project page
- `spec/` — specification content
- `logo/`, `badges/`, `img/` — branding assets (excluded from Jekyll build via `_config.yml`)

### Content Pages

Top-level Markdown files (`index.md`, `project.md`, `process.md`, `workflows.md`, `partners.md`, `get-involved.md`, `faq.md`) map to site navigation defined in `_config.yml` under `header_pages`.

### Dynamic Content

`assets/codecheck.js` fetches CODECHECK register data from external sources and renders it on the homepage using Mustache templates.

## Markdown Linting

`.markdownlint.json` allows inline HTML elements (div, span, iframe, details, etc.), disables line length (MD013), first-line heading (MD041), and trailing punctuation in headings (MD026).

## Branding

- CODECHECK green: `#008033`
- Logo variants in `logo/` directory (SVG, PNG, hex sticker, B&W)
- Badges in `badges/` directory
