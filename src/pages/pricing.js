import React, { useRef } from "react"
import PageHero from "../components/global/PageHero/PageHero1"
import Layout from "../components/global/Layout"
import * as styles from "../styles/pricing.module.scss"
import * as heroStyling from "../components/global/PageHero/pageHero.module.scss"
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

  const heroTextBanner = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  }
  return (
    <Layout>
      {/* <PageHero
        content={heroContent}
        page={"pricing"}
        title={"Invest in you"}
      /> */}
      <div className={heroStyling.pageHeroContainer}>
        <div className={heroStyling.contentContainer}>
          <div classsName={heroStyling.desktopBanner}>
            <motion.span
              className={heroStyling.title}
              variants={heroTextBanner}
              initial={"initial"}
              animate={"animate"}
            >
              Invest in you
            </motion.span>
          </div>
        </div>
        <div className={heroStyling.heroImageContainer}>
          <StaticImage
            src="../imgs/heroImages/pricing/main.jpg"
            alt="Exhale yoga studio"
            className={heroStyling.mainImage}
            placeholder={"blurred"}
          />
        </div>
        <StaticImage
          src="../imgs/heroImages/pricing/sub.jpg"
          alt="Exhale yoga studio"
          className={heroStyling.subImage}
        />
      </div>
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
