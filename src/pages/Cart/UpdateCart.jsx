import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../Context/AppProvider"
import { useNavigate, useParams } from "react-router"

const UpdateCart = () => {


  const {token} = useContext(AppContext)
  const {id} = useParams()
  const [error , setError] = useState([])
  const [productID , setProductID] = useState(0) 
  const navigate = useNavigate()
  const [formData , setFormData] = useState({
    quantity : 1,
    color : "",
    size : ""
  })



  async function getCartItem() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/cart/${id}` , {
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    if(res.ok){
      const data =await res.json()
      setProductID(data.cart_item.product_id)
      setFormData({
        quantity : data.cart_item?.quantity,
        color : data.cart_item?.color,
        size : data.cart_item?.size
      })
      console.log(data)   
    }
           
  }

  async function handleUpdate(e) {
    e.preventDefault()
    const res = await fetch(`${import.meta.env.VITE_API_URL}/cart/update/${productID}` , {
      method : "put",
      body : JSON.stringify(formData),
      headers : {
         Authorization : `Bearer ${token}`
      }
    })
    const data = await res.json()
      if(data.errors){
          setError(data.errors)
      }else{
        navigate("/cart")
      }
  }


  useEffect(()=>{
    getCartItem()
  },[token , id])

  return (
    <div className="w-1/2 mx-auto text-center my-16">
      <h1 className="text-4xl uppercase font-bold text-gray-400">Product Name</h1>
      <form onSubmit={handleUpdate} className="space-y-4 mt-5">
        <div>
          <input 
          className="w-full p-5 border border-gray-400 rounded-xl" 
          type="number"
          onChange={e => setFormData({...formData ,   quantity : e.target.value})}
          value={formData.quantity}
          placeholder="Quantity"/>
          {error.quantity && <p className="text-red-700 text-[14px] text-start ">{error.quantity[0]}</p>}
        </div>
        <div>
          <input 
          className="w-full p-5 border border-gray-400 rounded-xl" 
          type="text"
          onChange={e => setFormData({...formData ,   color : e.target.value})}
          value={formData.color}
          placeholder="Color"/>
          {error.color && <p className="text-red-700 text-[14px] text-start ">{error.color[0]}</p>}
        </div>
        <div>
          <input 
          className="w-full p-5 border border-gray-400 rounded-xl" 
          type="text"
          onChange={e => setFormData({...formData ,   size : e.target.value})}
          value={formData.size}
          placeholder="Size"/>
          {error.size && <p className="text-red-700 text-[14px] text-start ">{error.size[0]}</p>}
        </div>
        <button className="text-[17px] text-[#fff] bg-[#59ab6e] px-5 py-2 rounded-[25px] uppercase font-medium hover:scale-110 transition-all duration-500 cursor-pointer">Update</button>
      </form>
    </div>
  )
}

export default UpdateCart
