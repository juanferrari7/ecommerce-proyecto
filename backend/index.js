import app from "./src/app.js";
import { sequelize } from "./src/db.js";

async function main () {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos.');
    await sequelize.sync({alter: true})
    console.log('Tablas sincronizadas')
    app.listen(3000)
    console.log('Server is listening on port', 3000)
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

main()