import React, { useEffect, useState } from "react"
import * as styles from "./IndexClass.module.scss"
import ButtonArrow from "../ButtonArrow/ButtonArrow"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import Emblem from "../Emblem"

const IndexClass = ({}) => {
  const classes = [
    {
      tileName: "Vinyasa",
      content:
        "   The studio is influenced by the natural beauty of New Zealand. We encourage you to bring your practice to the great outdoors close to Hobsonville.",
      link: "/pricing",
      scrollSpeed: "2",
      img: "../../../imgs/testSubHero.jpg",
    },
    {
      tileName: "Yin Yoga",
      content:
        "   The studio is influenced by the natural beauty of New Zealand. We encourage you to bring your practice to the great outdoors close to Hobsonville.",
      link: "/pricing",
      scrollSpeed: "1",
      img: "../../../imgs/testSubHero.jpg",
    },
    {
      tileName: "Hatha",
      content:
        "   The studio is influenced by the natural beauty of New Zealand. We encourage you to bring your practice to the great outdoors close to Hobsonville.",
      link: "/pricing",
      scrollSpeed: "3",
      img: "../../../imgs/testSubHero.jpg",
    },
    {
      tileName: "Vinyasa Flow",
      content:
        "   The studio is influenced by the natural beauty of New Zealand. We encourage you to bring your practice to the great outdoors close to Hobsonville.",
      link: "/pricing",
      scrollSpeed: "1",
      img: "../../../imgs/testSubHero.jpg",
    },
  ]
  const svgVariants = {
    animate: {
      rotate: 360,
      transition: {
        ease: "linear",
        duration: 20,
        repeat: Infinity,
      },
    },
  }
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className={styles.container}>
      <p className={styles.textContent}>
        We are a spirited and dynamic yoga community, your financial commitment
        to YinYoga Napier supports us to widen and reach. The studio is
        influenced by the natural beauty of New Zealand.
      </p>{" "}
      <Emblem label={"Find a class for you"} />
      <div className={styles.classTileContainer}>
        {classes.map((tile, index) => (
          <ClassTile
            tileName={tile.tileName}
            content={tile.content}
            link={tile.link}
            key={index}
            index={index}
            scrollSpeed={tile.scrollSpeed}
          />
        ))}
      </div>
    </section>
  )
}

const ClassTile = ({
  tileName,
  content,
  tileLink,
  index,
  scrollSpeed,
  img,
  offsetY,
  negative,
}) => {
  const nameVariants = {
    initial: {
      rotate: -90,
      y: 185,
      scale: 1,
      transition: {
        ease: [0.405, 0, 0.025, 1],
        duration: 0.8,
      },
    },
    animate: {
      rotate: -90,
      scale: 0.9,
      y: 25,
      transition: {
        ease: [0.405, 0, 0.025, 1],
        duration: 0.8,
      },
    },
  }
  const infoVariants = {
    initial: {
      y: 30,
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
        delay: 0.154,
      },
    },
  }
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className={styles.classTile}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <StaticImage
        src="../../../imgs/manTest.jpg"
        alt={"123"}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
      <div className={styles.tileContent}>
        <motion.h6
          variants={nameVariants}
          animate={isHovering ? "animate" : "initial"}
          className={styles.tileTitle}
        >
          {tileName}
        </motion.h6>

        <motion.p
          variants={infoVariants}
          animate={isHovering ? "animate" : "initial"}
          className={styles.tileInformation}
        >
          <span>{content}</span>
          <ButtonArrow label={"Book class"} isWhite />
        </motion.p>
      </div>
    </div>
  )
}
export default IndexClass
