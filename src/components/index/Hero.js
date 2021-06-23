import React from "react"
import * as styles from "../../styles/index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import BookClass from "./BookClass"
import { Link } from "gatsby"
import SocialScrollOut from "../global/socialScrollOut"
const Hero = () => {
  // const imageOverlayVariants = {
  //   initial: {
  //     width: "110%",
  //     transition: { ease: [0.93, 0.04, 0.42, 1.01], duration: 0.8 },
  //   },
  //   end: {
  //     width: 0,
  //     transition: { ease: [0.93, 0.04, 0.42, 1.01], duration: 1.2, delay: 1 },
  //   },
  // }
  // const imageVariants = {
  //   initial: {
  //     scale: 1.3,
  //     transition: { ease: [0.93, 0.04, 0.42, 1.01], duration: 0.8 },
  //   },
  //   end: {
  //     scale: 1,
  //     transition: { ease: [0.93, 0.04, 0.42, 1.01], duration: 1.2, delay: 1 },
  //   },
  // }

  // const text = {
  //   initial: {
  //     y: "70px",
  //     transition: { delay: 1.5 },
  //   },
  //   end: {
  //     y: 0,
  //     transition: { ease: [0.44, 0, 0.56, 1], delay: 1, duration: 1 },
  //   },
  // }

  // const textContainer = {
  //   initial: {
  //     transition: { staggerChildren: 0.15, delay: 1.2 },
  //   },
  //   end: {
  //     transition: {
  //       staggerChildren: 0.5,
  //       delay: 1.5,
  //       duration: 1.5,
  //     },
  //   },
  // }

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroMainText}>
            Space <span>&amp;</span>
            <br />
            Studio
          </h1>
          <p className={styles.heroSubText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque vitae imperdiet massa. Mauris et nisi semper, ultricies
            arcu vel, suscipit quam.
          </p>
          <button className={styles.bookClassBtn}>Book class</button>
        </div>
        <div className={styles.heroImageContainer}>
          <StaticImage
            src="../../imgs/testSubHero.jpg"
            alt="Exhale yoga studio"
            className={styles.heroSubImage}
          />
          <div className={styles.heroImageOverlay}>
            <StaticImage
              src="../../imgs/testhero.jpg"
              alt="Exhale yoga studio"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
      <SocialScrollOut />
    </>
  )
}

export default Hero
