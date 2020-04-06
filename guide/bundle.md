---
layout: page
title: CODECHECK bundle
permalink: guide/bundle
---

The CODECHECK bundle is _not_ formally specified, as its contents are largely at the discretion of the codechecker.
Unlike the [CODECHECK configuration file](/spec/config/latest), which has a more formal specification.
Therefore, this page acts as a guidance for codecheckers and may evolve over time.

**The CODECHECK bundle includes all files that the codechecker used to conduct the CODECHECK.**
This may include a copy of the author's files, and any additional files that the codechecker created to assisst them in their codecheck.

## Computing environment documentation

- Binder's [_REES_ specification](https://repo2docker.readthedocs.io/en/latest/config_files.html#config-files), for example by creating one or several of the following files or tools:
  - `Dockerfile`
  - Binder
  - `environment.yml`
  - `requirements.txt`
  - `DESCRIPTION` file (R package)
- virtual environments (Python)
- package `renv` (R)
- Dockerfile and Docker image
- ...

## Codecheck report with R Markdown

R Markdown has some nice features that are helpful for writing a report.

- Literate programming and code chunks (hidden, visible) with nice looking and mostly hastle free PDF output (using [tinytex](https://yihui.name/tinytex/))
- You can configure document metadata, e.g. the title or subtitle, anywhere in the document, so you can choose to configure them only in the `codecheck.yml`, see [this example](https://github.com/codecheckers/Piccolo-2020/blob/master/codecheck/piccolo2020-codecheck.Rmd)
- The CODECHECK [assistant](https://github.com/codecheckers/assistant/) is an R package that streamlines report writing with R
