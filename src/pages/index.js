import React, { useState, useEffect, useRef } from "react"
import Layout from "../components/global/Layout"
import Hero from "../components/index/Hero"
import HireSpace from "../components/index/HireSpace"
import Testimonials from "../components/index/Testimonials"
import ImageSlider from "../components/global/ImageSlider/ImageSlider"

import { graphql } from "gatsby"
import IndexClass from "../components/global/IndexClass/IndexClass"
import { Helmet } from "react-helmet"

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
      <Helmet>
        <title>Exhale Yoga &amp; Workshops</title>
        <meta
          name="description"
          content="We are an urban sanctuary in the heart of Napier that puts you
                and your wellbeing first. We offer yoga classes, workshops and
                space hire. We are your space to breathe."
        />
        <link rel="icon" href="../imgs/emblem.png" />
      </Helmet>
      <Hero />
      <IndexClass data={data} />
      <Testimonials data={data} />
      <HireSpace />
      <ImageSlider data={data} />
    </Layout>
  )
}
export const query = graphql`
  query MyQuery {
    gallery: allFile(filter: { relativeDirectory: { eq: "heroGallery" } }) {
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
    class: allFile(filter: { relativeDirectory: { eq: "classPhotos" } }) {
      edges {
        node {
          name
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
