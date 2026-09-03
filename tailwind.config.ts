import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'subtle-float': 'subtleFloat 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-4px) rotate(0.5deg)' },
          '66%': { transform: 'translateY(2px) rotate(-0.3deg)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(168,85,247,0.2), 0 0 30px rgba(168,85,247,0.1)' },
          '50%': { boxShadow: '0 0 25px rgba(168,85,247,0.35), 0 0 50px rgba(168,85,247,0.15)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '16px',
        'glass-strong': '24px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'glass-hover': '0 12px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(168,85,247,0.1)',
        'glow': '0 0 20px rgba(168,85,247,0.3), 0 0 40px rgba(168,85,247,0.1)',
        'glow-strong': '0 8px 30px rgba(168,85,247,0.4), 0 0 60px rgba(168,85,247,0.1)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
export default config
