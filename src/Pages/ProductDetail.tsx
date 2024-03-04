import { useEffect, useState } from "react";
import Rating from "../Components/Rating";
import mockData from "../MockData.json";
import SimilarProductCard from "../Components/SimilarProductCard";
import { formatCurrency } from "../Components/FornatCurrency";
interface Rating {
  id: number;
}

const ProductDetail = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [similar, setSimilarProducts] = useState<any>(null);
  useEffect(() => {
    const selectedID = localStorage.getItem("selectedID");
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

  console.log(similar);

  return (
    <div className="pt-20">
      {selectedProduct === null || selectedProduct.length < 1 ? (
        <div>Nulll value</div>
      ) : (
        <main className="lg:w-[85vw] m-auto px-4 py-4 border-primaryblue border-[1px] my-4 flex flex-col gap-6 h-full">
          <div className="grid grid-cols-3">
            <aside className="col-span-2 flex items-center lg:border-r-[1px] border-black/30">
              <div className="img w-1/3 flex justify-center items-center h-full">
                <img
                  src={selectedProduct.image}
                  className="h-full"
                  alt="Product Image"
                />
              </div>
              <div className="details flex flex-col gap-5 p-4 w-2/3">
                <p className="text-green-500">✓ in stock</p>
                <h1 className="font-bold">{selectedProduct.name}</h1>
                <Rating />
                <div className="discountNumberdependence bg-[#fff0df] flex items-center py-3 justify-around">
                  <div className="first flex flex-col ">
                    <p className="text-red-500 font-bold">
                      
                      {formatCurrency((selectedProduct.price - (selectedProduct.price * 5) / 100))}
                    </p>
                    <p className="text-xs text-black/50">50-100 pcs</p>
                  </div>
                  <div className="first flex flex-col border-l-[1px] border-black/50 pl-4">
                    <p className="font-bold">
                      
                      {(
                        formatCurrency(selectedProduct.price -
                        (selectedProduct.price * 10) / 100
                      ))}
                    </p>
                    <p className="text-xs text-black/50">100-700 pcs</p>
                  </div>
                  <div className="first flex flex-col border-l-[1px] border-black/50 pl-4">
                    <p className="font-bold">
                      
                      {(
                       formatCurrency(selectedProduct.price -
                        (selectedProduct.price * 15) / 100
                      ))}
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
              </div>
            </aside>
            <aside className="Similar flex flex-col justify-start items-center h-[70vh] py-5 overflow-y-auto gap-5 ">
                {similar.map((s:any, i: number)=> (
              <SimilarProductCard
              key={i}
              eachProduct={s}
               />

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
