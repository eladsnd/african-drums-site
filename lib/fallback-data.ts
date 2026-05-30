import type {SiteContent} from './types'

export const fallbackContent: SiteContent = {
  settings: {
    siteName: 'אמנון כהן',
    tagline: 'תיפוף אפריקאי — שיעורים, סדנאות והופעות',
    logoUrl: '/logo.svg',
    accentColor: '#B45309',
    backgroundColor: '#FDF6EC',
    whatsappNumber: '972501234567',
    contactEmail: 'contact@example.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
    footerText: '© אמנון כהן — תיפוף אפריקאי. כל הזכויות שמורות.',
    seoDescription:
      'שיעורי תיפוף אפריקאי עם אמנון כהן — דג׳מbe, קצב ומעגל תיפוף. שיעורים, סדנאות והופעות בכל הארץ.',
  },
  home: {
    headline: 'אמנון כהן',
    subheadline: 'תיפוף אפריקאי — שיעורים, סדנאות והופעות',
    heroVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    heroPosterUrl: '/images/hero-poster.svg',
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
        quote: '"הקצב הוא הלב של המעגל"',
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
          'שיעור מעמיק למתקדמים: פolyrhythms, מבנה מקצבים מערב אפריקאיים, סולואים וליווי מוזיקלי. מתאים למי שכבר מכיר/ה את הבסיס ורוצה להעמיק.',
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
        description: 'סדנה פתוחה לכל הרמות — מהבסיס ועד polyrhythms. כולל הפסקות, ארוחת צהריים ומעגל סיום.',
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
      'המסע שלי התחיל במסע לסנגל, שם נחשפתי לעולם המקצבים, המסורות והמעגל השבטי. מאז הובלתי מאות סדנאות, הופעות ושיעורים שבועיים — ממעגלים intimate ועד במות גדולות.\n\n' +
      'אני מאמין שהתיפוף הוא דרך לחיבור — לגוף, לקהילה ולשורשים. בכל שיעור וסדנה אני שואף ליצור מרחב בטוח, שמח ומעצים, שבו כל אחד ואחת יכולים למצוא את הקול שלהם.\n\n' +
      'בין היתר: שיתופי פעולה עם הרכבים מוזיקליים, סדנאות עם אמנים מארץ ומחו״ל, והופעות בפסטיבלים.',
    portraitUrl: '/images/portrait.svg',
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
        'אחרי שנתיים אצל אמנון אני מרגיש שהתיפוף הפך לחלק ממני. הוא מורה סבלני, מקצועי, ויודע ליצור מעגל שבו כולם מרגישים בבית.',
      author: 'יוסי לוי',
      role: 'תלמיד',
    },
    {
      _key: 't2',
      quote:
        'הסדנה שהזמנו לצוות הייתה חוויה מדהימה. כולם יצאו עם חיוך, אנרגיה וחיבור שלא ציפינו לו.',
      author: 'מיכal כהן',
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
      imageUrl: '/images/gallery-1.svg',
      caption: 'מעגל תיפוף בגליל',
    },
    {
      _key: 'g2',
      type: 'image',
      imageUrl: '/images/gallery-2.svg',
      caption: 'סדנת דג׳מbe',
    },
    {
      _key: 'g3',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      caption: 'הופעה בפסטיבל',
    },
    {
      _key: 'g4',
      type: 'image',
      imageUrl: '/images/gallery-3.svg',
      caption: 'שיעור שבועי',
    },
  ],
}
