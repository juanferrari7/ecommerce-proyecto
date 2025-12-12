import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductDetail () {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(err => console.error(err))
  },[id])

  if (loading) return <p>Cargando...</p>
  if (!product) return <p>Producto no encontrado</p>

  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <Link to="/" className="text-blue-400 hover:underline mb-4 inline-block">
        Volver
      </Link>

      <div className="bg-slate-50 p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-10">
        {/* Imagen */}

        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg mb-3 h-48 w-full object-cover"
        />

        {/* Informacion */}
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-slate-900">{product.name}</h1>

          <p className="text-slate-900 font-bold mt-2">{product.description || "Sin descripcion"}</p>

          <p className="text-lg font-semibold text-slate-900">
            ${product.price}
          </p>

          <button 
            onClick={() => addToCart(product)}
            className="mt-auto w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition cursor-pointer"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;