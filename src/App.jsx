import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Footer from "./components/Footer.jsx";
import Shop from "./pages/Shop.jsx";
import Checkout from "./pages/Checkout.jsx";
import { fetchProducts } from "./services/api.js";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Shop products={products} loading={loading} />} />
        <Route path="/checkout" element={<Checkout products={products} />} />
      </Routes>
      <Footer />
      <CartDrawer products={products} />
    </CartProvider>
  );
}
