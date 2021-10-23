import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import { useState } from "react"
import * as styles from "./pageHero.module.scss"
import { useLocomotiveScroll } from "react-locomotive-scroll"
import { AnimatedLetters } from "../../index/Hero"
import { motion } from "framer-motion"
const PageHero = ({ content, container }) => {
  const contentVariants = {
    initial: {
      y: 100,
      opacity: 0,
      rotate: 2,
    },
    animate: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  }
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
  return (
    <div className={styles.pageHeroContainer}>
      <div className={styles.contentContainer}>
        <motion.p
          variants={contentVariants}
          animate={"animate"}
          initial={"initial"}
          className={styles.content}
        >
          {content}
        </motion.p>
      </div>
      <div className={styles.heroImageContainer}>
        <motion.div
          variants={heroImageVariants}
          initial={"initial"}
          animate={"animate"}
        >
          <StaticImage
            src="../../../imgs/subPageHero.jpg"
            alt="Exhale yoga studio"
            className={styles.mainImage}
            placeholder="none"
          />
        </motion.div>
      </div>
      <StaticImage
        src="../../../imgs/subPageSubHero.jpg"
        alt="Exhale yoga studio"
        className={styles.subImage}
        data-scroll
        data-scroll-speed="2"
      />
    </div>
  )
}

export default PageHero
