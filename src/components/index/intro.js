import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import * as styles from "../../styles/index.module.scss"

const Intro = () => {
  const [startIntro, setStartIntro] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setStartIntro(true)
    }, 500)
  }, [])
  const logoVariants = {
    animate: {
      position: "fixed",
      top: "7%",
      left: "12%",
    },
    initial: {
      position: "static",
    },
    transition: { ease: "ease", duration: 1, delay: 1 },
  }

  return (
    <div className={styles.introContianer}>
      <div className={styles.introInnerContianer}>
        <motion.h2 className={styles.firstText}>Remember to</motion.h2>
        <motion.h1
          variants={logoVariants}
          initial="initial"
          animate="animate"
          className={styles.tempLogo}
        >
          EXHALE
        </motion.h1>
      </div>
    </div>
  )
}

export default Intro
