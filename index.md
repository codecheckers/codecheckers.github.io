---
layout: page
head_inline: |
   <script type="text/javascript" src="/assets/js/jquery.min.js"></script><!-- https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js -->
   <script type="text/javascript" src="/assets/js/mustache.min.js"></script><!-- https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.0.1/mustache.min.js -->
   <script type="text/javascript" src="/assets/js/jquery-dateformat.min.js"></script><!-- https://raw.githubusercontent.com/phstc/jquery-dateFormat/master/dist/jquery-dateformat.min.js -->
   <script type="text/javascript" src="/assets/codecheck.js"></script>
---

<div class="row banner">
   <div class="col-6 col-lg">
      <img alt="CODECHECK logo" src="img/codecheck_logo.svg" width="100%" alt="CODECHECK logo" />
      <p class="text-secondary text-justify"><em>Independent execution of computations underlying research articles.</em></p>
   </div>

   <div class="col-12 col-lg">
      <div id="latest_checks">
         <h4>Latest CODECHECKs</h4>
         <ul id="check_list">
         </ul>
      </div>
      <p>See the <a href="/register"><strong>CODECHECK register</strong></a> for all <span id="check_count"></span> completed certificates, <a href="/register/codecheckers/" title="List of all people contributing CODECHECKs">all codecheckers</a>, and <a href="/register/venues/" title="List of all CODECHECK venues, e.g., journals and conferences">all venues</a>.</p>
   </div>
</div>

CODECHECK tackles one of the main challenges of computational research by supporting codecheckers with a workflow, guidelines and tools to evaluate computer programs underlying scientific papers.
The independent time-stamped runs conducted by codecheckers will award a _"certificate of executable computation"_ and increase availability, discovery and reproducibility of crucial artefacts for computational sciences.
See [**the CODECHECK paper**](#2021-07--f1000research-paper-on-codecheck-published-after-reviews-) for a full description of problems, solutions, and goals and take a look at the [GitHub organisation](https://github.com/codecheckers) for examples of codechecks and the CODECHECK infrastructure and tools.

CODECHECK is based on **five principles** which are described in detail in the [project description](/project) and [the paper](#2021-07--f1000research-paper-on-codecheck-published-after-reviews-).

1. Codecheckers record but don't investigate or fix.
1. Communication between humans is key.
1. Credit is given to codecheckers.
1. Workflows must be auditable.
1. Open by default and transitional by disposition.

The principles can be implemented in different [processes](/process/), one of which is the [CODECHECK community workflow](/guide/community-workflow-overview).
**If you want to get involved as a codechecker in the community, or if you want to apply the CODECHECK principles in your journal or conference, please take a look at the [Get Involved](/get-involved) page.**

To **stay in touch** with the project, follow us on social media at <img src="/img/icon-mastodon.svg" alt="Mastodon logo" style="margin-top: -3px;" /> **<https://fediscience.org/@codecheck>**.

## News
### 2025-07 | CODECHECK mentioned in OSIRIS report "10 Tales of Reproducibility" 🐉

The OSIRIS project (Open Science to Increase Reproducibility in Science) is dedicated to reforming the Research and Innovation system, enhancing global acceptance, practice, and recognition of reproducibility in scientific research.
In their report "Ten Tales of Reproducibility", they highlight the CODECHECKs at Amsterdam UMC as a community-driven effort to make reproducible research standar practice.
They also shared the "tale 3" on [here on LinkedIn](https://www.linkedin.com/posts/osiris4r_tentalesofreproducibility-osiris-openscience-activity-7356232131167010818-gm7j).

[![Screenshot of the CODECHECK pages of the OSIRIS report](/img/OSIRIS_CODECHECK-Tale-of-reproducibility.png){:width="300"}](/img/OSIRIS_CODECHECK-Tale-of-reproducibility.png)

Read [the full report](https://osiris4r.eu/wp-content/uploads/2025/06/OSIRIS_PDF_FINAL-Ten-tales-of-reproducibility-A4-CMYK.pdf).

### 2025-06 | First check for OSF's Lifecycle Journal ♻️

CODECHECK is one of the [Evaluation Services](https://lifecyclejournal.org/evaluation-services/) or a new journal started by the Open Science Framework (OSF), the Diamon Open Access Journal [**Lifecycle Journal**](https://lifecyclejournal.org/).
We are excited to join this great initiative for reimagining scholarly publishing for the initial period of 2025 and look forward to working with the Lifecycle Journal team and the community.
If you work in one of the [fields covered by the journal](https://lifecyclejournal.org/about/), please consider submitting your work to the journal and sharing a reproducible workflow with it!

Find all CODECHECKs for the Lifecycle Journal at <https://codecheck.org.uk/register/venues/journals/lifecycle_journal/>.

### 2025-05 | CHECK-NL project completed 🇳🇱

The [Codechecking-NL project](/nl/) team published a **final blog post** and presents their experiences and the future of the Dutch community - read _[Advancing reproducibility and Open Science one workshop at a time - community-building in the Netherlands](/nl/advancing-reproducibility-and-open-science-one-workshop-at-a-time)_.

The group also shares their **event recipe** for running a local CODECHECK event [on Zenodo](https://doi.org/10.5281/zenodo.15423186) and on the website [here](/guide/event-recipe).
No excuses anymore, you can now run your own CODECHECK event!

### 2025-04 | CHECK-PUB project started 🚀

TU Delft Library supports the development of a new building block for the CODECHECK initiative: a plugin for Open Journal Systems (OJS) to support the CODECHECK process in journals. In the CHECK-PUB project, we will develop a prototype of the plugin and look for journals to collaborate on real-world test scenarios.
👉 Learn more about the project at [codecheck.org.uk/pub/](/pub/).

<!--📢 We are looking for an engaged student to work as a developer (student assistant, SHK) in the project team and lead the development of the OJS plugin prototype.
Please see the job add at <https://tu-dresden.de/bu/umwelt/geo/geoinformatik/die-professur/news/job-vacancy-shk-codecheck?set_language=en>.-->

### 2025-03 | Tutorial at AGILE 2025 conference 🧑‍🎓

On **Tuesday, June 10, 2025** a half-day workshop and tutorial _"Open and reproducible research best practices: Codechecks, AGILE repro reviews, and reprohacks for your research"_ will take place in Dresden, Germany, as part of the [AGILE 2025 conference](https://agile-online.org/conference-2025).
The event includes hands-on work in small groups to train codecheckers and is a continuation of the close collaboration between the [Reproducible AGILE initiative](https://reproducible-agile.github.io/) and CODECHECK, more specifically the [CHECK-NL](/nl/) project.

Learn more at the event website: <https://codecheck.org.uk/nl/agilegis-2025.html>

### 2025-01 | Blog post by Eduard Klapwijk on author's perspective 🖊️

What is the experience for authors in a CODECHECK?
[Eduard Klapwijk](https://www.linkedin.com/in/eduardklapwijk/) (<https://orcid.org/0000-0002-8936-0365>), research data steward at Erasmus School of Social and Behavioural Sciences (ESSB), Erasmus University Rotterdam, and [eScience fellow](https://www.esciencecenter.nl/fellowship-programme/eduard-klapwijk/) answers it from his perspective.
His experiences feed into the project _Implementing institutional reproducibility checks to promote good computational practices_ which he pursues as part of his fellowship - see the [ESSB Repro Checks website](https://eduardklap.github.io/repro-checks/) for more information.
He describes his research workflow, the changes he made in the context of the community CODECHECK, and shares useful reflections for authors and the CODECHECK initiative.

Read the blog [on the ESSB Repro Checks website](https://eduardklap.github.io/repro-checks/posts/2025-01-16-experience-getting-codechecked/) and on the [Netherlands eScience Center Medium page](https://medium.com/escience-center/my-experience-of-getting-codechecked-39cf612cfd35) and check out the [CODECHECK Certificate 2024-005](https://codecheck.org.uk/register/certs/2024-005/) by [Lukas Röseler](https://orcid.org/0000-0002-6446-1901).

### 2024-11 | CODECHECK at ASSA summer school in Eindhoven 🔉

On the last day of the 🍁 [Autumn School Series in Acoustics](https://www.linkedin.com/company/assaeindhoven/) at [Eindhoven University of Technology](https://www.tue.nl/en/), the autum school team of [Maarten Hornikx](https://www.linkedin.com/in/maartenhornikx/) and [Huiqing Wang](https://www.linkedin.com/in/huiqing-wang-2596544a/) organized a track on _open research software in the computational acoustics_.

This day is part of the [NWO](https://www.nwo.nl/en/) (Dutch Research Council) open science fund project [_Unlocking the impact potential of research software in acoustics_](https://www.nwo.nl/en/projects/osf231057), driven by the [TU/e Building Acoustics](https://building-acoustics.net/) team, which targets to to foster a culture change regarding good practices in open science regarding the development and dissemination of research software in acoustics.
After a successful workshop in [Nantes](https://lnkd.in/em5HDJ6m), the team now targeted early career researchers.

The day kicked off with talks about the potential and future of open research software, best practices in open research software, and instructions and guidelines for acceleration of sharing research software, by Maarten and Huiqing.

One particular aspect of research software is related to reproducible research.
In the afternoon, participants carried out a CODECHECK process, targeting the independent execution of computations underlying research articles.
While the purpose of the afternoon was to experience running open research software developed by colleagues and getting experience with the process of codecheck, we have had great discussions on what we need in our community to bring research software further for the sake of quality, reproducibility, collaboration and impact of research.

Outcomes of this workshop and the previous workshop will be shared, such that we indeed can take the right step forward in our community!

🙏🏻 Thanks to Frank Ostermann, Daniel Nüst and Daniela Gawehns for the support from CODECHECK!

(This news item was previously published [on LinkedIn](https://www.linkedin.com/posts/building-acoustics-tu-e_openscience-acoustics-reproducibility-activity-7261118766028144640-zLbM/).)

### 2024-04 | CODECHECK wins Team Credibility Prize 🏆

The British Neuroscience Association (BNA) have awarded the 2024 Team Credibility Prize to CODECHECK for our work on reproducibility.
[Further details](https://www.bna.org.uk/mediacentre/news/credibility-prize-2024/).

![BNA Team Credibility Prize](/img/bna-team-credibility-prize.png)

### 2024-03 | Dutch Research Council (NWO) supports CODECHECK 🇳🇱

We are happy to announce a one-year grant from the Dutch Research Council (NWO) to start various CODECHECK activities in the Netherlands.
The project is led by Frank Ostermann (University of Twente) with colleagues from Delft and Groningen.
[Further details](/nl/).

![NWO Logo](https://www.nwo.nl/themes/custom/nwo/assets/images/logo.svg?v=24)

### 2023-09 | CODECHECK and TU Delft Hackathon 💻

TU Delft and CODECHECK run a hackathon on 18th September 2023.

👉 **Read the report** in the TU Delft Open Publishing Blog: <https://openpublishing.tudl.tudelft.nl/tu-delft-codecheck-hackathon-some-perspectives/> 👈

📓 The shared notes are available on the following pad: <https://hackmd.io/77AIvx0qRRWGvo1D2k_t8A>

The hybrid event is jointly organised by [TU Delft Open Science](https://www.tudelft.nl/en/open-science), [TU Delft OPEN Publishing](https://openpublishing.tudl.tudelft.nl/), the CODECHECK team, and friends.
The workshop features live codechecking of workflows by researchers from TU Delft and is both suitable for hands-on participation, observing, and discussing.
The goal is to explore building a local CODECHECK community whose members may check each others code, e.g., before a preprint is published or a manuscript is submitted.

![TU Delft logo](/img/TUDelft_logo_rgb.png)

### 2022-11 | Introduction to CODECHECK Video 📺

<iframe width="560" height="315" src="https://www.youtube.com/embed/_nMzFhYro_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Follow us on YouTube: <https://www.youtube.com/@cdchck>

### 2022-11 | Panel participation in "How to build, grow, and sustain reproducibility or open science initiatives" 🌱

CODECHECK team member Daniel Nüst had the honour to participate in a panel discussion on November 23rd 2022.
The German Reproducibility Network ([GRN](https://reproducibilitynetwork.de/)) organised the two-day event _"How to build, grow, and sustain reproducibility or open science initiatives: A virtual brainstorming event"_.
Learn more about the evenet and this asynchronous unconference-style meeting format [on the website](https://www.bihealth.org/en/notices/how-to-build-grow-and-sustain-reproducibility-or-open-science-initiatives-a-virtual-brainstorming-event).
The event was accompanied by a live and interactive  and the [panel discussion](https://www.bihealth.org/en/notices/how-to-build-grow-and-sustain-reproducibility-or-open-science-initiatives-panel-session) on the same topic.
The panelists were representatives of the German Reproducibility Network (GRN) and actively involved in initiatives that focus on open science, open code, guidelines and research practices, as well as quality management, among other things.

Daniel thanks the other panelists for the interesting conversation: Carsten Kettner, Céline Heinl, Clarissa F. D. Carneiro, and Maximilian Frank.
We also thank the organization team from GRN steering group (Antonia Schrader, Tina Lonsdorf, Gordon Feld) and moderator Tracey Weissgerber from BIH QUEST Center @ Charité Berlin.

### 2022-09 | CODECHECK Hackathon @ OpenGeoHub Summer School 🏫

[Markus](https://www.linkedin.com/in/markus-konkol-a3b244140) [Konkol](https://orcid.org/0000-0001-6651-0976) (<https://github.com/MarkusKonk>, <https://twitter.com/MarkusKonkol>), research software engineer at [52°North](https://52north.org/) and codechecker, organised a **CODECHECK hackathon** as part of the [OpenGeoHub summer school](https://opengeohub.org/summer-school/siegburg-2022/).
He reports on his experiences in a blog post in the 52°North blog at <https://blog.52north.org/2022/09/16/opengeohub-summer-school-facilitating-reproducibility-using-codecheck/>.
It's great to see that codechecking is a suitable evening pastime activity and that participants took some nice learnigns away from the experience of codechecking.
Check out the quotes in the blog post!

Thanks, Markus, for spreading the word about CODECHECK and for introducing more developers and software-developing researchers of the need for their expertise during peer review.

### 2022-06 | AGILE Reproducibility Review 2022 ✅

The collaboration between CODECHECK and the AGILE conference series continues!
In 2022, the AGILE conference's [reproducibility committee](https://reproducible-agile.github.io/2022/#reproducibility-committee) conducted 16 reproductions of conference full papers.
Take a look at the slides presented at the final conference day [here](https://doi.org/10.5281/zenodo.6625206).
The reproducibility review took place after the scientific review.
The reproducibility reports, the AGILE conference's  are published on OSF at <https://osf.io/r5w79/> and listed in the [CODECHECK register](https://codecheck.org.uk/register/).

Learn more about the Reproducible AGILE initiative at <https://reproducible-agile.github.io/>.

[![Reproducible AGILE logo](https://github.com/reproducible-agile/reproducible-agile.github.io/blob/master/public/images/badge/AGILE-reproducible-badge.png?raw=true)](https://reproducible-agile.github.io/)

### 2022-04 | CODECHECK talks 💬

The CODECHECK team is grateful about the continued interest from the research community on the topic of evaluating code and workflows as part of scholarly communication and peer review.

Stephen gave a talk at the [**2022 Toronto Workshop on Reproducibility**](https://canssiontario.utoronto.ca/event/toronto-workshop-on-reproducibility/) organised by [Rohan Alexander](https://rohanalexander.com/).
You can find the [slides online](https://sje30.github.io/talks/2022/codecheck22.html) and also watch the [**recording on YouTube**](https://www.youtube.com/watch?v=TgDgcqtsFvE) - very worth a look because of the great Q&A at the end!

Stephen presented **CODECHECK: An Open Science initiative for the independent execution of computations underlying research articles during peer review to improve reproducibility** ([slides](https://bit.ly/codecheck21)) in May 2021 at the [Reproducibility Tea Southhampton](https://reproducibilitea.org/journal-clubs/#Southampton).

Daniel gave the keynote at the [Collaborations Workshop 2022](https://software.ac.uk/cw22) (CW22) on April 4, 2022, organised by the Software Sustainability Institute ([SSI](https://software.ac.uk/)), UK entitled **Code execution during peer review** ([slides](https://bit.ly/cw22-keynote-daniel), [PDF](https://doi.org/10.6084/m9.figshare.19487573), [video](https://youtu.be/EHyEsZCDR1U?t=172)) and presented CODECHECK as well as the partnering initiative [Reproducible AGILE](https://reproducible-agile.github.io/).

### 2021-07 | F1000Research paper on CODECHECK published after reviews 📃

The [F1000Research](https://f1000research.com/) preprint presented below has passed peer review and is now published in version 2.
We are grateful for the two reviewers, [Nicolas P. Rougier](https://orcid.org/0000-0002-6972-589X) and [Sarah Gibson](https://orcid.org/0000-0003-0356-2765), who gave helpful feedback and asked good questions that helped to improve the paper.

> Nüst D and Eglen SJ. **CODECHECK: an Open Science initiative for the independent execution of computations underlying research articles during peer review to improve reproducibility** [version 2; peer review: 2 approved]. F1000Research 2021, 10:253 (<https://doi.org/10.12688/f1000research.51738.2>)
>
> [![screenshot title page of F1000Research paper after peer review](/img/f1000research-paper-2021.jpg)](https://doi.org/10.12688/f1000research.51738.2)

The F1000 blog also features the article with a little Q&A: [https://blog.f1000.com/2021/09/27/codecheck](https://blog.f1000.com/2021/09/27/codecheck).
Thanks [Jessica](https://blog.f1000.com/author/jessicatruschel/) for making that happen!

### 2021-04 | CODECHECK @ ITC ✅

CODECHECK supporter [Markus Konkol](https://twitter.com/MarkusKonkol) has built a CODECHECK process for all researchers at the University of Twente's Faculty of Geo-Information Science and Earth Observation ([ITC](https://www.itc.nl)).
He offers his expertise to codecheck manuscripts and underlying source code and data before submission or preprint publication, so even if the information is still not publicly shared.
His reports will then go public on Zenodo when the paper comes out, just like a regular CODECHECK, and can support the article's claims.
If timed right, authors can even link to the certificate before submission.
_This is a great service for ITC researchers and their reviewers and readers!_

Learn more at **<https://www.itc.nl/research/open-science/codecheck/>** and see an example at <https://doi.org/10.5281/zenodo.5106408>.

### 2021-03 | F1000Research preprint 📄

A preprint about CODECHECK was published at [F1000Research](https://f1000research.com/) and is now subject to open peer review. It presents the codechecking workflow, describes involved roles and stakeholders, presents the _25_ codechecks conducted up to today, and details the experiences and tools that underpin the CODECHECK initiative. We welcome your comments!

> Nüst D and Eglen SJ. **CODECHECK: an Open Science initiative for the independent execution of computations underlying research articles during peer review to improve reproducibility** [version 1; peer review: awaiting peer review]. F1000Research 2021, 10:253 ([https://doi.org/10.12688/f1000research.51738.1](https://doi.org/10.12688/f1000research.51738.1))

### 2020-06 | Nature News article 📰

A [Nature News article](https://doi.org/10.1038/d41586-020-01685-y) by [Dalmeet Singh Chawla](https://www.dalmeets.com/) discussed [the recent CODECHECK `#2020-010`](https://doi.org/10.5281/zenodo.3865491) of a simulation study, including some quotes by CODECHECK Co-PI Stephen J. Eglen and fellow Open Science and Open Software experts [Neil Chue Hong](https://twitter.com/npch) ([Software Sustainability Institute](https://www.software.ac.uk), UK) and [Konrad Hinsen](https://khinsen.net/) (CNRS, France).

> Singh Chawla, D. (2020). **Critiqued coronavirus simulation gets thumbs up from code-checking efforts**. Nature. [https://doi.org/10.1038/d41586-020-01685-y](https://doi.org/10.1038/d41586-020-01685-y)
>
> [![screenshot of Nature News article headline](/img/nature-news-2020.jpg)](https://doi.org/10.1038/d41586-020-01685-y)

### 2019-11 | MUNIN conference presentation 💯

Stephen Eglen presented CODECHECK at [The 14th Munin Conference on Scholarly Publishing 2019](https://site.uit.no/muninconf/) with the submission "CODECHECK: An open-science initiative to facilitate sharing of computer programs and results presented in scientific publications", see <https://doi.org/10.7557/5.4910>.

Take a look at the [poster](https://septentrio.uit.no/index.php/SCS/article/view/4910/4893) and the [slides](https://septentrio.uit.no/index.php/SCS/article/view/4910/4900).

<!-- or watch the [video recording](https://mediasite.uit.no/Mediasite/Play/8027873496dc465ebc4b9b3ab0338ad01d?playFrom=1772000). -->

> ![screenshot of livestream of the talk by Stephen Eglen at MUNIN 2019](/img/munin-2019.jpg)

<script id="templateCheck" type="x-tmpl-mustache">
{% raw %}
<li>
    Certificate {{certificate}} for <em>{{title}}</em><br/>
    <strong><a href="{{link}}" title="CODECHECK certificate for paper '{{title}}'">{{link}}</a></strong>
    <br />
    <span class="text-secondary">{{type}} | {{venue}} | {{datestring}}</span>
</li>
{% endraw %}
</script>

<script type="text/javascript">
$(document).ready(function(){
    var checks = [];
    var stats = {};

    $.when(
        $.ajax({
            type: "get",
            url: "https://codecheck.org.uk/register/featured.json",
            dataType: "JSON",
            success: function(data) {
                checks = parseChecks(data);
            },
            error: function(xhr, status) {
                $("#latest_checks").html("<p>Error fetching latest checks.</p>");
            }
        }),
    ).then( function(){
       updateList(checks, 5, "#check_list", "#templateCheck");
    });

    $.when(
        $.ajax({
            type: "get",
            url: "https://codecheck.org.uk/register/stats.json",
            dataType: "JSON",
            success: function(data) {
                stats = data;
            },
            error: function(xhr, status) {
                $("#latest_checks").html("<p>Error fetching latest checks.</p>");
            }
        }),
    ).then( function(){
       updateCount(stats["cert_count"], "#check_count");
    });
});
</script>
