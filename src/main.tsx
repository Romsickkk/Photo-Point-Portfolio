import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./tailwind.css";
import React, { Suspense } from "react";
import { CartProvider } from "./context/CartContext.tsx";
import { BrowserRouter } from "react-router";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
