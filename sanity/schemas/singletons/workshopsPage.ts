import {defineField, defineType} from 'sanity'

const workshop = defineType({
  name: 'workshop',
  title: 'סדנה',
  type: 'object',
  fields: [
    defineField({
      name: 'anchorId',
      title: 'פריט בתפריט',
      type: 'string',
      options: {
        list: [
          {title: 'סדנאות', value: 'workshops'},
          {title: 'הופעות', value: 'performances'},
          {title: 'בר מצווה', value: 'bar-mitzvah'},
          {title: 'בתי ספר', value: 'schools'},
          {title: 'צרכים מיוחדים', value: 'special'},
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'כותרת',
      type: 'string',
      description: 'למשל: סדנאות, הופעות, בר מצווה, בתי ספר, צרכים מיוחדים',
    }),
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
      title: 'קטגוריות (סרגל: סדנאות, הופעות, בר מצווה, בתי ספר, צרכים מיוחדים)',
      description:
        'סדר הפריטים כמו בסרגל. מומלץ כותרות תואמות. מזהה פנימי (_key) ב-Studio: workshops, performances, bar-mitzvah, schools, special',
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
