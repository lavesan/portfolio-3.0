# Hero Landing Page

## Project Overview

A modern, responsive landing page built with Next.js 13+ and TypeScript, featuring a professional portfolio and service offering showcase. The project implements internationalization (pt-BR/en), animations, and a sophisticated design system.

## Technologies

- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Internationalization**: Custom implementation with TypeScript

## Architecture

### Directory Structure

```
├── app/                    # Next.js app directory
│   ├── [locale]/          # Locale-specific routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout with metadata
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── sections/         # Page sections
├── data/                 # Static data and configurations
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets
└── types/               # TypeScript type definitions
```

### Key Components

1. **Header**: Navigation and language switcher
2. **HeroSection**: Main landing section with CTA
3. **ProjectsSection**: Portfolio showcase with modal gallery
4. **AboutSection**: Personal information and experience
5. **HowItWorksSection**: Service process explanation
6. **TrustedCompaniesSection**: Social proof section
7. **FinalCTASection**: Call-to-action closure
8. **Footer**: Site footer with links

### Features

- Responsive design for all screen sizes
- Dark mode by default
- Smooth animations and transitions
- Image gallery with modal view
- Interactive carousel for projects
- Chat integration via Typebot
- Analytics integration (GTM & Facebook Pixel)
- SEO optimization with metadata
- Custom loading states and error handling

## Business Rules

### Content Management

1. Projects are managed through `data/projects.ts`
2. Translations are handled in `lib/translations.ts`
3. Images are stored in `/public/project-images/`

### User Experience

1. CTAs should be prominent and easily accessible
2. Navigation should be smooth and intuitive
3. Project gallery should be easily browsable
4. Chat widget should be readily available
5. Performance should be optimized for quick loading

### Internationalization

1. Supports English and Portuguese (Brazil)
2. Content adapts based on user's language selection
3. URLs reflect the selected language
4. Dates and numbers format according to locale

### Analytics & Tracking

1. Google Tag Manager integration
2. Facebook Pixel for conversion tracking
3. Environment variables for analytics IDs

### Performance Requirements

1. Core Web Vitals optimization
2. Image optimization
3. Lazy loading for off-screen content
4. Minimal bundle size

## Environment Variables

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXXXX
```

## Development Guidelines

1. Use TypeScript strict mode
2. Follow component-based architecture
3. Implement responsive design patterns
4. Optimize for accessibility
5. Maintain clean code structure
6. Document complex implementations
7. Use semantic HTML elements
8. Follow Tailwind CSS best practices

## Deployment

- Vercel platform
- Automatic deployments from main branch
- Environment variable configuration
- Edge functions support
- Asset optimization

## Future Enhancements

1. Blog integration
2. Case studies section
3. Testimonials carousel
4. Performance monitoring
5. A/B testing setup
6. Enhanced analytics
7. Newsletter integration
8. Contact form alternative
