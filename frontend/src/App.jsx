import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'

function App() {
  return (
    <div className='min-h-screen bg-gray-100 text-white'>
      <BrowserRouter>
        <Navbar />
        <div className='max-w-6xl mx-auto p-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
