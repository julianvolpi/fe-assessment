import { NextResponse } from "next/server";
import { getPageBySlug } from "@/lib/content/service";

type Params = { slug: string };

export async function GET(_req: Request, ctx: { params: Promise<Params> }) {
  const { slug } = await ctx.params;

  try {
    const page = await getPageBySlug(slug);

    return NextResponse.json(page, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
