import React, { useRef } from "react"
import PageHero from "../components/global/PageHero/PageHero1"
import Layout from "../components/global/Layout"
import * as styles from "../styles/space.module.scss"
import ImageSlider from "../components/global/ImageSlider/ImageSlider"
import { StaticImage } from "gatsby-plugin-image"
import ButtonArrow from "../components/global/ButtonArrow/ButtonArrow"
import { Link } from "gatsby"
const OurTeam = () => {
  const heroContent =
    "Our space is avaliable to hire for functions and workshops."
  const containerRef = useRef(null)
  return (
    <Layout>
      <PageHero content={heroContent} page={"hireSpace"} title={"Our Space"} />
      <div className={styles.pageContainer}>
        <section className={styles.pageContent}>
          <div className={styles.content}>
            <h2 className={styles.title}>Our space is available for hire</h2>
            <p>
              We are a unique multipurpose workshop space in the heart of Naiper
              that you can hire for any and all of your functions, events,
              workshops and classes. We’re a space where you can gather your
              community, share your wisdom, skills and creative passions. A
              space where you and your community can feel at home and use as if
              it were your own. If you have a private event, function, workshop
              or class you’d like to use our space for please get in touch, we’d
              love to chat.
            </p>
            <Link to={"/contact-us"}>
              <ButtonArrow label={"Hire Our Space"} />
            </Link>
          </div>
        </section>
        <section className={styles.detailsContainer}>
          <StaticImage
            src="../imgs/siteImages/hireSpaceContent.jpg"
            alt={"Exhale Yoga Studio"}
          />
          <div className={styles.content}>
            <h2 className={styles.title}>Our space:</h2>
            <ul className={styles.list}>
              <li>
                Polished concrete floors, natural light beaming in, greenery and
                earthy tones.
              </li>
              <li>Clean white walls, perfect for photoshoots.</li>
              <li>Standing, table setting or yoga floor set up.</li>
              <li>No wheelchair access</li>
            </ul>
            <p className={styles.contactInfo}>
              For all hire enquiries and price lists please email us directly.{" "}
            </p>
            <Link to={"/contact-us"}>
              <ButtonArrow label={"Get in touch"} isWhite />
            </Link>
          </div>
        </section>
      </div>
      <ImageSlider />
    </Layout>
  )
}

export default OurTeam
