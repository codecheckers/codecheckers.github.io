---
layout: page
title: CODECHECK community workflow guide for authors
---

See also the [CODECHECK community workflow overview](/guide/community-workflow-overview) and [discuss your issues](https://github.com/orgs/codecheckers/discussions).

## Author tasks

### tl;dr

**Have a `README`: everything else is details.** <span style="color: grey;">*</span>

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
A typical measure for a good level of documentation is to provide at least so much information as the author would themselves need after a longer period of time, e.g., one year, to run the analysis again.
Any researcher, even if not familiar with the software stack, should be able to run the workflow and find out if the code works.
Structured information about the computing environment, such as a _colophon_ or _reproducibility receipt_ are very helpful, see the [CODECHECK bundle guide](/guide/bundle).

Common sense shall be applied to decide about the suitable amount of data and to handle big datasets, sensitive datasets with privacy concerns, and long execution times.
For example, data may be deposited depending on community practices in remote repositories, synthetic data may be used, subsets or preprocessed data may be included, or protected access to information may be provided (e.g. cloud-based data enclaves).

### Requirements

The minimal set of files, besides all required data and code, to implement a CODECHECK process are the following ones (`.` is the project root directory, which could be for example, `/home/username/research-project/2020/great-paper`).
Ideally, the author supplies first versions of these three files, though they might also be jointly created in collaboration with the codechecker.
In case of the README, a codechecker's feedback can improve the README file's content.
In case of the metadata,  parts of the metadata will be provided by the codechecker or the CODECHECK editor.

1. **`./README` file** with instructions how to execute the workflow (must be plain text, may have suitable extension, e.g., `.txt`, `.md`, `.markdown`)
1. **`./codecheck.yml` file** with basic metadata and a list of output files created by the workflow, the so called manifest; these files must be created by the workflow and are the basis for validating a successful CODECHECK; see the [latest CODECHECK configuration file specification]({{ 'spec/config/latest' | absolute_url }}) for the required and optional contents and start with the [_minimal example for authors_]({{ 'spec/config/1.0/#tldr-for-authors' | absolute_url }})
1. **`./LICENSE` file** with information about licenses for all submitted material, e.g. code license for scripts and data licenses for used datasets; see [The Turing Way](https://book.the-turing-way.org/reproducible-research/licensing.html) on licensing for guidance

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

Feel free to inquire in the [CODECHECK discussion forum](https://github.com/orgs/codecheckers/discussions) how you can best handle your specific case of sensitive or big data.

A great way to learn what a good way to meaningfully package your research for others to inspect, understand, and reproduce is to participate in a [ReproHack](https://reprohack.github.io/reprohack-hq/) and take on the reader/codechecker perspective.

### Submission

When your workflow is ready to be CODECHECKed, open an issue on the [CODECHECK register](https://github.com/codecheckers/register/issues/new/choose).

### During submission/preprint stage

After the publication of the CODECHECK certificate, add a reference to the certificate in your paper, e.g., in a section describing your workflow or in the acknowledgements:

> _A CODECHECK certificate is available confirming that [all of the, a (significant) part of the, the] computations underlying this article could be independently executed:_ `DOI of the certificate here`.

------

## Examples

See the [CODECHECK register](/register) for a full list of codechecks, including direct links to the certificates.
Take a look at existing checks for your discipline or community to get an impression on how CODECHECKs work.

_Is your scientific dispipline missing?_ Time to **[get involved!](/get-involved)**.
