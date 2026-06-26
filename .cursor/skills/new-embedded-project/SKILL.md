---
name: new-embedded-project
description: Scaffolds a new numbered embedded project under projects/ with sketch, README, and docs. Use when the user asks to create a new Arduino, ESP32, or robotics project in this repo.
---

# New Embedded Project

## Workflow

Copy this checklist and track progress:

```
- [ ] Step 1: Determine next project ordinal
- [ ] Step 2: Create project directory structure
- [ ] Step 3: Write sketch stub, README, and docs from templates
- [ ] Step 4: Update root README.md project table
```

### Step 1: Determine next ordinal

List `projects/` and find the highest `NN` prefix. Increment by one, zero-padded to two digits.

Example: if `00-blink` and `01-sensor` exist, next is `02`.

### Step 2: Create directory structure

```
projects/NN-name/
├── NN-name.ino
├── README.md
├── diagram.json          # optional — Wokwi circuit
├── wokwi.toml            # optional — Wokwi firmware + [preview] timing
├── schematics/           # preview.png — generate with wokwi-preview skill
└── docs/
    ├── overview.md
    ├── hardware.md
    └── wiring.md
```

Folder name, `.ino` filename, and sketch name must all be `NN-name`.

### Step 3: Fill files from templates

Use [project-template.md](project-template.md) for README and docs content. Replace placeholders:

| Placeholder | Replace with |
|-------------|--------------|
| `NN` | Two-digit ordinal |
| `name` | Kebab-case slug |
| `Title` | Human-readable title |
| `Board` | Target board (e.g. Arduino Uno) |
| `Description` | One-line summary |

Create a minimal `.ino` stub:

```cpp
void setup() {
  // TODO: initialize hardware
}

void loop() {
  // TODO: main loop
}
```

Add optional folders only when the user requests them: `lib/`, `schematics/`, `photos/`, `docs/troubleshooting.md`.

### Step 4: Update root README

Add a row to the project table in the root [README.md](../../README.md):

```markdown
| NN | [NN-name](projects/NN-name/) | Board | Description |
```

Keep rows sorted by ordinal.

## Additional resources

- Full copy-paste templates: [project-template.md](project-template.md)
- Repo conventions: [.cursor/rules/repo-conventions.mdc](../rules/repo-conventions.mdc)
