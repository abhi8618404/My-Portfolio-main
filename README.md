## GitHub Pages deployment

This project is configured to build into the `docs/` folder so GitHub Pages can serve it from the
main branch using **Settings → Pages → Deploy from a branch → /docs**.

**Deploy steps**
1. Run `npm install` if needed.
2. Run `npm run build`.
3. Commit the updated `docs/` output.
4. In GitHub Pages settings, select the `main` branch and the `/docs` folder.
