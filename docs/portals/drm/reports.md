---
title: "Reports and AI Summaries"
description: "Generate AI-powered incident reports over a selected time range for executive briefings, postmortems, and customer communications in Krado One."
---

# Reports and AI Summaries

The Reports section generates human-readable summaries of your incidents over a selected time range. Powered by AI, these reports can be used as executive briefings, postmortem starters, or the basis for customer communications.

## How to Access

Navigate to **DRM Portal > Reports** from the left sidebar.

## Generating a Report

1. Select a **date range** using the date picker. You can choose a preset range (e.g., "Last 7 days") or specify a custom start and end date.
2. Click **Preview** to see which incidents fall within the selected range.
3. Review the list of matched incidents to confirm the scope of your report.
4. Click **Generate** to create the AI-powered summary.
5. The generated report is saved automatically and appears in the reports list for future reference.

## What a Report Contains

A generated report typically includes the following sections:

- **Incident count by severity** -- a breakdown of how many Critical, High, Medium, and Low incidents occurred
- **Top affected products** -- which products experienced the most impact
- **Notable incidents** -- brief descriptions of the most significant events
- **Common root causes and themes** -- patterns identified across multiple incidents
- **Recommended preventive actions** -- suggestions to reduce future incidents

## Interpreting Your Results

Use the report to identify trends and recurring problems. If a specific product or root cause appears repeatedly, consider scheduling focused remediation work or updating your runbooks to address the pattern.

## Prerequisites

AI-powered report generation requires an OpenAI connection configured under **Portal Config > AI Settings**. If no AI configuration is present, the Generate button will be disabled and a prompt to configure it will be displayed.

![Reports page showing date range selection and generated AI summary](/screenshots/drm-reports.png)
