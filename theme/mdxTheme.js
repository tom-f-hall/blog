import ChakraUIRenderer, { defaults } from 'chakra-ui-markdown-renderer'

import { Heading } from '@chakra-ui/react'

export const ModifiedTheme = {
  text: props => {
    const { children } = props;
    return <Heading>{children}</Heading>;
  },
  code: props => {
    const { children } = props
    return (
      <pre className='language-javascript'>
        { children }
      </pre>
    )
  },
  ...defaults
}