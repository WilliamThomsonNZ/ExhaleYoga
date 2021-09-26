import React, { useEffect, useState } from "react"
import * as styles from "./TeamSlider.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from "framer-motion"
import useWindowWidth from "../../../utils/hooks/useWindowWidth"
const TeamCard = ({ name, title, image, alt, story }) => {
  const [isHovering, setIsHovering] = useState(false)
  const nameVariants = {
    initial: {
      rotate: -90,
      y: 0,
      scale: 1,
      transition: {
        ease: [0.405, 0, 0.025, 1],
        duration: 0.8,
      },
    },
    animate: {
      rotate: -90,
      scale: 0.8,
      y: -100,
      transition: {
        ease: [0.405, 0, 0.025, 1],
        duration: 0.8,
      },
    },
  }
  const storyVariants = {
    initial: {
      y: 100,
      opacity: 0,
      transition: {
        ease: [0.405, 0, 0.025, 1],
        duration: 0.8,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.405, 0, 0.025, 1],
        duration: 0.8,
      },
    },
  }
  return (
    <div
      className={styles.teamCardContainer}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <StaticImage
        src="../../../imgs/manTest.jpg"
        alt={alt}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
      <motion.h6
        variants={nameVariants}
        animate={isHovering ? "animate" : "initial"}
        className={styles.name}
      >
        {name}
      </motion.h6>

      <motion.p
        variants={storyVariants}
        animate={isHovering ? "animate" : "initial"}
        className={styles.story}
      >
        {story}
      </motion.p>
    </div>
  )
}

const TeamSlider = () => {
  const story =
    "The studio is influenced by the natural beauty of New Zealand. We encourage you to bring your practice to the great outdoors."
  const teamMembers = [
    <TeamCard
      name="James Doe"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="1"
    />,
    <TeamCard
      name="James Doe"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="2"
    />,
    <TeamCard
      name="James Doe"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="3"
    />,
    <TeamCard
      name="James Doe"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="4"
    />,
    <TeamCard
      name="James Doe"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="5"
    />,
    <TeamCard
      name="James Doe"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="6"
    />,
    <TeamCard
      name="James Doe"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="7"
    />,
  ]
  const [lastClick, setLastClick] = useState("")
  const [authorYHeight, setAuthorYHeight] = useState(0)
  const [reviewScrollProgress, setReviewScrollProgress] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const movingValue = 100 / teamMembers.length
  //Based on width we need to update size
  const windowWidth = useWindowWidth(200)
  const [scrollAmount, setScrollAmount] = useState(0)
  useEffect(() => {
    if (windowWidth < 800) {
      setScrollAmount(240)
    } else if (windowWidth > 800 && windowWidth < 1150) {
      setScrollAmount(290)
    } else if (windowWidth > 1150 && windowWidth < 1500) {
      setScrollAmount(360)
    } else {
      setScrollAmount(430)
    }
  }, [windowWidth])
  const handleArrowClick = value => {
    if (value === "prev" && authorYHeight > 0) {
      setAuthorYHeight(prevValue => prevValue - movingValue)
      setReviewScrollProgress(prevValue => prevValue - scrollAmount)
      setCurrentIndex(prevValue => prevValue - 1)
    } else if (value === "next" && authorYHeight < 100 - movingValue) {
      setAuthorYHeight(prevValue => prevValue + movingValue)
      setReviewScrollProgress(prevValue => prevValue + scrollAmount)
      setCurrentIndex(prevValue => prevValue + 1)
    }
  }

  const progressBar = {
    prev: {
      width: `${authorYHeight + movingValue}%`,
      transition: {
        duration: 0.8,
        ease: [0.405, 0, 0.025, 1],
      },
    },
    next: {
      width: `${authorYHeight + movingValue}%`,
      transition: {
        duration: 0.8,
        ease: [0.405, 0, 0.025, 1],
      },
    },
  }

  const reviewsVariants = {
    prev: {
      x: `-${reviewScrollProgress}px`,
      transition: {
        duration: 1.5,
        ease: [0.405, 0, 0.025, 1],
      },
    },
    next: {
      x: `-${reviewScrollProgress}px`,
      transition: {
        duration: 1.5,
        ease: [0.405, 0, 0.025, 1],
      },
    },
  }
  return (
    <>
      <section className={styles.container}>
        <div className={styles.controls}>
          <div className={styles.arrowContainer}>
            <span className={styles.title}>Our team</span>
            <button onClick={() => handleArrowClick("prev")}>&#10229;</button>
            <button onClick={() => handleArrowClick("next")}>&#10230;</button>
          </div>
          <div className={styles.loadingBarOuter}>
            <motion.div
              className={styles.loadingBarInner}
              variants={progressBar}
              initial={false}
              animate={lastClick === "prev" ? "prev" : "next"}
            ></motion.div>
          </div>
        </div>
        <div className={styles.teamCardsOuterContainer}>
          <motion.div
            className={styles.teamCardsContainer}
            variants={reviewsVariants}
            initial={false}
            animate={lastClick === "prev" ? "prev" : "next"}
          >
            {teamMembers}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default TeamSlider
