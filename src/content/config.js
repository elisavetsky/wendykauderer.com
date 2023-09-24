import { defineCollection, reference, z } from "astro:content";

const artworkCollection = defineCollection({
   type: "content",
	schema: ({ image }) =>
		z.object({
         draft: z.boolean(),
			title: z.string(),
         date: z.date(),
         art_type: z.string(),
         tags: z.array(reference('tags')),
         // featured: z.boolean(),
			// image: image().refine((img) => img.width >= 600, {
			// 	message: "Cover image must be at least 600 pixels wide!",
			// }),
         image: image(),
         main_image_alt: z.string(),
         images: z.array(
            z.object({
               image: image(),
               image_alt: z.string()
            })
         ).optional(),
		}),
});

const tagCollection = defineCollection({
   type: "content",
   schema: z.object({
      title: z.string()
   })
})

const mainHeroCollection = defineCollection({
   schema: ({ image }) =>
		z.object({
			title: z.string(),
         tagline: z.string().optional(),
         image: image(),
         image_alt: z.string()
		}),
})

const bioCollection = defineCollection({
   schema: ({ image }) =>
		z.object({
			heading: z.string().optional(),
         images: z.array(
            z.object({
               image: image(),
               image_alt: z.string()
            })
         ),
		}),
})

export const collections = {
	artwork: artworkCollection,
   tags: tagCollection,
   settings: mainHeroCollection,
   bio: bioCollection
};
