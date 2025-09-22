import { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  ChartNoAxesColumnIncreasing,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";

type NavbarProps = {
  selectedColor: string;
};

const Navbar = ({ selectedColor }: NavbarProps) => {
  const borderColors: Record<string, string> = {
    Blue: "border border-blue-500",
    Red: "border border-red-500",
    Green: "border border-green-500",
    Black: "border border-gray-500",
  };

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="flex items-center justify-between h-20 z-10 px-8 md:px-20 fixed top-0 left-0 right-0">
      {/* Nike Logo */}
      <div className="flex items-center cursor-pointer">
        <img src={logo} alt="logo" className="w-24 md:w-32" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-5">
        <button className="text-white hover:text-white/80 font-medium cursor-pointer hover:bg-black/20 py-2 px-4 rounded-full ">
          NEW RELEASES
        </button>
        <button className="text-white hover:text-white/80 font-medium cursor-pointer hover:bg-black/20 py-2 px-4 rounded-full ">
          MEN
        </button>
        <button className="text-white hover:text-white/80 font-medium cursor-pointer hover:bg-black/20 py-2 px-4 rounded-full ">
          WOMEN
        </button>
        <button className="text-white hover:text-white/80 font-medium cursor-pointer hover:bg-black/20 py-2 px-4 rounded-full ">
          KIDS
        </button>
        <button className="text-white hover:text-white/80 font-medium cursor-pointer hover:bg-black/20 py-2 px-4 rounded-full ">
          CUSTOMIZE
        </button>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-white/80 cursor-pointer py-2 px-2 rounded-full hover:bg-black/20">
          <Search className="w-5 h-5" />
        </button>
        <button className="text-white hover:text-white/80 cursor-pointer py-2 px-2 rounded-full hover:bg-black/20">
          <User className="w-5 h-5" />
        </button>
        <button className="text-white hover:text-white/80 cursor-pointer py-2 px-2 rounded-full hover:bg-black/20">
          <ShoppingBag className="w-5 h-5" />
        </button>
        <li className="md:hidden items-center relative group cursor-pointer list-none ">
          <button
            onClick={() => toggleDropdown("kids")}
            className="flex items-center gap-1 cursor-pointer hover:text-white/80"
          >
            <ChartNoAxesColumnIncreasing className="w-5 h-5 rotate-270" />
          </button>

          {openDropdown === "kids" && (
            <ul
              className={`absolute right-0 mt-5 ${borderColors[selectedColor]} list-none p-0 m-0 bg-transparent backdrop-blur-md text-white rounded-md py-1 shadow-lg w-48 z-50 font-MainFont`}
            >
              <li className="px-4 py-3 rounded-lg cursor-pointer hover:bg-black/20">
                MEN
              </li>
              <li className="px-4 py-3 rounded-lg cursor-pointer hover:bg-black/20">
                KIDS
              </li>
              <li className="px-4 py-3 rounded-lg cursor-pointer hover:bg-black/20">
                WOMEN
              </li>
              <li className="px-4 py-3 rounded-lg cursor-pointer hover:bg-black/20">
                CUSTOMIZE
              </li>
              <li className="px-4 py-3 rounded-lg cursor-pointer hover:bg-black/20">
                NEW RELEASES
              </li>
            </ul>
          )}
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
