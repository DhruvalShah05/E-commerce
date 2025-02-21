
import CheckOut from "./Customer/Components/Checkout/Checkout"
import Footer from "./Customer/Components/Footer/Footer"
import Navigation from "./Customer/Components/Navigation/Navigation"
import Product from "./Customer/Components/Product/Product"
import Product_details from "./Customer/Components/ProductDetails/Product_details"
import HomePage from "./Customer/Pages/HomePage/HomePage"
import CardsC from "./Customer/Components/Card/CardsC"

function App() {
  return (
   <>
   
   <Navigation/>
   <div className="mb-4">
    {/* <HomePage/> */}
    {/* <Product/> */}
    {/* <Product_details/> */}
    {/* <CardsC/> */}
    <CheckOut />
    </div>
   <Footer/>
   </>
  )
}

export default App;
