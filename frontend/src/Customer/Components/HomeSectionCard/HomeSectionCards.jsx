import React from "react";

function HomeSectionCards({produts}) {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[14rem] mx-3 ">
      <div className="h-[13rem] w-[10rem]">
        <img
          src={produts.imageUrl}
          alt="image"
          className="object-cover h-full w-full object-top"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{produts.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">
         {produts.title}
        </p>
      </div>
    </div>
  );
}

export default HomeSectionCards;
