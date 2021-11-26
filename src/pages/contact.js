import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Input } from "@chakra-ui/input"
import { Flex, Grid, Heading } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Textarea } from "@chakra-ui/textarea"
import React from "react"
import { HiChevronRight } from "react-icons/hi"
import { Layout } from "../components/Layout"
import { SocialMedia } from "../components/SocialMedia"
import { useColorMode } from "@chakra-ui/color-mode"
import { colors } from "../styles/colors"

export default function Contact({ location }) {
  const { colorMode } = useColorMode()

  return (
    <Layout page={location.pathname}>
      <Grid
        gridTemplateRows="1fr"
        gridTemplateColumns={["1fr", "1fr 40vw", "1fr 1fr"]}
        mt="auto"
        mb="auto"
      >
        <Flex h="100%" flexDir="column" mr={["0", "30px", "30px"]}>
          <Heading mb="30px">
            Contact <chakra.span color="teal.300">Me</chakra.span>
          </Heading>
          <Flex>
            <Input
              placeholder="Name"
              mr="10px"
              backgroundColor={colors.contact.inputBg[colorMode]}
              borderColor={colors.contact.inputBg.border[colorMode]}
            />
            <Input
              placeholder="E-Main"
              ml="10px"
              backgroundColor={colors.contact.inputBg[colorMode]}
              borderColor={colors.contact.inputBg.border[colorMode]}
            />
          </Flex>
          <Textarea
            placeholder="Message"
            h="230px"
            mt="20px"
            backgroundColor={colors.contact.inputBg[colorMode]}
            borderColor={colors.contact.inputBg.border[colorMode]}
          />
          <Flex mt="20px" alignItems="center">
            <Button
              mr="10px"
              rightIcon={<HiChevronRight />}
              variant="outline"
              backgroundColor={colors.contact.inputBg[colorMode]}
              borderColor={colors.contact.sendBtn.border[colorMode]}
              color={colors.contact.sendBtn.text[colorMode]}
            >
              Send
            </Button>
            <SocialMedia color={colors.contact.icon[colorMode]} />
          </Flex>
        </Flex>
        <Flex
          h="100%"
          justifyContent="center"
          alignContent="center"
          ml="30px"
          display={["none", "flex", "flex"]}
        >
          <Image src="/images/contact-image.svg" w={["100%", "100%", "md"]} />
        </Flex>
      </Grid>
    </Layout>
  )
}
