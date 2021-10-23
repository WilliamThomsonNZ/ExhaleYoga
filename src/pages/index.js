import React, { useState, useEffect, useRef } from "react"
import Layout from "../components/global/Layout"
import Hero from "../components/index/Hero"
import HireSpace from "../components/index/HireSpace"
import Testimonials from "../components/index/Testimonials"
import ImageSlider from "../components/global/ImageSlider/ImageSlider"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { graphql } from "gatsby"
import IndexClass from "../components/global/IndexClass/IndexClass"
export default function Home({ data }) {
  const [loading, setLoading] = useState(false)
  //Make a page query to get the images that need to be passed in
  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading")
  }, [loading])
  const containerRef = useRef(null)
  return (
    <Layout>
      <Hero />
      <IndexClass />
      <HireSpace />
      <Testimonials data={data} />
      <ImageSlider data={data} />
    </Layout>
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
