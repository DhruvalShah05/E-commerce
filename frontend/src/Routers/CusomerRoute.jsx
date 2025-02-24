import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customer/Pages/HomePage/HomePage'
import Footer from '../Customer/Components/Footer/Footer'
import Cards from '../Customer/Components/Card/Cards'
import Navigation from '../Customer/Components/Navigation/Navigation'
import Product from '../Customer/Components/Product/Product'
import Product_details from '../Customer/Components/ProductDetails/Product_details'
import CheckOut from '../Customer/Components/Checkout/CheckOut'
import Order from '../Customer/Components/OrderPage/Order'
import OrderDetails from '../Customer/Components/OrderPage/OrderDetails'

function CusomerRoute() {
  return (
    <div>
        <div className='mb-5'>
            <Navigation/>
        </div>
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='/cart' element={<Cards/>} ></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} />
        <Route path='/:product/:productId' element={<Product_details/>} />
        <Route path='/checkout' element={<CheckOut/>} />
        <Route path='/account/order' element={<Order/>} /> 
        <Route path='/account/order/:orderId' element={<OrderDetails/>} /> 
        
      </Routes>
      <div className='mt-5'>
      <Footer/>
      </div>
    </div>

  )
}

export default CusomerRoute
