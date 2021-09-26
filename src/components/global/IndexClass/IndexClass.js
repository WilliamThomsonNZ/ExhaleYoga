import React, { useState } from "react"
import * as styles from "./IndexClass.module.scss"
import ButtonArrow from "../ButtonArrow/ButtonArrow"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const IndexClass = ({}) => {
  const classes = [
    {
      tileName: "Vinyasa",
      content:
        "   The studio is influenced by the natural beauty of New Zealand. We encourage you to bring your practice to the great outdoors close to Hobsonville.",
      link: "/pricing",
      scrollSpeed: "3",
    },
    {
      tileName: "Yin Yoga",
      content:
        "   The studio is influenced by the natural beauty of New Zealand. We encourage you to bring your practice to the great outdoors close to Hobsonville.",
      link: "/pricing",
      scrollSpeed: "2",
    },
    {
      tileName: "Hatha",
      content:
        "   The studio is influenced by the natural beauty of New Zealand. We encourage you to bring your practice to the great outdoors close to Hobsonville.",
      link: "/pricing",
      scrollSpeed: "1",
    },
    {
      tileName: "Vinyasa Flow",
      content:
        "   The studio is influenced by the natural beauty of New Zealand. We encourage you to bring your practice to the great outdoors close to Hobsonville.",
      link: "/pricing",
      scrollSpeed: "4",
    },
  ]
  return (
    <section className={styles.container}>
      <p className={styles.textContent}>
        We offer a range of classes for beginners through to experts.
      </p>
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

const ClassTile = ({ tileName, content, tileLink, index, scrollSpeed }) => {
  const nameVariants = {
    initial: {
      rotate: -90,
      y: 200,
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
    <article
      className={styles.classTile}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      data-scroll
      data-scroll-speed={scrollSpeed}
    >
      <span className={styles.index}>
        {index + 1 > 10 ? index + 1 : `0${index + 1}`}
      </span>
      <StaticImage
        src="../../../imgs/testSubHero.jpg"
        alt={"test"}
        className={styles.tileImage}
      />
      <div className={styles.tileContent}>
        <motion.h6
          className={styles.tileTitle}
          variants={nameVariants}
          animate={isHovering ? "animate" : "initial"}
        >
          {tileName}
        </motion.h6>
        <motion.p
          className={styles.tileInformation}
          variants={infoVariants}
          animate={isHovering ? "animate" : "initial"}
        >
          <span>{content}</span>
          <ButtonArrow label={"Book class"} isWhite />
        </motion.p>
      </div>
    </article>
  )
}
export default IndexClass
