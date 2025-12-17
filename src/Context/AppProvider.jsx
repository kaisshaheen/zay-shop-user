import { createContext, useState , useEffect} from "react"


export const AppContext = createContext({})

const AppProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [token , setToken] = useState(localStorage.getItem("token"))

    async function getUser() {
         const res = await fetch(`${import.meta.env.VITE_API_URL}/users` , {
            headers : {
                 Authorization : `Bearer ${token}`
             } 
        })
        const data = await res.json()
        if(res.ok){
            setUser(data)
        }
    }

    useEffect(()=>{
        if(token){
            getUser()
        }
    } , [token])
  return (
    <AppContext.Provider value={{user , setUser , token , setToken}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
