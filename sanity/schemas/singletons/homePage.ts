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
    defineField({name: 'heroVideoUrl', title: 'קישור וידאו (YouTube embed)', type: 'url'}),
    defineField({name: 'heroPoster', title: 'תמונת כיסוי לוידאו', type: 'image'}),
    defineField({name: 'aboutTeaser', title: 'טקסט קצר על', type: 'text'}),
    defineField({name: 'aboutLinkText', title: 'טקסט קישור "קרא עוד"', type: 'string'}),
  ],
})
