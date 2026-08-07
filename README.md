# Mehfooz-ur-Rehman Portfolio

Premium portfolio for Mehfooz-ur-Rehman, built with Next.js App Router, TypeScript, Tailwind CSS, and Firebase Hosting.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Firebase Hosting static export

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

## Deployment

The site exports to `out` and deploys to Firebase Hosting.

```bash
pnpm build
firebase deploy --only hosting:mehfooz-ur-rehman --project mehfooz-ur-rehman
```

Deploy locally with the Firebase CLI after logging in from your machine.

## Contact form

The contact form sends directly through EmailJS and delivers to `mehfoozijaz786@gmail.com`.

Set these EmailJS environment variables before deploying:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
