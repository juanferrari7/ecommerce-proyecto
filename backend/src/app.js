import express from 'express'
import productsRoutes from './routes/products.routes.js'
import categoriesRoutes from './routes/categories.routes.js'
import authRoutes from './routes/auth.routes.js'
import cors from 'cors'

const app = express()
// middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))
app.use(express.json())
app.use(express.static("public"))

//rutas
app.use(productsRoutes)
app.use(categoriesRoutes)
app.use(authRoutes)
// Ruta de prueba
// app.get('/', async (req, res) => {
//   const products = await Product.findAll()
//   if (products.length > 0) res.json(products)
//   else res.send('No hay productos')
// })

export default app