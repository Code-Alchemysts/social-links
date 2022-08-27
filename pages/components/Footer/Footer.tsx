const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-12 mb-0 ">
      <p className="dark:text-white mr-1">Built with</p>
      <p title="Love">&#10084;</p>
      <p className="dark:text-white ml-1 mr-1">by</p>{" "}
      <a
        href="https://github.com/Code-Alchemysts"
        target="_blank"
        className="text-brand-100"
      >
        Code Alchemysts
      </a>
    </footer>
  )
}
export default Footer
