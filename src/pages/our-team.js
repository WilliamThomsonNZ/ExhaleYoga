import React, { useRef } from "react"
import PageHero from "../components/global/PageHero/PageHero1"
import Layout from "../components/global/Layout"
import * as styles from "../styles/team.module.scss"
import TeamSlider from "../components/global/TeamSlider/TeamSlider"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/global/Footer"
import Emblem from "../components/global/Emblem"
import { graphql } from "gatsby"
const OurTeam = ({ data }) => {
  const heroContent =
    "Our space is avaliable to hire for functions and workshops."
  const containerRef = useRef(null)
  console.log(data)
  const newData = data.allFile.edges
  console.log(newData)
  newData.reverse()
  return (
    <Layout>
      <PageHero content={heroContent} page={"team"} title={"Our Teachers"} />
      <section className={styles.teamMissionStatement}>
        <Emblem label={"View our team members below"} />
      </section>
      <TeamSlider data={newData} />
    </Layout>
  )
}
export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "teamPortraits" } }) {
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
  }
`

export default OurTeam
