import React from "react"
import { Flex } from "@chakra-ui/layout"
import { Header } from "./Header"

export const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" overflow="hidden" backgroundColor="gray.50">
      <Header />
      <Flex
        flexDirection="column"
        padding="5px 1.5rem"
        height="calc(100vh - 70px)"
        mt="70px"
        w={["100vw", "100vw", "100vw", "90em"]}
        mr="auto"
        ml="auto"
      >
        {children}
      </Flex>
    </Flex>
  )
}
