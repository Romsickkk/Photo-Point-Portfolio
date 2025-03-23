import React from "react";
import { Routes, Route, Link } from "react-router";
import { ProductList } from "./pages/ProductList";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import "./tailwind.css";
const App: React.FC = () => {
  return (
    <CartProvider>
      <nav className="p-4 bg-gray-800 text-white flex justify-between">
        <Link to="/">Каталог</Link>
        <Link to="/cart">Корзина</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
