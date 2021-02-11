import { Stack, InputGroup, InputLeftElement, Input, InputRightElement } from '@chakra-ui/react'

import { MagnifyingGlass } from 'phosphor-react'

const SearchInput = (props) => {

    return(
        <Stack width='80%' spacing={4}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<MagnifyingGlass />}    
                />
                <Input placeholder='Search' />
            </InputGroup>
        </Stack>
    )
}

export default SearchInput