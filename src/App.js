import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Productspage from "./components/Productspage";
import Cartpage from "./components/Cartpage";
import "./App.css";

function App() {
  return (
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productspage />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </div>
  );
}

export default App;
