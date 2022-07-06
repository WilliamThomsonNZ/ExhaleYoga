import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./pageHero.module.scss"
import { motion } from "framer-motion"
import AnimatedLetters from "../AnimatedLetters"
import { StaticQuery, graphql } from "gatsby"

const PageHero = ({ data, page, title, imageData }) => {
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
  let imagesObject
  switch (page) {
    case "timetable":
      imagesObject = data.timetable
      break
    case "pricing":
      imagesObject = data.pricing
      break
    case "hireSpace":
      imagesObject = data.hireSpace
      break
    case "team":
      imagesObject = data.team
      break
    default:
      imagesObject = data.pricing
      break
  }

  console.log(imagesObject, data)
  return (
    <div className={styles.pageHeroContainer}>
      <div className={styles.contentContainer}>
        <div classsName={styles.desktopBanner}>
          <motion.span
            className={styles.title}
            variants={heroTextBanner}
            initial={"initial"}
            animate={"animate"}
          >
            {title}
          </motion.span>
        </div>
        {/* <div className={`${styles.bannerRow} ${styles.desktopBanner}`}>
          <AnimatedLetters title={title} />
        </div>
        <div className={`${styles.bannerRow} ${styles.mobileBanner}`}>
          <AnimatedLetters title={title} />
        </div> */}
      </div>
      <div className={styles.heroImageContainer}>
        {/* <motion.div
          variants={heroImageVariants}
          initial={"initial"}
          animate={"animate"}
        > */}
        <GatsbyImage
          image={
            imagesObject.edges[0].node.name === "main"
              ? imagesObject.edges[0].node.childImageSharp.gatsbyImageData
              : imagesObject.edges[1].node.childImageSharp.gatsbyImageData
          }
          alt="Exhale yoga studio"
          className={styles.mainImage}
          placeholder={"blurred"}
        />
        {/* </motion.div> */}
      </div>
      <GatsbyImage
        image={
          imagesObject.edges[0].node.name !== "main"
            ? imagesObject.edges[0].node.childImageSharp.gatsbyImageData
            : imagesObject.edges[1].node.childImageSharp.gatsbyImageData
        }
        alt="Exhale yoga studio"
        className={styles.subImage}
      />
    </div>
  )
}

// export default PageHero
export default function Hero(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          timetable: allFile(
            filter: { relativeDirectory: { eq: "heroImages/timetable" } }
          ) {
            edges {
              node {
                name
                childImageSharp {
                  gatsbyImageData(
                    formats: [AUTO, WEBP, AVIF]
                    layout: CONSTRAINED
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
          pricing: allFile(
            filter: { relativeDirectory: { eq: "heroImages/pricing" } }
          ) {
            edges {
              node {
                name
                childImageSharp {
                  gatsbyImageData(
                    formats: [AUTO, WEBP, AVIF]
                    layout: CONSTRAINED
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
          hireSpace: allFile(
            filter: { relativeDirectory: { eq: "heroImages/hireSpace" } }
          ) {
            edges {
              node {
                name
                childImageSharp {
                  gatsbyImageData(
                    formats: [AUTO, WEBP, AVIF]
                    layout: CONSTRAINED
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
          hireSpace: allFile(
            filter: { relativeDirectory: { eq: "heroImages/hireSpace" } }
          ) {
            edges {
              node {
                name
                childImageSharp {
                  gatsbyImageData(
                    formats: [AUTO, WEBP, AVIF]
                    layout: CONSTRAINED
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
          team: allFile(
            filter: { relativeDirectory: { eq: "heroImages/team" } }
          ) {
            edges {
              node {
                name
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
          }
        }
      `}
      render={data => <PageHero data={data} {...props} />}
    />
  )
}
