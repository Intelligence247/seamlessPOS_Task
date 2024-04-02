import { useShoppingCart } from "../Context/Context";
import mockData from "../MockData.json";
import Rating from "./Rating";
type wishcardProps = {
  id: number;
  // quantity: number;
};
export default function WishListCard({ id }: wishcardProps) {
  const {
    increaseCartQuantity,
    removeFromCart,
    getItemQuantity,
    removeFromWish,
  } = useShoppingCart();
  const item = mockData.find((m) => m.id === id);
  if (item == null) return null;
  const quantity = getItemQuantity(id);
  return (
    <div className="flex gap-4 bg-white h-36 border-b-[1px] border-black/30 pb-4">
      <div className="img w-2/5 border-[1px] border-primary_green rounded-lg overflow-hidden">
        <img src={item.image} className="w-full h-full " alt="" />
      </div>
      <div className="details lg:w-2/5 w-[53%] flex flex-col h-full gap-2">
        <div className="nameDelete flex justify-between ">
          <h1 className="w-5/6 truncate font-bold">{item.name}</h1>
          <img
            onClick={() => removeFromWish(id)}
            src="/logo.svg"
            className="w-4"
            alt=""
          />
        </div>
        <Rating />
        <section className="addToCartRemove">
          {quantity == 0 ? (
            <button
              className="border-[1px] w-3/4 m-auto border-primaryblue rounded-2xl px-2  py-1 bg-primaryblue text-white hover:bg-transparent hover:text-black"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add to Cart
            </button>
          ) : (
            <button
              className="bg-red-500 w-3/4  m-auto text-white px-4 py-1 rounded-lg"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
