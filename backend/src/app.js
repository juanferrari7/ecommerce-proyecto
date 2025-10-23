import express from 'express'
import productsRoutes from './routes/products.routes.js'

const app = express()
app.use(productsRoutes)

// Ruta de prueba
// app.get('/', async (req, res) => {
//   const products = await Product.findAll()
//   if (products.length > 0) res.json(products)
//   else res.send('No hay productos')
// })

export default app