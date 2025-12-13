import { Link, useNavigate } from "react-router"
import { AppContext } from "../Context/AppProvider"
import { useContext } from "react"
import { FaCartArrowDown } from "react-icons/fa";

const NavBar = () => {

  const {user , setUser , token ,setToken} = useContext(AppContext)
  const navigate = useNavigate()

  async function handleLogout(e) {
    e.preventDefault()

    const res = await fetch("/api/logout" , {
      method : "post",
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
   
    if(res.ok){
      localStorage.removeItem("token")
      setUser(null)
      setToken(null)
      navigate("/")
    }
  }

  return (
        <nav className="shadow-2xl shadow-[#00000026]">
            <div className="container mx-auto flex justify-between items-center py-4">
              <Link><h1 className="text-5xl text-[#59ab6e] font-medium">Zay</h1></Link>
              <div className="space-x-20">
                <Link to = "/" className="text-[#212934] text-[17px] hover:text-[#59ab6e] transition-all duration-500">Home</Link>
                <Link to = "/about" className="text-[#212934] text-[17px] hover:text-[#59ab6e] transition-all duration-500">About</Link>
                <Link to = "/shop" className="text-[#212934] text-[17px] hover:text-[#59ab6e] transition-all duration-500">Shop</Link>
                <Link to = "/contact" className="text-[#212934] text-[17px] hover:text-[#59ab6e] transition-all duration-500">Contact</Link>
              </div>
              {
                user 
                ?
                <div className="flex items-center gap-6">
                  <Link to = "/cart"><FaCartArrowDown  className="text-2xl font-[900] hover:scale-110 transition-all duration-500"/></Link>
                  <Link to="/order" className="text-[17px] text-[#fff] bg-[#5e59ab] px-5 py-2 rounded-[25px] uppercase font-medium hover:scale-110 transition-all duration-500">My Order</Link>
                  <form onSubmit={handleLogout}>
                    <button className="text-[17px] text-[#fff] bg-[#59ab6e] px-5 py-2 rounded-[25px] uppercase font-medium hover:scale-110 transition-all duration-500">Logout</button>
                  </form>
                </div>
                : 
                <Link to = "/login" className="text-[17px] text-[#fff] bg-[#59ab6e] px-5 py-2 rounded-[25px] uppercase font-medium hover:scale-110 transition-all duration-500">Sign In</Link>
              }
            </div>
        </nav>
  )
}

export default NavBar
