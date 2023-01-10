import { Box, Container, Divider, Heading, Image, Text } from '@chakra-ui/react'
import { StyledBox, StyledSpan } from '../components/box'
import Layout from '../components/layouts/container'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" mb={6} p={3} textAlign="center">
          <Image alt="me" boxSize={'470px'} src={'/Me.svg'} />
          <Divider size="md" />
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
<<<<<<< Updated upstream
            <Heading as="h2" variant="page-title">
=======
            <Heading className="name" as="h2" variant="page-title">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              <StyledSpan>2017</StyledSpan>
              Vocational training as a Software Developer at Avarteq GmbH
            </StyledBox>
            <StyledBox>
=======
              <StyledSpan>2015</StyledSpan>
              Vocational training as a Software Developer at Avarteq GmbH
            </StyledBox>
            <StyledBox>
              <Text fontSize="xs">
                <StyledSpan>Skillset</StyledSpan>
                (Ruby on Rails, MySQL, JavaScript, Node.js, HTML5, CSS, GitHub,
                Heroku, SASS, React, Kanban, Vim, TDD)
              </Text>
            </StyledBox>
            <StyledBox>
              <StyledSpan>2017</StyledSpan>
              Full Stack Web Developer at Avarteq GmbH
            </StyledBox>
            <StyledBox>
              <Text fontSize="xs">
                <StyledSpan>Skillset</StyledSpan>
                (Ruby on Rails, MySQL, JavaScript, Node.js, HTML5, CSS, GitHub,
                Heroku, SASS, React, Kanban, Vim, TDD)
              </Text>
            </StyledBox>
            <StyledBox>
>>>>>>> Stashed changes
              <StyledSpan>2018</StyledSpan>
              Software Developer at Gubse AG
            </StyledBox>
            <StyledBox>
<<<<<<< Updated upstream
=======
              <Text fontSize="xs">
                <StyledSpan>Skillset</StyledSpan>
                (C++, Kanban, Agile Software Development)
              </Text>
            </StyledBox>
            <StyledBox>
>>>>>>> Stashed changes
              <StyledSpan>2018</StyledSpan>
              Web Developer at netmedia GmbH
            </StyledBox>
            <StyledBox>
<<<<<<< Updated upstream
              <StyledSpan>2020 - now</StyledSpan>
              Full Stack Web Developer at Evana AG
            </StyledBox>
=======
              <Text fontSize="xs">
                <StyledSpan>Skillset</StyledSpan>
                (React, HTML, CSS, Node.js, JavaScript, GitHub, jQuery,
                Responsive Design, REST-API, SharePoint, SharePoint Online,
                GraphQL)
              </Text>
            </StyledBox>
            <StyledBox>
              <StyledSpan>2020 - now</StyledSpan>
              Full Stack Web Developer at Evana AG
            </StyledBox>
            <StyledBox>
              <Text fontSize="xs">
                <StyledSpan>Skillset</StyledSpan>
                (React, HTML, CSS, Node.js, TypeScript, JavaScript, Azure,
                Scrum, Docker, MongoDB, GoLang)
              </Text>
            </StyledBox>
>>>>>>> Stashed changes
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}
export default Page
