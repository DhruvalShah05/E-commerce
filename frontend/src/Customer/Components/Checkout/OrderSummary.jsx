import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Divider } from '@mui/material'
import CardItem from '../Card/CardItem'

function OrderSummary() {
  return (
    <div className='py-2'>
      <div className='p-5 shadow-lg rounded-s-md border '>
        <h2>Order Summary</h2>
          <AddressCard/>
      </div>
      <div className="lg:grid grid-cols-3   relative ">
        <div className="col-span-2 mr-3">
          <CardItem />
          <CardItem />
          <CardItem/>
        </div>

        <div className="py-2  static  h-[100vh] ml-3 ">
          <div className="border rounded-md  my-3">
            <p className="uppercase font-bold text-center opacity-60 py-4 ">
              Price Deatils
            </p>
            <Divider />
            <div className="space-y-3 font-semibold">
              <div className="flex px-4 justify-between pt-3 text-black">
                <span>Price </span>
                <span> $100</span>
              </div>
              <div className="flex px-4 justify-between pt-3 text-black">
                <span> Disccount</span>
                <span className="text-green-600">-₹50</span>
              </div>
              <div className="flex px-4 justify-between pt-3 text-black">
                <span>Delivery Charges </span>
                <span className="text-green-600"> FREE</span>
              </div>
              <div className="flex px-4 justify-between pt-3 text-black">
                <span>Total Amount </span>
                <span className="text-green-600"> ₹50</span>
              </div>
            </div>
            <button className="bg-[#773fdf] text-white font-medium py-4 px-3 my-5 w-[90%] rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 mx-3">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
