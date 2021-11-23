import React from "react"
import { Flex } from "@chakra-ui/layout"
import { Header } from "./Header"

export const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" overflow="hidden">
      <Header />
      <Flex
        flexDirection="column"
        padding="5px 1.5rem"
        height="calc(100vh - 70px)"
        mt="70px"
      >
        {children}
      </Flex>
    </Flex>
  )
}
