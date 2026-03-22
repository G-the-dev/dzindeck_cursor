import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ============================================
      // FONT FAMILY — Figtree (Google Fonts)
      // ============================================
      fontFamily: {
        sans: ["var(--font-figtree)", "Figtree", "sans-serif"],
        figtree: ["var(--font-figtree)", "Figtree", "sans-serif"],
      },

      // ============================================
      // COLORS — Semantic Tokens from Figma Styles
      // ============================================
      colors: {
        // --- Brand Colors Scale (Figma Variables) ---
        brand: {
          50: "#F1F2F4",
          100: "#C9CBD2",
          200: "#8A8D94",
          300: "#56585E",
          400: "#3A3B40",
          500: "#2E2F33",
          600: "#242528",
          700: "#1B1C1F",
          800: "#141416",
          900: "#0E0E10",
        },

        // --- Background Tokens (Figma → Color Styles → Background) ---
        page: "#0E0E10",         // Background/Page → Brand Colors/900
        app: "#141416",          // Background/App → Brand Colors/800
        surface: "#1B1C1F",      // Background/Surface → Brand Colors/700
        elevated: "#242528",     // Background/Elevated → Brand Colors/600
        hover: "#2E2F33",        // Background/Hover → Brand Colors/500
        strong: "#56585E",       // Background/Strong → Brand Colors/300

        // --- Text Tokens (Figma → Color Styles → Text) ---
        // Usage: text-primary, text-secondary, etc.
        primary: "#F1F2F4",      // Text/Primary → Brand Colors/50
        secondary: "#C9CBD2",    // Text/Secondary → Brand Colors/100
        tertiary: "#0E0E10",     // Text/Tertiary → Brand Colors/900
        muted: "#8A8D94",        // Text/Muted → Brand Colors/200
        disabled: "#3A3B40",     // Text/Disabled → Brand Colors/400

        // --- Border Tokens (Figma → Color Styles → Border) ---
        "border-default": "#242528",   // Border/Default → Brand Colors/600
        "border-hovered": "#3A3B40",   // Border/Hovered → Brand Colors/400
        "border-focused": "#F1F2F4",   // Border/Focused → Brand Colors/50
        "border-disabled": "#1B1C1F",  // Border/Disabled → Brand Colors/700

        // --- State Tokens (Figma → Color Styles → State) ---
        state: {
          default: "#1B1C1F",    // State/Default → Brand Colors/700
          hovered: "#2E2F33",    // State/Hovered → Brand Colors/500
          pressed: "#242528",    // State/Pressed → Brand Colors/600
          active: "#3A3B40",     // State/Active → Brand Colors/400
          disabled: "#141416",   // State/Disabled → Brand Colors/800
          focused: "#F1F2F4",    // State/Focused → Brand Colors/50
        },

        // --- Tone Tokens (Figma → Color Styles → Tone) ---
        increase: "#22C55E",     // Tone/Increase → Success/500 (green)
        "neutral-tone": "#FBBF24", // Tone/Neutral → Neutral/400 (amber)
        decrease: "#EF4444",     // Tone/Decrease → Warning/500 (red)

        // --- Full Tone Scales (for shades if needed) ---
        success: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
        },
        warning: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        neutral: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
      },

      // ============================================
      // TYPOGRAPHY — Figma Variables → Typography (EXACT)
      // ============================================
      fontSize: {
        "extra-tiny": ["10px", { lineHeight: "12px", letterSpacing: "0px" }],
        "tiny": ["12px", { lineHeight: "16px", letterSpacing: "0px" }],
        "small": ["14px", { lineHeight: "20px", letterSpacing: "0px" }],
        "regular": ["16px", { lineHeight: "24px", letterSpacing: "0px" }],
        "medium": ["20px", { lineHeight: "28px", letterSpacing: "0px" }],
        "medium-lg": ["24px", { lineHeight: "30px", letterSpacing: "-0.15px" }],
        "large": ["32px", { lineHeight: "38px", letterSpacing: "-0.2px" }],
        "large-xl": ["40px", { lineHeight: "48px", letterSpacing: "-0.3px" }],
        "extra-large": ["48px", { lineHeight: "58px", letterSpacing: "-0.4px" }],
        "title": ["72px", { lineHeight: "84px", letterSpacing: "-0.8px" }],
      },

      // ============================================
      // SPACING — Figma Variables → System → Size → Spacing (19 tokens, EXACT)
      // ============================================
      spacing: {
        "0": "0px",
        "0.5": "2px",
        "1": "4px",
        "2": "8px",
        "2.5": "10px",
        "3": "12px",
        "3.5": "14px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "10": "40px",
        "12": "48px",
        "15": "60px",
        "18": "72px",
        "20": "80px",
        "25": "100px",
      },

      // ============================================
      // BORDER RADIUS — Figma Variables → System → Size → Radius (12 tokens, EXACT)
      // ============================================
      borderRadius: {
        "none": "0px",
        "xs": "2px",
        "sm": "4px",
        DEFAULT: "6px",
        "md": "8px",
        "lg": "12px",
        "xl": "16px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "48px",
        "full": "9999px",
      },

      // ============================================
      // BORDER WIDTH — Figma Variables → System → Size → Stroke (4 tokens, EXACT)
      // ============================================
      borderWidth: {
        DEFAULT: "1px",         // Stroke/100
        "1.2": "1.2px",        // Stroke/200
        "1.5": "1.6px",        // Stroke/300
        "2": "2px",            // Stroke/Focus ring
      },

      // ============================================
      // BREAKPOINTS — Figma Variables → Responsive
      // ============================================
      screens: {
        "sm": "412px",    // Phone
        "md": "768px",    // Tablet
        "lg": "1440px",   // Macbook
        "xl": "1920px",   // Desktop
      },

      // ============================================
      // CONTAINER WIDTHS — Figma Variables → Responsive → Body Container
      // ============================================
      maxWidth: {
        "phone": "380px",
        "tablet": "704px",
        "macbook": "1312px",
        "desktop": "1792px",
      },

      // ============================================
      // BOX SHADOW — Figma Effect Styles (EXACT)
      // ============================================
      boxShadow: {
        // Primary-btn: 2× Drop shadow
        // Shadow 1: X:0 Y:10 Blur:24 Spread:0 Color:#575757/35%
        // Shadow 2: X:0 Y:10 Blur:24 Spread:0 Color:#575757/35%
        "primary-btn": "0px 10px 24px 0px rgba(87, 87, 87, 0.35), 0px 10px 24px 0px rgba(87, 87, 87, 0.35)",

        // Hero-btn: 5× Drop shadow + 2× Inner shadow (layered glow for Hero CTA)
        // DS1: X:0 Y:94 Blur:26 #C8C8C8/0%  (ambient — effectively invisible)
        // DS2: X:0 Y:60 Blur:24 #C8C8C8/3%  (far soft glow)
        // DS3: X:0 Y:34 Blur:20 #C8C8C8/10% (mid glow)
        // DS4: X:0 Y:16 Blur:16 #C8C8C8/17% (near glow)
        // DS5: X:0 Y:4  Blur:8  #C8C8C8/19% (tight glow)
        // IS1: X:-10 Y:-10 Blur:20 #303030/10% (inner dark)
        // IS2: X:10  Y:10  Blur:16 #FFFFFF/15% (inner light)
        "hero-btn": "0px 94px 26px 0px rgba(200, 200, 200, 0), 0px 60px 24px 0px rgba(200, 200, 200, 0.03), 0px 34px 20px 0px rgba(200, 200, 200, 0.1), 0px 16px 16px 0px rgba(200, 200, 200, 0.17), 0px 4px 8px 0px rgba(200, 200, 200, 0.19), inset -10px -10px 20px 0px rgba(48, 48, 48, 0.1), inset 10px 10px 16px 0px rgba(255, 255, 255, 0.15)",
      },

      // ============================================
      // BACKDROP BLUR — Figma Effect Styles
      // ============================================
      backdropBlur: {
        // Nav-bar-BG blur: Background blur, Uniform, 40px
        "navbar": "40px",

        // Tag-blur: Background blur, Uniform, 10px
        "tag": "10px",
      },

      // ============================================
      // PADDING — Figma Variables → Responsive → Product (EXACT)
      // ============================================
      padding: {
        "page-phone": "16px",       // Phone: H & V padding
        "page-tablet": "32px",      // Tablet: H & V padding
        "page-desktop": "64px",     // Macbook & Desktop: H & V padding
      },
    },
  },
  plugins: [],
};

export default config;
