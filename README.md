# 💇 Hairdresser Website - Complete Guide

A modern, professional single-page website for hairdressing businesses with multi-language support, dark/light mode, and full responsiveness.

## 📋 Table of Contents
- [Features](#features)
- [Quick Start](#quick-start)
- [File Structure](#file-structure)
- [Customization Guide](#customization-guide)
- [Adding Product Images](#adding-product-images)
- [Changing Colors](#changing-colors)
- [Adding More Languages](#adding-more-languages)
- [Troubleshooting](#troubleshooting)

---

## ✨ Features

✅ **Multi-language Support**: Italian (default), Russian, and English  
✅ **Dark/Light Mode**: Theme toggle with saved preferences  
✅ **Fully Responsive**: Works perfectly on mobile, tablet, and desktop  
✅ **Telegram Integration**: Link to your product channel  
✅ **WhatsApp Contact**: Direct booking button  
✅ **Modern Design**: Clean, professional, and elegant  
✅ **Smooth Animations**: Fade-in effects and hover transitions  
✅ **Easy to Customize**: Clear comments and simple structure  

---

## 🚀 Quick Start

### Option 1: Open Locally
1. **Download all files** to a folder on your computer
2. **Double-click** `index.html` to open in your browser
3. That's it! The website will work immediately

### Option 2: Upload to Web Hosting
1. Upload all 3 files to your web hosting service:
   - `index.html`
   - `style.css`
   - `script.js`
2. If you add product images, create an `images` folder and upload them too
3. Your website will be live!

---

## 📁 File Structure

```
hairdresser-website/
├── index.html          # Main HTML structure (content)
├── style.css           # All styling (colors, layout, design)
├── script.js           # Interactive features (language, theme, menu)
├── README.md           # This guide
└── images/             # Create this folder for your product photos
    ├── product1.jpg
    ├── product2.jpg
    └── salon.jpg
```

---

## 🎨 Customization Guide

### 1️⃣ Change Business Name & Info

**In `index.html`:**

Find and replace these:
```html
<!-- Line 23: Logo -->
<a href="#home" class="logo">Eleganza</a>
<!-- Change to: -->
<a href="#home" class="logo">Your Salon Name</a>

<!-- Line 48: Hero Title -->
<h1 class="hero-title">Eleganza Hair Studio</h1>
<!-- Change to: -->
<h1 class="hero-title">Your Salon Name</h1>
```

### 2️⃣ Update Contact Information

**Telegram Channel:**
```html
<!-- Line 81: Find this link -->
<a href="https://t.me/YOUR_CHANNEL_HERE" target="_blank">
<!-- Change to: -->
<a href="https://t.me/youractualchannel" target="_blank">
```

**WhatsApp Number:**
```html
<!-- Line 247: Find this link -->
<a href="https://wa.me/39123456789" target="_blank">
<!-- Change to your number (format: countrycode + number, no spaces): -->
<a href="https://wa.me/393451234567" target="_blank">
```

### 3️⃣ Edit Services & Prices

**In `index.html` (starting from line 211):**

Find each service card and modify:
```html
<div class="service-card">
    <i class="fas fa-cut service-icon"></i>
    <h3 class="service-name">Your Service Name</h3>
    <p class="service-description">Your service description</p>
    <p class="service-price">€XX</p>
</div>
```

---

## 📸 Adding Product Images

### Method 1: Using Real Images (Recommended)

1. **Create an `images` folder** in the same location as your HTML file

2. **Add your product photos** to the `images` folder:
   - Name them clearly: `product1.jpg`, `product2.jpg`, etc.
   - Recommended size: 800x800 pixels
   - Formats: JPG, PNG, or WEBP

3. **In `index.html`, find the product card** (around line 95):

**Replace this:**
```html
<div class="product-image">
    <i class="fas fa-spray-can"></i>
</div>
```

**With this:**
```html
<div class="product-image">
    <img src="images/product1.jpg" alt="Product Name">
</div>
```

4. **Repeat for all products**, changing the image filename each time

### Method 2: Using Icons (Quick & Simple)

If you don't have product photos yet, just change the icon:

```html
<div class="product-image">
    <i class="fas fa-YOUR-ICON-HERE"></i>
</div>
```

**Popular hair product icons:**
- `fa-spray-can` - Spray products
- `fa-pump-soap` - Shampoo/liquid products  
- `fa-soap` - Masks/creams
- `fa-fire` - Heat protection
- `fa-droplet` - Serums/oils
- `fa-bottle-droplet` - Bottles

Find more icons at: [fontawesome.com/icons](https://fontawesome.com/icons)

### 4️⃣ Add/Remove Products

**To add a new product:**

1. Copy an entire product card (lines 90-109 in `index.html`)
2. Paste it before the closing `</div>` of `products-grid`
3. Change the image, name, description, and price

**To remove a product:**

Simply delete the entire `<div class="product-card">...</div>` block

---

## 🎨 Changing Colors

### Change Brand Colors

**In `style.css` (lines 10-20), change these values:**

```css
:root {
    --primary-color: #d4a574;      /* Change this to your main brand color */
    --secondary-color: #8b6f47;    /* Darker shade of your brand color */
    --accent-color: #c9986a;       /* Lighter accent color */
}
```

**Example color schemes:**

**Elegant Purple:**
```css
--primary-color: #8b5cf6;
--secondary-color: #6d28d9;
--accent-color: #a78bfa;
```

**Modern Blue:**
```css
--primary-color: #3b82f6;
--secondary-color: #1d4ed8;
--accent-color: #60a5fa;
```

**Luxury Rose Gold:**
```css
--primary-color: #e0a6a6;
--secondary-color: #c48484;
--accent-color: #f5c4c4;
```

---

## 🌍 Adding More Languages

**In `script.js` (starting from line 24):**

1. Copy the entire Italian language object:
```javascript
es: {  // Spanish example
    'nav-home': 'Inicio',
    'nav-products': 'Productos',
    'nav-services': 'Servicios',
    // ... translate all the keys
}
```

2. Add the language option in `index.html`:
```html
<div class="lang-option" data-lang="es">🇪🇸 Español</div>
```

---

## 🛠️ Troubleshooting

### Images Not Showing?
- Check the file path is correct: `images/product1.jpg`
- Make sure the image file exists in the `images` folder
- Check the file extension matches (jpg vs jpeg vs png)

### Website Looks Broken?
- Make sure all 3 files are in the same folder
- Check that `style.css` and `script.js` filenames are correct
- Open browser console (F12) to check for errors

### Language Not Switching?
- Check that your translations are complete in `script.js`
- Make sure each `data-translate` attribute has a matching key
- Clear browser cache and reload

### WhatsApp Button Not Working?
- Verify the phone number format: `https://wa.me/393451234567`
- No spaces, no dashes, no + sign
- Include country code (39 for Italy, 1 for USA, etc.)

---

## 📱 Responsive Design

The website automatically adjusts to different screen sizes:

- **Desktop** (1200px+): Full layout with multiple columns
- **Tablet** (768px-1199px): Adjusted layout
- **Mobile** (< 768px): Single column, hamburger menu

---

## 🎯 Tips for Best Results

1. **Use high-quality product images** (at least 800x800px)
2. **Keep descriptions concise** (2-3 sentences max)
3. **Update prices regularly** to stay current
4. **Test on mobile devices** - most customers will view on phones
5. **Add your real contact info** - make it easy for customers to reach you
6. **Update the "About Us" section** with your unique story

---

## 📞 Support

If you need help:
1. Check the comments in the HTML, CSS, and JS files - they explain everything
2. Read this README carefully
3. Test in a different browser

---

## 📄 License

This website template is provided as-is for your hairdressing business. Feel free to customize it as needed!

**Last Updated**: 2025  
**Version**: 1.0

---

**Enjoy your new website! 💇✨**
