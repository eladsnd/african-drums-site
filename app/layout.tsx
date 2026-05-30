import './globals.css'
import {Heebo} from 'next/font/google'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  weight: ['400', '500', '600', '700', '800'],
})

export default function RootLayout({children}: LayoutProps<'/'>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="font-sans antialiased [text-wrap:pretty]">{children}</body>
    </html>
  )
}
