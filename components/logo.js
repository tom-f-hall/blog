import React from "react";
import Link from 'next/link'
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link href='/'>
      <Text fontSize="lg" fontWeight="bold" _hover={{ cursor: 'pointer'}}>
        Tom's Blog
      </Text>
    </Link>
    </Box>
  );
}
