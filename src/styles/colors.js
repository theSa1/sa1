import { theme as chakraTheme } from "@chakra-ui/react"

export const colors = {
  background: {
    light: chakraTheme.colors.gray[50],
    dark: chakraTheme.colors.gray[900],
  },
  home: {
    titleText: {
      ln1: {
        light: chakraTheme.colors.gray[600],
        dark: chakraTheme.colors.gray[300],
      },
      ln2: {
        pt1: {
          light: chakraTheme.colors.gray[700],
          dark: chakraTheme.colors.gray[50],
        },
        pt2: {
          light: chakraTheme.colors.teal[300],
          dark: chakraTheme.colors.teal[300],
        },
      },
      ln3: {
        light: chakraTheme.colors.teal[300],
        dark: chakraTheme.colors.teal[300],
      },
    },
    subtitleText: {
      light: chakraTheme.colors.gray[600],
      dark: chakraTheme.colors.gray[300],
      highlighted: {
        light: chakraTheme.colors.teal[300],
        dark: chakraTheme.colors.teal[300],
      },
    },
    icon: {
      light: chakraTheme.colors.gray[600],
      dark: chakraTheme.colors.gray[300],
    },
    btns: {
      contactBtn: {
        border: {
          light: chakraTheme.colors.gray[600],
          dark: chakraTheme.colors.gray[300],
        },
        text: {
          light: chakraTheme.colors.gray[700],
          dark: chakraTheme.colors.gray[50],
        },
      },
    },
  },
  header: {
    icon: {
      light: chakraTheme.colors.gray[400],
      dark: chakraTheme.colors.gray[50],
    },
    background: {
      light: chakraTheme.colors.white,
      dark: chakraTheme.colors.gray[800],
    },
    textColor: {
      light: chakraTheme.colors.gray[800],
      dark: chakraTheme.colors.gray[50],
    },
    likeBtn: {
      border: {
        light: chakraTheme.colors.gray[200],
        dark: chakraTheme.colors.gray[300],
      },
      text: {
        light: chakraTheme.colors.gray[700],
        dark: chakraTheme.colors.gray[50],
      },
    },
  },
}
