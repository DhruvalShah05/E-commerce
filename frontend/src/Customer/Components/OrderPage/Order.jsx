import { Grid } from "@mui/material";
import React, { lazy } from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On The Way", value: "on_The_Way" },
  { label: "Delivered", value: "delevered" },
  { label: "Cancdlled", value: "cancdlled" },
  { label: "Returned", value: "returned" },
];

function Order() {
  return (
    <div className=" px-5 lg:px-20 ">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 static top-5">
            <h1 className="font-bold text-lg ">Filter</h1>

            <div className="space-y-4 mt-5">
              <h1 className="font-semibold">ORDER STATUS</h1>
              {orderStatus.map((option) => {
                return (
                  <div className="flex items-center" key={option.value}>
                    <input
                      defaultValue={option.value}
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={option.value}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
        <Grid item xs={9} >
          <div className="space-y-2">{
            [1,1,1,1,1,1,1].map((item) =>
              <OrderCard />
            )
          }
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Order;
