import React from "react"
import { Layout } from "../components/Layout"

export default function About({ location }) {
  return <Layout page={location.pathname}>About</Layout>
}
