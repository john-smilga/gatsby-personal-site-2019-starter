import React from "react"
import { AppContext } from "../../context/context"
import SmallBanner from "./SmallBanner"
import Banner from "../Banner"
import Background from "./Background"
const HomeBanner = () => {
  const { size } = React.useContext(AppContext)
  if (size < 776) {
    return (
      <SmallBanner>
        <Banner title="project-based web development courses"></Banner>
      </SmallBanner>
    )
  }
  return (
    <Background>
      <Banner title="project-based web development courses"></Banner>
    </Background>
  )
}

export default HomeBanner
