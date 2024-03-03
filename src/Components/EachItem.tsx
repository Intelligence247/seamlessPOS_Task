import { useState } from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

interface EachItemProps {
  eachProduct: any;
}
const EachItem: React.FC<EachItemProps> = ({ eachProduct }) => {
  
  return (
    <div className="flex border-[1px] border-black/40 rounded-lg py-2 gap-6">
      <div className="img w-[20rem]">
        <img
          src={eachProduct.image}
          alt="Product Image"
          className="w-full rounded-l-lg h-full"
        />
      </div>
      <div className="details flex flex-col">
        <p className="name font-bold">{eachProduct.name}</p>
        <div className="price flex items-center gap-4">
          <p className="price font-bold">${eachProduct.price}</p>
          <p className="old_price line-through text-sm text-black/60 font-bold">
            ${(eachProduct.price + (eachProduct.price * 20) / 100).toFixed(2)}
          </p>
        </div>
        <Rating />
        <div className="desc w-full">
          {eachProduct.description.slice(0, 110)}...
        </div>
        <div className="addtocart flex gap-4">
          <Link
            onClick={() => localStorage.setItem("selectedID", eachProduct.id)}
            to="/productdetails"
            className="text-primaryblue hover:opacity-70"
          >
            View Details
          </Link>
          <button className="border-[1px] border-primaryblue rounded-2xl px-2 bg-primaryblue text-white lg:text-[14px] text-xs hover:bg-transparent hover:text-black">
            Add to Cart
          </button>
          <button>Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default EachItem;
