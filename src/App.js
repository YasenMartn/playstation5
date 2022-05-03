import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import "./styles/GlobalStyle.css";
import {Routes, Route} from "react-router-dom"
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <>
      <Navbar/>
      <ScrollToTop>
        <Toaster position="bottom-right"  />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/shop" element={<Shop/>} />
          <Route exact path="/products/:id" element={<ProductDetails/>} />
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>
      </ScrollToTop>
     
    </>
  );
}

export default App;
