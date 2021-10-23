import React, { useRef } from "react"
import PageHero from "../components/global/PageHero/PageHero1"
import Layout from "../components/global/Layout"
import * as styles from "../styles/space.module.scss"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { motion } from "framer-motion"
import ImageSlider from "../components/global/ImageSlider/ImageSlider"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import ButtonArrow from "../components/global/ButtonArrow/ButtonArrow"
const OurTeam = ({ data }) => {
  const heroContent =
    "Our space is avaliable to hire for functions and workshops."
  const containerRef = useRef(null)
  return (
    <Layout>
      <PageHero content={heroContent} container={containerRef.current} />
      <div className={styles.pageContainer}>
        <section className={styles.pageContent}>
          <h2 className={styles.title}>
            Our space is avaliable to hire for functions and workshops.
          </h2>
          <p>
            The studio is influenced by the natural beauty of New Zealand. We
            encourage you to bring your practice to the great outdoors close to
            Hobsonville and West Auckland: Catalina Bay, around the Auckland
            harbour, Waitakere Ranges, or the stunning West Coast beaches.
          </p>
          <p>
            Our yoga studio is located on the ground floor, and is wheel-chair
            accessible (wide doors at entry and in restroom) Please reach out if
            you'll be joining our class and need extra support and we're happy
            to arrange this for you.
          </p>
          <ButtonArrow label={"Get in touch"} />
        </section>
        <ImageSlider data={data} />
      </div>
    </Layout>
  )
}

export default OurTeam

export const query = graphql`
  query MyQuery123 {
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
