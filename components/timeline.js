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
  CheckboxGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Slide,
  useDisclosure
} from '@chakra-ui/react'

// CUSTOM
import DateDisplay from './date'

// HELPERS
import { getStrapiMedia } from '../lib/media'

// ICONS
import { CaretDown, SortAscending, SortDescending, FileText } from 'phosphor-react'


const colours = [ 'red', 'yellow', 'teal', 'blue', 'green', 'orange']


// --> COMPONENT

const Timeline = ({ events }) => {

  const [ filterState, setFilterState ] = useState([])
  const [ eventsToDisplay, setEventsToDisplay ] = useState([])
  const [ sortOrder, setSortOrder ] = useState('ascending')

  const { items, requestSort, sortConfig } = useSortableData(eventsToDisplay)


  // on mount
  /**
   * * Creates array of unique types from input events. Used to create type filter
   * ! Deps
   * ? Query
   * TODO: null
   *  
   */
  useEffect(() => {
    let types = []
    events.map(event => {
      types.push(event.type)
    })
    types = [...new Set(types)]
    const typesState = []
    types.map((type, idx) => ( typesState.push({name: type, active: true, colour: colours[idx] })))
    setFilterState(typesState)
    requestSort('date')
  }, [])

  // Data refresh on filter change
  useEffect(() => {
    let types = filterState.filter(type => type.active == true).map(activeFilter => activeFilter.name)
    let filteredEvents = events.filter(event => types.includes(event.type))
    setEventsToDisplay(filteredEvents)

  }, [filterState, events])

  // const sortEvents = (events) => {
  //   return sortOrder == 'ascending' ? events.sort( (a, b) => new Date(a.date) - new Date(b.date) ) : events.sort( (a, b) => new Date(b.date) - new Date(a.date) )
  // }

  // // Data refresh on sort order change
  // useEffect(() => {
  //   let sortedEvents = sortEvents(eventsToDisplay)
  //   setEventsToDisplay(sortedEvents)
  // }, [sortOrder])

  const Line = () => (
    <Box
      backgroundColor='#e17b77'
      content='""'
      position='absolute'
      left='calc(50% -2px)'
      width='4px'
      height='100%'
    />
  )


  const handleFilterChange = (e) => {
    let newFilterState = filterState.map(filter => {return {...filter }})
    newFilterState.find(filterState => filterState.name == e.target.name).active = e.target.checked
    setFilterState(newFilterState)
  }


  return (
    <>
    {
    events.length > 0 && (
      <>

        {/* <CheckboxGroup> */}
        <HStack>
          <Menu
            closeOnSelect={false}
          >
            <MenuButton
              as={Button}
              variant='ghost'
              size='md'
              px={4}
              rightIcon={<CaretDown />}
            >
              Sort order
            </MenuButton>
            <MenuList>
              <MenuItem>
                <HStack>
                  <Icon as={ sortConfig?.direction == 'ascending' ? SortAscending : SortDescending }/>
                  <Text onClick={() => requestSort('date')}>{ sortConfig?.direction == 'ascending' ? 'Descending' : 'Ascending' }</Text>
                </HStack>
              </MenuItem>
            </MenuList>
          </Menu>
        <Menu
          closeOnSelect={false}
        >
          <MenuButton
            as={Button}
            variant='ghost'
            size='md'
            px={4}
            rightIcon={<CaretDown />}
          >
            Filter events
          </MenuButton>
          <MenuList>
            { filterState.map( (filter, idx) => (
              <MenuItem key={idx}>

                <Checkbox
                  name={filter.name}
                  isChecked={filter.active}
                  onChange={(e) => handleFilterChange(e)}
                  colorScheme={filter.colour}
                >
                  {filter.name.charAt(0).toUpperCase() + filter.name.slice(1)}
                </Checkbox>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Button>Export to PDF <FileText /></Button>
      </HStack>
        <VStack>
          <>
            <Line />
            {items.map((event, idx) => (
              <Event key={idx} idx={idx} event={event} />
            ))}
          </>
        </VStack>
      </>
    )}
  </>
)}


const Event = ({ idx, event }) => {

  const isEven = (idx + 1) % 2 === 0
  const { isOpen, onToggle } = useDisclosure()

  return(
    <Flex
      position='relative'
      m='10px 0'
      w={{ base: '100%', md: '50%'}}
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
          right: isEven ? '-7.5px' : null,
          left: !isEven ? '-7.5px' : null
        }}
        _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
      >
        {/* <Slide
          direction='left'
          in={true}
          style={{zIndex: 10}}> */}
        {/* CONTENT */}
        <Box>

          <Image src={getStrapiMedia(event.image)} />
          <Badge
            colorScheme={colours[idx]}
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
          <DateDisplay dateString={event.date.toString()} />
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
            opacity={{ base: 0, md: 1}}
            backgroundColor='#fff'
            border='3px solid #e17b77'
            borderRadius='50%'
            position='absolute'
            top='calc(50% - 10px)'
            right={ !isEven ? '-40px' : null }
            left={ isEven ? '-40px' : null }
            width='20px'
            height='20px'
            zIndex='50'
          />
        </Box>
      {/* </Slide> */}
      </Flex>
    </Flex>
  )
}

// https://codesandbox.io/s/table-sorting-example-ur2z9?from-embed=&file=/src/App.js:51-977

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config)

  const sortedItems = useMemo(() => {
    let sortableItems = [...items]
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      });
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
