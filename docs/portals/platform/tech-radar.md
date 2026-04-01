---
title: "Tech Radar"
description: "Track your organization's technology adoption stance across quadrants and rings to guide engineering decisions in Krado One."
---

# Tech Radar

The Tech Radar helps your organization visualize and communicate its technology adoption stance. Technologies are organized into quadrants and placed on rings that indicate whether they should be adopted, evaluated, or phased out.

## How to Access

Navigate to **Platform Portal > Tech Radar** from the left sidebar.

## Understanding the Quadrants

The radar is divided into four quadrants, each representing a category of technology:

| Quadrant | Examples |
|----------|---------|
| **Languages and Frameworks** | Go, React, Python, gRPC |
| **Platforms** | Kubernetes, AWS EKS, Cloudflare |
| **Tools** | Terraform, ArgoCD, Datadog |
| **Techniques** | GitOps, trunk-based development, SLO-based alerting |

## Understanding the Rings

Each item on the radar is placed in one of four rings that indicate the organization's recommended stance:

| Ring | Meaning |
|------|---------|
| **Adopt** | Recommended for broad use across the organization |
| **Trial** | Worth exploring on a specific project before wider adoption |
| **Assess** | Under investigation -- not yet ready for production use |
| **Hold** | Not recommended -- phase out or avoid for new projects |

## Adding an Item to the Radar

1. Click **Add Item** on the Tech Radar page.
2. Provide the following details:
    - **Name** -- the technology name
    - **Quadrant** -- select the appropriate category
    - **Ring** -- select the recommended stance
    - **Description** -- explain why this technology is positioned in the chosen ring
3. Click **Save** to add the item to the radar.

Items can be updated at any time as your organization's stance evolves. Moving an item between rings is a useful way to communicate changes in technology strategy.

![Tech Radar visualization showing quadrants and ring positions](/screenshots/platform-tech-radar.png)
