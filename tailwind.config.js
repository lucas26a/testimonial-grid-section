module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': 'hsl(0, 0%, 100%)',
      'violet': 'hsl(263, 55%, 52%)',
      'grayish': 'hsl(217, 19%, 35%)',
      'blackish': 'hsl(219, 29%, 14%)',
      'lightgray': 'hsl(0, 0%, 81%)',
      'lightgrayish': 'hsl(210, 46%, 95%)'
    },
    fontFamily: {
      'custom': ['"Barlow Semi Condensed"', 'sans-serif']
    },
    fontWeight: {
      'soft': '500',
      'strong': '600'
    },
    fontSize: {
      '13': '13px'
    },
    extend: {},
  },
  plugins: [],
}