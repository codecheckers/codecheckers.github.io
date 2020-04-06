---
layout: page
title: CODECHECK community process guide
permalink: guide/community-process
redirect_from:
  - /techexample/
  - techexample
---

The CODECHECK community process described here is the steps that codecheckers follow when using GitHub, in particular the [GitHub organisation codecheckers](https://github.com/codecheckers/), and Zenodo for codechecking software from scientific articles.
These codechecks may be part of a journal review or not and are a concrete implementation of the abstract [CODECHECK process](/process) following the _[CODECHECK principles](/)_.

## Author responsibilities

The author must provide a _[preproducible](doi.org/10.1038/d41586-018-05256-0) workflow_: all data and code files necessary to reproduce the results are provided in a way that allows fellow researchers to follow and execute the steps.
Often this workflow includes the generation of key figures from the article based on data.

A typical measure for documentation is to provide at least so much information as the author would themselves need after a long period of time, e.g. 1 year, to run the analysis again.
Any researcher, even if not familiar with the software stack, should be able to run the workflow and find out if the code works.

Common sense shall be applied to decide about the suitable amount of data and to handle big datasets and privacy concerns.
For example, data may be deposited depending on community practices in remote repositories, synthetic data may be used, subsets or preprocessed data may be included, or protected access to information may be provided (e.g. cloud-based data enclaves).

The minimal set of files, besides all required data and code, to implement a CODECHECK process are the following (`/` is the project root directory, which could be for example, `/home/username/research-project/2020/great-paper`):

1. **`/README` file** with instructions how to execute the workflow (must be plain text, may have suitable extension, e.g., `.txt`, `.md`, `.markdown`)
1. **`/codecheck.yml` file** with a list of output files created by the workflow, the so called manifest; these files must be created by the workflow and are the basis for validating a successful CODECHECK; see the [latest CODECHECK configuration file specification]({{ 'spec/config/latest' | absolute_url }}) for the required and optional contents
1. **`/LICENSE` file** with information about licenses for all submitted material, e.g. code license for scripts and data licenses for used datasets

These files and the worklow are published in a dedicated self-contained repository in the [codecheckers organisation on GitHub](https://github.com/codecheckers/).
After the CODECHECK, authors may transfer the improvements and certificate back to their own repository.

Beyond that, any additional configuration and information is extremely helpful, of course.
Some hints as to what this can entail are given by the codechecker's tasks below and the concept of a [research compendium](https://research-compendium.science/).

## Codechecker tasks

The codechecker in general is not there to fix things, but to document how far they go and give feedback to the author until a CODECHECK could be completed or is found impossible (see _[principle 1](/)_).
However, a codechecker may, for example out of personal interest in the research at hand, invest additional efforts.
In any case, the overall goal is to _leave the workflow repository in the same or better condition_.

**Prerequisites:**

- Familiarity with `make`, see [https://the-turing-way.netlify.com/make/make.html](https://the-turing-way.netlify.com/make/make.html) and [https://swcarpentry.github.io/make-novice/reference](https://swcarpentry.github.io/make-novice/reference)

**CODECHECK steps:**

- [Open an issue on the CODECHECK register](https://github.com/codecheckers/register/issues) to notify other codecheckers about the CODECHECK you're starting.
- Fork the author's repository to the codecheckers GitHub organisation, or create a new repository with the naming scheme `Lastname-YYYY` using the family name of the corresponding author. Please take care to follow the terms and conditions of the workspace licenses; stop your CODECHECK if the licensing is unclear and contact the author to fix the documentation.
- Create a directory `codecheck` to not interfere with original files.
  This is the _check directory_.
  You can use `.codecheck` if `codecheck` exists in submission for some reason.
  _All files created by you go into this directory._
  The exception are files that the author could have used and which you suggest the author transfers into her own repository after the check (see "leave in a better condition" above).
- **Write a `Makefile`** to re-run the workflow based on provided documentation, i.e., recreate all files listed in the manifest by runnign the command `make codecheck`.
  This target should run the whole or most suitable subset of the workflow and create the report.
- **Optional contents** of the check directory.
  - Document the used computing environment, see [CODECHECK bundle guide](/guide/bundle).
  - Create a notebook as the basis for the report (see below), e.g. `codecheck.Rmd`.
  - Make the repository [Binder-ready](https://mybinder.readthedocs.io/); put all Binder-related files into `.binder/` directory to separate them from the author's content.
- **Add a CODECHECK report** as a PDF file named **`codecheck.pdf`** in the check directory.
  The report should cover at least _WHO_ checked _WHAT_, and _HOW_.
  Imagine the report as a reminder for future you to be able to re-check the workflow in two years time - what help would you need to do that?
  You can check the [example CODECHECKs](#examples) for some templates for reports.
- **Optional report sections** depending on interest, time, and skills:
  - Do the generated outputs match the ones in the original manuscript? Are the differences relevant or not?
  - Are there any parts of the workflow where the author could improve the code?
  - How long did it take you to conduct the CHECK, and where did you struggle?
  - Are used pieces of software and data properly CITED and publicly DEPOSITED und suitable LICENSES?
  - Are open formats (text-based etc.) used for input and output data?
  - Is the data and [software](https://content.iospress.com/articles/data-science/ds190026) FAIR?
- Add **mandatory codechecker-contributed information** to the **`codecheck.yml`** file, see [spec](/spec/config/latest)
- **Deposit the CODECHECK report on _Zenodo_** using your own Zenodo account
  - Files
    - `codecheck.pdf` (mandatory)
    - Optional: You can add any material to this record that you see fit, especially things that helped you with your reproduction, i.e., the [CODECHECK bundle](/guide/bundle)
  - Communities: Search for "codecheck"
  - Authors: Add all codecheckers as authors
  - Title: `"CODECHECK Certificate YYYY-NNN"` (certificate number issued via the register ticket above)
  - License: Use `Creative Commons Attribution 4.0 International` if you only upload the CODECHECK report, otherwise use `Other (Open)` or `Other (Attribution)` and document the licensing in the "Additional notes" field.
  - Reserve a DOI
    - Add the DOI to the `codecheck.yml` file
    - Mention the DOI to the `codecheck.pdf` CODECHECK report, e.g. as a subtitle
  - Use other fields as you see fit, i.e. Description, Version, Language, Keywords
  - Add the original authors as contributors (see Zendo Metadata form section "Contributors (optional)")
  - Optional: add extra metadata
    - connect the Zenodo record to the GitHub repository with a "Relate/alternate identifier"
    - connect the Zenodo record to the article/preprint with a "Relate/alternate identifier"
  - Add the record to the [CODECHECK community on Zenodo](https://zenodo.org/communities/codecheck)
- Add the CODECHECK to the register. If the check was conducted for the first time for a piece of software or resulted in important lessons learned, consider adding it to the list of examples below.
- Add the [CODE WORKS badge](https://github.com/codecheckers/website/tree/master/badges) to the article or the original software repository. The badge should link directly to the Zenodo record <img src="/img/codeworks-badge.svg" alt="CODECHECK badge" height="16" style="margin-top: -4px;" />
- Update the register issue with all important information, then close it.

Every CODECHECK is unique, just as the associated research article.
The codechecker can thereby rely on the examples below and future published CODECHECKs for good practices and approaches for codechecking.

## Start a CODECHECK

[Open a new issue](https://github.com/codecheckers/register/issues/new/choose) on the CODECHECK register with information about your workflow.

## Examples

See the [CODECHECK register on GitHub](https://github.com/codecheckers/register/) for a full list of codechecks.

### [Piccolo, 2020](https://github.com/codecheckers/Piccolo-2020)

Codechecker: [@sje30](https://github.com/sje30)

Report: [http://doi.org/10.5281/zenodo.3674056](http://doi.org/10.5281/zenodo.3674056)

Journal: GigaScience

### [Hopfield, 1982](https://github.com/codecheckers/Hopfield-1982)

A landmark paper from neuroscience, reproduced by [@sebwyh](https://github.com/sebwyh) with edits by [@nuest](https://github.com/nuest).

Codechecker: [@nuest](https://github.com/nuest)

Comments:

- seed not set, but human can judge the code works
- codechecker added `requirements.txt` using `pip freeze` after workflow could be executed
- codechecker added text to README about the computing environment

### Eglen, 2015 (work in progress)

https://github.com/codecheckers/eglen2015/

Draft CODECHECK report: https://github.com/sje30/codecheck/blob/master/cert/eglen2016/eglen2016-crc.Rmd

### Hancock, 1991 (work in progress)

https://github.com/codecheckers/Reproduction-Hancock

### Hathway Goodman, 2018 (work in progress)

https://github.com/codecheckers/Hathway-Goodman-2018

### Detorakis, 2017 (work in progress)

https://github.com/codecheckers/Detorakis-reproduction

### Larisch, 2019 (work in progress)

https://github.com/codecheckers/Larisch-reproduction

### Barto Sutten Anderson, 1983 (work in progress)

https://github.com/codecheckers/Barto-Sutton-Anderson-1983
