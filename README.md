# `plypieng.github.io`

Portfolio homepage for [plypieng](https://github.com/plypieng), built with Astro and deployed on GitHub Pages.

## Stack

- Astro 6
- TypeScript
- Plain CSS with a typed content model in `src/data/site.ts`
- GitHub Actions for Pages deployment

## Local Development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Content Model

Most site content is centralized in `src/data/site.ts`:

- `profile`
- `stats`
- `projects`
- `focusAreas`
- `timeline`
- `contactLinks`
- `copy`

That keeps the homepage easy to update without mixing portfolio content into layout markup.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the static site and deploys `dist/` to GitHub Pages.
