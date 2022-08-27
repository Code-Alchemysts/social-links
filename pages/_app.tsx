import "../styles/globals.css"
import "@fortawesome/fontawesome-free/js/all.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }) {
  const [isPageLoading, setIsPageLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoading(false)
    }, 1500)
  }, [isPageLoading])
  {
    !isPageLoading ? (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    ) : (
      <>Loading...</>
    )
  }
}

export default MyApp
