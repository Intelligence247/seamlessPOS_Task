const Navbar = () => {
    return (
        <div className="h-20 flex items-center lg:px-20 px-4 gap-2 justify-between border-b-[1px] border-b-black/40 fixed bg-white w-full top-0">
            <div className="logo flex items-center "><img src="/logo.png" alt="" /><span className="text-primaryblue/60 text-2xl font-bold">Brand</span></div>
            <div className="search flex border-[1px] border-primaryblue h-8 rounded-lg">
                <input type="text" placeholder="Search" className="rounded-l-lg border-none outline-none px-2 w-80" />
                <select name="" id="" className="px-2 border-x-[1px] border-primaryblue">
                    <option value="">All category</option>
                </select>
                <button className="bg-primaryblue rounded-r-lg px-2 text-white">Search</button>
            </div>
            <div className="cart flex gap-4">
            <div className="each flex flex-col justify-center items-center text-black/50 hover:text-black cursor-pointer">
                    <img src="/Vector.png" alt="" />
                    <p className="text-xs">Profile</p>
                </div>
                <div className="each flex flex-col justify-center items-center text-black/50 hover:text-black cursor-pointer">
                    <img src="/Vector.png" alt="" />
                    <p className="text-xs">Message</p>
                </div>
                <div className="each flex flex-col justify-center items-center text-black/50 hover:text-black cursor-pointer">
                    <img src="/Vector.png" alt="" />
                    <p className="text-xs">Orders</p>
                </div>
                <div className="each flex flex-col justify-center items-center text-black/50 hover:text-black cursor-pointer">
                    <img src="/Vector.png" alt="" />
                    <p className="text-xs">My carts</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
