import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../Context/AppProvider"
import { Link } from "react-router"

const Order = () => {
  const [orders , setOrders] = useState({})
  const {token , user} = useContext(AppContext)


  async function getOrders() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/orders` , {
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    if(res.ok){
      const data = await res.json()
      setOrders(data.orders)
      console.log(data.orders)
    }
  }

  useEffect(() => {
    getOrders()
  },[token])
  
  return (
    <>
      <div className="container mx-auto flex justify-between mt-9 mb-7">
        <h1 className="text-3xl">My Orders</h1>
        <p className="text-[20px]">{user?.name}</p>
      </div>
       <ul className="w-1/2 mx-auto space-y-3">
            <li className="flex justify-between text-[20px] border-b border-b-gray-200 mb-3.5 pb-3.5">
                <span>Total Price</span>
                <span>Shipping Address:</span>
                <span>Status:</span>
            </li>
            {orders.length > 0 
            ?
              orders.map(o => (
                <Link to={`/order/${o.id}`} key={o.id}>
                  <li  className="flex justify-between ml-2 text-gray-700 font-bold text-[17px] border-b border-b-gray-200 mb-3.5 pb-4">
                    <span>${o.total_price}</span>
                    <span>{o.shipping_address}</span>
                    <span className={o.status == "pending" ? `text-red-700` : `text-gray-700`}>{o.status}</span>
                  </li>
                </Link>
              ))
            :
            <p className='text-2xl capitalize text-red-700'>There are no order</p>}
        </ul>
    </>
  )
}

export default Order
