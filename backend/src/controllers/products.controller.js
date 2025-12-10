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

export async function getProductById(req, res) {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json(error, { error: "Error al obtener el producto" });
  }
}

export async function getProductsByCategory(req, res) {
  try {
    const { id } = req.params;
    const products = await Product.findAll({
      where: { categoryId: id }
      // opcional: include: [{ model: Category, as: "category" }]
    });

    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al obtener productos por categoría" });
  }
}



export async function createProduct (req, res) {
  try {
    const {name, price, description, stock, categoryId} = req.body
    const product = await Product.create({
      name,
      price,
      description,
      stock,
      categoryId
    })
    console.log(product)
    res.send('Producto creado correctamente')
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ error: "Error al crear el producto" });
  }
}

export async function updateProduct (req, res) {
  try {
    const {id} = req.params
    const product = await Product.findByPk(id)

    if(!product) {
      return res.status(404).json({error: "Producto no encontrado"})
    }

    const {name, price, description, stock, categoryId} = req.body

    await product.update({name, price, description, stock, categoryId})

    res.json({message: "Producto actualizado", product})
  } catch (error) {
    res.status(500).json(error, {error: "Error al actualizar el producto"})
  }
}

export async function deleteProduct (req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id)

    if(!product) {
      return res.status(404).json({ error: "Producto no encontrado"})
    }    
    await product.destroy()
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json(error, { error: "Error al eliminar el producto" });
  }
}

