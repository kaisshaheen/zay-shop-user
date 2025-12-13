
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css'
import {About, Cart, CheckEmail, Contact, GoogleCallback, Home, LogIn, Order, OrderDetails, ProductDetails, Shop, SignUp, UpdateCart, Verify} from './pages/index'
import {Footer, Header} from './Section/index'



function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/shop' element = {<Shop />}/>
        <Route path='/contact' element = {<Contact />}/>
        <Route path='/login' element = {<LogIn />}/>
        <Route path='/signup' element = {<SignUp />}/>
        <Route path="/auth/google/callback" element={<GoogleCallback />} />
        
        <Route path="/verify" element={<Verify />} />
        <Route path='/check-email' element = {<CheckEmail />}/>

        <Route path='/shop/:id' element = {<ProductDetails />}/>

        <Route path='/cart' element = {<Cart />}/>
        <Route path='/cart/update/:id' element = {<UpdateCart />}/> 

        <Route path='/order' element = {<Order />}/>
        <Route path='/order/:id' element = {<OrderDetails />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
