import { FaFacebookF ,FaMapMarkerAlt , FaPhone , FaEnvelope  } from "react-icons/fa";
import {   FaInstagram , FaXTwitter , FaLinkedin  } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#212934] pt-16">
      <div className="container pb-6 mx-auto flex justify-center items-start gap-3 border-b border-b-[#2d343f]">
        <div className="w-1/3">
            <h2 className="text-[#59ab6e] text-3xl font-[500] font-['Roboto', sans-serif] pb-4 border-b border-b-[#2d343f]">Zay Shop</h2>
            <ul className="my-4 text-white font-['Roboto', sans-serif] text-[18px] space-y-3">
                <li className="flex items-center gap-2"><FaMapMarkerAlt className="inline-block" /> 123 Consectetur at ligula 10660</li>
                <li className="flex items-center gap-2"><FaPhone /><Link className="hover:text-[#59ab6e] transition duration-500">010-020-0340</Link></li>
                <li className="flex items-center gap-2"><FaEnvelope /><Link className="hover:text-[#59ab6e] transition duration-500">info@company.com</Link></li>
            </ul>
        </div>
        <div className="w-1/3">
            <h2 className="text-white text-3xl font-[300] font-['Roboto', sans-serif] pb-4 border-b border-b-[#2d343f]">Products</h2>
            <ul className="my-4 text-white font-['Roboto', sans-serif] text-[18px] space-y-3">
                <li><Link className="hover:text-[#59ab6e] transition duration-500">Luxary</Link></li>
                <li><Link className="hover:text-[#59ab6e] transition duration-500">Sport Wear</Link></li>
                <li><Link className="hover:text-[#59ab6e] transition duration-500">Men's Shoes</Link></li>
                <li><Link className="hover:text-[#59ab6e] transition duration-500">Women's Shoes</Link></li>
                <li><Link className="hover:text-[#59ab6e] transition duration-500">Popular Dress</Link></li>
                <li><Link className="hover:text-[#59ab6e] transition duration-500">Gym Accessories</Link></li>
                <li><Link className="hover:text-[#59ab6e] transition duration-500">Sport Shoes</Link></li>
            </ul>
        </div>
        <div className="w-1/3">
            <h2 className="text-white text-3xl font-[300] font-['Roboto', sans-serif] pb-4 border-b border-b-[#2d343f]">Further Info</h2>
            <ul className="my-4 text-white font-['Roboto', sans-serif] text-[18px] space-y-3">
                <li><Link className="hover:text-[#59ab6e] transition duration-500">Home</Link></li>
                <li><Link className="hover:text-[#59ab6e] transition duration-500">About Us</Link></li>
                <li><Link className="hover:text-[#59ab6e] transition duration-500">Shop Locations</Link></li>
                <li><Link className="hover:text-[#59ab6e] transition duration-500">FAQs</Link></li>
                <li><Link className="hover:text-[#59ab6e] transition duration-500">Contact</Link></li>
            </ul>
        </div>
        
      </div>
      <div className="container mx-auto text-[25px] mt-7 flex justify-center gap-4 text-[#cfd6e1]">
        <Link className="p-2 rounded-full border boreder-[#2d343f] hover:bg-[#cfd6e1] hover:text-[#2d343f] transition-all duration-500"><FaFacebookF /></Link>
        <Link className="p-2 rounded-full border boreder-[#2d343f] hover:bg-[#cfd6e1] hover:text-[#2d343f] transition-all duration-500"><FaInstagram /></Link>
        <Link className="p-2 rounded-full border boreder-[#2d343f] hover:bg-[#cfd6e1] hover:text-[#2d343f] transition-all duration-500"><FaXTwitter /></Link>
        <Link className="p-2 rounded-full border boreder-[#2d343f] hover:bg-[#cfd6e1] hover:text-[#2d343f] transition-all duration-500"><FaLinkedin /></Link>
      </div>
      <div className="bg-[#1d242d] h-[13vh] pt-4 mt-6">
        <p className="text-white container mx-auto text-[18px] font-['Roboto', sans-serif] font-[300]">Copyright © 2021 Company Name | Designed by <span className="hover:text-[#59ab6e] transition-all duration-500 underline cursor-pointer">Eng.Kais Shaheen</span></p>
      </div>
    </footer>
  )
}

export default Footer
