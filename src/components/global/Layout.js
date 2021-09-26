import React, { useRef, useEffect, useLayoutEffect } from "react"
import * as styles from "../../styles/layout.module.scss"
import Header from "./Header"
import Footer from "./Footer"
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  const variants = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
  return (
    <motion.div
      const
      variants={variants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  )
}

export default Layout
