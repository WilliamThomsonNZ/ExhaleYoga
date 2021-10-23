import React, { useEffect, useState } from "react"
import * as styles from "../TeamSlider/TeamSlider.module.scss"
import * as eventStyles from "./EventSlider.module.scss"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from "framer-motion"
import useWindowWidth from "../../../utils/hooks/useWindowWidth"
import ButtonArrow from "../ButtonArrow/ButtonArrow"
// const EventCard = ({ eventName, imageData, eventDescription }) => {
//   console.log(imageData)
//   return (
//     <div className={styles.teamCardContainer}>
//       <GatsbyImage image={imageData.gatsbyImageData} alt={"alt"} />
//       <div className={eventStyles.eventHoverContainer}>
//         <h6>{eventName}</h6>
//         <button>More information</button>
//         <p>{eventDescription.eventDescription}</p>
//       </div>
//     </div>
//   )
// }
const EventCard = ({ eventName, imageData, eventDescription }) => {
  const [isHovering, setIsHovering] = useState(false)
  const [nameHeight, setNameHeight] = useState(-180)
  const width = useWindowWidth(300)
  useEffect(() => {
    if (width > 800) {
      setNameHeight(-160)
    }
  }, [width])
  const nameVariants = {
    initial: {
      y: 0,
      transition: {
        ease: [0.405, 0, 0.025, 1],
        duration: 0.8,
      },
    },
    animate: {
      //scale: 0.8,
      y: nameHeight,
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
      y: -10,
      opacity: 1,
      transition: {
        ease: [0.405, 0, 0.025, 1],
        duration: 0.8,
        delay: 0.1,
      },
    },
  }
  return (
    <div
      className={`${styles.teamCardContainer} ${styles.eventCardContainer}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <GatsbyImage
        image={imageData.gatsbyImageData}
        alt={eventDescription}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
      <motion.h6
        variants={nameVariants}
        animate={isHovering ? "animate" : "initial"}
        className={styles.name}
      >
        {eventName}
        <span className={styles.eventDate}>10/11/2021</span>
      </motion.h6>

      <motion.p
        variants={storyVariants}
        animate={isHovering ? "animate" : "initial"}
        className={styles.story}
      >
        <span className={styles.description}>
          {eventDescription.eventDescription}
        </span>
        <ButtonArrow label={"More information"} isWhite />
      </motion.p>
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
      setScrollAmount(340)
    } else {
      setScrollAmount(390)
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
