import EachItem from "../Components/EachItem";
import mockData from "../MockData.json";

const Home = () => {
  return (
    <div className="pt-20 lg:px-20 px-4 overflow-x-hidden">
      <div className="itemContainer grid lg:grid-cols-2 grid-cols-1  lg:w-[90vw] m-auto gap-2 border-[1px] border-primaryblue lg:p-4 p-2 my-4 rounded-lg">
        {mockData.map((m: any, i: number) => (
          <EachItem key={i} {...m} />
        ))}
      </div>

      <div className="newletter bg-[#eff2f4] flex flex-col justify-center items-center py-6">
        <h1 className="font-bold lg:text-2xl text-xl">Subscribe on our newsletter</h1>
        <p className="text-black/80 text-center">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="mailSubscribe flex lg:flex-row flex-col justify-center items-center gap-3 mt-8">
          <div className="mail lg:h-10 h-8 lf:w-[20rem] flex items-center rounded-lg gap-3 bg-white px-2">
            <img src="mail.svg" alt="" />
            <input
              type="text"
              placeholder="Email"
              className="outline-none border-none lg:w-96 w-52 "
            />
          </div>
          <button className="h-9 bg-primaryblue px-5 text-white rounded-lg w-max">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
