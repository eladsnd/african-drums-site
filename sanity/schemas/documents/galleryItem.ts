import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryItem',
  title: 'פריט גלריה',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'סוג',
      type: 'string',
      options: {list: [{title: 'תמונה', value: 'image'}, {title: 'וידאו', value: 'video'}]},
    }),
    defineField({name: 'image', title: 'תמונה', type: 'image', hidden: ({parent}) => parent?.type === 'video'}),
    defineField({name: 'videoUrl', title: 'קישור וידאו (YouTube embed)', type: 'url', hidden: ({parent}) => parent?.type === 'image'}),
    defineField({name: 'caption', title: 'כיתוב', type: 'string'}),
    defineField({name: 'order', title: 'סדר', type: 'number'}),
  ],
  orderings: [{title: 'סדר', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
})
