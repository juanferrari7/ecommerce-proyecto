import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Checkout from './pages/Checkout.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='max-w-6xl mx-auto p-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
