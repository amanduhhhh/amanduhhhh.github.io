// Loads every .md file in src/writings at build time, parses its frontmatter,
// and exposes them as a sorted list

export interface Writing {
  slug: string;
  title: string;
  date: string;
  description: string;
  body: string;
}

const files = import.meta.glob("../../writings/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw.trim() };

  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    value = value.replace(/^["']|["']$/g, "");
    if (key) data[key] = value;
  }
  return { data, body: match[2].trim() };
}

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

export const writings: Writing[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    const slug = slugFromPath(path);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description ?? "",
      body,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first

export function getWriting(slug: string): Writing | undefined {
  return writings.find((w) => w.slug === slug);
}

export function formatDate(date: string): string {
  if (!date) return "";
  // Parse YYYY-MM-DD as a LOCAL date. `new Date("2023-09-01")` would parse it
  // as UTC midnight and shift back a day in western timezones (off-by-one).
  const [year, month, day] = date.split("-").map(Number);
  const d =
    year && month && day ? new Date(year, month - 1, day) : new Date(date);
  if (isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
