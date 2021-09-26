import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import * as styles from "./ButtonArrow.module.scss"
const ButtonArrow = ({ cb = () => {}, label, isFooter, isWhite }) => {
  const [hover, setHover] = useState(false)
  const arrowVariants = {
    stopHover: {
      x: -7,
      y: 4,
      rotate: 45,
      transition: {
        duration: 0.5,
        ease: [0.405, 0, 0.025, 1],
      },
    },
    startHover: {
      x: 10,
      y: -16,
      rotate: 45,
      transition: {
        duration: 0.5,
        ease: [0.405, 0, 0.025, 1],
      },
    },
  }
  return (
    <motion.button
      className={`${styles.button} ${
        isFooter ? styles.footerButton : undefined
      } ${isWhite ? styles.whiteButton : undefined}`}
      onClick={cb}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      {label}
      <div className={styles.arrowContainer}>
        <motion.div
          className={styles.arrowSlider}
          variants={arrowVariants}
          // initial={"initial"}
          animate={hover ? "startHover" : "stopHover"}
          // whileHover={{
          //   x: 5,
          //   y: 10,
          //   rotate: 45,
          // }}
        >
          <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
          <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
        </motion.div>
      </div>
    </motion.button>
  )
}

export default ButtonArrow
