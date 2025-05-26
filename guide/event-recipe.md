---
layout: page
title: "CODECHECK Workshops - A recipe for organizers"
permalink: guide/event-recipe
# first version created from .docx file by Frank with:
# pandoc CodeCheckNL_workshop_recipe.docx -t markdown -o CodeCheckNL_workshop_recipe.md
#
# CLI commands to turn this page into a nice PDF (using https://pdfcpu.io/getting_started/install):
# wkhtmltopdf --margin-bottom 2cm --margin-top 3cm --margin-left 2cm --margin-right 2cm   http://localhost:4000/guide/event-recipe temp.pdf
# pdfcpu stamp add -mode image -- "../logo/codecheck_logo.png" "scalef:0.1, rot: 0, pos:tr, off: -20 -20" temp.pdf temp.pdf
# pdfcpu merge recipe.pdf cover-recipe.pdf temp.pdf
# pdfcpu stamp add -mode text -- "Page %p of %P \n https://doi.org/10.5281/zenodo.15423186" "fontname:Helvetica, scale:0.4 abs, pos:bc, margins: 0 0 20 0, rot:0" recipe.pdf CODECHECK-event-recipe.pdf
---

This document contains all the lessons learned, do's and don'ts of the four workshops conducted as part of the [CODECHECKing goes NL (CHECK-NL) project](https://codecheck.org.uk/nl/).
Its aim is to support everyone who wants to try a CODECHECK workshop and build/support local communities for reproducibility checks.

> **Cite this document**
>
> Ostermann, F., Gawehns, D., Momin, A., Sharma, S., Sun, J., Belliard, F., Eglen, S., & Nüst, D. (2025). CODECHECK Workshops - A recipe for organizers. CODECHECK Community on Zenodo. <https://doi.org/10.5281/zenodo.15423186>

## Workshop ingredients

- At least 2 enthusiastic organizers (one local and one experienced codechecker)
- At least a dozen participants
- Roughly 1 code submission per 4 participants
- A location with flexible set-up
- Up to a day for cooking

## How to prepare

### 1. Decide on your aims

a.  Who is your audience: classroom (students, early career research training), research group, general or domain specific university audience? Part of a course or a curriculum, or broader target audience (university, or domain)?

b.  Can you offer certificates for attendence/graduate school credits?

c.  Introduction to concepts of reproducibility and codechecking necessary, or advanced tips and skills?

d.  One-shot or community-building?

### 2. Check your available resources

a. Who can take care of logistics?

b. Which rooms are available?

c. Is there catering you can offer?

d. Can you offer travel grants?

### 3. Decide on the flavour

Based on your responses, there are different types or flavours of workshops possible:

- A _full-day workshop_ with a broad (domain) scope and inclusive participation requirements (this is the type the project did).
- A more _targeted workshop_, probably also shorter event (addressing specific challenges or career stages of participants).
- Whatever you are willing to try out and _experiment_!

Below, we show the recipe for a full-day workshop (the top-most
flavour), assuming that you have secured the resources for a room that
can comfortably hold at least 20 participants, and there are funds for
at least a shared sandwich lunch.

### 4. Preparation timeline

**As early as possible:** contact/recruit a local organizer (in case
that isn't you yourself), who knows the venue and how to secure access
to the room and catering (yes, this seems very logical, but still
important to recall), and together with them, decide on a date.

Ideally **three months before** the workshop: Create the workshop
organizing committee. While it is possible to do everything yourself,
you probably shouldn't. In our experience, you want to cover the
following roles:

- Local organizer: as mentioned above, knows the venue and can arrange access etc.
- Communications lead: creates the registration environment, publishes the advertisements, communicates with (prospective) participants
- Content lead: knows how to do a codecheck (has at least one published) and is comfortable presenting the concept and ideas behind it

Further, why not reach out to the [CODECHECK team](/get-involved/) to invite a
(remote) guest speaker and possible participation in discussion
(especially if you feel more comfortable organising than taking the full
content lead). We have done live CODECHECKing as part of a workshop. But
this is entirely up to you! We are also happy to host a simple website
for the workshop.

**Two months** before the workshop (earlier if you plan to do it during
a particularly busy phase of the academic year): publish the
registration page and the call for contributions. We used Eventbrite
(see [Codecheck - Leiden
University](https://www.universiteitleiden.nl/en/events/2025/02/codecheckatlucdh) for an example) for the registrations and an additional
webpage with information on the call (e.g., [CODECHECK-NL Workshop for Digital Humanities on the CODECHECK website](https://codecheck.org.uk/nl/workshop4.html)). The details on the
registration depend very much on the type of workshop you want to run.
At the very least, the registration page should contain

- Directions to the venue
- **Contact details** of the organizers; we used an new and dedicated
  Gmail address for this throughout the project; the experience was
  not without hassle because multiple people needed access to it; for
  a one-time workshop, we suggest to use the email addresses of the
  two organizer roles: the communication lead for any questions about
  logistics and organization, and the content lead for code
  submissions and questions about, well, content and codechecking
- Tentative schedule
- Information on catering
- What to bring, e.g., their own laptop with admin rights (!) so they
  can set up any software they want to check - this is not the case
  for all employees
- recall that from an AGILE workshop)
- Expected outcomes (codechecks? Of participants or others?)
- Options for travel grants or other certificates
- Implications of no-show

On the latter, we did not have any. This proved to be easier in
implementation, but might have led to an increased number of no-shows,
which led to too much food waste. At least clearly point out that you
will have excess food if people register but do not show up.

Be clear on the **expectations and roles** of the participants: What will
they be working on? Can they just sit-in and listen (usually not), do
they have to submit code to be checked to participate (no, but highly
encouraged to do so!), can they skip part of the workshop (depends)?

For our workshops we had two roles: participants would either submit
code to be checked, or join as codecheckers who would work on the code
to be checked. The former would still be expected to attend the
workshop, to enable a smoother process and increase chances of success.

If your aim is to generate codechecks (in addition to general
community-building), depending on the domain or context, you might have
difficulties getting submissions to be codechecked. Be very clear about
the conditions, requirements, and purpose of these submissions. In our
case, these were:

- Code creates the output of some published study (preprint, journal
  paper, citable report, etc.). No work-in-progress in its early
  stages (because the certificate needs to relate to a citable
  object).
- All data is available and open.
- At least one author of the work to be codechecked is present during the break-out groups.

But don't forget to point out the rewards:

- Improved code
- Citable, linkable CODECHECK certificate
- Depending on the publication, a Codecheck badge

Continue advertising, tagging relevant people etc., until you have
exceeded the desired number of participants. If you do not get
sufficient code submissions, start targeted recruiting in your network.

As a rule of thumb, about 3 to 4 participants per submission are a good
ratio. A workshop codecheck can be done by a pair of participants or a
group of 5-6, but the fun and the effectiveness are reduced.

**About one month** before the workshop, the deadline for submissions
should close. Depending on your registrations so far, you might want to
continue advertising or stop. If you haven't done so during the
submission window in a rolling review, now is the time to check the
submissions whether they are suitable for a codecheck. If you are in
doubt, don't hesitate to reach out to us for advice! Have a look at
codecheck.org.uk/nl, however please note that the project Gmail address
is NOT monitored anymore! Please use our regular work e-mail addressess.

**About one to two weeks** before the workshop, send out a pre-workshop
survey to learn more about the participants and possibly tailor the
workshop accordingly. \[add on survey\]

## How to serve

For the workshop day itself, we recommend that the local organizer has
the usual materials ready: textile-friendly **stickers and a marker** so
that everyone can write down and wear their names; **outlets** and
expansion cables for chargers; a **list of registered participants**;
and if budget allows, some (laptop) **stickers** for the collectors
among the participants.

A **typical workshop schedule** looked like this (in square brackets
which role leads this part):

09:30 Open doors, welcome with coffee

10:00 Official start with round of introductions, information on
schedule \[communications lead\]

10:15 Introduction to codechecking \[content lead\]

10:45 Live CODECHECK demo with Q&A on process \[content lead\]

11:15 Create breakout groups \[communications lead\]

11:30 Codechecks begin in breakout groups \[content lead acts as
rotating facilitator\]

12:15 Lunch break

13:15 Codechecks in breakout groups continue \[content lead acts as
rotating facilitator\]

15:15 Coffee break

15:30 Short reflection from the groups, discussion w/editors

16:30 Closing

We suggest to have a **collaborative document** (e.g., on HackMD) where
information can be shared, including participants' names, affiliations,
e-mail, and group.

An important aspect to consider is **how to form groups** for the
break-out sessions. In our experience, several approaches can work, as
long as you prepare them. The pre-workshop surveys can be helpful to
decide. The two extremes are obviously to either assign all participants
to a group or to have them choose. Our suggestion is to come up with an
"ideal" group split based on the survey, and then let participants
choose freely. If the groups become too unbalanced, use the "ideal"
split as guidance to suggest balancing, e.g., ask all participants to
reconsider joining a certain group, or ask specific participants to
join. In any case, we suggest that at least one of the author(s) of a
work (if present) joins the group codechecking it.

Some criteria for an "ideal" group composition:

- Familiarity with the computing environment/language
- Expertise in the method/domain
- In-group diversity with respect to computing environments (Windows, Linux, Mac, hardware performance) and overall expertise

If a group finishes early because the submitted code works flawlessly on
most computing environments, it can be handy to have "spare" CODECHECKs,
either from open issues from the CODECHECK website or internal from your
organization.

In our experience, the set-up should enable participants to assume
"ownership" of "their" codechecking quickly. We have not observed a
single group being disinterested in tackling their problem in a
collegial way. However, this engagement can decline quickly once the
problem is solved, i.e., the code has been successfully checked. Then
the nitty-gritty details of writing a short report and submitting it can
be tricky to motivate. We recommend to emphasize that the report is
written as much as possible during the CODECHECK itself, so that very
little remains to be done after the completed CODECHECK.

For an overview of an adapted CODECHECK workflow, see the Appendix of
this recipe.

During the **wrap-up**, each group should briefly present how their
CODECHECK went. What problems have they encountered, where they
successful? Then, a general discussion on the workshop and Codecheck in
general can be helpful to exchange further views and experiences. We
used Mentimeter as supporting tool during these discussion, but this is
not a strong recommendation.

**Follow-up/left-overs**

As mentioned above, it is important to complete the CODECHECK as much as
possible during the workshop. Otherwise, the organizers might end up
chasing participants with e-mails to ensure that the CODECHECK is
completed and finally registered on the Codecheck website. The content
lead should be in charge here.

Lastly, once all the housekeeping is done, we suggest to write a nice
blog post about the event and share it widely (at the very least with
the participants) and advertise the successful CODECHECKs. Again we
would be happy to crosspost it on the CODECHECK website.

**Questions?**

Don't hesitate to contact the [CODECHECK team](/team/) and also [people from the
Codecheck-NL project](/nl/). Although the project has finished, we are all
open science enthusiasts and will continue to be part of the community.
Hope to have encouraged you to go for it -- Success!

## Appendix: Codecheck workflow during workshop

1. **Authors** create a pre-producible workflow: all data and code,
   plus a readme file detailing the content, a manifest file detailing
   the output ([CODECHECK configuration file specification](https://codecheck.org.uk/spec/config/1.0/)), and a
   license file; this is ideally bundled in a single repository or
   archive file and accompanied by a (pre-published) paper

2. **Authors** send their request for a CODECHECK to the advertised contact e-mail address

3. The **workshop team** accepts the request for the workshop or advises to follow the normal community workflow

4. During the workshop, **codecheckers** download materials or clone a repository

5. The workshop **codecheckers** create a new directory in their
   working environment where all new files go, and start documenting
   the ongoing CODECHECK; exact form of codechecking procedure can vary
   greatly; there are some optional tools, such as an R package that
   includes an Rmd template for the report and automates some steps,
   and templates for word processors to use

6. During a CODECHECK, the workshop **codecheckers** can ask the
   **authors** (if present at the workshop) in case of encountered
   problems, keeping in mind the general Codecheck philosophy
   (especially "the codechecker records but does not fix" -- unless it
   is a very trivial bug like pathnames)

7. The **codecheckers** summarize the process and outcome in a report
   and bundle it with all input and output files; this workshop
   CODECHECK bundle is then shared with the **workshop team** via email
   or repository; the report should at least contain the information on
   _who_ checked _what_ and _how_ with _which outcomes_; document for
   future self and other researchers; have a look at the available
   reports; most contain also optional information (compare [CODECHECK community workflow guide](https://codecheck.org.uk/guide/community-workflow#codecheck-steps))

8. The **workshop team** checks the bundle and report, and together
   with the workshop codecheckers, revise where necessary; once ready,
   either the **workshop team** or a corresponding **codechecker**
   upload the file on Zenodo or OSF.

9. The **workshop team** adds the new CODECHECK to the register in a new issue using this link: <https://github.com/codecheckers/register/issues/new?template=new-community-codecheck.md>.