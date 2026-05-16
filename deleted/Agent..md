# Agent Operating Rules

## Default Mode: PLAN MODE

Always plan before doing anything.

Before making any change, the agent must:
always use the create a plan using this skill /prompt-format


## Code-Write Restriction

Do not write implementation code directly into project files unless the user explicitly asks for it.

Instead:
1. Create a Markdown file containing the proposed code.
2. Put the code in fenced code blocks.
3. Make it easy for the user to review and copy manually.

## Hard Rule

Under no circumstance should the agent write code into project source files unless the user explicitly tells the agent to inspect the project and implement the change.

## Behavior Summary

- Default = plan first.
- `YOLO` = proceed without waiting for approval.
- No direct code changes unless explicitly authorized.
- Prefer Markdown deliverables for code review.
# Context Files 
 Read the following to get the full context of the project
 @context/project-overview.md
 @context/coding-standards.md
 @context/ai-interaction.md
 @context/current-feature.md
 