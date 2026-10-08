# josephtw0305.github.io

Personal academic website of Chien-Chih (Joseph) Chen (陳建智), served by GitHub Pages.

Plain HTML and CSS with no build step. The design idea is a ledger and a seal,
in lake green (#008C8C) on mist-white paper: double rules under headings (the bookkeeping mark for a
closed total), dates set like transaction records, and a personal seal
(陳建智印) as the mark of someone who stands behind the work.

## Files

| File | What it holds |
|---|---|
| `index.html` | About page: guiding question, bio, research threads, news, selected publications |
| `publications.html` | Full publication list with filters, grouped by year |
| `experience.html` | Education, research, industry, teaching |
| `service.html` | Honors, service, mentoring |
| `assets/css/main.css` | All styles. Colours are the variables at the top; dark mode overrides them |
| `assets/js/site.js` | Light and dark theme, abstract and bibtex toggles, publication filters |
| `assets/img/` | Profile photo and favicon |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Common edits

**Add a news item.** In `index.html`, copy one `<li>` in the `ledger` list and put it
at the top. The tag can be Paper, Preprint, Talk, Service, Role, Milestone, or Award
(add `class="tag award"` for awards so it takes the seal colour).

**Add a paper.** Copy one `<article class="pub">` in `publications.html` into the right
year and set `data-type` to `peer` or `preprint`, then update the counts on the three
filter buttons. If it should also appear on the front page, copy it into "Selected
publications" in `index.html`. Each abstract and bibtex button opens the block whose
`id` matches its `data-toggle-target`, so give every new paper its own ids.

**Change the photo.** Replace `assets/img/prof_pic.jpg` with a new portrait cropped to
4:5 (420 x 525 pixels is plenty). Keep the same file name and every page picks it up.

**The masthead is repeated on every page.** When you change it, change all four pages
the same way; only the `active` link should differ.

**After changing the CSS or JS**, bump the `?v=` number on the two links in the
`<head>` of every page so browsers fetch the new file.

## Preview locally

```bash
python -m http.server 8765 --directory .
```

Then open http://localhost:8765.

## Publish

Push to the `main` branch of `Josephtw0305/Josephtw0305.github.io`. In the repository
settings, under Pages, choose "Deploy from a branch", branch `main`, folder `/ (root)`.
The site appears at https://josephtw0305.github.io within a few minutes.
