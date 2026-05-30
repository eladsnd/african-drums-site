import type {SiteContent} from './types'

const HERO_IMG =
  'https://images.unsplash.com/photo-1519892305287-2d6a0c15f58e?w=1920&q=80'
const LESSONS_IMG =
  'https://images.unsplash.com/photo-1514525253161-7a46fb19bda?w=1920&q=80'
const WORKSHOP_IMG =
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80'
const PORTRAIT_IMG =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'

export const fallbackContent: SiteContent = {
  settings: {
    siteName: 'שלומי סימני',
    tagline: 'תיפוף אפריקאי — שיעורים, סדנאות והופעות',
    logoUrl: '/logo.svg',
    accentColor: '#C2410C',
    backgroundColor: '#FFF7ED',
    whatsappNumber: '972501234567',
    contactEmail: 'contact@example.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    footerText: '© שלומי סימני — תיפוף אפריקאי. כל הזכויות שמורות.',
    seoDescription:
      'שיעורי תיפוף אפריקאי עם שלומי סימני — דג׳מbe, קצב ומעגל תיפוף. שיעורים, סדנאות והופעות בכל הארץ.',
  },
  home: {
    headline: 'שלומי סימני',
    subheadline: 'תיפוף אפריקאי — שיעורים, סדנאות והופעות',
    heroVideoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    heroPosterUrl: HERO_IMG,
    aboutTeaser:
      'מורה לתיפוף מערב אפריקאי כ-12 שנה. מלמד דג׳מbe, דunun ומעגלי תיפוף לכל הרמות — ממתחילים ועד מתקדמים. השיעורים משלבים טכניקה, הקשבה, קהילה ושמחת חיים.',
    aboutLinkText: 'קרא/י עוד...',
  },
  lessons: {
    title: 'שיעורים',
    intro: 'שיעורי תיפוף אפריקאי לכל הרמות — חוויה שבטית מלאת אנרגיה, קצב וחיבור לגוף ולנפש.',
    registrationUrl: 'https://wa.me/972501234567',
    registrationLabel: 'להרשמה',
    lessonTypes: [
      {
        _key: 'djembe',
        title: 'תיפוף דג׳מbe — מעגל קצב',
        quote: 'הקצב הוא הלב של המעגל',
        description:
          'בשיעורים נתחבר למקצב הפנימי ולפעימה משותפת של כל החוברים למעגל. נעבוד על קצב בסיסי, נכיר כלי הקשה שונים מהעולם, ונתמקד בטכניקת התיפוף האפריקאי על תופי הדג׳מbe והדundun. אין צורך בניסיון קודם.',
        schedules: [
          {
            _key: 'mon',
            day: 'יום שני',
            time: '20:00–21:30',
            location: 'סטודיו תיפוף, תל אביב',
            note: 'שיעור לכל הרמות',
          },
          {
            _key: 'wed',
            day: 'יום רביעי',
            time: '19:30–21:00',
            location: 'מרכז קהילתי, ירושלים',
            note: 'שיעור לכל הרמות',
          },
        ],
      },
      {
        _key: 'rhythm',
        title: 'קצב ותיאוריה — רמה מתקדמת',
        description:
          'שיעור מעמיק למתקדמים: פוליריתמים, מבנה מקצבים מערב אפריקאיים, סולואים וליווי מוזיקלי. מתאים למי שכבר מכיר/ה את הבסיס ורוצה להעמיק.',
        schedules: [
          {
            _key: 'thu',
            day: 'יום חמישי',
            time: '18:30–20:00',
            location: 'סטודיו תיפוף, תל אביב',
          },
        ],
      },
    ],
    pricing: [
      {_key: 'p1', label: '4 שיעורים בחודש', price: '380 ₪'},
      {_key: 'p2', label: '3 שיעורים בחודש', price: '290 ₪'},
      {_key: 'p3', label: 'שיעור חד-פעמי', price: '120 ₪'},
    ],
    pricingNote: 'ניתן לשלב שיעורים במיקומים שונים. פרטים נוספים בוואטסאפ.',
  },
  workshops: {
    title: 'סדנאות',
    intro: 'סדנאות תיפוף אינטנסיביות — יום שלם או סוף שבוע של קצב, קהילה ולמידה.',
    upcomingWorkshops: [
      {
        _key: 'w1',
        title: 'סדנת דג׳מbe ליום שלם',
        date: '15 ביוני 2026',
        location: 'גליל מערבי',
        description:
          'סדנה פתוחה לכל הרמות — מהבסיס ועד פוליריתמים. כולל הפסקות, ארוחת צהריים ומעגל סיום.',
        registrationUrl: 'https://wa.me/972501234567',
      },
      {
        _key: 'w2',
        title: 'מעגל תיפוף לקבוצות',
        date: 'תאריך לפי תיאום',
        location: 'בכל הארץ',
        description: 'סדנה מותאמת לקבוצות, ארגונים וימי גיבוש. ניתן להזמין ל-8–30 משתתפים.',
        registrationUrl: 'https://wa.me/972501234567',
      },
    ],
    privateTitle: 'סדנאות פרטיות',
    privateDescription:
      'מחפשים חוויה ייחודית ליום הולדת, גיבוש צוות או אירוע פרטי? אני מגיע עם תופים ומוביל מעגל תיפוף מותאם — ללא צורך בניסיון קודם.',
    privateCtaLabel: 'צרו קשר לתיאום',
    privateCtaUrl: 'https://wa.me/972501234567',
  },
  about: {
    title: 'קצת עלי',
    bio:
      'מורה, מתופף ויוצר — מלמד תיפוף מערב אפריקאי כ-12 שנה בכל הארץ.\n\n' +
      'המסע שלי התחיל במסע לסנגל, שם נחשפתי לעולם המקצבים, המסורות והמעגל השבטי. מאז הובלתי מאות סדנאות, הופעות ושיעורים שבועיים — ממעגלים אינטימיים ועד במות גדולות.\n\n' +
      'אני מאמין שהתיפוף הוא דרך לחיבור — לגוף, לקהילה ולשורשים. בכל שיעור וסדנה אני שואף ליצור מרחב בטוח, שמח ומעצים, שבו כל אחד ואחת יכולים למצוא את הקול שלהם.\n\n' +
      'בין היתר: שיתופי פעולה עם הרכבים מוזיקליים, סדנאות עם אמנים מארץ ומחו״ל, והופעות בפסטיבלים.',
    portraitUrl: PORTRAIT_IMG,
  },
  media: [
    {
      _key: 'm1',
      title: 'ראיון ברדיו תל אביב',
      url: 'https://example.com',
      source: '102 FM',
    },
    {
      _key: 'm2',
      title: 'כתבה ב"הארץ" — מעגל התיפוף',
      url: 'https://example.com',
      source: 'הארץ',
    },
  ],
  testimonials: [
    {
      _key: 't1',
      quote:
        'אחרי שנתיים אצל שלומי אני מרגיש שהתיפוף הפך לחלק ממני. הוא מורה סבלני, מקצועי, ויודע ליצור מעגל שבו כולם מרגישים בבית.',
      author: 'יוסי לוי',
      role: 'תלמיד',
    },
    {
      _key: 't2',
      quote:
        'הסדנה שהזמנו לצוות הייתה חוויה מדהימה. כולם יצאו עם חיוך, אנרגיה וחיבור שלא ציפינו לו.',
      author: 'מיכל כהן',
      role: 'מנהלת HR',
    },
    {
      _key: 't3',
      quote:
        'באתי בלי שום ניסיון ותוך חודשיים כבר מרגישה בנוח לנגן במעגל. האווירה תמיד חמה ומקבלת.',
      author: 'נועה ש.',
      role: 'תלמידה',
    },
  ],
  gallery: [
    {
      _key: 'g1',
      type: 'image',
      imageUrl:
        'https://images.unsplash.com/photo-1519892305287-2d6a0c15f58e?w=800&q=80',
      caption: 'מעגל תיפוף בגליל',
    },
    {
      _key: 'g2',
      type: 'image',
      imageUrl:
        'https://images.unsplash.com/photo-1511379934373-1ba2bf164b0e?w=800&q=80',
      caption: 'סדנת דג׳מbe',
    },
    {
      _key: 'g3',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
      caption: 'הופעה בפסטיבל',
    },
    {
      _key: 'g4',
      type: 'image',
      imageUrl:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
      caption: 'שיעור שבועי',
    },
  ],
}

/** Page hero images keyed by route segment */
export const pageHeroImages: Record<string, string> = {
  lessons: LESSONS_IMG,
  workshops: WORKSHOP_IMG,
  about: PORTRAIT_IMG,
  gallery: HERO_IMG,
  contact: LESSONS_IMG,
}
