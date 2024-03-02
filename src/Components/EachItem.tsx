import Rating from "./Rating"
import { Link } from "react-router-dom"

interface EachItemProps {
    productID: any;
    name: string;
    price: number;
    oldPrice: number;
}
const EachItem: React.FC<EachItemProps> = ({ productID, name, price, oldPrice }) => {
    const lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur dolor saepe, esse incidunt sequi, maxime laborum eveniet rem aliquid possimus, quibusdam soluta? Officiis quos beatae ipsam asperiores nam assumenda vel!'
    const handleID = () => {
        localStorage.setItem("selectedID", productID);
    };
    return (
        <div className="flex border-[1px] border-black/40 rounded-lg py-2">
            <div className="img"> 
                <img src="phone2.svg" className="w-full rounded-l-lg" alt="" />
            </div>
            <div className="details flex flex-col">
                <p className="name">Canon Cmera EOS 2000, Black 10x zoom</p>
                <div className="price flex items-center gap-4">
                    <p className="price font-bold">$99.88</p>
                    <p className="old_price line-through text-sm text-black/60 font-bold">{oldPrice}</p>
                </div>
                <Rating />
                <div className="desc w-full">{lorem.slice(0, 110)}...</div>
                <div className="addtocart flex gap-4">
                    <Link
                        onClick={handleID}
                        to="/productdetails" className="text-primaryblue hover:opacity-70">View Details</Link>
                        <button className="border-[1px] border-primaryblue rounded-2xl px-2 bg-primaryblue text-white lg:text-[14px] text-xs hover:bg-transparent hover:text-black">Add to Cart</button>
                        <button>Purchase</button>
                </div>
            </div>
        </div>
    )
}

export default EachItem
