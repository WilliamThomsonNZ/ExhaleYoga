import React, { useRef, useEffect, useLayoutEffect } from "react"
import * as styles from "../../styles/layout.module.scss"
import Header from "./Header"
import Footer from "./Footer"
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  return (
    <motion.div>
      <Header />
      {children}
      <Footer />
    </motion.div>
  )
}

export default Layout
