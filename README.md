# AGAC Site Engineer Field Manual (Dubai, UAE Edition)

Offline-first Progressive Web App with 120 field tips for site engineers in Dubai, in six categories:
Gear & EDC, Dubai Regulations, Concrete & Hot-Weather, Substructure & Dewatering, QA/QC & ITP, and Site Management.

> Reference only. Verify limits and procedures against the current project specification, consultant instructions and authority circulars (DM, Trakhees, DEWA, DCD, RTA, MOHRE).

## Features
- Search, category filters, bookmarks (stored on device)
- Works offline (cache-first service worker)
- Installable (iOS: Share > Add to Home Screen; Android/desktop: Install button)
- Manifest shortcuts: `#concrete`, `#regulations`

## Deploy from an iPhone (no terminal)
1. Unzip the package in the Files app.
2. In Safari open github.com, sign in, tap **+ > New repository**, set it to Public and create it.
3. Tap **uploading an existing file**.
4. The iOS file picker often cannot select whole folders and hides dotfiles. Upload the root files first, then open each sub-folder (`assets/icons`, `screenshots`, `tests`, `docs`, `api`, `backend`, `database`, `config`) and upload its files using the path box (type `assets/icons/` etc. in the filename field on GitHub's **Add file > Create new file** page) or use GitHub's web upload on a desktop browser.
5. Commit. Then **Settings > Pages**, Deploy from a branch, `main`, `/ (root)`, Save.
6. Open the live URL in Safari and tap **Share > Add to Home Screen**.

Only `index.html`, `style.css`, `script.js`, `manifest.json`, `service-worker.js`, `offline.html`, the icons, `favicon.ico`, `assets/`, `api/`, `config/` and `docs/` are needed for the app to work. `.gitignore`, `.env.example`, `backend/`, `database/` and `tests/` are optional developer files.

## Local development
```bash
npm install
npm start      # static server via `serve`
npm test       # runs tests/app.test.js
node backend/server.js   # optional minimal Node server
```

## Structure
```text
index.html  style.css  script.js  manifest.json  service-worker.js  offline.html
favicon.ico  icon-192.png  icon-512.png  icon-512-maskable.png
assets/og-image.png  assets/icons/apple-touch-icon.png
screenshots/  tests/  docs/  api/tips.json  backend/server.js
database/schema.sql  config/site.config.js
README.md  LICENSE  package.json  .gitignore  .env.example
robots.txt  sitemap.xml  browserconfig.xml
```

Before publishing, replace `https://agac.ae/` in `robots.txt` and `sitemap.xml` with your real GitHub Pages URL, and confirm the company name and emergency contacts in `config/site.config.js`.

## License
MIT
