import Rating from "./Rating";
import { Link } from "react-router-dom";
import { formatCurrency } from "./FornatCurrency";
import { useShoppingCart } from "../Context/Context";
import "aos/dist/aos.css";


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
    <div
      data-aos="fade-up"
      className="flex border-[1px] border-black/40 rounded-lg py-2 px-2 gap-6"
    >
      <div className="img lg:w-[20rem] w-[10rem]  h-[12rem]">
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
                    -{" "}
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
