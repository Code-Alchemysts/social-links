const StatusSection = () => {
  return (
    <div className="flex justify-between my-5 rounded-full shadow-lg">
      <a
        href=""
        className="bg font-bold text-sm rounded-l-full text-blue-800 w-full text-center py-3 hover:bg-brand-100/50 hover:text-brand-500 hover:shadow-lg transition ease-in-out delay-150"
      >
        50K+ Code Lines 👨🏾‍💻
      </a>
      <a
        href=""
        className="bg font-bold text-sm text-blue-400 w-full text-center py-3 hover:bg-brand-100/50 hover:text-brand-500 hover:shadow-lg transition ease-in-out delay-150"
      >
        500+ Coffes ☕
      </a>
      <a
        href=""
        className="bg font-bold text-sm rounded-r-full text-yellow-600 w-full text-center py-3 hover:bg-brand-100/50 hover:text-brand-500 hover:shadow-lg transition ease-in-out delay-150"
      >
        50+ Projects 💻
      </a>
    </div>
  )
}
export default StatusSection
