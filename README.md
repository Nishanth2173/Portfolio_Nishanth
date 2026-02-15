# Nishanth Nuthi - Portfolio Website

A modern, animated portfolio website built with Next.js 14, Tailwind CSS, and smooth animations.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router
- **Styling**: Tailwind CSS for responsive design
- **Animations**: Smooth CSS animations and transitions
- **Performance**: Optimized components and lazy loading
- **SEO**: Proper metadata and semantic HTML
- **Responsive**: Mobile-first design approach

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🛠️ Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Your Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  --accent: #6366f1;
  --accent-light: #818cf8;
  --card-bg: #1a1a1a;
}
```

### Content
Update your information in the component files:
- `components/Hero.js` - Hero section
- `components/About.js` - About section
- `components/Skills.js` - Skills and technologies
- `components/Projects.js` - Project showcase
- `components/Experience.js` - Work experience
- `components/Education.js` - Education and certifications
- `components/Contact.js` - Contact information

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder (if using static export)

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js           # Home page
├── components/
│   ├── Navbar.js         # Navigation bar
│   ├── Hero.js           # Hero section
│   ├── About.js          # About section
│   ├── Skills.js         # Skills section
│   ├── Projects.js       # Projects section
│   ├── Experience.js     # Experience section
│   ├── Education.js      # Education section
│   ├── Contact.js        # Contact section
│   └── Footer.js         # Footer
├── package.json
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
└── jsconfig.json
```

## 🔧 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm
- **Linting**: ESLint

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## ✨ Animations

The portfolio includes various animations:
- Fade-in effects
- Slide-up transitions
- Floating elements
- Glow effects
- Hover animations
- Staggered animations

## 📱 Responsive Design

Fully responsive design that works on:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 📧 Contact

**Nishanth Nuthi**
- Email: nishanthnuthi123@gmail.com
- Phone: +91 7013814085
- Location: Hyderabad, Telangana, India

---

Built with ❤️ using Next.js and Tailwind CSS
