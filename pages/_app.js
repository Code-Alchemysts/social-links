import '../styles/globals.css'
import '@fortawesome/fontawesome-free/js/all.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
