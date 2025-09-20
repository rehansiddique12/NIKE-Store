import { useState } from "react";
import rednike from "../assets/images/rednike.png";
import { Navbar } from "../components/navbar-comp";
import bluenike from "../assets/images/bluenike.png";
import greennike from "../assets/images/greennike.png";
import blacknike from "../assets/images/blacknike.png";
import { motion, AnimatePresence } from "framer-motion";

const Mainpage = () => {
  const [selectedColor, setSelectedColor] = useState("Red");

  // Gradient background per color
  const colorGradients: Record<string, string> = {
    Red: "from-red-600 via-red-400 to-red-600",
    Blue: "from-blue-600 via-blue-400 to-blue-600",
    Green: "from-green-600 via-green-400 to-green-600",
    Black: "from-gray-900 via-gray-700 to-gray-900",
  };

  // Shoe images per color
  const shoeImages: Record<string, string> = {
    Red: rednike,
    Green: greennike,
    Blue: bluenike, // fallback (replace with blue image if you have one)
    Black: blacknike, // fallback (replace with black image if you have one)
  };

  // Active button styles
  const buttonColors: Record<string, string> = {
    Red: "bg-red-600 text-white border-red-600",
    Blue: "bg-blue-600 text-white border-blue-600",
    Green: "bg-green-600 text-white border-green-600",
    Black: "bg-gray-900 text-white border-gray-900",
  };

  // Hover styles
  const hoverColors: Record<string, string> = {
    Red: "hover:text-red-600 hover:border-red-600 hover:",
    Blue: "hover:text-blue-600 hover:border-blue-600 hover:b",
    Green: "hover:text-green-600 hover:border-green-600 hove",
    Black: "hover:text-gray-900 hover:border-gray-900 hover:b",
  };

  const sizes = ["Red", "Blue", "Green", "Black"];

  return (
    <div
      className={`bg-gradient-to-r ${colorGradients[selectedColor]} h-screen text-white transition-colors duration-1000 ease-in-out`}
    >
      <Navbar />

      {/* Center whole content */}
      <div className="relative flex items-center justify-center px-24 h-[calc(100vh-80px)]">
        {/* LEFT SECTION */}
        <div className="max-w-md flex flex-col items-start justify-center w-full font-MainFont">
          {/* Animated Heading */}
          <motion.h2
            key={`heading-${selectedColor}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold mb-5"
          >
            JORDAN 1 {selectedColor.toUpperCase()}
          </motion.h2>

          {/* Animated Info */}
          <motion.div
            key={`info-${selectedColor}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="space-y-2 text-sm"
          >
            <p className="text-xl">
              <span className="font-semibold text-xl">RELEASE DATE:</span>{" "}
              2016-10-06
            </p>
            <p className="text-xl">
              <span className="font-semibold text-xl">COLOR WAY:</span>{" "}
              SAIL/STARFISH-BLACK
            </p>
          </motion.div>

          {/* Color/Size Selector */}
          <h3 className="text-white font-medium mb-4 mt-6 text-xl">
            SELECT COLOR
          </h3>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedColor(size)}
                className={`w-16 h-12 border rounded-md cursor-pointer 
                transition-all duration-500 ease-in-out
                ${
                  selectedColor === size
                    ? `${buttonColors[size]} scale-110 shadow-lg`
                    : `border-white/30 bg-transparent text-white ${hoverColors[size]}`
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative flex items-center justify-center w-full ml-7">
          {/* Background NIKE text */}
          <h1 className="absolute inset-0 flex items-center justify-center font-extrabold text-white text-[50vh] font-Nike tracking-tighter leading-none pointer-events-none select-none opacity-20">
            NIKE
          </h1>

          {/* Animated Shoe */}
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedColor}
              src={shoeImages[selectedColor]}
              alt={`Jordan 1 ${selectedColor}`}
              initial={{ opacity: 0, y: 50, rotate: -15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, rotate: 15, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative w-[20vw] drop-shadow-2xl"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
