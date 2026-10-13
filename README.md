# Wedding Site

A simple static wedding website — plain HTML, CSS, and JavaScript. No build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Structure

```
index.html      # all page sections
css/styles.css  # design tokens at the top (colors, fonts, spacing)
js/main.js      # nav, countdown, scroll reveal
images/         # photos
```

## Customizing

- **Names, date, venues:** edit `index.html`. The countdown reads the `data-date` attribute on `.countdown`.
- **Colors & fonts:** edit the variables in `:root` in `css/styles.css`. Background `#e6dfc9`, text `#281007`, secondary text `#5c3a2a`.
  - Sans: Lato. Serif: Georgia. Accent/cursive: Baskerville Display PT (via the `.script` class), which needs to be loaded from Adobe Fonts or self-hosted; it falls back to Georgia italic.
- **Hero photo:** see the comment in the `.hero` rule.
