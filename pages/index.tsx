import { useTheme } from "next-themes"
import BioSection from "./components/BioSection"
import CardFooterSection from "./components/CardFooterSection"
import Footer from "./components/Footer"
import SocialLinksSection from "./components/SocialLinksSection"
import StatusSection from "./components/StatusSection"
import ThemeSwitcher from "./components/ThemeSwitcher"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <ThemeSwitcher />
      <div className="container mx-auto mt-20 mb-5 antialiased">
        <div className="bg-brand-300 relative w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto rounded-b-xl rounded-t-xl px-5 shadow-2xl dark:shadow-brand-100/30">
          <div className="mt-16">
            <BioSection />
            <StatusSection />
            <SocialLinksSection />
            <CardFooterSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
