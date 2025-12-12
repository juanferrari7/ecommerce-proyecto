import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail () {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/products/$id")
      .then(res => res.json)
      .then(data => setProduct(data))
  },[id])

  if (!product) return <p>Cargando...</p>

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <img 
        src={product.image} 
        alt={product.name}
        className="w-full max-w-md rounded shadow my-4"
      />

      <p className="text-xl">${product.price}</p>

      <button className="bg-green-600 text-white mt-4 px-6 py-2 rounded hover:bg-green-700">
        Agregar al carrito
      </button>
    </div>
  )
}

export default ProductDetail;