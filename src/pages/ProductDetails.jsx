import {  useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {AppContext} from "../Context/AppProvider"
import { LiaStarSolid } from "react-icons/lia";
import { FaMinus , FaPlus  } from "react-icons/fa6";

const ProductDetails = () => {

        const BackEnd_Url = "http://127.0.0.1:8000/storage/"
        const [product , setProduct] = useState([])
        const [quantity , setQuantity] = useState(1)
        const {id} = useParams()
        const {token} = useContext(AppContext)
        const [isClickedColor , setIsClickedColor] = useState(false)
        const [isClickedColor1 , setIsClickedColor1] = useState(false)
        const [isClickedSize , setIsClickedSize] = useState(false)
        const [isClickedSize1 , setIsClickedSize1] = useState(false)
        const [isClickedSize2 , setIsClickedSize2] = useState(false)
        const [alert , setAlert] = useState({
          message : "" ,
          visible : false
        })
        const [formData , setFormData] = useState({
          quantity : 1,
          size : "",
          color : "",
        })
        
        const decrement = ()=>{
           if(quantity > 1){
             setQuantity(prev => prev - 1)
             setFormData(prev => ({ ...prev, quantity: prev.quantity - 1 }));
           }
        }
        
        const increment = ()=>{
            setQuantity(prev => prev + 1)
            setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }));
        }

        async function addToCart(e) {
          e.preventDefault()

          const res= await fetch(`/api/cart/${id}` , {
            method : "post",
            body : JSON.stringify(formData),
            headers : {
              Authorization : `Bearer ${token}`
            }
          })
          if(res.ok){
            const data = await res.json()
            setAlert({
              message : data.message,
              visible : true
            })
          }
        }

        async function getProduct() {
            const res = await fetch(`/api/product/${id}`)
            if(res.ok){
              const data =await res.json()
              setProduct(data.products)   
            }
           
        }
    
        useEffect(()=>{
            getProduct()
            
        },[])
        useEffect(()=>{
          if (alert.visible) {
            const timer = setTimeout(() => {
                setAlert({ 
                  visible: false, 
                  message: '' 
                });
            },5000);

            
            return () => clearTimeout(timer);
          }
        } , [alert.visible])
    
    
      return (
        <>
        //{alert.visible && <div className="text-center text-2xl text-blue-700 capitalize">{alert.message}</div>}
        <div className='container mx-auto flex justify-center items-start space-x-9 my-28'>
          <div className='w-[35%]  shadow-2xl border border-gray-200'>
            <img className="w-full h-[430px]" src={`${BackEnd_Url}${product?.image_path}`} />
          </div>
          <div className="w-1/2 border border-gray-200 shadow-2xl p-5 space-y-5 font-[Roboto] font-light">
            <h1 className="text-[30px] capitalize">{product?.name}</h1>
            <p className="text-[22px]">${product?.price}</p>
            <p className="flex justify-start items-center space-x-2">
              <LiaStarSolid className="text-yellow-500 font-[900] text-[20px]"/>
              <LiaStarSolid className="text-yellow-500 font-[900] text-[20px]"/>
              <LiaStarSolid className="text-yellow-500 font-[900] text-[20px]"/>
              <LiaStarSolid className="text-yellow-500 font-[900] text-[20px]"/>
              <LiaStarSolid />
              <span className="text-[#212529] text-[18px]">Rating 4.8 | 36 Comments</span>
            </p>
            <h6 className="text-[20px]">Brand: <span className="text-[#bcbcbc] font-bold">{product?.brand}</span></h6>
            <h6 className="text-[20px]">Gender: <span className="text-[#bcbcbc] font-bold">{product?.gender}</span></h6>
            <h6 className="text-[20px]">Description:</h6>
            <p>{product?.description}</p>
          <form className="space-y-2" onSubmit={addToCart}>
            <h6 className="text-[20px] flex space-x-3">Avilable Color: 
              <div>
                <label htmlFor="color1" onClick={()=>{
                    setIsClickedColor(!isClickedColor)
                 }}style={{backgroundColor : isClickedColor ? "#2d683c" : "#59ab6e"}} className="bg-[#59ab6e] text-white text-[15px] ml-1.5 p-3 rounded-lg cursor-pointer">White</label>
                <input 
                type="checkbox"
                value="white"
                onChange={e => setFormData({...formData , color : e.target.value})}
                hidden 
                id="color1" />
              </div>
              <div>
                <label htmlFor="color2" onClick={()=>{
                    setIsClickedColor1(!isClickedColor1)
                }}style={{backgroundColor : isClickedColor1 ? "#2d683c" : "#59ab6e"}} className="bg-[#59ab6e] text-white text-[15px] ml-1.5 p-3 rounded-lg cursor-pointer">Black</label>
                <input type="checkbox" 
                value="black"
                onChange={e => setFormData({...formData , color : e.target.value})}
                hidden 
                id="color2" />
              </div>
            </h6>
            <div className="text-[20px]  flex gap-7 items-center">
                <h6 className=" flex gap-2 ">Size:
                  <div>
                    <label htmlFor="size1" onClick={()=>{
                      setIsClickedSize(!isClickedSize)
                    }}style={{backgroundColor : isClickedSize ? "#2d683c" : "#59ab6e"}} className="bg-[#59ab6e] text-white text-[15px] ml-1.5 p-3 rounded-lg cursor-pointer">M</label>
                    <input 
                    type="checkbox"
                    value="M"
                    onChange={e => setFormData({...formData , size : e.target.value})} 
                    hidden 
                    id="size1" />
                  </div>
                  <div>
                    <label htmlFor="size2" onClick={()=>{
                      setIsClickedSize1(!isClickedSize1)
                    }}style={{backgroundColor : isClickedSize1 ? "#2d683c" : "#59ab6e"}} className="bg-[#59ab6e] text-white text-[15px] ml-1.5 p-3 rounded-lg cursor-pointer">L</label>
                    <input 
                    type="checkbox"
                    value="L"
                    onChange={e => setFormData({...formData , size : e.target.value})} 
                    hidden 
                    id="size2" />
                  </div>
                  <div>
                    <label htmlFor="size3" onClick={()=>{
                      setIsClickedSize2(!isClickedSize2)
                    }}style={{backgroundColor : isClickedSize2 ? "#2d683c" : "#59ab6e"}} className="bg-[#59ab6e] text-white text-[15px] ml-1.5 p-3 rounded-lg cursor-pointer">XL</label>
                    <input type="checkbox"
                    value="XL"
                    onChange={e => setFormData({...formData , size : e.target.value})} 
                    hidden 
                    id="size3" />
                  </div>
                </h6>
                <div className="flex gap-3 items-center">
                    <h6>Quantity:</h6>
                    <div className="flex gap-3">
                        <p onClick={decrement} className="bg-[#59ab6e] text-white text-[15px] p-3 rounded-lg cursor-pointer"><FaMinus /></p>
                        <p 
                          onChange={e => setFormData({...formData , quantity : e.target.value})} 
                         className="text-[18px] bg-[#6c757d] w-8 text-center pt-[5px] text-white rounded-lg">{quantity}</p>
                        <p onClick={increment} className="bg-[#59ab6e] text-white text-[15px] p-3 rounded-lg cursor-pointer"><FaPlus /></p>
                    </div>
                </div>
              </div>
              <button className="w-full text-white bg-[#59ab6e] text-2xl px-16 py-4 rounded-lg cursor-pointer">Add To Cart</button>
          </form>
          </div>
        </div>
        </>
      )
}

export default ProductDetails
