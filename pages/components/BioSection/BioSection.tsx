const BioSection = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/112133826?s=400&u=a1e6dca731153bf323b2f2715c45925e87784dbc&v=4"
          alt=""
          className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl dark:shadow-brand-100/50 border-4 border-brand-100"
        />
      </div>
      <div className="mt-16">
        <h1 className="font-bold text-center text-3xl text-gray-900">
          Code Alchemysts
        </h1>
        <p className="text-center text-sm text-gray-400 font-medium">
          Turning code, love and coffee into your dream project.
        </p>
        <p>
          <span></span>
        </p>
        <div className="my-5">
          <a
            href="#"
            target="_blank"
            className="text-indigo-200 block text-center font-medium rounded-full leading-6 px-6 py-3 bg-gradient-to-r from-brand-100 to-brand-200 text-brand-500"
          >
            Connect to <span className="font-bold">@code.alchemysts</span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default BioSection
