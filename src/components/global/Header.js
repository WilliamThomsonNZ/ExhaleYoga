import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import Menu from "./Menu"
import * as styles from "../../styles/menu.module.scss"
import Icon from "../../imgs/man.svg"
import useWindowWidth from "../../utils/hooks/useWindowWidth"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Header = () => {
  const headerVariants = {
    initial: { opacity: 0 },
    show: {
      opacity: 1,
      // y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
        //delay: delay,
      },
    },
  }
  const text = {
    initial: {
      y: 0,
    },
    animate: {
      y: "16px",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial={"initial"}
        animate={"show"}
        className={styles.header}
      >
        <nav className={styles.desktopNavigationContainer}>
          <ul className={styles.desktopNavigationItems}>
            <li className={styles.navigationItem}>
              <Link path="#">Home</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link path="#">Events</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link path="#">Timetable</Link>
            </li>
          </ul>
        </nav>
        <motion.div className={styles.logoContainer}>
          <Link to={"/"} className={styles.logo}>
            <Icon className={styles.logoSvg} />
            <div className={styles.logoTextContainer}>
              <motion.span className={styles.logoText}>EXHALE YOGA</motion.span>
            </div>
          </Link>
        </motion.div>
        <nav className={styles.desktopNavigationContainer}>
          <ul className={styles.desktopNavigationItems}>
            <li className={styles.navigationItem}>
              <Link path="#">Pricing</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link path="#">Contact</Link>
            </li>
            <Link
              to="/pricing"
              className={`${styles.navigationItem} ${styles.introductoryNavItem}`}
            >
              Introductory offer
            </Link>
          </ul>
        </nav>
        <Menu />
      </motion.header>
    </>
  )
}

export default Header
