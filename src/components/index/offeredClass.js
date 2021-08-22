import { motion } from "framer-motion"
import React from "react"
import * as styles from "../../styles/classSection.module.scss"

const offeredClass = ({
  handleMouseEnter,
  handleMouseLeave,
  type,
  currentIndex,
}) => {
  let isHovering =
    currentIndex == type.id ? styles.isHovering : styles.isNotHovering

  if (currentIndex === -1) {
    isHovering = styles.originalMenuItem
  }
  return (
    <motion.li
      className={`${styles.offeredClass} ${isHovering}`}
      key={type.id}
      id={type.id}
      onMouseEnter={e => handleMouseEnter(e)}
      onMouseLeave={e => handleMouseLeave(e)}
      onClick={e => handleMouseEnter(e)}
    >
      <span className={styles.offeredClassIndex}>0{type.id + 1}.</span>
      {type.title}
    </motion.li>
  )
}

export default offeredClass
