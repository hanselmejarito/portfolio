# Hansel V. Mejarito Jr. — Portfolio

Personal portfolio site built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## Features

- Hero, About, Experience, Projects, Skills, and Contact sections
- Auto-fetches public GitHub repos (falls back to curated project list for private repos)
- Dark theme with responsive layout
- Ready to deploy on Vercel (free tier)

## Getting started

**WSL users:** Install Node 20 in WSL (not Windows npm) to avoid UNC path errors:

```bash
# One-time setup (if you don't have nvm yet)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 20
nvm alias default 20
```

Then run the site:

```bash
source ~/.bashrc   # loads nvm — use WSL Node, not Windows npm
node --version     # should show v20.x, NOT v16 from /mnt/c/nvm4w
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit `src/lib/data.ts` to update:

- Personal info (`siteConfig`)
- Work experience (`experience`)
- Projects (`projects`)
- Skills (`skills`)

Change the GitHub username in `siteConfig.github` to pull public repos automatically.

## Deploy

```bash
npm run build
```

Push to GitHub and deploy on [Vercel](https://vercel.com) — connect the `portfolio` repo for automatic deployments.
