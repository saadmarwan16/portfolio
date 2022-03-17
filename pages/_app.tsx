import "@fontsource/poppins";
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme, theme as base, withDefaultProps } from '@chakra-ui/react'

const colors = {
  background: '#1f1f38',
  backgroundVariant: '#2c2c6c',
  primary: '#4db5ff',
  primaryVariant: '#4db5ff66',
  white: '#fff',
  light: '#fff99'
}

const fonts = {
  heading: `Poppins, ${base.fonts.heading}`,
  body: `Poppins, ${base.fonts.heading}`,
}

const styles = {
  global: {
    html: {
      scrollBehavior: 'smooth',
    },
    body: {
      bg: 'background',
      color: 'white',
      lineHeight: '1.7',
      backgroundImage: 'url(/bg-texture.png)',
    },
    // 'h1, h2, h3, h4, h5, h6': {
    //   fontWeight: 500
    // },
    // h1: {
    //   fontSize: '2.5rem'
    // },
    img: {
      display: 'block',
      width: 'full',
      objectFit: 'cover'
    },
    'section > h2, section > h5': {
      textAlign: 'center',
      color: 'light'
    },
    'section > h2': {
      color: 'primary',
      mb: '3rem',
    },
    a: {
      color: 'primary',
      transition: 'all 400ms ease',
      _hover: {color: 'white'}
    },

    '::-webkit-scrollbar': {
      display: 'none'
    },
  },
}

const theme = extendTheme({ colors, fonts, styles}, withDefaultProps({
  defaultProps: {
    fontWeight: 900,
    fontSize: '7.5rem'
  },
  components: ['Heading', 'Text']
}), withDefaultProps({
  defaultProps: {
    variant: 'filled',
    w: 'max-content',
    display: 'inline-block',
    color: 'primary',
    borderRadius: '0.4rem',
    cursor: 'pointer',
    border: '1px solid primary',
    transition: 'all 400ms ease',
    _hover: {
      bg: 'white',
      color: 'background',
      borderColor: 'transparent',
    }
  },
  components: ['Button']
}), withDefaultProps({
  defaultProps: {
    variant: 'primary',
    bg: 'primary',
    color: 'background'
  }
}))

function MyApp({ Component, pageProps }: AppProps) {
  return (<ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>)
}

export default MyApp
