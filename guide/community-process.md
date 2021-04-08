---
layout: page
title: CODECHECK community process guide
permalink: guide/community-process
redirect_from:
  - /techexample/
  - techexample
---

The CODECHECK community process described here is the steps that codecheckers follow when using open platforms for codechecking software from scientific articles, in particular the [GitHub organisation codecheckers](https://github.com/codecheckers/) and [Zenodo]() for depositing check reports.
These codechecks may be part of a journal review or not and are a concrete implementation of the abstract [CODECHECK process](/process) following the _[CODECHECK principles](/)_.
Be aware that community CODECHECKs may fall short of Rule 3 as the CODECHECKs might not be properly registered as peer reviews in the respective public databases.

## Author tasks

### tl;dr

**Have a `README`: all else is details.** <span style="color: grey;">*</span>

<span style="font-size: 60%; color: grey;">Inspired by Greg Wilson's first rule of <a href="http://teachtogether.tech/" title="Teaching Tech Together">Teaching Tech Together</a>.</span>

### Background

The author must provide a _[preproducible](https://doi.org/10.1038/d41586-018-05256-0) workflow_:
all data and code files necessary to reproduce the results are provided in a way that allows fellow researchers to follow and execute the steps.
Often this workflow includes the generation of key figures from the article based on data.

Making current code reproducible with the **awareness** of the challenges is possible.
See [this interesting article](https://www.nature.com/articles/d41586-020-02462-7) for challenges of reproducing old code, measures taken, and lessons learned.
The article also includes a [_reproducibility checklist_](https://doi.org/10.1038/d41586-020-02462-7) that can help you to prepare your work for a CODECHECK.
It is worth taking a look around for such checklists for your discipline or method, e.g., [Papers with Code](https://paperswithcode.com/)'s [Machine Learning Code Completeness Checklist](https://medium.com/paperswithcode/ml-code-completeness-checklist-e9127b168501).

From our experience, **documentation** is the key.
A typical measure for a good level of documentation is to provide at least so much information as the author would themselves need after a longer period of time, e.g., 1 year, to run the analysis again.
Any researcher, even if not familiar with the software stack, should be able to run the workflow and find out if the code works.
Structured information about the computing environment, such as a [_colophon_](https://github.com/benmarwick/rrtools/blob/master/inst/templates/paper.Rmd#L105) or _"reproducibility receipt"_ in computational notebooks (see [this discussion on Twitter](https://twitter.com/MilesMcBain/status/1263272935197782016?s=09)) are very helpful.

Common sense shall be applied to decide about the suitable amount of data and to handle big datasets, sensitive datasets with privacy concerns, and long execution times.
For example, data may be deposited depending on community practices in remote repositories, synthetic data may be used, subsets or preprocessed data may be included, or protected access to information may be provided (e.g. cloud-based data enclaves).

### Requirements

The minimal set of files, besides all required data and code, to implement a CODECHECK process are the following (`/` is the project root directory, which could be for example, `/home/username/research-project/2020/great-paper`).
Ideally, the author supplies these three files, though they might also be created in collaboration with the codechecker.

1. **`/README` file** with instructions how to execute the workflow (must be plain text, may have suitable extension, e.g., `.txt`, `.md`, `.markdown`)
1. **`/codecheck.yml` file** with a list of output files created by the workflow, the so called manifest; these files must be created by the workflow and are the basis for validating a successful CODECHECK; see the [latest CODECHECK configuration file specification]({{ 'spec/config/latest' | absolute_url }}) for the required and optional contents and start with the [_minimal example for authors_]({{ 'spec/config/1.0/#tldr-for-authors' | absolute_url }})
1. **`/LICENSE` file** with information about licenses for all submitted material, e.g. code license for scripts and data licenses for used datasets

### Publication

The required files and the workflow code and data are published in a dedicated self-contained repository in the [codecheckers organisation on GitHub](https://github.com/codecheckers/).
This happens by [forking](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the authors repository, if one already exist.
If the repository is on GitLab(.com), the [cdchck organisation on GitLab](https://gitlab.com/cdchck) can be used.
After the CODECHECK, authors may transfer the improvements and certificate back to their own repository.

### Extras

Beyond the minimally required files to run a workflow, any additional configuration and information is extremely helpful, of course, and can greatly improve the smoothness of the CODECHECK process.
Some hints as to what this can entail are given by the codechecker's tasks below - it is worth taking the checker's perspective to improve your submission.

Furthermore, the concept of a _research compendium_ to package all building blocks of a research project together is very useful.
You can find examples and best practices for using research compendia on [https://research-compendium.science/](https://research-compendium.science/).
You can make the codechecker's task a lot easier if you provide some kind of dependency management or environment specification file.
These are too many to mention here, and different tools exist for different programming languages.
Check the documentation of your language of choice how to best to "pin" the versions of used packages.

Ideally, you make your repository "Binder-ready", which means that you define all the software your workflow needs in [common file formats for specifying dependencies and projects](https://mybinder.readthedocs.io/en/latest/howto/languages.html) (i.e., the dependency/environment configurations mentioned above) so that you and others can open your repository on [MyBinder.org](https://mybinder.org/).
Note that there are resource limitations to this free instance of [BinderHub](https://mybinder.readthedocs.io/en/latest/).
Alternatively, you may create an [Executable Research Compendium](https://doi.org/10.1045/january2017-nuest) using the [o2r online demo for publishing executable research](https://o2r.info/results/).

Feel free to inquire in the [CODECHECK discussion forum](https://github.com/codecheckers/discussion/issues) how you can best handle your specific case of sensitive or big data.

A great way to learn what a good way to meaningfully package your research for others to inspect, understand, and reproduce is to participate in a [ReproHack](https://reprohack.github.io/reprohack-hq/) and take on the reader/codechecker perspective.

### Submission

When your workflow is ready to be CODECHECK, open an issue on the [CODECHECK register](https://github.com/codecheckers/register/issues/new/choose).

------

## Codechecker tasks

### Prerequisites

The codechecker in general is not there to fix things, but to document how far they got.
The result is either is a completed CODECHECK, or a documentation why the check was found impossible to complete (see _[principle 1](/)_).
Codecheckers should give feedback to the author and definetely allow workflows to be fixed.
It is very hard to put a precise number on the amount of work you should put into a CODECHECK.
You're not expected to spend more time on a CODECHECK than you would on peer-reviewing a manuscript.
You should take advantage of the fact that you can _talk to the author_ and feel free to reach out early and often, when you think that issues can be resolved quickly.
Depending on your familiarity with the used programming language and specific tools at hand, a very rough experience value could be 30 minutes of reading documentation, downloading and installing software, and another 30 minutes to write up the CODECHECK report.
The time in between for running the actual workflow will vary greatly, from minutes to hours, and hopefully can be run in the background.
In case the computations run longer than your regular working day, consider asking the author to prepare a subset of the workflow.

However, a codechecker may, for example out of personal interest in the research at hand, invest additional efforts.
In any case, the overall goal is to _leave the workflow repository in the same or better condition_.

Some further tips:

- A familiarity with `make` is helpful to provide an easy entrypoint and build up useful code snippets for your CODECHECKs, see [https://the-turing-way.netlify.com/make/make.html](https://the-turing-way.netlify.com/make/make.html) and [https://swcarpentry.github.io/make-novice/reference](https://swcarpentry.github.io/make-novice/reference)

## CODECHECK steps

- Comment on the issue in the CODECHECK register repository to notify author and editor that you're accepting (and starting) the CODECHECK.
- Fork the author's repository to the codecheckers GitHub.com or GitLab.com organisation, or, if the code is not on GitHub/GitLab, create a new repository with the naming scheme `Lastname-YYYY` using the family name of the corresponding author. Please take care to follow the terms and conditions of the workspace's licenses; stop your CODECHECK if the licensing is unclear and contact the author to fix the documentation.
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
- **Write the CODECHECK report** and save it as a PDF file named **`codecheck.pdf`** in the check directory.
  The report should cover at least _WHO_ checked _WHAT_, and _HOW_.
  Imagine the report as a reminder for future you so you will be to re-check the workflow in two years time - what help would you need to do that?
  Take a look at the [example CODECHECKs](#examples) for existing reports to serve as templates.
- **Optional report sections** depending on interest, time, and skills:
  - _How to cite the report?_ Your CODECHECK is a valuable contribution to science, and you should add a short note on how to cite your report (see below for reserving the DOI).
  - Do the generated outputs match the ones in the original manuscript? Are the differences relevant or not?
  - Are there any parts of the workflow where the author could improve the code?
  - How long did it take you to conduct the CHECK, and where did you struggle?
  - Are used pieces of software and data properly CITED and publicly DEPOSITED und suitable LICENSES?
  - Are open formats (text-based etc.) used for input and output data?
  - Is the data and [software](https://content.iospress.com/articles/data-science/ds190026) FAIR?
- Add **mandatory codechecker-contributed information** to the **`codecheck.yml`** file, see [spec](/spec/config/latest)
- Wait for the article DOI.
- **Deposit the CODECHECK report on _Zenodo_** using your own Zenodo account
  - _Files_
    - `codecheck.pdf` (mandatory)
    - Optional: You can add any material to this record that you see fit, especially things that helped you with your reproduction, i.e., the [CODECHECK bundle](/guide/bundle)
  - _Communities_: Search for "codecheck" to add the record to the [CODECHECK community on Zenodo](https://zenodo.org/communities/codecheck)
  - _Authors_: Add all codecheckers as authors
  - _Title_: `"CODECHECK Certificate YYYY-NNN"` (certificate number issued via the register ticket above)
  - _License_: Use `Creative Commons Attribution 4.0 International` if you only upload the CODECHECK report, otherwise use `Other (Open)` or `Other (Attribution)` and document the licensing in the "Additional notes" field.
  - _Reserve a DOI_
    - Add the DOI to the `codecheck.yml` file
    - Mention the DOI to the `codecheck.pdf` CODECHECK report, e.g. as a subtitle
  - Use _other fields_ as you see fit (Description, Version, Language, Keywords)
  - _Contributors_: Add the original authors as contributors (see Zendo Metadata form section "Contributors (optional)") with a suitable role (e.g., "Researcher")
  - _Optionally_, add extra metadata
    - connect the Zenodo record to the GitHub repository with a "Relate/alternate identifier"
    - connect the Zenodo record to the article/preprint with a "Relate/alternate identifier"
- If the check was conducted for a piece of software for the first time or resulted in important lessons learned, consider adding it to the list of examples below.
- If possible, add the [CODE WORKS badge](https://github.com/codecheckers/website/tree/master/badges) <img src="/img/codeworks-badge.svg" alt="CODECHECK badge" height="16" style="margin-top: -4px;" /> to the article or the original software repository, e.g., by sending a pull request. The badge should link directly to the Zenodo record _via the DOI_.
  The following snippet should work in Markdown:
  ```
  [![CODECHECK](https://codecheck.org.uk/img/codeworks-badge.svg)](https://doi.org/<DOI HERE>)
  ```
- If the check material is published on `github.com/codecheckers`, add the [`codecheck` topic](https://github.com/search?q=topic%3Acodecheck+fork%3Atrue+org%3Acodecheckers&type=Repositories) to the project.

Every CODECHECK is unique, just as the associated research article.
The codechecker can thereby rely on the examples below and future published CODECHECKs for good practices and approaches for codechecking.
Reach out to fellow codecheckers in the [CODECHECK discussion forum](https://github.com/codecheckers/discussion/issues) if you face any problems.

------

## Codecheck editor tasks

When a new issue is assigned to a codecheck editor in the register, here are a few things you need to do.

- **First checks**
  - Briefly check the submitted repository - does the workflow look at all codecheckable?
  - Ensure that a preprint is linked or a real manuscript is published within the repository, or that a reference to a journal submission is provided to which you have contacts.
  - Make sure the author has completed the [required author tasks](#requirements).
- **CODECHECK process**
  - Edit the first comment of the issue and add the next available _Certificate identifier_ in `YYYY-NNN` format by checking existing open issues with [`id assigned`](https://github.com/codecheckers/register/labels/id%20assigned) for the next available number; add the badge `id assigned` to the issue.
  - [Find a codechecker](https://github.com/codecheckers/codecheckers/) and invite them by @-mentioning in the register issue. Remove the [`needs codechecker`](https://github.com/codecheckers/register/labels/needs%20codechecker) badge when you found one. Good job so far!
  - Use the following labels to document the current state of the check: [`work in progress`](https://github.com/codecheckers/register/labels/work%20in%20progress), [`metadata pending`](https://github.com/codecheckers/register/labels/metadata%20pending)
  - Support the codechecker as needed (sent reminders, technical support, mediate between author and codechecker, et cetera); _all communication should happen within the GitHub issue on the register!_
  - Ensure that a reference to the certificate is/will be added to the manuscript.
- **Certificate publication and register**
  - Wait until the article is published (unless it's a preprint).
  - Ask the codechecker to add/update all required metadata in the `codecheck.yml` and updated the certificate report (especially the final DOI!), double-check the information in the metadata and the actual certificate; wait until the certificate is published with its own DOI.
  - Trigger a rebuild of the register by adding the CODECHECK to the `register.csv` file; you may add a `closes #N` statement in the commit message to close the isue.
  - Clear up the labels of the register issue - all labels except the [`community`](https://github.com/codecheckers/register/labels/community)/[`journal`](https://github.com/codecheckers/register/labels/journal)/[`conference/workshop`](https://github.com/codecheckers/register/labels/conference%2Fworkshop) should be removed.
  - Close the issue on the register.

------

## Examples

**See the [CODECHECK register](/register) for a full list of codechecks, including direct links to the reports and register issues with background information.**

### Neuroscience 🧠

#### [Piccolo, 2020](https://github.com/codecheckers/Piccolo-2020)

Codechecker: [@sje30](https://github.com/sje30)

Report: [http://doi.org/10.5281/zenodo.3674056](http://doi.org/10.5281/zenodo.3674056)

Journal: GigaScience, see also [related blog post](http://gigasciencejournal.com/blog/codecheck-certificate/) reporting on this first CODECHECK for the journal.

#### [Hopfield, 1982](https://github.com/codecheckers/Hopfield-1982)

A landmark paper from neuroscience, reproduced by [@sebwyh](https://github.com/sebwyh) with edits by [@nuest](https://github.com/nuest).

Codechecker: [@nuest](https://github.com/nuest)

Report: [https://doi.org/10.5281/zenodo.3741797](https://doi.org/10.5281/zenodo.3741797)

#### [Hancock, 1991](https://github.com/codecheckers/Reproduction-Hancock)

A classical neuroscience paper.

Codechecker: [@sje30](https://github.com/sje30) and [@nuest](https://github.com/nuest)

Report: [http://doi.org/10.5281/zenodo.3750741](http://doi.org/10.5281/zenodo.3750741)

### GIScience/Geography/Geoinformatics 🌏🌎🌍 

#### [Brunsden & Comber, 2020](https://github.com/codecheckers/OpeningPractice)

Paper on reproducibility in spatial data science.

Codechecker: [@nuest](https://github.com/nuest)

Report: [https://doi.org/10.5281/zenodo.3873153](https://doi.org/10.5281/zenodo.3873153)

### Archaeology ⛏️

Paper on spatial dependence in archaeological spaces.

Codechecker: [@nuest](https://github.com/nuest)

Report: [https://doi.org/10.5281/zenodo.4279275](https://doi.org/10.5281/zenodo.4279275)

### _Your scientific dispipline here..._

**[Get involved!](/get-involved)**