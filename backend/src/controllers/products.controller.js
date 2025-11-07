import Product from "../models/Product.js"

export async function getProducts (req, res)  {
  const projects = Product.findAll()
  console.log(projects)
  res.send('getting products', projects)
}
export async function createProduct (req, res) {
  const {name, price, description, stock} = req.body
  const product = Product.create({
    name,
    price,
    description,
    stock
  })
  console.log(product)
  res.send('Product created succesfully')
}
export function deleteProduct (req, res) {
  res.send('deleting products')
}
export function editProduct (req, res) {
  res.send('editing products')
}
export function getProductById (req, res) {
  res.send('getting product')
}