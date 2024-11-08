---
layout: page
title: CODECHECK community workflow for editors
---

See also the [CODECHECK community workflow overview](/guide/community-workflow-overview) and [discuss your issues](https://github.com/orgs/codecheckers/discussions).

## Editor tasks

The main tasks for the CODECHECK editor are assigning and assisting (mentoring) codecheckers, and validating the publication of the certificate and all metadata.

When a new issue is assigned to a codecheck editor in the register, here are a few things you need to do.

1. **First checks**
    - Briefly check the submitted repository - does the workflow look at all codecheckable?
    - Ensure that a preprint is linked or a real manuscript is published within the repository, or that a reference to a journal submission is provided to which you have contacts.
    - Make sure the author has completed the [required author tasks](/guide/community-workflow-author#2-requirements).
1. **Manage CODECHECK workflow**
    - Edit the first comment of the issue and add the next available _Certificate identifier_ in `YYYY-NNN` format by checking existing open issues with [`id assigned`](https://github.com/codecheckers/register/labels/id%20assigned) for the next available number; add the badge `id assigned` to the issue.
    - [Find a codechecker](https://github.com/codecheckers/codecheckers/) and invite them by @-mentioning in the register issue. Remove the [`needs codechecker`](https://github.com/codecheckers/register/labels/needs%20codechecker) label when you found one who accepted the task. Good job so far!
    - Use the following labels to document the current state of the check: [`work in progress`](https://github.com/codecheckers/register/labels/work%20in%20progress), [`metadata pending`](https://github.com/codecheckers/register/labels/metadata%20pending)
    - Support the codechecker as needed (sent reminders, technical support, mediate between author and codechecker, et cetera); _all communication should happen within the GitHub issue on the register_ unless there are sensitive information to share.
    - Ensure that a reference to the certificate is/will be added to the manuscript.
1. **Certificate publication and register**
    - Wait until the article is published in a citable form.
    - Ask the codechecker to update all required metadata in the `codecheck.yml` and update the certificate report (especially the final DOIs!); double-check the information in the metadata and the actual certificate; wait until the certificate is published with its own DOI.
        - Alternatively, you may make edits to the metadata in the forked repository yourself, request write access to the OSF repository to edit the metadata, or handle edits via Zenodo yourself (metadata editing in CODECHECK community, or even at the stage of a shared draft of a Zenodo record).
    - Trigger a rebuild of the register by adding the CODECHECK to the `register.csv` file; you may add a `closes #N` statement in the commit message to close the isue.
    - Clear up the labels of the register issue - all labels except the [`community`](https://github.com/codecheckers/register/labels/community)/[`journal`](https://github.com/codecheckers/register/labels/journal)/[`conference/workshop`](https://github.com/codecheckers/register/labels/conference%2Fworkshop) should be removed.
    - "Archive" the repository clone in the codecheckers organisation on GitHub/the cdchk organisation on GitLab ([instructions for GitHub](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-archiving-repositories), [instructions for GitLab](https://docs.gitlab.com/ee/user/project/working_with_projects.html#archive-a-project))
    - Close the issue on the register.
    - If a community check on a preprint is eventually mentioned in the published peer-reviewed article, you can update the reference DOI to the final paper, see [this example commit](https://github.com/codecheckers/leba-manuscript/commit/06e9a82da9a29a6edea1307ffbee050ee0a40cbb).
