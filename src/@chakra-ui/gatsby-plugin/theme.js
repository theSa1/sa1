import { theme as chakraTheme } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const theme = {
  breakpoints: createBreakpoints({
    sm: "50em",
    md: "55em",
    lg: "90em",
    xl: "100em",
  }),
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter`,
    heading: `Inter`,
  },
}

export default extendTheme(theme)
