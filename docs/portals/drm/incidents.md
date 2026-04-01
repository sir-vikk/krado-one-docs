---
title: "Incidents"
description: "View, create, and manage incident records with full lifecycle tracking, action items, timelines, and AI-generated summaries in Krado One."
---

# Incidents

The Incidents section is where you manage the full lifecycle of every disaster or operational incident. From initial report through investigation, resolution, and post-mortem, all incident data lives here.

## How to Access

Navigate to **DRM Portal > Incidents** from the left sidebar to view the complete list of all incidents.

## Browsing and Filtering Incidents

The incidents list displays every recorded incident with key details visible at a glance. Each row shows a severity badge, title, affected products, owner, current status, and time since creation.

Use the filters at the top of the list to narrow results:

| Filter | Options |
|--------|---------|
| Status | Open, Investigating, Resolved, Closed |
| Severity | Critical, High, Medium, Low |
| Product | Any product from your product catalog |
| Date range | Custom start and end date picker |
| Search | Full-text search on title and description |

![Incidents list with filters and severity badges](/screenshots/drm-incidents-list.png)

## Creating an Incident

1. Click the **+ Report Incident** button at the top of the incidents list.
2. Fill in the required fields:

    | Field | Description |
    |-------|-------------|
    | Title | A short description of what happened |
    | Severity | Critical, High, Medium, or Low |
    | Status | The initial state (typically Open or Investigating) |
    | Description | A full narrative of the incident -- supports markdown formatting |

3. Optionally, fill in additional fields to provide more context:

    - **Affected Products** -- select one or more products from your catalog
    - **Affected Services** -- specify the services involved
    - **Affected Customers** -- identify impacted customer segments
    - **Root Cause** -- enter an initial hypothesis or confirmed RCA
    - **Action Items** -- add remediation steps with assignees and due dates
    - **Timeline Events** -- log a chronological record of what happened and when

4. Click **Save** to create the incident.

![Create Incident form with required and optional fields](/screenshots/drm-incidents-create.png)

## Managing the Incident Lifecycle

Once an incident is created, move it through the lifecycle stages as your team investigates and resolves the issue:

1. **Open** -- The incident has been reported and acknowledged.
2. **Investigating** -- Your team is actively diagnosing the root cause.
3. **Resolved** -- The root cause has been identified and a fix has been applied.
4. **Closed** -- The post-mortem is complete and a root cause analysis has been filed.

Update the status from the incident detail page by selecting the new status from the status dropdown.

## Incident Detail View

Click any incident row to open the full detail page. Here you will find:

- **Description and RCA** -- the full incident narrative and root cause analysis
- **Timeline** -- a sortable chronological log of events
- **Action Items** -- remediation steps with individual status tracking
- **Affected Products, Services, and Customers** -- all linked entities
- **Comments Thread** -- collaborate with your team directly on the incident
- **AI-Generated Summary** -- an automated summary of the incident (when AI is configured under Portal Config)

![Incident detail view with timeline, action items, and AI summary](/screenshots/drm-incidents-detail.png)

## Using the AI Summary

If your organization has configured AI settings under **Portal Config > AI Settings**, each incident can generate an AI-powered summary. This summary distills the timeline, affected systems, root cause, and action items into a concise briefing suitable for stakeholders or post-mortem documentation.

To generate a summary, open the incident detail page and click **Generate AI Summary**.
