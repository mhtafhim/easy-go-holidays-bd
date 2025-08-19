## Easy Go Holidays BD – Static Travel Agency Website

A modern, colorful, fully responsive travel agency site built with HTML, TailwindCSS (CDN), and vanilla JS. Optimized for GitHub Pages hosting.

### 🧩 Features
- **Responsive UI**: Mobile-first layout, sticky navbar, hamburger menu, active link highlight
- **Hero section**: Fullscreen image with gradient overlay and actionable buttons
- **Packages**: Large responsive cards with images, long descriptions, and price badges
- **Stats**: Animated counters with icons
- **Gallery**: Responsive grid with click-to-open lightbox
- **Reviews**: Auto-playing carousel with manual arrows
- **About & Contact**: Split layout, info cards, WhatsApp/email/phone CTAs
- **Design touches**: Gradients, shadows, hover transitions, scroll reveal animations

### 🛠️ Tech Stack
- **HTML** + **TailwindCSS (CDN)** + **Vanilla JS**
- Minimal custom CSS in `style.css` for reveal animations
- Zero build tools; 100% static

### 📁 Project Structure
- `index.html` – main site
- `script.js` – menu, active nav, counters, lightbox, slider, reveal, year
- `style.css` – small CSS for reveal animations

### ▶️ Run Locally
- Option 1: Open `index.html` directly in your browser
- Option 2: Serve with Python (recommended for a realistic preview)

```bash
# In the project folder
python3 -m http.server 8080
# Visit: http://localhost:8080
```

### 🧰 Customize
- **Branding**: Update logo text and hero content in `index.html`
- **Contact info**: Replace placeholders in `index.html`
  - WhatsApp button and sections: search for `8801XXXXXXXXX` and replace with your full number
  - Phone link: search for `tel:+8801XXXXXXXXX`
  - Email: search for `info@easygoholidaysbd.com`
- **Gallery/Packages**: Swap images and copy with your own
- **Colors**: Adjust Tailwind utility classes or extend Tailwind config inline in `index.html`

### 🚀 Deploy to GitHub Pages
1. Create a new public GitHub repository
2. Push these three files (`index.html`, `script.js`, `style.css`) to the repo root
3. In the repo: Settings → Pages → Build and deployment → Source: `Deploy from a branch`
4. Select branch `main` and folder `/ (root)`, Save
5. Wait ~1 minute; your site will be live at `https://<username>.github.io/<repo>`

### 🔒 Notes
- Tailwind is loaded via CDN for simplicity; no build step required
- All images are from Unsplash; avatars from RandomUser.me

### 📜 Credits
- Photos: Unsplash
- Avatars: RandomUser.me

© Easy Go Holidays BD. All rights reserved. 