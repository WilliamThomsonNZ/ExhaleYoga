import React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/index.module.scss"
const BookClass = () => {
  //hover >> circle goes to full width >> changes t color >> text changes to white
  return (
    <Link to={"/"} className={styles.bookClassContainer}>
      <h2 className={styles.bookClassBtn}>Book Class</h2>
    </Link>
  )
}

export default BookClass
