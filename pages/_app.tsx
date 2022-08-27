import "../styles/globals.css"
import "@fortawesome/fontawesome-free/js/all.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"
import LoadingAnimated from "./components/LoadingAnimated"

function MyApp({ Component, pageProps }) {
  const [isPageLoading, setIsPageLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoading(false)
    }, 1500)
  }, [isPageLoading])

  return !isPageLoading ? (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  ) : (
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-brand-500">
      <div className="justify-center">
        <LoadingAnimated />
      </div>
    </div>
  )
}

export default MyApp
