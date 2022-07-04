import React, { useEffect, useState } from "react"
import * as styles from "./TeamSlider.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from "framer-motion"
import { StaticQuery, graphql } from "gatsby"
import useWindowWidth from "../../../utils/hooks/useWindowWidth"
import Slider from "react-slick"
export const TeamCard = ({ name, alt, story, gatsbyImage }) => {
  console.log(gatsbyImage)
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
      y: -80,
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
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={styles.teamCardContainer}
    >
      <div className={styles.cardImageContainer}></div>
      <GatsbyImage
        alt={alt}
        placeholder={"blurred"}
        image={gatsbyImage}
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

const TeamSlider = ({ data }) => {
  const story =
    "The studio is influenced by the natural beauty of New Zealand. We encourage you to bring your practice to the great outdoors."
  data.allFile.edges.reverse()
  const teamMembers = [
    <TeamCard
      name="Minnie"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="1"
      gatsbyImage={data.allFile.edges[0].node.childImageSharp.gatsbyImageData}
    />,
    <TeamCard
      name="Carly"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="2"
      gatsbyImage={data.allFile.edges[1].node.childImageSharp.gatsbyImageData}
    />,
    <TeamCard
      name="Helen"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="3"
      gatsbyImage={data.allFile.edges[2].node.childImageSharp.gatsbyImageData}
    />,
    <TeamCard
      name="Jessie"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="4"
      gatsbyImage={data.allFile.edges[3].node.childImageSharp.gatsbyImageData}
    />,
    <TeamCard
      name="Lissy"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="5"
      gatsbyImage={data.allFile.edges[4].node.childImageSharp.gatsbyImageData}
    />,
    <TeamCard
      name="Mark"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="6"
      gatsbyImage={data.allFile.edges[5].node.childImageSharp.gatsbyImageData}
    />,
    <TeamCard
      name="Radha"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="7"
      gatsbyImage={data.allFile.edges[6].node.childImageSharp.gatsbyImageData}
    />,
    <TeamCard
      name="Tash"
      title="Yoga Teacher"
      story={story}
      alt={"man"}
      key="7"
      gatsbyImage={data.allFile.edges[7].node.childImageSharp.gatsbyImageData}
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
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  console.log(data)
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
            {teamMembers.map(member => member)}
          </motion.div>
        </div>
      </section>
    </>
  )
}
export default function FullTeamSlider(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { relativeDirectory: { eq: "teamPortraits" } }) {
            edges {
              node {
                childImageSharp {
                  fluid {
                    aspectRatio
                  }
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    layout: CONSTRAINED
                  )
                }
              }
            }
          }
        }
      `}
      render={data => <TeamSlider data={data} />}
    />
  )
}
