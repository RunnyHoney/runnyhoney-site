# runnyhoney-site

Personal site of **RunnyHoney** — styled as a cyberpunk terminal.

Static HTML / CSS / JS. No build step. Deployed to Cloudflare Pages.

## Local preview

Just open `index.html` in a browser, or:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

```sh
wrangler pages deploy . --project-name=runnyhoney-site
```

## Roadmap

- [ ] Wire up résumé page
- [ ] Add projects index
