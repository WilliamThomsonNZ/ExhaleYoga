import React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/menu.module.scss"
import { motion } from "framer-motion"
const MenuItem = ({
  name,
  route,
  index,
  handleMouseEnter,
  handleMouseLeave,
  hoverIndex,
  setMenuOpen,
}) => {
  let isHovering =
    hoverIndex === index ? styles.isHovering : styles.isNotHovering

  if (hoverIndex === -1) {
    isHovering = styles.originalMenuItem
  }
  const menuItem = {
    open: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.41, 0, 0.13, 1.005],
      },
    },
    closed: {
      y: "200%",
      rotate: 7,
      transition: {
        duration: 1,
        ease: [0.41, 0, 0.13, 1.005],
      },
    },
  }

  return (
    <motion.li
      className={`${styles.menuItem} ${isHovering}`}
      onMouseEnter={e => handleMouseEnter(e, index)}
      onMouseLeave={e => handleMouseLeave(e)}
    >
      <motion.div variants={menuItem} className={styles.menuItemContent}>
        <Link
          to={route}
          className={styles.menuLink}
          onClick={() => setMenuOpen(false)}
        >
          <span className={styles.menuItemIndex}>0{index}.</span>
          <span className={styles.menuTitle}>{name}</span>
        </Link>
      </motion.div>
    </motion.li>
  )
}

export default MenuItem
