# Hajji Karim Kaliisa — Executive Portfolio

A state-of-the-art, responsive executive portfolio for **Hajji Karim Kaliisa**, showcasing over 22 years of transformative leadership across NGO & Media Administration, Executive Advisory, Broadcast Infrastructure, and Pan-African Telecommunications.

## Features & Highlights

- **Neumorphism (Soft UI) Design System**: Sculpted tactile cards, debossed metric sockets, dual light-and-dark box shadows, and smooth micro-interactions.
- **Dual Theme Support**: Interactive toggle between **Pristine Slate Neumorphism** (Light) and **Obsidian Dark Neumorphism** (Dark) with `localStorage` persistence.
- **Modular Architecture**: Clean separation of concerns across HTML5 (`index.html`), Vanilla CSS (`styles.css`), and JavaScript (`script.js`).
- **Tactile Direct Channels**: One-click WhatsApp chat (primary & alternative), direct telephone dialer, and official correspondence mailto link.
- **Responsive & Accessible**: Optimized for mobile, tablet, and desktop viewports with a smooth drawer navigation and keyboard accessibility (`Escape` key close).
- **Cloudflare Ready**: Pre-configured with `wrangler.jsonc` for static asset deployment on Cloudflare Pages / Workers.

## Project Structure

```
├── Hajji 1.jpeg       # Executive portrait
├── index.html         # Semantic HTML5 layout
├── styles.css         # Neumorphic CSS design tokens & responsive styles
├── script.js          # Theme controller, scrollspy, and drawer interaction
├── favicon.svg        # Scalable executive monogram favicon
├── profile.svg        # High-res vector portrait fallback
├── wrangler.jsonc     # Cloudflare deployment configuration
└── README.md          # Project documentation
```

## Deployment

The repository is integrated with **Cloudflare Pages / Workers**. Every push to the `main` branch automatically triggers an optimized deployment.
