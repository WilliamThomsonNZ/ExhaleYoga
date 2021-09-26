import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import { useState } from "react"
import * as styles from "./pageHero.module.scss"
import { useLocomotiveScroll } from "react-locomotive-scroll"
import { AnimatedLetters } from "../../index/Hero"
const PageHero = ({ content, container }) => {
  return (
    <div className={styles.pageHeroContainer}>
      <div className={styles.contentContainer}>
        <p className={styles.content}>{content}</p>
      </div>
      <StaticImage
        src="../../../imgs/subPageHero.jpg"
        alt="Exhale yoga studio"
        className={styles.mainImage}
      />
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
