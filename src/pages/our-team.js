import React, { useRef } from "react"
import PageHero from "../components/global/PageHero/PageHero1"
import Layout from "../components/global/Layout"
import * as styles from "../styles/team.module.scss"
import * as heroStyling from "../components/global/PageHero/pageHero.module.scss"
import TeamSlider from "../components/global/TeamSlider/TeamSlider"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/global/Footer"
import Emblem from "../components/global/Emblem"
import { motion } from "framer-motion"
import { graphql } from "gatsby"
const OurTeam = ({ data }) => {
  const heroContent =
    "Our space is avaliable to hire for functions and workshops."
  const containerRef = useRef(null)
  console.log(data)
  const newData = data.allFile.edges
  console.log(newData)
  newData.reverse()

  const heroImageVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  }
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
      {/* <PageHero content={heroContent} page={"team"} title={"Our Teachers"} /> */}
      <div className={heroStyling.pageHeroContainer}>
        <div className={heroStyling.contentContainer}>
          <div classsName={heroStyling.desktopBanner}>
            <motion.span
              className={heroStyling.title}
              variants={heroTextBanner}
              initial={"initial"}
              animate={"animate"}
            >
              Our Teachers
            </motion.span>
          </div>
        </div>
        <div className={heroStyling.heroImageContainer}>
          <StaticImage
            src="../imgs/heroImages/team/main.jpg"
            alt="Exhale yoga studio"
            className={heroStyling.mainImage}
            placeholder={"blurred"}
          />
        </div>
        <StaticImage
          src="../imgs/heroImages/team/sub.jpg"
          alt="Exhale yoga studio"
          className={heroStyling.subImage}
        />
      </div>
      <section className={styles.teamMissionStatement}>
        <Emblem label={"View our team members below"} />
      </section>
      <TeamSlider data={newData} />
    </Layout>
  )
}
export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "teamPortraits" } }) {
      edges {
        node {
          name
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

export default OurTeam
