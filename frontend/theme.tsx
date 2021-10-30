import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Sans', monospace` };

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  fonts,
  breakpoints,
  config,
});

export default theme;
