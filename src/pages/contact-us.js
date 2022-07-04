import React, { useState } from "react"
import Layout from "../components/global/Layout"
import AnimatedLetters from "../components/global/AnimatedLetters"
import * as styles from "../styles/contact.module.scss"
import ButtonArrow from "../components/global/ButtonArrow/ButtonArrow"
import { StaticImage } from "gatsby-plugin-image"
const Contact = ({ data }) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitButtonText, setSubmitButtonText] = useState("Submit")
  async function sendContactMessage() {
    setLoading(true)
    const body = JSON.stringify({ name, message, email })
    const url = "https://exhale-api.vercel.app/api/contact"

    try {
      const response = await fetch(url, {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      })
      const json = await response.json()
      setSubmitButtonText("Message sent!")
    } catch (err) {
      setSubmitButtonText("Error Occured")
    }
    setTimeout(() => {
      setSubmitButtonText("Submit")
      setLoading(false)
    }, 4000)
  }
  return (
    <Layout>
      <main className={styles.container}>
        <section className={styles.contactContainer}>
          <h1 className={styles.heading}>
            <AnimatedLetters title={"Contact"} />
          </h1>
          <p className={styles.address}>
            35 Hastings Street, Napier South, Napier 4110 New Zealand
          </p>

          <a href={"#"} className={styles.contactLinks}>
            hello@exhaleyoga.co.nz
          </a>
          <div className={styles.socialsContainer}>
            <a className={styles.socialLink} href={"#"}>
              Facebook
            </a>
            <a className={styles.socialLink} href={"#"}>
              Instagram
            </a>
            <a className={styles.socialLink} href={"#"}>
              Mind Body
            </a>
          </div>
        </section>
        <div className={styles.contactForm}>
          <div className={styles.formInnerContainer}>
            <input
              type="text"
              className={styles.formField}
              placeholder={"NAME*"}
              required
              value={name}
              disabled={loading}
              onChange={e => setName(e.target.value)}
            />
            <input
              type="email"
              className={styles.formField}
              placeholder={"EMAIL*"}
              required
              disabled={loading}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <textarea
              className={styles.formTextArea}
              placeholder={"MESSAGE*"}
              required
              disabled={loading}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <ButtonArrow
              label={submitButtonText}
              contactButton
              cb={sendContactMessage}
            />
          </div>
        </div>
      </main>
      <div className={styles.contactUsImageContainer}>
        <StaticImage
          src="../imgs/siteImages/contact-min.jpg"
          alt={"Exhale Yoga Studio"}
          className={styles.contactUsImage}
        />
      </div>
    </Layout>
  )
}

export default Contact
