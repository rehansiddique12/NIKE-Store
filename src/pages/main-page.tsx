import rednike from "../assets/images/rednike.png";
import { Navbar } from "../components/navbar-comp";

const Mainpage = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-red-400 to-red-600 h-screen text-white">
      <Navbar />
      <div className="relative flex items-center justify-center lg:justify-center px-24 h-screen">
        <div className="max-w-md h-full flex flex-col items-start justify-center w-full font-MainFont">
          <h2 className="text-3xl font-bold font-MainFont mb-5">
            JORDAN 1 RED
          </h2>
          <div className="space-y-2 text-sm">
            <p className="text-xl">
              <span className="font-semibold font-MainFont text-xl">
                RELEASE DATE:
              </span>{" "}
              2016-10-06
            </p>
            <p className="text-xl">
              <span className="font-semibold font-MainFont text-xl">
                COLOR WAY:
              </span>{" "}
              SAIL/STARFISH-BLACK
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 text-xl">
              SELECT SIZE (US)
            </h3>
            <div className="flex flex-wrap gap-3 ">
              {["8", "8.5", "9.5", "10", "11"].map((size) => (
                <button
                  key={size}
                  className="w-12 h-12 border rounded-md border-white/30 cursor-pointer text-white hover:bg-white hover:text-red-600 transition-colors bg-transparent"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-10 lg:mt-0 flex items-center justify-center w-full">
          {/* Background NIKE text */}
          <h1 className="absolute inset-0 flex items-center justify-center font-extrabold text-white text-[50vh] font-Nike tracking-tighter leading-none">
            NIKE
          </h1>

          {/* Shoe image */}
          <img
            src={rednike}
            alt="Jordan 1 Red"
            className="relative w-[20vw] drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
