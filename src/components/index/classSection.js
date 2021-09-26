import React, { useState } from "react"
import * as styles from "../../styles/classSection.module.scss"
import { AnimatePresence, motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import image from "../../imgs/testhero.jpg"
import OfferedClass from "./offeredClass"
import useWindowWidth from "../../utils/hooks/useWindowWidth"
import ButtonArrow from "../global/ButtonArrow/ButtonArrow"
const ClassSection = () => {
  //Have an index of currently hovering or clicked class
  //pull the id of each class and then we can update the hover index
  //based on that index we show the corrospoding image and desc
  //Image will also need to be mapped to the position of user cursor

  const classes = [
    {
      id: 0,
      title: "Vinyasa",
      description:
        "Fluid, continuous and flowing with breath. The Vinyasa flow deepens and stokes your inner fire, strengthens the body and expands your inner self with knowing and clarity",
    },
    {
      id: 1,
      title: "Yin Yoga",
      description:
        "The Vinyasa flow deepens and stokes your inner fire, strengthens the body and expands your inner self with knowing and clarity",
    },
    {
      id: 2,
      title: "Yinyasa",
      description:
        "Fluid, continuous and flowing with breath. The Vinyasa flow deepens and stokes your inner fire, strengthens the body and expands your inner self with knowing and clarity",
    },
    {
      id: 3,
      title: "Hatha Yoga",
      description:
        "Fluid, continuous and flowing with breath. The Vinyasa flow deepens and stokes your inner fire, strengthens the body and expands your inner self with knowing and clarity",
    },
    {
      id: 4,
      title: "Restoration Yoga",
      description:
        "Fluid, continuous and flowing with breath. The Vinyasa flow deepens and stokes your inner fire, strengthens the body and expands your inner self with knowing and clarity",
    },
  ]
  //Class images
  const images = [
    <StaticImage src="../../imgs/testClass.jpg" alt="Exhale yoga studio" />,
    <StaticImage src="../../imgs/class1.jpg" alt="Exhale yoga studio" />,
    <StaticImage src="../../imgs/class2.jpg" alt="Exhale yoga studio" />,
    <StaticImage src="../../imgs/class3.jpg" alt="Exhale yoga studio" />,
    <StaticImage src="../../imgs/class3.jpg" alt="Exhale yoga studio" />,
  ]
  //Hooks
  const width = useWindowWidth(200)
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleMouseEnter = e => {
    const id = e.target.id
    setCurrentIndex(id)
  }
  const handleMouseLeave = e => {
    //setCurrentIndex(-1)
  }

  const image = {
    initial: {
      opacity: 0,
      rotate: 5,
      y: "-40%",
      x: width > 800 ? "50%" : 0,
    },
    animate: {
      opacity: 1,
      rotate: 0,
      y: "-50%",
      transition: {
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      rotate: -5,
      y: "-40%",
      transition: {
        duration: 0.8,
      },
    },
  }
  const description = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
      },
    },
  }
  const scrollText = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-713px",
      transition: {
        repeat: Infinity,
        duration: 15,
        ease: ["linear"],
      },
    },
  }
  return (
    <>
      <motion.div className={styles.container}>
        <div className={styles.headingContainer}>
          <motion.h2 className={styles.heading}>
            Classes we offer at Exhale Yoga
          </motion.h2>
          <div className={styles.scrollWrapper}>
            <div className={styles.scrollTextOuterContainer}>
              <motion.div
                className={styles.scrollTextContainer}
                variants={scrollText}
                animate={"animate"}
                initial={"initial"}
              >
                <motion.p>Hover or click for more information</motion.p>
                <motion.p>Hover or click for more information</motion.p>
                <motion.p>Hover or click for more information</motion.p>
                <motion.p>Hover or click for more information</motion.p>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div className={styles.classContainer}>
          <motion.ul className={styles.classLabelContainer}>
            {classes.map(type => (
              <OfferedClass
                type={type}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                currentIndex={currentIndex}
                key={type.id}
              />
            ))}
          </motion.ul>
          <AnimatePresence>
            {currentIndex !== -1 && (
              <motion.div
                className={styles.classImage}
                key={"classImage"}
                variants={image}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
              >
                {images[currentIndex]}
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {currentIndex !== -1 && (
              <motion.div
                className={styles.classDescription}
                variants={description}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
              >
                {classes[currentIndex].description}
                <ButtonArrow label={"View timetable"} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  )
}

export default ClassSection
