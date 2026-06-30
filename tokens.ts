/**
 * @ospro/design-tokens — nilai token untuk konteks NON-CSS (chart/canvas/inline-style
 * yang membaca warna dari JS, di mana `var(--color-*)` tak praktis).
 * SINKRON dengan tokens.css — sumber kebenaran tetap tokens.css; ini cerminannya.
 */
export const brand = {
  50: "#ecfdf5",
  100: "#d1fae5",
  200: "#a7f3d0",
  300: "#6ee7b7",
  400: "#34d399",
  500: "#10b981",
  600: "#059669",
  700: "#047857",
  800: "#065f46",
  900: "#064e3b",
  950: "#022c22",
} as const;

export const semantic = {
  success: "#16a34a",
  warning: "#d97706",
  danger: "#dc2626",
  info: "#2563eb",
} as const;

export const neutral = {
  50: "#f6f8f7",
  100: "#eceff0",
  200: "#dbe1e0",
  300: "#c0c9c8",
  400: "#93a0a0",
  500: "#6c7878",
  600: "#515c5c",
  700: "#3e4747",
  800: "#2a3130",
  900: "#181d1d",
  950: "#0d1110",
} as const;

export const role = {
  bg: neutral[100],
  surface: "#ffffff",
  line: neutral[200],
  text: neutral[900],
  textSoft: neutral[600],
  primary: brand[600],
  rail: "#0e1a30",
} as const;
