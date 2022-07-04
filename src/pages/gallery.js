import React from "react"
import Layout from "../components/global/Layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../styles/Gallery.module.scss"
import AnimatedLetters from "../components/global/AnimatedLetters"
const Gallery = ({ data }) => {
  const images = data.allFile.edges
  return (
    <Layout>
      <h1 className={styles.heading}>
        <AnimatedLetters title={"gallery"} />
      </h1>
      <section className={styles.galleryGrid}>
        {images.map(node => (
          <div className={styles.cardContainer}>
            <GatsbyImage image={node.node.childImageSharp.gatsbyImageData} />
          </div>
        ))}
      </section>
    </Layout>
  )
}
export const query = graphql`
  query galleryQuery {
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
  }
`

export default Gallery
