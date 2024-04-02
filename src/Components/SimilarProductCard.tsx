import { useShoppingCart } from "../Context/Context";
import { formatCurrency } from "./FornatCurrency";

interface EachItemProps {
  eachProduct: any;
}
const SimilarProductCard: React.FC<EachItemProps> = ({ eachProduct }) => {
  const { getItemQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const quantity = getItemQuantity(eachProduct.id);
  return (
    <div className="w-[15rem] grid grid-rows-5 border-[1px] border-black/30 p-3 rounded-lg gap-4">
      <div className="image row-span-3 p-1 grid place-content-center border-[1px] border-primaryblue rounded-lg">
        <img className="w-[12rem] h-[7rem] " src={eachProduct.image} alt="" />
      </div>
      <div className="details row-span-2 flex justify-center items-center gap-2 flex-col">
        <h1 className="font-bold">{eachProduct.name}</h1>
        <div className="price flex items-center gap-4">
          <p className="price font-bold">{formatCurrency(eachProduct.price)}</p>
          <p className="old_price line-through text-sm text-black/60 font-bold">
            {formatCurrency(eachProduct.price + (eachProduct.price * 20) / 100)}
          </p>
        </div>
      </div>
      {quantity == 0 ? (
        <button
          className="border-[1px] w-3/4 m-auto border-primaryblue rounded-2xl px-2  py-1 bg-primaryblue text-white hover:bg-transparent hover:text-black"
          onClick={() => increaseCartQuantity(eachProduct.id)}
        >
          + Add to Cart
        </button>
      ) : (
        <button
          className="bg-red-500 w-3/4 m-auto text-white px-4 py-1 rounded-lg"
          onClick={() => removeFromCart(eachProduct.id)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default SimilarProductCard;
