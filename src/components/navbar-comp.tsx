import logo from "../assets/images/logo.png"
import { Search, ShoppingBag, User } from "lucide-react"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between h-20 relative z-10 px-20">
      {/* Nike Logo */}
      <div className="flex items-center cursor-pointer">
        <img src={logo} alt="logo" className="w-32" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-5">
        <button  className="text-white hover:text-white/80 font-medium cursor-pointer hover:bg-black/20 py-2 px-4 rounded-full ">
          NEW RELEASES
        </button>
        <button  className="text-white hover:text-white/80 font-medium cursor-pointer hover:bg-black/20 py-2 px-4 rounded-full ">
          MEN
        </button>
        <button  className="text-white hover:text-white/80 font-medium cursor-pointer hover:bg-black/20 py-2 px-4 rounded-full ">
          WOMEN
        </button>
        <button  className="text-white hover:text-white/80 font-medium cursor-pointer hover:bg-black/20 py-2 px-4 rounded-full ">
          KIDS
        </button>
        <button  className="text-white hover:text-white/80 font-medium cursor-pointer hover:bg-black/20 py-2 px-4 rounded-full ">
          CUSTOMIZE
        </button>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        <button   className="text-white hover:text-white/80 cursor-pointer py-2 px-2 rounded-full hover:bg-black/20">
          <Search className="w-5 h-5" />
        </button>
        <button   className="text-white hover:text-white/80 cursor-pointer py-2 px-2 rounded-full hover:bg-black/20">
          <User className="w-5 h-5" />
        </button>
        <button   className="text-white hover:text-white/80 cursor-pointer py-2 px-2 rounded-full hover:bg-black/20">
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>
    </nav>
  )
}
