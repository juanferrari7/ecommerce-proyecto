import { User } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecreto123"; // cambiá esto en producción

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    // Verificar si ya existe
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: "El email ya está registrado" });
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generar token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // No enviamos password
    res.status(201).json({
      message: "Usuario registrado correctamente",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
}


export async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Buscar usuario
    const user = await User.findOne({ where: { email } });

    if (!user)
      return res.status(404).json({ error: "Usuario no encontrado" });

    // Comparar contraseñas
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(401).json({ error: "Contraseña incorrecta" });

    // Crear token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login exitoso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el login" });
  }
}
