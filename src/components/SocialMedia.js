import { IconButton } from "@chakra-ui/button"
import React from "react"
import { FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa"

export const SocialMedia = ({ color }) => {
  return (
    <>
      <a href="https://github.com/savan20">
        <IconButton size="sm" rounded="full" variant="ghost" m="0 3px">
          <FaGithub size="25px" color={color} />
        </IconButton>
      </a>
      <a href="https://twitter.com/sa1wasTooShort/">
        <IconButton size="sm" rounded="full" variant="ghost" m="0 3px">
          <FaTwitter size="25px" color={color} />
        </IconButton>
      </a>
      <a href="mailto:me@sa1.co.in">
        <IconButton size="sm" rounded="full" variant="ghost" m="0 3px">
          <FaEnvelope size="25px" color={color} />
        </IconButton>
      </a>
    </>
  )
}
