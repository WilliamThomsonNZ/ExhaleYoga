import React from "react"
import * as styles from "../../styles/hireSpace.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import ButtonArrow from "../global/ButtonArrow/ButtonArrow"
const HireSpace = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <StaticImage
          src="../../imgs/3.jpg"
          alt="Exhale yoga studio"
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textInnerContainer}>
          <h2 className={styles.title}>
            Our space is avaliable to hire for functions and workshops.
          </h2>
          <p className={styles.textContent}>
            Located in the very heart of Sanur you will find our Spa and Yoga
            Shala nestled down a banana palm-lined avenue. Once you enter the
            gate you will feel the peaceful vibration. Fluid, continuous and
            flowing with breath. Located in the very heart of Sanur you will
            find our Spa and Yoga Shala nestled down a banana palm-lined avenue.
          </p>
          <ButtonArrow label={"More information"} />
        </div>
      </div>
    </div>
  )
}

export default HireSpace
