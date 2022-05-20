import { Button, Divider } from './components'
import {
  ThemeConfig,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react'
import { breakpoints, colors, fonts } from './foundations'

import styles from './styles'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme(
  {
    breakpoints,
    config,
    fonts,
    styles,
    colors,
    components: {
      Button,
      Divider,
    },
  },
  withDefaultColorScheme({
    colorScheme: 'red',
  })
)

export default theme
