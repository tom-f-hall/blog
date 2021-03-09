import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer, { defaults } from 'chakra-ui-markdown-renderer'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { useColorModeValue as mode, Box } from '@chakra-ui/react'
import vsDark from 'prism-react-renderer/themes/vsDark'
import github from 'prism-react-renderer/themes/github'

interface CodeProps {
  language: Language
  value: string
}

const CodeComponent = (props: CodeProps): JSX.Element => {
  const { language, value } = props
  return (
    <Highlight
      {...defaultProps}
      code={value}
      language={language}
      theme={mode(vsDark, github)}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          <Box p={5}>
            {tokens.map((line, i) => (
              <Box key={i} {...getLineProps({ line, key: i })}>
                {/* {i + 1} */}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </Box>
            ))}
          </Box>
        </pre>
      )}
    </Highlight>
  )
}

const ModifiedTheme = {
  ...defaults,
  code: (props: CodeProps) => {
    const { language, value } = props
    return <CodeComponent language={language} value={value} />
  },
}

interface MDXProps {
  content: string
}

const Markdown = (props: MDXProps): JSX.Element => {
  const { content } = props
  return (
    <ReactMarkdown
      renderers={ChakraUIRenderer(ModifiedTheme)}
      source={content}
      escapeHtml={false}
    />
  )
}

export default Markdown
