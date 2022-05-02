import React from "react"
import * as styles from "./Emblem.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const Emblem = ({ isWhite, label }) => {
  return (
    <div
      className={`${styles.container} ${
        isWhite ? styles.whiteContainer : undefined
      }`}
    >
      {isWhite ? (
        <StaticImage
          src="../../../imgs/emblemWhite.png"
          alt={"Exhale Yoga Emblem"}
          className={styles.image}
        />
      ) : (
        <StaticImage
          src="../../../imgs/emblem.png"
          alt={"Exhale Yoga Emblem"}
          className={styles.image}
        />
      )}

      <h6 className={styles.label}>{label}</h6>
      <h6 className={styles.information}>Hover or tap for more info</h6>
    </div>
  )
}

export default Emblem
