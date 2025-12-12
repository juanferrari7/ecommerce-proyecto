import { Link } from "react-router-dom";

function Navbar () {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MiEcommerce
        </Link>

        <div className="flex gap-4">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/checkout" className="hover:underline">Inicio</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;