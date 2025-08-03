/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'mono': ['"JetBrains Mono"', '"SF Mono"', 'Monaco', 'monospace'],
      },
      fontSize: {
        'giant': ['clamp(4rem, 12vw, 16rem)', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
        'large': ['clamp(2rem, 6vw, 6rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'medium': ['clamp(1.25rem, 3vw, 2.5rem)', { lineHeight: '1.1' }],
      },
      animation: {
        'fadeInUp': 'fadeInUp 1s ease-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        }
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}