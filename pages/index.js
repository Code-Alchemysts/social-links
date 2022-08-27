import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <label htmlFor="toogleA" className="flex items-center cursor-pointer">
       <div className="relative">
          <input id="toogleA" type="checkbox"  className="hidden" onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
          }} />
          <div className="toggle__line w-10 h-4 bg-gray-200 rounded-full shadow-inner"></div>
          <div className="toggle__dot absolute w-6 h-6 bg-indigo-400 rounded-full shadow inset-y-0 left-0"></div>
       </div>
    </label>
    <div className="container mx-auto mt-28 mb-10 antialiased">
       <div className="bg-white relative shadow-xl w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto rounded-b-xl rounded-t-xl px-5">
          <div className="flex justify-center">
             <img src="https://avatars.githubusercontent.com/u/40878232?v=4" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-indigo-400"/>
          </div>
          <div className="mt-16">
             <h1 className="font-bold text-center text-3xl text-gray-900">Christopher Marques Corrêa</h1>
             <p className="text-center text-sm text-gray-400 font-medium">FullStack Developer</p>
             <p>
                <span>
                </span>
             </p>
             <div className="my-5">
                <a href="https://www.instagram.com/eu.christopher_marques/" target="_blank" className="text-indigo-200 block text-center font-medium rounded-full leading-6 px-6 py-3 bg-indigo-600">Connect to <span className="font-bold">@eu.christopher_marques</span></a>
             </div>
             <div className="flex justify-between my-5 rounded-full shadow-lg">
                <a href="" className="bg font-bold text-sm rounded-l-full text-blue-800 w-full text-center py-3 hover:bg-blue-800 hover:text-white hover:shadow-lg">5K+ Code Lines 👨🏾‍💻</a>
                <a href="" className="bg font-bold text-sm text-blue-400 w-full text-center py-3 hover:bg-blue-400 hover:text-white hover:shadow-lg">250+ Coffes ☕</a>
                <a href="" className="bg font-bold text-sm rounded-r-full text-yellow-600 w-full text-center py-3 hover:bg-yellow-600 hover:text-white hover:shadow-lg">50+ Projects 💻</a>
             </div>
             <div className="w-full">
                <h3 className="font-bold text-gray-600 text-left px-4">Recent activites</h3>
                <div className="mt-5 w-full">
                   <a href="#" className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4  block hover:bg-gray-100 transition duration-150">
                   <img src="https://avatars.githubusercontent.com/u/40878232?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                   Updated his status
                   <span className="text-gray-400 text-sm">24 min ago</span>
                   </a>
                   <a href="#" className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4  block hover:bg-gray-100 transition duration-150">
                   <img src="https://avatars.githubusercontent.com/u/40878232?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                   Added new profile picture
                   <span className="text-gray-400 text-sm">42 min ago</span>
                   </a>
                   <a href="#" className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4  block hover:bg-gray-100 transition duration-150">
                   <img src="https://avatars.githubusercontent.com/u/40878232?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                   Posted new article in <span className="font-bold">Web Dev</span>
                   <span className="text-gray-400 text-sm">49 min ago</span>
                   </a>
                   <a href="#" className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4  block hover:bg-gray-100 transition duration-150">
                   <img src="https://avatars.githubusercontent.com/u/40878232?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                   Edited website settings
                   <span className="text-gray-400 text-sm">1 day ago</span>
                   </a>
                   <a href="#" className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4  block hover:bg-gray-100 transition duration-150">
                   <img src="https://avatars.githubusercontent.com/u/40878232?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                   Added new rank
                   <span className="text-gray-400 text-sm">5 days ago</span>
                   </a>
                </div>
             </div>
             <div className="flex justify-between my-3 border-t">
                <a href="https://github.com/ChristopherMarques" target="_blank" className="bg font-bold text-lg text-indigo-700 w-full text-center py-3  hover:text-indigo-400 hover:shadow-lg"><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/eu.christopher_marques/" target="_blank" className="bg font-bold text-lg text-indigo-700 w-full text-center py-3  hover:text-indigo-400 hover:shadow-lg"><i className="fab fa-instagram"></i></a>
             </div>
          </div>
       </div>
    </div>
    <footer className="flex items-center justify-center w-full h-12 mb-0 border-t dark:border-indigo-500">
       <p className="dark:text-white">Built with</p> 
       <p title="Love">❤</p>
       <p className="dark:text-white">by</p> <a href="https://github.com/ChristopherMarques" target="_blank" className="text-indigo-600">Christopher Corrêa</a>
    </footer>
 </div>
  )
}
