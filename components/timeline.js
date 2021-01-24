import { Flex, Box, Heading, Text, Badge, Image, VStack, HStack, Checkbox, CheckboxGroup } from '@chakra-ui/react'
import Date from './date'

import { getStrapiMedia } from '../lib/media'

const Timeline = ({ events }) => {



  return (
    <>
    {
    events.length > 0 && (
      <>
        <CheckboxGroup>
          <HStack>
            <Checkbox value='life' isChecked={true}>Life</Checkbox>
            <Checkbox value='move' isChecked={true}>Move</Checkbox>
            <Checkbox value='education' isChecked={true}>Education</Checkbox>
            <Checkbox value='career' isChecked={true}>Career</Checkbox>
          </HStack>


        </CheckboxGroup>

        <VStack
          _after={{
            backgroundColor: '#e17b77',
            content: '""',
            position: 'absolute',
            left: 'calc(50% -2px)',
            width: '4px',
            height: '100%'
          }}
        >
          {events.map((event, idx) => (
            <Event key={idx} idx={idx} event={event} />
          ))}
        </VStack>
      </>
    )}
  </>
)}


const Event = ({ idx, event }) => {

  const isEven = (idx + 1) % 2 === 0

  return(
    <Flex
      position='relative'
      m='10px 0'
      w='50%'
      alignSelf={ isEven ? 'flex-end' : 'flex-start'}
      justify={ isEven ? 'flex-start' : 'flex-end' }
      pl={ isEven && '30px' }
      pr={ !isEven && '30px' }
    >
      <Flex
        boxShadow='xl'
        borderRadius='2xl'
        direction='column'
        align={ isEven ? 'flex-end' : 'flex-start' }
        p='15px'
        position='relative'
        w='400px'
        maxW='70%'
        textAlign={ isEven ? 'right' : 'left' }
        _after={{
          content: '""',
          boxShadow: 'xl',
          position: 'absolute',
          top: 'calc(50% - 7.5px)',
          transform: 'rotate(45deg)',
          width: '15px',
          height: '15px',
          right: !isEven ? '-7.5px' : 'auto',
          left: isEven && '-7.5px'
        }}
        _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
      >
        {/* CONTENT */}
        <Box>

          <Image src={getStrapiMedia(event.image)} />
          <Badge
            color='#fff'
            fontSize='12px'
            fontWeight='bold'
            top='5px'
            left={ !isEven ? '5px' : null}
            right={ isEven ? '5px' : null }
            letterSpacing='1px'
            p='5px'
            position='absolute'
            textTransform='uppercase'
          >
            {event.type}
          </Badge>
          <Date dateString={event.date.toString()} />
          <Heading size='lg'>{event.title}</Heading>
          <Text
            fontSize='16px'
            lineHeight='24px'
            m='15px 0'
            maxW='250px'
          >
            {event.content}
          </Text>
          <Box
            backgroundColor='#fff'
            border='3px solid #e17b77'
            borderRadius='50%'
            position='absolute'
            top='calc(50% - 10px)'
            right={ !isEven ? '-40px' : null }
            left={ isEven ? '-40px' : null }
            width='20px'
            height='20px'
            zIndex='100'
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Timeline
