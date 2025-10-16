# 📸 Image Setup Guide

## Quick Setup - Add Your Images

Your website is configured to use your custom Pink MD images. Follow these steps:

### Step 1: Save Your Images

You have 2 images to add to the website:

1. **Image 1: Pink NYC Skyline** (Empire State Building with pink filter)
2. **Image 2: Pink Lamborghini** (Luxury car)

### Step 2: Add Images to Project

Save the images to the `/public/images/` folder with these exact names:

```
pink-md-website/
└── public/
    └── images/
        ├── nyc-skyline-pink.jpg    ← Image 1 (NYC skyline)
        └── pink-lamborghini.jpg    ← Image 2 (Pink car)
```

### Step 3: Rename Files

Make sure the files are named exactly:
- `nyc-skyline-pink.jpg`
- `pink-lamborghini.jpg`

### Where These Images Appear

✅ **NYC Skyline (`nyc-skyline-pink.jpg`):**
- Hero section background
- Gallery (first image)
- Social media preview (Open Graph/Twitter)

✅ **Pink Lamborghini (`pink-lamborghini.jpg`):**
- About/Press section
- Gallery (second image)

## Alternative: Use Command Line

If you have the images in your Downloads folder, you can copy them:

```bash
# Navigate to project
cd /Users/user/Downloads/imc_risk_outputs/pink-md-website

# Create images directory if it doesn't exist
mkdir -p public/images

# Copy your images (adjust paths as needed)
cp ~/Downloads/your-nyc-image.jpg public/images/nyc-skyline-pink.jpg
cp ~/Downloads/your-car-image.jpg public/images/pink-lamborghini.jpg
```

## Verify Setup

After adding the images, run:

```bash
npm run dev
```

Open http://localhost:3000 and you should see:
- Pink NYC skyline as the hero background
- Pink Lamborghini in the About section
- Both images in the gallery

## Image Optimization Tips

For best performance:
- **Recommended size:** 1600x900px for hero, 1200x800px for others
- **Format:** JPG or WebP
- **File size:** Keep under 500KB each (compress if needed)

Use tools like:
- [TinyPNG](https://tinypng.com) - Free image compression
- [Squoosh](https://squoosh.app) - Google's image optimizer

## Troubleshooting

**Images not showing?**
1. Check file names match exactly (case-sensitive)
2. Ensure images are in `/public/images/` folder
3. Restart dev server (`npm run dev`)
4. Clear browser cache (Cmd+Shift+R)

**Need different images?**
Edit `/app/page.tsx` and update the `IMAGES` constant:

```typescript
const IMAGES = {
  hero: "/images/your-hero-image.jpg",
  press: "/images/your-press-image.jpg",
  gallery: [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    // ... add more
  ],
};
```

---

**All set!** Your Pink MD website is ready to showcase your brand with custom imagery. 🎵✨
