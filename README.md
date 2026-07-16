# timeForP6
"Time for P6" conference panel preparation for 2026 TEI Conference

## Contributing to This Presentation

This repo hosts a [reveal.js](https://revealjs.com/) presentation built with [Vite](https://vitejs.dev/) and deployed to GitHub Pages via the `gh-pages` branch.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node)
- Git

## Getting Started

1. **Clone the repo** (with https or ssh) and change directories into it. 
   ```bash
   git clone <our repo clone info>
   cd timeForP6
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This installs reveal.js, Vite, and the `gh-pages` deploy tool as defined in `package.json`.

3. **Run the dev server**
   ```bash
   npm run dev
   ```
   This starts Vite's local dev server (usually at `http://localhost:5173`) with live reload. Edit `index.html` or `main.js` and the browser updates automatically.

## Project Structure

```
.
├── index.html       # Slide content lives here (<section> per slide)
├── main.js          # Reveal.js initialization + plugins/theme imports
├── vite.config.js    # Vite config, including the `base` path for GitHub Pages
├── package.json
└── dist/             # Build output (generated, not committed)
```

## Working in Branches

We use feature branches and pull requests rather than committing directly to `main`.

1. **Create a branch off `main`** for your change:
   ```bash
   git checkout main
   git pull
   git checkout -b your-name/short-description
   ```
   (e.g. `alex/add-intro-slides`)

2. **Make your changes**, testing locally with `npm run dev` as you go.

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Describe the change"
   git push -u origin your-name/short-description
   ```

4. **Open a Pull Request** on GitHub against `main`. Add a short description of what changed — new slides, plugin additions, styling, etc.

5. Once reviewed and merged into `main`, someone with deploy access can publish the update (see below).

> **Note:** `main` is the source branch for editing content. `gh-pages` is a generated/deploy-only branch — never edit it directly or open PRs against it. It gets overwritten every time someone runs `npm run deploy`.

## Deploying

Only merge to `main` first, then deploy from `main`:

```bash
npm run deploy
```

This runs `vite build` (producing `dist/`) and pushes that output to the `gh-pages` branch, which GitHub Pages serves automatically.

Live site: `https://<org-or-user>.github.io/<repo-name>/`

## Adding Slides

Slides live in `index.html` inside `<div class="slides">`. Each top-level `<section>` is a new slide; nested `<section>` elements create vertical slide stacks. See the [reveal.js documentation](https://revealjs.com/markup/) for markup options, and `main.js` for enabled plugins (e.g. Markdown, syntax highlighting).

## Troubleshooting

- **Styles/scripts 404 after deploying:** Check that `base` in `vite.config.js` matches your repo name exactly (`/repo-name/`), including leading/trailing slashes.
- **Local dev looks fine but the deployed site is broken:** This is almost always the `base` path issue above — Vite assumes root (`/`) locally but GitHub Pages serves from a subpath.
- **`npm run deploy` fails with a permissions error:** Confirm you have push access to the repo, and that the `gh-pages` branch isn't protected in a way that blocks force-pushes (the `gh-pages` package force-pushes the build output each time).

*These instructions were speedily generated and adapted with help from Claude Sonnet 5, 2026-07-16. 