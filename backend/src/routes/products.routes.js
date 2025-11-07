import { Router } from 'express'
import { 
      createProduct,
      getProducts,
      deleteProduct
  } from '../controllers/products.controller.js'
const router = Router()

router.get('/products', getProducts)
router.post('/products', createProduct)
router.delete('/products/:id', deleteProduct)
// router.put('/products/:id', editProduct)
// router.get('/products/:id', getProductById)

export default router