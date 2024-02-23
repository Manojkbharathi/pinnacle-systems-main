/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],


  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'arrow-left-to-right': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' }
        },
        'text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'welcome': {
          // '0%, 10%, 100%':{
          //   width:'0%'
          // },
          '70%, 80%, 90%': {
            width: '100%'
          }
        },
        'spin': {
          'from': {
            transform: 'rotate(0deg)'
          },
          'to': {
            transform: 'rotate(360deg)'
          }
        },
        'spin1': {
          'from': {
            transform: 'rotate(360deg)'
          },
          'to': {
            transform: 'rotate(0deg)'
          }
        }
        // 'typing': {
        //   "0%": {
        //     width: "0%",
        //     visibility: "hidden"
        //   },
        //   "100%": {
        //     width: "100%"
        //   }  
        // },
        // 'blink': {
        //   "50%": {
        //     borderColor: "transparent"
        //   },
        //   "100%": {
        //     borderColor: "white"
        //   }  
        // }
      },
      animation: {
        'arrow-left-to-right': 'arrow-left-to-right 2s ease-in-out infinite',
        'text': 'text 5s ease infinite',
        'welcome': 'welcome 20s infinite',
        'animation': 'spin 10s linear infinite',
        'animation1': 'spin1 50s linear infinite'
        // 'typing': "typing 8s steps(40) infinite alternate, blink .7s infinite"
      },
    },
  },
  plugins: [],
}
