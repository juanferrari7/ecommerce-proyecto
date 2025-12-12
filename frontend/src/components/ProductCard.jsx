import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductCard ({product}) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="bg-white text-black rounded-xl shadow-md p-4 hover:shadow-xl transition-transform flex flex-col hover:scale-105">
      <img
        src={`http://localhost:3000/public/${product.image}`}
        alt={product.name}
        className="rounded-lg mb-3 h-48 w-full object-cover"
      />

      <h3 className="text-lg font-semibold mt-3 text-slate-900">{product.name}</h3>
      <p className="text-gray-700 mb-2 text-sm">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-auto w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition cursor-pointer"
      >
        Agregar al carrito
      </button>

      <Link
        to={`/product/${product.id}`}
        className="block bg-blue-600 text-white mt-3 py-2 rounded text-center hover:bg-blue-700"
      >
        Ver detalle
      </Link>
    </div>
  )
}

export default ProductCard