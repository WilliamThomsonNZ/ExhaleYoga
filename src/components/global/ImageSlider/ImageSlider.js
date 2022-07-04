import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useEffect, useRef, useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import * as styles from "./ImageSlider.module.scss"
import { motion, useAnimation } from "framer-motion"
import useWindowWidth from "../../../utils/hooks/useWindowWidth"

const ImageSlider = ({ data }) => {
  const controls = useAnimation()
  const [isHovering, setIsHovering] = useState(false)
  const slider = useRef(null)
  let windowWidth = useWindowWidth(200)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [animationProgress, setAnimationPrgogress] = useState(0)
  useEffect(() => {
    setSliderWidth(slider.current.offsetWidth)
  }, [windowWidth])

  useEffect(() => {
    setSliderWidth(slider.current.offsetWidth)
    controls.start("animate")
  }, [slider.current])
  //slider Animation
  const imageGallery = {
    initial: {
      x: 0,
    },
    animate: {
      x: `-${sliderWidth - sliderWidth / 4}px`,
      transition: {
        repeat: Infinity,
        duration: 500,
        ease: ["linear"],
      },
    },
  }
  const imageHover = {
    stopHover: {
      scale: 1,
      transition: {
        duration: 2,
        ease: [0.405, 0, 0.025, 1],
      },
    },
    startHover: {
      scale: 1.1,
      transition: {
        duration: 2,
        ease: [0.405, 0, 0.025, 1],
      },
    },
  }
  const images = data.allFile.edges.map((node, index) => {
    const imageWidth = node.node.childImageSharp.gatsbyImageData.width
    const imageHeight = node.node.childImageSharp.gatsbyImageData.height
    return (
      <div className={styles.imageOuter}>
        <motion.div
          variants={imageHover}
          animate={isHovering ? "startHover" : "stopHover"}
          onHoverStart={e => setIsHovering(true)}
          onHoverEnd={e => setIsHovering(false)}
        >
          <GatsbyImage
            image={node.node.childImageSharp.gatsbyImageData}
            alt={"Gallery image"}
            key={index}
            className={
              imageWidth > imageHeight
                ? styles.imageLandscape
                : styles.imagePortrait
            }
          />
        </motion.div>
      </div>
    )
  })
  const handleUpdate = latest => {}
  return (
    <section className={styles.scrollWrapper}>
      <div className={styles.scrollInnerWrapper}>
        <motion.div
          className={styles.imageContainer}
          variants={imageGallery}
          animate={controls}
          initial="initial"
          ref={slider}
        >
          {images}
          {images}
          {images}
          {images}
        </motion.div>
      </div>
    </section>
  )
}

export default function ImageSliderGallery(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { relativeDirectory: { eq: "heroGallery" } }) {
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
      render={data => <ImageSlider data={data} />}
    />
  )
}
