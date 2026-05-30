import type {SiteContent} from './types'

/** Local copies from Facebook (see public/images/facebook/README.md) */
const FB = '/images/facebook'
/** Fallback if local FB images not saved yet */
const FB_FALLBACK = {
  profile: `${FB}/profile.jpg`,
  hero: `${FB}/hero.jpg`,
  g1: `${FB}/gallery-1.jpg`,
  g2: `${FB}/gallery-2.jpg`,
  g3: `${FB}/gallery-3.jpg`,
  g4: `${FB}/gallery-4.jpg`,
}
const UNSPLASH = {
  hero: 'https://images.unsplash.com/photo-1519892305287-2d6a0c15f58e?w=1920&q=80',
  lessons: 'https://images.unsplash.com/photo-1514525253161-7a46fb19bda?w=1920&q=80',
  workshops: 'https://images.unsplash.com/photo-1511379934373-1ba2bf164b0e?w=1920&q=80',
  portrait: 'https://images.unsplash.com/photo-1519892305287-2d6a0c15f58e?w=800&q=80',
}

export const FACEBOOK_PAGE_URL = 'https://www.facebook.com/MYRHITHM'

export const fallbackContent: SiteContent = {
  settings: {
    siteName: 'בקצב שלי מתופפים',
    tagline: 'מתופפים בכל אירוע · סדנאות קצב ותיפוף אפריקאי',
    logoUrl: FB_FALLBACK.profile,
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
    heroPosterUrl: FB_FALLBACK.hero,
    aboutTeaser:
      'סדנאות לתיפוף אפריקאי, תיפוף גוף וסדנאות מיינדפולנס. מתופפים בכל אירוע — ימי הולדת, גיבושים, פסטיבלים, בתי ספר ומעגלים פתוחים. מתאים למבוגרים, ילדים ואנשים בעלי צרכים מיוחדים.',
    aboutLinkText: 'קרא/י עוד...',
  },
  lessons: {
    title: 'שיעורים וסדנאות',
    intro:
      'סדנאות קצב ותיפוף אפריקאי למבוגרים וילדים — חוויה שבטית מלאת אנרגיה, קצב וחיבור. אין צורך בניסיון קודם.',
    registrationUrl: 'https://wa.me/972501234567',
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
        registrationUrl: 'https://wa.me/972501234567',
      },
      {
        _key: 'w2',
        title: 'סדנאות למבוגרים',
        date: 'לפי תיאום',
        location: 'בכל הארץ',
        description: 'מעגלי תיפוף אפריקאי, גיבושי צוות, אירועי חברה וסדנאות פתוחות.',
        registrationUrl: 'https://wa.me/972501234567',
      },
      {
        _key: 'w3',
        title: 'אנשים בעלי צרכים מיוחדים',
        date: 'לפי תיאום',
        location: 'בכל הארץ',
        description:
          'סדנאות מותאמות אישית — מרחב בטוח, מכבד ומלא קצב. ניסיון רב בהנגשה וליווי קבוצות מגוונות.',
        registrationUrl: 'https://wa.me/972501234567',
      },
      {
        _key: 'w4',
        title: 'הופעות ואירועים',
        date: 'לפי תיאום',
        location: 'בכל הארץ',
        description: 'מתופפים להופעות, חתונות, פסטיבלים ואירועים פרטיים — עם תופים אפריקאיים חיים.',
        registrationUrl: 'https://wa.me/972501234567',
      },
    ],
    privateTitle: 'אירוע מיוחד?',
    privateDescription:
      'יום הולדת, גיבוש, פסטיבל או מעגל קהילתי — מגיעים עם תופים, מובילים חוויה מלאת קצב ושמחה. בלי ניסיון קודם.',
    privateCtaLabel: 'בואו נדבר בוואטסאפ',
    privateCtaUrl: 'https://wa.me/972501234567',
  },
  about: {
    title: 'שלומי סימני',
    bio:
      'שלומי סימני — מתופף, מנחה ויוצר. מפעיל את «בקצב שלי»: סדנאות לתיפוף אפריקאי, תיפוף גוף וסדנאות מיינדפולנס.\n\n' +
      'מתופפים בכל אירוע — מסדנאות לילדים ומבוגרים ועד הופעות וליווי קבוצות עם צרכים מיוחדים. המטרה: ליצור מרחב שבו כל אחד ואחת יכולים למצוא את הקצב שלהם.\n\n' +
      'עקבו אחרינו בפייסבוק לעדכונים, תמונות ואירועים קרובים.',
    portraitUrl: FB_FALLBACK.profile,
  },
  media: [
    {
      _key: 'm1',
      title: 'עקבו אחרינו בפייסבוק',
      url: FACEBOOK_PAGE_URL,
      source: 'בקצב שלי מתופפים',
    },
  ],
  testimonials: [
    {
      _key: 't1',
      quote: 'כל הכבוד שלומי, בהצלחה!',
      author: 'כפיר שולמן',
      role: 'תגובה מהפייסבוק',
    },
    {
      _key: 't2',
      quote:
        'הסדנה הייתה חוויה מדהימה — אנרגיה, חיוך וחיבור שלא ציפינו לו.',
      author: 'משתתפת בסדנה',
      role: 'גיבוש צוות',
    },
    {
      _key: 't3',
      quote: 'הילדים לא רצו להפסיק לתופף. חוויה מושלמת ליום הולדת.',
      author: 'הורה מרוצה',
      role: 'יום הולדת',
    },
  ],
  gallery: [
    {
      _key: 'g1',
      type: 'image',
      imageUrl: FB_FALLBACK.g1,
      caption: 'מעגל תיפוף',
    },
    {
      _key: 'g2',
      type: 'image',
      imageUrl: FB_FALLBACK.g2,
      caption: 'סדנת קצב',
    },
    {
      _key: 'g3',
      type: 'image',
      imageUrl: FB_FALLBACK.g3,
      caption: 'תיפוף אפריקאי',
    },
    {
      _key: 'g4',
      type: 'image',
      imageUrl: FB_FALLBACK.g4,
      caption: 'הופעה ואירוע',
    },
  ],
}

/** Unsplash fallbacks when /images/facebook/*.jpg are missing */
export const imageFallbacks: Record<string, string> = {
  [FB_FALLBACK.profile]: UNSPLASH.portrait,
  [FB_FALLBACK.hero]: UNSPLASH.hero,
  [FB_FALLBACK.g1]: UNSPLASH.hero,
  [FB_FALLBACK.g2]: UNSPLASH.workshops,
  [FB_FALLBACK.g3]: UNSPLASH.lessons,
  [FB_FALLBACK.g4]: UNSPLASH.hero,
}

export const pageHeroImages: Record<string, string> = {
  lessons: FB_FALLBACK.g2,
  workshops: FB_FALLBACK.g4,
  about: FB_FALLBACK.profile,
  gallery: FB_FALLBACK.hero,
  contact: FB_FALLBACK.g1,
}
