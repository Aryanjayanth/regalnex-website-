
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				regal: {
					green: '#30BD36', // Slightly darker green
					black: '#121212',
					dark: '#0F0F0F',
					light: '#FFFFFF',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'star-pulse': {
					'0%': { opacity: '0.7', transform: 'scale(0.95)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' },
					'100%': { opacity: '0.7', transform: 'scale(0.95)' }
				},
				'float': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 0 0 rgba(48, 189, 54, 0.4)' },
					'70%': { boxShadow: '0 0 0 10px rgba(48, 189, 54, 0)' },
					'100%': { boxShadow: '0 0 0 0 rgba(48, 189, 54, 0)' }
				},
				'glow-pulse': {
					'0%': { textShadow: '0 0 5px rgba(48, 189, 54, 0.3), 0 0 10px rgba(48, 189, 54, 0.2)' },
					'50%': { textShadow: '0 0 15px rgba(48, 189, 54, 0.6), 0 0 20px rgba(48, 189, 54, 0.4)' },
					'100%': { textShadow: '0 0 5px rgba(48, 189, 54, 0.3), 0 0 10px rgba(48, 189, 54, 0.2)' }
				},
				'border-glow': {
					'0%': { boxShadow: '0 0 5px rgba(48, 189, 54, 0.3)' },
					'50%': { boxShadow: '0 0 15px rgba(48, 189, 54, 0.5)' },
					'100%': { boxShadow: '0 0 5px rgba(48, 189, 54, 0.3)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'rotate-hover': {
					'0%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(1deg)' },
					'75%': { transform: 'rotate(-1deg)' },
					'100%': { transform: 'rotate(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-right': 'fade-in-right 0.6s ease-out',
				'star-pulse': 'star-pulse 3s infinite ease-in-out',
				'float': 'float 4s infinite ease-in-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'glow-pulse': 'glow-pulse 3s infinite ease-in-out',
				'border-glow': 'border-glow 4s infinite ease-in-out',
				'slide-up': 'slide-up 0.6s ease-out forwards',
				'rotate-hover': 'rotate-hover 3s infinite ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
