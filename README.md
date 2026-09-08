# SkillKwiz

SkillKwiz is a responsive skill-assessment and recruitment website built with Next.js. It presents skill-testing services, a homepage carousel, company information, blog content, and a role-based sign-in flow for employers and employees.

## Technology

- Next.js 15 with the App Router
- React 18.3 and TypeScript
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

## Useful scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Run the production build locally. |
| `npx tsc --noEmit` | Check TypeScript types without generating files. |

## Deployment checks

- Production builds validate TypeScript types.
- The application uses patched Next.js `15.5.24`.
- Test the homepage, About, Blog, and Services pages on desktop and mobile before publishing.
