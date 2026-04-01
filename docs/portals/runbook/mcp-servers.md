---
title: "MCP Servers"
description: "Register and manage MCP (Model Context Protocol) servers to make their tools available as runbook steps in Krado One."
---

# MCP Servers

MCP (Model Context Protocol) servers are HTTP tool servers that expose callable tools. By registering MCP servers in Krado One, their tools become available as step types inside any runbook, extending your automation capabilities.

## How to Access

Navigate to **Runbook Portal > MCP Servers** from the left sidebar.

## Registering an MCP Server

1. Click **+ Add Server** at the top of the MCP servers list.
2. Fill in the server details:

    | Field | Description |
    |-------|-------------|
    | Name | A display name for the server (e.g., "Internal Toolbox") |
    | Description | A summary of what tools this server provides |
    | URL | The base URL of the MCP server (e.g., `http://mcp.internal:8000`) |
    | Auth Type | None, API Key, or Bearer Token |
    | Auth Config | The key or token value for the selected auth type |

3. Click **Save** to register the server.

## Testing the Connection

After registering a server, verify that it is reachable:

1. Find the server in the list.
2. Click the **Test** button.
3. Krado One sends a health and tool discovery probe to the server.
4. The result shows whether the server is reachable and, if so, which tools it exposes.

If the test fails, verify the URL and authentication credentials.

## Using MCP Tools in Runbooks

Once a server is registered and its connection verified, its tools are available in the runbook builder:

1. Open the runbook builder (create a new runbook or edit an existing one).
2. Add a new step and select **MCP** as the step type.
3. Choose the registered MCP server from the dropdown.
4. Select the tool you want to call from the server's tool list.
5. Provide the required arguments as a JSON object.
6. Save the step.

When the runbook executes, the MCP step calls the selected tool and stores the response as the step output, which can be referenced by subsequent steps using condition logic.

![MCP Servers list showing registered servers with connection status](/screenshots/runbook-mcp-servers.png)
