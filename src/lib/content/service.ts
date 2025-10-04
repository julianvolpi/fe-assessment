import "server-only";
import { PageSchema } from "@/lib/content/schema";
import { homePage } from "./data/home";
import type { PageDocument } from "@/types/blocks";

export async function getPageBySlug(slug: string): Promise<PageDocument> {
  // In the real world: fetch from CMS/DB here.
  const doc = slug === "home" ? homePage : null;
  if (!doc) throw new Error("Page not found");

  // Validate before returning
  const parsed = PageSchema.parse(doc);
  return parsed;
}
