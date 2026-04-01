---
title: "Customers"
description: "Add and manage customer records, link them to incidents, and track SLA impact in Krado One."
---

# Customers

The Customers section lets you maintain a registry of your customer accounts. By linking customers to incidents, you can track which customers are affected during outages, generate targeted communications, and monitor SLA compliance.

## How to Access

Navigate to **DRM Portal > Customers** from the left sidebar.

## Adding a Customer

1. Click **+ Add Customer** at the top of the customers list.
2. Fill in the customer details:

    | Field | Description |
    |-------|-------------|
    | Name | The customer or account name |
    | Email | The primary contact email address |
    | Plan / Tier | The subscription tier (used for SLA prioritization) |
    | Notes | Internal notes about the customer, such as special requirements |

3. Click **Save** to add the customer to your registry.

## Linking Customers to Incidents

When creating or editing an incident, use the **Affected Customers** section to select one or more customers. Once linked:

- The incident detail page displays the customer impact count
- You can track per-customer status during the incident
- Customer-specific communications can be generated based on the linkage

## SLA Tracking

Customers with a defined plan or tier are prioritized during incidents. Use the customer's tier information in combination with incident severity to identify potential SLA breaches and ensure your highest-priority accounts receive timely updates.

## Searching for Customers

Use the search bar at the top of the customers list to quickly find a customer by name or email address.

![Customers list with plan tiers and linked incidents](/screenshots/drm-customers.png)
