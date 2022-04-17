module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    './components/**/*.{html,js,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      dark: {
        background: '#2b2b2b',
        backgroundSecondary: '#46484a',
        backgroundHighlight: '#3b514d',
        primary: '#a9b7c6',
        comment: '#808080',
        container: '#ffef28',
        keyword: '#cc7832',
        documentation: '#6a8759',
        declaration: '#ffc66d',
        hyperlink: '#287bde',
        highlight: '#155221',
        property: '#9876aa'
      },
    },
    fontFamily: {
      Jetbrains: ['JetBrains Mono', 'monospace'],
    },
  }
}
