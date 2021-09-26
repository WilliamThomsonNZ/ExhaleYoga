import "./src/styles/global.scss"
import "@fontsource/lato"

import React from "react"
import { AnimatePresence } from "framer-motion"
export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
)
