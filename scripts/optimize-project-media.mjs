import { execFile } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const PROJECTS_DIR = path.resolve("src/assets/projects");
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const VIDEO_EXTENSIONS = new Set([".mp4"]);
const IMAGE_QUALITY = "82";
const VIDEO_CRF = "26";
const AUDIO_BITRATE = "96k";

const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const force = args.has("--force");
const keepOriginals = args.has("--keep-originals");

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

async function runFfmpeg(ffmpegArgs) {
  if (dryRun) {
    console.log(`dry-run: ffmpeg ${ffmpegArgs.map((arg) => `"${arg}"`).join(" ")}`);
    return;
  }

  await execFileAsync("ffmpeg", ffmpegArgs, { maxBuffer: 1024 * 1024 * 20 });
}

async function convertImage(filePath) {
  const parsed = path.parse(filePath);
  const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);
  const outputExists = await exists(outputPath);

  if (!force && outputExists) {
    console.log(`skip image, WebP exists: ${path.relative(PROJECTS_DIR, outputPath)}`);
  } else {
    console.log(`convert image: ${path.relative(PROJECTS_DIR, filePath)}`);
    await runFfmpeg([
      "-y",
      "-i",
      filePath,
      "-c:v",
      "libwebp",
      "-quality",
      IMAGE_QUALITY,
      outputPath,
    ]);
  }

  if (!keepOriginals && !dryRun && (await exists(outputPath))) {
    await fs.unlink(filePath);
    console.log(`removed original: ${path.relative(PROJECTS_DIR, filePath)}`);
  }
}

async function compressVideo(filePath) {
  const parsed = path.parse(filePath);
  const tempPath = path.join(parsed.dir, `${parsed.name}.optimized.tmp.mp4`);
  console.log(`compress video: ${path.relative(PROJECTS_DIR, filePath)}`);

  await runFfmpeg([
    "-y",
    "-i",
    filePath,
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    VIDEO_CRF,
    "-movflags",
    "+faststart",
    "-c:a",
    "aac",
    "-b:a",
    AUDIO_BITRATE,
    tempPath,
  ]);

  if (dryRun) {
    return;
  }

  const [originalStats, compressedStats] = await Promise.all([
    fs.stat(filePath),
    fs.stat(tempPath),
  ]);

  if (compressedStats.size < originalStats.size) {
    await fs.rename(tempPath, filePath);
    console.log(
      `replaced video: ${path.relative(PROJECTS_DIR, filePath)} (${formatBytes(
        originalStats.size,
      )} -> ${formatBytes(compressedStats.size)})`,
    );
  } else {
    await fs.unlink(tempPath);
    console.log(
      `kept original video: ${path.relative(PROJECTS_DIR, filePath)} (${formatBytes(
        originalStats.size,
      )} <= ${formatBytes(compressedStats.size)})`,
    );
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

async function main() {
  if (!(await exists(PROJECTS_DIR))) {
    throw new Error(`Projects media folder not found: ${PROJECTS_DIR}`);
  }

  await execFileAsync("ffmpeg", ["-version"], { maxBuffer: 1024 * 1024 });

  const files = await walk(PROJECTS_DIR);
  const images = files.filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()));
  const videos = files.filter((file) => {
    const parsed = path.parse(file);
    return (
      VIDEO_EXTENSIONS.has(parsed.ext.toLowerCase()) &&
      !parsed.name.endsWith("-optimized")
    );
  });

  for (const image of images) {
    await convertImage(image);
  }

  for (const video of videos) {
    await compressVideo(video);
  }

  console.log(
    `done: processed ${images.length} image(s) and ${videos.length} video(s) in ${PROJECTS_DIR}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
