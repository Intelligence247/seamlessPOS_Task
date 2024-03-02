import Rating from "../Components/Rating";

const ProductDetail = () => {
  return (
    <div className="pt-20">
      <main className="lg:w-[80vw] m-auto px-4 py-4 border-primaryblue border-[1px] my-4 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="img w-1/4 h-full">
              <img src="/phone1.png" className="w-full h-full" alt="" />
            </div>
            <div className="details flex flex-col gap-5 p-4">
              <p className="text-green-500">✓ in stock</p>
              <h1 className="font-bold">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h1>
              <Rating />
              <div className="discountNumberdependence bg-[#fff0df] flex items-center py-3 justify-around">
                <div className="first flex flex-col ">
                  <p className="text-red-500 font-bold">$98.00</p>
                  <p className="text-xs text-black/50">50-100 pcs</p>
                </div>
                <div className="first flex flex-col border-l-[1px] border-black/50 pl-4">
                  <p className="font-bold">$98.00</p>
                  <p className="text-xs text-black/50">100-700 pcs</p>
                </div>
                <div className="first flex flex-col border-l-[1px] border-black/50 pl-4">
                  <p className="font-bold">$98.00</p>
                  <p className="text-xs text-black/50">700+ pcs</p>
                </div>
              </div>
              <div className="price pb-2 flex gap-12 items-center w-3/4 pr-6 border-b-[1px] border-black/40">
                <p className="text-black/50 w-20">Price:</p>
                <p className="text-black/50">Negotiable</p>
              </div>{" "}
              <div className="price pb-2 flex gap-12 items-center w-3/4 pr-6 border-b-[1px] border-black/40">
                <p className="text-black/50 w-20">Protection:</p>
                <p className="text-black/50">Refund Policy</p>
              </div>{" "}
              <div className="price pb-2 flex gap-12 items-center w-3/4 pr-6 border-b-[1px] border-black/40">
                <p className="text-black/50 w-20">Warranty:</p>
                <p className="text-black/50">2 years full warranty </p>
              </div>
            </div>
          </div>

        <section className="border-[1px] border-black-black/4 py-4 px-6 flex flex-col gap-5">
          <div className="lg:w-3/4">
            <h1 className="text-primaryblue border-b-2 border-b-primaryblue w-max p-1 px-2">Description</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            tenetur repudiandae expedita quam dolore veritatis sequi repellendus
            fugiat provident nemo consectetur nesciunt cum optio officiis
            necessitatibus pariatur eligendi, perferendis ipsum.
          </div>

          <div className="lg:w-3/4">
            <h1 className="text-primaryblue border-b-2 border-b-primaryblue w-max p-1 px-2">Features</h1>
<div className="featureList">
    <ul>
        <li className="flex items-center gap-4"> <span className="text-green-500 border-[1px] border-green-500 h-4 w-4 rounded-sm flex justify-center items-center">✓</span>Good user Interface</li>
        <li className="flex items-center gap-4"> <span className="text-green-500 border-[1px] border-green-500 h-4 w-4 rounded-sm flex justify-center items-center">✓</span>Good user Interface</li>
        <li className="flex items-center gap-4"> <span className="text-green-500 border-[1px] border-green-500 h-4 w-4 rounded-sm flex justify-center items-center">✓</span>Good user Interface</li>
        <li className="flex items-center gap-4"> <span className="text-green-500 border-[1px] border-green-500 h-4 w-4 rounded-sm flex justify-center items-center">✓</span>Good user Interface</li>
    </ul>
</div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
