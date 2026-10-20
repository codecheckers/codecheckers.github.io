---
layout: page
title: CODECHECK community workflow guide for authors
---

See also the [CODECHECK community workflow overview](/guide/community-workflow-overview) and [discuss your issues](https://github.com/orgs/codecheckers/discussions).

## Author tasks

### tl;dr

**Have a `README`: everything else is details.** <span style="color: grey;">*</span>

<span style="font-size: 60%; color: grey;">Inspired by Greg Wilson's first rule of <a href="http://teachtogether.tech/" title="Teaching Tech Together">Teaching Tech Together</a>.</span>

### 1. Background

The author must provide a _[preproducible](https://doi.org/10.1038/d41586-018-05256-0) workflow_:
all data and code files necessary to reproduce the results are provided in a way that allows fellow researchers to follow and execute the steps.
Often this workflow includes the generation of key figures from the article based on data.

Making current code reproducible with the **awareness** of the challenges is possible.
See [this interesting article](https://www.nature.com/articles/d41586-020-02462-7) for challenges of reproducing old code, measures taken, and lessons learned.
The article also includes a [_reproducibility checklist_](https://doi.org/10.1038/d41586-020-02462-7) that can help you to prepare your work for a CODECHECK.
It is worth taking a look around for such checklists for your discipline or method, e.g., [Papers with Code](https://paperswithcode.com/)'s [Machine Learning Code Completeness Checklist](https://medium.com/paperswithcode/ml-code-completeness-checklist-e9127b168501).

From our experience, **documentation** is the key.
A typical measure for a good level of documentation is to provide at least so much information as the author would themselves need after a longer period of time, e.g., one year, to run the analysis again.
Any researcher, even if not familiar with the software stack, should be able to run the workflow and find out if the code works.
Structured information about the computing environment, such as a _colophon_ or _reproducibility receipt_ are very helpful, see the [CODECHECK bundle guide](/guide/bundle).

Common sense shall be applied to decide about the suitable amount of data and to handle big datasets, sensitive datasets with privacy concerns, and long execution times.
For example, data may be deposited depending on community practices in remote repositories, synthetic data may be used, subsets or preprocessed data may be included, or protected access to information may be provided (e.g. cloud-based data enclaves).

### 2. Requirements

The minimal set of files, besides all required data and code, to implement a CODECHECK process are the following ones (`.` is the project root directory, which could be for example, `/home/username/research-project/2020/great-paper`).
Ideally, the author supplies first versions of these three files, though they might also be jointly created in collaboration with the codechecker.
In case of the README, a codechecker's feedback can improve the README file's content.
In case of the metadata,  parts of the metadata will be provided by the codechecker or the CODECHECK editor.

1. **`./README` file** with instructions how to execute the workflow (must be plain text, may have suitable extension, e.g., `.txt`, `.md`, `.markdown`)
1. **`./codecheck.yml` file** with basic metadata and a list of output files created by the workflow, the so called manifest; these files must be created by the workflow and are the basis for validating a successful CODECHECK; see the [latest CODECHECK configuration file specification]({{ 'spec/config/latest' | absolute_url }}) for the required and optional contents and start with the [_minimal example for authors_]({{ 'spec/config/1.0/#tldr-for-authors' | absolute_url }}); you can check the file with the `codecheck` R package, `codecheck::validate_codecheck_yml_rules("codecheck.yml")`, which lists every rule of the specification and whether your file meets it
1. **`./LICENSE` file** with information about licenses for all submitted material, e.g. code license for scripts and data licenses for used datasets; see [The Turing Way](https://book.the-turing-way.org/reproducible-research/licensing.html) on licensing for guidance

### 3. Publication of workflow

The required files and the workflow code and data are published in a dedicated self-contained repository in the [codecheckers organisation on GitHub](https://github.com/codecheckers/).
This happens by [forking](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the authors repository, if one already exist.
If the repository is on GitLab(.com), the [cdchck organisation on GitLab](https://gitlab.com/cdchck) can be used.
After the CODECHECK, authors may transfer the improvements and certificate back to their own repository.

### 4. Extras

Beyond the minimally required files to run a workflow, any additional configuration and information is extremely helpful, of course, and can greatly improve the smoothness of the CODECHECK process.
Some hints as to what this can entail are given by the codechecker's tasks below - it is worth taking the checker's perspective to improve your submission.
The [good practices and common pitfalls](#learning-from-examples) below show what helped and hindered codecheckers in past checks.

Furthermore, the concept of a _research compendium_ to package all building blocks of a research project together is very useful.
You can find examples and best practices for using research compendia on [https://research-compendium.science/](https://research-compendium.science/).
You can make the codechecker's task a lot easier if you provide some kind of dependency management or environment specification file.
These are too many to mention here, and different tools exist for different programming languages.
Check the documentation of your language of choice how to best to "pin" the versions of used packages.

Ideally, you make your repository "Binder-ready", which means that you define all the software your workflow needs in [common file formats for specifying dependencies and projects](https://mybinder.readthedocs.io/en/latest/howto/languages.html) (i.e., the dependency/environment configurations mentioned above) so that you and others can open your repository on [MyBinder.org](https://mybinder.org/).
Note that there are resource limitations to this free instance of [BinderHub](https://mybinder.readthedocs.io/en/latest/).
Alternatively, you may create an [Executable Research Compendium](https://doi.org/10.1045/january2017-nuest) using the [o2r online demo for publishing executable research](https://o2r.info/results/).

Feel free to inquire in the [CODECHECK discussion forum](https://github.com/orgs/codecheckers/discussions) how you can best handle your specific case of sensitive or big data.

A great way to learn what a good way to meaningfully package your research for others to inspect, understand, and reproduce is to participate in a [ReproHack](https://reprohack.github.io/reprohack-hq/) and take on the reader/codechecker perspective.

### 5. Submission to CODECHECK

When your workflow is ready to be codechecked, open an issue on the [CODECHECK register](https://github.com/codecheckers/register/issues/new/choose) or reach out the the [team](/partners).

### 6. During submission/preprint stage

After the publication of the CODECHECK certificate, add a reference to the certificate in your paper, e.g., in a section describing your workflow or in the acknowledgements:

> _A CODECHECK certificate is available confirming that [all of the, a (significant) part of the, the] computations underlying this article could be independently executed:_ `DOI of the certificate here`.

------

## Using AI coding assistants

AI coding assistants are a great help to turn your analysis into a readily reproducible workflow, e.g., to write the README, declare and pin dependencies, replace hard-coded paths, or script manual steps.
As Lorena A. Barba argues in [_Reproducibility in the Age of Agentic AI_](https://arxiv.org/abs/2609.11728v1), reproducible research practices are context engineering for AI coding agents: agents lower the cost of maintaining tests, instructions, and repository structure, while researchers remain responsible for verifying these artifacts.

Some guidelines for working with an assistant on your submission:

- **Write tests first, then refactor.**
  Let the assistant first write tests that capture the current results, e.g., the key numbers and figures of your paper, and only then let it refactor the code: if the tests still pass afterwards, the refactoring did not change your results.
- **Give it the right context.**
  Point the assistant to this website as examples, documentation, and guidance, e.g., the [good practices and common pitfalls](#learning-from-examples) below, the [CODECHECK configuration file specification]({{ 'spec/config/latest' | absolute_url }}), and the [example certificates](/guide/community-workflow-overview#examples).
- **Only accept changes you fully understand into your codebase.**
  You remain responsible for your code and your results, and you should be able to answer the codechecker's questions about every part of the workflow.
- **Check the result yourself.**
  Before you submit, run the workflow from scratch in a fresh environment, just as a codechecker would.
{:.full-width}

## Learning from examples

Codecheckers document in their certificates what made a check easy and where they struggled.
The following practices and pitfalls are taken from the [selected examples](/guide/community-workflow-overview#examples) on the workflow overview page.

### Good practices

- **A README that lists inputs, scripts, and outputs, the order to run them, and the expected compute time.**
  A README that states for each script which data it uses, whether it needs internet access, and which files it creates made checks "very straightforward".
  Stating how long each step takes, and on what kind of hardware, lets the codechecker plan the check, run long steps in the background, or ask for a subset early.
  See [2020-025](https://doi.org/10.5281/zenodo.4279275), [2020-017](https://doi.org/10.5281/zenodo.4003848).
- **Outputs that are easy to compare.**
  Saving each figure into a separate, transparently named file, setting a seed for random steps, and capturing the console output in a text file allowed a line-by-line comparison of the results.
  See [2020-017](https://doi.org/10.5281/zenodo.4003848).
- **A ready-to-run environment.**
  A MyBinder link "made the work trivial to reproduce" in a few minutes, and a `docker-compose` file let a single command build and start a web application.
  See [2020-024](https://doi.org/10.5281/zenodo.4964880), [2023-008](https://doi.org/10.17605/OSF.IO/AQGXR).
- **A subset of the data or intermediate results for long computations.**
  A small preprocessed subset of a dataset of over 100 GB allowed verifying the code; published intermediate results allowed checking all later steps although one step took 16 hours; provided result files allowed recreating all figures without days of model training.
  See [2024-013](https://doi.org/10.17605/OSF.IO/TXGZV), [2024-012](https://doi.org/10.17605/OSF.IO/W42AD), [2020-001](https://doi.org/10.5281/zenodo.3674056).
- **Documented manual steps.**
  Steps that cannot be scripted, such as work in a graphical GIS, should be described so that someone else can repeat them, e.g., as a numbered list in the README file.
  A screen recording can be an easier alternative to writing everything down: a video of the steps in QGIS allowed the codechecker to recreate the maps.
  See [2022-001](https://doi.org/10.5281/zenodo.6040066).
- **Sharing sensitive data responsibly.**
  The authors obtained approval from their ethics committee to publish an anonymised dataset on Zenodo.
  See [2023-008](https://doi.org/10.17605/OSF.IO/AQGXR).
{:.full-width}

### Common pitfalls

- **Undeclared dependencies.**
  Codecheckers had to work out which packages, and sometimes which system libraries, to install, or created the `requirements.txt` file themselves.
  List all dependencies in a file that tools can read, such as `requirements.txt`, `environment.yml`, or an R `DESCRIPTION` file.
  See [2020-001](https://doi.org/10.5281/zenodo.3674056), [2022-001](https://doi.org/10.5281/zenodo.6040066), [2024-012](https://doi.org/10.17605/OSF.IO/W42AD).
- **Unpinned versions.**
  A check close to the date of the analysis may work with whatever versions are current, but codecheckers recommend "additional layers of pinning versions", such as `renv` or a Dockerfile, and documenting the exact software and library versions and the computing environment.
  See [2020-017](https://doi.org/10.5281/zenodo.4003848), [2024-008](https://doi.org/10.17605/OSF.IO/3NBJW).
- **Hard-coded paths and missing directories.**
  Several checks needed manual changes to file paths before the code would run, for example because the code assumed Windows-style path separators, and output directories had to be created by hand.
  Use relative paths and let the code create the directories it writes to.
  See [2022-001](https://doi.org/10.5281/zenodo.6040066), [2024-008](https://doi.org/10.17605/OSF.IO/3NBJW), [2024-009](https://doi.org/10.17605/OSF.IO/CSB7R), [2024-013](https://doi.org/10.17605/OSF.IO/TXGZV).
- **No mapping from files to figures and tables.**
  The documentation explained all files but not which parts of which files were used for which table, and aggregation steps were done by hand in spreadsheets.
  Document which data and scripts produce each figure and table, and script the aggregation steps.
  See [2023-001](https://doi.org/10.17605/OSF.IO/C7VX3).
- **Undocumented or manual preprocessing.**
  A modified library used for preprocessing was neither shared nor described, and data integration done manually in QGIS meant that only part of a workflow could be checked.
  See [2024-013](https://doi.org/10.17605/OSF.IO/TXGZV), [2024-009](https://doi.org/10.17605/OSF.IO/CSB7R).
- **Missing practical details.**
  A README did not include the default login credentials of a web application, another was not updated after the materials changed, and one step needed about 24 GB of memory and crashed repeatedly on a machine with 16 GB.
  Document the expected run time and hardware requirements, such as memory or a GPU.
  See [2023-008](https://doi.org/10.17605/OSF.IO/AQGXR), [2024-012](https://doi.org/10.17605/OSF.IO/W42AD), [2024-008](https://doi.org/10.17605/OSF.IO/3NBJW).
{:.full-width}

### More examples

See the [CODECHECK register](/register) for a full list of codechecks, including direct links to the certificates.
Take a look at existing checks for your discipline or community to get an impression on how CODECHECKs work.
Selected examples are on the [workflow overview page](/guide/community-workflow-overview).

_Is your scientific discipline missing?_ Time to **[get involved!](/get-involved)**.
