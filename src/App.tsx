import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Pages/ProductDetail";
import Footer from "./Components/Footer";
import { ShoppingCartProvider } from "./Context/Context";
import ShoppingCart from "./Context/ShoppingCart";
// import { useEffect } from "react";
// import AOS from "aos"
import CheckOut from "./Pages/CheckOut";

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     disable: false,
  //     duration: 600,
  //     offset: 135,
  //   });
  // }, []);

  return (
    <div className="bg-gray-50 relative ">
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carts" element={<ShoppingCart />} />
          <Route path="/productdetails" element={<ProductDetail />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </ShoppingCartProvider>

      <Footer />
    </div>
  );
}

export default App;
