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

## Codecheck certificate with computational notebooks

Computational notebooks such as R Markdown (Rmd), Jupyter, or Quarto have very nice features that are helpful for writing a CODECHECK certificate.

- Literate programming and code chunks (hidden, visible) with nice looking and mostly hastle free PDF output (using [tinytex](https://yihui.name/tinytex/))
- You can configure document metadata, e.g. the title or subtitle, anywhere in the document, so you can choose to configure them only in the `codecheck.yml`, see [this example](https://github.com/codecheckers/Piccolo-2020/blob/master/codecheck/piccolo2020-codecheck.Rmd)
- You can capture the metadata of the computing environment in an automatically generated _colophon_ that lists installed packages and session information (using `sessionInfo()` or `devtools::session_info()` in R), see for example [this one](https://github.com/benmarwick/rrtools/blob/master/inst/templates/paper.qmd) in the template from `rrtools` by Ben Marwick,  or a _reproducibility receipt_, see [this code example](https://github.com/PredictiveEcology/pemisc/blob/cf1516ff3893a7ffbfe1ae6623c0350c47c3e1b2/R/reproducibilityReceipt.R), which adds git repository information and information about external libraries to the session information

We provide templates for R Markdown and Jupyter notebooks in an R package and a Python project:

- [R package `codecheck`](https://codecheck.org.uk/codecheck/) with Rmd templates and functions to validate metadata and upload the certificate to Zenodo
- [Python project `codecheck-py`](https://github.com/codecheckers/codecheck-py/) with a Jupyter notebook template and functions to validate 

In the future, a CODECHECK [assistant](https://github.com/codecheckers/assistant/) could be helpful - share your ideas an wishes in the project repository.
