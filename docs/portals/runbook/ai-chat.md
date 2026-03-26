---
sidebar_position: 5
---

# AI Chat (Runbook Assistant)

**Route:** `/rb/chat` · **Edition:** Pro+

The AI Chat lets you describe what you need in plain language and the assistant selects the most appropriate runbook and executes it — or walks you through the steps interactively.

![Runbook AI Chat](/assets/screenshots/runbook/chat.png)

## How it works

1. Type your query (e.g. "check the health of the payments service")
2. The assistant searches all runbooks by name, description, and tags using an LLM
3. It shows the best matching runbook with a confidence explanation
4. You can confirm execution or ask for a different runbook

## Configuration

AI Chat uses the OpenAI connection from **Portal Config → AI Settings**. If no AI config is present, the Chat tab is disabled.

## Session history

Each conversation is a session. Previous messages in the session are included in context so the assistant can refer back to earlier results when you ask follow-up questions.
