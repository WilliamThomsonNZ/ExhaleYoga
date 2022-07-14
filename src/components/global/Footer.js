import React, { useEffect, useState } from "react"
import * as styles from "../../styles/footer.module.scss"
import NewsLetterSignUp from "./NewsLetterSignUp"
import { motion } from "framer-motion"
import Icon from "../../imgs/man.svg"
import { Link } from "gatsby"
import ButtonArrow from "./ButtonArrow/ButtonArrow"
import { StaticImage } from "gatsby-plugin-image"
const Footer = () => {
  const [emailAddress, setEmailAddress] = useState("")
  const [emailSignUpLoading, setEmailSignUpLoading] = useState(false)

  const mailchimpSignUp = async () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress))
      return
    setEmailSignUpLoading(true)
    setEmailAddress("Loading...")
    const url = `https://exhale-api.vercel.app/api/email?email=${emailAddress}`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await response.json()
    console.log(json)
    if (json.code === 200) {
      setEmailAddress("Email address added")
    } else {
      setEmailAddress("Error adding email address")
    }
    setTimeout(() => {
      setEmailAddress("")
      setEmailSignUpLoading(false)
    }, 4000)
  }

  useEffect(() => {}, [])

  return (
    <footer className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <Link to={"/"} className={styles.logo}>
            <StaticImage
              src="../../imgs/exhale_curve_logo.png"
              alt={"Exhale Yoga Studio"}
              class={styles.logo}
            />
          </Link>
          <span className={styles.desktopCopyText}>
            All rights reserved © Exhale Yoga 2022
          </span>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.newsLetterSignUp}>
            <h6 className={styles.title}>
              Stay up to date with events{" "}
              <span className={styles.titleAmp}>&#38;</span> offers.
            </h6>
            <div className={styles.inputContainer}></div>
            <input
              className={styles.emailInput}
              type="email"
              placeholder="e-mail address here"
              value={emailAddress}
              disabled={emailSignUpLoading}
              onChange={e => setEmailAddress(e.target.value)}
            />
            <div className={styles.signUpButtonContainer}>
              <ButtonArrow
                label={""}
                isFooter={true}
                isWhite
                cb={mailchimpSignUp}
                loading={emailSignUpLoading}
              />
            </div>
          </div>
          <nav className={styles.contactDetailsContainer}>
            <div className={styles.internalLinks}>
              <Link to="/">Home</Link>
              <Link to="/our-space">Hire our space</Link>
              <a href="/time-table-events">Timetable &amp; Events</a>
              <Link to="/pricing">Pricing</Link>
              <Link to="/our-team">Team</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact-us">Contact</Link>
            </div>
            <div className={styles.externalLinks}>
              <a
                href="https://cart.mindbodyonline.com/sites/7709/session/new"
                target="_blank"
                rel="noreferrer"
              >
                Mind Body
              </a>
              <a
                href="https://www.instagram.com/yinyoganapier/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/YinYogaNapier"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a href="mailto:studio@exhaleyoga.co.nz">
                studio@exhaleyoga.co.nz
              </a>
            </div>
          </nav>
          <div className={styles.copyContainer}>
            <div className={styles.siteCreators}>
              <span>
                Site &amp; Photography by{" "}
                <a
                  className={styles.creatorLink}
                  href="https://basik.co.nz"
                  target="_blank"
                  rel="noreferrer"
                >
                  basik
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
