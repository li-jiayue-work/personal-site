import { readFileSync, readdirSync } from "fs";
import { join } from "path";

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  result: string;
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
  dataset?: string;
  toolchain?: string;
  conclusion?: string;
  insights?: string[];
  charts?: string[];
  body: string;
}

const contentDir = join(process.cwd(), "content", "projects");

export function getAllProjects(): ProjectMeta[] {
  try {
    const files = readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
    return files.map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = readFileSync(join(contentDir, file), "utf-8");
      const { frontmatter, body } = extractFrontmatter(raw);
      return { slug, ...frontmatter, body } as ProjectMeta;
    });
  } catch {
    return [];
  }
}

export function getProject(slug: string): ProjectMeta | null {
  try {
    const raw = readFileSync(join(contentDir, `${slug}.mdx`), "utf-8");
    const { frontmatter, body } = extractFrontmatter(raw);
    return { slug, ...frontmatter, body } as ProjectMeta;
  } catch {
    return null;
  }
}

function extractFrontmatter(raw: string): {
  frontmatter: Record<string, unknown>;
  body: string;
} {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { frontmatter: {}, body: raw };
  const body = raw.slice(match[0].length).trim();
  const lines = match[1].split("\n");
  const meta: Record<string, unknown> = {};
  for (const line of lines) {
    const [key, ...rest] = line.split(":");
    if (key && rest.length) {
      let val: string | string[] = rest.join(":").trim();
      if (key === "tech" || key === "insights" || key === "charts") {
        val = val
          .replace(/[\[\]]/g, "")
          .split(",")
          .map((s) => s.trim().replace(/"/g, ""));
      }
      meta[key.trim()] = val;
    }
  }
  return { frontmatter: meta, body };
}
