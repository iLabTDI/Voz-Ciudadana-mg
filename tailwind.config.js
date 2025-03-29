/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        // Nueva paleta de colores profesional para abogados
        law: {
          DEFAULT: "#1A365D", // Azul oscuro profesional
          50: "#F0F4F9",
          100: "#D9E2F0",
          200: "#B3C6E1",
          300: "#8DAAD2",
          400: "#668DC3",
          500: "#4071B4",
          600: "#2D5A96",
          700: "#1A365D", // Color principal
          800: "#122541",
          900: "#0A1424",
        },
        gold: {
          DEFAULT: "#D4AF37", // Dorado profesional
          50: "#FAF6E9",
          100: "#F5EDD3",
          200: "#EBDBA7",
          300: "#E2C97B",
          400: "#D8B74F",
          500: "#D4AF37", // Color principal
          600: "#B3922A",
          700: "#8A6F20",
          800: "#614D16",
          900: "#392E0D",
        },
        // Colores complementarios
        tech: {
          DEFAULT: "#0F6CBD", // Azul tecnológico
          50: "#E6F1FA",
          100: "#CCE3F5",
          200: "#99C7EB",
          300: "#66ABE1",
          400: "#338FD7",
          500: "#0F6CBD", // Color principal
          600: "#0C5A9E",
          700: "#09447A",
          800: "#062E55",
          900: "#031830",
        },
        cream: {
          DEFAULT: "#F5F2EA", // Crema elegante
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FCFAF7",
          500: "#F5F2EA", // Color principal
          600: "#E3D9C0",
          700: "#D1C096",
          800: "#BFA76C",
          900: "#A68D47",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
        "paper-texture": "url('/patterns/paper-texture.png')",
        "subtle-pattern": "url('/patterns/subtle-pattern.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(-50px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "ping-slow": {
          "75%, 100%": {
            transform: "scale(1.5)",
            opacity: 0,
          },
        },
        "text-gradient": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 0.6s ease-in-out",
        slideUp: "slideUp 0.6s ease-in-out",
        slideDown: "slideDown 0.6s ease-in-out",
        slideLeft: "slideLeft 0.6s ease-in-out",
        slideRight: "slideRight 0.6s ease-in-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
        spin: "spin 1s linear infinite",
        "ping-slow": "ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "text-gradient": "text-gradient 3s ease infinite",
        shimmer: "shimmer 2s infinite linear",
      },
      boxShadow: {
        glow: "0 0 15px rgba(212, 175, 55, 0.5)",
        "glow-lg": "0 0 25px rgba(212, 175, 55, 0.5)",
        "inner-glow": "inset 0 0 15px rgba(212, 175, 55, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

