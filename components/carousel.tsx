import React, { useState, useEffect, useCallback } from 'react'

import { Flex, Box, Image, Button } from '@chakra-ui/react'

import ArticleSummary from './blog/ArticleSummary'

import { CaretLeft, CaretRight } from 'phosphor-react'

import { useEmblaCarousel } from 'embla-carousel/react'

import { getStrapiMedia } from '../lib/media'

const Carousel = ({ slides }): JSX.Element => {
  const [viewportRef, embla] = useEmblaCarousel()
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla,
  ])

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <>
      <Box
        position="relative"
        backgroundColor="#f7f7f7"
        p="20px"
        maxW="100%"
        ml="auto"
        mr="auto"
      >
        <Box ref={viewportRef} overflow="hidden" w="90%" mx={'auto'}>
          <Flex userSelect="none" ml="10px">
            {slides.map((slide, idx) => (
              <Box position="relative" minW="80%" pl="10px" key={idx}>
                <Box position="relative" overflow="hidden" height="240px">
                  {/* <ArticleSummary article={slide} /> */}
                  {/* <Image
                    src={getStrapiMedia(slide.image)}
                    alt="A cool cat."
                    position='absolute'
                    display='block'
                    top='50%'
                    left='50%'
                    width='auto'
                    minH='100%'
                    minW='100%'
                    maxW='none'
                    transform='translate(-50%, -50%)'
                  /> */}
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </Box>
      <Flex
        // listStyle='none'
        justify="center"
        paddingTop="10px"
      >
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </Flex>
    </>
  )
}

const DotButton = ({ selected, onClick }) => (
  <Button
    onClick={onClick}
    bg={selected ? '#1bcacd' : 'transparent'}
    opacity={selected ? 1 : null}
    cursor="pointer"
    position="relative"
    p={0}
    outline={0}
    border={0}
    w="30px"
    h="30px"
    mr="7.5px"
    ml="7.5px"
    display="flex"
    align="center"
    _after={{
      backgroundColor: '#efefef',
      w: '100%',
      h: '4px',
      borderRadius: '2px',
      content: '""',
    }}
  />
)

const ButtonBase = {
  outline: 0,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  touchAction: 'manipulation',
  position: 'absolute',
  zIndex: 1,
  top: '50%',
  transform: 'translateY(-50%)',
  border: 0,
  width: '30px',
  height: '30px',
  justifyContent: 'center',
  alignItems: 'center',
  fill: '#1bcacd',
  padding: 0,
}

const PrevButton = ({ enabled, onClick }) => (
  <Button onClick={onClick} style={ButtonBase} disabled={!enabled} left="27px">
    <CaretLeft />
  </Button>
)

const NextButton = ({ enabled, onClick }) => (
  <Button onClick={onClick} style={ButtonBase} disabled={!enabled} right="27px">
    <CaretRight />
  </Button>
)

export default Carousel
