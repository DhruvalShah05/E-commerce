import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
function OrderCard() {
  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl rounded-md border ">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJx3X2-s9Cl1w_bc8TnEAgTUHlZ0ba4Lt9FmrckzHiEs6s0wlptLsPc8o&s"
            />
            <div className="ml-5 space-y-2">
              <p>Girls T-Shirt</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Blue</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹200.00</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ color: "green", width: "15px", height: "15px" }}
                />
                <span className="">Delivered On March 03</span>
              </p>
              <p className="text-xs ">Your Item Has Been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span className="">Expected Delivery On Mar 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;
