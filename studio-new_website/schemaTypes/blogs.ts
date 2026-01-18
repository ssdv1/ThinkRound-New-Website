import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string', // Changed from 'reference' to 'string'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description:
        'A short summary of the post. If left empty, the first sentence of the body will be used.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block', // This handles paragraphs, headers, and lists
        },
        {
          type: 'image', // This allows images between blocks
          options: {
            hotspot: true, // Enables the cropping tool in Sanity Studio
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility.',
            },
          ],
        },
      ],
    }),
  ],
})
