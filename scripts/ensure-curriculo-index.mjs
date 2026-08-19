import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const outDirectory = resolve("out");
const curriculumDirectory = resolve(outDirectory, "curriculo");

await mkdir(curriculumDirectory, { recursive: true });
await copyFile(
  resolve(outDirectory, "curriculo.html"),
  resolve(curriculumDirectory, "index.html"),
);
