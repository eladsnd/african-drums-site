'use client'

import {useState} from 'react'

export function ContactForm({email}: {email: string}) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          body: data,
          headers: {Accept: 'application/json'},
        })
        if (!res.ok) throw new Error('submit failed')
      } else {
        // Fallback: mailto when Formspree not configured
        const name = data.get('name')
        const message = data.get('message')
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(`פנייה מאת ${name}`)}&body=${encodeURIComponent(String(message))}`
      }
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          שם מלא
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="שם מלא"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          דוא״ל
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="דוא״ל"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          הודעה
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="הודעה..."
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-lg bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent/90 disabled:opacity-60"
      >
        {status === 'loading' ? 'שולח...' : 'שליחה'}
      </button>
      {status === 'success' && (
        <p className="text-center text-green-700">תודה על פניתך, נחזור אליך בקרוב!</p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-600">אירעה שגיאה. נסו שוב או צרו קשר בוואטסאפ.</p>
      )}
      <p className="text-center text-xs text-stone-500">
        הפרטים שתשלח/י ישמשו לצורך מענה לפנייה בלבד.
      </p>
    </form>
  )
}
