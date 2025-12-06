import Sequelize from 'sequelize'
import dotenv from 'dotenv'

import defineUser from './models/User.js'
import defineProduct from './models/Product.js'
import defineSale from './models/Sale.js'
import defineSaleDetail from './models/SaleDetail.js'
import defineCategory from './models/Category.js'

dotenv.config()
const {DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_DIALECT} = process.env

export const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASS, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    logging: false // apaga los logs de sql
  }
)

// Inicializamos los modelos
const modelDefiners = [defineUser, defineCategory, defineProduct, defineSale, defineSaleDetail]
for (const defineModel of modelDefiners) {
  defineModel(sequelize)
}

// Extraemos los modelos
export const {User, Category, Product, Sale, SaleDetail} = sequelize.models

// Relaciones
User.hasMany(Sale, { foreignKey: "user_id" });
Sale.belongsTo(User, { foreignKey: "user_id" });

Sale.hasMany(SaleDetail, { foreignKey: "sale_id" });
SaleDetail.belongsTo(Sale, { foreignKey: "sale_id" });

Product.hasMany(SaleDetail, { foreignKey: "product_id" });
SaleDetail.belongsTo(Product, { foreignKey: "product_id" });

Category.hasMany(Product, { foreignKey: "categoryId" });
Product.belongsTo(Category, { foreignKey: "categoryId" });
