import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'הגדרות אתר',
  type: 'document',
  fields: [
    defineField({name: 'siteName', title: 'שם האתר', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'tagline', title: 'כותרת משנה', type: 'string'}),
    defineField({name: 'logo', title: 'לוגו', type: 'image'}),
    defineField({name: 'accentColor', title: 'צבע ראשי', type: 'string', initialValue: '#B45309'}),
    defineField({
      name: 'backgroundColor',
      title: 'צבע רקע',
      type: 'string',
      initialValue: '#FDF6EC',
    }),
    defineField({name: 'whatsappNumber', title: 'מספר וואטסאפ (972...)', type: 'string'}),
    defineField({name: 'contactEmail', title: 'אימייל', type: 'string'}),
    defineField({name: 'facebookUrl', title: 'Facebook', type: 'url'}),
    defineField({name: 'instagramUrl', title: 'Instagram', type: 'url'}),
    defineField({name: 'youtubeUrl', title: 'YouTube', type: 'url'}),
    defineField({name: 'footerText', title: 'טקסט פוטר', type: 'text'}),
    defineField({name: 'seoDescription', title: 'תיאור SEO', type: 'text'}),
    defineField({name: 'ogImage', title: 'תמונת שיתוף', type: 'image'}),
  ],
})
