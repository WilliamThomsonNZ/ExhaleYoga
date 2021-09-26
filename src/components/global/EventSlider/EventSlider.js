import React, { useEffect, useState } from "react"
import * as styles from "../TeamSlider/TeamSlider.module.scss"
import * as eventStyles from "./EventSlider.module.scss"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from "framer-motion"
import useWindowWidth from "../../../utils/hooks/useWindowWidth"

const EventCard = ({ eventName, imageData, eventDescription }) => {
  console.log(imageData)
  return (
    <div className={styles.teamCardContainer}>
      <GatsbyImage image={imageData.gatsbyImageData} alt={"alt"} />
      <div className={eventStyles.eventHoverContainer}>
        <h6>{eventName}</h6>
        <button>More information</button>
        <p>{eventDescription.eventDescription}</p>
      </div>
    </div>
  )
}

const EventSlider = ({ data }) => {
  console.log(data)
  const story =
    "The studio is influenced by the natural beauty of New Zealand. We encourage you to bring your practice to the great outdoors close to Hobsonville and West Auckland: Catalina Bay, around the Auckland harbour, Waitakere Ranges, or the stunning West Coast beaches."
  const eventCards = data.allContentfulEvent.nodes.map(yogaEvent => (
    <EventCard
      eventName={yogaEvent.eventName}
      eventDescription={yogaEvent.eventDescription}
      imageData={yogaEvent.eventImage}
    />
  ))
  const [lastClick, setLastClick] = useState("")
  const [authorYHeight, setAuthorYHeight] = useState(0)
  const [reviewScrollProgress, setReviewScrollProgress] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const movingValue = 100 / eventCards.length
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
            {/* <span className={styles.title}>Our team</span> */}
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
            {eventCards}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default EventSlider
