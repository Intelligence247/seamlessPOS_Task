import { Link } from "react-router-dom";
import { useShoppingCart } from "../Context/Context";
import { useState } from "react";

const Navbar = () => {
  const { cartQuantity } = useShoppingCart();
  const [active, sectActive] = useState(false);
  const { searchTerm, updateSearchTerm } = useShoppingCart();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchTerm(e.target.value);
  };
  return (
    <nav>
      <div className="desktopNav lg:flex hidden h-20 items-center px-20 gap-2 justify-between border-b-[1px] border-b-black/40 fixed bg-white w-full top-0 z-20">
        <Link to={"/"} className="logo flex items-center ">
          <img src="/logo.png" alt="" />
          <span className="text-primaryblue/60 text-2xl font-bold">Brand</span>
        </Link>
        <div className="search flex border-[1px] border-primaryblue h-8 rounded-lg">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-lg border-none outline-none px-2 w-80"
          />
          <select
            name=""
            id=""
            className="px-2 border-x-[1px] border-primaryblue"
          >
            <option value="">All category</option>
          </select>
          <button className="bg-primaryblue rounded-r-lg px-2 text-white">
            Search
          </button>
        </div>
        <div className="cart flex gap-4">
          <div className="each flex flex-col justify-center items-center text-black/50 hover:text-black cursor-pointer">
            <img src="/Vector.png" alt="" />
            <p className="text-sm">Profile</p>
          </div>
          <div className="each flex flex-col justify-center items-center text-black/50 hover:text-black cursor-pointer">
            <img src="/Vector.png" alt="" />
            <p className="text-sm">Message</p>
          </div>
          <div className="each flex flex-col justify-center items-center text-black/50 hover:text-black cursor-pointer">
            <img src="/Vector.png" alt="" />
            <p className="text-sm">Orders</p>
          </div>
          <Link to="/carts">
            <div className="each flex flex-col justify-center items-center text-black/50 hover:text-black cursor-pointer relative">
              <p className="bg-red-400 text-white absolute -top-2 right-0 p-1 rounded-full w-6 h-6 flex justify-center items-center text-xs">
                {cartQuantity}
              </p>
              <img src="/Vector.png" alt="" />
              <p className="text-sm">My carts</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="h-20 px-4 lg:hidden flex w-full justify-between border-b-[1px] border-b-black/30 items-center fixed bg-white shadow-sm ">
        <section className="flex items-center gap-6">
          <div
            onClick={() => sectActive(!active)}
            className="flex flex-col space-y-2 "
          >
            <p className="w-8 h-[2px] bg-black"></p>
            <p className="w-8 h-[2px] bg-black"></p>
            <p className="w-8 h-[2px] bg-black"></p>
          </div>
          <Link to={"/"} className="logo flex items-center ">
            <img src="/logo.png" className="w-8" alt="" />
            <span className="text-primaryblue/60 lg:text-2xl text-xl font-bold">
              Brand
            </span>
          </Link>
        </section>

        <div className="flex gap-6">
          <div className="cart relative">
            <Link to={"/carts"}>
              <img className="w-10" src="cart.svg" alt="" />
            </Link>
            <div className="qty bg-red-400 absolute w-6 h-6 flex justify-center items-center rounded-full -top-2 -right-2 text-white text-xs">
              {cartQuantity}
            </div>
          </div>
          <img className="w-10" src="/Vector.png" alt="" />
        </div>

        <div
          className={`bg-white/60 backdrop-blur-lg ${
            active ? "left-0" : "-left-[70vw]"
          }  top-0 fixed h-screen w-[70vw] z-20 `}
        >
          <header className="w-full py-8 px-4 bg-gray-300 flex flex-col gap-4 items-start">
            <img src="/profile.svg" alt="" />
            <p>Sign in | Register</p>
          </header>
          <section className="py-6 flex flex-col gap-6">
            <Link
              to="/"
              onClick={() => sectActive(!active)}
              className="flex gap-2 hover:text-primaryblue px-4 items-center"
            >
              <img src="/home.svg" alt="" />{" "}
              <span className="text-base">Home</span>
            </Link>
            <Link
              to="/carts"
              onClick={() => sectActive(!active)}
              className="flex gap-2 hover:text-primaryblue px-4 items-center"
            >
              <img src="/cart.svg" alt="" />{" "}
              <span className="text-base">Contact</span>
            </Link>
            <Link
              to="/"
              onClick={() => sectActive(!active)}
              className="flex gap-2 hover:text-primaryblue px-4 items-center"
            >
              <img src="/about.svg" alt="" />{" "}
              <span className="text-base">About</span>
            </Link>
            <Link
              to="/"
              onClick={() => sectActive(!active)}
              className="flex gap-2 hover:text-primaryblue px-4 items-center"
            >
              <img src="/contact.svg" alt="" />{" "}
              <span className="text-base">Contact</span>
            </Link>
          </section>
        </div>
        <div
          onClick={() => sectActive(!active)}
          className={`overlay fixed w-[30%] h-screen top-0 ${
            active ? "left-[70%]" : "-left-[30%]"
          } bg-black/30 backdrop-blur-lg z-20`}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
