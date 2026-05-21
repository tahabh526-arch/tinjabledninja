# The Review — Magazine Website

A professional editorial magazine template built for GitHub Pages.

## Files

```
index.html       — Homepage with hero, article grids, sidebar
article.html     — Article template (copy this for each piece you write)
archive.html     — Full archive browsable by issue
about.html       — About the publication + team bios
css/style.css    — All styles
js/main.js       — Scroll reveal, reading progress bar, copy-link
```

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `the-review`)
2. Upload all files, preserving the folder structure (`css/`, `js/`)
3. Go to **Settings → Pages → Source → Deploy from branch → main**
4. Your site will be live at `https://yourusername.github.io/the-review/`

## Customising

### Publication name
Search and replace `THE REVIEW` and `A Journal of Ideas` across all HTML files.

### Sections / navigation
Edit the `<nav class="main-nav">` block in each file's masthead.

### Writing an article
1. Duplicate `article.html` and rename it (e.g. `my-first-essay.html`)
2. Fill in the title, deck, author info, and body text
3. Replace `<div class="placeholder-image ...">` blocks with real `<img>` tags
4. Link to it from `index.html` and `archive.html`

### Images
Replace every `<div class="placeholder-image ...">` with:
```html
<img src="images/your-image.jpg" alt="Description" />
```
Recommended sizes are noted in each placeholder.

### Colors
Edit the CSS variables at the top of `css/style.css`:
```css
:root {
  --crimson: #9b1c1c;   /* accent color */
  --gold:    #c9962a;   /* secondary accent */
  --cream:   #f7f4ef;   /* background */
  --ink:     #1a1612;   /* text */
}
```

### Fonts
The site uses Google Fonts (Playfair Display + Libre Baskerville + DM Sans).
To change them, update the `<link>` tag in each HTML file and the font variables in `style.css`.
