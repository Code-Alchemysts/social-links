const CardFooterSection = () => {
  return (
    <div className="flex justify-between my-3 border-t">
      <a
        href="https://github.com/Code-Alchemysts"
        target="_blank"
        className="bg font-bold text-xl text-brand-200 w-full text-center py-3  hover:text-brand-100 hover:shadow-lg shadow-2xl"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="#"
        target="_blank"
        className="bg font-bold text-xl text-brand-200 w-full text-center py-3  hover:text-brand-100 hover:shadow-lg shadow-2xl"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  )
}
export default CardFooterSection
