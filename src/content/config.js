import { defineCollection, z } from "astro:content";

const artworkCollection = defineCollection({
   type: "content",
	schema: ({ image }) =>
		z.object({
         draft: z.boolean(),
			title: z.string(),
         date: z.date(),
         art_type: z.string(),
         tags: z.array(z.string()),
         featured: z.boolean(),
			// image: image().refine((img) => img.width >= 600, {
			// 	message: "Cover image must be at least 600 pixels wide!",
			// }),
         images: z.array(
            z.object({
               image: image(),
               image_alt: z.string()
            })
         ),
         description: z.string(),
		}),
});

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
   settings: mainHeroCollection,
   bio: bioCollection
};
