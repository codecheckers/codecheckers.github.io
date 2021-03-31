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
      <img src="img/codecheck_logo.svg" width="100%" alt="CODECHECK logo" />
      <p class="text-secondary text-justify"><em>Independent execution of computations underlying research articles.</em></p>
   </div>

   <div class="col-12 col-lg">
      <div id="latest_checks">
         <h4>Latest CODECHECKs</h4>
         <ul id="check_list">
         </ul>
      </div>
      <p>See the <a href="/register"><strong>CODECHECK register</strong></a> for all <span id="check_count"></span> completed certificates.</p>
   </div>
</div>

CODECHECK tackles one of the main challenges of computational research by supporting codecheckers with a workflow, guidelines and tools to evaluate computer programs underlying scientific papers.
The independent time-stamped runs conducted by codecheckers will award a _"certificate of executable computation"_ and increase availability, discovery and reproducibility of crucial artefacts for computational sciences.
See [**the CODECHECK paper**](#2021-03--f1000research-preprint) for a full description of problems, solutions, and goals and take a look at the [GitHub organisation](https://github.com/codecheckers) for examples of codechecks and the CODECHECK infrastructure and tools.

# The CODECHECK principles

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

Check out [**the CODECHECK paper**](#2021-03--f1000research-preprint) and the [FAQ](/faq) page for more information about the limitations of a CODECHECK.

**In the future** we hope to update these principles and to work together with researchers, educators, editors, and publishers to raise the bar towards higher degrees of reproducibility and openness across all domains and communities of research.

The principles can be implemented in different ways.
See the [process page](/process) for details about the stakeholders and dimensions of variations in CODECHECKs within a scholarly peer review.
The [CODECHECK community process](/guide/community-process) describes a concrete realisation, including practical requirements and steps.

**If you want to get involved as a codechecker in the community, or if you want to apply the CODECHECK principles in your journal or conference, please take a look at the [Get Involved](/get-involved) page.**

------

# News

## 2021-03 | F1000Research preprint

A preprint about CODECHECK was published at [F1000Research](https://f1000research.com/) and is now subject to open peer review. It presents the codechecking workflow, describes involved roles and stakeholders, presents the _25_ codechecks conducted up to today, and details the experiences and tools that underpin the CODECHECK initiative. We welcome your comments!

> Nüst D and Eglen SJ. **CODECHECK: an Open Science initiative for the independent execution of computations underlying research articles during peer review to improve reproducibility** [version 1; peer review: awaiting peer review]. F1000Research 2021, 10:253 ([https://doi.org/10.12688/f1000research.51738.1](https://doi.org/10.12688/f1000research.51738.1))
> 
> [![screenshot title page of F1000Research preprint](/img/f1000research-preprint-2021.jpg)](https://doi.org/10.12688/f1000research.51738.1)

## 2020-06 | Nature News article

A [Nature News article](https://doi.org/10.1038/d41586-020-01685-y) by [Dalmeet Singh Chawla](https://www.dalmeets.com/) discussed [the recent CODECHECK `#2020-010`](https://doi.org/10.5281/zenodo.3865491) of a simulation study, including some quotes by CODECHECK Co-PI Stephen J. Eglen and fellow Open Science and Open Software experts [Neil Chue Hong](https://twitter.com/npch) ([Software Sustainability Institute](https://www.software.ac.uk), UK) and [Konrad Hinsen](https://khinsen.net/) (CNRS, France).

> Singh Chawla, D. (2020). **Critiqued coronavirus simulation gets thumbs up from code-checking efforts**. Nature. [https://doi.org/10.1038/d41586-020-01685-y](https://doi.org/10.1038/d41586-020-01685-y)
> 
> [![screenshot of Nature News article headline](/img/nature-news-2020.jpg)](https://doi.org/10.1038/d41586-020-01685-y)

## 2019-11 | MUNIN conference presentation

Stephen Eglen presented CODECHECK at [The 14th Munin Conference on Scholarly Publishing 2019](https://site.uit.no/muninconf/).

> Take a look at the [poster](https://septentrio.uit.no/index.php/SCS/article/view/4910/4893) and the [slides](https://septentrio.uit.no/index.php/SCS/article/view/4910/4900), or watch the [video recording](https://mediasite.uit.no/Mediasite/Play/8027873496dc465ebc4b9b3ab0338ad01d?playFrom=1772000).
> 
> [![](/img/munin-2019.jpg)](https://mediasite.uit.no/Mediasite/Play/8027873496dc465ebc4b9b3ab0338ad01d?playFrom=1772000)

------

# Follow, share, cite

To stay in touch with the project, follow the [project team](team) members on Twitter:

- [@StephenEglen](https://twitter.com/StephenEglen)
- [@nordholmen](https://twitter.com/nordholmen)

To give a quick overview of the project, feel free to use or extend the [existing slide decks](https://github.com/codecheckers/slides).

To cite CODECHECK in scientific publications, please use the following citation/reference:

> _Eglen, S., & Nüst, D. (2019). CODECHECK: An open-science initiative to facilitate the sharing of computer programs and results presented in scientific publications. Septentrio Conference Series, (1). [https://doi.org/10.7557/5.4910](https://doi.org/10.7557/5.4910)_

<script id="templateCheck" type="x-tmpl-mustache">
{% raw %}
<li>
    <em>"{{title}}"</em><br/>
    <strong><a href="{{link}}" title="CODECHECK report for paper {{title}}">{{link}}</a></strong>
    <br />
    <span class="text-secondary"> Certificate #{{certificate}} | Type: {{type}} | {{datestring}}</span>
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
       updateList(checks, 4, "#check_list", "#templateCheck");
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
