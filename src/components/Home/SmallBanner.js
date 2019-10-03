import React from "react"
import styles from "../../css/smallBanner.module.css"
const SmallBanner = ({ children }) => {
  return <div className={styles.banner}>{children}</div>
}

export default SmallBanner
