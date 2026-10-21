# Portfolio (v6)

A personal portfolio built with React, Vite and TypeScript. It presents the owner's skills, the client work they have delivered, a GitHub activity view and a contact form.

**Status:** Shipped. The site has a Firebase Hosting deploy script, reads client data from a production API, and its contact form sends through EmailJS. It has no automated tests.

## The problem

A freelance developer needs one page that shows what they can do and what they have delivered for real clients, and that gives potential employers a direct way to get in touch. This repo is that page.

## What it does

- Home screen with an intro and services section (`src/screens/Home.tsx`, `src/components/HomeSection.tsx`, `Services.tsx`).
- Client work and testimonials. The client list is loaded from the production API at `dsmeglobal-api-production.up.railway.app/api/v1/get_client` (`src/components/Clients.tsx`, `Testimonials.tsx`).
- Work section and a project archive page that lists the owner's GitHub repositories (`src/components/Work.tsx`, `src/screens/Archive.tsx`).
- GitHub contribution calendar (`src/components/GithubCalender.tsx`).
- Contact form that sends with `@emailjs/browser` (`src/components/Contact.tsx`).

## How it's built

- React 18 with TypeScript, bundled by Vite. Styling is a single SCSS file (`src/styles.scss`).
- Data fetching uses SWR with a small `fetcher` helper in `src/utils/fetcher.tsx`. The GitHub requests send a bearer token from `VITE_GITHUB_TOKEN`.
- Components are split by section under `src/components/`, and screens live in `src/screens/`.
- Firebase Hosting is set up with `firebase.json` and `.firebaserc`. The `deploy` script builds and runs `firebase deploy`.

## Running it locally

```bash
pnpm install   # yarn.lock and pnpm-lock.yaml are both committed
# add VITE_GITHUB_TOKEN to a .env file if the GitHub requests need it
pnpm dev       # Vite dev server
pnpm build     # production build
```

Other scripts: `preview` (Vite preview) and `deploy` (build, then Firebase deploy).

## What's left

- No tests of any kind.
- Client and project content is loaded at runtime from the API and GitHub, with no fallback if those requests fail.
- Both `yarn.lock` and `pnpm-lock.yaml` are committed, so the package manager is not settled.
