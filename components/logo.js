import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Name = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;
`

const Logo = () => {

  return (
    <Link href="/" scroll={false}>
      <a>
        <Name>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight="bold"
            ml={3}
          >
          Fabian Scheid 
          </Text>
        </Name>
      </a>
    </Link>
  )
}

export default Logo 
