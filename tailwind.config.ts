import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	'./node_modules/preline/preline.js'
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Montserrat',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			sm: '0 4px 4px #00000040',
  			'md': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
  			'lg': '0 3px 6px 0 rgba(0,0,0,.15)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: 'hsl(var(--primary))',
  			secondary: 'hsl(var(--secondary))',
  			dark: 'hsl(var(--dark))',
  			border: 'hsl(var(--border))',
  			error: 'hsl(var(--error))',
  			erroremphasis: 'hsl(var(--error-empahasis))',
  			muted: 'hsl(var(--muted))',
			darkprimary: 'hsl(var(--darkprimary))'
  		},
  		borderRadius: {
  			md: '7px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require('preline/plugin'),],
} satisfies Config;
