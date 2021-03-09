import { Wrap, WrapItem, Tooltip } from '@chakra-ui/react'

import { Code, LinkedinLogo, TwitterLogo, GithubLogo } from 'phosphor-react'

const SocialIcons = (): JSX.Element => {
  return (
    <Wrap justify="center">
      <WrapItem>
        <Tooltip label="dev.to">
          <a href="https://dev.to/tomfhall" target="_blank" rel="noreferrer">
            {/* <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Tom Hall's DEV Community Profile" height="30" width="30"/> */}
            <Code size={48} />
          </a>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="LinkedIn">
          <a
            href="https://linkedin.com/in/thomasfhall"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={48} />
          </a>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="Twitter">
          <a
            href="https://twitter.com/tf_hall"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterLogo size={48} />
          </a>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="Github">
          <a
            href="https://github.com/tom-f-hall"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={48} />
          </a>
        </Tooltip>
      </WrapItem>
    </Wrap>
  )
}

export default SocialIcons
