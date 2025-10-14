import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  semanticTokens: {
    colors: {},
  },
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: "bg-primary",
        color: "bg-secondary",
      },
    }),
  },
});
