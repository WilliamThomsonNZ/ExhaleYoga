import React, { useState, useRef, useEffect } from "react"
import * as styles from "../../styles/layout.module.scss"
import Header from "./Header"
import Footer from "./Footer"
import { AnimatePresence, motion } from "framer-motion"
import Menu from "../global/Menu"
import { Helmet } from "react-helmet"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
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
        duration: 5,
      },
    },
  }
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuToggle = e => {
    setMenuOpen(menuOpen => !menuOpen)
  }
  const containerRef = useRef(null)
  return (
    <>
      <LocomotiveScrollProvider
        options={{ smooth: true }}
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef}>
          <div data-scroll-section>
            {/* <Helmet>
        <html className={menuOpen ? styles.hideScroll : undefined} />
      </Helmet> */}

            <AnimatePresence>
              {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
            </AnimatePresence>

            <AnimatePresence>
              <Header handleMenuToggle={handleMenuToggle} menuOpen={menuOpen} />
              {children}
              <Footer />
            </AnimatePresence>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </>
  )
}

export default Layout
