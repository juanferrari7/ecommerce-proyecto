import { Link } from "react-router-dom";

function ProductCard ({product}) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.price}</p>

      <Link
        to={`/product/{product.id}`}
        className="block bg-blue-600 text-white mt-3 py-2 rounded text-center hover:bg-blue-700"
      >
        Ver detalle
      </Link>
    </div>
  )
}