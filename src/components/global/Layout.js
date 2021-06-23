import React from "react"
import * as styles from "../../styles/layout.module.scss"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
