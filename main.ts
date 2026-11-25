// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence (152 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Councilman Webb's ordinance requires every crypto wallet to register by Friday; his own filing arrived as a .pages file nobody in the building can open.";

if (ENTRY.length < 1 || ENTRY.length > 320) {
  throw new Error(`entry must be 1-320 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const text = ENTRY.endsWith("\n") ? ENTRY : ENTRY + "\n";
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} bytes to ${join(outDir, "entry.txt")}`);
