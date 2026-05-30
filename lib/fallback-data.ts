import {siteImages} from './images'
import type {SiteContent} from './types'
import {buildWhatsAppUrl} from './whatsapp'

import {FACEBOOK_PAGE_URL} from './facebook'

export {FACEBOOK_PAGE_URL}

/** Overridden at runtime from WHATSAPP_NUMBER in getSiteContent() */
const wa = () => buildWhatsAppUrl('972501234567')

export const fallbackContent: SiteContent = {
  settings: {
    siteName: 'בקצב שלי מתופפים',
    tagline: 'מתופפים בכל אירוע · סדנאות קצב ותיפוף אפריקאי',
    logoUrl: siteImages.logo,
    accentColor: '#C2410C',
    backgroundColor: '#FFF7ED',
    whatsappNumber: '972501234567',
    contactEmail: 'simani.shlomi@gmail.com',
    facebookUrl: FACEBOOK_PAGE_URL,
    footerText: '© בקצב שלי — שלומי סימני. כל הזכויות שמורות.',
    seoDescription:
      'בקצב שלי מתופפים — שלומי סימני. מתופפים בכל אירוע, סדנאות קצב ותיפוף אפריקאי למבוגרים וילדים, הופעות ואנשים בעלי צרכים מיוחדים.',
  },
  home: {
    headline: 'בקצב שלי',
    subheadline: 'מתופפים · שלומי סימני',
    heroVideoUrl: undefined,
    heroPosterUrl: siteImages.hero,
    aboutTeaser:
      'סדנאות לתיפוף אפריקאי, תיפוף גוף וסדנאות מיינדפולנס. מתופפים בכל אירוע — ימי הולדת, גיבושים, פסטיבלים, בתי ספר ומעגלים פתוחים. מתאים למבוגרים, ילדים ואנשים בעלי צרכים מיוחדים.',
    aboutLinkText: 'קרא/י עוד...',
  },
  lessons: {
    title: 'שיעורים וסדנאות',
    intro:
      'סדנאות קצב ותיפוף אפריקאי למבוגרים וילדים — חוויה שבטית מלאת אנרגיה, קצב וחיבור. אין צורך בניסיון קודם.',
    registrationUrl: wa(),
    registrationLabel: 'לתיאום ופרטים',
    lessonTypes: [
      {
        _key: 'djembe',
        title: 'תיפוף דג׳מבה — מעגל קצב',
        quote: 'הקצב הוא הלב של המעגל',
        description:
          'מעגל תיפוף אפריקאי לכל הרמות. נתחבר למקצב הפנימי ולפעימה משותפת, נכיר כלי הקשה מהעולם ונתמקד בטכניקה על דג׳מבה ודונדון.',
        schedules: [
          {
            _key: 'contact',
            day: 'מועדים',
            time: 'לפי תיאום',
            location: 'במרכז הארץ ובפריסה ארצית',
            note: 'צרו קשר לקבוצות ושיעורים פתוחים',
          },
        ],
      },
      {
        _key: 'body',
        title: 'תיפוף גוף ומיינדפולנס',
        description:
          'סדנאות המשלבות הקשבה לגוף, נשימה וקצב — מתאימות לקבוצות, ארגונים ומרחבים טיפוליים.',
        schedules: [
          {
            _key: 'groups',
            day: 'לקבוצות',
            time: 'גמיש',
            location: 'לפי מיקום האירוע',
          },
        ],
      },
    ],
    pricing: [
      {_key: 'p1', label: 'סדנה / שיעור קבוצתי', price: 'לפי תיאום'},
      {_key: 'p2', label: 'הופעה / אירוע', price: 'לפי תיאום'},
      {_key: 'p3', label: 'סדנה פרטית', price: 'לפי תיאום'},
    ],
    pricingNote: 'מחירים לפי סוג אירוע, משך ומספר משתתפים. שלחו הודעה בוואטסאפ.',
  },
  services: [
    {
      slug: 'workshops',
      title: 'סדנאות',
      intro: 'סדנאות קצב ותיפוף אפריקאי — מעגלים, גיבושים ואירועים קהילתיים.',
      body:
        'סדנאות קצב ותיפוף אפריקאי למבוגרים וילדים — חוויה שבטית מלאת אנרגיה, קצב וחיבור. אין צורך בניסיון קודם.\n\n' +
        'מתאימות לימי הולדת, גיבושי צוות, מעגלים פתוחים ואירועים פרטיים. מגיעים עם תופים, מנחים את הקבוצה ויוצרים יחד רגע של קצב ושמחה.',
      imageUrls: [siteImages.gallery[1], siteImages.gallery[0]],
      heroImageUrl: siteImages.gallery[1],
      heroImagePosition: 'center 40%',
      ctaLabel: 'לתיאום סדנה — שלחו הודעה בוואטסאפ',
    },
    {
      slug: 'performances',
      title: 'הופעות',
      intro: 'מתופפים חיים לאירועים, חתונות, פסטיבלים ומסיבות.',
      body:
        'הופעות עם תופים אפריקאיים אמיתיים — אנרגיה, מקצב וחוויה בלתי נשכחת על הבמה או במרחב האירוע.\n\n' +
        'מתאים לחתונות, אירועי חברה, פסטיבלים ומסיבות פרטיות. אורך ומבנה מותאמים לאירוע שלכם.',
      imageUrls: [siteImages.hero, siteImages.gallery[3]],
      heroImageUrl: siteImages.hero,
      heroImagePosition: 'center 42%',
      ctaLabel: 'לתיאום הופעה — שלחו הודעה בוואטסאפ',
    },
    {
      slug: 'bar-mitzvah',
      title: 'בר מצווה',
      intro: 'חוויית תיפוף לבר/בת מצווה — סדנה, הופעה או שילוב.',
      body:
        'יום מיוחד שמגיע לחוויה מיוחדת — מעגל תיפוף משותף עם המשפחה והחברים, או הופעה חגיגית עם שלומי והתופים.\n\n' +
        'התוכן מותאם לגיל, לאווירה ולמה שחשוב לכם. אפשר לשלב סדנה קצרה + הופעה, או מעגל מלא עם כולם על התופים.',
      imageUrls: [siteImages.gallery[0], siteImages.hero],
      heroImageUrl: siteImages.gallery[0],
      heroImagePosition: '62% 48%',
      ctaLabel: 'לתיאום בר/בת מצווה — שלחו הודעה בוואטסאפ',
    },
    {
      slug: 'schools',
      title: 'בתי ספר',
      intro: 'סדנאות לכיתות, קייטנות וימי גיבוש בבתי ספר.',
      body:
        'סדנאות מותאמות לבתי ספר ולמוסדות חינוך — חוויה משחקית, מחנכת ומחברת שמביאה קצב אפריקאי לכיתה.\n\n' +
        'ניסיון רב בעבודה עם ילדים ונוער. אפשר סדנה חד-פעמית, סדרת מפגשים או יום גיבוש לכל השכבה.',
      imageUrls: [siteImages.gallery[1], siteImages.gallery[2]],
      heroImageUrl: siteImages.gallery[2],
      heroImagePosition: 'center 40%',
      ctaLabel: 'לתיאום לבית ספר — שלחו הודעה בוואטסאפ',
    },
    {
      slug: 'special',
      title: 'צרכים מיוחדים',
      intro: 'סדנאות מותאמות אישית — מרחב בטוח, מכבד ומלא קצב.',
      body:
        'סדנאות לקבוצות עם צרכים מיוחדים — מרחב מכבד, גמיש ומלא הקשבה. ניסיון רב בהנגשה וליווי קבוצות מגוונות.\n\n' +
        'הקצב והתיפוף מאפשרים חיבור, ביטוי ושמחה בלי שיפוט. נשמח לתאם יחד את הפורמט המתאים לכם.',
      imageUrls: [siteImages.gallery[2], siteImages.portrait],
      heroImageUrl: siteImages.gallery[3],
      heroImagePosition: '72% 40%',
      ctaLabel: 'לתיאום סדנה מותאמת — שלחו הודעה בוואטסאפ',
    },
  ],
  about: {
    title: 'שלומי סימני',
    bio:
      'שלומי סימני — מתופף, מנחה ויוצר. מפעיל את «בקצב שלי»: סדנאות לתיפוף אפריקאי, תיפוף גוף וסדנאות מיינדפולנס.\n\n' +
      'מתופפים בכל אירוע — מסדנאות לילדים ומבוגרים ועד הופעות וליווי קבוצות עם צרכים מיוחדים. המטרה: ליצור מרחב שבו כל אחד ואחת יכולים למצוא את הקצב שלהם.\n\n' +
      'עקבו אחרינו בפייסבוק לעדכונים, תמונות ואירועים קרובים.',
    portraitUrl: siteImages.portrait,
  },
  media: [
    {
      _key: 'm1',
      title: 'עקבו אחרינו בפייסבוק',
      url: FACEBOOK_PAGE_URL,
      source: 'בקצב שלי מתופפים',
    },
  ],
  testimonials: [],
  gallery: [
    {
      _key: 'g1',
      type: 'image',
      imageUrl: siteImages.gallery[0],
      caption: 'מעגל תיפוף',
    },
    {
      _key: 'g2',
      type: 'image',
      imageUrl: siteImages.gallery[1],
      caption: 'סדנת קצב',
    },
    {
      _key: 'g3',
      type: 'image',
      imageUrl: siteImages.gallery[2],
      caption: 'תיפוף אפריקאי',
    },
    {
      _key: 'g4',
      type: 'image',
      imageUrl: siteImages.gallery[3],
      caption: 'הופעה ואירוע',
    },
  ],
}

export {pageHeroConfig, pageHeroImages} from './images'
