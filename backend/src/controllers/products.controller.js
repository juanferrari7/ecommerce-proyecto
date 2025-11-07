import { Product } from '../db.js'

export async function getProducts (req, res)  {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
}
export async function createProduct (req, res) {
  const {name, price, description, stock} = req.body
  const product = await Product.create({
    name,
    price,
    description,
    stock
  })
  console.log(product)
  res.send('Product created succesfully')
}

export async function deleteProduct (req, res) {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}