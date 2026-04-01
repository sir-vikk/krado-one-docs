---
title: "AI Chat (Runbook Assistant)"
description: "Use natural language to find and execute the right runbook with the AI-powered assistant in Krado One."
---

# AI Chat (Runbook Assistant)

The AI Chat is an intelligent assistant that lets you describe what you need in plain language. It finds the most appropriate runbook, explains its reasoning, and can execute the runbook on your behalf.

## How to Access

Navigate to **Runbook Portal > AI Chat** from the left sidebar.

## Using the AI Assistant

1. Type your query in natural language. For example:
    - "Check the health of the payments service"
    - "Restart the staging database"
    - "What runbooks do we have for Kubernetes troubleshooting?"

2. The assistant searches all available runbooks by name, description, and tags.

3. It presents the best matching runbook along with a confidence explanation of why it was selected.

4. Review the suggestion and either:
    - **Confirm** to execute the runbook immediately
    - **Ask for alternatives** if the suggestion does not match your intent

## Asking Follow-Up Questions

Each conversation is maintained as a session. The assistant remembers previous messages in the current session, so you can:

- Ask follow-up questions about results from a previous runbook execution
- Refine your request if the first suggestion was not what you needed
- Chain multiple operations together in a single conversation

## Prerequisites

The AI Chat requires an OpenAI connection configured under **Portal Config > AI Settings**. If no AI configuration is present, the Chat tab will be disabled.

![AI Chat interface showing a natural language query and runbook suggestion](/screenshots/runbook-ai-chat.png)
