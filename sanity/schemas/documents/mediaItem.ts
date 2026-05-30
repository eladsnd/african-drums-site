import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mediaItem',
  title: 'פריט תקשורת',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'כותרת', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'url', title: 'קישור', type: 'url', validation: (r) => r.required()}),
    defineField({name: 'source', title: 'מקור (עיתון, רדיו...)', type: 'string'}),
  ],
})
