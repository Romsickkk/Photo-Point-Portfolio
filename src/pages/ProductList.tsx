import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Каталог товаров
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 bg-white flex flex-col h-full"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain rounded-t-lg mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold text-blue-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="cursor-pointer mt-auto w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
