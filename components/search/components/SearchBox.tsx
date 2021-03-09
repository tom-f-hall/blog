import React from 'react'

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { MagnifyingGlass } from 'phosphor-react'

import { connectSearchBox } from 'react-instantsearch-dom'

const SearchBox = ({ currentRefinement, refine, setHasInput }): JSX.Element => (
  <InputGroup>
    <InputLeftElement pointerEvents="none">
      <MagnifyingGlass />
    </InputLeftElement>
    <Input
      type="search"
      value={currentRefinement}
      placeholder="Search"
      onChange={(event) => refine(event.currentTarget.value)}
      onKeyUp={(event) => setHasInput(event.currentTarget.value !== '')}
    />
  </InputGroup>
)

export const ConnectedSearchBox = connectSearchBox(SearchBox)
