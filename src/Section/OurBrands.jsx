import { Link } from "react-router";

const OurBrands = () => {
  return (
    <div className="bg-[#e9eef5] mt-20">
        <div className="container mx-auto flex flex-col justify-center gap-4 items-center font-['Roboto', sans-serif] py-24">
          <h1 className="text-5xl font-[200]">Our Brands</h1>
          <p className="text-[18px] text-center w-[40%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            Lorem ipsum dolor sit amet.
          </p>
          <div className="flex justify-center gap-10 mt-5">
            <div className="w-1/10">
              <Link><img src="/img/brand_01.png" alt="" /></Link>
            </div>
            <div className="w-1/10">
              <Link><img src="/img/brand_02.png" alt="" /></Link>
            </div>
            <div className="w-1/10">
              <Link><img src="/img/brand_03.png" alt="" /></Link>
            </div>
            <div className="w-1/10">
              <Link><img src="/img/brand_04.png" alt="" /></Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default OurBrands
