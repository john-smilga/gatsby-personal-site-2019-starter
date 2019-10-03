import React from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [size, setSize] = React.useState(null)
  const [height, setHeight] = React.useState(null)
  const [isSidebarOpen, setSidebar] = React.useState(false)

  React.useEffect(() => {
    if (window) {
      setSize(window.innerWidth)
      setHeight(window.pageYOffset)
      window.addEventListener("resize", () => {
        setSize(window.innerWidth)
      })
      window.addEventListener("scroll", () => {
        setHeight(window.pageYOffset)
      })
    }

    return () => {
      window.removeEventListener("resize", () => {})
      window.removeEventListener("scroll", () => {})
    }
  }, [])
  const handleOpenSidebar = () => {
    setSidebar(true)
  }
  const handleCloseSidebar = () => {
    setSidebar(false)
  }
  return (
    <AppContext.Provider
      value={{
        size,
        height,
        handleCloseSidebar,
        handleOpenSidebar,
        isSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
