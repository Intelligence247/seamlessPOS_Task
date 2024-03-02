import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Carts from "./Pages/Carts";
function App() {

  return (
    <div className="bg-gray-50 relative ">

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
    </Router>
  </div>
  )
}

export default App
