# Cursor configuration

This directory configures how the Cursor AI agent works in this repository.

## Structure

```
.cursor/
├── README.md          # This file
├── rules/             # Persistent agent context (.mdc files)
└── skills/            # On-demand workflows (SKILL.md per skill)
```

## Rules (`rules/`)

Rules are `.mdc` files with YAML frontmatter. They teach the agent repo conventions and domain patterns.

| Field | Purpose |
|-------|---------|
| `description` | Short summary shown in the rule picker |
| `globs` | File pattern — rule applies when matching files are open |
| `alwaysApply` | If `true`, applies to every session |

**Guidelines:**

- One concern per rule file; keep under ~50 lines when possible.
- Project-specific details belong in `projects/NN-name/docs/`, not in rules.
- Use `alwaysApply: true` only for repo-wide conventions.

### Adding a new rule

1. Create `.cursor/rules/your-rule-name.mdc`.
2. Add frontmatter with `description` and either `globs` or `alwaysApply`.
3. Write actionable, concise instructions with examples where helpful.

## Skills (`skills/`)

Skills are directories containing a `SKILL.md` file. They guide multi-step workflows the agent runs on request.

**Guidelines:**

- Use lowercase hyphenated directory names (e.g. `new-embedded-project`).
- Write descriptions in third person, including both **what** the skill does and **when** to use it.
- Keep `SKILL.md` concise; put long templates in sibling files (e.g. `project-template.md`).

### Adding a new skill

1. Create `.cursor/skills/skill-name/SKILL.md`.
2. Add frontmatter: `name`, `description`.
3. Document step-by-step instructions and link to supporting files.

## Where knowledge lives

| Scope | Location |
|-------|----------|
| Repo-wide conventions | `.cursor/rules/` |
| Reusable workflows | `.cursor/skills/` |
| Project-specific docs | `projects/NN-name/docs/` |
| Quick start per project | `projects/NN-name/README.md` |
