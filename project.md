---
layout: page
title: Project
permalink: /project/
---

## The Problem

Analysis of data and computational modelling is central to many areas of biomedical research particularly with the explosion of data now available. The underlying computer programs are complex and costly to design. However, these computational techniques are rarely checked during review of the corresponding papers, nor shared upon publication. Instead, the primary method for sharing data and computer programs today is for authors to state "data available upon reasonable request". Despite best intentions, these programs and data can quickly disappear from laboratories.
A systematic study examining 300 papers [published in 2016/17 in Journal of Computational Physics](https://dl.acm.org/citation.cfm?doid=3214239.3214242), a journal that promotes sharing of digital artefacts, found that only 5.6% made artefacts available.
Given that code and data are rich digital artefacts that can be shared relatively easily in most cases, and that funders and journals increasingly request/mandate sharing of resources, we should be sharing more.

## The Solution

We wish to build a computational platform, called **CODECHECK**, to enhance the availability, discovery and reproducibility of published computational research.
Researchers that provide code and data will have their code independently run to ensure their work can be reproduced.
The results from our independent run will then be shared freely post-publication.
Our independent runs will act as a _"certificate of reproducible computation"_ to document that core research outputs could be recreated outside of the authors's lab.
These time-stamped certificates will include key outputs, including figures and tables, and valuable information such as the environment used to evaluate the code.
Such certificates will help in the peer review process by showing reviewers that the code is available and works.
We will work with several journals to design the system so that it can be used a pilot service by those journals.
The level of reproducibility in CODECHECK will vary considerably.
At a minimum, we propose one key figure or table from a paper needs to be regenerated from the code, rather than the entire research article. 

The long-term vision is that our service will be used by journals in biomedicine (and beyond), with financial support from infrastructure grants and journals.
We hope our system will encourage researchers to share data before publication, as it can confirm that an analysis works outside their lab.
In the likely case that programs do not work upon first submission, our early feedback will help reduce the chance of incorrect code/data sharing during peer-review and post publication.
Our aim is to provide a procedure ensuring that the provided code runs, rather than a full assessment of the correctness of the code.
We will not guarantee that the code can be run forever, as this is simply infeasible; time-stamped certificates will stand as independent verification of the results around the time a paper was published.

## Goals

We plan to integrate CODECHECK with the popular open notebook infrastructure behind https://mybinder.org, an instance of a [BinderHub](https://binderhub.readthedocs.io/en/latest/).
Based on a hand-coded demonstrator for checking computations (https://sje30.github.io/codecheck) and an existing API for executing research compendia (https://o2r.info/api/), we will prototype a system that awards CODECHECK badges to specific executions of open notebooks on a Binder instance.
Researchers can create a snapshot of a workflow executed as a Binder after comparing the results with the ones recorded in their scientific article.
The snapshot comprises the used data, code (including configuration, parameters), and runtime environment.
It will be saved to a public research data repository (i.e. [Zenodo](https://zenodo.org/)), allowing long-term access and scrutiny of open research by reviewers and readers.
While the infrastructure behind BinderHub is generic, supporting many programming languages and domains, our examples will come from computational neuroscience. 
This is simply to ensure we have the ability to understand the scientific approaches in papers and support common workflows from the domain.
However, CODECHECK system should be widely applicable.

We aim to achieve the following outputs by the end of the project:

- Prototype for system to build, run, check, verify and award certificates to scholarly workflows
- Prototype certificates working with demonstration journals
- CODECHECK certificates awarded to case studies based on previously published work
- Project summary and architectural sketch for a productive open transparent system for creating and verifying CODECHECK certificates across publishers and repositories
- Documentation and software published as Open Material respectively Open Source with permissive licenses
- Collaboration with existing stakeholders and projects from the scholarly publishing and reproducible research communities

[Learn more about the team](/team) behind CODECHECK and follow the PIs for updates (see Twitter links below).
