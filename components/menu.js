/** @jsx jsx */
import { jsx } from 'theme-ui'

// from https://codepen.io/maximakymenko/pen/aboWJpX

import { useEffect } from 'react'

export const Burger = ({ open, setOpen }) => {

  console.log(open)

  const lines = {
    width: '2rem',
    height: '0.25rem',
    bg: open ? 'background' : 'primary',
    borderRadius: '10px',
    transition: 'all 0.3s linear',
    position: 'relative',
    transformOrigin: '1px',
  }


  return(
    <button open={open} onClick={() => setOpen(!open)} sx={{
      position: 'fixed',
      top: '5%',
      right: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: '2rem',
      height: '2rem',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      zIndex: 10,

      '&:focus': {
        outline: 'none',
      }
    }}>
      <div sx={{
        ...lines,
        transform: open ? 'rotate(45deg)' : 'rotate(0)',
      }} />
      <div sx={{
        ...lines,
        opacity: open ? '0' : '1',
        transform: open ? 'translateX(20px)' : 'translateX(0)',
      }}/>
      <div sx={{
        ...lines,
        transform: open ? 'rotate(-45deg)' : 'rotate(0)',
      }}/>
    </button>
  )
}


export const Menu = ({ open, children }) => {

  const anchor = {
    fontSize: '2rem',
    textTransform: 'uppercase',
    padding: '2rem 0',
    fontWeight: 'bold',
    letterSpacing: '0.5rem',
    color: '#0D0C1D',
    textDecoration: 'none',
    transition: 'color 0.3s linear',


      fontSize: '1.5rem',
      textAlign: 'center',


    '&:hover': {
      color: '#343078'
    }
  }

  return(
    <div open={open} sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      bg: 'primary',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      height: '100vh',
      textAlign: 'left',
      padding: '2rem',
      position: 'absolute',
      top: 0,
      right: 0,
      transition: 'transform 0.3s ease-in-out',
      width: '100%',

    }}>
      {children}
    </div>
  )
}

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    };
    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    };
  },
  [ref, handler],
  )
}
