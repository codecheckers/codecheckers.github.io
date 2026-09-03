# [CODECHECK](https://codecheck.org.uk)

CODECHECK is a process for independent execution of computations underlying scholarly research articles.
This repository contains the sources for the project website at `codecheck.org.uk` and graphic files of the project.

**Note:** the website currently must be built by GitHub pages, and therefore is named `codecheckers.github.io`, because only then can project repositories easily be built as subpages, e.g., <https://codecheck.org.uk/register>.
Pages _cannot_ be built with Travis CI from `master` branch into a `gh-pages` branch.

## Logo and badge

![badge](https://raw.githubusercontent.com/codecheckers/website/master/badges/codeworks-badge.png)

![logo](https://codecheck.org.uk/img/codecheck_logo.svg)

Find the source files for the CODECHECK logo and badge in the following directories in this repository:

- `logo`
- `badge`

All graphics unless noted otherwise are published under a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/) (CC BY 4.0).

The "CODECHECK green" is `#008033`, or CMYB(100%, 0%, 60%, 50%), HSL(144, 100%, 25%), RGBA(0, 128, 51, 1), `\rgb{0, 0.5, 0.2}`.

## Figures

The figures used on the website are at <https://drive.google.com/drive/folders/1XUsfF9ZlZ_dwLTJxu_PIcq-3hEldI3d-?usp=sharing>

## Website

See `Makefile` for commands to build and view the site locally with [Jekyll](https://jekyllrb.com/).

If you want to override a file from the `minima-reboot` template, run `bundle info minima-reboot` to see where the bundle files are and copy it into this project.

- Jekyll GitHub pages: <https://jekyllrb.com/docs/github-pages>
- `minima-reboot` theme: <https://github.com/aterenin/minima-reboot>

Prerequisites:

- `ruby` and `ruby-dev`
- gem `bundler`

### Preview and build locally

Use one of

```bash
make preview
make build
```

### Build with Docker

Run

```bash
docker compose up
```

and open the website at <http://localhost>.

More details at [`jekyll/jekyll` image documentation](https://github.com/envygeeks/jekyll-docker/blob/master/README.md).

## Recurring news item: papers citing CODECHECK certificates

A good source for news entries are **published articles that reference a CODECHECK
certificate** in their text, e.g. the Wind Energy Science articles that state
"This paper includes verified computational reproducibility, confirmed through an
independent CODECHECK process".
Searching for these is worth repeating roughly **once or twice a year**, collecting
the new references since the previous round into one news item.

How to search:

- **Google Scholar** for `"CODECHECK certificate"` and variants - the only index
  that searches publisher full texts, but it needs a real browser.
- **Europe PMC** and **OpenAlex** full-text APIs, plus OpenAlex citations of the
  certificate records themselves (certificates are indexed as works).
- The **register** (`https://codecheck.org.uk/register/register.json`) lists every
  check with its paper DOI, so recently checked papers can be inspected directly.

Always verify a hit in the actual full text, and distinguish papers citing *their
own* certificate from papers citing *someone else's* as an example.

Local tooling for this lives in `.scholar/` (git-ignored, not part of the site):
a Playwright-based Scholar client with a persistent browser profile, the API
queries above, and a recipe for element-precise paragraph screenshots.
See `.scholar/README.md`.

## License

Except where otherwise this repository is licensed under a [Creative Commons Attribution Share-Alike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

![CC-BY-SA 4.0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg)
