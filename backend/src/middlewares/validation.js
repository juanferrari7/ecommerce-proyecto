import { body } from 'express-validator';

// Validaciones para el modelo Categoria

export const validateCategory = [
  body("name")
    .notEmpty().withMessage("El nombre es obligatorio")
    .isString().withMessage("Debe ser un texto")
    .isLength({min: 3}).withMessage("Debe tener al menos 3 caracteres")
];

// Validaciones modelo Producto

export const validateCreateProduct = [
  body("name")
    .notEmpty().withMessage("El nombre debe ser obligatorio")
    .isString().withMessage("Debe ser texto"),
    
  body("price")
    .notEmpty().withMessage("El precio es obligatorio")
    .isFloat({ min: 1 }).withMessage("Debe ser mayor a 0"),

  body("description")
    .optional()
    .isString().withMessage("La descripción debe ser texto"),

  body("stock")
    .notEmpty().withMessage("El stock es obligatorio")
    .isInt({ min: 0 }).withMessage("Debe ser un entero >= 0"),

  body("categoryId")
    .notEmpty().withMessage("La categoría es obligatoria")
    .isInt().withMessage("Debe ser un número entero")
]

// Validaciones LOGIN y REGISTER

export const validateLogin = [
  body("email")
    .isEmail().withMessage("Debe ser un email válido"),

  body("password")
    .notEmpty().withMessage("La contraseña es obligatoria")
];

export const validateRegister = [
  body("name").notEmpty().withMessage("El nombre es obligatorio"),
  body("email").isEmail().withMessage("Email inválido"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("La contraseña debe tener al menos 5 caracteres"),
];
