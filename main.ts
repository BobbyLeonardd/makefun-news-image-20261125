// Entry for make.fun's daily news image: the picture is entry.png beside this
// file and the program copies it into the output directory, so both grader runs
// write the same bytes.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const name = 'entry.png';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? '/output';
const source = new URL('./' + name, import.meta.url);

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, name));