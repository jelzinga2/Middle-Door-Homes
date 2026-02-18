# Middle Door Homes Website

Production-ready institutional marketing site for Middle Door Homes using Next.js App Router, TypeScript, and Tailwind CSS.

## Stack 

- Next.js (App Router)
- TypeScript
- Tailwind CSS (v4)

## Routes

- `/` Home
- `/about` About Us
- `/asset-class` The Asset Class
- `/team` Team
- `/investor-login` Investor Login (placeholder login UI only)
- `/contact` Contact

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Production Checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, create a new project and import the repository.
3. Keep default build settings (`npm run build`, output: `.next`).
4. Deploy.
5. Add production domain (for example `www.middledoorhomes.com`) in Vercel project settings.

## SEO Files

- `src/app/layout.tsx` global metadata + OpenGraph defaults
- `src/app/sitemap.ts` sitemap
- `src/app/robots.ts` robots
