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

const Pricing = ({ data }) => {
  const heroContent =
    "Our space is avaliable to hire for functions and workshops."
  const containerRef = useRef(null)
  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <div data-scroll-section>
          <Layout>
            <PageHero content={heroContent} container={containerRef.current} />
            <div className={styles.pageContainer}>
              <PricingContent />
            </div>
            <ImageSlider data={data} />
          </Layout>
        </div>
      </div>
    </LocomotiveScrollProvider>
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
  }
`

export default Pricing
