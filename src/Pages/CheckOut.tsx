import { Link } from "react-router-dom";
import { formatCurrency } from "../Components/FornatCurrency";

export default function CheckOut() {
  const PaymentArr = [
    {
      text: "Card number",
      placeholder: "**** **** **** ****",
      type: "text",
    },
    {
      text: "CVV",
      placeholder: "***",
      type: "number",
    },
    {
      text: "Expiration month",
      placeholder: "",
      type: "month",
    },
    {
      text: "Expiration year",
      placeholder: "",
      type: "date",
    },
    {
      text: "First name",
      placeholder: "Enter your firstname...",
      type: "text",
    },
    {
      text: "Last name",
      placeholder: "Enter your lastname...",
      type: "text",
    },
  ];

  const amountTobePaid = localStorage.getItem("finalTotal");

  return (
    <div className="lg:pt-20 pt-32">
      <main className="lg:px-20 px-8 flex flex-col gap-4">
      <Link className="mt-10" to={"/carts"}><img src="/back.svg" className="w-10 h-10 p-2 rounded-full  bg-primaryblue" alt="" /></Link>

        <div className="mt-10">
          <h1 className="lg:text-[3rem] text-[1.5rem] pb-3"> Payment method</h1>
          <p className="text-primaryBlur mt-2">{"Debit card/ credit card"}</p>
        </div>
        <b>
          The total amount you will be sending is{" "}
         <span className="text-primary_green">{formatCurrency(Number(amountTobePaid))}</span>
        </b>
        <div className="userInfo grid lg:grid-cols-3 grid-cols-1 gap-4">
          {PaymentArr.map((r, i) => (
            <div className="first flex flex-col w-full " key={i}>
              <label className="text-[#27272E]" htmlFor="">
                {r.text}
              </label>
              <input
                className="w-full border-[2px] border-primaryBlur rounded-lg h-11 pl-2 "
                placeholder={r.placeholder}
                type={r.type}
              />
            </div>
          ))}
        </div>
        <button className="bg-primaryblue w-max px-12 py-2 rounded-lg text-white lg:text-[1.2rem] text-[1.1rem] mt-10">
          Pay now
        </button>
      </main>
    </div>
  );
}

