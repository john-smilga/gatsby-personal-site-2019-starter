import React from "react"
import { AppProvider } from "./src/context"
import "./src/css/main.css"
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}
