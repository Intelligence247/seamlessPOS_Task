import { useShoppingCart } from "../Context/Context";
import { formatCurrency } from "./FornatCurrency";
import mockData from "../MockData.json";

type cartcardProps = {
  id: number;
  quantity: number;
};
export default function CartsCard({ id, quantity }: cartcardProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  const item = mockData.find((m) => m.id === id);
  if (item == null) return null;
  return (
    <div className="lg:grid grid-cols-5 flex flex-col justify-center gap-8 border-b-[1px] border-b-primaryblue p-4 rounded-lg">
      <div className="img w-full h-full p-2 grid-cols-1">
        <img src="phone1.png" className="rounded-lg lg:h-full lg:w-full w-64" alt="" />
      </div>
      <div className="itemDetails flex flex-col gap-2 col-span-3">
        <h1 className="font-bold">
          {item.name}
        </h1>

        <div className="desc">
          <b>Decription:</b>
          {" "}
          {item.description.slice(
            0,
            65
          )}...
        </div>
        <div className="flex flex-col">
          <div className="flex w-1/2 justify-between">
            <button
              className="flex justify-center items-center rounded-lg h-8 w-8 bg-gray-300 hover:bg-white hover:border-[1.5px] hover:border-primaryblue/80 text-xl font-bold"
              onClick={() => decreaseCartQuantity(id)}
            >
              -{" "}
            </button>
            <button
              className="bg-red-500 text-white w-max px-4 py-1 rounded-lg"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
            <button
              className="flex justify-center items-center rounded-lg h-8 w-8 bg-gray-300 hover:bg-white hover:border-[1.5px] hover:border-primaryblue/80 font-bold"
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-1 flex lg:flex-col gap-4">
        <b>{formatCurrency(item.price)}</b>
        <p className="px-3 rounded-lg py-1 w-max border-black/30 border-[1px]"><b>Qty:</b>{" "} {quantity}</p>
      </div>
      
    </div>
  );
}
