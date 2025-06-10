import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from '@sanity/client'

// 1) configure the client
export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2025-06-09",
})

const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return imageBuilder.image(source)
}