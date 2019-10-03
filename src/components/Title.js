import React from "react"
import styles from "../css/title.module.css"
const Title = ({ title, subtitle }) => {
  return (
    <div className={styles.banner}>
      <h4>
        <span className={styles.title}>{title}</span>
        <span>{subtitle}</span>
      </h4>
    </div>
  )
}

export default Title
