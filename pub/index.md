---
layout: page
title: CODECHECK connections to Infrastructures for Open Publishing and Open Research Information (CHECK-PUB)
permalink: /pub/
---

*The Dutch university **TU Delft** funds the project CHECK-PUB from 2025 to 2026 to improve codechecking for independent journals based on Open Journal Systems (OJS).*

## Summary

The way that quantitative research is submitted, reviewed, and published today does not adequately handle the reliance on digital workflows using data and software.
These shortcomings of scholarly communication platforms and practices hamper the advancement of research because not all parts of research are shared openly and in a readily reusable and effectively findable way.
Code execution during peer review has the potential to be a first step to more groundbreaking innovations in scholarly communication.
The CODECHECK initiative has demonstrated how a seemingly low bar - one codechecker is able to successfully execute relevant parts of a computational workflow and reports their findings in a certificate - can drastically improve the level of sharing for data and code, and raise the recognition for diverse research outputs.
CODECHECK is seeking collaborations with independent publishing partners to establish code execution workflows.
The interests by small independent scholar-led journals often fail due to the scarce resources to manage a further role and task in the submission and review process.

Therefore, in the project CHECK-PUB, we develop an Open Journal Systems ([OJS](https://pkp.sfu.ca/software/ojs/)) plugin for CODECHECK.
The plugin is envisioned to handle the requirements of different variants of codechecking and integrate seamlessly with the submission and review workflows within OJS.
The plugin will also connect with the CODECHECK infrastructure for publication of certificates and metadata.

The CODECHECK OJS Plugin reduces editorial overheads, ensures codechecker recognition, simplifies metadata creation and certificate deposition for codecheckers, and adds procedural flexibility, e.g., by introducing an independent role of codechecker with different anonymity configuration than regular reviewers to facilitate practical code execution.
The CODECHECK OJS Plugin can also act as a bridge for checks conducted outside of OJS-based journals to ensure recognition in public researcher profiles.

## Main goals

### OJS Codecheck Plugin

We develop a prototype for a plugin for Open Journal Systems (OJS) that allows for codechecking in the submission and review process.
The role of CODECHECKER and the handling of the required documents and metadata to create and publish a CODECHECK certificate are integrated seamlessly into OJS and can be managed without extra effort by the regular handling editor.

Once a codechecker is assigned to a submission, they are guided through the workflow and provided with prefilled metadata templates, which they can deposit in the respective code and data repositories, not replicating material or breaking links to the original sources.
After completion of the check, the codechecker merely fills in the identifier (DOI) of the published certificate and the CODECHECK Plugin processes the metadata from a single source.

All features and benefits of the CODECHECK OJS plugin are detailed in the development issues in the project linked below.
The most important building blocks to aide the adoption of code execution reviews for a journal are the fully integrated metadata handling and display, the publishing of the CODECHECK Certificate, and the public deposition of codechecker activity in ORCID profiles, see mock-ups below.

🚧 **Follow the plugin development at <https://github.com/codecheckers/ojs-codecheck/>** 🚧

![Mock-up of review activity in a codechecker's ORCID profile page.](/img/check-pub_mockup-orcid.png){: width="50%"}

_Mock-up of review activity in a codechecker's ORCID profile page._

![Mock-up of CODECHECK metadata linked in the right-hand sidebar of an article landing page.](/img/check-pub_mockup-landing-page.png){: width="50%"}

_Mock-up of CODECHECK metadata linked in the right-hand sidebar of an article landing page._

### Journal collaborations

We seek to collaborate with independent journals that are interested in codechecking and the OJS plugin.
As a first starting point, we look forward to connect with TU Delft's OJS hosting service _TU Delft Open_, see <https://journals.open.tudelft.nl/index/start-journal>.

## Outlook

Primarily, we hope to sustain the collaboration with the independent journals that take part in the project.
Through the role of codechecker, a community practice of giving feedback and ensuring related aspects, such as data and software FAIRness, could also be formalised, e.g., though checklists for the authors and the codechecker that are built into the submission and review workflows.

In the future, the OJS Plugin maybe be ported to Open Preprint Systems (OPS) and may be the basis for more groundbreaking and advanced features, such as reviewing computational notebooks, integrating interactive features into OJS, or making an article's code and data machine-readable and actionable.


## Contributors

Daniel Nüst (TU Dresden, PI) \| [Mastodon](https://mstdn.social/@nuest) \| [Home page](https://nordholmen.net/)

Frank Ostermann (University of Twente, advisor) \| [Mastodon](https://mstdn.social/@f_ostermann) \| [Home page](https://research.utwente.nl/en/persons/frank-ostermann)

Stephen Eglen (University of Cambridge, advisor) \| [Mastodon](https://fosstodon.org/@sje) \| [Home page](https://sje30.github.io)
