import React, { useState } from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/socialScrollOut.module.scss"
import { motion } from "framer-motion"
import useWindowWidth from "../../utils/hooks/useWindowWidth"

const SocialScrollOut = () => {
  const [socialOpen, setSocialOpen] = useState(false)
  const width = useWindowWidth(200)
  const direction = width > 800 ? "-100%" : "100%"

  const socialList = {
    open: {
      x: 0,
      transition: { ease: [0.25, 0.05, 0.1, 0.94], duration: 0.6 },
    },
    close: {
      x: direction,
      transition: { ease: [0.25, 0.05, 0.1, 0.94], duration: 0.6 },
    },
  }

  const socialToggler = {
    open: {
      rotate: 45,
      transition: { ease: [0.25, 0.05, 0.1, 0.94], duration: 0.6 },
    },
    close: {
      rotate: 0,
      transition: { ease: [0.25, 0.05, 0.1, 0.94], duration: 0.6 },
    },
  }

  return (
    <div className={styles.socialScrollOutContainer}>
      <div className={styles.socialWrapper}>
        <motion.ul
          className={styles.textList}
          variants={socialList}
          animate={socialOpen ? "open" : "close"}
          initial={false}
        >
          <li className={styles.socialItem}>
            <Link to="/pricing" className={styles.socialLink}>
              Intro Offer
            </Link>
          </li>
          <li className={styles.socialItem}>
            <a href="Instagram" className={styles.socialLink}>
              Instagram
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="Instagram" className={styles.socialLink}>
              Mind body
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="Instagram" className={styles.socialLink}>
              facebook
            </a>
          </li>
        </motion.ul>
      </div>
      <motion.button
        className={styles.socialButton}
        onClick={() => setSocialOpen(!socialOpen)}
        variants={socialToggler}
        animate={socialOpen ? "open" : "close"}
        initial={false}
      >
        <div className={styles.innerContainer}>
          <span className={styles.upperSpan}></span>
          <span className={styles.lowerSpan}></span>
        </div>
      </motion.button>
    </div>
  )
}

export default SocialScrollOut
