import { Router } from 'express'
import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from '../controllers/category.controller.js'
import { getProductsByCategory } from '../controllers/products.controller.js'
import { validateCategory } from '../middlewares/validation.js'
import { handleValidationErrors } from '../middlewares/handleValidation.js'
const router = Router()

router.get('/categories', getCategories)
router.get('/categories/:id', getCategoryById)
router.get('/categories/:id/products', getProductsByCategory)
router.post('/categories', validateCategory, handleValidationErrors, createCategory)
router.put('/categories/:id', updateCategory)
router.delete('/categories/:id', deleteCategory)

export default router;