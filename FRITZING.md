# Fritzing — wiring diagrams and PCB design

Fritzing is a desktop application for drawing **breadboard**, **schematic**, and **PCB** views of electronic circuits. It is a good fit when you want a polished, printable diagram of an Arduino on a breadboard with jumper wires, LEDs, buttons, and sensors.

## File formats

| Extension | Description |
|-----------|-------------|
| `.fzz` | Project archive (ZIP) — **commit this** as the editable source |
| `.fz` | Single view file (XML inside `.fzz`) |
| `.fzp` | Custom part definition |
| `.svg` / `.png` | Exported images for README and docs |

## Three views

1. **Breadboard** — realistic wiring on a solderless breadboard (best for documentation photos-style diagrams).
2. **Schematic** — standard electrical schematic symbols.
3. **PCB** — board layout if you plan to manufacture a custom PCB.

## When to use Fritzing in this repo

| Use Fritzing | Prefer something else |
|--------------|----------------------|
| Static diagrams for GitHub / PDF docs | **Wokwi** — simulation and diagrams in the editor ([WOKWI.md](WOKWI.md)) |
| Custom PCB design | KiCad for advanced PCB work |
| Export SVG/PNG for `schematics/` | Photos of real builds in `photos/` |

Suggested layout per project:

```text
projects/NN-name/schematics/
├── NN-name.fzz                 # editable source
└── NN-name-breadboard.svg      # export for docs
```

Link the export from `docs/wiring.md` so the diagram renders on GitHub without installing Fritzing.

## Workflow

1. Install [Fritzing](https://fritzing.org/) (check current license/pricing on their site).
2. Create a new sketch; add **Arduino Uno R3** (or your board) from the parts bin.
3. Switch to **Breadboard** view; place components and draw wires.
4. Save as `projects/NN-name/schematics/NN-name.fzz`.
5. Export **SVG** or **PNG** into the same folder.
6. Reference the export in `docs/wiring.md` and keep the pin table in sync with your `.ino` code.

## Limitations

- Fritzing files are **not** simulators — they document wiring only.
- The `.fzz` XML format is complex; auto-generating valid files from code descriptions is unreliable.
- Part library versions can differ between Fritzing installs — always open and verify after cloning.

## AI-assisted workflow

In this repo, the agent can help with:

- Pin tables and `docs/wiring.md` text
- Step-by-step Fritzing instructions (“place LED anode on D13 through 220 Ω…”)
- Export filenames and folder structure

For generated diagrams and simulation, use **Wokwi** instead ([WOKWI.md](WOKWI.md)).

## Further reading

- [Fritzing homepage](https://fritzing.org/)
- [Fritzing learning center](https://fritzing.org/learning/)
