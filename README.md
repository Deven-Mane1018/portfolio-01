# Harsh Portfolio

A modern, animated portfolio website built with **React + TypeScript + Vite**, styled with **Tailwind CSS**, and enhanced with **Three.js / React Three Fiber**, **GSAP**, and smooth scrolling via **Lenis**.

**Live site:** https://portfolio-01-inky.vercel.app

---

## Tech Stack

- **Framework:** React (TypeScript)
- **Build tool:** Vite
- **Styling:** Tailwind CSS (via `@tailwindcss/vite`)
- **3D / WebGL:** three, `@react-three/fiber`, `@react-three/drei`
- **Animation:** GSAP
- **Smooth scroll:** `@studio-freight/lenis`
- **Icons:** `lucide-react`
- **Linting:** ESLint

---

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Start the dev server
```bash
npm run dev
```

### 3) Build for production
```bash
npm run build
```

### 4) Preview the production build
```bash
npm run preview
```

### 5) Lint
```bash
npm run lint
```

---

## Project Structure (typical)

- `src/` – React application source
- `public/` – static assets
- `index.html` – Vite entry HTML
- `vite.config.ts` – Vite config (includes `@` alias → `./src`)

---

## Path Aliases

This repo defines an alias so you can import from `src` like this:

```ts
import Something from "@/components/Something"
```

---

## Deployment

This project is suitable for deployment on platforms like **Vercel** (the current live link is deployed there).  
Typical steps: connect the repo → set build command to `npm run build` → output to `dist`.

---

## License

No license specified yet. If you want, add a `LICENSE` file (MIT is common for portfolio projects).
