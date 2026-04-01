---
title: "Scorecards"
description: "Automatically evaluate every service against engineering standards and produce a health grade from A to F in Krado One."
---

# Scorecards

Scorecards automatically evaluate every service in your catalog against a set of engineering standards and produce a letter grade from A to F. They help your organization maintain consistent service quality by surfacing gaps in documentation, observability, ownership, and operational readiness.

## How to Access

Navigate to **DevX Portal > Scorecards** from the left sidebar.

## How Scoring Works

Each scorecard consists of a set of rules. Every rule checks a specific attribute of a service, such as:

- Does the service have a runbook?
- Are SLOs defined?
- Is the service assigned to a team?
- Does the service have a repository URL?
- Are deployment environments configured?

Each rule carries a configurable weight. The final score is a weighted average of all passing rules, mapped to a letter grade (A through F).

## Viewing the Leaderboard

The scorecards page displays a ranked list of all services, sorted by their score. This leaderboard encourages teams to keep their service metadata complete and up to date. Services with lower grades can be prioritized for improvement.

## Reviewing a Service Scorecard

1. Open the **Scorecards** page.
2. Click any service in the leaderboard to view its individual rule breakdown.
3. Review which rules pass and which fail, along with details on what the specific gap is.
4. Use this information to prioritize improvements for that service.

## Managing Scoring Rules

Administrators can view and customize the built-in scoring rules:

1. Navigate to **Portal Config > Scorecard Rules**.
2. Review the existing rules and their weights.
3. Adjust weights to reflect your organization's priorities.
4. Add new custom rules as needed.

Changes to rules will recalculate scores for all services on the next evaluation cycle.

![Scorecards leaderboard showing services ranked by health grade](/screenshots/devx-scorecards.png)
