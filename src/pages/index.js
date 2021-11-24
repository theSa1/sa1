import "../styles/main.css"
import React from "react"
import { Layout } from "../components/Layout"
import { Flex, Heading } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Button } from "@chakra-ui/button"
import { HiChevronRight } from "react-icons/hi"
import { SocialMedia } from "../components/SocialMedia"
import { theme as chakraTheme } from "@chakra-ui/react"
import { Link } from "gatsby"

export default function Home({ location }) {
  return (
    <Layout page={location.pathname}>
      <Flex h="calc(100vh - 80px)" className="home-section">
        <Flex
          mt="auto"
          mb="auto"
          w={["100%", "50%", "50%", "50%"]}
          flexDirection="column"
        >
          {/* <Heading color={["red", "green", "yellow", "orange"]}>Test</Heading> */}
          <Heading size="md" color="gray.600">
            Hello,
          </Heading>
          <Heading size="xl">
            I’m <chakra.span color="teal.300">savan,</chakra.span>
          </Heading>
          <Heading color="teal.300" size="md">
            Programmer & Web Developer
          </Heading>
          <Heading color="gray.600" size="sm" mt="15px" maxW="530px">
            I like to build <chakra.span color="teal.300">websites</chakra.span>{" "}
            and <chakra.span color="teal.300">apps</chakra.span> that can change
            our lives forever for the better.
          </Heading>
          <Flex mt="15px">
            <Link to="about">
              <Button
                w="fit-content"
                backgroundColor="teal.300"
                size="sm"
                color="white"
                _hover={{ backgroundColor: "teal.400" }}
                _active={{ backgroundColor: "teal.300" }}
                rightIcon={<HiChevronRight />}
                fontWeight="500"
                letterSpacing=".5px"
              >
                Know More
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                w="fit-content"
                variant="outline"
                size="sm"
                color="gray.600"
                borderColor="gray.600"
                ml="10px"
                fontWeight="500"
                letterSpacing=".5px"
              >
                Contact Me
              </Button>
            </Link>
          </Flex>
          <Flex mt="15px">
            <SocialMedia color={chakraTheme.colors.gray["600"]} />
          </Flex>
        </Flex>
        <Flex
          mt="auto"
          mb="auto"
          w={["100%", "50%", "50%"]}
          flexDirection="column"
          display={["none", "flex", "flex"]}
          justifyContent="center"
          alignItems="center"
        >
          <chakra.img src="images/home-image.svg" width="md" />
        </Flex>
      </Flex>
    </Layout>
  )
}
