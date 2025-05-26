---
layout: nl
title: Advancing reproducibility and Open Science one workshop at a time - community-building in the Netherlands
permalink: /nl/advancing-reproducibility-and-open-science-one-workshop-at-a-time
---

# Advancing reproducibility and Open Science one workshop at a time - community-building in the Netherlands

This blog post is the final one in our series of posts about the "CODECHECKing goes NL" project, which has been running since May 2024.
We have been working hard to promote reproducibility and Open Science in the Netherlands through a series of workshops, and we are excited to share our experiences and future plans with you.

Find the full series of posts on our [project page](/nl/).

--------

**Why is this important?**

A paper's code gets rarely checked - everyone in academia knows about peer reviewing articles, but few people engage in reproducibility checks of the materials behind the paper.
Reproducibility checks are less about vetting research (e.g., catching fraud, finding errors), but more about ensuring the reusability of research.
It is an extension of the thought that if we want to stand on the shoulder of giants, those giants better be standing on solid ground.
And solid ground for computational workflows means good documentation that is understandable outside of the inner circle of the authors of a research article.

A reproducibility check is about the question whether one can reproduce the reported results in the paper (i.e., the statistics, tables, figures, maps, or graphs) from the provided data, code, or other materials.
The CHECK-NL project focuses on the computational reproducibility of published research and tries to answer the question of "Can someone else recreate the output on their hardware using the materials and documentation provided by the authors?".
We call this type of reproduction a CODECHECK.

**Who did what?**

A bunch of enthusiasts for Open Science and Reproducible Research from University of Twente, TU Delft, and UMCG Groningen applied for funding from NWO via their Open Science funding scheme to organize four in-person events at their respective institutions and beyond.
Through these events, they intended to jump start a Dutch reproducibility checking community.
Included in the project proposal was also work on the CODECHECK website and registry to better present codechecks and the codecheckers behind them.

Along the way, the group of enthusiasts grew and instead of the planned four events, there were a total of six in-person events: one more as a conference workshop (AGILE in Dresden) and another one (TU Eindhoven) organized by attendees of the first event (exactly what this project was aiming for!).
At the events, we also connected with representatives of a data repository, diamond open access publishers, and digital competence centers who are considering their own version of computational reproducibility checks.

The four events in Delft, Enschede, Rotterdam and Leiden brought in a total of 40 researchers, many of whom opened up their own work to be assessed by others, together who codechecked 15 papers.
The additional events in Eindhoven and Dresden introduced an international crowd to the CODECHECK principles.
Each event had a different topic, focusing on different parts of the research landscape, which resulted in different challenges and learning opportunities at each event.
While the groups in Delft and Enschede mainly faced problems with computing environments, documentation, and high computational loads (too big for laptops or the workshop time), the group in Rotterdam raised the issue that reproducibility checks can be pretty dry at their core and may be almost trivial if only heavily summarized data can be shared.
At the final event in Leiden, we brought linguists and digital humanists together.
One of the questions raised was: how do we start a reproducibility crisis in the humanities? (Because maybe we need one to raise awareness about the important topic in this field?)

**What are the results? What did we learn?**

One clear lesson learned was about how different crowds from different disciplines are - although the advertisement for the events and their setup and schedule were quite similar, they played out quite differently.
Another important lesson is that you need a group of enthusiastic participants to drive such events - fortunately, we always had those!.

There were people with a wide range of coding skills at the events.
The wrap-up sessions always gave us the impression that all of them took something home and learned something.
Working with someone else code and reproducing another researcher's workflow requires craftsmanship and a hands-on and can-do attitude that is rarely taught in typical university classes.
The workshops and the participating experienced mentors, however, could provide such a setting.

The four main in-person events required attendees to invest an entire workday into this topic.
In retrospect, this might have prevented interested people from joining.
For raising awareness, shorter, more targeted events might be a suitable alternative.

Getting the certificates was a nice by-product but was certainly not the only outcome.
Authors whose project didn't pass the reproducibility check were given feedback so that they can make their work still reproducible.
Participants got the chance to learn from other people's workflows and software stacks.

Another surprise was how difficult it still is to convince colleagues to submit their work to a reproducibility check.
The social layer of this otherwise rather technical question is the biggest challenge for the project team and people working with reproducibility checks.
The technological challenges are less exciting than the positive experiences and potential benefits, see e.g., [this blog post](https://blog.esciencecenter.nl/my-experience-of-getting-codechecked-39cf612cfd35) about an author's experience how it is to be “codechecked”.

From discussions we distilled the notion that the best time to get a reproducibility check is at the preprint stage or during peer review - then people are still motivated to fix issues before the publication.
Also, a certificate is a positive signal towards peer reviewers (at least that's what we hope).
If published work gets checked, authors need to be very motivated to improve documentation or fix bugs, certainly if those are hidden in some deeper level of the code.

**Concrete outcomes:**

* Successful community building in four different disciplines, with more than 60 participants overall, including many early career researchers; positive feedback
* A published [workshop recipe](TODO TODO TODO) that facilitates others to organize similar workshops through a step-by-step best practice documentation.
* 15 track records of successful codechecks in the form of [published CODECHECK certificates](https://codecheck.org.uk/register/venues/communities/codecheck_nl/).
* Codecheck-as-a-service now at 4TU, see <https://www.tudelft.nl/library/support/library-voor-onderzoekers/onderzoek-starten/dcc-nieuwe-website/services/reproducibility-check> and <https://codecheck.org.uk/register/venues/institutions/tu_delft_dcc/>, which likely will lead to additional codechecks in the future
* [Updated and improved CODECHECK Registry](https://github.com/codecheckers/register/pulls?q=sort%3Aupdated-desc+is%3Apr+is%3Aclosed+label%3Acheck-nl), which is easier to integrate in other infrastructures and now features pages for checks, for different venues such as communities or journals, and for individual codecheckers, see <https://codecheck.org.uk/register/>. These extensions help to make checks, their metadata and findings, more accessible and to showcase contributions to open reproducible research.
* We gathered a CODECHECK community from several universities and different domains, see <https://codecheck.org.uk/register/venues/communities/codecheck_nl/>.

**What are the next steps?**

The CODECHECK or reproducibility check community in the Netherlands is growing.
We met with the wider community to evaluate the project and make new plans.
4TU Research Data is planning to work on codechecks as part of their service as data repository and is working closely with the four technical universities.

The community in the Netherlands will continue to meet and work on topics like reproducibility checks as a service or as part of teaching curricula, and academic culture around code checking.
Internationally, we have reached out to colleagues in Bristol and Cologne.
