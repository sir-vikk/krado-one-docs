---
title: "Dependency Graph"
description: "Visualize all services and their upstream and downstream dependencies in an interactive graph to understand blast radius in Krado One."
---

# Dependency Graph

The Dependency Graph renders all services from your catalog as an interactive node graph, with edges showing upstream and downstream relationships. It is the fastest way to understand the blast radius of a change or incident.

## How to Access

Navigate to **DevX Portal > Dependency Graph** from the left sidebar.

## Interacting with the Graph

The graph supports the following interactions:

| Action | How |
|--------|-----|
| Pan | Click and drag on the canvas |
| Zoom | Use the scroll wheel or pinch gesture |
| Select a service | Click a node to highlight it and its direct dependencies |
| Open service detail | Double-click a node to navigate to that service's detail page |

## Understanding the Color Coding

Nodes in the graph are color-coded based on their scorecard health grade:

| Color | Meaning |
|-------|---------|
| Green | The service has an A or B health grade |
| Yellow | The service has a C health grade |
| Red | The service has a D or F health grade |
| Grey | The service has not been scored yet |

This color coding lets you quickly identify services that may be at higher risk due to gaps in documentation, ownership, or operational readiness.

## Populating the Graph

Dependencies are configured per service in the **Service Detail > Dependencies** tab. To add dependencies:

1. Open a service from the Service Catalog.
2. Navigate to the **Dependencies** tab.
3. Select the upstream services that this service calls.
4. Save your changes.

The graph updates automatically as dependencies are added or removed.

![Interactive dependency graph with color-coded service nodes](/screenshots/devx-dependency-graph.png)
