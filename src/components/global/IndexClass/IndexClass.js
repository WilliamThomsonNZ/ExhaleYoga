import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import * as styles from "./IndexClass.module.scss"
import ButtonArrow from "../ButtonArrow/ButtonArrow"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import Emblem from "../Emblem"

const IndexClass = ({ data }) => {
  const images = data.class.edges.map(
    node => node.node.childImageSharp.gatsbyImageData
  )

  const classes = [
    {
      tileName: "Vinyasa",
      content:
        "Vinyasa is a dynamic and fluid class that connects breath and movement. In this class you'll flow continuously between postures to strengthen the body, enhance flexibility and calm the mind.",
      link: "/pricing",
      scrollSpeed: "2",
      img: "../../../imgs/indexClass1.jpg",
    },
    {
      tileName: "Gentle Vinyasa",
      content:
        "Gentle Vinyasa is a slow and steady practice that's dynamic and fluid, connecting breath to movement. You will flow slowly between postures to tone the body, increase flexibility and steady the mind.",
      link: "/pricing",
      scrollSpeed: "1",
      img: "../../../imgs/indexClass4.jpg",
    },
    {
      tileName: "Yin",
      content:
        " Yin is an intentional, meditative asana practice that's perfect for everyone. Its purposeful practice settles the mind, relaxes the body and releases tension. This class's floor based flow focuses on holding postures to increase flexibility and enhance joint mobility.",
      link: "/pricing",
      scrollSpeed: "3",
      img: "../../../imgs/indexClass2.jpg",
    },
    {
      tileName: "Strong Vinyasa",
      content:
        "A Strong Vinyasa practice with creative dynamic flows. With the opportunity to challenge yourself a little further and deepen your practice with some arm balances and inversions. A little experience is advised however there are always options to go at your own pace and level as in every yoga class.",
      link: "/pricing",
      scrollSpeed: "1",
      img: "../../../imgs/indexClass3.jpg",
    },
    {
      tileName: "Hatha",
      content:
        "Hatha is a holistic yoga experience that focuses on posture, breath, and meditation. This class combines flowing and held postures synchronised with the breath to strengthen our body, remove blockages within our energetic system, and release mental tensions.",
      link: "/pricing",
      scrollSpeed: "3",
      img: "../../../imgs/indexClass2.jpg",
    },
    {
      tileName: "Yin Yang",
      content:
        "Yin Yang is a balance of gentle flowing movement to warm up the body and connect to your breath. Followed by cooling it down with some longer held floor based Yin postures. This class will leave you feeling balanced and centred.",
      link: "/pricing",
      scrollSpeed: "1",
      img: "../../../imgs/indexClass3.jpg",
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
  console.log(data)
  return (
    <section className={styles.container}>
      <p className={styles.textContent}>
        Offering a safe space for people to connect, breathe and be. <br />
        <br />
        We’ve created a space that welcomes and empowers our community to focus
        on their wellbeing. A place to belong, a place to be yourself, to
        connect and grow.
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
            images={images}
          />
        ))}
      </div>
    </section>
  )
}

const ClassTile = ({ tileName, content, index, images }) => {
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
      <GatsbyImage
        className={styles.classImage}
        image={images[index]}
        alt={"Yoga pose"}
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
          <a href="/time-table-events#timeTableContainer">
            <ButtonArrow label={"Book class"} isWhite />
          </a>
        </motion.p>
      </div>
    </div>
  )
}
export default IndexClass
