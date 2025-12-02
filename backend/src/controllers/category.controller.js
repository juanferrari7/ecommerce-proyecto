import { Category } from "../db.js"

export async function getCategories (req, res) {
  try {
    const categories = await Category.findAll()
    res.status(200).json(categories)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({error: "Error al obtener las categorias"})
  }
}

export async function getCategoryById (req, res) {
  try {
    const {id} = req.params
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ error: "Categoria no encontrada"})
    }

      return res.status(200).json(category)

  } catch (error) {
    console.error(error.message)
    res.status(500).json({ error: "Errror al obtener la categoria"})
  }
}

export async function createCategory (req, res) {
  try {
    const { name } = req.body
    const category = await Category.create({
      name
    })
    console.log(category)
    res.status(201).json({ message: "Categoria creada correctamente", category });

  } catch (error) {
    console.error(error.message)
    res.status(500).json({ error: "Errror al crear la categoria"})
  }
}

export async function updateCategory (req, res) {
  try {
    const {id} = req.params
    const category = await Category.findByPk(id)
    
    if(!category) {
      return res.status(404).json({error: "Categoria no encontrada"})
    }
    const {name} = req.body
    
    await category.update({name})
    
    res.json({message: "Categoria actualizada", category})
  } catch (error) {
    console.error(error.message)
    res.status(500).json({error: "Error al actualizar la categoria"})
  }
}

export async function deleteCategory (req, res) {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id)
    
    if(!category) {
      return res.status(404).json({error: "Categoria no encontrada"})

    }    
    await category.destroy()
    res.json({ message: "Categoria eliminada correctamente" });
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ error: "Error al eliminar la categoría"})
  }
}