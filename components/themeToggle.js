import { useColorMode } from 'theme-ui'


import { PaintBucket } from 'phosphor-react'

const ThemeToggle = (props) => {

  const colourModes = [ 'default', 'dark', 'deep', 'funk', 'future', 'futureDark', 'polaris', 'polarisDark', 'swiss' ]
  const [ colourMode, setColourMode ] = useColorMode()

  return(
    <button onClick={e => {
      const index = colourModes.indexOf(colourMode)
      const next = colourModes[(index + 1) % colourModes.length ]
      setColourMode(next)
    }}>
      <PaintBucket size={24}/>
    </button>
  )
}

export default ThemeToggle
