import { motion } from "framer-motion"
import React from "react"
import * as styles from "./AnimatedLetters.module.scss"
const AnimatedLetters = ({ title }) => {
  const letterAni = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.405, 0, 0.025, 1],
        duration: 0.7,
      },
    },
  }
  const banner = {
    animate: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  }

  console.log([...title])
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
    </motion.span>
  )
}

export default AnimatedLetters
