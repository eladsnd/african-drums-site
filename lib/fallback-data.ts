import {siteImages} from './images'
import type {SiteContent} from './types'
import {buildWhatsAppUrl, getWhatsAppNumber} from './whatsapp'

import {FACEBOOK_PAGE_URL} from './facebook'

export {FACEBOOK_PAGE_URL}

const wa = () => buildWhatsAppUrl(getWhatsAppNumber())

export const fallbackContent: SiteContent = {
  settings: {
    siteName: 'בקצב שלי מתופפים',
    tagline: 'מתופפים בכל אירוע · סדנאות קצב ותיפוף אפריקאי',
    logoUrl: siteImages.logo,
    accentColor: '#C2410C',
    backgroundColor: '#FFF7ED',
    whatsappNumber: getWhatsAppNumber(),
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
  workshops: {
    title: 'סדנאות והופעות',
    intro: 'מתופפים בכל אירוע — סדנאות והופעות מותאמות לקהל שלכם.',
    upcomingWorkshops: [
      {
        _key: 'w1',
        title: 'סדנאות לילדים',
        date: 'לפי תיאום',
        location: 'בכל הארץ',
        description:
          'סדנאות קצב ותיפוף מותאמות לגיל הרך — חוויה משחקית, מעצימה ומחברת. מתאימות לבתי ספר, קייטנות וימי הולדת.',
        registrationUrl: wa(),
      },
      {
        _key: 'w2',
        title: 'סדנאות למבוגרים',
        date: 'לפי תיאום',
        location: 'בכל הארץ',
        description: 'מעגלי תיפוף אפריקאי, גיבושי צוות, אירועי חברה וסדנאות פתוחות.',
        registrationUrl: wa(),
      },
      {
        _key: 'w3',
        title: 'אנשים בעלי צרכים מיוחדים',
        date: 'לפי תיאום',
        location: 'בכל הארץ',
        description:
          'סדנאות מותאמות אישית — מרחב בטוח, מכבד ומלא קצב. ניסיון רב בהנגשה וליווי קבוצות מגוונות.',
        registrationUrl: wa(),
      },
      {
        _key: 'w4',
        title: 'הופעות ואירועים',
        date: 'לפי תיאום',
        location: 'בכל הארץ',
        description: 'מתופפים להופעות, חתונות, פסטיבלים ואירועים פרטיים — עם תופים אפריקאיים חיים.',
        registrationUrl: wa(),
      },
    ],
    privateTitle: 'אירוע מיוחד?',
    privateDescription:
      'יום הולדת, גיבוש, פסטיבל או מעגל קהילתי — מגיעים עם תופים, מובילים חוויה מלאת קצב ושמחה. בלי ניסיון קודם.',
    privateCtaLabel: 'בואו נדבר בוואטסאפ',
    privateCtaUrl: wa(),
  },
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
  /** Only verified quotes — Facebook has 0 star reviews; one real comment on a post */
  testimonials: [
    {
      _key: 't1',
      quote: 'כל הכבוד שלומי, בהצלחה!',
      author: 'כפיר שולמן',
      role: 'תגובה בפייסבוק · מאי 2026',
    },
  ],
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
