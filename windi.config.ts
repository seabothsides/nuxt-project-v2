import { defineConfig } from '@windicss/plugin-utils'

export default defineConfig({
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: true,
  important: true,
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              'color': '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            strong: {
              'color': '#da4dda',
              'font-size': 'larger'
            },
            ul: {
              'padding-left': '0.75em',
              'li':{
                'text-transform': 'capitalize'
              },
              'li::before': {
                'background-color': '#518de9'
              }
            },
            h2: {
              'text-transform': 'capitalize'
            },
            h3: {
              'text-transform': 'capitalize'
            },
            h4: {
              'text-transform': 'capitalize'
            },
          },
        },
      },
    },
  },
   plugins: [
    require('windicss/plugin/typography'),
    // ...
  ],
})
