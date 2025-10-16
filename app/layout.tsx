import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pink MD | NYC Artist, DJ & Producer',
  description: 'Pink MD is a NYC-based artist blending finance culture with club music. Stream "Efficient" on Spotify & SoundCloud. Available for bookings, brand collaborations, and private events.',
  keywords: 'Pink MD, NYC artist, female DJ, club music, finance pop, Efficient, Maya artist, NYC music, brand collaborations, booking DJ NYC',
  authors: [{ name: 'Pink MD' }],
  creator: 'Pink MD',
  publisher: 'Pink MD',
  openGraph: {
    title: 'Pink MD | NYC Artist & DJ',
    description: 'NYC finance girl energy. Club records, runway hooks, and clean hustle anthems. Stream "Efficient" now.',
    url: 'https://pinkmd.fm',
    siteName: 'Pink MD',
    images: [
      {
        url: 'https://pinkmd.fm/images/nyc-skyline-pink.jpg',
        width: 1600,
        height: 900,
        alt: 'Pink MD - NYC Skyline in Pink',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pink MD | NYC Artist & DJ',
    description: 'NYC finance girl energy. Club records, runway hooks, and clean hustle anthems.',
    images: ['https://pinkmd.fm/images/nyc-skyline-pink.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://pinkmd.fm" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  )
}
