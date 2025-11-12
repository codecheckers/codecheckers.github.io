---
layout: nl
title: CODECHECK community workflow for CHECK-NL
---

The following steps are required to complete a CODECHECK as part of a workshop organised by [CHECK-NL](/nl/).
See also the [CODECHECK community workflow overview](/guide/community-workflow-overview) for more details, partly because that approach focuses on online collaboration.

Before you start, note that every CODECHECK is unique, just as the associated research article.
Reach out to fellow codecheckers in the [public CODECHECK discussion forum](https://github.com/codecheckers/discussion/issues) if you face any problems, or use the [internal team discussion](https://github.com/orgs/codecheckers/teams/codecheckers) if you need to consult in private.
You are probably doing fine even if you digress from this documentation!

## Steps

1. **Authors** create a pre-producible workflow: all data and code, plus a readme file detailing the content, a manifest file detailing the [output CODECHECK configuration file](/spec/config/1.0/), and a license file; this is ideally bundled in a single repository or archive file and accompanied by a (pre-published) paper.
1. **Authors** send their request for a CODECHECK to project e-mail address <codechecknl@gmail.com>.
1. The **CHECK-NL project team** accepts the request for the workshop or advises to follow the normal community workflow (see above).
1. During the workshop, **codecheckers** download materials or clone the a repository and work on their computers.
1. The **codecheckers** create a new directory in their working environment where all new files go, and start documenting the ongoing codecheck; the exact form of codechecking procedure and form of documentation vary greatly, but there are some tools, such as an echeck) and [a Python project including a Jupyter Notebook template](https://github.com/codecheckers/codecheck-py) to automate some steps; all of that is optional, as long as the final report contains the mandatory information; the templates in [.odt](/guide/templates/CODECHECK_report_template.odt) and [.docx](/guide/templates/CODECHECK_report_template.docx) formats should get you going quickly if you prefer a plain word processor for writing the certificate.
1. Open the manuscript and follow the instructions to reproduce the workflow.
1. During codecheck, the **codecheckers** can ask the **authors** (if present at the workshop) in case of encountered problems, keeping in mind the [CODECHECK principles](/project#the-codecheck-principles) (especially "the codechecker records but does not fix" – unless it is a very trivial bug like pathnames).
1. The **codecheckers** summarize the process and outcome in a report - the CODECHECK certificate - and bundle it with all input and output files; this workshop codecheck bundle is then shared with the **CHECK-NL project team** via email or repository; the report should at least contain the information on who checked what and how; document for future self and other researchers; have a look at the available reports; most contain also optional information (compare [CODECHECK community workflow guide](/guide/community-workflow-overview)).
1. The **CHECK-NL project team** checks the bundle and report, and together with the workshop codecheckers, revise where necessary; once ready, either the **CHECK-NL project team** or the **codechecker** upload the file on Zenodo or OSF, and [optionally] adds a pull request to original repository for the CODECHECK badge.
1. The **CHECK-NL project team** project team adds the new codecheck to the registry.
