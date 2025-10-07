import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        page: "1512px",
      },
      minWidth: {
        page: "250px",
      },
      colors: {
        "base-brand-colour-secondary-100":
          "var(--base-brand-colour-secondary-100)",
        "interactionsondarktext-link-default":
          "var(--interactionsondarktext-link-default)",
        "text-staticoncolour": "var(--text-staticoncolour)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-large": "var(--body-large-font-family)",
        "body-link": "var(--body-link-font-family)",
        "body-regular": "var(--body-regular-font-family)",
        "display-extra-large-h1": "var(--display-extra-large-h1-font-family)",
        "display-large": "var(--display-large-font-family)",
        "display-medium": "var(--display-medium-font-family)",
        "heading-large": "var(--heading-large-font-family)",
        "heading-medium": "var(--heading-medium-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1280px",
    },
  },
  plugins: [],
};

export default config;
