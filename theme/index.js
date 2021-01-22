// theme.js
import { extendTheme } from "@chakra-ui/react"

// Global style overrides
import styles from "./styles"

// Foundational style overrides
import borders from "./foundations/borders"

// Component style overrides
import Button from "./components/button"


const colorModeConfig = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
  primary: {
  100: "#E5FCF1",
  200: "#27EF96",
  300: "#10DE82",
  400: "#0EBE6F",
  500: "#0CA25F",
  600: "#0A864F",
  700: "#086F42",
  800: "#075C37",
  900: "#064C2E"
}
}


const overrides = {
  colorModeConfig,
  styles,
  borders,
  // Other foundational style overrides go here
  components: {
    Button,
    // Other components go here
  },
}

const extendedTheme = extendTheme(overrides)

export default extendedTheme
