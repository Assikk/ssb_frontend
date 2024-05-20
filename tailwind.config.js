/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FF1F1F',
        'primary-dark': '#CC1818',
        'primary-light': '#FCE8E8',
        'background': '#F7F7F7',
        'bllue': '#007EFD',
        'black-ssb': '#282828',
        'light': '#54545A',
        'gray': '#909090',
        'divider': '#D2D2D3',
        'dark': '#7B7B85'

      },
      fontSize: {
        'small-base': ['12px', '20px'],
        'small-base-1': ['12px', '14.2px'],
        'sm-1': ['14px', '16.6px'],
        'sm-2': ['14px', '19.6px'],
        'base': ['16px', '19px'],
        'base-1': ['16px', '22.4px'],
        'base-2': ['16px', '20px'],
        'lg-1': ['18px', '21.3px'],
        'xl-1': ['20px', '23.7px'],
        '2xl-1': ['24px', '28px'],
        '3xl-1': ['32px', '38px']
      },
    },
  },
  plugins: [],
}
