import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import Menu from "./Menu"
import * as styles from "../../styles/menu.module.scss"
import Icon from "../../imgs/man.svg"
import useWindowWidth from "../../utils/hooks/useWindowWidth"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import MenuToggle from "./MenuToggle"
import { StaticImage } from "gatsby-plugin-image"
const Header = ({ handleMenuToggle, menuOpen }) => {
  const headerVariants = {
    initial: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
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
        <motion.div className={styles.logoContainer}>
          <Link to={"/"} className={styles.logo}>
            <StaticImage
              src="../../imgs/Exhale_Logo_Black.png"
              alt={"Exhale Yoga Studio"}
              class={styles.logo}
            />
          </Link>
        </motion.div>
        <nav className={styles.desktopNavigationContainer}>
          <ul className={styles.desktopNavigationItems}>
            <li className={styles.navigationItem}>
              <Link to="/our-space">Hire Our Space</Link>
            </li>
            <li className={styles.navigationItem}>
              <a href="/time-table-events">Timetable &amp; Events</a>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/our-team">Team</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.desktopNavigationContainer}>
          <ul className={styles.desktopNavigationItems}>
            <Link
              to="/pricing"
              className={`${styles.navigationItem} ${styles.introductoryNavItem}`}
            >
              Introductory offer
            </Link>
          </ul>
        </nav>
        <MenuToggle handleToggle={handleMenuToggle} menuOpen={menuOpen} />
        {/* <Menu /> */}
      </motion.header>
    </>
  )
}

export default Header
