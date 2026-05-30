import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'דף בית',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({name: 'headline', title: 'כותרת ראשית', type: 'string'}),
    defineField({name: 'subheadline', title: 'כותרת משנה', type: 'string'}),
    defineField({
      name: 'heroVideoUrl',
      title: 'וידאו ראשי (YouTube)',
      type: 'url',
      description:
        'העלו את הסרטון ל-YouTube (אפשר "לא רשום"), והדביקו כאן את הקישור — גם הקישור הרגיל מ-youtube.com או youtu.be',
    }),
    defineField({
      name: 'heroPoster',
      title: 'תמונת כיסוי לפני ההפעלה',
      type: 'image',
      description: 'תמונה שמופיעה לפני שלוחצים Play (אופציונלי אם אין וידאו)',
    }),
    defineField({name: 'aboutTeaser', title: 'טקסט קצר על', type: 'text'}),
    defineField({name: 'aboutLinkText', title: 'טקסט קישור "קרא עוד"', type: 'string'}),
  ],
})
