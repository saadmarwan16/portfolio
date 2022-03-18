import "@fontsource/poppins";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, theme as base } from "@chakra-ui/react";

const colors = {
  background: "#1f1f38",
  backgroundVariant: "#2c2c6c",
  primary: "#4db5ff",
  primaryVariant: "#4db5ff66",
  white: "#fff",
  light: "#ffffff99",
};

const fonts = {
  heading: `Poppins, ${base.fonts.heading}`,
  body: `Poppins, ${base.fonts.heading}`,
};

const components = {
  Button: {
    variants: {
      primary: {
        w: "max-content",
        display: "inline-block",
        color: "black",
        backgroundColor: "primary",

        _hover: {
          bg: "white",
        },
      },
      secondary: {
        w: "max-content",
        display: "inline-block",
        color: "primary",
        backgroundColor: "transparent",
        border: "1px",
        borderColor: "primary",

        _hover: {
          bg: "white",
          color: "background",
          borderColor: "transparent",
        },
      },
    },
  },
  Heading: {
    sizes: {
      "2xl": {
        fontSize: "2.5rem",
        fontWeight: "500",
      },
      xl: {
        fontWeight: "500",
      },
      lg: {
        fontWeight: "500",
      },
      md: {
        fontWeight: "500",
      },
      sm: {
        fontWeight: "500",
      },
    },
  },
};

const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      bg: "background",
      color: "white",
      lineHeight: "1.7",
      backgroundImage: "url(/bg-texture.png)",
    },
    img: {
      display: "block",
      width: "full",
      objectFit: "cover",
    },
    "section > h2, section > h5": {
      textAlign: "center",
      color: "light",
    },
    "section > h2": {
      color: "primary",
      mb: "3rem",
    },
    // section: {
    //   h: "100vh",
    // },
    a: {
      color: "primary",
      transition: "all 400ms ease",
      _hover: { color: "white" },
    },

    "::-webkit-scrollbar": {
      display: "none",
    },
  },
};

const theme = extendTheme({ colors, fonts, styles, components });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
