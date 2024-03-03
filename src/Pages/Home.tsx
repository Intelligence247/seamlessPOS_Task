import EachItem from "../Components/EachItem";
import mockData from "../MockData";

const Home = () => {
  return (
    <div className="pt-20">
      <div className="itemContainer grid grid-cols-2 w-[90vw] m-auto gap-2 border-[1px] border-primaryblue p-4 my-4 rounded-lg">
        {mockData.map((m: any, i:number)=> (
        <EachItem
        key={i}
        eachProduct={m} />
        ))}
      </div>
      <div className="newletter bg-[#eff2f4] flex flex-col justify-center items-center py-6">
        <h1 className="font-bold text-2xl">Subscribe on our newsletter</h1>
        <p className="text-black/80 ">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="mailSubscribe flex justify-center items-center gap-3 mt-8">
          <div className="mail h-8 w-[20rem] flex items-center rounded-lg gap-3 bg-white px-2">
            <img src="mail.svg" alt="" />
            <input
              type="text"
              placeholder="Email"
              className="outline-none border-none w-full "
            />
          </div>
          <button className="h-9 bg-primaryblue px-5 text-white rounded-lg w-max">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
