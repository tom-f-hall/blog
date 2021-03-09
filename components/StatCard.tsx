import { Flex, Box, Text, useColorModeValue as mode } from '@chakra-ui/react'
import { monitorEventLoopDelay } from 'perf_hooks'
import * as React from 'react'

interface StatCardProps {
  label: string
  value: string | number
  icon: React.ReactElement
}

export const StatCard = (props: StatCardProps) => {
  const { label, value, icon } = props
  return (
    <Flex bg={mode('blue.50', 'blue.300')} px={{ base: 4, sm: 6 }} py="5" rounded ='2xl' { ... props }>
      <Box flex='1' mr='4' color={mode('blue.500', 'inherit')}>
        <Text fontSize='5xl' fontWeight='extrabold' mb='4' lineHeight='1'>
          {value}
        </Text>
        <Text color={mode('gray.900', 'white')}>{label}</Text>
      </Box>
      <Box fontSize='3rem' color={mode('blue.100', 'blue.500')}>
        {icon}
      </Box>
    </Flex>
  )
}






//     <Stat px={{ base: 4, sm: 6 }} py="5" bg={mode('white', 'gray.700')} shadow="base" rounded="lg">
//         <StatLabel fontWeight="medium" isTruncated color={mode('gray.500', 'gray.400')}>
//           {label}
//         </StatLabel>
//         <StatNumber fontSize="3xl" fontWeight="medium" color={mode('gray.900', 'white')}>
//           {value}
        
//         </StatNumber>
//       </Box>
      
//     </Stat>
//   )
// }