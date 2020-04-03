---
layout: page
title: CODECHECK process
permalink: /process/
---

The [CODECHECK principles](/) can be implemented in different ways.
On this page [we]({{ '/partners#team' | absolute_url }}) describe a few _abstract alternatives_ developed during conversations with our [collaborators](/partners#collaborators) to elaborate on the options and opportunities the principles provide.

**Take a look at the [CODECHECK community process guide]({{ '/guide/community-process' | absolute_url }}) for a _concrete implementation_ of a CODECHECK principles.**

## Implementing the CODECHECK process

In our discussions with editors and publishers, we found that the _point in time_ during the review process when a CODECHECK happens, the person who takes the role of codechecker, and the openness of the codechek, can vary.
For example, the CODECHECK may happen before peer review or after, the codechecker can be staff, a regular reviewer, or a member of a special reproducibility committee, the CODECHECK may be open or blind, either matching or differing from the scientific review, and the results may be published or confidential.
Furthermore, different stakeholders make take on specific tasks, such as depositing the CODECHECK report, which can be done by a codechecker or by a publishers.

### Stakeholders and roles

<img src="https://docs.google.com/drawings/d/e/2PACX-1vQ02PwUmSs2mCpGh1b9rqI9b6yk8uIVX2RyCj3ac9W2U7quzQHFVJpQtrOxg1eqLrLMD6174PjDfCEq/pub?w=767&amp;h=410">

### Dimensions of CODECHECK

<img src="https://docs.google.com/drawings/d/e/2PACX-1vQFaeUaBVzc1g39rGRfD9TKJkpC-Je3VY0fd0kClv_EQ-2Xcqr5ZlTYC5SeNtBuLA_UvrLbf_SSQ8Qm/pub?w=770&amp;h=271">

### Variations of CODECHECK processes

#### Post review with extra role

1. A manuscript with computations passes scientific peer-review and is assigned a codechecker with matching expertise (first priority: code, second priority: domain).
1. The codechecker must understand the instructions and executes the workflow using the CODECHECK infrastructure.
   They contact the manuscript author if needed and collaborate based on the CODECHECK infrastructure.
1. A CODECHECK evaluates if the code and data produce a core output (figure, dataset) - it is _not_ an evaluation of the results or a judgement of scientific merit.
1. The codechecker makes the final call on the result within a week, publishes the checked code and data together with the environment in a public repository (with DOI), and puts their name on it. A <img src="/img/codeworks-badge.svg" alt="CODECHECK badge" height="16" style="margin-top: -4px;" /> badge on the published article points to the repository with the checked files.
   The quick turnaround time is important so that accepted papers get out as soon as possible.

#### Pre-review with extra role on staff

1. An editorial staff member/ECR with technical expertise examines if something is "mechanically wrong" before sending out a submission to review.
   This is worth the time together with other technical tests! The codechecker can reach out to the author to fix problems.
   It is also a sanity check for the author and a measure of seriousness for the journal.
1. If a CODECHECK is successful, start the regular review.
1. After acceptance, add <img src="/img/codeworks-badge.svg" alt="CODECHECK badge" height="16" style="margin-top: -4px;" /> badge to the published article.

#### Parallel reproducibility reviewer

1. A manuscript is submitted to a journal or conference.
1. It is assigned a scientific reviewer with the suitable domain expertise, and a codechecker with matching technical expertise.
   The scientific review is conducted open/single-blind/double-blind, while the codechecker knows the author and can reach out directly through the best channel, e.g. email, GitHub/GitLab issues, or discussion forums.
1. Both reviewer and codechecker follow the same deadline.
1. Both the scientific review and the CODECHECK result are submitted to the handling editor or programme committee member, who makes the decision on how to proceed.
1. Independent of the submissions acceptance, the CODECHECK findings are sent to the submitting author.

#### Regular reviewer

The review process is conducted as usual, but the editor does not only match the domain expertise but also technical skills.
The reviewer conducts the CODECHECK and submits the resulting certificate as part of their CODECHEK report.
This variant requires an open peer review and a broad pool of reviewers.

#### Independent community pre-review

An author may also reach out to a colleague or find a [Code Copilot](https://twitter.com/Code_Copilot) on Twitter, who can give feedback but also create a CODECHECK report according the a journal's/conference's implementation of the principles.
This report certainly increases trust in a workflow and may help authors to include code and data in their submission.
Such an independent report may even be taken up during review and take the place of a report usually created by a different process described on this page.

#### More?

You have ideas about how a CODECHECK would work for your journal or conference? _Let us know_ (see contact options below) or [get involved](/get-involved) _!_
