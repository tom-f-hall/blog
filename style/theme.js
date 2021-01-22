import { roboto } from '@theme-ui/presets'

const theme = {
  ...roboto,
  colors: {
    ...roboto.colors,
    modes: {
      dark: {
        text: '#fff',
        background: '#060606',
        primary: '#3cf',
        secondary: '#e0f',
        muted: '#191919',
        highlight: '#29112c',
        gray: '#999',
        purple: '#c0f',
      },
      deep: {
        text: 'hsl(210, 50%, 96%)',
        background: 'hsl(230, 25%, 18%)',
        primary: 'hsl(260, 100%, 80%)',
        secondary: 'hsl(290, 100%, 80%)',
        highlight: 'hsl(260, 20%, 40%)',
        purple: 'hsl(290, 100%, 80%)',
        muted: 'hsla(230, 20%, 0%, 20%)',
        gray: 'hsl(210, 50%, 60%)',
      },
      funk : {
        primary: '#609',
        secondary: '#306',
      },
      future: {
        text: '#000',
        background: '#fff',
        primary: '#11e',
        secondary: '#c0c',
        highlight: '#e0e',
        muted: '#f6f6ff',
      },
      futureDark: {
        text: '#fff',
        background: '#000',
        primary: '#0fc',
        secondary: '#0cf',
        highlight: '#f0c',
        muted: '#011',
      },
      polaris: {
        text: '#454f5b',
        background: '#fff',
        primary: '#5c6ac4',
        secondary: '#006fbb',
        highlight: '#47c1bf',
        muted: '#e6e6e6',
        gray: '#dfe3e8',
        accent: '#f49342',
        darken: '#00044c',
      },
      polarisDark: {
        text: '#3e4155',
        background: '#000639',
        primary: '#9c6ade',
        secondary: '#b4e1fa',
        highlight: '#b7ecec',
        muted: '#e6e6e6',
        gray: '#dfe3e8',
        accent: '#f49342',
        darken: '#00044c',
      },
      swiss: {
        text: 'hsl(10, 20%, 20%)',
        background: 'hsl(10, 10%, 98%)',
        primary: 'hsl(10, 80%, 50%)',
        secondary: 'hsl(10, 60%, 50%)',
        highlight: 'hsl(10, 40%, 90%)',
        purple: 'hsl(250, 60%, 30%)',
        muted: 'hsl(10, 20%, 94%)',
        gray: 'hsl(10, 20%, 50%)',
      },

    }
  },
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto'
    },
    layout: {
      maxWidth: '36rem',
      padding: '0 1rem',
      margin: '3rem auto 6rem',
    }
  },
  text: {
    heading2Xl: {
      fontSize: '2.5rem',
      lineHeight: '1.2',
      fontWeight: '800',
      letterSpacing: '-0.05rem',
      margin: '1rem 0'
    },
    headingXl: {
      fontSize: '2rem',
      lineHeight: '1.3',
      fontWeight: '800',
      letterSpacing: '-0.05rem',
      margin: '1rem 0',
    },
    headingL: {
      fontSize: '1.5rem',
      lineHeight: '1.4',
      margin: '1rem 0',
    },
    headingM: {
      fontSize: '1.2rem',
      lineHeight: '1.5'
    },
  },
  links: {
    nav: {
      px: 2,
      py: 1,
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      textDecoration: 'none'
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
  },
  forms: {
    input: {
      bg: 'elevated',
      color: 'text',
      fontFamily: 'inherit',
      borderRadius: 'base',
      border: 0,
      '::-webkit-input-placeholder': { color: 'placeholder' },
      '::-moz-placeholder': { color: 'placeholder' },
      ':-ms-input-placeholder': { color: 'placeholder' },
      '&[type="search"]::-webkit-search-decoration': { display: 'none' }
    },
    textarea: { variant: 'forms.input' },
    select: { variant: 'forms.input' },
    label: {
      color: 'text',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      lineHeight: 'caption',
      fontSize: 2
    },
    labelHoriz: {
      color: 'text',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
      lineHeight: 'caption',
      fontSize: 2,
      svg: { color: 'muted' }
    },
    slider: {
      color: 'primary'
    },
    hidden: {
      position: 'absolute',
      height: '1px',
      width: '1px',
      overflow: 'hidden',
      clip: 'rect(1px, 1px, 1px, 1px)',
      whiteSpace: 'nowrap'
    }
  },
  styles: {
    ...roboto.styles,
    root: {
      fontFamily: 'body',
      padding: '0',
      margin: '0',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: '18px',
      a : {
        color: 'primary',
        textDecoration: 'underline'
      },
      'a:hover' : {
        textDecoration: 'none'
      },
      img: {
        maxWidth: '100%',
        display: 'block'
      },
      '*' : {
        boxSizing: 'border-box'
      },
    },
  }
}

export default theme
