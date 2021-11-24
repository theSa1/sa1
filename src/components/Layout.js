import React from "react"
import { Flex } from "@chakra-ui/layout"
import { Header } from "./Header"
import Scrollbars from "react-custom-scrollbars-2"

export const Layout = ({ children, page }) => {
  return (
    <Flex flexDirection="column" overflow="hidden" backgroundColor="gray.50">
      <Header page={page} />
      <Scrollbars
        style={{
          height: "calc(100vh - 70px)",
          width: "100vw",
          marginTop: "70px",
        }}
      >
        <Flex
          flexDirection="column"
          padding="5px 1.5rem"
          w={["100vw", "100vw", "100vw", "90em"]}
          mr="auto"
          ml="auto"
        >
          {children}
        </Flex>
      </Scrollbars>
    </Flex>
  )
}
