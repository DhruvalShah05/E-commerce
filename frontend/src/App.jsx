
import CheckOut from "./Customer/Components/Checkout/Checkout"
import Footer from "./Customer/Components/Footer/Footer"
import Navigation from "./Customer/Components/Navigation/Navigation"
import Product from "./Customer/Components/Product/Product"
import Product_details from "./Customer/Components/ProductDetails/Product_details"
import HomePage from "./Customer/Pages/HomePage/HomePage"
import CardsC from "./Customer/Components/Card/Cards"
import Order from "./Customer/Components/OrderPage/Order"
import OrderDetails from "./Customer/Components/OrderPage/OrderDetails"
import { Route, Routes } from "react-router-dom"
import CusomerRoute from "./Routers/CusomerRoute"

function App() {
  return (
   <>
   <Routes>
    <Route path="/*" element={<CusomerRoute/>} />
   </Routes>


   
 
   </>
  )
}

export default App;
