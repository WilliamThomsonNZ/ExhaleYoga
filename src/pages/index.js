import React from "react"
import Layout from "../components/global/Layout"
import Hero from "../components/index/Hero"
import Intro from "../components/index/intro"
import Background from "../imgs/indexBackground.svg"
export default function Home() {
  return (
    <Layout>
      {/* <Intro /> */}
      <Hero />
      {/* <Background /> */}
    </Layout>
  )
}
