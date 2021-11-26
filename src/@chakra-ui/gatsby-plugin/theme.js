import { theme as chakraTheme } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const theme = {
  breakpoints: createBreakpoints({
    sm: "50em",
    md: "65em",
    lg: "90em",
    xl: "100em",
  }),
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter`,
    heading: `Inter`,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
    ...chakraTheme.config,
  },
}

export default extendTheme(theme)
