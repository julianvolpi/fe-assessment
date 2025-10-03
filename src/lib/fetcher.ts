import type { PageDocument } from "@/types/blocks";

export async function fetchPage(slug: string): Promise<PageDocument> {
  const res = await fetch(`/api/content/page/${slug}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load page: ${slug}`);
  return res.json();
}
