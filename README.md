# Pink MD - AI-Optimized Artist Website

Official website for **Pink MD** (Bloomberg Barbie) - NYC-based artist, DJ, and producer.

## 🎵 Features

- **AI-Optimized Content**: Structured data (JSON-LD), semantic HTML, and AI-friendly markup
- **SEO-Ready**: Complete meta tags, Open Graph, Twitter Cards, and sitemap
- **Modern Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first, beautiful UI across all devices
- **Music Embeds**: Spotify and SoundCloud integration
- **Booking System**: Contact form with email integration
- **Newsletter**: Email capture for fan engagement

## 🤖 AI Optimization Features

### 1. **Structured Data (Schema.org)**
- MusicGroup schema for artist information
- MusicRecording schema for tracks
- Service schema for booking information
- WebSite and WebPage schemas

### 2. **AI Crawler Support**
- Explicit permissions in `robots.txt` for:
  - GPTBot (ChatGPT)
  - Claude-Web (Anthropic)
  - CCBot (Common Crawl)
  - Google-Extended
  - PerplexityBot
  - Applebot-Extended

### 3. **AI Context Document**
- `/public/ai-context.md` - Comprehensive artist information for AI assistants
- Clear, structured information about Pink MD's brand, music, and services

### 4. **Semantic HTML**
- Proper heading hierarchy (h1, h2, h3)
- ARIA labels for accessibility
- Descriptive alt text for images
- Semantic sections and articles

### 5. **Rich Metadata**
- Comprehensive meta descriptions
- Keyword optimization
- Open Graph tags for social sharing
- Twitter Card integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
cd pink-md-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - Pink MD website"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js and deploy

**Custom Domain:**
- Add your domain in Vercel dashboard
- Update all URLs in the code from `pinkmd.fm` to your actual domain

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
```bash
npx netlify-cli deploy --prod
```

## 🎨 Customization

### Update Artist Information

Edit `/app/page.tsx`:

```typescript
const ARTIST_INFO = {
  name: "Pink MD",
  email: "booking@pinkmd.fm",
  // ... update other fields
};

const MUSIC_LINKS = {
  spotify: "YOUR_SPOTIFY_URL",
  soundcloud: "YOUR_SOUNDCLOUD_URL",
  // ... update other links
};
```

### Replace Images

Update image URLs in `/app/page.tsx`:

```typescript
const IMAGES = {
  hero: "YOUR_HERO_IMAGE_URL",
  press: "YOUR_PRESS_IMAGE_URL",
  gallery: [
    "IMAGE_1_URL",
    "IMAGE_2_URL",
    // ... add your images
  ],
};
```

**Tip:** Upload images to:
- Vercel Blob Storage
- Cloudinary
- GitHub repository (`/public/images/`)

### Update Domain

Replace all instances of `https://pinkmd.fm` with your actual domain in:
- `/app/layout.tsx`
- `/app/page.tsx`
- `/public/sitemap.xml`
- `/.well-known/ai-plugin.json`

### Connect Newsletter

In `/app/page.tsx`, update the `onSubmit` function to connect to your email service:

```typescript
const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Example: ConvertKit
  await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, api_key: 'YOUR_API_KEY' })
  });
  
  setSubmitted(true);
};
```

## 📄 File Structure

```
pink-md-website/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── public/
│   ├── robots.txt          # AI crawler permissions
│   ├── sitemap.xml         # Sitemap for search engines
│   └── ai-context.md       # AI-friendly artist info
├── .well-known/
│   └── ai-plugin.json      # AI plugin manifest
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── README.md              # This file
```

## 🔍 SEO Checklist

- [x] Meta title and description
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Structured data (JSON-LD)
- [x] Semantic HTML
- [x] Alt text for images
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Mobile responsive
- [x] Fast loading (Next.js optimization)
- [x] HTTPS (via Vercel)
- [x] Canonical URLs

## 🤖 AI Discoverability Checklist

- [x] AI crawler permissions in robots.txt
- [x] Structured data for all content
- [x] AI context document
- [x] Clear, descriptive content
- [x] Semantic HTML structure
- [x] AI plugin manifest
- [x] Rich metadata
- [x] Accessible markup (ARIA labels)

## 📧 Contact Integration

The booking form currently opens the user's email client. To use a backend:

1. Create API route: `/app/api/booking/route.ts`
2. Add email service (SendGrid, Resend, etc.)
3. Update form submission in `/app/page.tsx`

Example with Resend:

```typescript
// app/api/booking/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'bookings@pinkmd.fm',
    to: 'booking@pinkmd.fm',
    subject: 'New Booking Inquiry',
    html: `<p>Name: ${data.name}</p>...`
  });
  
  return Response.json({ success: true });
}
```

## 🎯 Performance

- Next.js automatic code splitting
- Image optimization (use Next.js Image component for local images)
- CSS optimization via Tailwind
- Vercel Edge Network CDN

## 📱 Social Media

Update social media links when available:
- Instagram
- TikTok
- Twitter/X
- YouTube

Add to navigation and footer in `/app/page.tsx`.

## 🔐 Environment Variables

Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_SITE_URL=https://pinkmd.fm
RESEND_API_KEY=your_api_key
CONVERTKIT_API_KEY=your_api_key
```

## 📊 Analytics

Add analytics by updating `/app/layout.tsx`:

```typescript
// Google Analytics
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🎵 Music Platform Integration

Current integrations:
- ✅ Spotify embeds
- ✅ SoundCloud embeds

Add more:
- Apple Music
- YouTube Music
- Bandcamp
- Tidal

## 📝 License

© 2025 Pink MD. All rights reserved.

## 🆘 Support

For technical issues or questions:
- Email: booking@pinkmd.fm
- GitHub Issues: [Create an issue](YOUR_REPO_URL/issues)

---

**Built with ❤️ for Pink MD - Bloomberg Barbie**

Stream "Efficient" now on [Spotify](https://open.spotify.com/intl-de/track/3XnhaW5Ci1k1BeRlsxwUQD) and [SoundCloud](https://soundcloud.com/dy5pxvj75xav)!
