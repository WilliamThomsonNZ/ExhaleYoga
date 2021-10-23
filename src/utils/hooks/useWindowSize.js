import { useState, useEffect } from "react"
import { globalHistory } from "@reach/router"

export default function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowSize(getSize())
  //   }
  //   return globalHistory.listen(({ action }) => {
  //     if (action === "PUSH") {
  //       handleResize()
  //       console.log("running")
  //     }
  //   })
  // }, [])

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
