# Mohamed Firas Berriri - Cosmic Portfolio

A production-ready, visually stunning portfolio built with **React**, **Vite**, **Framer Motion**, and **Tailwind CSS**. This cosmic-themed portfolio showcases DevOps, Cloud Infrastructure, and Data Automation expertise with advanced animations, glassmorphism effects, and accessibility features.

## 🌟 Features

### **Visual Design**
- **Cosmic Theme**: Deep navy/black background with metallic gold/bronze accents and iridescent highlights
- **Animated Star Field**: Canvas-based constellation background with twinkling stars
- **Glassmorphism**: Backdrop-blur effects on navigation and cards
- **Parallax Effects**: Smooth scroll-linked animations throughout
- **Floating Particles**: Animated particles in hero section
- **Iridescent Hover States**: Purple/blue gradient transitions on interactive elements

### **Sections**
1. **Hero**: Full-height introduction with animated typography and social links
2. **About**: Bio, education timeline, language proficiency bars, and quick stats
3. **Experience**: Filterable project cards (DevOps, Automation, Engineering) with detailed highlights
4. **Skills**: Categorized skill badges with proficiency levels and animated progress bars
5. **Achievements**: Timeline of certifications, leadership roles, and associations
6. **Contact**: Validated contact form with React Hook Form and contact information cards
7. **Footer**: Quick links, social icons, and theme toggle

### **Technical Highlights**
- ⚡ **Vite** for lightning-fast HMR and optimized builds
- 🎭 **Framer Motion** for 60fps animations
- 🎨 **Tailwind CSS** with custom cosmic color palette
- ♿ **WCAG 2.1 AA Compliant**: Focus states, reduced-motion support, semantic HTML
- 📱 **Fully Responsive**: Mobile-first design with breakpoint-aware layouts
- 🌙 **Dark Mode Toggle**: Class-based theme switching with localStorage persistence
- 🚀 **Performance Optimized**: Code-splitting, lazy loading, optimized animations

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3
- **Animation**: Framer Motion 11
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Fonts**: Inter (body), Space Grotesk (display)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Color Palette

```javascript
// Primary Dark
cosmic-dark: #0a0e27
cosmic-darker: #1a1f3a
cosmic-slate: #1e293b

// Metallic Accents
metallic-gold: #c9a961
metallic-bronze: #b8860b

// Iridescent Highlights
iridescent-purple: #7c3aed
iridescent-blue: #3b82f6
iridescent-indigo: #6366f1
```

## ♿ Accessibility

- **Focus States**: Custom visible focus indicators on all interactive elements
- **Keyboard Navigation**: Full keyboard support for all features
- **Screen Reader Support**: Semantic HTML, ARIA labels, and skip links
- **Color Contrast**: WCAG 2.1 AA compliant contrast ratios
- **Reduced Motion**: Respects user's motion preferences

## 📝 Configuration

Update your profile information in `src/config/profile.js`

## 📧 Contact

**Mohamed Firas Berriri**
- Email: mohamedfiras.berriri@etudiant-enit.utm.tn
- LinkedIn: [linkedin.com/in/mohamed-firas-berriri-287b06337](https://linkedin.com/in/mohamed-firas-berriri-287b06337)
- GitHub: [github.com/Firas-eng-hub](https://github.com/Firas-eng-hub)

---

**Built with ❤️ using React + Vite**

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## SEO and Google Analytics 4

The production build includes crawlable profile HTML (before React loads), Person/ProfilePage structured data, a canonical URL, social sharing metadata, a 1200×630 share image, a custom favicon, `robots.txt`, and `sitemap.xml`. The default canonical URL is `https://portfolioo-psi-rouge.vercel.app/`. Only the homepage belongs in the sitemap; section anchors are not separate pages. React replaces the static profile with the interactive portfolio when JavaScript loads. Keep the static template in `scripts/seo.js` aligned with the visible sections when changing the design; profile content is shared from `src/config/profile.js`.

### Configure Vercel

1. In Vercel **Project → Settings → Environment Variables**, set `VITE_SITE_URL` to your final HTTPS website URL if it differs from the default. Use the same domain consistently; redirect alternate domains to it.
2. In Google Analytics, create a **GA4 property → Web data stream** for your website. Copy its **Measurement ID** (`G-…`, not the property ID).
3. The public GA4 Measurement ID `G-PMXF2TEJFZ` is configured in the tracked `.env.production` file. Vercel Production environment variables can override it; set `VITE_GA_MEASUREMENT_ID` to an empty value to disable analytics. Vercel preview deployments disable analytics automatically. These `VITE_` values are public build settings, never credentials. Redeploy after changing them.
4. In the web stream's **Enhanced measurement** settings, disable automatic form interactions, outbound clicks, and browser-history page changes for this configuration. This implementation sends one explicit page view per accepted page load; avoid duplicate tracking or collecting email/phone link targets. Do not install another GA tag or GTM container alongside it.
5. On the deployed site, accept analytics and check **GA4 → Realtime** for your visit (ad blockers may prevent collection). Declining analytics must produce no initial Google tag request. Use **Analytics preferences** in the footer to withdraw consent. Analytics never initializes in `npm run dev` or without a valid ID. It sends no contact form contents or custom lead events; the current contact form only simulates submission.

Analytics is opt-in: no Google tag is loaded until accepted. Choices persist locally; withdrawal disables collection and removes accessible GA cookies. Query strings and fragments are excluded from the configured page location, and only the referrer's origin is sent. Add a site-specific privacy notice explaining your GA usage, retention, and contact details before enabling analytics; the Google privacy link does not replace your own notice.

For local production testing, run `npm run build` and `npm run preview`; the configured production ID is used. To override it locally, copy `.env.example` to `.env.local` and enter your ID. Never commit local environment files.

### Google Search Console

After deployment, add and verify the site in [Google Search Console](https://search.google.com/search-console/) (DNS verification for a domain property, or the supplied HTML file for a URL-prefix property). Submit `https://portfolioo-psi-rouge.vercel.app/sitemap.xml` and use URL Inspection to request indexing of the homepage. Check that Vercel deployment protection is off for the public production site. Search indexing and rankings are controlled by Google and are not guaranteed by these files.

### Validation

Run `node --test tests/*.test.js` and `npm run build`. Check the deployed HTML source for the profile content, canonical link, and JSON-LD, and fetch `/robots.txt`, `/sitemap.xml`, and `/social-preview.png`. Run PageSpeed Insights on the deployed site to measure Core Web Vitals. The existing large animation bundle remains a performance improvement opportunity; code splitting and animation optimizations can be handled separately.
