import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
	// Load Markdown files in the src/content/work directory.
	loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		img: z.string(),
		img_alt: z.string().optional(),
	}),
})

const reviews = defineCollection({
		loader: glob({ base: './src/content/reviews', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			publishDate: z.coerce.date(),
			developer: z.string(),
			img: z.string(),
			img_alt: z.string().optional(),
			description: z.string(),
			tags: z.array(z.string()),
		}),
	})

export const collections = {work, reviews};
