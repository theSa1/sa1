import "../styles/main.css"
import React from "react"
import { Layout } from "../components/Layout"
import { Flex, Heading } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Button } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"
import { HiChevronRight } from "react-icons/hi"
import { SocialMedia } from "../components/SocialMedia"
import { Link } from "gatsby"
import { colors } from "../styles/colors"

export default function Home({ location }) {
  const { colorMode } = useColorMode()
  return (
    <Layout page={location.pathname}>
      <Flex h="calc(100vh - 80px)" className="home-section">
        <Flex
          mt="auto"
          mb="auto"
          w={["100%", "50%", "50%", "50%"]}
          flexDirection="column"
          h="100%"
          justifyContent="center"
        >
          {/* <Heading color={["red", "green", "yellow", "orange"]}>Test</Heading> */}
          <Heading size="md" color={colors.home.titleText.ln1[colorMode]}>
            Hello,
          </Heading>
          <Heading size="xl" color={colors.home.titleText.ln2.pt1[colorMode]}>
            I’m{" "}
            <chakra.span color={colors.home.titleText.ln2.pt2[colorMode]}>
              savan,
            </chakra.span>
          </Heading>
          <Heading color={colors.home.titleText.ln3[colorMode]} size="md">
            Programmer & Web Developer
          </Heading>
          <Heading
            color={colors.home.subtitleText[colorMode]}
            size="sm"
            mt="15px"
            maxW="530px"
          >
            I like to build{" "}
            <chakra.span
              color={colors.home.subtitleText.highlighted[colorMode]}
            >
              websites
            </chakra.span>{" "}
            and{" "}
            <chakra.span
              color={colors.home.subtitleText.highlighted[colorMode]}
            >
              apps
            </chakra.span>{" "}
            that can change our lives forever for the better.
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
              >
                Know More
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                w="fit-content"
                variant="outline"
                size="sm"
                color={colors.home.btns.contactBtn.text[colorMode]}
                borderColor={colors.home.btns.contactBtn.border[colorMode]}
                ml="10px"
                fontWeight="500"
              >
                Contact Me
              </Button>
            </Link>
          </Flex>
          <Flex mt="15px">
            <SocialMedia color={colors.home.icon[colorMode]} />
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
