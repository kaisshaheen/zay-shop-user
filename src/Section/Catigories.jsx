import { Link } from "react-router";
import {Category} from "../Component/index";


const Catigories = () => {
  return (
    <div className="container mx-auto my-20">
        <h1 className="text-center mb-3 text-5xl font-['Roboto', sans-serif] font-[200] ">Categories of The Month</h1>
        <p className="w-[38%] mx-auto text-center leading-8 text-[19px] font-['Roboto', sans-serif] font-[300]">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <div className="my-9 flex justify-center items-start gap-10">
          <Category name = "Watches" img = "/src/img/category_img_01.jpg"/>
          <Category name = "Shoes" img = "/src/img/category_img_02.jpg"/>
          <Category name = "Accessories" img = "/src/img/category_img_03.jpg"/>
        </div>
      </div>
  )
}

export default Catigories
