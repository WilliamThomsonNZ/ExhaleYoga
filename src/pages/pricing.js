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
      <PageHero content={heroContent} container={containerRef.current} />
      <div className={styles.pageContainer}>
        <PricingContent />
      </div>
      <ImageSlider data={data} />
    </Layout>
  )
}
export const query = graphql`
  query pricingQuery {
    allFile(filter: { relativeDirectory: { eq: "heroGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              aspectRatio
            }
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: CONSTRAINED
            )
          }
        }
      }
    }
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
