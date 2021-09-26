import React, { useRef } from "react"
import PageHero from "../components/global/PageHero/PageHero1"
import Layout from "../components/global/Layout"
import * as styles from "../styles/team.module.scss"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import EventSlider from "../components/global/EventSlider/EventSlider"
import { graphql } from "gatsby"

const Events = ({ data }) => {
  const heroContent =
    "Our space is avaliable to hire for functions and workshops."
  const containerRef = useRef(null)
  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <div data-scroll-section>
          <Layout>
            <PageHero content={heroContent} container={containerRef.current} />
            <section className={styles.teamMissionStatement}>
              <p className={styles.content}>
                We are a spirited and dynamic yoga community, your financial
                commitment to YinYoga Napier supports us to widen and reach. The
                studio is influenced by the natural beauty of New Zealand.
              </p>
            </section>

            <EventSlider data={data} />
            {/* <section className={styles.imagesContainer}>
                <StaticImage src="../imgs/class2.jpg" alt="class" />
              </section> */}
          </Layout>
        </div>
      </div>
    </LocomotiveScrollProvider>
  )
}
export const query = graphql`
  query eventInfo {
    allContentfulEvent {
      nodes {
        eventName
        eventImage {
          gatsbyImageData
        }
        eventDescription {
          eventDescription
        }
      }
    }
  }
`

export default Events
