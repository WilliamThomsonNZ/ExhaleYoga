import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import { useState } from "react"
import * as styles from "./pageHero.module.scss"
import { useLocomotiveScroll } from "react-locomotive-scroll"
import { motion } from "framer-motion"
import AnimatedLetters from "../AnimatedLetters"

const PageHero = ({ content, container }) => {
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
        <div className={`${styles.bannerRow} ${styles.desktopBanner}`}>
          <AnimatedLetters title={"Yoga & space"} />
        </div>
        <div className={`${styles.bannerRow} ${styles.mobileBanner}`}>
          <AnimatedLetters title={"Yoga &"} />
        </div>
        <div className={`${styles.bannerRow} ${styles.mobileBanner}`}>
          <AnimatedLetters title={"Space"} />
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        <motion.div
          variants={heroImageVariants}
          initial={"initial"}
          animate={"animate"}
        >
          <StaticImage
            src="../../../imgs/mainLandscape.jpg"
            alt="Exhale yoga studio"
            className={styles.mainImage}
            placeholder="none"
          />
        </motion.div>
      </div>
      <StaticImage
        src="../../../imgs/test.jpg"
        alt="Exhale yoga studio"
        className={styles.subImage}
        data-scroll
        data-scroll-speed="2"
      />
    </div>
  )
}

export default PageHero
