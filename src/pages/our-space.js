import React from "react"

import Layout from "../components/global/Layout"
import * as styles from "../styles/space.module.scss"
import ImageSlider from "../components/global/ImageSlider/ImageSlider"
import { StaticImage } from "gatsby-plugin-image"
import ButtonArrow from "../components/global/ButtonArrow/ButtonArrow"
import { Link } from "gatsby"
import * as heroStyling from "../components/global/PageHero/pageHero.module.scss"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
const OurTeam = () => {
  const heroTextBanner = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  }
  return (
    <Layout>
      <Helmet>
        <title>Exhale - Our Space</title>
        <meta
          name="description"
          content="We are an urban sanctuary in the heart of Napier that puts you
                and your wellbeing first. We offer yoga classes, workshops and
                space hire. We are your space to breathe."
        />
        <link rel="icon" href="../imgs/emblem.png" />
      </Helmet>
      <div className={heroStyling.pageHeroContainer}>
        <div className={heroStyling.contentContainer}>
          <div classsName={heroStyling.desktopBanner}>
            <motion.span
              className={heroStyling.title}
              variants={heroTextBanner}
              initial={"initial"}
              animate={"animate"}
            >
              Our Space
            </motion.span>
          </div>
        </div>
        <div className={heroStyling.heroImageContainer}>
          <StaticImage
            src="../imgs/heroImages/hireSpace/main.jpg"
            alt="Exhale yoga studio"
            className={heroStyling.mainImage}
            placeholder={"blurred"}
          />
        </div>
        <StaticImage
          src="../imgs/heroImages/hireSpace/sub.jpg"
          alt="Exhale yoga studio"
          className={heroStyling.subImage}
        />
      </div>
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
