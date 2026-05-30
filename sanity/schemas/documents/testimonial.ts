import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'המלצה',
  type: 'document',
  fields: [
    defineField({name: 'quote', title: 'ציטוט', type: 'text', validation: (r) => r.required()}),
    defineField({name: 'author', title: 'שם', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'role', title: 'תפקיד/תיאור', type: 'string'}),
    defineField({name: 'order', title: 'סדר', type: 'number'}),
  ],
  orderings: [{title: 'סדר', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
})
