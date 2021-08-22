import { motion } from "framer-motion"
import React, { useState } from "react"
import * as styles from "../../styles/testimonials.module.scss"
const Testimonials = () => {
  //TODO:need to pull reviews in from contentful

  const reviews = [
    {
      id: 1,
      author: "James Fig",
      review:
        "A small but lovely studio taking inspiration from Bali with plants and decorative cushions, Ivy Studio is located on the upper floor of Monday Cafe and Bar in Kingsland, Auckland.",
    },
    {
      id: 2,
      author: "Jane Doe",
      review:
        "As I embark on the seemingly impossible task of trying to replace Olivia Marley, I realise just how lucky I was to find such.",
    },
    {
      id: 3,
      author: "Kate King",
      review:
        "A small but lovely studio taking inspiration from Bali with plants and decorative cushions, Ivy Studio is located on the upper floor of Monday Cafe and Bar in Kingsland, Auckland.",
    },
    {
      id: 4,
      author: "Tom Tether",
      review:
        "As I embark on the seemingly impossible task of trying to replace Olivia Marley, I realise just how lucky I was to find such.",
    },
  ]
  const [lastClick, setLastClick] = useState("")
  const [authorYHeight, setAuthorYHeight] = useState(0)
  const [reviewScrollProgress, setReviewScrollProgress] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const movingValue = 100 / reviews.length

  const handleArrowClick = value => {
    if (value === "prev" && authorYHeight > 0) {
      setAuthorYHeight(prevValue => prevValue - movingValue)
      setReviewScrollProgress(prevValue => prevValue - 80)
      setCurrentIndex(prevValue => prevValue - 1)
    } else if (value === "next" && authorYHeight < 100 - movingValue) {
      setAuthorYHeight(prevValue => prevValue + movingValue)
      setReviewScrollProgress(prevValue => prevValue + 80)
      setCurrentIndex(prevValue => prevValue + 1)
    }
  }

  //Animation
  const authorVariants = {
    prev: {
      y: `-${authorYHeight}%`,
      transition: {
        duration: 0.8,
        ease: [0.405, 0, 0.025, 1],
      },
    },
    next: {
      y: `-${authorYHeight}%`,
      transition: {
        duration: 0.8,
        ease: [0.405, 0, 0.025, 1],
      },
    },
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
      x: `-${reviewScrollProgress}%`,
      transition: {
        duration: 1.5,
        ease: [0.405, 0, 0.025, 1],
      },
    },
    next: {
      x: `-${reviewScrollProgress}%`,
      transition: {
        duration: 1.5,
        ease: [0.405, 0, 0.025, 1],
      },
    },
  }
  return (
    <section className={styles.sectionContainer} data-scroll-section>
      <div className={styles.heading}>
        <h2 className={styles.title}>What our vistors have to say.</h2>
        <div className={styles.loadingBarOuter}>
          <motion.div
            className={styles.loadingBarInner}
            variants={progressBar}
            initial={false}
            animate={lastClick === "prev" ? "prev" : "next"}
          ></motion.div>
        </div>
      </div>
      <div className={styles.reviewsContainer}>
        <motion.div
          className={styles.reviewsInnerContainer}
          variants={reviewsVariants}
          initial={false}
          animate={lastClick === "prev" ? "prev" : "next"}
        >
          {reviews.map((review, index) => (
            <div
              className={`${styles.review} ${
                currentIndex == review.id - 1 ? styles.reviewInView : undefined
              }`}
            >
              “{review.review}”
            </div>
          ))}
        </motion.div>
      </div>
      <div className={styles.controlsContainer}>
        <div className={styles.controls}>
          <div className={styles.arrowContainer}>
            <button onClick={() => handleArrowClick("prev")}>&#10229;</button>
            <button onClick={() => handleArrowClick("next")}>&#10230;</button>
          </div>
          <div className={styles.reviewAuthorContainer}>
            <motion.div
              className={styles.reviewAuthorInnerContainer}
              variants={authorVariants}
              animate={lastClick === "prev" ? "prev" : "next"}
              initial={false}
            >
              {reviews.map(review => (
                <span className={styles.reviewAuthor} key={review.id}>
                  {review.author}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
        <div className={styles.reviewIndexContainer}>
          <motion.div
            className={styles.reviewIndexInnerContainer}
            variants={authorVariants}
            animate={lastClick === "prev" ? "prev" : "next"}
            initial={false}
          >
            {reviews.map(review => (
              <span className={styles.reviewIndex}>
                {review.key > 9 ? review.id : `0${review.id}`}&nbsp;
              </span>
            ))}
          </motion.div>
          <span className={styles.reviewTotal}> - 04</span>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
