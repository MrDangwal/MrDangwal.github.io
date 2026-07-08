# Abhishek Dangwal — Portfolio

Dark neural-network themed portfolio built with **Next.js 14** (App Router) + **Tailwind CSS**, statically exported for **GitHub Pages**. Accent palette is the inferno colormap — the same gradient as every deep-learning activation heatmap.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content

Everything — name, metrics, experience, projects, skills — lives in **`data/profile.js`**. Components never hardcode content.

**TODO for you:** the seven project cards currently link to `https://github.com/MrDangwal` as a safe placeholder. Open `data/profile.js` and replace each `repo:` with the exact repo URL (e.g. `https://github.com/MrDangwal/<repo-name>`).

## Deploy to GitHub Pages

Paths are handled automatically — the workflow detects your repo name and sets the base path, so **any repo name works** with zero config changes:

| Repo name | Site URL |
|---|---|
| `mrdangwal.github.io` | `https://mrdangwal.github.io/` |
| anything else, e.g. `portfolio` | `https://mrdangwal.github.io/portfolio/` |

Steps:

1. Create the repo on GitHub and push this project to the `main` branch.
2. In the repo: **Settings → Pages → Source → GitHub Actions** (do this once).
3. Done — every push to `main` builds and deploys automatically via `.github/workflows/deploy.yml`.

A `.nojekyll` file is included so GitHub Pages serves Next.js's `_next/` assets correctly.

## Structure

```
app/            layout, page, global styles
components/     Nav, Hero (neural canvas), About, Experience, Projects, Skills, Footer
data/profile.js all site content
.github/        Pages deploy workflow
```
