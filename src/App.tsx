import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Carts from "./Pages/Carts";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Pages/ProductDetail";
import Footer from "./Components/Footer";
import { ShoppingCartProvider } from "./Context/Context";

function App() {
  return (
    <div className="bg-gray-50 relative ">
      <ShoppingCartProvider>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/productdetails" element={<ProductDetail />} />
      </Routes>
      <Footer />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
