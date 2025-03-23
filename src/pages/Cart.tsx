import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, total, increaseQuantity, decreaseQuantity } =
    useCart();
  console.log(cart);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4 font-semibold">Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border p-4 rounded"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-sm text-gray-600">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="cursor-pointer px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="cursor-pointer px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="cursor-pointer ml-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Удалить
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xl font-bold">Итого: ${total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}
