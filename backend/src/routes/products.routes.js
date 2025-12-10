import { Router } from 'express'
import { 
      createProduct,
      getProducts,
      deleteProduct,
      updateProduct,
      getProductById
  } from '../controllers/products.controller.js'
import { validateCreateProduct } from '../middlewares/validation.js'
import { handleValidationErrors } from '../middlewares/handleValidation.js'
const router = Router()

router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.post('/products', validateCreateProduct, handleValidationErrors, createProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

export default router;