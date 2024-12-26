import Footer from "./Customer/Components/Footer/Footer"
import Navigation from "./Customer/Components/Navigation/Navigation"
import Product from "./Customer/Components/Product/Product"
import HomePage from "./Customer/Pages/HomePage/HomePage"


function App() {
  return (
   <>
   
   <Navigation/>
   <div>
    {/* <HomePage/> */}
    <Product/>
    </div>
   <Footer/>
   </>
  )
}

export default App;
