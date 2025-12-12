import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-600">Productos</h1>
      {products.length === 0 ? (
        <p className="text-gray-300">Cargando productos...</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}

export default Home;
