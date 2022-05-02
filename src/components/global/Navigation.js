import React, { useState } from "react"
import { motion } from "framer-motion"
import MenuItem from "./MenuItem"
import * as styles from "../../styles/menu.module.scss"
const Navigation = ({ setMenuOpen }) => {
  const menuItems = [
    { name: "Hire Our Space", route: "/our-space" },
    { name: "Timetable & Events", route: "/time-table-events" },
    { name: "Pricing", route: "/pricing" },
    { name: "Team", route: "/our-team" },
    { name: "Gallery", route: "/gallery" },
    { name: "Contact", route: "/contact-us" },
  ]
  const [hoverIndex, setHoverIndex] = useState(-1)

  const handleMouseEnter = (e, index) => {
    setHoverIndex(index)
  }

  const handleMouseLeave = e => {
    setHoverIndex(-1)
  }

  const menuList = {
    open: {
      transition: {
        delayChildren: 0.5,
      },
    },
    closed: {
      transition: {
        delayChildren: 0.5,
      },
    },
  }
  return (
    <nav className={styles.navOuterContainer}>
      <motion.ul className={styles.navContainer}>
        {menuItems.map((item, index) => (
          <MenuItem
            route={item.route}
            name={item.name}
            index={index + 1}
            key={index}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            setMenuOpen={setMenuOpen}
            hoverIndex={hoverIndex}
          />
        ))}
      </motion.ul>
    </nav>
  )
}

export default Navigation
