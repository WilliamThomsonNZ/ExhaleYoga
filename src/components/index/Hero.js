import React, { useRef } from "react"
import * as styles from "../../styles/index.module.scss"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import ButtonArrow from "../global/ButtonArrow/ButtonArrow"
import AnimatedLetters from "../global/AnimatedLetters/index"

//Text animation

const subContainer = {
  animate: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 1,
    },
  },
}

const Hero = () => {
  const ref = useRef(null)
  //Variants inside component so we can use hooks to deteremnine weather animation should run.

  const heroImagesContainer = {
    animate: {
      transition: { staggerChildren: -0.375 },
    },
  }

  const button = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
        delay: 0.4,
      },
    },
  }

  const image = {
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
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroMainText}>
            <div className={`${styles.bannerRow} ${styles.desktopBanner}`}>
              <AnimatedLetters title={"Yoga &  space"} />
            </div>
            <div className={`${styles.bannerRow} ${styles.mobileBanner}`}>
              <AnimatedLetters title={"Yoga &"} />
            </div>
            <div className={`${styles.bannerRow} ${styles.mobileBanner}`}>
              <AnimatedLetters title={"Space"} />
            </div>
          </h1>
          <motion.div
            variants={button}
            initial={"initial"}
            animate={"animate"}
            className={styles.heroSubTextOuterContainer}
          >
            <div className={styles.subTextContainer}>
              <motion.p className={styles.heroSubText}>
                We are an urban sanctuary in the heart of Napier offering yoga
                classes and workshops that put you and your wellbeing first.
              </motion.p>
            </div>
            <ButtonArrow label={"Book class"} />
          </motion.div>
        </div>
      </div>
      <motion.div
        //variants={heroImagesContainer}
        animate={"animate"}
        initial={"initial"}
        className={styles.heroImageContainer}
      >
        <motion.div
          //variants={imageContainer}
          className={`${styles.heroImageAnimationContainer} ${styles.heroImageOverlay}`}
        >
          <motion.div
            style={{ height: "100%", overflow: "hidden" }}
            variants={image}
            layoutId="main-image"
          >
            <StaticImage
              src="../../imgs/heroMain.jpg"
              alt="Exhale yoga studio"
              className={styles.heroImage}
              placeholder="none"
            />
          </motion.div>
        </motion.div>
        {/* <motion.div className={styles.subHeroImageContainer} ref={ref}>
          <StaticImage
            src="../../imgs/testSubHero.jpg"
            alt="Woman in yoga studio"
            className={styles.subHeroImage}
            loading="eager"
          />
        </motion.div> */}
      </motion.div>

      {/* <SocialScrollOut /> */}
    </>
  )
}

export default Hero
