import React, { useRef } from "react"
import PageHero from "../components/global/PageHero/PageHero1"
import Layout from "../components/global/Layout"
import * as styles from "../styles/timetable.module.scss"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import ImageSlider from "../components/global/ImageSlider/ImageSlider"
import { motion } from "framer-motion"
import EventSlider from "../components/global/EventSlider/EventSlider"
import Emblem from "../components/global/Emblem"
import { StaticImage } from "gatsby-plugin-image"
import * as heroStyling from "../components/global/PageHero/pageHero.module.scss"
const TimeTable = ({ data }) => {
  const heroContent =
    "Our space is avaliable to hire for functions and workshops."
  const containerRef = useRef(null)
  const svgVariants = {
    animate: {
      rotate: 360,
      transition: {
        ease: "linear",
        duration: 20,
        repeat: Infinity,
      },
    },
  }
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
    <>
      <Helmet>
        <script
          src="https://widgets.mindbodyonline.com/javascripts/healcode.js"
          type="text/javascript"
          async
        ></script>
        <script
          type="text/javascript"
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        ></script>
        <style type="text/css">{`
        .mindbodyContainer #bw-widget__schedules-167916 .bw-widget, .mindbodyContainer .bw-widget__header{
          background:none;
          padding-left:0;
          padding-right:0;
        }
        .mindbodyContainer  #bw-widget__schedules-167916 .bw-widget .bw-header__title{
          font-family: alia;
          font-size:32px;
          font-weight:500;
          color: #a98d6e;
        }
        .mindbodyContainer .bw-calendar-container{
          border-top:none;
        }
        .mindbodyContainer .bw-fullcal__field{
            margin-left:0;
            margin-right:0;
        }
        .mindbodyContainer .bw-datepicker{
          border: 1px solid #a98d6e;
          border-radius:0;
          color: #a98d6e;
          background:none;
        }
        .mindbodyContainer .bw-datepicker__input{
          border-left: 1px solid #a98d6e;
          color: #a98d6e;
        }

        .mindbodyContainer .bw-widget__date{
          padding: 8px 0;
          background:none;
          border-top:none !important;
          margin-top:25px;
          font-size: 20px;
          font-family: Arimo !important;
          font-weight:500;
          border-bottom: 1px solid #a98d6e;
          padding-bottom:15px;
          margin-bottom:8px;
          color: #a98d6e;
        }
        
        .mindbodyContainer .bw-session__description{
          color: #a98d6e !important;
        }
        .mindbodyContainer .bw-session__info .bw-session__staff{
          color: #a98d6e !important;
        }
        .mindbodyContainer .bw-session__info .bw-session__expanded,  .mindbodyContainer .bw-session__expanded .bw-session__description , .mindbodyContainer .bw-session__expanded .bw-session__full-title {
          color: #a98d6e !important;
        }
        .mindbodyContainer .bw-session__expanded .bw-session__bio, .mindbodyContainer .bw-session__expanded .bw-session__instructor-name{
          color: #a98d6e !important;
        }
        .mindbodyContainer .bw-session{
          padding: 12px 0;
          border-bottom:none;
          background: none !important;
          color: #a98d6e !important;
        }
         .mindbodyContainer .bw-header__account-link{
          color: #a98d6e !important;
         }
         .mindbodyContainer .bw-datepicker__button path{
           color:#a98d6e !important;
         }
         .bw-header__filter-link g {
           color: #a98d6e !important;
         }
        .mindbodyContainer .bw-session__info .bw-session__time{
          color: #a98d6e !important;
        }
        .mindbodyContainer .bw-session__info .bw-session__detail-link{
          color: #a98d6e !important;
        }
        .mindbodyContainer .bw-session__info .bw-session__name{
          color: #a98d6e !important;
        }
        .mindbodyContainer .bw-widget__cta{
          color:#a98d6e !important;
          font-size: 15px !important;
          text-transform: capitalize !important;
        }
        .mindbodyContainer .bw-widget__footer .bw-mb-powered-by-logo{
          display:none;
        }
        @media(min-width:1429px){
          .mindbodyContainer .bw-widget--large.bw-widget--spacious .bw-session{
              padding: 25px 0;
          }
          .mindbodyContainer  #bw-widget__schedules-167916 .bw-widget .bw-header__title{
            font-family: alia;
            font-size:64px;
            margin-bottom: 
          }
          .mindbodyContainer .bw-widget__date {
            font-size:28px;
            margin-top:50px;
            padding-bottom:25px;
          }
          .mindbodyContainer .bw-widget__cta{
            font-size: 18px !important;
          }
        }


    `}</style>
      </Helmet>
      <Layout>
        {/* <PageHero
          content={heroContent}
          page={"timetable"}
          title={"Yoga & Workshops"}
        /> */}
        <div className={heroStyling.pageHeroContainer}>
          <div className={heroStyling.contentContainer}>
            <div classsName={heroStyling.desktopBanner}>
              <motion.span
                className={heroStyling.title}
                variants={heroTextBanner}
                initial={"initial"}
                animate={"animate"}
              >
                Yoga &amp; Workshops
              </motion.span>
            </div>
          </div>
          <div className={heroStyling.heroImageContainer}>
            <StaticImage
              src="../imgs/heroImages/timetable/main.jpg"
              alt="Exhale yoga studio"
              className={heroStyling.mainImage}
              placeholder={"blurred"}
            />
          </div>
          <StaticImage
            src="../imgs/heroImages/timetable/sub.jpg"
            alt="Exhale yoga studio"
            className={heroStyling.subImage}
          />
        </div>
        <div
          className={`${styles.widgetContainer} mindbodyContainer`}
          id={"timeTableContainer"}
        >
          <healcode-widget
            data-type="schedules"
            data-widget-partner="object"
            data-widget-id="0f167916d080"
            data-widget-version="1"
          ></healcode-widget>
        </div>
        <section className={styles.teamMissionStatement}>
          {/* <p className={styles.content}>
            We are a spirited and dynamic yoga community, your financial
            commitment to YinYoga Napier supports us to widen and reach. The
            studio is influenced by the natural beauty of New Zealand.
          </p> */}
          <Emblem label={"View our latest events below"} isWhite />
        </section>
        <EventSlider data={data} />
        <ImageSlider />
      </Layout>
    </>
  )
}

export default TimeTable

export const query = graphql`
  query timetableQuery {
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
    timetable: allFile(
      filter: { relativeDirectory: { eq: "heroImages/timetable" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
