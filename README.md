# Gantto Landing Page

A modern, elegant landing page for Gantto - Professional Project Timeline Manager. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark theme with vibrant gradients and glassmorphism effects
- **Fully Responsive**: Mobile-ready design that works on all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **Vercel Ready**: Optimized for deployment on Vercel

## 📁 Pages

- **Home** (`/`) - Hero section with features overview and CTA
- **Features** (`/features`) - Detailed feature showcase
- **Screenshots** (`/screenshots`) - Visual gallery of the application
- **Benefits** (`/benefits`) - Value propositions and comparison
- **Support** (`/support`) - FAQ and help center
- **Contact** (`/contact`) - Contact form and information
- **Privacy** (`/privacy`) - Privacy policy

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd gantto-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
```

## 🚀 Deploy to Vercel

The easiest way to deploy this Next.js app is to use Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 🎨 Customization

### Colors

The color scheme is defined in `app/globals.css` using CSS variables. Modify the `:root` section to change the theme:

```css
:root {
  --primary: 263 70% 50%;  /* Purple */
  --secondary: 217 33% 17%; /* Dark blue */
  /* ... more colors */
}
```

### Content

- Update page content in `app/[page]/page.tsx` files
- Modify navigation links in `components/Navbar.tsx`
- Update footer information in `components/Footer.tsx`

### Images

Place your screenshots in the `public/screenshots/` directory and update the image paths in the respective pages.

## 📝 Project Structure

```
gantto-landing/
├── app/
│   ├── benefits/         # Benefits page
│   ├── contact/          # Contact page
│   ├── features/         # Features page
│   ├── privacy/          # Privacy policy page
│   ├── screenshots/      # Screenshots page
│   ├── support/          # Support page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Footer.tsx        # Footer component
│   └── Navbar.tsx        # Navigation component
├── public/
│   └── screenshots/      # Screenshot images
└── package.json
```

## 🎯 Features Implemented

✅ Responsive navigation with mobile menu  
✅ Animated hero section with floating elements  
✅ Feature grid with hover effects  
✅ Screenshot gallery with alternating layout  
✅ Benefits comparison table  
✅ Interactive FAQ with search and filtering  
✅ Contact form with validation  
✅ Comprehensive privacy policy  
✅ Glass morphism effects  
✅ Smooth animations and transitions  
✅ SEO-optimized meta tags  
✅ Mobile-first responsive design  

## 📄 License

This project is created for Gantto by Karthikeyan T.

## 👨‍💻 Author

**Karthikeyan T**
- Email: tkarthikeyan@gmail.com
- GitHub: [@tkarthikeyan](https://github.com/carthworks)

---

Made with ❤️ using Next.js and Tailwind CSS
