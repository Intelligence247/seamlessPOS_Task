import { useState } from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { formatCurrency } from "./FornatCurrency";
import { useShoppingCart } from "../Context/Context";

type storeItemProps = {
  id: number;
  name: string;
  price: any;
  image: string;
  description: string;
  additionalDetails: any;
};

export default function EachItem({
  id,
  name,
  price,
  image,
  description,
}: storeItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="flex border-[1px] border-black/40 rounded-lg py-2 gap-6">
      <div className="img w-[20rem]">
        <img
          src={image}
          alt="Product Image"
          className="w-full rounded-l-lg h-full"
        />
      </div>
      <div className="details flex flex-col">
        <p className="name font-bold">{name}</p>
        <div className="price flex items-center gap-4">
          <p className="price font-bold"> {formatCurrency(price)}</p>
          <p className="old_price line-through text-sm text-black/60 font-bold">
            {formatCurrency((price + (price * 20) / 100).toFixed(2))}
          </p>
        </div>
        <Rating />
        <div className="desc w-full">{description.slice(0, 110)}...</div>
        <div className="addtocart flex gap-4">
          <Link
            onClick={() =>
              localStorage.setItem("selectedID", JSON.stringify(id))
            }
            to="/productdetails"
            className="text-primaryblue hover:opacity-70"
          >
            Vie w Details
          </Link>
          <div className="border-[1px] border-primaryblue rounded-2xl px-2 bg-primaryblue text-white lg:text-[14px] text-xs hover:bg-transparent hover:text-black">
            {quantity == 0 ? (
              <button onClick={() => increaseCartQuantity(id)}>
                + Add to Cart
              </button>
            ) : (
              <div>
                <p onClick={() => increaseCartQuantity(id)}>+</p>
                <p>{quantity}</p>
                <p onClick={() => decreaseCartQuantity(id)}>Remove</p>
                <p onClick={() => decreaseCartQuantity(id)}>- </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
