// Constantes da aplicação
export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 1.0,
  TYPEWRITER: 0.05,
  DELETE: 0.03,
};

export const BREAKPOINTS = {
  MOBILE: "480px",
  TABLET: "768px",
  DESKTOP: "1024px",
  LARGE: "1200px",
};

export const COLORS = {
  PRIMARY: "#4D88FF",
  SECONDARY: "#33FFFF",
  ACCENT: "#EF4444",
  SUCCESS: "#10B981",
  WARNING: "#F59E0B",
  ERROR: "#EF4444",
  WHITE: "#FFFFFF",
  BLACK: "#080808",
  DARK: "#0D0F12",
  GRAY: {
    50: "#F9FAFA",
    100: "#F1F2F4",
    200: "#ABB0BA",
    300: "#A1A1AA",
    800: "#1A1D23",
    900: "#111317",
  },
};

export const TYPEWRITER_CONFIG = {
  texts: ["Meu nome é Leonardo", "", "Desenvolvedor"],
  pauseDuration: 2000,
  cursorBlinkSpeed: 0.6,
};

export const SCROLL_CONFIG = {
  triggerStart: "top 80%",
  toggleActions: "play none none reset",
  animationDuration: 1.5,
  staggerDelay: 0.1,
};

export const FORM_CONFIG = {
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  minNameLength: 2,
  minMessageLength: 10,
  maxMessageLength: 500,
};
