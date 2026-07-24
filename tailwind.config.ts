import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f5f6fa",
          100: "#e9ecf4",
          200: "#c9d1e2",
          300: "#9dabc7",
          400: "#6e80a3",
          500: "#4d5f82",
          600: "#394a68",
          700: "#2b3850",
          800: "#1a2338",
          900: "#0f1523",
          950: "#070a12",
        },
        accent: {
          DEFAULT: "#38bdf8",
          light: "#7dd3fc",
          dark: "#0ea5e9",
          violet: "#818cf8",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "drift-slow": "drift 22s ease-in-out infinite",
        "drift-slower": "drift 30s ease-in-out infinite reverse",
        "pulse-dot": "pulseDot 2.4s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-30px, 24px) scale(0.95)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(52, 211, 153, 0.5)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 0 5px rgba(52, 211, 153, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
