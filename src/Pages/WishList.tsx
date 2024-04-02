import { Link } from "react-router-dom";
import WishListCard from "../Components/WishListCard";
import { useShoppingCart } from "../Context/Context";

export default function WishList() {
  const { wishItems, openWish, isOpen } = useShoppingCart();
  function clearLocalStorage() {
    localStorage.clear();
    console.log("localStorage cleared");
  }
  return (
    <div
      className={`${
        isOpen ? "right-0" : "right-full"
      } overflow-y-auto fixed justify-end  top-0 flex z-20`}
    >
      <div
      onClick={openWish}
      
        className={`overlay cursor-pointer ${
          isOpen ? "left-0" : "left-full"
        } h-screen bg-black/20 backdrop-blur-md fixed top-0 lg:w-[60vw] w-[30vw] `}
      ></div>
      <div className="contentss flex flex-col  bg-white lg:w-[40vw] w-[70vw] h-screen shadow-2xl  gap-4">
        <div className="border-black/30 border-b-2 text-xl font-bold text-center py-4 overflow-y-hidden flex items-center justify-end pr-2">
          <div className="flex w-1/2 justify-between">
          <h1 className="">My WishList</h1>
          <img className="w-8 h-8" onClick={openWish} src="./logo.svg" alt="" />
          </div>
        </div>
        {wishItems.length === 0 || wishItems === null ? (
          <div className="flex justify-center items-center gap-8 flex-col h-[50vh]">
            <h1 className="font-bold lg:text-3xl">Your WishList is empty</h1>
            <Link
              to="/"
              onClick={openWish}
              className="bg-primaryblue flex items-center text-white gap-4 py-1.5 px-4 rounded-lg w-max"
            >
              <img className="" src="back.svg" alt="" />{" "}
              <span>Back to shop</span>
            </Link>
          </div>
        ) : (
          <div className="items flex flex-col p-4 overflow-y-auto gap-4 ">
            {wishItems.map((w) => (
              <WishListCard key={w.id} {...w} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
