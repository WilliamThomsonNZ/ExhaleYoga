import React from "react"
import * as styles from "../../styles/menu.module.scss"
import { motion } from "framer-motion"
import useWindowWidth from "../../utils/hooks/useWindowWidth"

const MenuToggle = ({ handleToggle, menuOpen }) => {
  const width = useWindowWidth(200)

  const spanVariantsUpper = {
    open: {
      rotate: -45,
      y: 3.5,
      transition: { duration: 0.2 },
    },
    closed: {
      rotate: 0,
      transition: { duration: 0.2 },
    },
  }
  const spanVariantsLower = {
    open: {
      rotate: 45,
      y: -4.5,
      width: "100%",
      transition: { duration: 0.2 },
    },
    closed: {
      width: "50%",
      y: 0,
      rotate: 0,
      transition: { duration: 0.2 },
    },
  }

  const menuScroll = {
    open: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.405, 0, 0.025, 1],
      },
    },
    closed: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.405, 0, 0.025, 1],
      },
    },
  }

  return (
    <motion.button
      // variants={buttonVariants}
      className={styles.menuToggle}
      onClick={e => handleToggle(e)}
    >
      <motion.div className={styles.menuTextContainer}>
        <motion.span variants={menuScroll}>Menu</motion.span>
        <motion.span variants={menuScroll}>Close</motion.span>
      </motion.div>
      <div className={styles.hamburger}>
        <motion.span
          className={styles.menuToggleBar}
          variants={spanVariantsUpper}
        ></motion.span>
        <motion.span
          className={styles.menuToggleBar}
          variants={spanVariantsLower}
        ></motion.span>
      </div>
    </motion.button>
  )
}

export default MenuToggle
