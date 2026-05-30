import {defineField, defineType} from 'sanity'

const workshop = defineType({
  name: 'workshop',
  title: 'סדנה',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'כותרת', type: 'string'}),
    defineField({name: 'date', title: 'תאריך', type: 'string'}),
    defineField({name: 'location', title: 'מיקום', type: 'string'}),
    defineField({name: 'description', title: 'תיאור', type: 'text'}),
    defineField({name: 'registrationUrl', title: 'קישור הרשמה', type: 'url'}),
  ],
})

export default defineType({
  name: 'workshopsPage',
  title: 'סדנאות',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'כותרת דף', type: 'string'}),
    defineField({name: 'intro', title: 'מבוא', type: 'text'}),
    defineField({
      name: 'upcomingWorkshops',
      title: 'סדנאות קרובות',
      type: 'array',
      of: [{type: 'workshop'}],
    }),
    defineField({name: 'privateTitle', title: 'כותרת סדנאות פרטיות', type: 'string'}),
    defineField({name: 'privateDescription', title: 'תיאור סדנאות פרטיות', type: 'text'}),
    defineField({name: 'privateCtaLabel', title: 'טקסט כפתור', type: 'string'}),
    defineField({name: 'privateCtaUrl', title: 'קישור כפתור', type: 'url'}),
  ],
})

export {workshop}
