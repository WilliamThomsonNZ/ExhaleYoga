import React, { useState, useEffect, useRef } from "react"
import Layout from "../components/global/Layout"
import Hero from "../components/index/Hero"
import Intro from "../components/index/intro"
import BelowHero from "../components/index/BelowHero"
import HireSpace from "../components/index/HireSpace"
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion"
import Header from "../components/global/Header"
import ClassSection from "../components/index/classSection"
import Testimonials from "../components/index/Testimonials"
import Footer from "../components/global/Footer"
import ImageSlider from "../components/global/ImageSlider/ImageSlider"
import { graphql } from "gatsby"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import IndexClass from "../components/global/IndexClass/IndexClass"
export default function Home({ data }) {
  const [loading, setLoading] = useState(true)
  //Make a page query to get the images that need to be passed in
  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading")
  }, [loading])
  const containerRef = useRef(null)
  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      containerRef={containerRef}
    >
      <motion.div ref={containerRef} data-scroll-container>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {loading ? (
              <motion.div key="intro">
                <Intro setLoading={setLoading} />
              </motion.div>
            ) : (
              <div data-scroll-section>
                <Layout>
                  <Hero />
                  <IndexClass />
                  <HireSpace />
                  <Testimonials data={data} />
                  <ImageSlider data={data} />
                </Layout>
              </div>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </motion.div>
    </LocomotiveScrollProvider>
  )
}
export const query = graphql`
  query MyQuery {
    allFile(filter: { relativeDirectory: { eq: "heroGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              aspectRatio
            }
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: CONSTRAINED
            )
          }
        }
      }
    }
    allContentfulReview {
      edges {
        node {
          reviewAuthor
          id
          reviewBody {
            reviewBody
          }
        }
      }
    }
  }
`
