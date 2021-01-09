import { roboto } from '@theme-ui/presets'

const theme = {
  ...roboto,
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
      //mx: 'auto'
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
      }
    }
  }
}

export default theme
