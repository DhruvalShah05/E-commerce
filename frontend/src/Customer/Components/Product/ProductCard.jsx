function ProductCard({ product }) {
  return (
    <div className="w-[14rem] m-3 transition-all cursor-pointer hover:shadow-[0px_54px_55px_rgba(0,0,0,0.25),_0px_-12px_30px_rgba(0,0,0,0.12),_0px_4px_6px_rgba(0,0,0,0.12),_0px_12px_13px_rgba(0,0,0,0.17),_0px_-3px_5px_rgba(0,0,0,0.09)]">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt="Product Image"
        />
      </div>
      <div className=" bg-white border-t-2 p-3 transition-transform duration-300 hover:translate-y-[-1rem]">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p className="">{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">₹{product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountPersent}%</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
