# TRCC Website

Tropical Research and Conservation Centre — built with Next.js 15 + Tailwind CSS 3.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    page.tsx          # Main page — composes all sections
    layout.tsx        # Root layout + metadata
    globals.css       # Global styles + Tailwind + Google Fonts
  components/
    Navbar.tsx        # Fixed navigation with mobile menu
    Hero.tsx          # Hero section with stats
    About.tsx         # Mission, vision, approach cards
    Thematic.tsx      # 6 thematic area cards (all linked)
    Projects.tsx      # Featured projects on dark bg
    Blog.tsx          # Latest blog posts
    TeamAndPartners.tsx # Team cards + partners strip
    Contact.tsx       # Contact form + details
    Footer.tsx        # Full footer with links
```

## Customisation

- **Colors**: Edit `tailwind.config.ts` to update the palette
- **Content**: All copy lives directly in each component — easy to swap
- **Fonts**: Loaded via Google Fonts in `globals.css`
- **Images**: Replace emoji placeholders with `<Image>` from `next/image` once you have real photos
