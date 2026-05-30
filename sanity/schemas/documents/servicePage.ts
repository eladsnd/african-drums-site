import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicePage',
  title: 'דף שירות',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'סוג (קישור בתפריט)',
      type: 'string',
      options: {
        list: [
          {title: 'סדנאות → /workshops', value: 'workshops'},
          {title: 'הופעות → /performances', value: 'performances'},
          {title: 'בר מצווה → /bar-mitzvah', value: 'bar-mitzvah'},
          {title: 'בתי ספר → /schools', value: 'schools'},
          {title: 'צרכים מיוחדים → /special', value: 'special'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'title', title: 'כותרת', type: 'string'}),
    defineField({name: 'intro', title: 'משפט פתיחה (מתחת לכותרת)', type: 'text'}),
    defineField({name: 'body', title: 'תיאור מלא', type: 'text'}),
    defineField({
      name: 'heroImage',
      title: 'תמונת באנר',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'images',
      title: 'תמונות להצגה',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'caption', title: 'כיתוב', type: 'string'}],
        },
      ],
    }),
    defineField({name: 'order', title: 'סדר בתפריט', type: 'number'}),
    defineField({
      name: 'ctaLabel',
      title: 'טקסט כפתור וואטסאפ',
      type: 'string',
      initialValue: 'דברו עם שלומי בוואטסאפ',
    }),
  ],
  orderings: [{title: 'סדר', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {
    select: {title: 'title', slug: 'slug'},
    prepare: ({title, slug}) => ({title: title || slug, subtitle: slug}),
  },
})
