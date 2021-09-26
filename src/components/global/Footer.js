import React from "react"
import * as styles from "../../styles/footer.module.scss"
import NewsLetterSignUp from "./NewsLetterSignUp"
import { motion } from "framer-motion"
import Icon from "../../imgs/man.svg"
import { Link } from "gatsby"
import ButtonArrow from "./ButtonArrow/ButtonArrow"
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logoContainer}>
        <Icon className={styles.logo} />
        <motion.span className={styles.logoText}>EXHALE YOGA</motion.span>
        <span className={styles.desktopCopyText}>
          All rights reserved © Exhale Yoga 2021
        </span>
      </div>
      <div className={styles.contactContainer}>
        <form className={styles.newsLetterSignUp}>
          <h6 className={styles.title}>
            Stay up to date with events{" "}
            <span className={styles.titleAmp}>&#38;</span> offers.
          </h6>
          <div className={styles.inputContainer}>
            <input
              className={styles.emailInput}
              type="email"
              placeholder="e-mail address here"
            />
            <ButtonArrow label={""} isFooter={true} />
          </div>
        </form>
        <nav className={styles.contactDetailsContainer}>
          <div className={styles.internalLinks}>
            <Link route="/">Home</Link>
            <Link route="/timetable">Timetable</Link>
            <Link route="/pricing">Pricing</Link>
            <Link route="/meet-the-team">Meet the team</Link>
            <Link route="/our-space">Our space</Link>
            <Link route="/contact">Contact</Link>
          </div>
          <div className={styles.externalLinks}>
            <a href="#">Mind Body</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
          <div className={styles.contactLinks}>
            <a href="mailto:#">team@exhaleyoga.co.nz</a>
            <a href="tel:0273319027">027 3319 027</a>
          </div>
        </nav>
        <div className={styles.copyContainer}>
          <div className={styles.siteCreators}>
            <span>
              Photographs by{" "}
              <a className={styles.creatorLink} href="#">
                Erin Fleming
              </a>
            </span>
            <span>
              Site by{" "}
              <a className={styles.creatorLink} href="#">
                Will
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
