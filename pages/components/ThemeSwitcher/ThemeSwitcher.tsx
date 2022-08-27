import { useTheme } from "next-themes"

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  return (
    <label htmlFor="toogleA" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id="toogleA"
          type="checkbox"
          className="hidden"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light")
          }}
        />
        <div className="toggle__line w-10 h-4 bg-brand-400 rounded-full shadow-inner"></div>
        <div className="toggle__dot absolute w-6 h-6 bg-brand-100 rounded-full shadow inset-y-0 left-0"></div>
      </div>
    </label>
  )
}

export default ThemeSwitcher
