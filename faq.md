---
layout: page
title: FAQ
permalink: /faq/
---

## Are the CODECHECK principles not a quite low bar?

**Yes.**

- A little bit is more than nothing.
- The lower the bar, the earlier in the process a CODECHECK can occure (e.g. pre-review)
- Exposure to reproducibility practices is key.
- Nudging works.
- Better get a certificate for small parts of the workflow than not doing any codechecking - not everything needs to be checked.

## Why use `make` in the CODECHECK community process?

<!-- make on Windows? -->
- It's old, works, and is available everywhere.
- Useful caching mechanism.

## How should I best package my code and data?

So that the codechecker can make sense of it.
Beyond that, follow community practices or create a [research compendium](https://research-compendium.science/).

## What if I used proprietary software _X_?

The codechecker must be able to conduct the CODECHECK.
If they have access to he software, there is no problem.

## Can't researchers cheat by manipulating the files from the manifest within their code?

Yes.

## But I work with huge/privacy data!

Use one of these approaches:

- data enclaves
- synthetic data
- subsets

## Why does an author have to provide licensing information?

In this first implementation of the CODECHECK principles, we imagine an open process, and there is no openness without proper handling of copyright.

## Why don't you require use of reproducibility technology _X_?

The codechecker put's their name under the CODECHECK.
That is more important than technical details, which will vary on a case by case basis.
Codecheckers are encouraged to use containerisation technologies et cetera, but not required to do so.

## What if Docker/`make`/_software X_ is not available anymore?

Software stacks are volatile, and CODECHECK acknowledges this by focussing on the idea that a workflow was _once_ reproducible by a person other than the author.
This is a _huge_ step forward, and we are excited for the times when even more will be commonplace.
The CODECHECK largely increases the chances that the checked code works for third parties and is accessible, e.g. using text-based file formats, and portable, e.g. using containers.
The _files_ and _archives_ (a Docker image is a tarball of a directory system) will be readable much longer than tools will be there to easily work with them.

## What's the correct way of writing CODECHECK?

- CODECHECK process.
- A codechecker codechecks an article and creates the CODECHECK bundle.
- Codecheckers write CODECHECK reports.
- The CODECHECK report is created by the codechecker during the codechecking process.
