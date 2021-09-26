import { motion } from "framer-motion"
import React, { useState } from "react"
import * as styles from "../../styles/testimonials.module.scss"
const Testimonials = ({ data }) => {
  //TODO:need to pull reviews in from contentful
  const reviews = data.allContentfulReview.edges
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
    <section className={styles.sectionContainer}>
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
                currentIndex == index ? styles.reviewInView : undefined
              }`}
              key={review.node.id}
            >
              “{review.node.reviewBody.reviewBody}”
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
                <span className={styles.reviewAuthor} key={review.node.id}>
                  {review.node.reviewAuthor}
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
            {reviews.map((review, index) => (
              <span className={styles.reviewIndex}>
                {index + 1 > 9 ? index : `0${index + 1}`}&nbsp;
              </span>
            ))}
          </motion.div>
          <span className={styles.reviewTotal}>
            {" "}
            - {reviews.length > 9 ? reviews.length : `0${reviews.length}`}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
