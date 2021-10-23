import React, { useRef } from "react"
import PageHero from "../components/global/PageHero/PageHero1"
import Layout from "../components/global/Layout"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import * as styles from "../styles/timetable.module.scss"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import ImageSlider from "../components/global/ImageSlider/ImageSlider"
const TimeTable = ({ data }) => {
  const heroContent =
    "Our space is avaliable to hire for functions and workshops."
  const containerRef = useRef(null)
  return (
    <>
      <Helmet>
        <script
          src="https://widgets.mindbodyonline.com/javascripts/healcode.js"
          type="text/javascript"
        ></script>
        <style type="text/css">{`
        .mindbodyContainer #bw-widget__schedules-167916 .bw-widget, .mindbodyContainer .bw-widget__header{
          background:none;
          padding-left:0;
          padding-right:0;
        }
        .mindbodyContainer  #bw-widget__schedules-167916 .bw-widget .bw-header__title{
          font-family: Lora;
          font-size:25px;
          font-weight:500;
        }
        .mindbodyContainer .bw-calendar-container{
          border-top:none;
        }
        .mindbodyContainer .bw-fullcal__field{
            margin-left:0;
            margin-right:0;
        }
        .mindbodyContainer .bw-datepicker{
          border: 1px solid #000;
          border-radius:0;
          background:none;
        }
        .mindbodyContainer .bw-datepicker__input{
          border-left: 1px solid #000;
        }
        .mindbodyContainer .bw-widget__date{
          padding: 8px 0;
          background:none;
          border-top:none !important;
          margin-top:25px;
          font-size: 20px;
          font-family: Lora !important;
          font-weight:500;
          border-bottom: 1px solid #000;
          padding-bottom:15px;
          margin-bottom:8px;
        }
        .mindbodyContainer .bw-session{
          padding: 12px 0;
          border-bottom:none;
          background: none !important;
        }
        .mindbodyContainer .bw-widget__cta{
          color:#000 !important;
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
        <PageHero content={heroContent} container={containerRef.current} />
        <div className={`${styles.widgetContainer} mindbodyContainer`}>
          <healcode-widget
            data-type="schedules"
            data-widget-partner="object"
            data-widget-id="0f167916d080"
            data-widget-version="1"
          ></healcode-widget>
        </div>
        <ImageSlider data={data} />
      </Layout>
    </>
  )
}

export default TimeTable

export const query = graphql`
  query timetableQuery {
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
