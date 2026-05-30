import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'אודות',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'כותרת', type: 'string'}),
    defineField({name: 'bio', title: 'ביוגרפיה', type: 'text'}),
    defineField({name: 'portrait', title: 'תמונת פרופיל', type: 'image'}),
  ],
})
