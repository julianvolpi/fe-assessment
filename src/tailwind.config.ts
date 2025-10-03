// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      spacing: {
        nav: "var(--nav-h)",
      },
    },
  },
};

export default config;
