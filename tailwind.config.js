/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surya: {
          navy: {
            50: '#f0f6fa',
            100: '#dbe8f2',
            200: '#b9d2e6',
            300: '#8cb4d4',
            400: '#5c92be',
            500: '#3975a6',
            600: '#285b88',
            700: '#1f486d',
            800: '#173753',
            900: '#0f263b',
            950: '#091827',
          },
          teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
          },
          emergency: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
          },
          slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 38, 59, 0.05)',
        'card': '0 2px 10px -2px rgba(15, 38, 59, 0.06), 0 1px 3px -1px rgba(15, 38, 59, 0.04)',
        'card-hover': '0 12px 28px -4px rgba(15, 38, 59, 0.12), 0 4px 10px -2px rgba(15, 38, 59, 0.06)',
        'emergency': '0 4px 16px 0 rgba(220, 38, 38, 0.28)',
      },
      borderRadius: {
        'card': '1rem',
        'card-lg': '1.25rem',
      },
    },
  },
  plugins: [],
};
