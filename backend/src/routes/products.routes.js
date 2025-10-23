import { Router } from 'express'
import { createProduct, deleteProduct, editProduct, getProductById, getProducts } from '../controllers/products.controller.js'
const router = Router()

router.get('/products', getProducts)
router.post('/products', createProduct)
router.put('/products/:id', editProduct)
router.delete('/products/:id', deleteProduct)
router.get('/products/:id', getProductById)

export default router