import { formatCurrency } from "./FornatCurrency";

interface EachItemProps {
  eachProduct: any;
}
const SimilarProductCard: React.FC<EachItemProps> = ({ eachProduct }) => {
  return (
        <div className="h-[15rem] w-[15rem] grid grid-rows-5 border-[1px] border-black/30 p-3 rounded-lg gap-4">
      <div className="image row-span-3 grid place-content-center border-[1px] border-primaryblue rounded-lg">
        <img className="w-[12rem] h-[7rem] " src={eachProduct.image} alt="" />
      </div>
      <div className="details row-span-2 flex justify-center items-center gap-2 flex-col">
        <h1 className="font-bold">{eachProduct.name}</h1>
        <div className="price flex items-center gap-4">
          <p className="price font-bold">{formatCurrency(eachProduct.price)}</p>
          <p className="old_price line-through text-sm text-black/60 font-bold">
         {(formatCurrency(eachProduct.price + (eachProduct.price * 20) / 100))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
