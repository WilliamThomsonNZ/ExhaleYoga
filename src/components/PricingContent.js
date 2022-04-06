import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import * as styles from "../styles/pricing.module.scss"
import useWindowWidth from "../utils/hooks/useWindowWidth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import ButtonArrow from "./global/ButtonArrow/ButtonArrow"

const PricingContent = () => {
  const width = useWindowWidth(200)
  return (
    <>
      <section className={styles.introOfferContainer}>
        <div className={styles.introContent}>
          <h6 className={styles.pricingTitle}>
            Introductory offer for new visitors.
          </h6>
          <p className={styles.introCopy}>
            The studio is influenced by the natural beauty of New Zealand. We
            encourage you to bring your practice to the great outdoors close to
            Hobsonville and West Auckland: Catalina Bay, around the Auckland
            harbour, Waitakere Ranges, or the stunning West Coast beaches.
          </p>
          <ButtonArrow label={"Book now"} isWhite />
        </div>
        <StaticImage
          src="../imgs/1.jpg"
          alt={"Exhale Yoga Studio"}
          className={styles.pricingImage}
          data-scroll
          data-scroll-speed="2"
        />
      </section>
      <section className={styles.membershipContainer}>
        <h6 className={styles.pricingTitle}>
          We are a spirited and dynamic yoga community, your financial
          commitment to YinYoga Napier supports us to widen and reach.
          {width > 1150 &&
            " The studio is influenced by the natural beauty of New Zealand."}
        </h6>
        <div className={styles.membershipsWrapper}>
          <div className={styles.membership}>
            <h6 className={styles.membershipTitle}>
              Three Month Unlimited Membership
            </h6>
            <p className={styles.membershipCopy}>
              The studio is influenced by the natural beauty of New Zealand. We
              encourage you to bring your practice to the great outdoors close
              to Hobsonville and West Auckland
            </p>
            <ButtonArrow label={"Book now"} />
          </div>
          <div className={styles.membership}>
            <h6 className={styles.membershipTitle}>
              One Month Unlimited Membership
            </h6>
            <p className={styles.membershipCopy}>
              The studio is influenced by the natural beauty of New Zealand. We
              encourage you to bring your practice to the great outdoors close
              to Hobsonville and West Auckland
            </p>
            <ButtonArrow label={"Book now"} />
          </div>
        </div>
      </section>
      <section className={styles.pricingTableContainer}>
        <StaticImage
          src="../imgs/subPageSubHero.jpg"
          alt={"Exhale Yoga Studio"}
          className={styles.pricingTableImage}
          data-scroll
          data-scroll-speed="2"
        />
        <div className={styles.tableContent}>
          <h6 className={styles.pricingTitle}>
            Pricing table for new and existing vistors.
          </h6>
          <ul className={styles.priceList}>
            <li className={styles.title}>Class passes</li>
            <li>
              <span>5 Sessions</span>
              <span>$70.00</span>
            </li>
            <li>
              <span>10 Sessions</span>
              <span>$135.00</span>
            </li>
            <li className={styles.title}>Drop in classes</li>
            <li>
              <span>Casual</span>
              <span>$15.00</span>
            </li>
            <li>
              <span>Student ( with student ID )</span>
              <span>$10.00</span>
            </li>
          </ul>
          <ButtonArrow label={"Book now"} isWhite />
        </div>
      </section>
    </>
  )
}

export default PricingContent
