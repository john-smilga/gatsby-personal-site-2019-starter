import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
const NotFoundPage = () => (
  <Layout>
    <header className={styles.error}>
      <Banner title="oops! it's a dead end">
        <Link to="/" className="btn-white">
          back home
        </Link>
      </Banner>
    </header>
  </Layout>
)

export default NotFoundPage
