# 🗯️ SIN.FILTRO — Landing Page

> **Decimos lo que otros solo susurran.** — Landing page de marca para *SIN.FILTRO*, estudio de comunicación y marketing directo con estética **neobrutalismo**.

Landing page estática construida con **Astro 7 + Tailwind CSS v4 + TypeScript**, preparada para **Cloudflare Pages**. Serie de 9 landing pages por estilo de diseño (este proyecto: **Brutalismo**).

---

## 🚀 Producción

| Recurso | URL |
|---|---|
| Producción (Cloudflare Pages) | `https://sinfiltro.stevemoya.me` *(cuando conectes el repo)* |
| Preview Pages | `https://landing-sinfiltro.pages.dev` |

---

## 🧱 Stack

- **Astro 7** — SSG puro, sin adaptador (Cloudflare Pages sirve `dist/`)
- **Tailwind CSS v4** — tokens de marca en `src/styles/global.css` (`@theme`)
- **TypeScript 5** estricto
- **Fontsource auto-hospedadas:** Archivo Black (display), Space Grotesk Variable (body), Space Mono (labels)
- **Vanilla JS** — menú móvil, header scrolled — CSP estricta sin `unsafe-eval` ni inline (`assetsInlineLimit: 0`)

## 📁 Arquitectura

```
src/
├── components/
│   ├── ui/          → Button, Card, Sticker, Icon, Section, Container
│   ├── layout/      → Header, Navigation, MobileMenu (vanilla JS), Footer
│   ├── sections/    → Hero (mega título + marquee), Manifesto, Services, Process, Stats, Testimonials, Contact
│   └── brand/       → Logo ("!" ¡rojo brutal!)
├── data/            → contenido tipado: site, services, process, stats, testimonials
├── layouts/BaseLayout.astro  → SEO + OG + JSON-LD
├── pages/           → index.astro, 404.astro
├── scripts/         → header (vanilla), reveal (IO)
└── styles/global.css → Design System: tokens brutales + reveal + reduced-motion
public/              → _headers (CSP), favicon.svg, robots.txt, og.png
```

## 🎨 Design System (Neobrutalismo)

| Token | Valor | Uso |
|---|---|---|
| `ink` | `#0D0D0D` | negro absoluto |
| `cream` | `#F4F1E8` | fondo |
| `brutal-yellow` | `#F7E700` | primary |
| `brutal-red` | `#FF3D00` | acento |
| `lime` / `cyan` / `brutal-pink` | saturación plana | secundarios |

- **Bordes:** 3px inksolid · **Sombras:** duras sin blur (`6px 6px 0 0`)
- **Tipografía:** Archivo Black (display 8-9xl uppercase), Space Grotesk (body), Space Mono (labels técnicos)
- **Lenguaje visual:** marquee infinito, stickers rotados con borde duro, secciones alternando fondos planos con `border-y-3`, texto invertido (negro sobre amarillo), micro-copy directa sin cortesías
- **Interacciones:** hover que "empuja" (translate + shadow shrink), marquee, blink de cursor

## 🛠️ Scripts

```bash
pnpm install
pnpm dev / build / preview / check
```

## ☁️ Deploy en Cloudflare Pages

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages → Create → Pages → Connect to Git** → repo `landing-sinfiltro`.
2. Build: `pnpm build` · Output: `dist` · Node 22+.
3. Custom domain → `sinfiltro.stevemoya.me`.

> ⚠️ Crearlo como **Pages**, no como Worker (el flujo Worker ejecuta `astro add cloudflare` y falla).

## 🛡️ Seguridad

- CSP estricta (`default-src 'self'`), HSTS, nosniff, frame DENY
- `vite.build.assetsInlineLimit: 0` → scripts siempre externos
- Sin secretos; `.env`/`.dev.vars` ignorados

## 📝 Decisiones

- **100 % CSS-first** (sin Three.js ni librerías de interacción)
- **Datos mock** — marca ficticia de portafolio
- Secciones aprobadas por Steve (hit de la serie: marquee doble en hero)

© 2026 SIN.FILTRO — Proyecto de portafolio de Steve Moya.