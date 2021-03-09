import React from 'react'

import { Bell } from 'phosphor-react'

import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react'

import { ActionButton } from './ActionButton'

type AlertProps = {
  colour: string
  bg: string
  message: string
  action: string
}

export const Alert = (props: AlertProps): JSX.Element => {
  const { colour, bg, message, action } = props
  return (
    <Stack
      py="3"
      direction={{ base: 'column', sm: 'row' }}
      px={{ base: '3', md: '6', lg: '8' }}
      color={colour ? colour : 'white'}
      bg={
        bg
          ? useColorModeValue(`${bg}.600`, `${bg}.400`)
          : useColorModeValue('blue.600', 'blue.400')
      }
      justify="center"
      align={{ base: 'flex-start', sm: 'center' }}
    >
      <Stack
        direction="row"
        align={{ base: 'flex-start', sm: 'center' }}
        spacing="3"
      >
        <Box
          as={Bell}
          fontSize="lg"
          position="relative"
          top={{ base: '1', sm: '0' }}
        />
        <Text fontWeight="medium" fontSize="sm" marginEnd="2">
          {message}
        </Text>
      </Stack>
      {action && (
        <ActionButton w={{ base: 'full', sm: 'auto' }} flexShrink={0}>
          {action}
        </ActionButton>
      )}
    </Stack>
  )
}
