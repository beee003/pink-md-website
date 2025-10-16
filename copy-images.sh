#!/bin/bash

# Pink MD - Image Copy Script
# This script copies your Pink MD images to the website

echo "🎨 Pink MD Image Setup"
echo "====================="
echo ""

# Check if images exist in Downloads
if [ -f ~/Downloads/nyc-skyline-pink.jpg ]; then
    cp ~/Downloads/nyc-skyline-pink.jpg public/images/
    echo "✅ Copied NYC skyline image"
else
    echo "❌ NYC skyline image not found in Downloads"
    echo "   Please save Image 1 (pink NYC skyline) as: ~/Downloads/nyc-skyline-pink.jpg"
fi

if [ -f ~/Downloads/pink-lamborghini.jpg ]; then
    cp ~/Downloads/pink-lamborghini.jpg public/images/
    echo "✅ Copied pink Lamborghini image"
else
    echo "❌ Pink Lamborghini image not found in Downloads"
    echo "   Please save Image 2 (pink car) as: ~/Downloads/pink-lamborghini.jpg"
fi

echo ""
echo "📁 Checking public/images/ folder:"
ls -lh public/images/

echo ""
echo "🚀 Next steps:"
echo "   1. Run: npm install"
echo "   2. Run: npm run dev"
echo "   3. Open: http://localhost:3000"
