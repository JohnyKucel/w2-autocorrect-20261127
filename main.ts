import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I texted Grandma 'I love you so much' — autocorrect sent 'I love you so mulch.' She wrote back: 'Thanks, dear — the garden needed it.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
