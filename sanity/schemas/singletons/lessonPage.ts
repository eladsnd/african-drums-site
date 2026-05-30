import {defineField, defineType} from 'sanity'

const scheduleEntry = defineType({
  name: 'scheduleEntry',
  title: 'מועד שיעור',
  type: 'object',
  fields: [
    defineField({name: 'day', title: 'יום', type: 'string'}),
    defineField({name: 'time', title: 'שעה', type: 'string'}),
    defineField({name: 'location', title: 'מיקום', type: 'string'}),
    defineField({name: 'note', title: 'הערה', type: 'string'}),
  ],
})

const lessonType = defineType({
  name: 'lessonType',
  title: 'סוג שיעור',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'כותרת', type: 'string'}),
    defineField({name: 'description', title: 'תיאור', type: 'text'}),
    defineField({name: 'quote', title: 'ציטוט', type: 'string'}),
    defineField({name: 'schedules', title: 'מועדים', type: 'array', of: [{type: 'scheduleEntry'}]}),
  ],
})

const pricingTier = defineType({
  name: 'pricingTier',
  title: 'מחיר',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'תיאור', type: 'string'}),
    defineField({name: 'price', title: 'מחיר', type: 'string'}),
  ],
})

export default defineType({
  name: 'lessonPage',
  title: 'שיעורים',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'כותרת דף', type: 'string'}),
    defineField({name: 'intro', title: 'מבוא', type: 'text'}),
    defineField({name: 'registrationUrl', title: 'קישור הרשמה', type: 'url'}),
    defineField({name: 'registrationLabel', title: 'טקסט כפתור הרשמה', type: 'string'}),
    defineField({name: 'lessonTypes', title: 'סוגי שיעורים', type: 'array', of: [{type: 'lessonType'}]}),
    defineField({name: 'pricing', title: 'מחירון', type: 'array', of: [{type: 'pricingTier'}]}),
    defineField({name: 'pricingNote', title: 'הערת מחירון', type: 'text'}),
  ],
})

export {scheduleEntry, lessonType, pricingTier}
