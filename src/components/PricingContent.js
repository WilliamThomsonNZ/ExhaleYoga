import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import * as styles from "../styles/pricing.module.scss"
import useWindowWidth from "../utils/hooks/useWindowWidth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import ButtonArrow from "./global/ButtonArrow/ButtonArrow"
import { Link } from "gatsby"
const PricingContent = () => {
  const width = useWindowWidth(200)
  return (
    <>
      <section className={styles.introOfferContainer} id={"introOffer"}>
        <div className={styles.introContent}>
          <h6 className={styles.pricingTitle}>
            Introductory offer for new visitors
          </h6>
          <p className={styles.introCopy}>
            Come experience a space where you can connect, breathe and be for
            the next 14 days. For first-time yoga students our introduction to
            exhale yoga is only $30 for 2 weeks of unlimited yoga. To sign up,
            create an account in Mindbody, book your first class and select the
            intro offer or come into the studio to sign up.
          </p>
          <a href={"time-table-events/"}>
            <ButtonArrow label={"Book now"} isWhite />
          </a>
        </div>
        <StaticImage
          src="../imgs/siteImages/introOffer.jpg"
          alt={"Exhale Yoga Studio"}
          placeholder={"blurred"}
          // className={styles.pricingImage}
        />
      </section>
      <section className={styles.membershipContainer}>
        <h6 className={styles.pricingTitle}>Join our community</h6>
        <div className={styles.membershipsWrapper}>
          <div className={styles.membership}>
            <h6 className={styles.membershipTitle}>One month membership:</h6>
            <p className={styles.membershipCopy}>
              Unlimited yoga classes for $165 one-off payment. To purchase,
              create an account, book your first class and select the one month
              membership or come into the studio to purchase.
            </p>
            <a href={"time-table-events/"}>
              <ButtonArrow label={"Book now"} />
            </a>
          </div>
          <div className={styles.membership}>
            <h6 className={styles.membershipTitle}>Three month membership:</h6>
            <p className={styles.membershipCopy}>
              Unlimited yoga classes for $420 one-off payment. To purchase,
              create an account, book your first class and select the three
              month membership or come into the studio to purchase.
            </p>
            <a href={"time-table-events/"}>
              <ButtonArrow label={"Book now"} />
            </a>
          </div>
        </div>
      </section>
      <section className={styles.pricingTableContainer}>
        <StaticImage
          src="../imgs/siteImages/pricingTable.jpg"
          alt={"Exhale Yoga Studio"}
        />
        <div className={styles.tableContent}>
          <h6 className={styles.pricingTitle}>Pricing</h6>
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
          <a href={"time-table-events/"}>
            <ButtonArrow label={"Book now"} isWhite />
          </a>
        </div>
      </section>
    </>
  )
}

export default PricingContent
