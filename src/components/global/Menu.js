import React, { useState } from "react"
import * as styles from "../../styles/menu.module.scss"
import MenuToggle from "./MenuToggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "./Navigation"
import Icon from "../../imgs/menuWave.svg"

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = e => {
    setMenuOpen(menuOpen => !menuOpen)
  }
  //Need another set of variatns or options to go from open to close as we want a different animation.
  //Can use animate presence here to animate the menu on and off
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
    <motion.div animate={menuOpen ? "open" : "closed"}>
      <MenuToggle handleToggle={handleMenuToggle} menuOpen={menuOpen} />
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.menuContainer}
            key="menuContainer"
            variants={menuContainer}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <Navigation />
            <div className={styles.socialsContainer}>
              <div className={styles.socialLinkContainer}>
                <motion.a href="#" variants={contactItem}>
                  Mind Body
                  <Icon className={styles.menuIcon} />
                </motion.a>
              </div>
              <div className={styles.socialLinkContainer}>
                <motion.a href="#" variants={contactItem}>
                  Instagram <Icon className={styles.menuIcon} />
                </motion.a>
              </div>
              <div className={styles.socialLinkContainer}>
                <motion.a href="#" variants={contactItem}>
                  Facebook <Icon className={styles.menuIcon} />
                </motion.a>
              </div>
              <div className={styles.contactLinkContainer}>
                <motion.a href="#" variants={contactItem}>
                  team@exhaleyoga.co.nz
                </motion.a>
              </div>
              <div className={styles.contactLinkContainer}>
                <motion.a href="#" variants={contactItem}>
                  +64 27 5554029
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Menu
