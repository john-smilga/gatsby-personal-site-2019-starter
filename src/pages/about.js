import React from "react"
import Layout from "../components/layout"
import styles from "../css/about.module.css"
import Title from "../components/Title"
const about = () => {
  return (
    <Layout>
      <section className={styles.about}>
        <Title title="about"></Title>
        <article className={styles.text}>
          <p>Hello, I am John and I am a web developer.</p>
        </article>
      </section>
    </Layout>
  )
}

export default about
