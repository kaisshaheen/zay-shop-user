import { OurBrands } from "../Section/index";
import AboutHero from "../Section/AboutHero"
import { FaTruck , FaExchangeAlt , FaPercent , FaUser } from "react-icons/fa";

const About = () => {
  return (
    <>
      <AboutHero />
      <div className="container mx-auto flex flex-col justify-center gap-4 items-center font-['Roboto', sans-serif]">
        <h1 className="text-5xl font-[200] ">Our Services</h1>
        <p className="text-center text-[18px] w-[40%] leading-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          Lorem ipsum dolor sit amet.
        </p>
        <div className="flex justify-center gap-5">
          <div className="w-1/4 flex flex-col justify-center items-center gap-2.5 shadow-2xl p-8 border border-gray-100 hover:bg-[#59ab6e] hover:text-white transition-all duration-500">
            <FaTruck className="text-[#59ab6e] text-6xl font-bold hover:text-white transition-all duration-500"/>
            <h2 className="text-2xl text-center">Delivery Services</h2>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center gap-2.5 shadow-2xl p-8 border border-gray-100 hover:bg-[#59ab6e] hover:text-white transition-all duration-500">
            <FaExchangeAlt className="text-[#59ab6e] text-6xl font-bold hover:text-white transition-all duration-500"/>
            <h2 className="text-2xl text-center">Shipping & Return</h2>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center gap-2.5 shadow-2xl p-8 border border-gray-100 hover:bg-[#59ab6e] hover:text-white transition-all duration-500">
            <FaPercent className="text-[#59ab6e] text-6xl font-bold hover:text-white transition-all duration-500"/>
            <h2 className="text-2xl text-center">Promotion</h2>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center gap-2.5 shadow-2xl p-8 border border-gray-100 hover:bg-[#59ab6e] hover:text-white transition-all duration-500">
            <FaUser className="text-[#59ab6e] text-6xl font-bold hover:text-white transition-all duration-500"/>
            <h2 className="text-2xl text-center">24 Hours Service</h2>
          </div>
        </div>
      </div>
      <OurBrands />
    </>
  )
}

export default About
