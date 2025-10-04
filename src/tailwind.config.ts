// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2.25rem", // 36px
      screens: { "2xl": "1536px" },
    },
    extend: {
      colors: {
        /* Semantic tokens (used by shadcn/ui) */
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        border: "var(--border)",

        /* Brand tokens */
        "brand-secondary-90": "var(--brand-secondary-90)",
        "brand-secondary-70": "var(--brand-secondary-70)",
        "brand-primary-60": "var(--brand-primary-60)",
        "brand-neutral-0": "var(--brand-neutral-0)",
        "brand-neutral-90": "var(--brand-neutral-90)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "var(--radius-sm)",
        lg: "var(--radius-lg)",
      },
      spacing: {
        nav: "var(--nav-h)",
      },
    },
  },
  plugins: [],
};

export default config;
