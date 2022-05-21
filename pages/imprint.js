import { Box, Container, Heading } from '@chakra-ui/react'
import { StyledBox, StyledSpan } from '../components/box'
import Layout from '../components/layouts/container'

const Imprint = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h3" variant="title">
            Imprint
          </Heading>
          <StyledSpan>Information according to § 5 TMG</StyledSpan>
          <StyledBox>Fabian Scheid </StyledBox>
          <StyledBox>Waldstraße 36a</StyledBox>
          <StyledBox>66606 St.Wendel</StyledBox>
          <StyledBox>
            <StyledSpan>Represented by:</StyledSpan>
            Fabian Scheid
          </StyledBox>
          <StyledBox>
            <StyledSpan>Contact:</StyledSpan>
            <StyledSpan>Phone:</StyledSpan>
            0157-78071168
            <StyledSpan style={{marginLeft: '8px'}}>E-Mail:</StyledSpan>
            info@fabianmail.com
          </StyledBox>
          <StyledBox>
            <StyledSpan>Links:</StyledSpan>
            <a
              href="https://www.flaticon.com/de/kostenlose-icons/rasse"
              title="rasse Icons"
            >
              Breed Icons created from Peerapak Takpho - Flaticon
            </a>
          </StyledBox>
        </Box>
      </Box>
    </Container>
  </Layout>
)

export default Imprint
