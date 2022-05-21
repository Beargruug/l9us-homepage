import { Box, Container, Divider, Heading, Image } from '@chakra-ui/react'
import { StyledBox, StyledSpan } from '../components/box'
import Layout from '../components/layouts/container'

const Page = () => {
  return (
    <Layout>
    <Container>
      <Box borderRadius="lg" mb={6} p={3} textAlign="center">
        <Image boxSize={'470px'} src={'/Me.svg'} />
        <Divider size="md" />
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Fabian Scheid
          </Heading>
          <p>(Current position: Full-Stack Developer at Evana AG) </p>
        </Box>
      </Box>
      <Divider size="md" mb={6} mt={6} />
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h3" variant="title">
            CV
          </Heading>
          <StyledBox>
            <StyledSpan>2017</StyledSpan>
              Vocational training as a Software Developer at Avarteq GmbH
          </StyledBox>
          <StyledBox>
            <StyledSpan>2018</StyledSpan>
            Software Developer at Gubse AG 
          </StyledBox>
          <StyledBox>
            <StyledSpan>2018</StyledSpan>
            Web Developer at netmedia GmbH
          </StyledBox>
          <StyledBox>
            <StyledSpan>2020 - now</StyledSpan>
            Full Stack Web Developer at Evana AG 
          </StyledBox>
        </Box>
      </Box>
    </Container>
    </Layout>
  )
}
export default Page
