import { Product } from "../Component/index";

const ProductSection = () => {
  return (
    <div className=" bg-[#e9eef5] space-y-5 text-center mt-14 py-20">
        <h1 className="text-5xl font-['Roboto', sans-serif] font-[200]">Featured Product</h1>
        <p className="w-[40%] mx-auto text-[20px] font-['Roboto', sans-serif] font-[300]">
          Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.
        </p>
        <div className="container mx-auto flex justify-center items-center gap-5">
          <Product img = "/src/img/feature_prod_01.jpg" name = "Gym Weight" description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt." price = "240.00"/>
          <Product img = "/src/img/feature_prod_02.jpg" name = "Cloud Nike Shoes" description = "Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper." price = "480.00"/>
          <Product img = "/src/img/feature_prod_03.jpg" name = "Summer Addides Shoes" description = "Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec." price = "360.00"/>
        </div>
      </div>
  )
}

export default ProductSection
