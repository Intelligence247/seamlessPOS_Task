import FooterCard from "./FooterCard";

const Footer = () => {
  const footerData = {
    About: ["About", "About Us", "Find store", "Categories", "Blogs"],
    Partner: ["Partnership", "About Us", "Find store", "Categories", "Blogs"],
    Information: [
      "Information",
      "Help Center",
      "Money Refund",
      "Shipping",
      "Blogs",
    ],
    For_Users: ["Login", "Register", "Settings", "My Ordwers", "Blogs"],
  };

  return (
    <div className="lg:px-20 px-8 py-10 flex lg:flex-row flex-col gap-8 ">
      <div className="brannd lg:w-1/3 flex flex-col gap-4">
        <div className="logo flex items-center ">
          <img src="/logo.png" className="lg:w-10 w-8" alt="" />
          <span className="text-primaryblue/60 lg:text-2xl text-xl font-bold">Brand</span>
        </div>
        <p>
          Best information about the company gies here but now lorem ipsum is
        </p>
        <div className="socio flex gap-6">
          <img
            className="p-1 rounded-lg w-8 h-8 bg-gray-200 hover:bg-gray-300 cursor-pointer"
            src="/insta.png"
            alt=""
          />
          <img
            className="p-1 rounded-lg w-8 h-8 bg-gray-200 hover:bg-gray-300 cursor-pointer"
            src="/linkedin.png"
            alt=""
          />
          <img
            className="p-1 rounded-lg w-8 h-8 bg-gray-200 hover:bg-gray-300 cursor-pointer"
            src="/twitter.png"
            alt=""
          />
          <img
            className="p-1 rounded-lg w-8 h-8 bg-gray-200 hover:bg-gray-300 cursor-pointer"
            src="/facebook-fill.svg"
            alt=""
          />
        </div>
      </div>
      <div data-aos="fade-up" className="w-full grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-8">
        <FooterCard footerData={footerData.About} />
        <FooterCard footerData={footerData.Partner} />
        <FooterCard footerData={footerData.Information} />
        <FooterCard footerData={footerData.For_Users} />
      </div>
    </div>
  );
};

export default Footer;
