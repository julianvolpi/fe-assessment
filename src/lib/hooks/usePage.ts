"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";
import { fetchPage } from "@/lib/fetcher";
import type { PageDocument } from "@/types/blocks";

export function usePage(slug: string) {
  return useQuery<PageDocument>({
    queryKey: queryKeys.page(slug),
    queryFn: () => fetchPage(slug),
    staleTime: 60_000,
  });
}
