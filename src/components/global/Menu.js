import React, { useState } from "react"
import * as styles from "../../styles/menu.module.scss"
import MenuToggle from "./MenuToggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "./Navigation"
import Icon from "../../imgs/menuWave.svg"

const Menu = ({ menuOpen, setMenuOpen }) => {
  const menuContainer = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
  }
  const contactItem = {
    open: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.41, 0, 0.13, 1.005],
      },
    },
    closed: {
      y: "200%",
      rotate: 2,
      transition: {
        duration: 1,
        ease: [0.41, 0, 0.13, 1.005],
      },
    },
  }
  return (
    <motion.div
      animate={menuOpen ? "open" : "closed"}
      className={styles.MenuToggleContainer}
    >
      <motion.div
        className={styles.menuContainer}
        key="menuContainer"
        variants={menuContainer}
        initial="closed"
        animate="open"
        exit="closed"
      >
        <Navigation setMenuOpen={setMenuOpen} />
      </motion.div>
    </motion.div>
  )
}

export default Menu
