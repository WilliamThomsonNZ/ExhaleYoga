import React, { useEffect } from "react"
import Background from "../../imgs/indexBackground.svg"
import MobileBackground from "../../imgs/mobilewave.svg"
import * as styles from "../../styles/index.module.scss"
import { motion, useAnimation, useViewportScroll } from "framer-motion"
import Icon from "../../imgs/flower.svg"
import { useInView } from "react-intersection-observer"

const BelowHero = () => {
  const controls = useAnimation()
  const { ref, inView } = useInView()

  const background = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 4,
        duration: 1,
      },
    },
  }

  const content = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const text = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }
  // const { scrollYProgress } = useViewportScroll()
  // const rotate = scrollYProgress.current * 360

  useEffect(() => {
    if (inView) {
      controls.start("animate")
    }
  }, [controls, inView])

  return (
    <div className={styles.missionContainer}>
      <motion.div
        className={styles.missionStatementContent}
        variants={content}
        animate={controls}
        initial={"initial"}
      >
        <motion.div variants={text}>
          <Icon />
        </motion.div>
        <motion.p className={styles.missionStatement} variants={text} ref={ref}>
          Located in the very heart of Sanur you will find our Spa and Yoga
          Shala nestled down a banana palm-lined avenue. Once you enter the gate
          you will feel the peaceful vibration. Located in the very heart of
          Sanur you will find our Spa and Yoga Shala nestled down a banana
          palm-lined avenue. Once you enter the gate you will feel the peaceful
          vibration.
        </motion.p>
      </motion.div>
      <motion.div
        variants={background}
        initial={"initial"}
        animate={"animate"}
        className={styles.belowHeroContainer}
      >
        <Background />
        {/* <MobileBackground /> */}
      </motion.div>
    </div>
  )
}

export default BelowHero
