---
layout: page
title: Community workflow
permalink: guide/community-workflow-overview
redirect_from:
  - /techexample/
  - /techexample
  - /guide/community-process/
  - /guide/community-process
  - /guide/community-workflow/
  - /guide/community-workflow
---

The CODECHECK community workflow described here is the steps that codecheckers follow when conducting **independent CODECHECKs**, i.e., without an active collaboration with a journal or conference.
The community workflow uses free to use infrastructure, in particular the [GitHub organisation codecheckers](https://github.com/codecheckers/) and [Zenodo](https://zenodo.org/communities/codecheck/) for depositing codecheck certificates.
The community workflow is a concrete implementation of the abstract [CODECHECK process](/benefits/#implementing-codecheck) and follows the _[CODECHECK principles](/)_, although it may fall short of Rule 3, because the CODECHECKs are not yet properly registered as peer reviews in open research information databases.

The community workflow documentation is split into three parts:

- [CODECHECK community workflow for authors](/guide/community-workflow-author)
- [CODECHECK community workflow for codecheckers](/guide/community-workflow-codechecker) <br>
  This perspective has variants: a [short version](/guide/community-workflow-codechecker#codechecker-tasks---short-version), an [extended version](/guide/community-workflow-codechecker#codechecker-tasks---extended-version), and a version for [in-person workshop with CHECK-NL](/nl/workflow)
- [CODECHECK community workflow for CODECHECK editors](/guide/community-workflow-editor) <br>
  This is the role of the CODECHECK editor; if you are a journal editor or publisher interested in CODECHECKs at your venue, see [how to get involved as a journal, publisher, or conference](/get-involved/#as-a-journal-publisher-or-conference).

## Support

Every CODECHECK is unique, just as the associated research article.
The codechecker can partly rely on the examples below and the [full breadth of CODECHECKs](/register) for good practices and approaches for codechecking.

If you have any questions or concerns, or get stuck, please reach out to fellow codecheckers in the [public CODECHECK discussion forum](https://github.com/orgs/codecheckers/discussions) or contact the CODECHECK team (see footer) if you need to consult on sensitive information.

------

## Examples

See the [CODECHECK register](/register) for a full list of codechecks, including direct links to the reports and register issues.
You can check there for more examples from different communities.
The good practices and common pitfalls from the examples below are summarised in the [author guide](/guide/community-workflow-author#learning-from-examples).

- Life Sciences 🧬🌿🧠
  - [_ShinyLearner: A containerized benchmarking tool for machine-learning classification of tabular data_](https://doi.org/10.1093/gigascience/giaa026)

    CODECHECK certificate 2020-001: <https://doi.org/10.5281/zenodo.3674056>

    _Look at this for:_ recreating figures from provided result files when the full computation takes days; dependencies and manifest the codechecker had to add.
  - [_Report 9: impact of non-pharmaceutical interventions (NPIs) to reduce COVID-19 mortality and healthcare demand. March 16, 2020._](https://doi.org/10.25561/77482)

    CODECHECK certificate 2020-010: <https://doi.org/10.5281/zenodo.3865491>

    _Look at this for:_ a large simulation run on an HPC cluster, and how to document differences between original and reproduced numbers.
  - [_Driftage: a multi-agent system for concept drift detection and an application on electromyography_](https://doi.org/10.1093/gigascience/giab030)
    (Uses MyBinder)

    CODECHECK certificate 2020-024: <https://doi.org/10.5281/zenodo.4964880>

    _Look at this for:_ a MyBinder link that made the check take a few minutes.
- GIScience/Geography/Geoinformatics 🌏🌎🌍
  - [_Progress in the R ecosystem for representing and handling spatial data_](https://doi.org/10.1007/s10109-020-00336-0)

    CODECHECK certificate 2020-017: <https://doi.org/10.5281/zenodo.4003848>

    _Look at this for:_ a README listing data, script, and outputs; separately saved figures; captured console output for comparison.
  - [_Geographically Weighted Regressions in educational planning_](https://www.iiep.unesco.org/en/publication/geographically-weighted-regressions-prioritizing-educational-planning-policies-and-interventions)
    (R and QGIS)

    CODECHECK certificate 2022-001: <https://doi.org/10.5281/zenodo.6040066>

    _Look at this for:_ a video documenting manual GIS steps; data available on request; Windows-specific paths.
  - [_Is it safe to be attractive? Disentangling the influence of streetscape features on the perceived safety and attractiveness of city streets_](https://doi.org/10.5194/agile-giss-4-8-2023)
    (web app, Jupyter notebook)

    CODECHECK certificate 2023-008: <https://doi.org/10.17605/OSF.IO/AQGXR>

    _Look at this for:_ a web application started with one `docker-compose` command; anonymised data shared after ethics approval.
  - [_Urban Sound Mapping for Wayfinding - A theoretical Approach and an empirical Study_](https://doi.org/10.5194/agile-giss-4-9-2023)
    (R and QGIS)

    CODECHECK certificate 2023-001: <https://doi.org/10.17605/OSF.IO/C7VX3>

    _Look at this for:_ why to map data files to figures and tables, and to script aggregation steps instead of doing them in a spreadsheet.
  - [_Road Network Mapping from Multispectral Satellite Imagery: Leveraging Deep Learning and Spectral Bands_](https://doi.org/10.5194/agile-giss-5-6-2024)
    (Python with Conda, data subset)

    CODECHECK certificate 2024-013: <https://doi.org/10.17605/OSF.IO/TXGZV>

    _Look at this for:_ a small preprocessed data subset in place of a 100 GB dataset; CPU-only reproduction of a GPU workflow.
  - [_The Impact of Traffic Lights on Modal Split and Route Choice: A use-case in Vienna_](https://doi.org/10.5194/agile-giss-5-4-2024)
    (Python, with requirements.txt by codechecker)

    CODECHECK certificate 2024-012: <https://doi.org/10.17605/OSF.IO/W42AD>

    _Look at this for:_ published intermediate results that allow checking later steps without re-running a 16-hour step.
  - [_Developing a city-specific walkability index through a participatory approach_](https://doi.org/10.5194/agile-giss-5-2-2024)
    (mixed methods; QGIS and Python)

    CODECHECK certificate 2024-009: <https://doi.org/10.17605/OSF.IO/CSB7R>

    _Look at this for:_ how manual preprocessing limits a check to part of the workflow.
  - [_Knowledge-Based Identification of Urban Green Spaces: Allotments_](https://doi.org/10.5194/agile-giss-5-8-2024)
    (R, proprietary GIS)

    CODECHECK certificate 2024-008: <https://doi.org/10.17605/OSF.IO/3NBJW>

    _Look at this for:_ a sample dataset and an ArcGIS project package when input data is not freely available; undocumented memory requirements.
- Archaeology ⛏️🗿
  - [_The application of Local Indicators for Categorical Data (LICD) to explore spatial dependence in archaeological spaces_](https://doi.org/10.1016/j.jas.2020.105306)

    CODECHECK certificate 2020-025: <https://doi.org/10.5281/zenodo.4279275>

    _Look at this for:_ a README that explains what each script needs and creates.
- _Your scientific discipline here..._
  - **[Get involved!](/get-involved)**
{:.full-width}
