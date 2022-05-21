import Head from 'next/head'
import NavBar from '../navbar'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title> Fabian Scheid - Homepage </title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW='container.md' pt={14}>
        {children}
      <Footer />
      </Container>
    </Box>
  )
}
export default Main
