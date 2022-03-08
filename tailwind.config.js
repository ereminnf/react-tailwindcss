const plugin = require("tailwindcss/plugin")

module.exports = {
    content: ["./src/**/*.{js,ts,tsx,jsx}"],
    theme: {
        extend: {
            spacing: {
                0.3: '10px'
            },
            keyframes: {
                fadeIn: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1
                    }
                }
            },
            animation: {
                fade: 'fadeIn .3s ease-in-out'
            }
        }
    },
    plugins: [
        plugin(({ addComponents, theme, addUtilities }) => {
            addComponents({
                '.btn-primary': {
                    backgroundColor: theme('colors.blue.400'),
                    height: theme('height.10'),
                    fontSize: theme('fontSize.base'),
                    lineHeight: '1.5rem',
                    '&:hover': {
                        backgroundColor: theme('colors.blue.500'),
                    },
                    '&:active': {
                        backgroundColor: theme('colors.blue.600'),
                    },
                    borderRadius: theme('borderRadius.md'),
                    color: theme('colors.white'),
                    transition: 'all .2s ease-in-out',
                    width: theme('width.full')

                    // active:bg-blue-600 h-10 text-base outline-none
                }
            })
        })
    ],
}
