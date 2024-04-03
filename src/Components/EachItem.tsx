import Rating from "./Rating";
import { Link } from "react-router-dom";
import { formatCurrency } from "./FornatCurrency";
import { useShoppingCart } from "../Context/Context";
import { useState } from "react";

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
    getWishQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    increaseWishQuantity,
    removeFromWish,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const wish_quantity = getWishQuantity(id);

  const [color, setColor] = useState<boolean>(true);
  const handleWishClick = () => {
    setColor(!color);
    wish_quantity === 0 ? increaseWishQuantity(id) : removeFromWish(id);
  };
  return (
    <div className="lg:flex grid grid-cols-5 border-[1px] border-black/40 rounded-lg py-2 px-2 gap-6">
      <div className="imgC lg:w-[15rem] col-span-2 rounded-l-lg  h-[12rem] border-primary_green border-[1px]">
        <img
          src={image}
          alt="Product Image"
          className="w-full h-full rounded-l-lg"
        />
      </div>
      <div className="details flex flex-col lg:w-full col-span-3">
        <div className="flex justify-between w-full items-center">
          <h1 className="name font-bold truncate w-2/3">{name}</h1>
          <svg
            onClick={handleWishClick}
            stroke={`${wish_quantity !== 0 ? "#fff" : "#00b517"}`}
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`lg:w-10 w-8 lg:h-10 h-8 lg:p-2 p-1.5 rounded-full false shadow-sm shadow-primary_green cursor-pointer ${
              wish_quantity !== 0
                ? "bg-primaryblue"
                : "bg-white"
            }`}
            height="1em"
            width="1em"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <div className="price flex items-center gap-4">
          <p className="price font-bold"> {formatCurrency(price)}</p>
          <p className="old_price line-through text-sm text-black/60 font-bold">
            {formatCurrency((price + (price * 20) / 100).toFixed(2))}
          </p>
        </div>
        <Rating />
        <div className="desc w-full lg:block hidden">
          {description.slice(0, 110)}...
        </div>
        <div className="addtocart flex lg:gap-4 gap-2 lg:flex-row flex-col lg:w-full w-40">
          <Link
            onClick={() =>
              localStorage.setItem("selectedID", JSON.stringify(id))
            }
            to="/productdetails"
            className="text-primaryblue hover:opacity-70"
          >
            View Details
          </Link>
          <div className="h-16">
            {quantity == 0 ? (
              <button
                className="border-[1px] border-primaryblue rounded-2xl px-2 bg-primaryblue text-white lg:text-[14px] text-xs hover:bg-transparent hover:text-black p-1"
                onClick={() => increaseCartQuantity(id)}
              >
                + Add to Cart
              </button>
            ) : (
              <div className="flex flex-col w-40 items-center">
                <div className="flex justify-between items-center w-full">
                  <button
                    className="flex justify-center items-center rounded-lg h-8 w-8 bg-gray-300 hover:bg-white hover:border-[1.5px] hover:border-primaryblue/80 text-xl font-bold"
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    className="flex justify-center items-center rounded-lg h-8 w-8 bg-gray-300 hover:bg-white hover:border-[1.5px] hover:border-primaryblue/80 font-bold"
                    onClick={() => increaseCartQuantity(id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-red-500 text-white w-max px-4 py-1 rounded-lg"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
