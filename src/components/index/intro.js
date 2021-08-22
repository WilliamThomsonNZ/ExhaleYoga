import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import * as styles from "../../styles/indexIntro.module.scss"
import Icon from "../../imgs/flower.svg"
import { StaticImage } from "gatsby-plugin-image"

const Intro = ({ setLoading }) => {
  const imageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  }
  return (
    <motion.div
      className={styles.container}
      variants={imageVariants}
      initial={"initial"}
      animate={"animate"}
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.div layoutId="main-image">
        <StaticImage
          src="../../imgs/heroimg.jpg"
          alt="Exhale yoga studio"
          className={styles.image}
          loading="eager"
        />
      </motion.div>
    </motion.div>
  )
}

export default Intro
