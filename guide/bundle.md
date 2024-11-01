---
layout: page
title: CODECHECK bundle
permalink: guide/bundle
---

The CODECHECK bundle is _not_ formally specified, as its contents are largely at the discretion of the codechecker.
Unlike the [CODECHECK configuration file](/spec/config/latest), which has a more formal specification.
Therefore, this page acts as a guidance for codecheckers and may evolve over time.

**The CODECHECK bundle includes all files that the codechecker used to conduct the CODECHECK.**
This may include a copy of the author's files, and any additional files that the codechecker created to assisst them in their CODECHECK.

## Computing environment documentation

- Binder's [_REES_ specification](https://repo2docker.readthedocs.io/en/latest/config_files.html#config-files), for example by creating one or several of the following files or tools:
  - `Dockerfile`
  - Binder
  - `environment.yml`
  - `requirements.txt`
  - `DESCRIPTION` file (R package)
- virtual environments (Python)
- package `renv` (R)
- Dockerfile and Docker image, see [Ten simple rules for writing Dockerfiles for reproducible data science](https://doi.org/10.1371/journal.pcbi.1008316)
- ...

## Codecheck report with R Markdown

R Markdown has some nice features that are helpful for writing a report.

- Literate programming and code chunks (hidden, visible) with nice looking and mostly hastle free PDF output (using [tinytex](https://yihui.name/tinytex/))
- You can configure document metadata, e.g. the title or subtitle, anywhere in the document, so you can choose to configure them only in the `codecheck.yml`, see [this example](https://github.com/codecheckers/Piccolo-2020/blob/master/codecheck/piccolo2020-codecheck.Rmd)
- The CODECHECK [assistant](https://github.com/codecheckers/assistant/) is an R package that streamlines report writing with R
- You can capture the metadata of the computing environment in an automatically generated _colophon_ that lists installed packages and session information (using `sessionInfo()` or `devtools::session_info()`), see for example [this one](https://github.com/benmarwick/rrtools/blob/master/inst/templates/paper.qmd#L119) in the template in `rrtools` by Ben Marwick,  or a _reproducibility receipt_, see [this code example](https://github.com/PredictiveEcology/pemisc/blob/cf1516ff3893a7ffbfe1ae6623c0350c47c3e1b2/R/reproducibilityReceipt.R#L20), which adds git repository information and information about external libraries to the session information
