import React from "react"
import * as styles from "../../styles/footer.module.scss"

const NewsLetterSignUp = () => {
  return (
    <section className={styles.newsletterContainer}>
      <h3>SIGN UP TO OUR NEWSLETTER</h3>
      <div className={styles.inputContainer}>
        <input
          type="email"
          className={styles.emailInput}
          placeholder="Email Address"
        />
        <input type="submit" className={styles.submitButton} />
      </div>
    </section>
  )
}

export default NewsLetterSignUp
