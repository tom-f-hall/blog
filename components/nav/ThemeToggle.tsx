// REACT
import React from 'react'

// CHAKRA
import { IconButton, useColorMode, ScaleFade, Tooltip } from '@chakra-ui/react'

import { Sun, Moon } from 'phosphor-react'

// HELPERS
import useSound from 'use-sound'

const ThemeToggle = ({ mobile }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [play] = useSound('/lightswitch.mp3', {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300]
    }
  })

  const handleClick = () => {
    toggleColorMode()
    colorMode === 'dark' ? play({ id: 'on'}) : play({ id: 'off' })
  }

  return (
    <Tooltip
      label={colorMode === 'dark' ? 'Light mode' : 'Dark mode'}
      aria-label='A tooltip'
    >
      <IconButton
        isRound
        aria-label='Switch theme'
        variant={undefined}
        icon={
          colorMode === 'dark' ? (
            <ScaleFade in>
              <Sun size={18}/>
            </ScaleFade>
          ) : (
            <ScaleFade in>
              <Moon size={18} />
            </ScaleFade>
          )
        }
        onClick={handleClick}
      />
  </Tooltip>
)
}

export default ThemeToggle
