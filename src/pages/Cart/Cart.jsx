import { useContext, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router";
import { AppContext } from "../../Context/AppProvider";

const Cart = () => {

  const {token} = useContext(AppContext)
  const [error , setErrors] = useState({})
  const [cart , setCart] = useState([])
  const [formData , setFormData] = useState({
    shipping_address: "",
    billing_address: "" 
  })
  const [total , setTotal] = useState(0)
  const navigate = useNavigate()

  async function getCart() {
    const res = await fetch("/api/cart" , {
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    if(res.ok){
      const data = await res.json()
      setCart(data.cart_items)
      setTotal(data.total)
    }
  }


  async function checkout(e){
    e.preventDefault()
    const res = await fetch("/api/checkout" , {
      method : "post",
      body : JSON.stringify(formData),
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    const data = await res.json()
    if(data.error){
      setErrors(data.error)
    }else{
      navigate("/")
    }
  }


  async function handleDelete(e , itemId) {
      e.preventDefault()
      const res = await fetch(`/api/cart/remove/${itemId}`,{
        method : "delete",
        headers : {
          Authorization : `Bearer ${token}`
        }
      })

      if(res.ok){
        navigate("/")
      }
    }

    async function handleClear(e) {
      e.preventDefault()
      const res = await fetch("/api/cart/clear",{
        method : "delete",
        headers : {
          Authorization : `Bearer ${token}`
        }
      })

      if(res.ok){
        navigate("/")
      }
    }

  useEffect(()=>{
    getCart()    
  },[token])

  return (
    <div className="w-2/3 mx-auto flex justify-center items-center gap-6 my-20">
      <div className="w-1/3"><img src="src/img/sprite.png"/></div>
      <div className="w-2/3">
        <ul className="space-y-3">
            <li className="px-4 flex justify-between text-[15px] text-[#7e93a7]">
                <div>
                    <span className="mr-8">QTY</span>
                    <span>ITEM</span>
                </div>
                <span className="mr-16">Price</span>
            </li>
            {
              cart.length > 0 ?
                cart.map(c => (
                    <div key={c.id} className="flex items-center">
                      <li className="px-4 py-3 w-full text-[20px] font-bold bg-gray-300 shadow-2xl"> 
                        <Link to={`/cart/update/${c.id}`} className="mb-3.5">
                          <span className="text-[#4ea6bc]">{c.quantity}</span>
                          <span className="text-[#727578] ml-10">{c.product.name}</span>  
                          <span className="text-[#f06953] float-end">${c.product.price}</span>
                        </Link>
                      </li> 
                      <form onSubmit={(e) => handleDelete(e , c.id)}>
                        <button className="px-4 py-3 w-full text-[20px] text-red-700 cursor-pointer font-bold bg-gray-300 shadow-2xl">X</button>
                      </form>
                    </div>
                ))
                :
                <p className='text-2xl capitalize text-red-700'>There are no Items</p>
            }
        </ul>
        <div className="mt-6 pl-3 text-[20px]">
          <span className="text-[#727578] mr-5">Total:</span>
          <span className="text-[#f06953]">${total}</span>
          <button onClick={handleClear} className="float-end cursor-pointer text-[17px] font-bold uppercase bg-red-800 text-white px-5 py-2 rounded-2xl ml-7">Clear</button>
          
        </div>
        <form onSubmit={checkout} className="mt-8 text-center">
          <div>
            <textarea 
            className="w-full p-5 border border-gray-400 rounded-xl" 
            type="text"
            value={formData.shipping_address}
            onChange={e=>setFormData({...formData , shipping_address : e.target.value})}
            placeholder="Your Shipping Address..."></textarea>
            {error.shipping_address && <p className="text-red-700 text-[14px]">{error.shipping_address[0]}</p>}
          </div>
          <div>
            <textarea 
            className="w-full p-5 border border-gray-400 rounded-xl" 
            type="text"
            value={formData.billing_address}
            onChange={e=>setFormData({...formData , billing_address : e.target.value})}
            placeholder="Your Billing Address..."></textarea>
            {error.billing_address && <p className="text-red-700 text-[14px]">{error.billing_address[0]}</p>}
          </div>
          <button className="text-[17px] font-bold uppercase bg-[#f06953] text-white px-5 py-2 rounded-2xl">order</button>  
        </form> 
      </div>
    </div>
  )
}

export default Cart
