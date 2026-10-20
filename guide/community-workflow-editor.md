---
layout: page
title: CODECHECK community workflow for CODECHECK editors
---

See also the [CODECHECK community workflow overview](/guide/community-workflow-overview) and [discuss your issues](https://github.com/orgs/codecheckers/discussions).

This page is for **CODECHECK editors**, i.e., the volunteers who look after community CODECHECKs in the [register](https://github.com/codecheckers/register/issues).
_Are you a journal editor, publisher, or conference organiser who wants to introduce CODECHECKs at your venue?_
Start with [getting involved as a journal, publisher, or conference](/get-involved/#as-a-journal-publisher-or-conference), the [benefits](/benefits) of a CODECHECK in a review process and [how it can be implemented](/benefits/#implementing-codecheck), and the existing [workflows](/workflows) at other venues.
The tasks below show what an editor does in one concrete implementation and may serve as a template for your own.
If you would like to become a CODECHECK editor, [get in touch](/get-involved/#as-a-curious-person-or-someone-with-a-question---get-in-touch).

## CODECHECK editor tasks

The main tasks for the CODECHECK editor are assigning and assisting (mentoring) codecheckers, and validating the publication of the certificate and all metadata.

If you create a new check issue on the register yourself, e.g., for a journal submission or on behalf of an author, the preferred way is the **[CODECHECK Launch Pad](https://codecheck.org.uk/launch-pad/)**.
It looks up the next available certificate identifier and sets the correct labels for the type of check.

When a new issue is assigned to a codecheck editor in the register, here are a few things you need to do.

1. **First checks**
    - Briefly check the submitted repository - does the workflow look at all codecheckable?
    - Ensure that a preprint is linked or a real manuscript is published within the repository, or that a reference to a journal submission is provided to which you have contacts.
    - Make sure the author has completed the [required author tasks](/guide/community-workflow-author#2-requirements).
1. **Manage CODECHECK workflow**
    - Assign the next available _Certificate identifier_ in `YYYY-NNN` format: it is one more than the highest identifier in the titles of [all issues on the register](https://github.com/codecheckers/register/issues?q=is%3Aissue), open and closed, which end with `| YYYY-NNN`.
      Do not go by the register itself, because it only lists finished checks, and identifiers of checks still in progress are missing from it.
      Add the identifier to the issue title and to the first comment of the issue, and add the label [`id assigned`](https://github.com/codecheckers/register/labels/id%20assigned) - the Launch Pad counts only issues with this label when it looks up the next identifier.
      Issues created with the [Launch Pad](https://codecheck.org.uk/launch-pad/) already carry the identifier, so check only that it is still the next free one.
    - [Find a codechecker](https://github.com/codecheckers/codecheckers/) and invite them by @-mentioning in the register issue. Remove the [`needs codechecker`](https://github.com/codecheckers/register/labels/needs%20codechecker) label when you found one who accepted the task. Good job so far!
    - Use the following labels to document the current state of the check: [`work in progress`](https://github.com/codecheckers/register/labels/work%20in%20progress), [`metadata pending`](https://github.com/codecheckers/register/labels/metadata%20pending)
    - Support the codechecker as needed (send reminders, technical support, mediate between author and codechecker, et cetera); _all communication should happen within the GitHub issue on the register_ unless there are sensitive information to share.
    - Ensure that a reference to the certificate is/will be added to the manuscript.
1. **Certificate publication and register**
    - Wait until the article is published in a citable form.
    - Ask the codechecker to update all required metadata in the `codecheck.yml` and to update the certificate report (especially the final DOIs!)
    - Revisit the [CODECHECK community curation policy](https://zenodo.org/communities/codecheck/curation-policy) to make sure you follow the most updated guideline
    - Double-check the information in the metadata and the actual certificate; wait until the certificate is published with its own DOI.
    - Alternatively, you may make edits to the metadata in the forked repository yourself, or handle edits via Zenodo yourself (metadata editing in CODECHECK community, or even at the stage of a shared draft of a Zenodo record).
    - Add the CODECHECK as a new row to the [`register.csv`](https://github.com/codecheckers/register/blob/master/register.csv) file and commit it to the `master` branch; you may add a `closes #N` statement in the commit message to close the issue.
      A GitHub Action then renders the register automatically - check the new certificate page at `https://codecheck.org.uk/register/certs/<YYYY-NNN>/` once it has finished.
    - "Archive" the repository clone in the codecheckers organisation on GitHub/the cdchck organisation on GitLab ([instructions for GitHub](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-archiving-repositories), [instructions for GitLab](https://docs.gitlab.com/ee/user/project/working_with_projects.html#archive-a-project))
    - Close the issue on the register.
    - If a community check on a preprint is eventually mentioned in the published peer-reviewed article, you can update the reference DOI to the final paper, see [this example commit](https://github.com/codecheckers/leba-manuscript/commit/06e9a82da9a29a6edea1307ffbee050ee0a40cbb).
{:.full-width}

## Automation with the Chekhov bot

We are developing [Chekhov](https://github.com/codecheckers/chekhov), a bot that takes over repeated steps of this workflow, such as assigning codecheckers, validating the `codecheck.yml` early, and adding the certificate to the register.
The bot is controlled by mentioning it in a comment on the register issue, and it is still in development: for now it only runs on the [testing register](https://github.com/codecheckers/testing-dev-register), not on the register itself.
To see what it can do, comment

```
@chekhovbot help
```

Progress is tracked in [register#209](https://github.com/codecheckers/register/issues/209), where feedback is welcome.
