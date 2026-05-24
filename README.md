# RedShiftWyrm Site

A Vite + React starter site for the RedShiftWyrm lore archive.

## Local setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Upload this folder to a new GitHub repository called `redshiftwyrm-site`.
2. Go to Vercel.
3. Import that GitHub repo.
4. Vercel should auto-detect Vite.
5. Click Deploy.

## Updating content

Edit `src/App.jsx`.

Main sections:
- `loreTimeline`
- `characters`
- `apostleRules`
- `regions`
- `updates`

## Updating images

Replace image files in:

`public/images/`

Keep the same filenames unless you also update the paths in `src/App.jsx`.
