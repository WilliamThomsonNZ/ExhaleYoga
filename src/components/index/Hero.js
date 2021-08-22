import React, { useRef } from "react"
import * as styles from "../../styles/index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import BookClass from "./BookClass"
import { Link } from "gatsby"
import SocialScrollOut from "../global/socialScrollOut"
import useWindowWidth from "../../utils/hooks/useWindowWidth"
//Text animation

const subContainer = {
  animate: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 1,
    },
  },
}

const AnimatedLetters = ({ title, isTopRow }) => {
  const width = useWindowWidth(200)
  let delay = width > 800 ? 4 : 2
  const letterAni = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  }
  const banner = {
    animate: {
      transition: {
        //delayChildren: delay,
        staggerChildren: 0.1,
      },
    },
  }
  return (
    <motion.span
      className={styles.rowTitle}
      variants={banner}
      initial="initial"
      animate="animate"
    >
      {[...title].map((letter, index) => (
        <motion.span
          className={styles.rowLetter}
          variants={letterAni}
          key={index}
        >
          {letter}
        </motion.span>
      ))}
      {isTopRow && (
        <motion.span
          className={`${styles.amp} ${styles.rowLetter}`}
          variants={letterAni}
        >
          &nbsp;&amp;&nbsp;
        </motion.span>
      )}
    </motion.span>
  )
}
const handleSubHeroParalax = ref => {}
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
        delay: 1,
      },
    },
  }
  return (
    <>
      <div className={styles.heroContainer} data-scroll-section>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroMainText}>
            <div className={styles.bannerRow}>
              <AnimatedLetters title={"Space"} isTopRow />
            </div>
            <div className={styles.bannerRow}>
              <AnimatedLetters title={"Studio"} />
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
            <motion.button className={styles.bookClassBtn}>
              Book class <span className={styles.arrow}>&rarr;</span>
            </motion.button>
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
            //variants={image}
            transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
            layoutId="main-image"
          >
            <StaticImage
              src="../../imgs/heroimg.jpg"
              alt="Exhale yoga studio"
              className={styles.heroImage}
              loading="eager"
            />
          </motion.div>
        </motion.div>
        <motion.div className={styles.subHeroImageContainer} ref={ref}>
          <StaticImage
            src="../../imgs/testSubHero.jpg"
            alt="Woman in yoga studio"
            className={styles.subHeroImage}
            loading="eager"
          />
        </motion.div>
      </motion.div>

      {/* <SocialScrollOut /> */}
    </>
  )
}

export default Hero
