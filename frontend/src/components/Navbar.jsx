import { Link } from "react-router-dom";
import logo from "../images/logo.png"

function Navbar () {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg" />
            <span className="text-xl font-semibold text-slate-800">empilcha2.streetwear</span>
          </div>
        </Link>

      <div className="flex gap-6 text-slate-700">
        <a href="/" className="hover:text-sky-500">Productos</a>
        <a href="/cart" className="hover:text-sky-500">Carrito</a>
      </div>
    </nav>
  )
}

export default Navbar;