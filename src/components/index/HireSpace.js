import React from "react"
import * as styles from "../../styles/hireSpace.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import ButtonArrow from "../global/ButtonArrow/ButtonArrow"
import { Link } from "gatsby"
const HireSpace = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <StaticImage
          src="../../imgs/siteImages/hirespace.jpg"
          alt="Exhale yoga studio"
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textInnerContainer}>
          <h2 className={styles.title}>
            Our space is available to hire for workshops and events.
          </h2>
          <p className={styles.textContent}>
            We are a multipurpose space in the heart of Naiper that you can hire
            to use as your own. A space where you can gather your community,
            share your wisdom, skills and creative passions. If you’d like to
            use our space please get in touch, we’d love to chat.
          </p>
          <Link to={"/our-space"}>
            <ButtonArrow label={"More information"} isWhite={true} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HireSpace
