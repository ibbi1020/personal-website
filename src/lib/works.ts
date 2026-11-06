import { getCollection, type CollectionEntry } from "astro:content";

export type Work = CollectionEntry<"works">;

export async function getWorks() {
  const works = await getCollection("works");
  return works
    .filter((work) => !work.data.draft)
    .sort((a, b) => a.data.order - b.data.order);
}
