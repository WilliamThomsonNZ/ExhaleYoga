import React from "react"
import Layout from "../components/global/Layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../styles/Gallery.module.scss"
import AnimatedLetters from "../components/global/AnimatedLetters"
const Gallery = ({ data }) => {
  const images = data.allContentfulGalleryImages.edges[0].node.galleryImages

  console.log(images[0])
  return (
    <Layout>
      <h1 className={styles.heading}>
        <AnimatedLetters title={"gallery"} />
      </h1>
      <section className={styles.galleryGrid}>
        {images.map(img => (
          <GatsbyImage image={img.gatsbyImageData} />
        ))}
      </section>
    </Layout>
  )
}
export const query = graphql`
  query galleryQuery {
    allContentfulGalleryImages {
      edges {
        node {
          galleryImages {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Gallery
