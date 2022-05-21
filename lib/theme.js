import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.400',
        color: 'white'
      }
    }
  }
})

const components = {
  Heading: {
    variants: {
      'title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#C53030',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('gray.900', 'gray.50')(props),
      textUnderlineOffset: 3
    })
  }
}

const config = {
  initialCoorMode: 'dark',
  useSystemColorMode: true

}

// const fonts = {
//   // setup font
// }

const theme = extendTheme({ config, styles, components })
export default theme
