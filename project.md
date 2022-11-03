---
layout: page
title: Project
permalink: /project/
style: principles
---

## About

CODECHECK provides an approach for independent execution of computations underlying research articles.
During the publication process, one reviewer - the codechecker - certifies that they was able to execute relevant parts of a computational workflow.
This certificate becomes part of the public record.
The fact that such a check is conducted and the communication between codecheckers and authors have repeatedly improved the availability, quality, and documentation and thereby the reusability of research data and research software that too often does not receive enough attention and credit, or may even be lost.

## The CODECHECK principles

1. <span class="principle">Codecheckers record but don’t investigate or fix.</span>
   <details>
   <summary>More about this principle...</summary>
   The codechecker follows the author’s instructions to run the code. If instructions are unclear, or if code does not run, the codechecker tells the author. We believe that the job of the codechecker is not to fix these problems but simply to report them to the author and await a fix. The level of documentation required for third parties to reproduce a workflow is hard to get right, and too often this uncertainty leads researchers to give up and not document it at all. The conversation with a codechecker fixes this problem.
   <em>Codecheckers take the pictures at a crime scene, they do not hunt the criminal.</em>
   </details>
1. <span class="principle">Communication between humans is key.</span>
   <details>
   <summary>More about this principle...</summary>
   Some code may work without any interaction but often there are hidden dependencies that need adjusting for a particular system. Allowing the codechecker to communicate directly and openly with the author make this process as constructive as possible; routing this conversation (possibly anonymously) through a publisher would introduce delays and inhibit community building.
   </details>
1. <span class="principle">Credit is given to codecheckers.</span>
   <details>
   <summary>More about this principle...</summary>
   The value of performing a CODECHECK is comparable to that of a peer review, and it may require a similar amount of time. Therefore, the codechecker’s activity should be recorded, ideally in the published paper. The public record can be realised by publishing the certificate in a citable form (i.e., with a DOI), by listing codecheckers on the journal’s website or, ideally, by publishing the checks alongside peer review activities in public databases.
   <em>Codechecks are an excellen opportunity to involve early career researchers (ECRs) or research software engineers (RSEs) in peer review.</em>
   </details>
1. <span class="principle">Workflows must be auditable.</span>
   <details>
   <summary>More about this principle...</summary>
   The codechecker should have sufficient material to validate the workflow outputs submitted by the authors. <a href="https://doi.org/10.1038/d41586-018-05256-0" title="Stark PB: Before reproducibility must come preproducibility. Nature. 2018; 557(7707): 613.">Stark</a> calls this "preproducibility" and the <a href="https://icerm.brown.edu/topical_workshops/tw12-5-rcem/icerm_report.pdf" title="Stodden V, Bailey DH, Borwein J, et al.: Setting the Default to Reproducible: Reproducibility in Computational and Experimental Mathematics. Technical report, The Institute for Computational and Experimental Research in Mathematics, 2013.">ICERM report</a> defines the level "Auditable Research" similarly. Communities can establish their own good practices or adapt generic concepts and practical tools, such as publishing all building blocks of science in a research compendium (cf. <a href="https://research-compendium.science/">https://research-compendium.science/</a>) or <a href="https://doi.org/10.22541/au.153922477.77361922" title="Barba LA: Praxis of Reproducible Computational Science. 2018.">repro-pack</a>. A completed check means that code could be executed at least once using the provided instructions, and, therefore, all code and data was given and could be investigated more deeply or extended in the future. Ideally, this is a “one click” step, but achieving this requires particular skills and a sufficient level of documentation for third parties. Furthermore, automation may lead to people gaming the system or reliance on technology, which can often hide important details. All such aspects can reduce the understandability of the material, so we estimate our approach to codechecking, done without automation and with open human communication, to be a simple way to ensure long-term transparency and usefulness. We acknowledge that <a href="https://twitter.com/khinsen/status/1242842759733665799" title="Konrad Hinsen (@khinsen) on Twitter: 'My crystal ball tells me that in the long run, bit-for-bit reproducibility will become the norm. Not because people realize it matters, but because it can be automatized. ´Good-enough´ reproducibility requires scientific judgment, so it's more expensive to ensure/check.'">others have argued</a> in favour of bitwise reproducibility because, in the long run, it can be automated, but until then we need CODECHECK’s approach.
   </details>
1. <span class="principle">Open by default and transitional by disposition.</span>
   <details>
   <summary>More about this principle...</summary>
   Unless there are strong reasons to the contrary (e.g., sensitive data on human subjects), all code and data, both from author and codechecker, will be made freely available when the certificate is published. Openness is not required for the paper itself, to accommodate journals in their transition to Open Access models. The code and data publication should follow community good practices. Ultimately we may find that CODECHECK activities are subsumed within peer review.
   </details>


These basic principles ensure they are feasible to add in a scholarly communication process but still have a huge positive impact on the transparency and usefulness of the published material.
They strike a **balance** between the ideals of auditable high-quality research software and the reality of publication pressure and only slowly changing academic evaluation practices.
Of course, numerous requirements on openness/transparency (e.g. depositing the CODECHECK report publicly with a DOI), about software quality (tests, releases, documentation), on copyright/licensing, and regarding best practices for computer-based analyses (e.g. workflow management, data/software citation) are thinkable, but intentionally remain to be defined by implementations of the principles in each community of practice.
While the CODECHECK initiators strongly support of Open Science, a CODECHECK does not exclude research not falling into your definition of Open Science.

These principles can be **implemented** in different ways.
See the [process page](/process) for details about the stakeholders and dimensions of variations in CODECHECKs within a scholarly peer review.
The [CODECHECK community workflow](/guide/community-workflow) describes a concrete realisation, including practical requirements and steps.

Check out [**the CODECHECK paper**](https://doi.org/10.12688/f1000research.51738.2) and the [FAQ](/faq) page for more information.

## Next steps

In the future, we hope to update these principles and to work together with researchers, educators, editors, and publishers to raise the bar towards higher degrees of reproducibility and openness across all domains and communities of research.
Our main objective is to increase the number of communities and publication platforms that include codechecking in their review processes: preprint servers, journals, or conferences, for example.
We especially target the future of scholarly communication: independent scholar-led diamond Open Access journals.
To make codechecking feasible for these journals and others, we are looking for funding for _CODECHECK editors_, for developing _training material and mentoring programmes_ together with [friendly projects from the Open Science community](/partners/#projects), and for building and providing _open and free supporting infrastructure_ for conducting checks.
With these steps we will scale CODECHECK beyond the [existing list of awesome volunteer codecheckers](https://github.com/codecheckers/codecheckers/blob/master/codecheckers.csv) and [current partner journals and conferences](/partners).

## Project history

The CODECHECK project evolved quite a lot since it's inception, though the core idea stayed the same: _to enhance the availability, discovery, and reproducibility of published computational research through independent runs of computational workflows demonstrated with a certificate of reproducible computation_.
What did change was the ambition to build a technological infrastructure to that would make all of this a piece of cake.

Based on a hand-coded demonstrator for checking computations (<https://sje30.github.io/codecheck>) and and experiences with building an API for executing research compendia (<https://o2r.info/api/>), the [original goals](/mozilla-project) involved a computational platform for codecheckers to work in the cloud so that snapshots of the virtual environments could be archived.
_That's still a great idea_ and the Open Science community provides the building blocks for that (e.g., [BinderHub](https://binderhub.readthedocs.io/en/latest/)).
But building and running it requires considerable resources, and in itself the availability of a tool does not lead to the cultural change needed for authors, editors, and reviewers to change their way of working.

[We](/partners/#team) realised that the human processes embedded in the way that research is published and reviewed need to change.
We lowered the bar on the technical level and also on the procedural side, but we upped the stakes considerably in our ambition: work with real journals and their community of authors, editors, and reviewers.
We distilled our approach into a set of [principles](#the-codecheck-principles), wrote [a paper](https://doi.org/10.12688/f1000research.51738.2), and built collaborations with publishers and conferences to demonstrate their feasibility.
We also broadened our scope and are open to collaborations from all scientific disciplines, though we remain strongest in the communities represented by the project team members: neuroscience, biomedical resarch, data science, geospatial sciences.
