import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { validateLogin, validateRegister } from '../middlewares/validation.js';
import { handleValidationErrors } from '../middlewares/handleValidation.js';

const router = Router();

router.post("/auth/register", validateRegister, handleValidationErrors, register);
router.post("/auth/login", validateLogin, handleValidationErrors, login);

export default router;