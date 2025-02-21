import CardItem from "./CardItem";
import { Divider } from "@mui/material";

function CardsC() {
  return (
    <>
      <div className="lg:grid grid-cols-3 lg:px-16 relative ">
        <div className="col-span-2 mx-4">
          <CardItem />
          <CardItem />
          <CardItem />
        </div>

        <div className="py-2 px-5 static top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border ">
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
                <span className="text-green-600">-$50</span>
              </div>
              <div className="flex px-4 justify-between pt-3 text-black">
                <span>Delivery Charges </span>
                <span className="text-green-600"> FREE</span>
              </div>
              <div className="flex px-4 justify-between pt-3 text-black">
                <span>Total Amount </span>
                <span className="text-green-600"> $50</span>
              </div>
            </div>
            <button className="bg-[#773fdf] text-white font-medium py-4 px-3 my-5 w-[90%] rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 mx-3">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsC;
