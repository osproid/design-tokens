# @ospro/design-tokens

Token visual **terpusat** untuk suite `os.pro.id` (Module Federation: shell + engine + operator + backoffice). Satu sumber kebenaran tema — ganti warna suite = ubah di sini, bump versi, rebuild konsumen build-time.

## Isi
- `tokens.css` — blok Tailwind v4 `@theme` (brand emerald + neutral suite + semantik + role + radius/shadow).
- `tokens.ts` — nilai sama sebagai objek JS untuk konteks non-CSS (chart/canvas/inline-style).

## Cara konsumsi
**Build-time (install)** — app yang memakai utilitas Tailwind warna (`bg-brand-*`, `bg-surface`, dst):
```jsonc
// package.json
"@ospro/design-tokens": "github:osproid/design-tokens#v0.1.0"
```
```css
/* index.css */
@import "@ospro/design-tokens/tokens.css";
@import "tailwindcss";
```
→ saat ini: **mainpro (shell)** & **ospro/apps/web (engine)**.

**Runtime (tanpa install)** — app design-system berbasis CSS var: referensi `var(--color-*, <fallback>)`. Mewarisi `:root` dari stylesheet shell saat embedded; `fallback` menjaga tampilan standalone-dev. → **fulfillment operator & backoffice**.

## Versi
SemVer = pelatuk propagasi. Ubah nilai token → bump versi → konsumen build-time pin tag baru + reinstall + rebuild. Konsumen runtime ikut otomatis via cascade `:root` shell.
