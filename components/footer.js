import { Box, Divider, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box mt={6} bottom={0}>
      <Divider size="2xl" />
      <Box mt={2} align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Fabian Scheid. All Rights Reserved.<br/ >
        <Link
          _focus={{ boxShadow: 'none', outline: 'none' }}
          p={2}
          href="/imprint"
        >
          Imprint
        </Link>
      </Box>
    </Box>
  )
}

export default Footer
