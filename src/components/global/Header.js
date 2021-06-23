import { Link } from "gatsby"
import React from "react"
import Menu from "./Menu"
import * as styles from "../../styles/menu.module.scss"
import Icon from "../../imgs/flower.svg"
import useWindowWidth from "../../utils/hooks/useWindowWidth"

const Header = () => {
  const width = useWindowWidth(200)

  return (
    <header>
      <Link to={"/"} className={styles.logo}>
        <Icon className={styles.logoSvg} />
        <span className={styles.logoText}>EXHALE YOGA</span>
      </Link>
      <Link to={"/time-table"} className={styles.viewTimetable}>
        View Timetable
      </Link>
      <Menu />
    </header>
  )
}

export default Header
