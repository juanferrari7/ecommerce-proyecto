import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [message, setMessage] = useState("")
  const { clearCart } = useContext(CartContext)
  const navigate = useNavigate()

    const handlePurchase = () => {
    if (cart.length === 0) {
      setMessage("Tu carrito está vacío.");
      return;
    }

    // Simular compra
    clearCart();
    alert("¡Compra realizada con éxito! 🎉");
    navigate("/")
  };

  const total = cart.reduce((sum, p) => sum + Number(p.price), 0);

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">Carrito</h1>

      {cart.length === 0 ? (
        <p className="text-gray-300">El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={item.id} className="flex justify-between items-center p-3 border-b border-gray-600">
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <button
                onClick={()=> removeFromCart(item.id)}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
              >
                Eliminar
              </button>

              
            </div>
          ))}

          <h2 className="text-xl font-bold mt- text-gray-500">Total: ${total}</h2>
                    {/* Botones */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handlePurchase}
              className="bg-green-600 w-full text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Comprar
            </button>

            <button
              onClick={clearCart}
              className="bg-gray-700 w-full text-white py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Vaciar carrito
            </button>
            </div>
          </div>
      )}
    </div>
  );
}
