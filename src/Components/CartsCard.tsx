import { useShoppingCart } from "../Context/Context";
import { formatCurrency } from "./FornatCurrency";
import mockData from "../MockData.json";
import { ToastContainer, toast } from "react-toastify";

type cartcardProps = {
  id: number;
  quantity: number;
};
export default function CartsCard({ id, quantity }: cartcardProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  const item = mockData.find((m) => m.id === id);
  if (item == null) return null;
  const ToastFUn = () => {
    toast.success("Message sent successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className="lg:grid lg:grid-cols-5 flex flex-col lg:h-[9.5rem] h-[21rem] max-h-[22rem] justify-center lg:gap-8 gap-4 border-[1px] lg:border-b-[1px] border-primaryblue p-4 rounded-lg">
      <div className="img lg:w-full w-4/5 m-auto lg:h-full h-2/5 p-2 col-span-1 lg:row-span-0 ro  border-primary_green border-[1px] rounded-lg">
        <img
          onClick={ToastFUn}
          src={item.image}
          className="rounded-lg w-full h-full"
          alt=""
        />
      </div>
      <div className="itemDetails lg:h-full h-2/5 flex flex-col gap-2 col-span-3">
        <h1 className="font-bold">{item.name}</h1>

        <div className="desc">
          <b>Decription:</b> {item.description.slice(0, 65)}...
        </div>
        <div className="flex flex-col">
          <div className="flex lg:w-1/2 lg:justify-between gap-4 lg:gap-0">
            <button
              className="flex justify-center items-center rounded-lg h-8 w-8 bg-gray-300 hover:bg-white hover:border-[1.5px] hover:border-primaryblue/80 text-xl font-bold"
              onClick={() => decreaseCartQuantity(id)}
            >
              -{" "}
            </button>
            <button
              className="bg-red-500 text-white w-max px-4 py-1 rounded-lg"
              onClick={() => (ToastFUn(), removeFromCart(id))}
            >
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
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

      <div className="col-span-1 flex lg:flex-col gap-4 h-1/5 items-center">
        <b>{formatCurrency(item.price)}</b>
        <p className="px-3 rounded-lg py-1 w-max h-max border-black/30 border-[1px]">
          <b>Qty:</b> {quantity}
        </p>
      </div>
    </div>
  );
}
