import EachItem from "../Components/EachItem";
import { useShoppingCart } from "../Context/Context";

const Home = () => {
  const { getSearchResult } = useShoppingCart();
  return (
    <div className="lg:pt-20 pt-32 ">
      <div className="hero bg-[url(/bg.svg)]   bg-no-repeat h-[100vh] bg-cover bg-center gap-8 flex-col mb-10 ">
        <div
          data-aos="fade-up"
          className="lg:w-1/2 w-2/3 flex justify-center h-full flex-col m-auto gap-8"
        >
          <h1 className=" font-semibold lg:text-4xl text-2xl  flex flex-col">
            Latest Trending{" "}
            <p className="lg:text-4xl text-2xl pt-4 font-bold ">
              Electronic Materials
            </p>
          </h1>
          <button className="px-4 py-2 bg-primary_green w-max text-white rounded-lg">
            Learn more
          </button>
        </div>
      </div>
      {getSearchResult().length >= 1 ? (
        <div className="itemContainer lg:mx-20 mx-4  grid lg:grid-cols-2 grid-cols-1 m-auto gap-2 border-[1px] border-primaryblue lg:p-4 p-2 my-4 rounded-lg">
          {getSearchResult().map((m: any, i: number) => (
            <EachItem key={i} {...m} />
          ))}
        </div>
      ) : (
        <div className="h-[50vh] grid lg:w-[90vw] m-auto gap-2 border-[1px] border-primaryblue p-4 rounded-lg place-content-center my-10">
          <h1 className=" lg:text-2xl font-bold">
            Ooops! No Item met the search criteria{" "}
          </h1>
        </div>
      )}

      {/* <div className="itemContainer grid lg:grid-cols-2 grid-cols-1  lg:w-[90vw] m-auto gap-2 border-[1px] border-primaryblue lg:p-4 p-2 my-4 rounded-lg">
        {getSearchResult().map((m: any, i: number) => (
          <EachItem key={i} {...m} />
        ))}
      </div> */}
      <div className="newletter bg-[#eff2f4] flex flex-col justify-center items-center py-6">
        <h1 className="font-bold lg:text-2xl text-xl">
          Subscribe on our newsletter
        </h1>
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
