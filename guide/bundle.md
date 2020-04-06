---
layout: page
title: CODECHECK bundle
permalink: guide/bundle
---

The CODECHECK bundle is _not_ formally specified, as its contents are largely at the discretion of the codechecker.
Unlike the [CODECHECK configuration file](/spec/config/latest), which has a more formal specification.
Therefore, this page acts as a guidance for codecheckers and may evolve over time.

**The CODECHECK bundle includes all files that the codechecker used to conduct the CODECHECK.**
This may include a copy of the author's files, and any additional files that the codechecker created to assisst them in their codecheck.

## Computing environment documentation

- Binder's [_REES_ specification](https://repo2docker.readthedocs.io/en/latest/config_files.html#config-files), for example by creating one or several of the following files or tools:
  - `Dockerfile`
  - Binder
  - `environment.yml`
  - `requirements.txt`
  - `DESCRIPTION` file (R package)
- virtual environments (Python)
- package `renv` (R)
- Dockerfile and Docker image
- ...