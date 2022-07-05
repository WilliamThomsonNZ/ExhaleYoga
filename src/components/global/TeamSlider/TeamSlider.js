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
      y: -240,
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
  //data.allFile.edges.reverse()
  console.log(data)
  const teamPortraits = {}
  data.forEach(element => {
    teamPortraits[element.node.name] =
      element.node.childImageSharp.gatsbyImageData
  })
  console.log(teamPortraits)
  const teamMembers = [
    <TeamCard
      name="Minnie"
      title="Yoga Teacher"
      story={
        "Minnie creates a safe and nourishing yoga experience that invites you to explore your true essence. Through a dynamic flow, focused on the mind body connection, you are given space to return home to yourself."
      }
      alt={"man"}
      key="1"
      gatsbyImage={teamPortraits.minnie}
    />,
    <TeamCard
      name="Carly"
      title="Yoga Teacher"
      story={
        "Carly brings embodied spaciousness to the experience of yin style yoga. A meditative journey into your body where you are invited to listen to the needs of your physical self and be empowered to make changes that create space for more joy, pleasure and calm in your nervous system."
      }
      alt={"man"}
      key="2"
      gatsbyImage={teamPortraits.carly}
    />,
    <TeamCard
      name="Helen"
      title="Yoga Teacher"
      story={
        "Helen’s passion is teaching Juicy creative Vinyasa flows to good music. For Helen, Yoga is so much more than just a physical practice, it's a time to connect to your true soul's calling, to reset, restore and nourish your body, mind, heart and spirit."
      }
      alt={"man"}
      key="3"
      gatsbyImage={teamPortraits.helen}
    />,
    <TeamCard
      name="Jessie"
      title="Yoga Teacher"
      story={
        "Jessie’s good vibes are felt from the moment you walk in and are greeted by her big, warm smile and her quirky American accent. You can expect a mindful vinyasa flow class, set to great music, that is strong, steady and usually a bit sweaty!"
      }
      alt={"man"}
      key="4"
      gatsbyImage={teamPortraits.jessie}
    />,
    <TeamCard
      name="Lissy"
      title="Yoga Teacher"
      story={
        "Lissy is passionate about using Yoga and meditation as a form of Therapy ~ physically, mentally, emotionally and spiritually, as a tool to manage the daily stresses of life and as a way to simply get out of your mind and connect with yourself."
      }
      alt={"man"}
      key="5"
      gatsbyImage={teamPortraits.lissy}
    />,
    <TeamCard
      name="Mark"
      title="Yoga Teacher"
      story={
        "Mark’s classes are accessible for everyone, with simple and encouraging language to allow students to experience a practice suitable to their individual needs. With Mark you can expect an authentic and nourishing yoga practice that focuses on reconnecting to yourself."
      }
      alt={"man"}
      key="6"
      gatsbyImage={teamPortraits.mark}
    />,
    <TeamCard
      name="Radha"
      title="Yoga Teacher"
      story={
        "Radha bases her classes on the principle of centeredness and mindfulness, inviting an encounter with one's self, the breath and the energies of the body. This is a traditional take on yoga practice for all the layers of being, leaving one refreshed and energised for the week ahead, and at the same time settled and relaxed."
      }
      alt={"man"}
      key="7"
      gatsbyImage={teamPortraits.radha}
    />,
    <TeamCard
      name="Chris"
      title="Yoga Teacher"
      story={
        "Chris believes yoga is about coming home to self, being present in your body without judgement, noticing what you hold onto and what needs to be let go. Chris holds a safe, secure space for you to come home to yourself and slow down to notice your body's wisdom."
      }
      alt={"man"}
      key="7"
      gatsbyImage={teamPortraits.chris}
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
      setScrollAmount(290)
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

export default TeamSlider

// export default function FullTeamSlider(props) {
//   return (
//     <StaticQuery
//       query={graphql`
//         query {
//           allFile(filter: { relativeDirectory: { eq: "teamPortraits" } }) {
//             edges {
//               node {
//                 childImageSharp {
//                   fluid {
//                     aspectRatio
//                   }
//                   gatsbyImageData(
//                     placeholder: BLURRED
//                     formats: [AUTO, WEBP, AVIF]
//                     layout: CONSTRAINED
//                   )
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={data => <TeamSlider data={data} />}
//     />
//   )
// }
