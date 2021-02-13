import * as React from 'react'
import { Box, Text, Image, Stack, useColorModeValue as mode } from '@chakra-ui/react'


interface PostProps {
  name: string;
  profileImage: string;
  time: Date;
  location: string;
  postImage: string;
  postContent: string;
}


export const Post = (props: PostProps) => {
  const { name, profileImage, time, location, postImage, postContent } = props
  return(
    <Box
      w={'full'}
      py='5'
      px={{ base: 4, sm: 6 }}
      bg={mode('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
    >
      <Stack direction={'column'} spacing={4}>
        <Stack direction={'row'}>
          <Image boxSize={'50px'} objectFit={'cover'} src={profileImage} />
          <Stack direction={'column'} spacing={'1px'}>
            <Text fontWeight={600}>{name}</Text>
            <Text fontSize={'12px'}>{time}</Text>
          </Stack>
        </Stack>
        { postImage && <Image src={postImage}/> }
        <Text>{postContent}</Text>
      </Stack>

    </Box>

  )

}






