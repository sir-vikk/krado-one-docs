---
title: "Golden Path (Self-Service Provisioning)"
description: "Create reusable service templates and let developers provision new services through a guided self-service workflow in Krado One."
---

# Golden Path (Self-Service Provisioning)

Golden Path enables platform teams to define reusable service templates and allows developers to provision new services from those templates in just a few clicks -- without needing to understand the underlying infrastructure.

## How to Access

Navigate to **DevX Portal > Golden Path** from the left sidebar.

## Creating a Template (Admins)

Platform administrators define the templates that developers will use to provision services.

1. Click **+ New Template** at the top of the templates list.
2. Fill in the template details:

    | Field | Description |
    |-------|-------------|
    | Name | A display name for the template (e.g., "Go Microservice") |
    | Description | What kind of service this template creates |
    | Variables | Input fields the developer will fill in during provisioning (e.g., service name, team, region) |
    | Workflow | The automation workflow that handles the actual provisioning |

3. Click **Save** to publish the template.

Templates are only editable by platform administrators. Developers see only the provisioning form.

![Golden Path template list showing available service templates](/screenshots/devx-golden-path-templates.png)

## Provisioning a Service (Developers)

1. Browse the available templates on the Golden Path page.
2. Click on the template that matches the type of service you want to create.
3. Fill in the requested variables (e.g., service name, owning team, deployment region).
4. Click **Provision** to start the automated provisioning workflow.
5. You will be redirected to the **Provisioning Status** page, which updates in real time as the workflow progresses.

![Provisioning form with variables and the Provision button](/screenshots/devx-golden-path-provision.png)

## Viewing Provisioning History

The **History** tab on the Golden Path page shows all past provisioning requests. Each entry includes:

- The template that was used
- The developer who initiated the request
- Current status (Running, Completed, or Failed)
- Timestamp of the request

Use this view for auditing or to debug failed provisioning runs.
