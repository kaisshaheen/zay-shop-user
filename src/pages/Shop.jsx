import { useEffect, useState } from "react"
import { CollapsibleList, Product } from "../Component/index"
import { OurBrands } from "../Section/index"

const Shop = () => {

  const BackEnd_Url = "http://127.0.0.1:8000/storage/"

  const [category , setCategory] = useState([])
  const [product , setProduct] = useState([])

  async function getProduct() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/product`)
    const data = await res.json()

    if(res.ok){
      setProduct(data.products)
    }
  }

  async function getCatgories() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/category`)
    const data = await res.json()

    if(res.ok){
      setCategory(data)
    }
  }

  useEffect(()=>{
    getCatgories()
    getProduct()
  },[])

  return (
    <div className="container mx-auto  mt-9">
      <div className="flex">
        <div className="w-1/4">
        <h1 className="text-3xl font-[200] font-['Roboto', sans-serif] mb-9">Categories</h1>
        <ul className="w-full space-y-10">
          <li>
            <CollapsibleList margin = {150} title = "Gender">
              <ul className="w-fit">
                <li className="hover:text-[#464646] transition-all duration-300 cursor-pointer"><button>Men</button></li>
                <li className="hover:text-[#464646] transition-all duration-300 cursor-pointer"><button>Women</button></li>
              </ul>
            </CollapsibleList>
          </li>
          <li>
            <CollapsibleList margin = {181} title = "Sale">
              <ul className="w-fit">
                {category.length > 0 ? category.map(c => (
                  <li className="hover:text-[#464646] transition-all duration-300 cursor-pointer" key={c.id}><button>{c.name}</button></li>
                )) : "" }
              </ul>
            </CollapsibleList>
          </li>
          <li>
            <CollapsibleList margin = {147} title = "Product">
              <ul className="w-fit">
                <li className="hover:text-[#464646] transition-all duration-300 cursor-pointer"><button>Bag</button></li>
                <li className="hover:text-[#464646] transition-all duration-300 cursor-pointer"><button>Sweather</button></li>
                <li className="hover:text-[#464646] transition-all duration-300 cursor-pointer"><button>Sunglass</button></li>
              </ul>
            </CollapsibleList>
          </li>
        </ul>
      </div>
      <div className="w-3/4 ">
        <div className="w-full flex">
          <div className="w-1/2">
            <ul className="flex gap-3 text-2xl font-['Roboto', sans-serif] font-[200]">
              <li><button>All</button></li>
              <li><button>Men's</button></li>
              <li><button>Women's</button></li>
            </ul>
          </div>
          <div className="w-full">
            <select className="w-3/4 border border-gray-300 p-2">
              <option value="featured">Featured</option>
              <option value="a-to-z">A to Z</option>
              <option value="item">Item</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 mt-9">
          {product.length > 0 
          ?
          product.map(p => (<Product key = {p.id} path = {`/shop/${p.id}`} img = {`${BackEnd_Url}${p.image_path}`} name = {p.name} size = {p.size} price = {p.price}/>))
          :
          <p className='text-2xl capitalize text-red-700'>There are no Product</p>
          }
        </div>
      </div>
      </div>
      <OurBrands />
    </div>
  )
}

export default Shop
