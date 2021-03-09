import React, { useState } from 'react'

import algoliasearch from 'algoliasearch'
import { InstantSearch, Configure } from 'react-instantsearch-dom'

import { ConnectedSearchBox as SearchBox } from './components/SearchBox'
import { ConnectedHits as Hits } from './components/InfiniteHits'

import { Stack, useBoolean, useColorModeValue as mode } from '@chakra-ui/react'

const Search = () => {
  const searchClient = algoliasearch(
    '9DXI64FBU5',
    '527a3245c7bcf00d16acad5ff3dd6280'
  )

  const [hasInput, setHasInput] = useState(false)
  const [refresh, setRefresh] = useState(false)

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="dev_blog"
      refresh={refresh}
    >
      <Configure hitsPerPage={5} />
      <Stack width="80%" spacing={4}>
        <SearchBox setHasInput={setHasInput} />
        {hasInput && <Hits hasInput={hasInput} />}
      </Stack>
    </InstantSearch>
  )
}

export default Search
