import { Wrap, WrapItem } from '@chakra-ui/react'

import { Code, LinkedinLogo, TwitterLogo, GithubLogo } from 'phosphor-react'

const SocialIcons = (props) => {

  return(
    <Wrap justify='center'>
      <WrapItem>
        <a href="https://dev.to/tomfhall" target="_blank">
          {/* <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Tom Hall's DEV Community Profile" height="30" width="30"/> */}
          <Code size={48} />
        </a>
      </WrapItem>
      <WrapItem>
        <a href='https://linkedin.com/in/thomasfhall' target="_blank">
          <LinkedinLogo size={48}/>
        </a>
      </WrapItem>
      <WrapItem>
        <a href="https://twitter.com/tf_hall" target="_blank">
          <TwitterLogo size={48} />
        </a>
      </WrapItem>
      <WrapItem>
        <a href="https://github.com/tom-f-hall" target="_blank">
         <GithubLogo size={48}/>
       </a>
      </WrapItem>
    </Wrap>
  )
}

export default SocialIcons
