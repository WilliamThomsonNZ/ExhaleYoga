import React, { useRef } from "react"
import PageHero from "../components/global/PageHero/PageHero1"
import Layout from "../components/global/Layout"
import * as styles from "../styles/team.module.scss"
import TeamSlider from "../components/global/TeamSlider/TeamSlider"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/global/Footer"
const OurTeam = () => {
  const heroContent =
    "Our space is avaliable to hire for functions and workshops."
  const containerRef = useRef(null)
  return (
    <Layout>
      <PageHero content={heroContent} container={containerRef.current} />
      <section className={styles.teamMissionStatement}>
        <p className={styles.content}>
          We are a spirited and dynamic yoga community, your financial
          commitment to 1YinYoga Napier supports us to widen and reach. The
          studio is influenced by the natural beauty of New Zealand.
        </p>
      </section>
      <TeamSlider />
    </Layout>
  )
}

export default OurTeam
