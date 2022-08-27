const SocialLinksSection = () => {
  const socialLinks = [
    {
      name: "Github Organization",
      link: "https://github.com/Code-Alchemysts"
    },
    {
      name: "Website",
      link: "#"
    },
    {
      name: "Medium",
      link: "#"
    },
    {
      name: "Twitter",
      link: "#"
    }
  ]
  return (
    <div className="w-full">
      <h3 className="font-bold text-gray-600 text-left px-4">
        Some of our links, get in touch 😉
      </h3>
      <div className="mt-5 w-full">
        {socialLinks.map((socialLink, index) => {
          return (
            <div className="my-5" key={index}>
              <a
                href={socialLink.link}
                target="_blank"
                className="text-indigo-200 block text-center font-medium rounded-full leading-6 px-6 py-3 hover:shadow-lg hover:scale-125 transition ease-in-out delay-150 bg-gradient-to-l from-brand-100 to-brand-200 text-brand-500"
              >
                {socialLink.name}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default SocialLinksSection
