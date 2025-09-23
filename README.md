# E-commerce Proyecto

¡¡¡ESTE README FUE CREADO CON CHATGPT, LO TERMINARE DE MODIFICAR CUANDO TERMINE DE PROGRAMAR LA TIENDA ONLINE!!!

🛒 E-commerce para Emprendimiento de Ropa

Proyecto desarrollado como parte de las Prácticas Profesionalizantes.
El objetivo es crear un e-commerce para un emprendimiento que actualmente vende por Instagram, brindándole una tienda online propia con carrito de compras, checkout y panel de administración básico.

🚀 Tecnologías utilizadas

Frontend: React + Vite (o CRA, según uses), HTML, CSS, JavaScript.

Backend: Node.js + Express.

Base de datos: JSON (para prototipo) / PostgreSQL (si lo extendés).

Control de versiones: Git + GitHub.


📂 Estructura del repositorio
ecommerce-proyecto/
│── frontend/          # Aplicación React
│    ├── public/
│    ├── src/
│    ├── package.json
│    └── ...
│
│── backend/           # API con Node + Express
│    ├── src/
│    │    ├── routes/
│    │    ├── controllers/
│    │    ├── models/
│    │    └── server.js
│    ├── package.json
│    └── ...
│
│── README.md
│── .gitignore

⚙️ Instalación y ejecución
1️⃣ Clonar el repositorio
git clone https://github.com/tu-usuario/ecommerce-proyecto.git
cd ecommerce-proyecto

2️⃣ Frontend (React)
cd frontend
npm install
npm run dev   # o npm start si usás CRA


La aplicación estará disponible en http://localhost:5173
 (o el puerto que indique Vite).

3️⃣ Backend (Node + Express)
cd backend
npm install
npm run dev   # usando nodemon


La API estará disponible en http://localhost:3000
.

✨ Funcionalidades principales

Catálogo de productos con categorías y búsqueda.

Carrito de compras con almacenamiento local.

Checkout con formulario de datos del cliente.

Confirmación de compra y guardado de pedidos.

Panel de administración básico (CRUD de productos y gestión de pedidos).

Botón de acceso al Instagram del emprendimiento.

📸 Capturas de pantalla

(Acá podés agregar imágenes de las pantallas principales: home, catálogo, carrito, checkout, admin panel)

📌 Próximas mejoras

Integración con pasarela de pagos (Mercado Pago).

Autenticación de usuarios (clientes y administrador).

Reportes de ventas.

Configuración de dominio propio.

👨‍💻 Autor

Desarrollado por Juan Manuel Ferrari como proyecto de prácticas profesionalizantes – 2025.