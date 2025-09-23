import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: "products",
      timestamps: true,
      underscored: true,
    }
  );

  return Product;
};
