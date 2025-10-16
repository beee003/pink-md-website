"use client";

import { useState } from "react";

/**
 * Pink MD - AI-Optimized Artist Website
 * 
 * ARTIST PROFILE:
 * Name: Pink MD (Maya)
 * Genre: Club Music, Pop, Finance-inspired Dance
 * Location: New York City, USA
 * Brand Identity: Finance culture meets club music
 * 
 * KEY TRACKS:
 * - "Efficient" - Finance-meets-club banger (Featured track)
 * 
 * SERVICES OFFERED:
 * - Live performances
 * - DJ sets
 * - Private events
 * - Brand collaborations
 * - Music licensing/syncs
 * 
 * CONTACT:
 * - Booking: booking@pinkmd.fm
 * - Spotify: https://open.spotify.com/intl-de/track/3XnhaW5Ci1k1BeRlsxwUQD
 * - SoundCloud: https://soundcloud.com/dy5pxvj75xav
 */

// ====== CONFIGURATION ======
const ARTIST_INFO = {
  name: "Pink MD",
  alterEgo: "",
  realName: "Maya",
  genre: ["Club Music", "Dance Pop", "Electronic"],
  location: "New York City, NY, USA",
  description: "NYC-based artist blending Wall Street culture with dance floor energy. Creating club-ready singles with luxury city vibes, hooks that stick, and lyrics with a wink to finance.",
  email: "booking@pinkmd.me",
  website: "https://pinkmd.me",
};

const MUSIC_LINKS = {
  spotify: "https://open.spotify.com/intl-de/track/3XnhaW5Ci1k1BeRlsxwUQD?si=b8c0d070df9048e4",
  soundcloud: "https://soundcloud.com/dy5pxvj75xav",
  featuredTrack: {
    title: "Efficient",
    description: "The finance-meets-club banger everyone's DM'ing",
    spotifyEmbed: "https://open.spotify.com/embed/track/3XnhaW5Ci1k1BeRlsxwUQD?utm_source=generator",
    soundcloudEmbed: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/dy5pxvj75xav&color=%23ff6699&inverse=false&auto_play=false&show_user=true",
  },
};

const IMAGES = {
  hero: "/images/nyc-skyline-pink.jpg", // Pink-tinted NYC skyline with Empire State Building
  press: "/images/pink-lamborghini.jpg", // Pink luxury Lamborghini
  gallery: [
    "/images/nyc-skyline-pink.jpg",
    "/images/pink-lamborghini.jpg",
    "https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=1200&auto=format&fit=crop",
  ],
};

// Structured data for AI and search engines
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      "@id": "https://pinkmd.me/#artist",
      "name": "Pink MD",
      "description": "NYC-based artist blending Wall Street culture with dance floor energy. Creating club-ready singles with luxury city vibes.",
      "genre": ["Club Music", "Dance Pop", "Electronic", "Pop"],
      "url": "https://pinkmd.me",
      "sameAs": [
        "https://open.spotify.com/intl-de/track/3XnhaW5Ci1k1BeRlsxwUQD",
        "https://soundcloud.com/dy5pxvj75xav",
      ],
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "addressCountry": "USA",
        },
      },
      "email": "booking@pinkmd.me",
    },
    {
      "@type": "MusicRecording",
      "@id": "https://pinkmd.me/#efficient",
      "name": "Efficient",
      "byArtist": {
        "@id": "https://pinkmd.me/#artist",
      },
      "genre": "Club Music",
      "description": "The finance-meets-club banger. High-energy dance track with Wall Street-inspired lyrics.",
      "url": "https://open.spotify.com/intl-de/track/3XnhaW5Ci1k1BeRlsxwUQD",
    },
    {
      "@type": "WebSite",
      "@id": "https://pinkmd.me/#website",
      "url": "https://pinkmd.me",
      "name": "Pink MD Official Website",
      "description": "Official website of Pink MD - NYC artist, DJ, and producer. Book for events, stream music, and get the latest updates.",
      "publisher": {
        "@id": "https://pinkmd.me/#artist",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://pinkmd.me/#webpage",
      "url": "https://pinkmd.me",
      "name": "Pink MD - Bloomberg Barbie | NYC Artist & DJ",
      "isPartOf": {
        "@id": "https://pinkmd.me/#website",
      },
      "about": {
        "@id": "https://pinkmd.me/#artist",
      },
      "description": "Pink MD is a NYC-based artist blending finance culture with club music. Available for bookings, brand collaborations, and private events.",
    },
    {
      "@type": "Service",
      "@id": "https://pinkmd.me/#booking",
      "serviceType": "Music Performance Booking",
      "provider": {
        "@id": "https://pinkmd.me/#artist",
      },
      "areaServed": "North America",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://pinkmd.me/#booking",
        "servicePhone": "+1 555 123 4567",
        "email": "booking@pinkmd.me",
      },
      "offers": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Live Performance",
            "description": "High-energy live music performance by Pink MD",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ Set",
            "description": "Professional DJ set with club-ready tracks and crowd engagement",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private Event",
            "description": "Exclusive performance for private events and parties",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Collaboration",
            "description": "Music licensing, brand partnerships, and sync opportunities",
          },
        },
      ],
    },
  ],
};

export default function PinkMD() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to your newsletter service (ConvertKit, Beehiiv, Mailchimp, etc.)
    setSubmitted(true);
  };

  return (
    <>
      {/* Structured Data for AI/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <header 
          className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10"
          role="banner"
        >
          <nav 
            className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3"
            aria-label="Main navigation"
          >
            <a href="#" className="text-xl font-semibold tracking-wide">
              Pink MD
            </a>
            <div className="flex items-center gap-3">
              <a
                href={MUSIC_LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/20 hover:border-white/60 transition"
                aria-label="Listen on Spotify"
              >
                Spotify
              </a>
              <a
                href={MUSIC_LINKS.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/20 hover:border-white/60 transition"
                aria-label="Listen on SoundCloud"
              >
                SoundCloud
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section 
          className="relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <img
            src={IMAGES.hero}
            alt="Pink MD performing live in NYC"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36">
            <div className="max-w-2xl">
              <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-pink-400">Pink MD</span>.
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/80">
                NYC finance girl energy. Club records, runway hooks, and clean hustle anthems.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={MUSIC_LINKS.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-pink-500 hover:bg-pink-400 transition"
                  aria-label="Listen to Pink MD on Spotify"
                >
                  <span>Listen on Spotify</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.39 14.56a.75.75 0 01-1.03.24 10.6 10.6 0 00-9.74-.6.75.75 0 11-.66-1.35 12.1 12.1 0 0111.13.69.75.75 0 01.3 1.02zm1.35-3.07a.94.94 0 01-1.29.3 13.65 13.65 0 00-12.56-.79.94.94 0 01-.71-1.75 15.14 15.14 0 0113.95.88.94.94 0 01.61 1.36zM18 9.1a1.13 1.13 0 01-1.56.36 16.75 16.75 0 00-14.9-.95A1.13 1.13 0 019 6.9a18.25 18.25 0 0116.27 1.03A1.13 1.13 0 0118 9.1z" />
                  </svg>
                </a>
                <a
                  href={MUSIC_LINKS.soundcloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:border-white/60 transition"
                  aria-label="Play Pink MD on SoundCloud"
                >
                  <span>Play on SoundCloud</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Track Section */}
        <section 
          className="mx-auto max-w-6xl px-4 py-12"
          aria-labelledby="featured-heading"
        >
          <h2 id="featured-heading" className="text-2xl md:text-3xl font-semibold">
            Featured: Efficient
          </h2>
          <p className="text-white/70 mt-2">
            {MUSIC_LINKS.featuredTrack.description}
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {/* Spotify Embed */}
            <iframe
              style={{ borderRadius: 12 }}
              src={MUSIC_LINKS.featuredTrack.spotifyEmbed}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Pink MD - Efficient on Spotify"
            ></iframe>

            {/* SoundCloud Embed */}
            <iframe
              width="100%"
              height="352"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={MUSIC_LINKS.featuredTrack.soundcloudEmbed}
              title="Pink MD - Efficient on SoundCloud"
            ></iframe>
          </div>
        </section>

        {/* Gallery Section */}
        <section 
          className="mx-auto max-w-6xl px-4 py-12"
          aria-labelledby="gallery-heading"
        >
          <h2 id="gallery-heading" className="text-2xl md:text-3xl font-semibold">
            Gallery
          </h2>
          <p className="text-white/70 mt-2">
            Shots from NYC, studio nights, and the Pink MD universe.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {IMAGES.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Pink MD ${i === 0 ? 'performing at NYC venue' : i === 1 ? 'in studio session' : i === 2 ? 'live DJ set' : 'behind the scenes'}`}
                className="w-full h-44 md:h-56 object-cover rounded-xl border border-white/10"
              />
            ))}
          </div>
        </section>

        {/* About / Press Section */}
        <section 
          className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-6 items-center"
          aria-labelledby="about-heading"
        >
          <article>
            <h2 id="about-heading" className="text-2xl md:text-3xl font-semibold">
              About Pink MD
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={MUSIC_LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-white text-black hover:bg-white/90 transition"
              >
                Stream on Spotify
              </a>
              <a
                href={MUSIC_LINKS.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-white/20 hover:border-white/60 transition"
              >
                SoundCloud
              </a>
              <a
                href="/PinkMD_EPK.pdf"
                download
                className="px-5 py-3 rounded-full bg-pink-500 hover:bg-pink-400 transition"
              >
                Download EPK
              </a>
            </div>
          </article>
          <img
            src={IMAGES.press}
            alt="Pink MD press photo - NYC artist and DJ"
            className="w-full h-72 md:h-[22rem] object-cover rounded-2xl border border-white/10"
          />
        </section>

        {/* Booking Form Section */}
        <section 
          id="booking" 
          className="mx-auto max-w-6xl px-4 py-12"
          aria-labelledby="booking-heading"
        >
          <div className="rounded-2xl border border-white/10 p-6 md:p-10 bg-white/5">
            <h3 id="booking-heading" className="text-2xl font-semibold">
              Booking
            </h3>
            <p className="text-white/70 mt-2">
              Tell us about your event and we'll get back within 24–48 hours.
            </p>
            <form
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const params = new URLSearchParams(formData as any);
                const body = Array.from(params.entries())
                  .map(([k, v]) => `${k}: ${v}`)
                  .join('\n\n');
                window.location.href = `mailto:${ARTIST_INFO.email}?subject=Booking%20Inquiry%20(Pink%20MD)&body=${encodeURIComponent(body)}`;
              }}
              aria-label="Booking inquiry form"
            >
              <input
                name="Name"
                placeholder="Your Name"
                required
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/15"
                aria-label="Your name"
              />
              <input
                name="Email"
                type="email"
                placeholder="Email"
                required
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/15"
                aria-label="Your email address"
              />
              <input
                name="Event Date"
                type="text"
                placeholder="Event Date"
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/15"
                aria-label="Event date"
              />
              <input
                name="City / Venue"
                placeholder="City / Venue"
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/15"
                aria-label="City or venue name"
              />
              <input
                name="Budget (USD)"
                placeholder="Budget (USD)"
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/15"
                aria-label="Budget in USD"
              />
              <select
                name="Set Type"
                className="px-4 py-3 rounded-xl bg-black/40 border border-white/15"
                aria-label="Type of performance"
              >
                <option>Live performance</option>
                <option>DJ set</option>
                <option>Private event</option>
                <option>Brand collab</option>
              </select>
              <textarea
                name="Message"
                placeholder="Tell us about the event"
                className="md:col-span-2 min-h-[120px] px-4 py-3 rounded-xl bg-black/40 border border-white/15"
                aria-label="Event details and message"
              ></textarea>
              <div className="md:col-span-2 flex gap-3">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-400 transition"
                >
                  Send Inquiry
                </button>
                <a
                  href="/PinkMD_EPK.pdf"
                  download
                  className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/60 transition"
                >
                  Download EPK
                </a>
              </div>
            </form>
          </div>
        </section>

        {/* Newsletter Section */}
        <section 
          className="mx-auto max-w-6xl px-4 py-16"
          aria-labelledby="newsletter-heading"
        >
          <div className="rounded-2xl border border-white/10 p-6 md:p-10 bg-white/5">
            <h3 id="newsletter-heading" className="text-2xl font-semibold">
              Be first to new drops
            </h3>
            <p className="text-white/70 mt-2">
              Get previews, show dates, and VIP invites straight to your inbox.
            </p>
            <form onSubmit={onSubmit} className="mt-6 flex flex-col md:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-black/40 border border-white/15 focus:outline-none focus:ring-2 focus:ring-pink-500"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-400 transition"
              >
                Subscribe
              </button>
            </form>
            {submitted && (
              <p className="text-green-300 mt-3" role="status">
                Thanks! You're on the list. (Wire this to your email tool next.)
              </p>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer 
          className="border-t border-white/10"
          role="contentinfo"
        >
          <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60">
              © {new Date().getFullYear()} Pink MD. All rights reserved.
            </p>
            <nav 
              className="flex items-center gap-4 text-white/70"
              aria-label="Footer navigation"
            >
              <a
                href={MUSIC_LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Spotify
              </a>
              <a
                href={MUSIC_LINKS.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                SoundCloud
              </a>
              <a href="#booking" className="hover:text-white">
                Booking
              </a>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}
