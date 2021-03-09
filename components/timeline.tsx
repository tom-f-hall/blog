import { useState, useEffect, useMemo } from 'react'

// CHAKRA
import {
  Flex,
  Box,
  Heading,
  Text,
  Badge,
  Icon,
  Image,
  VStack,
  HStack,
  Checkbox,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react'

// CUSTOM
import DateDisplay from './date'

// HELPERS
import { getStrapiMedia } from '../lib/media'

// ICONS
import {
  CaretDown,
  SortAscending,
  SortDescending,
  FileText,
} from 'phosphor-react'

// Colours from Chakra-UI to loop for event type badges
const colours = [
  'red',
  'yellow',
  'teal',
  'blue',
  'green',
  'orange',
  'cyan',
  'purple',
  'pink',
]

/**
 * Timeline
 * * Renders CV events in timeline
 * TODO: Add event type
 */
const Timeline = ({ events }): JSX.Element => {
  const [filterState, setFilterState] = useState([]) // array of filter objects (name, state)
  const [eventsToDisplay, setEventsToDisplay] = useState([]) // filtered events to render
  const { items, requestSort, sortConfig } = useSortableData(eventsToDisplay) // sorting hook
  /**
   * * Creates array of unique event types from input events. Used to create event type filter
   */
  useEffect(() => {
    let types = []
    events.map((event) => {
      types.push(event.type)
    })
    types = [...new Set(types)]
    const typesState = []

    types.map((type, idx) => {
      const i = idx % colours.length
      typesState.push({ name: type, active: true, colour: colours[i] })
    })
    setFilterState(typesState)
    requestSort('date')
  }, [])
  // Data refresh on filter change
  /**
   * * Updates filtered data on filter change
   */
  useEffect(() => {
    const types = filterState
      .filter((type) => type.active == true)
      .map((activeFilter) => activeFilter.name)
    const filteredEvents = events.filter((event) => types.includes(event.type))
    setEventsToDisplay(filteredEvents)
  }, [filterState, events])
  /**
   * * Line component
   */
  const Line = (): JSX.Element => (
    <Box
      bg="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(225,123,112,1) 5%, rgba(225,123,112,1) 95%, rgba(0,0,0,0) 100%)"
      content='""'
      position="absolute"
      left="calc(50% -2px)"
      width="4px"
      top={0}
      bottom={0}
    />
  )
  /**
   * * Filter change handler
   */

  const handleFilterChange = (e) => {
    const newFilterState = filterState.map((filter) => {
      return { ...filter }
    })
    newFilterState.find(
      (filterState) => filterState.name == e.target.name
    ).active = e.target.checked
    setFilterState(newFilterState)
  }
  return (
    <>
      {events.length > 0 && (
        <>
          {/* <CheckboxGroup> */}
          <HStack>
            <Menu closeOnSelect={false}>
              <MenuButton
                as={Button}
                variant="ghost"
                size="md"
                px={4}
                rightIcon={<CaretDown />}
              >
                Sort order
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <HStack>
                    <Icon
                      as={
                        sortConfig?.direction == 'ascending'
                          ? SortAscending
                          : SortDescending
                      }
                    />
                    <Text onClick={() => requestSort('date')}>
                      {sortConfig?.direction == 'ascending'
                        ? 'Descending'
                        : 'Ascending'}
                    </Text>
                  </HStack>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu closeOnSelect={false}>
              <MenuButton
                as={Button}
                variant="ghost"
                size="md"
                px={4}
                rightIcon={<CaretDown />}
              >
                Filter events
              </MenuButton>
              <MenuList>
                {filterState.map((filter, idx) => (
                  <MenuItem key={idx}>
                    <Checkbox
                      name={filter.name}
                      isChecked={filter.active}
                      onChange={(e) => handleFilterChange(e)}
                      colorScheme={filter.colour}
                    >
                      {filter.name.charAt(0).toUpperCase() +
                        filter.name.slice(1)}
                    </Checkbox>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Button>
              Export to PDF <FileText />
            </Button>
          </HStack>
          <VStack position="relative" pt={75} pb={75}>
            <>
              <Line />
              {items.map((event, idx) => {
                const eventColour = filterState.find(
                  (filterState) => filterState.name == event.type
                ).colour
                return (
                  <Event
                    key={idx}
                    idx={idx}
                    event={event}
                    colour={eventColour}
                  />
                )
              })}
            </>
          </VStack>
        </>
      )}
    </>
  )
}

const Event = ({ idx, event, colour }) => {
  const isEven = (idx + 1) % 2 === 0

  return (
    <Flex
      position="relative"
      m="10px 0"
      w={{
        base: '100%',
        md: '50%',
      }}
      alignSelf={{
        sm: isEven ? 'flex-end' : 'flex-start',
      }}
      justify={{
        sm: isEven ? 'flex-start' : 'flex-end',
      }}
      pl={{
        sm: isEven && '10px',
        md: isEven && '30px',
      }}
      pr={{
        sm: !isEven && '10px',
        md: !isEven && '30px',
      }}
    >
      <Flex
        background="white"
        boxShadow="xl"
        borderRadius="2xl"
        direction="column"
        align={isEven ? 'flex-end' : 'flex-start'}
        p="15px"
        position="relative"
        w={{
          base: '100%',
          sm: '90%',
          //md: '70%',
        }}
        textAlign={{
          sm: isEven ? 'right' : 'left',
        }}
        _after={{
          content: '""',
          boxShadow: 'xl',
          position: 'absolute',
          top: 'calc(50% - 7.5px)',
          transform: 'rotate(45deg)',
          width: '15px',
          height: '15px',
          right: isEven ? '-7.5px' : null,
          left: !isEven ? '-7.5px' : null,
        }}
        _hover={{ transform: 'translateY(-4px)', shadow: 'sm' }}
      >
        <Box>
          <Image src={getStrapiMedia(event.image)} />
          <Badge
            colorScheme={colour}
            fontSize="12px"
            fontWeight="bold"
            top="5px"
            left={!isEven ? '5px' : null}
            right={isEven ? '5px' : null}
            letterSpacing="1px"
            p="5px"
            position="absolute"
            textTransform="uppercase"
          >
            {event.type}
          </Badge>
          <DateDisplay dateString={event.date.toString()} />
          <Heading size="lg">{event.title}</Heading>
          <Text fontSize="16px" lineHeight="24px" m="15px 0" maxW="250px">
            {event.content}
          </Text>
          <Box
            opacity={{ base: 0, md: 1 }}
            backgroundColor="#fff"
            border="3px solid #e17b77"
            borderRadius="50%"
            position="absolute"
            top="calc(50% - 10px)"
            right={!isEven ? '-40px' : null}
            left={isEven ? '-40px' : null}
            width="20px"
            height="20px"
            zIndex="50"
          />
        </Box>
      </Flex>
    </Flex>
  )
}

// https://codesandbox.io/s/table-sorting-example-ur2z9?from-embed=&file=/src/App.js:51-977

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config)

  const sortedItems = useMemo(() => {
    const sortableItems = [...items]
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [items, sortConfig])

  const requestSort = (key) => {
    let direction = 'ascending'
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort, sortConfig }
}

export default Timeline
