# DUSKIN Landing Page

A minimalist, science-focused landing page for DUSKIN, a premium skincare brand that combines cutting-edge research with potent, clean ingredients to deliver visible results.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, and Tailwind CSS
- **Beautiful UI Components**: Built with Shadcn UI for a consistent design system
- **Smooth Animations**: Implemented with Framer Motion for delightful user experiences
- **Fully Responsive**: Mobile-first approach ensures great experience on all devices
- **Performance Optimized**: Lazy loading, image optimization, and reduced bundle sizes
- **Analytics Ready**: Integrated Firebase Analytics for tracking user engagement
- **Accessibility Focused**: WCAG 2.1 AA compliant with proper semantic structure
- **Developer Tools**: Integrated StageWise AI-powered editing toolbar for development

## ⚙️ Tech Stack

- **Frontend**: Next.js 14+, TypeScript, Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Analytics**: Firebase
- **Styling**: Tailwind CSS
- **Font**: DM Sans (Google Fonts)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd duskin-landing
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

```
duskin-landing/
├── public/           # Static files
├── src/              # Source code
│   ├── app/          # Next.js App Router
│   ├── components/   # React components
│   │   ├── sections/ # Page sections
│   │   └── ui/       # Reusable UI components
│   └── lib/          # Utility functions
├── next.config.ts    # Next.js configuration
└── package.json      # Dependencies
```

## 📱 Page Sections

- **Header**: Navigation menu with mobile responsiveness
- **Hero**: Split layout with product showcase
- **Social Proof**: Key metrics and achievements
- **Trusted By**: Partner logos and affiliations
- **About Us**: Company mission and values
- **Featured Product**: Main product with benefits
- **Skincare Routine Timeline**: Step-by-step skincare process
- **Testimonials**: Customer reviews carousel
- **Footer**: Contact information and newsletter signup

## 🔧 Performance Optimization

The landing page is optimized for performance:

- WebP image format support
- Lazy loading for below-the-fold content
- Image placeholders to prevent layout shifts
- Priority loading for critical above-the-fold content
- Optimized fonts with display=swap
- Package import optimization for smaller bundle sizes
- Support for reduced motion preferences

## 📝 Development Features

### StageWise Integration

The project includes the StageWise toolbar for AI-powered editing capabilities in development mode.

### Responsive Design

The landing page follows a mobile-first approach with responsive breakpoints:
- Mobile: Default styles
- Small: sm (640px+)
- Medium: md (768px+)
- Large: lg (1024px+)
- Extra Large: xl (1280px+)
- 2XL: 2xl (1536px+)

## 🚢 Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

The output will be generated in the `.next` directory and can be deployed to any hosting platform that supports Next.js:
- Vercel
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Self-hosted options

## 📄 License

This project is proprietary and confidential.

## 🙏 Credits

- UI Components: [Shadcn UI](https://ui.shadcn.com/)
- Icons: [Lucide](https://lucide.dev/)
- Font: [DM Sans](https://fonts.google.com/specimen/DM+Sans)
