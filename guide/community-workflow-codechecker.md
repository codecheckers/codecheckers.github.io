---
layout: page
title: CODECHECK community workflow for codecheckers
---

See also the [CODECHECK community workflow overview](/guide/community-workflow-overview) and [discuss your issues](https://github.com/orgs/codecheckers/discussions).
This guide has two main parts - a _short community workflow list of steps_, and an _extended version_ which may be used as a reference.
_Are you checking a paper with CHECK-NL?_ See their [workflow for in-person events}(/nl/workflow/).

## Codechecker tasks - short version

Before you start, an author created a pre-producible workflow: all data and code, plus a README file detailing the content, a manifest file detailing the output [in the CODECHECK configuration file specification](https://codecheck.org.uk/spec/config/1.0/), and a license file; this is ideally bundled in a single repository or archive file and accompanied by a (pre-published) paper.
The author or editor then created a new issue in the [CODECHECK register](https://github.com/codecheckers/register/issues/) to start a new community CODECHECK.
Now it's your turn.

1. Accept codechecking invitation
1. Create a project in an online repository, either by forking existing code repository or creating new project
1. [In case you forked] Create a directory `codecheck` where your files will go
1. Create a new document to write the CODECHECK certificate and _start documenting the ongoing codecheck now with everything relevant that you do_;
   the exact form of  a codechecking procedure and form of documentation vary greatly, but there are some tools, such as [an R package](https://github.com/codecheckers/codecheck) to automate some steps, including [an Rmd template](https://github.com/codecheckers/codecheck/blob/master/inst/extdata/templates/codecheck/) and word processor templates in [.odt](/guide/templates/CODECHECK_report_template.odt) and [.docx](/guide/templates/CODECHECK_report_template.docx) formats; all of that is optional, as long as the final certificate contains the mandatory information
1. Open the manuscript and follow the instructions to reproduce the workflow
1. During the CODECHECK, contact the authors in case of problems; keep in mind the general [CODECHECK principles](/project/#the-codecheck-principles), especially "the codechecker records but does not fix" – unless it is trivial change; the authors can provide updated versions of code and documentation; however, the entire procedure should not be much more time-intensive than a normal peer review of a paper and not involve more than a few code revisions; the codechecker can always stop the process after a reasonable effort and document on the issue as not successfully reproduced.
1. Summarize the process and outcomes in your certificate and upload it as PDF to your project; add edited files and intemediary as well as output files as you see fit; the certifiate must at least contain the information on who checked what and how; the ambition should be to document for future self and other researchers; have a look at the available certificates.
1. Notify the editor about the completion

------

## Codechecker tasks - extended version

### Prerequisites

The codechecker in general is not there to fix things, but to document how far they got.
The result is either is a completed CODECHECK, or a documentation why the check was found impossible to complete (see _[principle 1](/)_).
Codecheckers should give feedback to the author and definetely allow workflows to be fixed.
It is very hard to put a precise number on the amount of work you should put into a CODECHECK.
You're not expected to spend more time on a CODECHECK than you would on peer-reviewing a manuscript.
You should take advantage of the fact that you can _talk to the author_ and feel free to reach out early and often, when you think that issues can be resolved quickly.
Depending on your familiarity with the used programming language and specific tools at hand, a very rough experience value could be 30 minutes of reading documentation, downloading and installing software, and another 30 minutes to write up the CODECHECK certificate.
The time in between for running the actual workflow will vary greatly, from minutes to hours, and hopefully can be run in the background.
In case the computations run longer than your regular working day, consider asking the author to prepare a subset of the workflow.

However, a codechecker may, for example out of personal interest in the research at hand, invest additional efforts.
In any case, the overall goal is to _leave the workflow repository in the same or better condition_.

Some further tips:

- Every CODECHECK is unique, just as the associated research article. If this guide feels like it doesn't work for your case, you are likely still on the right track.
- Reach out to fellow codecheckers in the [public discussion forum](https://github.com/orgs/codecheckers/discussions) if you face any problems.
- A familiarity with `make` is helpful to provide an easy entrypoint and build up useful code snippets for your CODECHECKs, see <https://book.the-turing-way.org/reproducible-research/make> and <https://swcarpentry.github.io/make-novice/reference>

### CODECHECK steps

1. Comment on the issue in the CODECHECK register repository to notify author and editor that you are accepting, and actually starting, the CODECHECK.
1. Depending on where the code and data are, create a new project or fork the author's code repository, e.g., to the codecheckers organisation on [GitHub.com](https://github.com/codecheckers/) or [GitLab.com](https://gitlab.com/cdchck); supported repositories for a citable certificate: [Zenodo](https://zenodo.org/), [OSF](https://osf.io/), [ResearchEquals](https://www.researchequals.com/).
   If there is no code repository, it is strongly recommended to create a new  code repository for the source code of your check which is the basis for publishing the certificate in a repository; usethe naming scheme `Lastname-YYYY` using the family name of the corresponding author.
   Please take care to follow the terms and conditions of the workspace's licenses; stop your CODECHECK if the licensing is unclear and contact the author to fix the documentation.
1. [In case your forked] Create a directory `codecheck` to not interfere with original files.
   This is the _check directory_.
   If you start a project from scratch, the _project root_ is likely to be your _check directory_.
   You can use `.codecheck` if `codecheck` exists in submission for some reason.
   _All files created by you and strictly related to the check should go into this directory._
   The exception are files that could be useful for the author and which you suggest the author may transfer into their own repository after the check (see "leave in a better condition" above).
    1. [Optional] **Start a `Makefile` or a script** to re-run the workflow based on provided documentation, i.e., recreate all files listed in the manifest by runnign the command `make codecheck`.
      This Makefile target or script should run the whole or most suitable subset of the workflow and create the certificate.
      This may also be realised by putting in code chunks in a computational notebook, either independent of or as the basis for the CODECHECK certificate, e.g., R Markdown, Quarto, or Jupyter.
    1. [Optional] **More contents** of the check directory.
        - Document the used computing environment, see [CODECHECK bundle guide](/guide/bundle).
        - Create a notebook as the basis for the certificate (see below), e.g. `codecheck.Rmd`.
        - Make the repository [Binder-ready](https://mybinder.readthedocs.io/); put all Binder-related files into `.binder/` directory to separate them from the author's content.
    1. **Write the CODECHECK certificate** and save it as a PDF file named **`codecheck.pdf`** in the check directory.
      The certificate should cover at least _WHO_ (you, but maybe with support from others?) checked _WHAT_, and _HOW_.
      There are not strict requirements on the form, but you're welcome to use our word processor templates in [.odt](/guide/templates/CODECHECK_report_template.odt) and [.docx](/guide/templates/CODECHECK_report_template.docx) formats or the [.Rmd template from our R package](https://github.com/codecheckers/codecheck/blob/master/inst/extdata/templates/codecheck/).
      Imagine the certificate as a reminder for future you so you will be to re-check the workflow in two years time - what help would you need to do that?
      There is no need to document every detailed step if that is not helpful for you.
      Include a _full citation of the certificate_, because your CODECHECK is a valuable contribution to science (see below for reserving the DOI).
      Take a look at the [example CODECHECKs](/guide/community-workflow-overview#examples) for existing certificates to serve as templates.
    1. [Optional] **Add more certificate sections** depending on interest, time, and skills:
        - Do the generated outputs match the ones in the original manuscript? Are the differences relevant or not?
        - Are there any parts of the workflow where the author could improve the code?
        - How long did it take you to conduct the CHECK, and where did you struggle?
        - Are used pieces of software and data properly CITED and publicly DEPOSITED und suitable LICENSES?
        - Are open formats (text-based etc.) used for input and output data?
        - Is the data and [software](https://content.iospress.com/articles/data-science/ds190026) FAIR?
    1. Add **mandatory codechecker-contributed information** to the **`codecheck.yml`** file, see [spec](/spec/config/latest)
    1. [If applicable] Wait for the article DOI.
    1. [Recommended] Submit the unpublished draft of the Zenodo record for the certificate (see next step) [for review](https://help.zenodo.org/docs/share/submit-for-review/) to the [CODECHECK community on Zenodo](https://zenodo.org/communities/codecheck/); this allows a [CODECHECK editor](/guide/community-workflow-editor) to give feedback before you continue with the deposition and avoids direct updates of documents that just received a DOI.
1. **Deposit the CODECHECK certificate on _Zenodo_** using your own Zenodo account and following the [community curation policy](https://zenodo.org/communities/codecheck/curation-policy) (which is replicated here for convenience):
    - _Reserve a DOI_
        - Add the DOI to the `codecheck.yml` file.
        - Add the DOI to the `codecheck.pdf` CODECHECK certificate, which should include a full citation of itself.
    - _Files_
        - `codecheck.pdf` (mandatory)
        - Optional: You can add any material to this record that you see fit, especially things that helped you with your reproduction, i.e., the [CODECHECK bundle](/guide/bundle).
    - _Communities_: Search for "codecheck" to add the record to the [CODECHECK community on Zenodo](https://zenodo.org/communities/codecheck).
    - _Authors_: Add all codecheckers as authors.
    - _Title_: `"CODECHECK Certificate YYYY-NNN"` (certificate number issued via the register ticket above, optionally you may add the submission's title).
    - _License_: Use `Creative Commons Attribution 4.0 International` if you only upload the CODECHECK certificate, otherwise use `Other (Open)` or `Other (Attribution)` and document the licensing of the different parts in an _Additional notes_ field.
    - _Description_: Copy the summary of the check here.
    - _Contributors_: Add the original authors as contributors (see Zendo Metadata form section "Contributors (optional)") with a suitable role (e.g., "Researcher").
    - Add a _Relationship_ in metadata between the certificate and the original paper/submission.
        - Relation: `Reviews` (= the certificate reviews the article)
        - Identifier & Scheme: `the identifier` (ideally the article's DOI)
        - Resource type: `Publication` (with clarification as fitting, e.g., `Publication / Journal article`)
    - Add the certificate identifier as an _Alternative identifier_, e.g., <https://zenodo.org/records/14576035>
        - With schema URL using `http://cdchck.science/register/certs/<CERT ID>`
        - With schema Other using `cdchck.science/register/certs/<CERT ID>`
    - _Optionally_, add extra metadata as you see fit (fields such as _Version_, _Language_, _Keywords_).
        - Connect the Zenodo record to the GitHub repository with a _Relate/alternate identifier_.
        - Connect the Zenodo record to the article/preprint with a _Related/alternate identifier_.
1. If possible, coordinate with the original author(s) to add a [CODE WORKS badge](https://github.com/codecheckers/website/tree/master/badges) <img src="/img/codeworks-badge.svg" alt="CODECHECK badge" height="16" style="margin-top: -4px;" /> to their repository, e.g., by sending a pull request on GitHub, a merge request on GitLab, or sending them an HTML snippet for their personal website.
    The badge should link directly to the Zenodo record _via the DOI_.
    The following snippet should work in Markdown:

    ```md
    [![CODECHECK](https://codecheck.org.uk/img/codeworks-badge.svg)](https://doi.org/<DOI HERE>)
    ```
