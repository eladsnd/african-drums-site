# הגדרת Sanity — למפתח (אלעד)

מדריך חד-פעמי לחיבור הפרויקט ל-Sanity, כדי ששלומי יערוך ב-`/studio`.

## 1. יצירת פרויקט ב-Sanity

1. היכנסו ל-[sanity.io/manage](https://www.sanity.io/manage)
2. **Create project** → שם למשל: `beketav-shlomi`
3. Dataset: **`production`** (ברירת מחדל)
4. שמרו את **Project ID** (מחרוזת כמו `abc123xy`)

## 2. טוקן לקריאה (לאתר)

1. בפרויקט → **API** → **Tokens** → **Add API token**
2. שם: `website-read`
3. הרשאות: **Viewer** (קריאה בלבד)
4. העתיקו את הטוקן (מוצג פעם אחת)

## 3. משתנים ב-Vercel ובמקומי

ב-**Vercel** → Settings → Environment Variables (Production + Preview):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=הפרויקט_שלכם
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=הטוקן_viewer
NEXT_PUBLIC_SANITY_PROJECT_TITLE=ניהול אתר — בקצב שלי
```

במחשב המקומי: העתיקו ל-`.env.local` (אותם ערכים).

**Redeploy** ב-Vercel אחרי שמירת המשתנים.

## 4. CORS — חובה

ב-[sanity.io/manage](https://www.sanity.io/manage) → הפרויקט → **API** → **CORS origins** → הוסיפו:

- `http://localhost:3000`
- `https://your-site.vercel.app`
- `https://your-domain.co.il` (הדומיין הסופי)

סמנו **Allow credentials** אם מופיע.

## 5. מי צריך הזמנה (Members)?

| מצב | צריך Invite? |
|-----|----------------|
| אותו אימייל שכבר ב-**Members** (למשל `simani.shlomi@gmail.com`) | **לא** — כבר Administrator/Editor |
| מפתח עם **מייל אחר** שרוצה לערוך ב-`/studio` | **כן** — Invite → Editor |

שלומי כבר מופיע כ-**Administrator** → הוא נכנס ל-`/studio` עם אותו חשבון Sanity (Google/אימייל), בלי טוקן ובלי Vercel.

## 6. «Connect this studio to your project» (מסך ב-localhost)

בפעם הראשונה ב-`http://localhost:3000/studio` מופיע חיבור Studio לפרויקט:

### לפיתוח מקומי (מומלץ עכשיו)

1. ודאו שמחוברים ל-Sanity **באותו חשבון** שב-Members (לא חשבון Google אחר).
2. לחצו **Add development host** (לא Register).
3. הוסיפו: `http://localhost:3000`
4. אשרו.

זה מספיק ללוקל — לא חייבים «Register this studio» לפיתוח.

### «You are not a member of this project»

מופיע כשלוחצים **Register** או **Add host** אבל ב-Studio מחוברים **חשבון שונה** מהפרויקט (למשל אלעד, ושלומי הוא הבעלים ב-Manage).

**פתרון:**

- התנתקו ב-Studio → התחברו עם `simani.shlomi@gmail.com`, **או**
- ב-Manage → **Members → Add members** → הזמינו את המייל של המפתח כ-**Editor**

### פרודקשן (Vercel)

אחרי deploy, ב-Manage → **Studios** → **Register studio** עם כתובת האתר (או Add host ל-preview URL). עדיין — אותו חשבון חבר פרויקט.

## 7. Fill Sanity with the same content as the site (recommended)

Run **once** from the project folder (local `.env.local`):

```bash
npm run seed:sanity
```

Requires a separate **Editor** token (not the Viewer read token):

```env
SANITY_API_WRITE_TOKEN=sk....   # Permissions: Editor
SANITY_API_READ_TOKEN=sk....    # Permissions: Viewer — site only, cannot seed
```

Create: sanity.io/manage → API → Tokens → **Add API token** → **Editor**.

This uploads images from `public/images/` and creates/updates:

| Studio | Document ID |
|--------|-------------|
| הגדרות אתר | `siteSettings` |
| דף בית | `homePage` |
| שיעורים | `lessonPage` |
| אודות | `aboutPage` |
| דף שירות (×5) | `service-workshops`, `service-performances`, … |
| פריט גלריה (×4) | `gallery-g1` … |

Safe to run again — it **updates** the same IDs (does not wipe the dataset).

### Partial edits (WhatsApp vs images)

- **WhatsApp on the live site** → change `WHATSAPP_NUMBER` in **Vercel** only. The site always uses that env var; Sanity’s whatsapp field is optional.
- **Change text or add photos** → edit in `/studio`. Empty fields in Sanity still fall back to `lib/fallback-data.ts` so you won’t get blank pages while learning Studio.

## 8. בדיקה

- `npm run dev` → האתר ב-`localhost:3000` מציג תוכן מ-Sanity (לא fallback)
- שינוי ב-Studio → רענון באתר → השינוי מופיע
- `/studio` נטען בלי שגיאת Project ID

## מסמכים נוספים

- **[STUDIO-GUIDE.md](./STUDIO-GUIDE.md)** — מדריך לשלומי (עריכה + סרטונים)
- **[LAUNCH-CHECKLIST.md](./LAUNCH-CHECKLIST.md)** — לפני עלייה לאוויר
