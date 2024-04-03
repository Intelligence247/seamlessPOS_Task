import { Link } from "react-router-dom";
import CartsCard from "../Components/CartsCard";
import { formatCurrency } from "../Components/FornatCurrency";
import { useShoppingCart } from "./Context";
import mockData from "../MockData.json"

export default function ShoppingCart() {
  const { cartItems, removeAll } = useShoppingCart();
  const totals = cartItems.reduce((total, cartItem) => {
    const item = mockData.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);
  const Discount = totals * (3 / 100);
  const tax = totals * (1 / 100);
  const finalTotal = totals - Discount + tax;
  return (
    <div className="lg:pt-20 pt-32 lg:px-20 px-4">
      {cartItems.length == 0 || cartItems == null ? (
        <div className="flex justify-center items-center gap-8 flex-col h-[50vh]">
          <h1 className="font-bold lg:text-3xl">Your cart is empty</h1>
          <Link
            to="/"
            className="bg-primaryblue flex items-center text-white gap-4 py-1.5 px-4 rounded-lg w-max"
          >
            <img className="" src="back.svg" alt="" /> <span>Back to shop</span>
          </Link>
        </div>
      ) : (
        <div className="lg:w-[80vw] lg:h-[80vh] grid lg:grid-cols-3 grid-cols-1 m-auto p-4 border-[1px] border-black/30 lg:my-10 rounded-lg lg:gap-y-0 gap-y-8">
          <section className="col-span-2 shadow-lg overflow-x-hidden overflow-y-auto lg:h-[76vh] h-[80vh] pb-8">
            {cartItems.map((cart) => (
              <CartsCard key={cart.id} {...cart} />
            ))}
            <div className="flex w-full lg:px-8 px-2 items-center justify-between mt-8">
              <Link
                to="/"
                className="bg-primaryblue flex items-center text-white gap-4 py-1.5 px-4 rounded-lg w-max"
              >
                <img className="" src="back.svg" alt="" />{" "}
                <span>Back to shop</span>
              </Link>
              <button
                className="border-primaryblue border-[1px] flex items-center gap-4 py-1.5 px-4 rounded-lg w-max"
                onClick={() => removeAll()}
              >
                Remove All
              </button>
            </div>
          </section>

          <aside className="col-span-1 lg:p-4 p-4 lg:mx-6 mx-5 border-[1px] border-black/30 shadow-md h-max rounded-lg">
            <div className="totals flex flex-col gap-6">
              <div className="flex justify-between">
                <b>Subtotal:</b> <p>{formatCurrency(totals)}</p>
              </div>
              <div className="flex justify-between">
                <b>Discount:</b>{" "}
                <p className="text-red-400">{formatCurrency(Discount)}</p>
              </div>
              <div className="flex justify-between">
                <b>Tax:</b>{" "}
                <p className="text-primary_green">{formatCurrency(tax)}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <b>Total:</b>{" "}
                <p className="scale-[1.08] font-bold">
                  {formatCurrency(finalTotal)}
                </p>
              </div>

              <Link onClick={()=> localStorage.setItem("finalTotal", JSON.stringify(finalTotal))} to={"/checkout"} className="h-12 bg-primary_green rounded-lg w-max flex justify-center items-center px-8 py-2 m-auto text-white font-bold">
                Checkout
              </Link>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
