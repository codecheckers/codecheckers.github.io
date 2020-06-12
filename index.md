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
      <p>See the <a href="/register"><strong>CODECHECK register</strong></a> for the full list of <span id="check_count"></span> completed checks.</p>
   </div>
</div>

CODECHECK tackles one of the main challenges of computational research by supporting codecheckers with a workflow, guidelines and tools to evaluate computer programs underlying scientific papers.
The independent time-stamped runs conducted by codecheckers will award a _"certificate of executable computation"_ and increase availability, discovery and reproducibility of crucial artefacts for computational sciences.
See the [project](/project/) page for a full description of problems, solutions, and goals and take a look at the [GitHub organisation](https://github.com/codecheckers) for examples of CODECHECKs and tools.

# The CODECHECK principles

1. <span class="principle">Codecheckers record but don't investigate or fix.</span>
   <details>
   <summary>More about this principle...</summary>
   A codechecker is not required to fix workflows or conduct a code review, but to document the given state of documentation and executability.
   The codechecker is not making a scientific judgement.
   Of course, given a level of interested and skills, a codechecker may go beyond these minimal requirements.
   They can provide simple or small fixes and even actively collaborate with an author to create a better research output.
   The codechecker's report provides helpful input to the scientific review, e.g., to help the reviewer's understanding.
   However, a CODECHECK does not evaluate scientific merit, nor the correctness of code!
   A failed CODECHECK does not imply the rejection of a submission.
   <em>Codecheckers take the pictures at a crime scene, they do not hunt the criminal.</em>
   </details>
1. <span class="principle">Communication between humans is key.</span>
   <details>
   <summary>More about this principle...</summary>
   The priority in all documentation and metadata is that a human codechecker can understand them.
   It is also close to impossible to effectively conduct a CODECHECK and to keep it "blind" at the same time.
   Therefore, a CODECHECK must not be anonymised must provide a two-way means of communication between author and codechecker.
   Codecheckers should be supported by formal metadata, automation, and reproducibility infrastructure, yet the CODECHECK shall not rely on them.
   Codechecks may be conducted by existing participants in the submission process (e.g., a reviewer or editor), but may also be handled with new roles.
   These new participants are a chance to involve people currently underrepresented in classic peer-review, such as early career researchers (ECRs) or research software engineers (RSEs).
   </details>
1. <span class="principle">Credit is given to codecheckers.</span>
   <details>
   <summary>More about this principle...</summary>
   Software and its review are crucial for research in the age of digitisation, so the contribution to the scientific body of knowledge in the form of a codecheck gets the credit it deserves.
   If a CODECHECK was conducted as part of a review process, (a) the publisher ensures a proper creditation to the level given to scientific reviewers, e.g. by listen the codechecker on an article or journal page (with number of reviews) or by depositing metadata to public databases (e.g., CrossRef, Publons), and (b) a sentence in the methods section is added mentioning the occured CODECHECK and the reviewer name.
   The deposited metadata includes a codechecker's ORCID, time, journal, and (if published) the article DOI.
   
   This principle intentionally does not regulate if/how the output of the CODECHECK is deposited and who does it.
   Ideally, though the contribution made by the codechecker is openly published in the form of a DOI-able artefact and the sentence in the methods sections links to it as a simple hyperlink/URL.
   </details>
1. <span class="principle">Workflows must be auditable.</span>
   <details>
   <summary>More about this principle...</summary>
   Common sense and a collaborative process are the main drivers behind the <em>level of documentation</em>, the degree of openness, and the amount of data that is checked.
   However, the minimal requirement is that the codechecker has enough material to validate the workflow outputs submitted by the authors.
   This means that the <em>code could be executed at least once without critical errors or warnings using the provided instructions.
   This execution must create selected outputs, e.g. figures or data files.
   Ideally, the execution is fully scripted, and the execution can be triggered by a running a single command.
   Being executed once means that the material is complete and therfore a detailed investigation may occur at a later time.
   Being auditable includes that authors provide data and code for relevant analysis steps and visualisations to the codecheckers, but it does not imply that all of the code associated with an article is reviewed (see Principle&nbsp;1).

   The CODECHECK is <em>not automated</em> on purpose: automation may (a) lead to people gaming the system, (b) hide details that eventually decrease level of certainty that a codechecker has in their assessment, and (c) reduce the understandability of instructions in the long term, which is more important than short term ease of use (see Principle&nbsp;2).
   </details>

These basic principles ensure they are feasible to add in a scholarly communication process but still have a huge positive impact on the transparency and usefulness of the published material.
They strike a **balance** between the ideals of auditable high-quality research software and the reality of publication pressure and only slowly changing academic evaluation practices.
Of course, numerous requirements on openness/transparency (e.g. depositing the CODECHECK report publicly with a DOI), about software quality (tests, releases, documentation), on copyright/licensing, and regarding best practices for computer-based analyses (e.g. workflow management, data/software citation) are thinkable, but intentionally remain to be defined by implementations of the principles in each community of practice.
While the CODECHECK initiators strongly support of Open Science, a CODECHECK does not exclude research not falling into your definition of Open Science.

Check out our [FAQ page](/faq) for more information about the limitations of a CODECHECK.

**In the future** we hope to update these principles and to work together with researchers, educators, editors, and publishers to raise the bar towards higher degrees of reproducibility and openness across all domains and communities of research.

The principles can be implemented in different ways.
See the [process page](/process) for details about the stakeholders and dimensions of variations in CODECHECKs within a scholarly peer review.
The [CODECHECK community process](/guide/community-process) describes a concrete realisation, including practical requirements and steps.

**If you want to get involved as a codechecker in the community, or if you want to apply the CODECHECK principles in your journal or conference, please take a look at the [Get Involved](/get-involved) page.**

------

# News

## 2020-06 | Nature News article

A [Nature News article](https://doi.org/10.1038/d41586-020-01685-y) by [Dalmeet Singh Chawla](https://www.dalmeets.com/) discussed [the recent CODECHECK `#2020-010`](https://doi.org/10.5281/zenodo.3865491) of a simulation study, including some quotes by CODECHECK Co-PI Stephen J. Eglen and fellow Open Science and Open Software experts [Neil Chue Hong](https://twitter.com/npch) ([Software Sustainability Institute](https://www.software.ac.uk), UK) and [Konrad Hinsen](https://khinsen.net/) (CNRS, France).

> Singh Chawla, D. (2020). **Critiqued coronavirus simulation gets thumbs up from code-checking efforts**. Nature. [https://doi.org/10.1038/d41586-020-01685-y](https://doi.org/10.1038/d41586-020-01685-y)
> 
> [![](/img/nature-news-2020.jpg)](https://doi.org/10.1038/d41586-020-01685-y)

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
    
    $.when(
        $.ajax({
            type: "get",
            url: "https://codecheck.org.uk/register/register.json",
            dataType: "JSON",
            success: function(data) {
                checks = parseChecks(data);
            },
            error: function(xhr, status) {
                $("#latest_checks").html("<p>Error fetching publications.</p>");
            }
        }),
    ).then( function(){
       updateList(checks, 4, "#check_list", "#templateCheck");
       updateCount(checks, "#check_count");
    });
});
</script>
