import { FaEnvelope , FaPhone , FaFacebook , FaInstagram , FaXTwitter , FaLinkedin  } from "react-icons/fa6";
import { Link } from "react-router";

const TopHeader = () => {
  return (
        <div className="bg-[#212934]  p-2">
            <div className="container flex justify-between mx-auto">
              <div className="flex gap-5 text-[12px] text-[#cfd6e1] ">
                <Link><FaEnvelope className="inline-block"/> info@company.com</Link>
                <Link><FaPhone className="inline-block"/>  010-020-0340</Link>
              </div>
              <div className="flex gap-4 text-[#cfd6e1]">
                <Link><FaFacebook /></Link>
                <Link><FaInstagram /></Link>
                <Link><FaXTwitter /></Link>
                <Link><FaLinkedin /></Link>
              </div>
            </div>
        </div>
  )
}

export default TopHeader
