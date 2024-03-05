import { useEffect, useState } from "react";
import Rating from "../Components/Rating";
import mockData from "../MockData.json";
import SimilarProductCard from "../Components/SimilarProductCard";
import { formatCurrency } from "../Components/FornatCurrency";
import { useShoppingCart } from "../Context/Context";
import { Link } from "react-router-dom";
interface Rating {
  id: number;
}

const ProductDetail = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [similar, setSimilarProducts] = useState<any>(null);
  const {
    getItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const selectedID = localStorage.getItem("selectedID");

  useEffect(() => {
    const foundProduct = mockData.find(
      (product) => product.id === Number(selectedID)
    );
    setSelectedProduct(foundProduct);
    if (foundProduct) {
      const similarItems = mockData.filter(
        (product) =>
          product.additionalDetails.category ===
            foundProduct.additionalDetails.category &&
          product.id !== foundProduct.id
      );
      setSimilarProducts(similarItems);
    }
  }, []);

  const quantity = getItemQuantity(Number(selectedID));
  return (
    <div className="pt-20">
      {selectedProduct == null || selectedProduct == undefined ? (
        <div className="flex justify-center items-center gap-8 flex-col h-[50vh]">
          <h1 className="font-bold lg:text-3xl">
            There's a problem returning the chosen product
          </h1>
          <Link
            to="/"
            className="bg-primaryblue flex items-center text-white gap-4 py-1.5 px-4 rounded-lg w-max"
          >
            <img className="" src="back.svg" alt="" /> <span>Back to shop</span>
          </Link>
        </div>
      ) : (
        <main className="lg:w-[85vw] m-auto px-4 py-4 border-primaryblue border-[1px] my-4 flex flex-col gap-6 h-full">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <aside className="col-span-2 flex items-center lg:flex-row flex-col lg:border-r-[1px] border-black/30">
              <div className="img w-1/3 flex justify-center items-start h-full">
                <img
                  src={selectedProduct.image}
                  className="lg:h-[70%] lg:w-full shadow-xl min-w-64 h-40"
                  alt="Product Image"
                />
              </div>
              <div className="details flex flex-col lg:gap-5 gap-3 lg:p-4 p-2 w-full lg:w-2/3">
                <p className="text-green-500">✓ in stock</p>
                <h1 className="font-bold">{selectedProduct.name}</h1>
                <Rating />
                <div className="discountNumberdependence lg:rounded-none rounded-lg bg-[#fff0df] flex items-center py-3 justify-around">
                  <div className="first flex flex-col ">
                    <p className="text-red-500 font-bold">
                      {formatCurrency(
                        selectedProduct.price -
                          (selectedProduct.price * 5) / 100
                      )}
                    </p>
                    <p className="text-xs text-black/50">50-100 pcs</p>
                  </div>
                  <div className="first flex flex-col border-l-[1px] border-black/50 pl-4">
                    <p className="font-bold">
                      {formatCurrency(
                        selectedProduct.price -
                          (selectedProduct.price * 10) / 100
                      )}
                    </p>
                    <p className="text-xs text-black/50">100-700 pcs</p>
                  </div>
                  <div className="first flex flex-col border-l-[1px] border-black/50 pl-4">
                    <p className="font-bold">
                      {formatCurrency(
                        selectedProduct.price -
                          (selectedProduct.price * 15) / 100
                      )}
                    </p>
                    <p className="text-xs text-black/50">700+ pcs</p>
                  </div>
                </div>
                <div className="price pb-2 flex gap-12 items-center pr-6 border-b-[1px] border-black/40">
                  <p className="text-black/50 w-20">Category:</p>
                  <p className="text-black/50">
                    {selectedProduct.additionalDetails.category}
                  </p>
                </div>
                <div className="price pb-2 flex gap-12 items-center pr-6 border-b-[1px] border-black/40">
                  <p className="text-black/50 w-20">Price:</p>
                  <p className="text-black/50">Negotiable</p>
                </div>
                <div className="price pb-2 flex gap-12 items-center pr-6 border-b-[1px] border-black/40">
                  <p className="text-black/50 w-20">Protection:</p>
                  <p className="text-black/50">Refund Policy</p>
                </div>{" "}
                <div className="price pb-2 flex gap-12 items-center pr-6 border-b-[1px] border-black/40">
                  <p className="text-black/50 w-20">Warranty:</p>
                  <p className="text-black/50">
                    {selectedProduct.additionalDetails.warranty} years full
                    Warranty{" "}
                  </p>
                </div>
                <div className="h-16">
                  {quantity == 0 ? (
                    <button
                      className="border-[1px] border-primaryblue rounded-2xl px-2 bg-primaryblue text-white lg:text-[14px] text-xs hover:bg-transparent hover:text-black p-1"
                      onClick={() => increaseCartQuantity(Number(selectedID))}
                    >
                      + Add to Cart
                    </button>
                  ) : (
                    <div className="flex flex-col w-40 items-center">
                      <div className="flex justify-between items-center w-full">
                        <button
                          className="flex justify-center items-center rounded-lg h-8 w-8 bg-gray-300 hover:bg-white hover:border-[1.5px] hover:border-primaryblue/80 text-xl font-bold"
                          onClick={() =>
                            decreaseCartQuantity(Number(selectedID))
                          }
                        >
                          -{" "}
                        </button>
                        <p>{quantity}</p>
                        <button
                          className="flex justify-center items-center rounded-lg h-8 w-8 bg-gray-300 hover:bg-white hover:border-[1.5px] hover:border-primaryblue/80 font-bold"
                          onClick={() =>
                            increaseCartQuantity(Number(selectedID))
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="bg-red-500 text-white w-max px-4 py-1 rounded-lg"
                        onClick={() => removeFromCart(Number(selectedID))}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </aside>
            <aside className="Similar flex flex-col justify-start items-center h-[90vh] py-5 overflow-y-auto gap-5 shadow-lg lg:border-none border-black/30 border-[1px]">
              <h1 className="lg:text-xl text-lg font-bold text-primaryblue">Related Products</h1>
              <hr className="w-4/5" />
              {similar.map((s: any, i: number) => (
                <SimilarProductCard key={i} eachProduct={s} />
              ))}
            </aside>
          </div>

          <section className="border-[1px] border-black-black/4 py-4 px-6 flex flex-col gap-5">
            <div className="lg:w-3/4">
              <h1 className="text-primaryblue border-b-2 border-b-primaryblue w-max p-1 px-2 mb-3">
                Description
              </h1>
              {selectedProduct.description}
            </div>

            <div className="lg:w-3/4">
              <h1 className="text-primaryblue border-b-2 border-b-primaryblue w-max p-1 px-2 mb-3">
                Features
              </h1>
              <div className="featureList">
                <ul className="flex flex-col gap-4">
                  {selectedProduct.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      {" "}
                      <span className="text-green-500 border-[1px] border-green-500 h-4 w-4 rounded-sm flex justify-center items-center">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
};

export default ProductDetail;
