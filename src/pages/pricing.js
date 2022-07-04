import React, { useRef } from "react"
import PageHero from "../components/global/PageHero/PageHero1"
import Layout from "../components/global/Layout"
import * as styles from "../styles/pricing.module.scss"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { motion } from "framer-motion"
import ImageSlider from "../components/global/ImageSlider/ImageSlider"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PricingContent from "../components/PricingContent"
import Footer from "../components/global/Footer"

const Pricing = ({ data }) => {
  console.log(data)
  const heroContent =
    "Our space is avaliable to hire for functions and workshops."
  const containerRef = useRef(null)
  return (
    <Layout>
      <PageHero content={heroContent} page={"pricing"} title={"Our Space"} />
      <div className={styles.pageContainer}>
        <PricingContent />
      </div>
      <ImageSlider />
    </Layout>
  )
}
export const query = graphql`
  query pricingQuery {
    allContentfulCtaHeader {
      edges {
        node {
          linkText
          link
        }
      }
    }
  }
`

export default Pricing
