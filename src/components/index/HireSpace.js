import React from "react"
import * as styles from "../../styles/hireSpace.module.scss"
import { StaticImage } from "gatsby-plugin-image"
const HireSpace = () => {
  return (
    <div className={styles.container} data-scroll-section>
      <div className={styles.imageContainer}>
        <StaticImage
          src="../../imgs/hireSpace.jpg"
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
            flowing with breath. The Vinyasa flow deepens and stokes your inner
            fire, strengthens the body and expands your inner self with knowing
            and clarity
          </p>
          <button className={styles.moreInfo}>
            More Information <span className={styles.arrow}>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HireSpace
