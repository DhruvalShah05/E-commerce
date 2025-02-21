import { Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function CardItem() {
  return (
    <div className="p-5 shadow-lg border rounded-md bg-white w-full  mx-3 my-5">
      <div className="flex items-center ">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJx3X2-s9Cl1w_bc8TnEAgTUHlZ0ba4Lt9FmrckzHiEs6s0wlptLsPc8o&s"
            alt="product"
          />
        </div>
        <div className="ml-5 space-y-2">
          <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer">
            Girls T-Shirt
          </h2>
          <p className="text-sm text-gray-600">Size : L, White</p>
          <p className="text-sm text-gray-600 mt-1">Seller : Fashion EXP</p>
          <div className="flex items-center space-x-4 mt-4">
            <p className="text-xl font-semibold text-gray-900">₹199</p>
            <p className="text-sm text-gray-500 line-through">₹211</p>
            <p className="text-sm text-green-600 font-semibold">5% OFF</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton>
            <RemoveCircleIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
        </div>
        <div>
      <Button
        sx={{
          backgroundColor: '#f51414',
          color: 'white',
          fontWeight: 'bold',
          // '&:hover': {
          //   backgroundColor: 'darkred', 
          // },
        }}
      >
        Removed
      </Button>
    </div>
      </div>
    </div>
  );
}

export default CardItem;


