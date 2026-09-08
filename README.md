# SkillKwiz

SkillKwiz is a responsive skill-assessment and recruitment website built with Next.js. It presents skill-testing services, a homepage carousel, company information, blog content, and a role-based sign-in flow for employers and employees.

## Technology

- Next.js 15 with the App Router
- React 19 and TypeScript
- Tailwind CSS
- Lucide React icons

## Pages and main features

| Route | Purpose |
| --- | --- |
| `/` | Homepage with the SkillKwiz carousel, authentication, testimonials, services, and call-to-action sections. |
| `/about` | Company and product information. |
| `/services` | Employee and employer sign-in, registration, profile, assessment, and candidate screens. |
| `/blog` | Blog cards and downloadable sample reports. |

Static images, videos, SVGs, and reports are located in `public/`. Reusable UI and page sections are in `components/`.

## Run locally

### Prerequisites

- Node.js 20 LTS or newer
- npm 10 or newer

### Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production commands

```bash
npm run build
npm run start
```

`npm run build` creates the optimized application and `npm run start` serves it locally.

## Deploy on Vercel

Vercel detects this as a Next.js application automatically; no `vercel.json` file is required.

1. Create a GitHub repository and push this project to it.
2. Sign in at [Vercel](https://vercel.com) with the same GitHub account.
3. Select **Add New → Project**, then import the repository.
4. Confirm the detected framework is **Next.js**.
5. Keep the default build command (`npm run build`) and output directory empty.
6. Select **Deploy**.

For deployments from your terminal, authenticate with Vercel first and then run:

```bash
npx vercel
# Use this only when you are ready to publish the production version:
npx vercel --prod
```

Vercel will provide a preview URL for each branch or pull request and a production URL for the default branch.

## Environment variables

The current project does not require any environment variables. If you add API keys later, create `.env.local` locally and add the same keys in **Vercel → Project Settings → Environment Variables**. Never commit `.env.local`.

## Project structure

```text
app/           Pages, layout, and global styling
components/    Shared sections, forms, header, footer, and UI components
contexts/      React context providers
hooks/         Reusable React hooks
lib/           Shared utilities
public/        Images, videos, SVGs, PDFs, and favicon source
styles/        Additional styles
```

## Notes for maintainers

- The application uses a fixed navigation bar, so new pages need top padding to keep content clear of it.
- Homepage carousel image assets live in `public/images/homepage/Carousel/`.
- The favicon source is `public/images/logo.png` and is configured in `app/layout.tsx`.
- `next.config.mjs` currently allows builds even when TypeScript errors exist. Resolve TypeScript errors before a production release that needs strict type checks.

## Useful scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Run the production build locally. |
| `npx tsc --noEmit` | Check TypeScript types without generating files. |
```
